import { t as e } from "./rolldown-runtime.BB3S47xo.mjs";
import {
  A as t,
  F as n,
  L as r,
  N as i,
  O as a,
  P as o,
  _ as s,
  c,
  j as l,
  l as u,
  o as d,
  s as f,
  v as p,
  w as m,
  y as h,
  z as g,
} from "./react.Cxf1BSD4.mjs";
import { C as _, a as v, r as y, t as b, z as ee } from "./motion.BxtCy6Qp.mjs";
import {
  $ as x,
  A as S,
  E as C,
  Et as w,
  G as T,
  It as E,
  K as D,
  L as O,
  Mt as k,
  N as A,
  Nt as te,
  O as j,
  Ot as ne,
  P as M,
  Tt as re,
  _t as ie,
  a as N,
  at as ae,
  bt as oe,
  d as se,
  dt as ce,
  f as le,
  ft as ue,
  gt as de,
  ht as P,
  j as F,
  jt as I,
  k as L,
  kt as R,
  l as fe,
  m as pe,
  o as z,
  s as B,
  u as V,
  w as H,
  wt as U,
  yt as W,
  z as G,
} from "./framer.DwtIulwr.mjs";
import { i as K, n as me, r as he, t as ge } from "./Bo2HZoBjr.ysB5lyAs.mjs";
import { n as _e, t as q } from "./Kc_VruPtK.TNJgsVmM.mjs";
import { a as J, i as ve, o as Y, r as ye } from "./shared-lib.CQP05-fP.mjs";
import {
  a as be,
  c as xe,
  i as Se,
  n as Ce,
  o as we,
  r as Te,
  s as Ee,
  t as De,
} from "./dXsx8iVCg.B24QAjan.mjs";
import { n as Oe, t as ke } from "./InteractiveASCII_Prod.CfcAmBEK.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./rhzuGFsMS.mTPFT97O.mjs";
import { n as Pe, t as X } from "./FTPd3knIm.sZ-PmHOe.mjs";
import { a as Fe, i as Ie, n as Le, o as Re, r as ze, t as Be } from "./uZRRtWbaF.LXjQgqUe.mjs";
import { i as Ve, n as He, r as Ue, t as We } from "./DceBCnOwO.B9SMLZsp.mjs";
import { n as Ge, t as Ke } from "./P5vT9Lyjc.CTBR89wC.mjs";
import { i as qe, n as Je, r as Ye, t as Xe } from "./JDyypIjWz.qzBAyaF-.mjs";
import { i as Ze, n as Qe, r as $e, t as et } from "./gfNbT0EVI.CeOFpiEW.mjs";
import { i as tt, n as nt, r as rt, t as it } from "./xv81tUXg1.CGM_jtyj.mjs";
import { n as at, r as ot } from "./uWHdr3sGD.LCqC2ega.mjs";
import { n as st, r as ct } from "./augiA20Il.CWS-eeCu.mjs";
function lt(e, t = mt) {
  return t[Math.floor((e / 255) * (t.length - 1))];
}
function ut(e, t, n, r = 80, i = mt, a = !1, o = 0, s = 1, c = `grayscale`, l = `#ffffff`, u = 40) {
  let d = r || 80,
    f = u || 40,
    p = d / t,
    m = Math.floor(t * p),
    h = f,
    g = e.getImageData(0, 0, t, n).data,
    _ = Array(h),
    v = 0.5 + ((s - 1) / 99) * 1.5;
  for (let e = 0; e < h; e++) {
    let r = ``;
    for (let s = 0; s < m; s++) {
      let u = (Math.floor((e / h) * n) * t + Math.floor((s / m) * t)) * 4,
        d = (e) => Math.round(Math.max(0, Math.min(255, e * v + o))),
        f = d(g[u]),
        p = d(g[u + 1]),
        _ = d(g[u + 2]),
        y = Math.round(0.299 * f + 0.587 * p + 0.114 * _),
        b = lt(a ? 255 - y : y, i);
      switch (c) {
        case `rgb`:
          r += `<span style="color: rgb(${f}, ${p}, ${_})">${b}</span>`;
          break;
        case `rgb-quantized`: {
          let e = Math.round(f / 32) * 32,
            t = Math.round(p / 32) * 32,
            n = Math.round(_ / 32) * 32;
          r += `<span style="color: rgb(${e}, ${t}, ${n})">${b}</span>`;
          break;
        }
        case `grayscale-quantized`: {
          let e = Math.round(y / 32) * 32;
          r += `<span style="color: rgb(${e}, ${e}, ${e})">${b}</span>`;
          break;
        }
        case `solid`:
          r += `<span style="color: ${l}">${b}</span>`;
          break;
        default:
          r += b;
      }
    }
    _[e] = r;
  }
  return _.join(`
`);
}
function dt(e, t) {
  return typeof t == `function` ? t(e) : e;
}
function ft(e) {
  let {
      videoFile: t = pt,
      poster: r = ``,
      style: o,
      asciiFont: s = {
        fontSize: `min(max(8px, 1.5vw), 16px)`,
        fontFamily: `monospace`,
        lineHeight: `1.1em`,
      },
      asciiChars: l = mt,
      asciiStyle: d = `standard`,
      asciiColor: f = `#fff`,
      asciiEditFn: m,
      inverse: h = !1,
      filters: _ = {},
      colorMode: v = `grayscale`,
      solidColor: y = `#ffffff`,
      backgroundColor: b = `transparent`,
      borderRadius: x = `8px`,
      playbackRate: S = 1,
      detail: w = 1,
    } = e,
    { brightness: T = 0, contrast: E = 1, blur: D = 0, glow: O = 0 } = _,
    [k, A] = n(``),
    [te, j] = n(!1),
    [ne, M] = n(0),
    [re, ie] = n({ width: 0, height: 0 }),
    [N, ae] = n(!1),
    [oe, se] = n(!1),
    [ce, le] = n(``),
    [ue, de] = n(!1),
    P = a(null),
    F = a(null),
    I = a(null),
    L = a(null),
    R = a(null),
    fe = ee(I, { margin: `0px` }),
    pe = a(T),
    z = a(E),
    B = a(D),
    V = a(v),
    H = a(y),
    U = a(w),
    W = a(S),
    G = a({ width: 0, height: 0 }),
    K = a(80),
    me = a(40),
    he = a(0),
    ge = a(0),
    _e = a(!0),
    q = a(``),
    J = a(0),
    ve = a(!1),
    Y =
      !oe &&
      (C.current() === C.preview ||
        (C.current() === C.canvas && e.showControls) ||
        (g !== void 0 && C.current() !== C.canvas && C.current() !== C.preview)) &&
      (!e.autoPauseWhenHidden || fe),
    ye = a(Y),
    be = () => {
      let e = I.current,
        t = F.current;
      if (!e || !t) return;
      let n = e.offsetWidth || 400,
        r = e.offsetHeight || 300;
      return G.current.width !== n || G.current.height !== r
        ? ((t.width = n), (t.height = r), (G.current = { width: n, height: r }), !0)
        : !1;
    };
  (i(() => {
    pe.current = T;
  }, [T]),
    i(() => {
      z.current = E;
    }, [E]),
    i(() => {
      B.current = D;
    }, [D]),
    i(() => {
      V.current = v;
    }, [v]),
    i(() => {
      H.current = y;
    }, [y]),
    i(() => {
      U.current = w;
    }, [w]),
    i(() => {
      W.current = S;
      let e = P.current;
      e && (e.playbackRate = S);
    }, [S]),
    i(() => {
      if (ye.current === Y) return;
      if (((ye.current = Y), !Y)) {
        de(!1);
        return;
      }
      (se(!1), de(!1));
      let e = P.current;
      e && (e.readyState >= 2 ? e.play().catch(() => {}) : e.load());
    }, [Y]),
    i(() => {
      let e = I.current;
      if (!e) return;
      let t = e.offsetWidth || 400,
        n = e.offsetHeight || 300,
        r = parseFloat(getComputedStyle(e).fontSize) || 12,
        i = `${r}|${w}`;
      if (q.current === i) return;
      q.current = i;
      let a = r * 0.6,
        o = r * parseFloat(s.lineHeight || `1.1`);
      ((K.current = Math.max(10, Math.floor((t / a) * w))),
        (me.current = Math.max(5, Math.floor((n / o) * w))));
    }, [s, w]),
    i(() => {
      _e.current = !0;
      let e = P.current;
      return (
        e && e.readyState >= 2 && (Y ? e.play().catch(() => {}) : e.pause()),
        () => {
          _e.current = !1;
          let e = P.current;
          (e && e.pause(),
            L.current && cancelAnimationFrame(L.current),
            R.current && g !== void 0 && g.cancelIdleCallback && g.cancelIdleCallback(R.current));
        }
      );
    }, [Y]),
    i(() => {
      let t = P.current;
      t &&
        (e.autoPauseWhenHidden
          ? fe
            ? !oe && Y
              ? t.play().catch(() => {})
              : Y || t.pause()
            : (t.pause(), L.current && cancelAnimationFrame(L.current))
          : Y
            ? t.play().catch(() => {})
            : t.pause());
    }, [fe, oe, e.autoPauseWhenHidden, Y]),
    i(() => {
      let e = P.current;
      !e ||
        e.readyState < 2 ||
        (Y && e.paused ? e.play().catch(() => {}) : !Y && !e.paused && e.pause());
    }, [Y]));
  let xe = t;
  i(() => {
    (A(``), M(0), j(!0), le(``), de(!1));
    let e = P.current;
    e && (e.pause(), (e.currentTime = 0), e.load());
  }, [xe]);
  let Se = ((e) => {
    switch (e) {
      case `standard`:
        return `@%#*+=-:. `;
      case `detailed`:
        return `$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^\`'. `;
      case `blocks`:
        return `█▓▒░ `;
      case `simple`:
        return `# `;
      case `dots`:
        return `●◐○ `;
      case `custom`:
        return l;
      default:
        return `@%#*+=-:. `;
    }
  })(d);
  i(() => {
    let t = P.current,
      n = F.current;
    if (!t || !n) return;
    let r = !1;
    t.src !== xe && ((t.src = xe), t.load(), de(!1), le(``));
    function i(n, r, i) {
      let a = t.videoWidth,
        o = t.videoHeight;
      (n.clearRect(0, 0, r, i), (n.filter = B.current > 0 ? `blur(${B.current}px)` : `none`));
      let s = e.videoObjectFit || `contain`,
        c = a / o,
        l = r / i;
      if (s === `fill`) n.drawImage(t, 0, 0, r, i);
      else if (s === `contain`) {
        let e, a, o, s;
        (c > l
          ? ((e = r), (a = r / c), (o = 0), (s = (i - a) / 2))
          : ((a = i), (e = i * c), (o = (r - e) / 2), (s = 0)),
          n.drawImage(t, o, s, e, a));
      } else if (s === `cover`) {
        let e = 0,
          s = 0,
          u = a,
          d = o;
        (c > l
          ? ((d = o), (u = o * l), (e = (a - u) / 2))
          : ((u = a), (d = a / l), (s = (o - d) / 2)),
          n.drawImage(t, e, s, u, d, 0, 0, r, i));
      } else if (s === `scale-down`) {
        let e = Math.min(1, Math.min(r / a, i / o)),
          s = a * e,
          c = o * e;
        ((n.fillStyle = `#000`),
          n.fillRect(0, 0, r, i),
          n.drawImage(t, (r - s) / 2, (i - c) / 2, s, c));
      } else
        s === `none` &&
          ((n.fillStyle = `#000`),
          n.fillRect(0, 0, r, i),
          n.drawImage(t, (r - a) / 2, (i - o) / 2, a, o));
    }
    function a(e, t, n) {
      return dt(
        ut(e, t, n, K.current, Se, h, pe.current, z.current, V.current, H.current, me.current),
        m
      );
    }
    function o() {
      if ((e.autoPauseWhenHidden && !fe) || r) return;
      let t = performance.now();
      if (t - he.current < ht) {
        L.current = requestAnimationFrame(o);
        return;
      }
      ((he.current = t), c());
    }
    function c() {
      if (r || !_e.current) return;
      if (t.videoWidth === 0 || t.videoHeight === 0) {
        L.current = requestAnimationFrame(o);
        return;
      }
      be();
      let e = n.getContext(`2d`, { willReadFrequently: !0 }),
        { width: s, height: c } = G.current;
      i(e, s, c);
      let l = performance.now();
      if (l - J.current >= ht && !ve.current) {
        ((ve.current = !0), (J.current = l));
        let t = () => {
          if (!_e.current) {
            ve.current = !1;
            return;
          }
          let t = a(e, s, c);
          (p(() => A(t)), (ve.current = !1));
        };
        g !== void 0 && g.requestIdleCallback
          ? (R.current = g.requestIdleCallback(t, { timeout: gt }))
          : setTimeout(t, 0);
      }
      L.current = requestAnimationFrame(o);
    }
    function l() {
      ((r = !1),
        ae(!0),
        (he.current = performance.now()),
        (ge.current = 0),
        (L.current = requestAnimationFrame(o)));
    }
    function u() {
      ((r = !0), ae(!1), L.current && cancelAnimationFrame(L.current));
    }
    function d() {
      if (t.buffered.length > 0 && t.duration > 0) {
        let e = t.buffered.end(t.buffered.length - 1);
        M(Math.round((e / t.duration) * 100));
      }
    }
    function f() {
      if ((j(!1), M(100), (t.playbackRate = W.current), t.videoWidth === 0 || t.videoHeight === 0))
        return;
      let e = () => {
        be();
        let e = n.getContext(`2d`, { willReadFrequently: !0 }),
          { width: t, height: r } = G.current;
        (i(e, t, r), le(a(e, t, r)), de(!0));
      };
      (t.pause(), (t.currentTime = 0));
      let r = () => {
        (e(), t.removeEventListener(`seeked`, r), Y && t.play().catch(() => {}));
      };
      t.addEventListener(`seeked`, r);
    }
    let _,
      v = new ResizeObserver(() => {
        (_ && clearTimeout(_),
          (_ = setTimeout(() => {
            let e = be(),
              r = I.current;
            if (r) {
              let e = r.offsetWidth || 400,
                t = r.offsetHeight || 300,
                n = parseFloat(getComputedStyle(r).fontSize) || 12,
                i = n * 0.6,
                a = n * parseFloat(s.lineHeight || `1.1`);
              ((K.current = Math.max(10, Math.floor((e / i) * U.current))),
                (me.current = Math.max(5, Math.floor((t / a) * U.current))));
            }
            if (e && t.readyState >= 2 && t.videoWidth > 0 && t.videoHeight > 0) {
              let e = n.getContext(`2d`, { willReadFrequently: !0 }),
                { width: t, height: r } = G.current;
              i(e, t, r);
              let o = a(e, t, r);
              p(() => {
                (A(o), le(o));
              });
            }
          }, 16)));
      });
    return (
      I.current && v.observe(I.current),
      t.addEventListener(`play`, l),
      t.addEventListener(`pause`, u),
      t.addEventListener(`progress`, d),
      t.addEventListener(`loadeddata`, f),
      () => {
        ((r = !0),
          L.current && cancelAnimationFrame(L.current),
          v.disconnect(),
          t.removeEventListener(`play`, l),
          t.removeEventListener(`pause`, u),
          t.removeEventListener(`progress`, d),
          t.removeEventListener(`loadeddata`, f));
      }
    );
  }, [xe, Se, m, h, Y, e.videoObjectFit, e.showControls, T, E, D, w, v, y]);
  function Ce() {
    Y && ((P.current.currentTime = 0), P.current.play());
  }
  let we = v === `grayscale`,
    Te = N || Y ? k : ce,
    Ee = s.fontSize || `min(max(8px, 1.5vw), 16px)`,
    De = w === 1 ? Ee : `calc((${Ee}) / ${w})`,
    Oe = O > 0 ? `0 0 ${O}px currentColor, 0 0 ${O * 2}px currentColor` : `none`;
  return u(`div`, {
    ref: I,
    style: {
      ...o,
      width: `100%`,
      height: `100%`,
      color: `#fff`,
      backgroundColor: b,
      fontFamily: s.fontFamily || `monospace`,
      fontSize: s.fontSize || `min(max(8px, 1.5vw), 16px)`,
      lineHeight: s.lineHeight || `1.1em`,
      overflow: `hidden`,
      borderRadius: x,
      position: `relative`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      cursor: `default`,
    },
    children: [
      c(`video`, {
        ref: P,
        src: xe,
        poster: r || void 0,
        style: { display: `none`, objectFit: e.videoObjectFit || `contain` },
        loop: !0,
        muted: !0,
        playsInline: !0,
        preload: `auto`,
        onEnded: Ce,
        crossOrigin: `anonymous`,
      }),
      c(`canvas`, { ref: F, style: { display: `none` } }),
      c(`pre`, {
        style: {
          margin: 0,
          padding: 0,
          width: `100%`,
          height: `100%`,
          whiteSpace: `pre`,
          userSelect: `none`,
          pointerEvents: `auto`,
          fontFamily: s.fontFamily || `monospace`,
          fontSize: De,
          lineHeight: s.lineHeight || `1.1em`,
          color: we ? f : `inherit`,
          textShadow: Oe,
          overflow: `hidden`,
        },
        "aria-label": `ASCII video preview`,
        dangerouslySetInnerHTML: we ? void 0 : { __html: Te },
        children: we ? Te : null,
      }),
    ],
  });
}
var pt,
  mt,
  ht,
  gt,
  _t = e(() => {
    (r(),
      d(),
      m(),
      x(),
      b(),
      (pt = `https://framerusercontent.com/assets/N8kdPg4NGcfXFjPp8nHYC3oaU.mp4`),
      (mt = `@%#*+=-:. `),
      (ht = 1e3 / 29),
      (gt = 16),
      M(ft, {
        videoFile: { type: B.File, allowedFileTypes: [`mp4`, `webm`, `mov`], title: `Video File` },
        poster: {
          type: B.Image,
          title: `Poster`,
          description: `Shown as a fallback while the video is loading`,
        },
        videoObjectFit: {
          type: B.Enum,
          title: `Type`,
          options: [`contain`, `cover`, `fill`, `scale-down`, `none`],
          optionTitles: [`Contain`, `Cover`, `Fill`, `Scale Down`, `None`],
          defaultValue: `contain`,
        },
        showControls: {
          type: B.Boolean,
          title: `Preview`,
          defaultValue: !0,
          enabledTitle: `On`,
          disabledTitle: `Off`,
        },
        autoPauseWhenHidden: {
          type: B.Boolean,
          title: `Offscreen`,
          defaultValue: !0,
          enabledTitle: `Pause`,
          disabledTitle: `Play`,
        },
        playbackRate: {
          type: B.Number,
          title: `Speed`,
          defaultValue: 1,
          min: 0.25,
          max: 4,
          step: 0.25,
          unit: `x`,
          displayStepper: !0,
        },
        backgroundColor: { type: B.Color, title: `Background`, defaultValue: `transparent` },
        borderRadius: { type: B.BorderRadius, title: `Radius`, defaultValue: `8px` },
        colorMode: {
          type: B.Enum,
          title: `Color Mode`,
          options: [`grayscale`, `grayscale-quantized`, `rgb`, `rgb-quantized`, `solid`],
          optionTitles: [
            `Grayscale`,
            `Grayscale (Quantized)`,
            `RGB`,
            `RGB (Quantized)`,
            `Solid Color`,
          ],
          defaultValue: `grayscale`,
        },
        solidColor: {
          type: B.Color,
          title: `Solid Color`,
          defaultValue: `#ffffff`,
          hidden: ({ colorMode: e }) => e !== `solid`,
        },
        asciiStyle: {
          type: B.Enum,
          title: `Style`,
          options: [`standard`, `detailed`, `blocks`, `simple`, `dots`, `custom`],
          optionTitles: [`Standard`, `Detailed`, `Blocks`, `Simple`, `Dots`, `Custom`],
          defaultValue: `standard`,
        },
        asciiChars: {
          type: B.String,
          title: `Custom Chars`,
          defaultValue: `@%#*+=-:. `,
          placeholder: `Enter ASCII characters...`,
          hidden: ({ asciiStyle: e }) => e !== `custom`,
        },
        detail: {
          type: B.Number,
          title: `Detail`,
          defaultValue: 1,
          min: 0.25,
          max: 2,
          step: 0.05,
          description: `Density of the ASCII grid`,
        },
        asciiFont: {
          type: B.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `monospace`,
          defaultValue: { fontSize: `min(max(8px, 1.5vw), 16px)`, lineHeight: `1.1em` },
        },
        asciiColor: {
          type: B.Color,
          title: `Color`,
          defaultValue: `#fff`,
          hidden: ({ colorMode: e }) => e !== `grayscale`,
        },
        inverse: {
          type: B.Boolean,
          title: `Inverse`,
          defaultValue: !1,
          enabledTitle: `On`,
          disabledTitle: `Off`,
          hidden: !1,
        },
        filters: {
          type: B.Object,
          title: `Filters`,
          controls: {
            brightness: {
              type: B.Number,
              title: `Brightness`,
              defaultValue: 0,
              min: -100,
              max: 100,
              step: 1,
            },
            contrast: {
              type: B.Number,
              title: `Contrast`,
              defaultValue: 1,
              min: 1,
              max: 100,
              step: 1,
            },
            blur: {
              type: B.Number,
              title: `Blur`,
              defaultValue: 0,
              min: 0,
              max: 20,
              step: 0.5,
              unit: `px`,
            },
            glow: {
              type: B.Number,
              title: `Glow`,
              defaultValue: 0,
              min: 0,
              max: 20,
              step: 0.5,
              unit: `px`,
            },
          },
        },
      }));
  });
function vt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt = e(() => {
    (d(),
      x(),
      b(),
      m(),
      Y(),
      (yt = [`c1zN2Q_tk`, `U667MgtoG`]),
      (bt = `framer-5YpTP`),
      (xt = { c1zN2Q_tk: `framer-v-1ixu5zt`, U667MgtoG: `framer-v-1pc7j1c` }),
      (St = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ct = (e, t) => `translateX(-50%) ${t}`),
      (wt = ({ value: e, children: n }) => {
        let r = t(v),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(v.Provider, { value: a, children: n });
      }),
      (Tt = { Blur: `c1zN2Q_tk`, Visible: `U667MgtoG` }),
      (Et = _.create(o)),
      (Dt = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        tmWVwMCTj: n ?? i.tmWVwMCTj ?? `The AI`,
        variant: Tt[i.variant] ?? i.variant ?? `c1zN2Q_tk`,
      })),
      (Ot = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (kt = R(
        s(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = h(),
            { activeLocale: s, setLocale: l } = W();
          ue();
          let { style: d, className: f, layoutId: p, variant: m, tmWVwMCTj: g, ...v } = Dt(e),
            {
              baseVariant: b,
              classNames: ee,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: k,
            } = ne({
              cycleOrder: yt,
              defaultVariant: `c1zN2Q_tk`,
              ref: r,
              variant: m,
              variantClassNames: xt,
            }),
            A = Ot(e, k),
            te = O(bt, ye);
          return c(y, {
            id: p ?? i,
            children: c(Et, {
              animate: k,
              initial: !1,
              children: c(wt, {
                value: St,
                children: u(_.div, {
                  ...v,
                  ...C,
                  className: O(te, `framer-1ixu5zt`, f, ee),
                  "data-framer-name": `Blur`,
                  layoutDependency: A,
                  layoutId: `c1zN2Q_tk`,
                  ref: r,
                  style: { filter: `blur(5px)`, WebkitFilter: `blur(5px)`, ...d },
                  variants: { U667MgtoG: { filter: `blur(0px)`, WebkitFilter: `blur(0px)` } },
                  ...vt({ U667MgtoG: { "data-framer-name": `Visible` } }, b, w),
                  children: [
                    c(_.div, {
                      className: `framer-a1wpds`,
                      layoutDependency: A,
                      layoutId: `FgrOgfo9z`,
                      style: {
                        backgroundColor: `var(--token-285ef153-d569-42f5-b925-84d6d4b8fa63, rgb(0, 0, 0))`,
                      },
                      transformTemplate: Ct,
                    }),
                    c(S, {
                      className: `framer-9ro4jv`,
                      layoutDependency: A,
                      layoutId: `ag8KYWboZ`,
                      requiresOverflowVisible: !0,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 49.5" overflow="visible"><path d="M 0 0 L 0 49.5" fill="transparent" stroke="rgb(0, 0, 0)"></path></svg>`,
                      withExternalLayout: !0,
                    }),
                    c(L, {
                      __fromCanvasComponent: !0,
                      children: c(o, {
                        children: c(_.p, {
                          className: `framer-styles-preset-1i4fe7d`,
                          "data-styles-preset": `NbDFs5rgP`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                          },
                          children: `The AI`,
                        }),
                      }),
                      className: `framer-icnkjo`,
                      fonts: [`Inter`],
                      layoutDependency: A,
                      layoutId: `bzqkX7Zbl`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: g,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-5YpTP.framer-1owq0i9, .framer-5YpTP .framer-1owq0i9 { display: block; }`,
          `.framer-5YpTP.framer-1ixu5zt { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-5YpTP .framer-a1wpds { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); left: 50%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -6px; width: 12px; z-index: 1; }`,
          `.framer-5YpTP .framer-9ro4jv { height: 50px; position: relative; width: 1px; }`,
          `.framer-5YpTP .framer-icnkjo { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...ve,
        ],
        `framer-5YpTP`
      )),
      (At = kt),
      (kt.displayName = `Tag Tooltip`),
      (kt.defaultProps = { height: 72, width: 40.5 }),
      M(kt, {
        variant: {
          options: [`c1zN2Q_tk`, `U667MgtoG`],
          optionTitles: [`Blur`, `Visible`],
          title: `Variant`,
          type: B.Enum,
        },
        tmWVwMCTj: { defaultValue: `The AI`, displayTextArea: !1, title: `Title`, type: B.String },
        ontmWVwMCTjChange: { changes: `tmWVwMCTj`, type: B.ChangeHandler },
      }),
      A(
        kt,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...D(J),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt = e(() => {
    (d(),
      x(),
      m(),
      (Mt = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-72a59867-6fb7-4e45-af48-7fdda01d52cf, rgb(255, 255, 255))" height="47px" id="NbCppSMkD" transform="translate(0 0)" width="47px"/><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-72a59867-6fb7-4e45-af48-7fdda01d52cf, rgb(255, 255, 255))" height="47px" id="KNGYTKvj9" transform="translate(53 0)" width="47px"/><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-72a59867-6fb7-4e45-af48-7fdda01d52cf, rgb(255, 255, 255))" height="47px" id="ibyOuE7RU" transform="translate(53 53)" width="47px"/><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-72a59867-6fb7-4e45-af48-7fdda01d52cf, rgb(255, 255, 255))" height="47px" id="lgucX5Cuu" transform="translate(0 53)" width="47px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Nt = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? c(_.div, { ...a, layoutId: r, ref: t }) : c(`div`, { ...a, ref: t });
      })),
      (Pt = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Ft = R(
        s(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, ...o } = Pt(e);
          return c(Nt, {
            ...o,
            className: O(`framer-Wrudj`, r),
            layoutId: i,
            ref: t,
            style: { ...n },
          });
        }),
        [
          `.framer-Wrudj { -webkit-mask: ${Mt}; aspect-ratio: 1; background-color: var(--token-72a59867-6fb7-4e45-af48-7fdda01d52cf, #ffffff); mask: ${Mt}; width: 100px; }`,
        ],
        `framer-Wrudj`
      )),
      (Ft.displayName = `Logo White`),
      (It = Ft));
  });
function Rt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en = e(() => {
    (d(),
      x(),
      b(),
      m(),
      xe(),
      Lt(),
      Pe(),
      (zt = T(X)),
      (Bt = T(It)),
      (Vt = [`Rz3JuSc6N`, `yKTU0IAET`, `YQHffT1iJ`]),
      (Ht = `framer-MwHkk`),
      (Ut = {
        Rz3JuSc6N: `framer-v-1wqdaha`,
        yKTU0IAET: `framer-v-4ukvs`,
        YQHffT1iJ: `framer-v-oxg8u`,
      }),
      (Wt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Gt = (e, t) => `translate(-50%, -50%) ${t}`),
      (Kt = (e, t) => `translateY(-50%) ${t}`),
      (qt = ({ value: e, children: n }) => {
        let r = t(v),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(v.Provider, { value: a, children: n });
      }),
      (Jt = { "Bottom Small": `YQHffT1iJ`, "Small Top": `yKTU0IAET`, Large: `Rz3JuSc6N` }),
      (Yt = _.create(o)),
      (Xt = ({ height: e, id: t, title1: n, title2: r, title3: i, title4: a, width: o, ...s }) => ({
        ...s,
        knFpBuDfo: n ?? s.knFpBuDfo ?? `Customer Support Agents`,
        ky6f7sFMK: a ?? s.ky6f7sFMK ?? `Strategic AI Infra Audits`,
        toKKbHeGB: r ?? s.toKKbHeGB ?? `Automated Data Pipelines`,
        variant: Jt[s.variant] ?? s.variant ?? `Rz3JuSc6N`,
        WwMLgqbB0: i ?? s.WwMLgqbB0 ?? `Secure Enterprise Data`,
      })),
      (Zt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qt = R(
        s(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = h(),
            { activeLocale: s, setLocale: l } = W(),
            d = ue(),
            {
              style: f,
              className: p,
              layoutId: m,
              variant: g,
              knFpBuDfo: v,
              toKKbHeGB: b,
              WwMLgqbB0: ee,
              ky6f7sFMK: x,
              ...S
            } = Xt(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: k,
              setGestureState: A,
              setVariant: te,
              variants: j,
            } = ne({
              cycleOrder: Vt,
              defaultVariant: `Rz3JuSc6N`,
              ref: r,
              variant: g,
              variantClassNames: Ut,
            }),
            M = Zt(e, j),
            re = O(Ht, be),
            ie = () => ![`yKTU0IAET`, `YQHffT1iJ`].includes(C),
            ae = () => C !== `yKTU0IAET`,
            oe = () => C !== `YQHffT1iJ`;
          return c(y, {
            id: m ?? i,
            children: c(Yt, {
              animate: j,
              initial: !1,
              children: c(qt, {
                value: Wt,
                children: u(_.div, {
                  ...S,
                  ...E,
                  className: O(re, `framer-1wqdaha`, p, w),
                  "data-framer-name": `Large`,
                  layoutDependency: M,
                  layoutId: `Rz3JuSc6N`,
                  ref: r,
                  style: { ...f },
                  ...Rt(
                    {
                      yKTU0IAET: { "data-framer-name": `Small Top` },
                      YQHffT1iJ: { "data-framer-name": `Bottom Small` },
                    },
                    C,
                    D
                  ),
                  children: [
                    c(_.div, {
                      className: `framer-1m24cko`,
                      "data-framer-name": `Main Line`,
                      layoutDependency: M,
                      layoutId: `e8unk_R7j`,
                      style: {
                        backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                      },
                      children:
                        ie() &&
                        c(N, {
                          height: 25,
                          y: (d?.y || 0) + (0 + ((d?.height || 350) - 0 - 3) / 2) + -11.5,
                          children: c(F, {
                            className: `framer-d1bxhl-container`,
                            layoutDependency: M,
                            layoutId: `O4zYtiF3h-container`,
                            nodeId: `O4zYtiF3h`,
                            rendersWithMotion: !0,
                            scopeId: `iCGEjOfWg`,
                            transformTemplate: Gt,
                            children: c(X, {
                              height: `100%`,
                              id: `O4zYtiF3h`,
                              KPDdVnbJ9: `Stackgrid`,
                              layoutId: `O4zYtiF3h`,
                              width: `100%`,
                            }),
                          }),
                        }),
                    }),
                    u(_.div, {
                      className: `framer-1ych1ut`,
                      "data-framer-name": `Main Node`,
                      layoutDependency: M,
                      layoutId: `tF4_6Vcs2`,
                      style: {
                        backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                      },
                      children: [
                        ae() &&
                          c(_.div, {
                            className: `framer-juils0`,
                            "data-framer-name": `Solution 4`,
                            layoutDependency: M,
                            layoutId: `c6MQKJqGX`,
                            style: {
                              backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                              rotate: 28,
                            },
                            variants: { YQHffT1iJ: { rotate: -100 } },
                            children: c(_.div, {
                              className: `framer-4c4946`,
                              "data-framer-name": `Node`,
                              layoutDependency: M,
                              layoutId: `YFbBZoLW3`,
                              style: {
                                backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                                borderBottomLeftRadius: `100%`,
                                borderBottomRightRadius: `100%`,
                                borderTopLeftRadius: `100%`,
                                borderTopRightRadius: `100%`,
                                rotate: -28,
                              },
                              transformTemplate: Gt,
                              variants: { YQHffT1iJ: { rotate: 100 } },
                              children: c(_.div, {
                                className: `framer-1ofpln5`,
                                "data-framer-name": `Title`,
                                layoutDependency: M,
                                layoutId: `wPGe1KnBk`,
                                transformTemplate: Kt,
                                children: c(L, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(_.p, {
                                      className: `framer-styles-preset-79bu04`,
                                      "data-styles-preset": `GMp6ZDbq7`,
                                      dir: `auto`,
                                      children: `Strategic AI Infra Audits`,
                                    }),
                                  }),
                                  className: `framer-nx0ndo`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `VmtSGAjYG`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: x,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          }),
                        ae() &&
                          c(_.div, {
                            className: `framer-oj3cfr`,
                            "data-framer-name": `Solution 3`,
                            layoutDependency: M,
                            layoutId: `fJnHDUGqG`,
                            style: {
                              backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                              rotate: 8,
                            },
                            variants: { YQHffT1iJ: { rotate: -66 } },
                            children: c(_.div, {
                              className: `framer-111datn`,
                              "data-framer-name": `Node`,
                              layoutDependency: M,
                              layoutId: `YXjd3DOo4`,
                              style: {
                                backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                                borderBottomLeftRadius: `100%`,
                                borderBottomRightRadius: `100%`,
                                borderTopLeftRadius: `100%`,
                                borderTopRightRadius: `100%`,
                                rotate: -8,
                              },
                              transformTemplate: Gt,
                              variants: { YQHffT1iJ: { rotate: 66 } },
                              children: c(_.div, {
                                className: `framer-1tui858`,
                                "data-framer-name": `Title`,
                                layoutDependency: M,
                                layoutId: `BAHEpN6fB`,
                                style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                transformTemplate: Kt,
                                variants: {
                                  YQHffT1iJ: {
                                    backgroundColor: `var(--token-285ef153-d569-42f5-b925-84d6d4b8fa63, rgb(0, 0, 0))`,
                                  },
                                },
                                children: c(L, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(_.p, {
                                      className: `framer-styles-preset-79bu04`,
                                      "data-styles-preset": `GMp6ZDbq7`,
                                      dir: `auto`,
                                      children: `Secure Enterprise Data`,
                                    }),
                                  }),
                                  className: `framer-1h4lt2b`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `LuWG07vdZ`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: ee,
                                  variants: {
                                    YQHffT1iJ: {
                                      "--extracted-r6o4lv": `var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Rt(
                                    {
                                      YQHffT1iJ: {
                                        children: c(o, {
                                          children: c(_.p, {
                                            className: `framer-styles-preset-79bu04`,
                                            "data-styles-preset": `GMp6ZDbq7`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255)))`,
                                            },
                                            children: `Secure Enterprise Data`,
                                          }),
                                        }),
                                      },
                                    },
                                    C,
                                    D
                                  ),
                                }),
                              }),
                            }),
                          }),
                        oe() &&
                          c(_.div, {
                            className: `framer-dvw2m9`,
                            "data-framer-name": `Solution 2`,
                            layoutDependency: M,
                            layoutId: `ucD7MzuEt`,
                            style: {
                              backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                              rotate: -15,
                            },
                            variants: { yKTU0IAET: { rotate: 78 } },
                            children: c(_.div, {
                              className: `framer-1h8j49`,
                              "data-framer-name": `Node`,
                              layoutDependency: M,
                              layoutId: `C56zXNsZY`,
                              style: {
                                backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                                borderBottomLeftRadius: `100%`,
                                borderBottomRightRadius: `100%`,
                                borderTopLeftRadius: `100%`,
                                borderTopRightRadius: `100%`,
                                rotate: 15,
                              },
                              transformTemplate: Gt,
                              variants: { yKTU0IAET: { rotate: -78 } },
                              children: c(_.div, {
                                className: `framer-1iy06gi`,
                                "data-framer-name": `Title`,
                                layoutDependency: M,
                                layoutId: `Vyvyx7G1h`,
                                transformTemplate: Kt,
                                children: c(L, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(_.p, {
                                      className: `framer-styles-preset-79bu04`,
                                      "data-styles-preset": `GMp6ZDbq7`,
                                      dir: `auto`,
                                      children: `Automated Data Pipelines`,
                                    }),
                                  }),
                                  className: `framer-guvgo5`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `MBq117OwJ`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: b,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          }),
                        oe() &&
                          c(_.div, {
                            className: `framer-1xc4610`,
                            "data-framer-name": `Solution 1`,
                            layoutDependency: M,
                            layoutId: `BYq8IjiAh`,
                            style: {
                              backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                              rotate: -47,
                            },
                            variants: { yKTU0IAET: { rotate: 103 } },
                            children: c(_.div, {
                              className: `framer-y3rua8`,
                              "data-framer-name": `Node`,
                              layoutDependency: M,
                              layoutId: `E9SwHdmNh`,
                              style: {
                                backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                                borderBottomLeftRadius: `100%`,
                                borderBottomRightRadius: `100%`,
                                borderTopLeftRadius: `100%`,
                                borderTopRightRadius: `100%`,
                                rotate: 47,
                              },
                              transformTemplate: Gt,
                              variants: { yKTU0IAET: { rotate: -103 } },
                              children: c(_.div, {
                                className: `framer-q0ys8`,
                                "data-framer-name": `Title`,
                                layoutDependency: M,
                                layoutId: `B__MKx_aA`,
                                style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                transformTemplate: Kt,
                                variants: {
                                  yKTU0IAET: {
                                    backgroundColor: `var(--token-285ef153-d569-42f5-b925-84d6d4b8fa63, rgb(0, 0, 0))`,
                                  },
                                },
                                children: c(L, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(_.p, {
                                      className: `framer-styles-preset-79bu04`,
                                      "data-styles-preset": `GMp6ZDbq7`,
                                      dir: `auto`,
                                      children: `Customer Support Agents`,
                                    }),
                                  }),
                                  className: `framer-ukvj3u`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `iib1kgyLt`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: v,
                                  variants: {
                                    yKTU0IAET: {
                                      "--extracted-r6o4lv": `var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Rt(
                                    {
                                      yKTU0IAET: {
                                        children: c(o, {
                                          children: c(_.p, {
                                            className: `framer-styles-preset-79bu04`,
                                            "data-styles-preset": `GMp6ZDbq7`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255)))`,
                                            },
                                            children: `Customer Support Agents`,
                                          }),
                                        }),
                                      },
                                    },
                                    C,
                                    D
                                  ),
                                }),
                              }),
                            }),
                          }),
                        c(It, {
                          animated: !0,
                          className: `framer-15s0dkn`,
                          layoutDependency: M,
                          layoutId: `GXNsWYI0N`,
                          transformTemplate: Gt,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-MwHkk.framer-173vdt, .framer-MwHkk .framer-173vdt { display: block; }`,
          `.framer-MwHkk.framer-1wqdaha { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 350px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1180px; }`,
          `.framer-MwHkk .framer-1m24cko { flex: none; height: 3px; overflow: visible; position: relative; width: 40%; }`,
          `.framer-MwHkk .framer-d1bxhl-container { flex: none; height: auto; left: 50%; position: absolute; top: 33%; width: auto; }`,
          `.framer-MwHkk .framer-1ych1ut { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: relative; width: 32px; }`,
          `.framer-MwHkk .framer-juils0 { flex: none; height: 2px; left: 14px; overflow: visible; position: absolute; top: 64px; width: 150px; z-index: 1; }`,
          `.framer-MwHkk .framer-4c4946, .framer-MwHkk .framer-111datn, .framer-MwHkk .framer-1h8j49, .framer-MwHkk .framer-y3rua8 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); left: 97%; overflow: visible; position: absolute; top: 50%; width: 12px; }`,
          `.framer-MwHkk .framer-1ofpln5, .framer-MwHkk .framer-1tui858, .framer-MwHkk .framer-1iy06gi, .framer-MwHkk .framer-q0ys8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 24px; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }`,
          `.framer-MwHkk .framer-nx0ndo, .framer-MwHkk .framer-1h4lt2b, .framer-MwHkk .framer-guvgo5, .framer-MwHkk .framer-ukvj3u { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-MwHkk .framer-oj3cfr { flex: none; height: 2px; left: 23px; overflow: visible; position: absolute; top: 31px; width: 150px; z-index: 1; }`,
          `.framer-MwHkk .framer-dvw2m9 { flex: none; height: 2px; left: 18px; overflow: visible; position: absolute; top: -3px; width: 150px; z-index: 1; }`,
          `.framer-MwHkk .framer-1xc4610 { flex: none; height: 2px; left: -7px; overflow: visible; position: absolute; right: -111px; top: -42px; z-index: 1; }`,
          `.framer-MwHkk .framer-15s0dkn { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); left: 50%; position: absolute; top: 50%; width: 12px; z-index: 2; }`,
          `.framer-MwHkk.framer-v-4ukvs.framer-1wqdaha { flex-direction: column; width: 390px; }`,
          `.framer-MwHkk.framer-v-4ukvs .framer-1m24cko { height: 20px; width: 3px; }`,
          `.framer-MwHkk.framer-v-4ukvs .framer-dvw2m9 { left: -44px; top: 102px; width: 160px; }`,
          `.framer-MwHkk.framer-v-4ukvs .framer-1iy06gi { left: -92px; top: 242%; }`,
          `.framer-MwHkk.framer-v-4ukvs .framer-1xc4610 { left: -21px; right: -7px; top: 47px; }`,
          `.framer-MwHkk.framer-v-4ukvs .framer-q0ys8 { left: -101px; padding: 2px 8px 2px 8px; top: 300%; }`,
          `.framer-MwHkk.framer-v-oxg8u.framer-1wqdaha { flex-direction: column; justify-content: flex-end; width: 390px; }`,
          `.framer-MwHkk.framer-v-oxg8u .framer-1m24cko { height: 20px; order: 1; width: 3px; }`,
          `.framer-MwHkk.framer-v-oxg8u .framer-1ych1ut { order: 0; }`,
          `.framer-MwHkk.framer-v-oxg8u .framer-juils0 { bottom: 116px; left: -115px; top: unset; width: 220px; }`,
          `.framer-MwHkk.framer-v-oxg8u .framer-4c4946 { left: 98%; }`,
          `.framer-MwHkk.framer-v-oxg8u .framer-1ofpln5 { left: -85px; top: -150%; }`,
          `.framer-MwHkk.framer-v-oxg8u .framer-oj3cfr { left: 3px; top: -19px; width: 60px; }`,
          `.framer-MwHkk.framer-v-oxg8u .framer-1tui858 { left: -81px; padding: 2px 8px 2px 8px; top: -200%; }`,
          ...we,
        ],
        `framer-MwHkk`
      )),
      ($t = Qt),
      (Qt.displayName = `Integration Branches`),
      (Qt.defaultProps = { height: 350, width: 1180 }),
      M(Qt, {
        variant: {
          options: [`Rz3JuSc6N`, `yKTU0IAET`, `YQHffT1iJ`],
          optionTitles: [`Large`, `Small Top`, `Bottom Small`],
          title: `Variant`,
          type: B.Enum,
        },
        knFpBuDfo: {
          defaultValue: `Customer Support Agents`,
          displayTextArea: !0,
          title: `Title 1`,
          type: B.String,
        },
        onknFpBuDfoChange: { changes: `knFpBuDfo`, type: B.ChangeHandler },
        toKKbHeGB: {
          defaultValue: `Automated Data Pipelines`,
          displayTextArea: !0,
          title: `Title 2`,
          type: B.String,
        },
        ontoKKbHeGBChange: { changes: `toKKbHeGB`, type: B.ChangeHandler },
        WwMLgqbB0: {
          defaultValue: `Secure Enterprise Data`,
          displayTextArea: !0,
          title: `Title 3`,
          type: B.String,
        },
        onWwMLgqbB0Change: { changes: `WwMLgqbB0`, type: B.ChangeHandler },
        ky6f7sFMK: {
          defaultValue: `Strategic AI Infra Audits`,
          displayTextArea: !0,
          title: `Title 4`,
          type: B.String,
        },
        onky6f7sFMKChange: { changes: `ky6f7sFMK`, type: B.ChangeHandler },
      }),
      A(
        Qt,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...zt,
          ...Bt,
          ...D(Ee),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Qt.loader = { load: (e, t) => (t.locale, Promise.allSettled([G(X, {}, t)])) }));
  });
function tn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn = e(() => {
    (d(),
      x(),
      b(),
      m(),
      Oe(),
      (nn = T(ke)),
      (rn = { NGxbIt3vG: { hover: !0 } }),
      (an = `framer-SZC31`),
      (on = { NGxbIt3vG: `framer-v-1rkidtn` }),
      (sn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (cn = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (ln = ({ value: e, children: n }) => {
        let r = t(v),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(v.Provider, { value: a, children: n });
      }),
      (un = _.create(o)),
      (dn = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (fn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (pn = R(
        s(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = h(),
            { activeLocale: o, setLocale: s } = W();
          ue();
          let { style: l, className: u, layoutId: d, variant: f, ...p } = dn(e),
            {
              baseVariant: m,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: b,
              gestureVariant: ee,
              isLoading: x,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = ne({
              defaultVariant: `NGxbIt3vG`,
              enabledGestures: rn,
              ref: r,
              variant: f,
              variantClassNames: on,
            }),
            T = fn(e, w),
            E = O(an);
          return c(y, {
            id: d ?? i,
            children: c(un, {
              animate: w,
              initial: !1,
              children: c(ln, {
                value: sn,
                children: c(_.div, {
                  ...p,
                  ...b,
                  className: O(E, `framer-1rkidtn`, u, g),
                  "data-framer-name": `Base`,
                  layoutDependency: T,
                  layoutId: `NGxbIt3vG`,
                  ref: r,
                  style: { ...l },
                  ...tn({ "NGxbIt3vG-hover": { "data-framer-name": void 0 } }, m, ee),
                  children: c(N, {
                    children: c(F, {
                      className: `framer-1v3fods-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: T,
                      layoutId: `SMPiqpPhd-container`,
                      nodeId: `SMPiqpPhd`,
                      rendersWithMotion: !0,
                      scopeId: `ofqUjs6C7`,
                      children: c(ke, {
                        blur: 0,
                        brightness: 52,
                        characterSet: `blocks`,
                        color: {
                          color: `rgb(176, 176, 176)`,
                          color1: `rgb(255, 255, 255)`,
                          color1Point: 0,
                          color2: `rgba(107, 107, 107, 0)`,
                          color2Point: 100,
                          mode: `color`,
                          threshold: 50,
                        },
                        contrast: 0,
                        customCharacterSet: `@%#*+=-:.`,
                        ditheringMode: `none`,
                        font: {
                          fontFamily: `"Fragment Mono", monospace`,
                          fontSize: `10px`,
                          fontStyle: `normal`,
                          fontWeight: 400,
                          letterSpacing: `0em`,
                          lineHeight: `1em`,
                        },
                        glow: { blur: 11, opacity: 1 },
                        height: `100%`,
                        id: `SMPiqpPhd`,
                        image: cn(
                          {
                            pixelHeight: 457,
                            pixelWidth: 1007,
                            src: `../../assets/images/L03UNs5gQKHm2O8hVIiFW45Hz4.png`,
                            srcSet: `../../assets/images/L03UNs5gQKHm2O8hVIiFW45Hz4.png?scale-down-to=512&width=1007&height=457 512w,../../assets/images/L03UNs5gQKHm2O8hVIiFW45Hz4.png 1007w`,
                          },
                          `Star Icon Hovering Over Palm`
                        ),
                        invertColors: !1,
                        layoutId: `SMPiqpPhd`,
                        outputWidth: 170,
                        radius: `0px`,
                        sizing: `fit`,
                        staticEffect: { interval: 0.1, preview: !1 },
                        style: { width: `100%` },
                        whiteMode: `ignore`,
                        width: `100%`,
                        ...tn(
                          {
                            "NGxbIt3vG-hover": {
                              color: {
                                color: `rgb(91, 156, 252)`,
                                color1: `rgb(255, 255, 255)`,
                                color1Point: 0,
                                color2: `rgba(107, 107, 107, 0)`,
                                color2Point: 100,
                                mode: `color`,
                                threshold: 50,
                              },
                            },
                          },
                          m,
                          ee
                        ),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-SZC31.framer-1fsabfd, .framer-SZC31 .framer-1fsabfd { display: block; }`,
          `.framer-SZC31.framer-1rkidtn { align-content: center; align-items: center; cursor: default; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 530px; }`,
          `.framer-SZC31 .framer-1v3fods-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-SZC31.framer-v-1rkidtn.hover.framer-1rkidtn { width: 530px; }`,
        ],
        `framer-SZC31`
      )),
      (mn = pn),
      (pn.displayName = `Left Hand`),
      (pn.defaultProps = { height: 232.5, width: 529.5 }),
      A(
        pn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Fragment Mono`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Fragment Mono`,
                url: `https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2`,
                weight: `400`,
              },
            ],
          },
          ...nn,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function gn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var _n,
  vn,
  yn,
  bn,
  xn,
  Z,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn = e(() => {
    (d(),
      x(),
      b(),
      m(),
      He(),
      (_n = T(We)),
      (vn = [
        `tjfnlNbXA`,
        `gJk4qp16H`,
        `e70WavgUL`,
        `EPvobuJ8n`,
        `vSt6hyHI3`,
        `rahhKwoeh`,
        `kdkG18xRe`,
      ]),
      (yn = `framer-djimO`),
      (bn = {
        e70WavgUL: `framer-v-1dx3n3x`,
        EPvobuJ8n: `framer-v-17zao5h`,
        gJk4qp16H: `framer-v-1polsad`,
        kdkG18xRe: `framer-v-187bqpk`,
        rahhKwoeh: `framer-v-1sb6ha6`,
        tjfnlNbXA: `framer-v-1yfy0nw`,
        vSt6hyHI3: `framer-v-1jkr5ex`,
      }),
      (xn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Sn = ({ value: e, children: n }) => {
        let r = t(v),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(v.Provider, { value: a, children: n });
      }),
      (Cn = {
        "1 Open": `gJk4qp16H`,
        "2 Open": `e70WavgUL`,
        "3 Open": `EPvobuJ8n`,
        "4 Open": `vSt6hyHI3`,
        "5 Open": `rahhKwoeh`,
        "6 Open": `kdkG18xRe`,
        "All Closed": `tjfnlNbXA`,
      }),
      (wn = _.create(o)),
      (Tn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Cn[r.variant] ?? r.variant ?? `tjfnlNbXA`,
      })),
      (En = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Dn = R(
        s(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = h(),
            { activeLocale: o, setLocale: s } = W(),
            l = ue(),
            { style: d, className: f, layoutId: p, variant: m, ...g } = Tn(e),
            {
              baseVariant: v,
              classNames: b,
              clearLoadingGesture: ee,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = ne({
              cycleOrder: vn,
              defaultVariant: `tjfnlNbXA`,
              ref: r,
              variant: m,
              variantClassNames: bn,
            }),
            D = En(e, E),
            { activeVariantCallback: k, delay: A } = ce(v),
            te = k(async (...e) => {
              T(`gJk4qp16H`);
            }),
            j = k(async (...e) => {
              T(`e70WavgUL`);
            }),
            M = k(async (...e) => {
              T(`EPvobuJ8n`);
            }),
            re = k(async (...e) => {
              T(`vSt6hyHI3`);
            }),
            ie = k(async (...e) => {
              T(`rahhKwoeh`);
            }),
            ae = k(async (...e) => {
              T(`kdkG18xRe`);
            }),
            oe = O(yn);
          return c(y, {
            id: p ?? i,
            children: c(wn, {
              animate: E,
              initial: !1,
              children: c(Sn, {
                value: xn,
                children: u(_.div, {
                  ...g,
                  ...x,
                  className: O(oe, `framer-1yfy0nw`, f, b),
                  "data-framer-name": `All Closed`,
                  layoutDependency: D,
                  layoutId: `tjfnlNbXA`,
                  ref: r,
                  style: { ...d },
                  ...gn(
                    {
                      e70WavgUL: { "data-framer-name": `2 Open` },
                      EPvobuJ8n: { "data-framer-name": `3 Open` },
                      gJk4qp16H: { "data-framer-name": `1 Open` },
                      kdkG18xRe: { "data-framer-name": `6 Open` },
                      rahhKwoeh: { "data-framer-name": `5 Open` },
                      vSt6hyHI3: { "data-framer-name": `4 Open` },
                    },
                    v,
                    S
                  ),
                  children: [
                    c(N, {
                      height: 138,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 878) / 2 + 0 + 0),
                      children: c(F, {
                        className: `framer-vcven-container`,
                        layout: `position`,
                        layoutDependency: D,
                        layoutId: `bin0ScNEN-container`,
                        nodeId: `bin0ScNEN`,
                        rendersWithMotion: !0,
                        scopeId: `Rcz8Zp14u`,
                        children: c(We, {
                          height: `100%`,
                          id: `bin0ScNEN`,
                          layoutId: `bin0ScNEN`,
                          qY77pdGfk: te,
                          style: { width: `100%` },
                          variant: Z(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `Most outbound in this market runs on the same contact databases and simple filters, so everyone reaches the same listed companies at the same time. We work off the signals that say a company is heading toward a sale before any listing exists, and we layer your own network on top so you reach the right owners warm.`,
                          wTHxi2jJc: `How is this different from what brokers and bankers already use?`,
                          ...gn({ gJk4qp16H: { variant: Z(`iPbUXRQy9`) } }, v, S),
                        }),
                      }),
                    }),
                    c(N, {
                      height: 138,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 878) / 2 + 138 + 10),
                      children: c(F, {
                        className: `framer-lz8553-container`,
                        layout: `position`,
                        layoutDependency: D,
                        layoutId: `aRBvlVYBU-container`,
                        nodeId: `aRBvlVYBU`,
                        rendersWithMotion: !0,
                        scopeId: `Rcz8Zp14u`,
                        children: c(We, {
                          height: `100%`,
                          id: `aRBvlVYBU`,
                          layoutId: `aRBvlVYBU`,
                          qY77pdGfk: j,
                          style: { width: `100%` },
                          variant: Z(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `No. We are a research firm engaged by serious, funded buyers to find targets that fit their deal box. We are always transparent about that with the owners we contact, which is a large part of why they respond.`,
                          wTHxi2jJc: `Are you the buyer?`,
                          ...gn({ e70WavgUL: { variant: Z(`iPbUXRQy9`) } }, v, S),
                        }),
                      }),
                    }),
                    c(N, {
                      height: 138,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 878) / 2 + 276 + 20),
                      children: c(F, {
                        className: `framer-auzme-container`,
                        layout: `position`,
                        layoutDependency: D,
                        layoutId: `lSkxkP7cw-container`,
                        nodeId: `lSkxkP7cw`,
                        rendersWithMotion: !0,
                        scopeId: `Rcz8Zp14u`,
                        children: c(We, {
                          height: `100%`,
                          id: `lSkxkP7cw`,
                          layoutId: `lSkxkP7cw`,
                          qY77pdGfk: M,
                          style: { width: `100%` },
                          variant: Z(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `From a wide range of public records, court filings, financial databases, professional networks, and proprietary signals. We cross-check every data point across sources, score it for confidence, and confirm it with the owner where possible.`,
                          wTHxi2jJc: `Where does your data come from?`,
                          ...gn({ EPvobuJ8n: { variant: Z(`iPbUXRQy9`) } }, v, S),
                        }),
                      }),
                    }),
                    c(N, {
                      height: 138,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 878) / 2 + 414 + 30),
                      children: c(F, {
                        className: `framer-gt4h4x-container`,
                        layout: `position`,
                        layoutDependency: D,
                        layoutId: `XG89Nc6KO-container`,
                        nodeId: `XG89Nc6KO`,
                        rendersWithMotion: !0,
                        scopeId: `Rcz8Zp14u`,
                        children: c(We, {
                          height: `100%`,
                          id: `XG89Nc6KO`,
                          layoutId: `XG89Nc6KO`,
                          qY77pdGfk: re,
                          style: { width: `100%` },
                          variant: Z(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `Nothing about a target is shared with any other party until you choose to engage. Our outreach is discreet and framed as research, not a sale.`,
                          wTHxi2jJc: `How do you handle confidentiality?`,
                          ...gn({ vSt6hyHI3: { variant: Z(`iPbUXRQy9`) } }, v, S),
                        }),
                      }),
                    }),
                    c(N, {
                      height: 138,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 878) / 2 + 552 + 40),
                      children: c(F, {
                        className: `framer-hhiqgy-container`,
                        layout: `position`,
                        layoutDependency: D,
                        layoutId: `x3ykx7bAp-container`,
                        nodeId: `x3ykx7bAp`,
                        rendersWithMotion: !0,
                        scopeId: `Rcz8Zp14u`,
                        children: c(We, {
                          height: `100%`,
                          id: `x3ykx7bAp`,
                          layoutId: `x3ykx7bAp`,
                          qY77pdGfk: ie,
                          style: { width: `100%` },
                          variant: Z(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `A ranked shortlist of off-market owners who fit your thesis and have confirmed they are open to a conversation, each with a full dossier. Timing depends on the market you define and the plan you are on.`,
                          wTHxi2jJc: `What do I actually receive, and how quickly?`,
                          ...gn({ rahhKwoeh: { variant: Z(`iPbUXRQy9`) } }, v, S),
                        }),
                      }),
                    }),
                    c(N, {
                      height: 138,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 878) / 2 + 690 + 50),
                      children: c(F, {
                        className: `framer-dm0xle-container`,
                        layout: `position`,
                        layoutDependency: D,
                        layoutId: `ux2uLKuyA-container`,
                        nodeId: `ux2uLKuyA`,
                        rendersWithMotion: !0,
                        scopeId: `Rcz8Zp14u`,
                        children: c(We, {
                          height: `100%`,
                          id: `ux2uLKuyA`,
                          layoutId: `ux2uLKuyA`,
                          qY77pdGfk: ae,
                          style: { width: `100%` },
                          variant: Z(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `Engagements range from a one-off market map to fully managed monthly sourcing. Recurring plans ask for a short initial commitment so there is time to work the market properly.`,
                          wTHxi2jJc: `How does pricing and commitment work?`,
                          ...gn({ kdkG18xRe: { variant: Z(`iPbUXRQy9`) } }, v, S),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-djimO.framer-1g4ld3f, .framer-djimO .framer-1g4ld3f { display: block; }`,
          `.framer-djimO.framer-1yfy0nw { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 507px; }`,
          `.framer-djimO .framer-vcven-container, .framer-djimO .framer-lz8553-container, .framer-djimO .framer-auzme-container, .framer-djimO .framer-gt4h4x-container, .framer-djimO .framer-hhiqgy-container, .framer-djimO .framer-dm0xle-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ],
        `framer-djimO`
      )),
      (On = Dn),
      (Dn.displayName = `Home FAQ`),
      (Dn.defaultProps = { height: 448, width: 507 }),
      M(Dn, {
        variant: {
          options: [
            `tjfnlNbXA`,
            `gJk4qp16H`,
            `e70WavgUL`,
            `EPvobuJ8n`,
            `vSt6hyHI3`,
            `rahhKwoeh`,
            `kdkG18xRe`,
          ],
          optionTitles: [`All Closed`, `1 Open`, `2 Open`, `3 Open`, `4 Open`, `5 Open`, `6 Open`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      A(Dn, [{ explicitInter: !0, fonts: [] }, ..._n], { supportsExplicitInterCodegen: !0 }),
      (Dn.loader = { load: (e, t) => (t.locale, Promise.allSettled([G(We, {}, t)])) }));
  }),
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn = e(() => {
    (d(),
      x(),
      b(),
      m(),
      K(),
      (An = `framer-UPVne`),
      (jn = { KAyNIdSvQ: `framer-v-a16qz2` }),
      (Mn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Nn = ({ value: e, children: n }) => {
        let r = t(v),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(v.Provider, { value: a, children: n });
      }),
      (Pn = _.create(o)),
      (Fn = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        mQrslU2vj: n ?? i.mQrslU2vj ?? `Review of your current manual tasks`,
      })),
      (In = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ln = R(
        s(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = h(),
            { activeLocale: s, setLocale: l } = W();
          ue();
          let { style: u, className: d, layoutId: f, variant: p, mQrslU2vj: m, ...g } = Fn(e),
            {
              baseVariant: v,
              classNames: b,
              clearLoadingGesture: ee,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = ne({ defaultVariant: `KAyNIdSvQ`, ref: r, variant: p, variantClassNames: jn }),
            D = In(e, E),
            k = O(An, ge);
          return c(y, {
            id: f ?? i,
            children: c(Pn, {
              animate: E,
              initial: !1,
              children: c(Nn, {
                value: Mn,
                children: c(_.div, {
                  ...g,
                  ...x,
                  className: O(k, `framer-a16qz2`, d, b),
                  "data-border": !0,
                  "data-framer-name": `Base`,
                  layoutDependency: D,
                  layoutId: `KAyNIdSvQ`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `dashed`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, rgb(247, 247, 247))`,
                    ...u,
                  },
                  children: c(L, {
                    __fromCanvasComponent: !0,
                    children: c(o, {
                      children: c(_.p, {
                        className: `framer-styles-preset-ccv9s9`,
                        "data-styles-preset": `Bo2HZoBjr`,
                        dir: `auto`,
                        style: { "--framer-text-alignment": `left` },
                        children: `Review of your current manual tasks`,
                      }),
                    }),
                    className: `framer-ep3rl7`,
                    fonts: [`Inter`],
                    layoutDependency: D,
                    layoutId: `Q0OL4l1BT`,
                    style: {
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    text: m,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-UPVne.framer-10t0ol9, .framer-UPVne .framer-10t0ol9 { display: block; }`,
          `.framer-UPVne.framer-a16qz2 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 18px; position: relative; width: 343px; }`,
          `.framer-UPVne .framer-ep3rl7 { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 2; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...me,
          `.framer-UPVne[data-border="true"]::after, .framer-UPVne [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-UPVne`
      )),
      (Rn = Ln),
      (Ln.displayName = `Pricing Tier Card Point`),
      (Ln.defaultProps = { height: 55.5, width: 342.5 }),
      M(Ln, {
        mQrslU2vj: {
          defaultValue: `Review of your current manual tasks`,
          displayTextArea: !1,
          title: `Title`,
          type: B.String,
        },
        onmQrslU2vjChange: { changes: `mQrslU2vj`, type: B.ChangeHandler },
      }),
      A(
        Ln,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...D(he),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Bn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir = e(() => {
    (d(),
      x(),
      b(),
      m(),
      qe(),
      Y(),
      zn(),
      Pe(),
      _e(),
      (Vn = T(X)),
      (Hn = T(q)),
      (Un = T(Rn)),
      (Wn = [`Xo9XOAvxa`, `s6o11_xc3`]),
      (Gn = `framer-HkhrT`),
      (Kn = { s6o11_xc3: `framer-v-1f2u7md`, Xo9XOAvxa: `framer-v-lr32qc` }),
      (qn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Jn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Yn = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (Xn = ({ value: e, children: n }) => {
        let r = t(v),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(v.Provider, { value: a, children: n });
      }),
      (Zn = { Primary: `Xo9XOAvxa`, Secondary: `s6o11_xc3` }),
      (Qn = _.create(o)),
      ($n = (e, t) => {
        let [r, i] = n(e),
          [a, o] = n(e);
        return t ? [e, t] : (e !== a && (i(e), o(e)), [r, i]);
      }),
      (er = ({
        buttonLabel: e,
        description: t,
        height: n,
        id: r,
        link: i,
        point1: a,
        point2: o,
        point3: s,
        point4: c,
        priceByline: l,
        priceText: u,
        tag: d,
        title: f,
        width: p,
        ...m
      }) => ({
        ...m,
        cCu2pK96F: c ?? m.cCu2pK96F ?? `Step-by-step custom implementation plan`,
        DgtRoYMt5: s ?? m.DgtRoYMt5 ?? `Complete data privacy and security check`,
        i9BVbHqB1: f ?? m.i9BVbHqB1 ?? `The Paid Discovery`,
        niAwTawgS: i ?? m.niAwTawgS,
        O_Vg4pLJ1: e ?? m.O_Vg4pLJ1 ?? `Talk to us`,
        o3goZ8Nim:
          t ?? m.o3goZ8Nim ?? `We map out exactly where AI can save your business time and money.`,
        o62mij8m9: l ?? m.o62mij8m9 ?? `/month`,
        qJucm0u5h: o ?? m.qJucm0u5h ?? `Identify the highest-ROI AI opportunities`,
        variant: Zn[m.variant] ?? m.variant ?? `Xo9XOAvxa`,
        WCv3R3NfD: d ?? m.WCv3R3NfD ?? `Tier 1`,
        x2B0YMB5u: u ?? m.x2B0YMB5u ?? `from $1,000`,
        XbxI6AcL0: a ?? m.XbxI6AcL0 ?? `Review of your current manual tasks`,
      })),
      (tr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (nr = R(
        s(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = h(),
            { activeLocale: s, setLocale: l } = W(),
            d = ue(),
            {
              style: f,
              className: p,
              layoutId: m,
              variant: g,
              WCv3R3NfD: v,
              onWCv3R3NfDChange: b,
              i9BVbHqB1: ee,
              o3goZ8Nim: x,
              o62mij8m9: S,
              XbxI6AcL0: C,
              onXbxI6AcL0Change: w,
              qJucm0u5h: T,
              onqJucm0u5hChange: E,
              DgtRoYMt5: D,
              onDgtRoYMt5Change: k,
              cCu2pK96F: A,
              oncCu2pK96FChange: te,
              niAwTawgS: j,
              x2B0YMB5u: M,
              O_Vg4pLJ1: re,
              onO_Vg4pLJ1Change: ie,
              ...ae
            } = er(e),
            [oe, se] = $n(v, b),
            [ce, le] = $n(C, w),
            [de, P] = $n(T, E),
            [I, R] = $n(D, k),
            [fe, pe] = $n(A, te),
            [z, B] = $n(re, ie),
            {
              baseVariant: V,
              classNames: H,
              clearLoadingGesture: U,
              gestureHandlers: G,
              gestureVariant: K,
              isLoading: me,
              setGestureState: he,
              setVariant: ge,
              variants: _e,
            } = ne({
              cycleOrder: Wn,
              defaultVariant: `Xo9XOAvxa`,
              ref: r,
              variant: g,
              variantClassNames: Kn,
            }),
            J = tr(e, _e),
            ve = O(Gn, Xe, ye),
            Y = Yn(S);
          return c(y, {
            id: m ?? i,
            children: c(Qn, {
              animate: _e,
              initial: !1,
              children: c(Xn, {
                value: qn,
                children: u(_.div, {
                  ...ae,
                  ...G,
                  className: O(ve, `framer-lr32qc`, p, H),
                  "data-border": !0,
                  "data-framer-name": `Primary`,
                  layoutDependency: J,
                  layoutId: `Xo9XOAvxa`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-95a8f7e0-de26-4a21-abd8-7324f048c094, rgb(189, 189, 189))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `dashed`,
                    "--border-top-width": `1px`,
                    ...f,
                  },
                  ...Bn({ s6o11_xc3: { "data-framer-name": `Secondary` } }, V, K),
                  children: [
                    u(_.div, {
                      className: `framer-1uvhs98`,
                      "data-framer-name": `Details`,
                      layoutDependency: J,
                      layoutId: `wu3baDLkZ`,
                      children: [
                        u(_.div, {
                          className: `framer-1q7fs0q`,
                          "data-framer-name": `Header`,
                          layoutDependency: J,
                          layoutId: `ElfGJEBwm`,
                          children: [
                            c(N, {
                              height: 25,
                              y:
                                (d?.y || 0) +
                                28 +
                                0 +
                                (0 + ((((d?.height || 200) - 56) * 1 - 0 - 346) / 1) * 0) +
                                0 +
                                0,
                              ...Bn(
                                {
                                  s6o11_xc3: {
                                    y:
                                      (d?.y || 0) +
                                      28 +
                                      (((d?.height || 200) - 56 - 687) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                },
                                V,
                                K
                              ),
                              children: c(F, {
                                className: `framer-onmy3g-container`,
                                layoutDependency: J,
                                layoutId: `nAEwepsUj-container`,
                                nodeId: `nAEwepsUj`,
                                rendersWithMotion: !0,
                                scopeId: `RQmrNTBuf`,
                                children: c(X, {
                                  height: `100%`,
                                  id: `nAEwepsUj`,
                                  KPDdVnbJ9: oe,
                                  layoutId: `nAEwepsUj`,
                                  nHzYRdzoI: !1,
                                  onKPDdVnbJ9Change: se,
                                  variant: Jn(`LBX2RY6YR`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                            u(_.div, {
                              className: `framer-a4gw21`,
                              "data-framer-name": `Text`,
                              layoutDependency: J,
                              layoutId: `tvCQj5X9F`,
                              children: [
                                c(L, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(_.p, {
                                      className: `framer-styles-preset-c7r8r4`,
                                      "data-styles-preset": `JDyypIjWz`,
                                      dir: `auto`,
                                      children: `The Paid Discovery`,
                                    }),
                                  }),
                                  className: `framer-145jivs`,
                                  fonts: [`Inter`],
                                  layoutDependency: J,
                                  layoutId: `p3KEJrwsD`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: ee,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                c(L, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(_.p, {
                                      className: `framer-styles-preset-1i4fe7d`,
                                      "data-styles-preset": `NbDFs5rgP`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                                      },
                                      children: `We map out exactly where AI can save your business time and money.`,
                                    }),
                                  }),
                                  className: `framer-w43z2`,
                                  fonts: [`Inter`],
                                  layoutDependency: J,
                                  layoutId: `ioigXnWZQ`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: x,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        u(_.div, {
                          className: `framer-1hu8ain`,
                          "data-framer-name": `Price & Action`,
                          layoutDependency: J,
                          layoutId: `KKeAAmxAS`,
                          children: [
                            u(_.div, {
                              className: `framer-c9q0e8`,
                              "data-framer-name": `Price`,
                              layoutDependency: J,
                              layoutId: `i21QVdANl`,
                              children: [
                                c(L, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(_.p, {
                                      className: `framer-styles-preset-c7r8r4`,
                                      "data-styles-preset": `JDyypIjWz`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `start` },
                                      children: `$1,000`,
                                    }),
                                  }),
                                  className: `framer-tuu9bm`,
                                  fonts: [`Inter`],
                                  layoutDependency: J,
                                  layoutId: `zat3h1HQG`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: M,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                c(_.div, {
                                  className: `framer-hg2501`,
                                  "data-framer-name": `Byline`,
                                  layoutDependency: J,
                                  layoutId: `gfBNpbVpK`,
                                  children:
                                    Y !== !1 &&
                                    c(L, {
                                      __fromCanvasComponent: !0,
                                      children: c(o, {
                                        children: c(_.p, {
                                          className: `framer-styles-preset-1i4fe7d`,
                                          "data-styles-preset": `NbDFs5rgP`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                                          },
                                          children: `/month`,
                                        }),
                                      }),
                                      className: `framer-1x30bci`,
                                      fonts: [`Inter`],
                                      layoutDependency: J,
                                      layoutId: `krKXp62J4`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: S,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                }),
                              ],
                            }),
                            c(N, {
                              height: 31,
                              y:
                                (d?.y || 0) +
                                28 +
                                0 +
                                (314 + ((((d?.height || 200) - 56) * 1 - 0 - 346) / 1) * 1) +
                                0,
                              ...Bn(
                                {
                                  s6o11_xc3: {
                                    width: `calc(${d?.width || `100vw`} - 56px)`,
                                    y:
                                      (d?.y || 0) +
                                      28 +
                                      (((d?.height || 200) - 56 - 687) / 2 + 0 + 0) +
                                      0 +
                                      338 +
                                      0 +
                                      44,
                                  },
                                },
                                V,
                                K
                              ),
                              children: c(F, {
                                className: `framer-15cv0ol-container`,
                                layoutDependency: J,
                                layoutId: `pnijqyo8q-container`,
                                nodeId: `pnijqyo8q`,
                                rendersWithMotion: !0,
                                scopeId: `RQmrNTBuf`,
                                children: c(q, {
                                  height: `100%`,
                                  id: `pnijqyo8q`,
                                  JvqpmmvGw: j,
                                  layoutId: `pnijqyo8q`,
                                  onvA9NXfDIMChange: B,
                                  vA9NXfDIM: z,
                                  variant: Jn(`UCzWgVJt3`),
                                  width: `100%`,
                                  ...Bn({ s6o11_xc3: { style: { width: `100%` } } }, V, K),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    u(_.div, {
                      className: `framer-zi804u`,
                      "data-framer-name": `Points`,
                      layoutDependency: J,
                      layoutId: `rdiJnsXdn`,
                      children: [
                        c(N, {
                          height: 55,
                          width: `max((${d?.width || `100vw`} - 80px) / 2, 1px)`,
                          y: (d?.y || 0) + 28 + 0 + 0,
                          ...Bn(
                            {
                              s6o11_xc3: {
                                width: `calc(${d?.width || `100vw`} - 56px)`,
                                y:
                                  (d?.y || 0) +
                                  28 +
                                  (((d?.height || 200) - 56 - 687) / 2 + 413 + 24) +
                                  0 +
                                  0,
                              },
                            },
                            V,
                            K
                          ),
                          children: c(F, {
                            className: `framer-17y68td-container`,
                            layoutDependency: J,
                            layoutId: `hlCWTJQ5V-container`,
                            nodeId: `hlCWTJQ5V`,
                            rendersWithMotion: !0,
                            scopeId: `RQmrNTBuf`,
                            children: c(Rn, {
                              height: `100%`,
                              id: `hlCWTJQ5V`,
                              layoutId: `hlCWTJQ5V`,
                              mQrslU2vj: ce,
                              onmQrslU2vjChange: le,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                        c(N, {
                          height: 55,
                          width: `max((${d?.width || `100vw`} - 80px) / 2, 1px)`,
                          y: (d?.y || 0) + 28 + 0 + 65,
                          ...Bn(
                            {
                              s6o11_xc3: {
                                width: `calc(${d?.width || `100vw`} - 56px)`,
                                y:
                                  (d?.y || 0) +
                                  28 +
                                  (((d?.height || 200) - 56 - 687) / 2 + 413 + 24) +
                                  0 +
                                  65,
                              },
                            },
                            V,
                            K
                          ),
                          children: c(F, {
                            className: `framer-tx41qe-container`,
                            layoutDependency: J,
                            layoutId: `UmbznMvor-container`,
                            nodeId: `UmbznMvor`,
                            rendersWithMotion: !0,
                            scopeId: `RQmrNTBuf`,
                            children: c(Rn, {
                              height: `100%`,
                              id: `UmbznMvor`,
                              layoutId: `UmbznMvor`,
                              mQrslU2vj: de,
                              onmQrslU2vjChange: P,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                        c(N, {
                          height: 55,
                          width: `max((${d?.width || `100vw`} - 80px) / 2, 1px)`,
                          y: (d?.y || 0) + 28 + 0 + 130,
                          ...Bn(
                            {
                              s6o11_xc3: {
                                width: `calc(${d?.width || `100vw`} - 56px)`,
                                y:
                                  (d?.y || 0) +
                                  28 +
                                  (((d?.height || 200) - 56 - 687) / 2 + 413 + 24) +
                                  0 +
                                  130,
                              },
                            },
                            V,
                            K
                          ),
                          children: c(F, {
                            className: `framer-ve5i4t-container`,
                            layoutDependency: J,
                            layoutId: `Ig3Kn5gis-container`,
                            nodeId: `Ig3Kn5gis`,
                            rendersWithMotion: !0,
                            scopeId: `RQmrNTBuf`,
                            children: c(Rn, {
                              height: `100%`,
                              id: `Ig3Kn5gis`,
                              layoutId: `Ig3Kn5gis`,
                              mQrslU2vj: I,
                              onmQrslU2vjChange: R,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                        c(N, {
                          height: 55,
                          width: `max((${d?.width || `100vw`} - 80px) / 2, 1px)`,
                          y: (d?.y || 0) + 28 + 0 + 195,
                          ...Bn(
                            {
                              s6o11_xc3: {
                                width: `calc(${d?.width || `100vw`} - 56px)`,
                                y:
                                  (d?.y || 0) +
                                  28 +
                                  (((d?.height || 200) - 56 - 687) / 2 + 413 + 24) +
                                  0 +
                                  195,
                              },
                            },
                            V,
                            K
                          ),
                          children: c(F, {
                            className: `framer-1916bq5-container`,
                            layoutDependency: J,
                            layoutId: `pnPWl_iBm-container`,
                            nodeId: `pnPWl_iBm`,
                            rendersWithMotion: !0,
                            scopeId: `RQmrNTBuf`,
                            children: c(Rn, {
                              height: `100%`,
                              id: `pnPWl_iBm`,
                              layoutId: `pnPWl_iBm`,
                              mQrslU2vj: fe,
                              onmQrslU2vjChange: pe,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-HkhrT.framer-17piswt, .framer-HkhrT .framer-17piswt { display: block; }`,
          `.framer-HkhrT.framer-lr32qc { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 753px; }`,
          `.framer-HkhrT .framer-1uvhs98 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-HkhrT .framer-1q7fs0q { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-HkhrT .framer-onmy3g-container, .framer-HkhrT .framer-15cv0ol-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-HkhrT .framer-a4gw21 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-HkhrT .framer-145jivs, .framer-HkhrT .framer-w43z2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-HkhrT .framer-1hu8ain { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-HkhrT .framer-c9q0e8 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-HkhrT .framer-tuu9bm, .framer-HkhrT .framer-1x30bci { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-HkhrT .framer-hg2501 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 3px 0px; position: relative; width: min-content; }`,
          `.framer-HkhrT .framer-zi804u { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-HkhrT .framer-17y68td-container, .framer-HkhrT .framer-tx41qe-container, .framer-HkhrT .framer-ve5i4t-container, .framer-HkhrT .framer-1916bq5-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-HkhrT.framer-v-1f2u7md.framer-lr32qc { flex-direction: column; width: 388px; }`,
          `.framer-HkhrT.framer-v-1f2u7md .framer-1uvhs98 { align-self: unset; flex: none; gap: 24px; height: min-content; justify-content: flex-start; width: 100%; }`,
          `.framer-HkhrT.framer-v-1f2u7md .framer-1hu8ain { flex-direction: column; gap: 12px; }`,
          `.framer-HkhrT.framer-v-1f2u7md .framer-c9q0e8, .framer-HkhrT.framer-v-1f2u7md .framer-zi804u { flex: none; width: 100%; }`,
          `.framer-HkhrT.framer-v-1f2u7md .framer-15cv0ol-container { width: 100%; }`,
          ...Je,
          ...ve,
          `.framer-HkhrT[data-border="true"]::after, .framer-HkhrT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-HkhrT`
      )),
      (rr = nr),
      (nr.displayName = `Pricing Tier Card`),
      (nr.defaultProps = { height: 308, width: 753 }),
      M(nr, {
        variant: {
          options: [`Xo9XOAvxa`, `s6o11_xc3`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: B.Enum,
        },
        WCv3R3NfD: { defaultValue: `Tier 1`, displayTextArea: !1, title: `Tag`, type: B.String },
        onWCv3R3NfDChange: { changes: `WCv3R3NfD`, type: B.ChangeHandler },
        i9BVbHqB1: {
          defaultValue: `The Paid Discovery`,
          displayTextArea: !1,
          title: `Title`,
          type: B.String,
        },
        oni9BVbHqB1Change: { changes: `i9BVbHqB1`, type: B.ChangeHandler },
        o3goZ8Nim: {
          defaultValue: `We map out exactly where AI can save your business time and money.`,
          displayTextArea: !0,
          title: `Description`,
          type: B.String,
        },
        ono3goZ8NimChange: { changes: `o3goZ8Nim`, type: B.ChangeHandler },
        o62mij8m9: {
          defaultValue: `/month`,
          displayTextArea: !1,
          title: `Price Byline`,
          type: B.String,
        },
        ono62mij8m9Change: { changes: `o62mij8m9`, type: B.ChangeHandler },
        XbxI6AcL0: {
          defaultValue: `Review of your current manual tasks`,
          displayTextArea: !0,
          title: `Point 1`,
          type: B.String,
        },
        onXbxI6AcL0Change: { changes: `XbxI6AcL0`, type: B.ChangeHandler },
        qJucm0u5h: {
          defaultValue: `Identify the highest-ROI AI opportunities`,
          displayTextArea: !0,
          title: `Point 2`,
          type: B.String,
        },
        onqJucm0u5hChange: { changes: `qJucm0u5h`, type: B.ChangeHandler },
        DgtRoYMt5: {
          defaultValue: `Complete data privacy and security check`,
          displayTextArea: !0,
          title: `Point 3`,
          type: B.String,
        },
        onDgtRoYMt5Change: { changes: `DgtRoYMt5`, type: B.ChangeHandler },
        cCu2pK96F: {
          defaultValue: `Step-by-step custom implementation plan`,
          displayTextArea: !0,
          title: `Point 4`,
          type: B.String,
        },
        oncCu2pK96FChange: { changes: `cCu2pK96F`, type: B.ChangeHandler },
        niAwTawgS: { title: `Link`, type: B.Link },
        x2B0YMB5u: { defaultValue: `from $1,000`, title: `Price Text`, type: B.String },
        onx2B0YMB5uChange: { changes: `x2B0YMB5u`, type: B.ChangeHandler },
        O_Vg4pLJ1: { defaultValue: `Talk to us`, title: `Button Label`, type: B.String },
        onO_Vg4pLJ1Change: { changes: `O_Vg4pLJ1`, type: B.ChangeHandler },
      }),
      A(
        nr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Vn,
          ...Hn,
          ...Un,
          ...D(Ye),
          ...D(J),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (nr.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([G(X, {}, t), G(q, {}, t), G(Rn, {}, t)])),
      }));
  }),
  ar,
  or,
  sr,
  Q,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  $,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr;
e(() => {
  (d(),
    x(),
    b(),
    m(),
    _t(),
    Oe(),
    jt(),
    Pe(),
    Re(),
    en(),
    Ue(),
    _e(),
    hn(),
    Ge(),
    kn(),
    ir(),
    Se(),
    Ze(),
    xe(),
    Y(),
    Ae(),
    tt(),
    Ie(),
    at(),
    Be(),
    st(),
    (ar = T(X)),
    (or = te(z)),
    (sr = T(q)),
    (Q = I(_.div)),
    (cr = T(ft)),
    (lr = I(z)),
    (ur = T(mn)),
    (dr = T(At)),
    (fr = E(At)),
    (pr = I(pe)),
    (mr = T(ke)),
    (hr = T($t)),
    (gr = T(rr)),
    (_r = k(_.div)),
    (vr = k(_.section)),
    (yr = T(On)),
    (br = T(Ve)),
    (xr = T(Fe)),
    (Sr = T(Ke)),
    (Cr = k(_.main)),
    (wr = {
      acm0y4Ysf: `(min-width: 810px) and (max-width: 1199.98px)`,
      cx0ZXnHvi: `(max-width: 809.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (Tr = () => typeof document < `u`),
    (Er = []),
    (Dr = `framer-5sVnl`),
    (Or = {
      acm0y4Ysf: `framer-v-c8sga5`,
      cx0ZXnHvi: `framer-v-etszke`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (kr = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
    (Ar = (e, t, n) => (e && t ? `position` : n)),
    (jr = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Mr = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    ($ = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Nr = (e, t) => `translate(-50%, -50%) ${t}`),
    (Pr = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    ae(),
    (Fr = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
        default:
          return n;
      }
    }),
    (Ir = { Desktop: `WQLkyLRf1`, Phone: `cx0ZXnHvi`, Tablet: `acm0y4Ysf` }),
    (Lr = ({ value: e }) =>
      ie()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Rr = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Ir[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (zr = R(
      s(function (e, n) {
        let r = a(null),
          i = n ?? r,
          s = h(),
          { activeLocale: d, setLocale: p } = W(),
          m = ue(),
          { style: g, className: b, layoutId: ee, variant: x, ...S } = Rr(e);
        oe(l(() => ct({}, d), [d]));
        let [C, T] = de(x, wr, !1),
          E = O(Dr, et, ye, be, De, it, Ne),
          D = t(le)?.isLayoutTemplate,
          k = Ar(D, !!t(v)?.transition?.layout);
        re();
        let A = U(`dMa3I_0FQ`),
          te = a(null),
          ne = U(`wHPteuBSd`),
          M = a(null),
          ie = U(`rMkm87RAJ`),
          ae = a(null),
          ce = () => !Tr() || C === `cx0ZXnHvi`,
          F = U(`IEzvAGyIY`),
          I = a(null),
          R = () => (Tr() ? C !== `cx0ZXnHvi` : !0),
          pe = U(`LC8uHYUKO`),
          B = w();
        return (
          P({}),
          c(le.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Ir,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: Or,
            },
            children: u(y, {
              id: ee ?? s,
              children: [
                c(Lr, {
                  value: `html body { background: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245)); }`,
                }),
                c(_.div, {
                  ...S,
                  className: O(E, `framer-72rtr7`, b),
                  ref: i,
                  style: { ...g },
                  children: u(Cr, {
                    className: `framer-41erml`,
                    "data-framer-name": `Main`,
                    flowEffectEnabled: !0,
                    flowEffectTransition: kr,
                    isNestedFlowEffect: !1,
                    layout: k,
                    children: [
                      u(_.section, {
                        className: `framer-1prmqhr`,
                        "data-border": !0,
                        "data-framer-name": `Hero`,
                        layout: `position`,
                        children: [
                          u(`div`, {
                            className: `framer-1m0mf1k`,
                            "data-framer-name": `Header`,
                            children: [
                              c(N, {
                                height: 25,
                                children: c(or, {
                                  animate: jr,
                                  className: `framer-11kwsia-container`,
                                  "data-framer-appear-id": `11kwsia`,
                                  initial: Mr,
                                  nodeId: `JTD0q9wNB`,
                                  optimized: !0,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  children: c(X, {
                                    height: `100%`,
                                    id: `JTD0q9wNB`,
                                    KPDdVnbJ9: `Marketscape`,
                                    layoutId: `JTD0q9wNB`,
                                    nHzYRdzoI: !0,
                                    variant: $(`wjdnMwXds`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              u(`div`, {
                                className: `framer-13vovq9`,
                                "data-framer-name": `Text`,
                                children: [
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`h1`, {
                                        className: `framer-styles-preset-1xgagrl`,
                                        "data-styles-preset": `gfNbT0EVI`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `The best companies to buy aren’t for sale yet.`,
                                      }),
                                    }),
                                    className: `framer-1ec2sr0`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                        },
                                        children: `When a strong business hits the market, it is swarmed within days. Marketscape finds the owners quietly approaching a sale, through generational handover, burnout, or a life event, and reaches the ones already inside your network, before anyone else knows.`,
                                      }),
                                    }),
                                    className: `framer-f2ebt0`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              u(`div`, {
                                className: `framer-1uwjo92`,
                                "data-framer-name": `Actions`,
                                children: [
                                  c(j, {
                                    links: [
                                      {
                                        href: { hash: `:dMa3I_0FQ`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:dMa3I_0FQ`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:dMa3I_0FQ`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      c(N, {
                                        height: 31,
                                        children: c(z, {
                                          className: `framer-139243h-container`,
                                          nodeId: `meL_Ox6GN`,
                                          scopeId: `augiA20Il`,
                                          children: c(H, {
                                            breakpoint: C,
                                            overrides: {
                                              acm0y4Ysf: { JvqpmmvGw: e[1] },
                                              cx0ZXnHvi: { JvqpmmvGw: e[2] },
                                            },
                                            children: c(q, {
                                              height: `100%`,
                                              id: `meL_Ox6GN`,
                                              JvqpmmvGw: e[0],
                                              layoutId: `meL_Ox6GN`,
                                              vA9NXfDIM: `See how it works`,
                                              variant: $(`FoS6XZPxY`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  c(j, {
                                    links: [
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      c(N, {
                                        height: 31,
                                        children: c(z, {
                                          className: `framer-1qcx8hd-container`,
                                          nodeId: `fTmFludJG`,
                                          scopeId: `augiA20Il`,
                                          children: c(H, {
                                            breakpoint: C,
                                            overrides: {
                                              acm0y4Ysf: { JvqpmmvGw: e[1] },
                                              cx0ZXnHvi: { JvqpmmvGw: e[2] },
                                            },
                                            children: c(q, {
                                              height: `100%`,
                                              id: `fTmFludJG`,
                                              JvqpmmvGw: e[0],
                                              layoutId: `fTmFludJG`,
                                              vA9NXfDIM: `Define your deal box`,
                                              variant: $(`kWnN_xkUt`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u(`div`, {
                            className: `framer-s7f9jy`,
                            "data-framer-name": `ASCII`,
                            children: [
                              c(Q, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: -60,
                                      y: -60,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onScroll`,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1o0dxdi`,
                                "data-border": !0,
                                "data-framer-name": `Top Left`,
                              }),
                              c(Q, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 60,
                                      y: -60,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onScroll`,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1hvlnu7`,
                                "data-border": !0,
                                "data-framer-name": `Top Right`,
                              }),
                              c(Q, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 60,
                                      y: 60,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onScroll`,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1sahttm`,
                                "data-border": !0,
                                "data-framer-name": `Bottom Right`,
                              }),
                              c(Q, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: -60,
                                      y: 60,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onScroll`,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1kc3t1w`,
                                "data-border": !0,
                                "data-framer-name": `Bottom Left`,
                              }),
                              c(N, {
                                children: c(lr, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stagger: 0,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      target: {
                                        opacity: 0.5,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1.2,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 60,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScroll`,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1tisc1z-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  nodeId: `oZoJJMl4L`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  children: c(ft, {
                                    asciiChars: `@%#*+=-:. `,
                                    asciiColor: `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                                    asciiFont: {
                                      fontFamily: `"Fragment Mono", monospace`,
                                      fontSize: `9px`,
                                      fontStyle: `normal`,
                                      fontWeight: 400,
                                      letterSpacing: `0em`,
                                      lineHeight: `1.1em`,
                                    },
                                    asciiStyle: `dots`,
                                    autoPauseWhenHidden: !1,
                                    backgroundColor: `var(--token-6d5ee4b8-b586-4209-ba49-2bd9ee06fba3, rgba(0, 0, 0, 0))`,
                                    borderRadius: `8px`,
                                    colorMode: `grayscale`,
                                    detail: 1.5,
                                    filters: { blur: 0, brightness: 0, contrast: 1, glow: 0 },
                                    height: `100%`,
                                    id: `oZoJJMl4L`,
                                    inverse: !0,
                                    layoutId: `oZoJJMl4L`,
                                    playbackRate: 1,
                                    poster: `../../assets/images/UcB9WRsKTmm401CZI1e8FkuX8.png`,
                                    showControls: !1,
                                    solidColor: `var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255))`,
                                    style: { height: `100%`, width: `100%` },
                                    videoFile: `../../assets/misc/B3Bpr8C5UvXzBcpsmXj2Slc9kbs.mp4`,
                                    videoObjectFit: `cover`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      u(_.section, {
                        className: `framer-1efn30`,
                        "data-border": !0,
                        "data-framer-name": `Stats`,
                        layout: `position`,
                        children: [
                          c(N, {
                            height: 25,
                            children: c(z, {
                              className: `framer-1cp670y-container`,
                              nodeId: `Va4vHbGL2`,
                              scopeId: `augiA20Il`,
                              children: c(X, {
                                height: `100%`,
                                id: `Va4vHbGL2`,
                                KPDdVnbJ9: `OFF-MARKET M&A INTELLIGENCE`,
                                layoutId: `Va4vHbGL2`,
                                nHzYRdzoI: !0,
                                variant: $(`wjdnMwXds`),
                                width: `100%`,
                              }),
                            }),
                          }),
                          u(`div`, {
                            className: `framer-1qvmdcl`,
                            "data-framer-name": `Stat Strip`,
                            children: [
                              u(`div`, {
                                className: `framer-4lkamd`,
                                "data-framer-name": `Stat`,
                                children: [
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-79bu04`,
                                        "data-styles-preset": `GMp6ZDbq7`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `12M+`,
                                      }),
                                    }),
                                    className: `framer-1vgi5xr`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-kmsqt2`,
                                        "data-styles-preset": `dXsx8iVCg`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86)`,
                                        },
                                        children: `Companies tracked`,
                                      }),
                                    }),
                                    className: `framer-18zhbar`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              u(`div`, {
                                className: `framer-ohjd4v`,
                                "data-framer-name": `Stat`,
                                children: [
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-79bu04`,
                                        "data-styles-preset": `GMp6ZDbq7`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `50+`,
                                      }),
                                    }),
                                    className: `framer-h3f5gx`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-kmsqt2`,
                                        "data-styles-preset": `dXsx8iVCg`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86)`,
                                        },
                                        children: `Data sources`,
                                      }),
                                    }),
                                    className: `framer-1sou08`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              u(`div`, {
                                className: `framer-jtnk3y`,
                                "data-framer-name": `Stat`,
                                children: [
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-79bu04`,
                                        "data-styles-preset": `GMp6ZDbq7`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `Pre-market`,
                                      }),
                                    }),
                                    className: `framer-159yi3l`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-kmsqt2`,
                                        "data-styles-preset": `dXsx8iVCg`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86)`,
                                        },
                                        children: `Targets `,
                                      }),
                                    }),
                                    className: `framer-1vlxohz`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              u(`div`, {
                                className: `framer-19tuvrf`,
                                "data-framer-name": `Stat`,
                                children: [
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-79bu04`,
                                        "data-styles-preset": `GMp6ZDbq7`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `Scored`,
                                      }),
                                    }),
                                    className: `framer-1i9o2y2`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-kmsqt2`,
                                        "data-styles-preset": `dXsx8iVCg`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86)`,
                                        },
                                        children: `To your standards`,
                                      }),
                                    }),
                                    className: `framer-zpzq9s`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      u(_.section, {
                        className: `framer-1pyv8p4`,
                        "data-border": !0,
                        "data-framer-name": `The Problem`,
                        id: A,
                        layout: `position`,
                        ref: te,
                        children: [
                          u(`div`, {
                            className: `framer-1obe6kf`,
                            "data-framer-name": `Text`,
                            children: [
                              c(N, {
                                height: 25,
                                children: c(z, {
                                  className: `framer-buzzqf-container`,
                                  nodeId: `ZpDHJqcJo`,
                                  scopeId: `augiA20Il`,
                                  children: c(X, {
                                    height: `100%`,
                                    id: `ZpDHJqcJo`,
                                    KPDdVnbJ9: `THE PROBLEM`,
                                    layoutId: `ZpDHJqcJo`,
                                    nHzYRdzoI: !0,
                                    variant: $(`wjdnMwXds`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              c(L, {
                                __fromCanvasComponent: !0,
                                children: c(o, {
                                  children: c(`h3`, {
                                    className: `framer-styles-preset-or66bk`,
                                    "data-styles-preset": `xv81tUXg1`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `A good listing is descended on like a piece of bread in a duck pond.`,
                                  }),
                                }),
                                className: `framer-1jyy2b7`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              c(L, {
                                __fromCanvasComponent: !0,
                                children: c(o, {
                                  children: c(`p`, {
                                    className: `framer-styles-preset-1i4fe7d`,
                                    "data-styles-preset": `NbDFs5rgP`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                    },
                                    children: `Every banker, broker, and buyer sees it the moment it goes live. If you find out when everyone else does, you are already too late. The deals worth winning are the ones that are not on the market yet, and will not be, until the right buyer reaches the owner first. That is the window Marketscape works in.`,
                                  }),
                                }),
                                className: `framer-ncrx5h`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          u(`div`, {
                            className: `framer-p2sija`,
                            "data-framer-name": `Illustration`,
                            children: [
                              u(`div`, {
                                className: `framer-1ubv7j2`,
                                "data-framer-name": `Left Hand`,
                                children: [
                                  c(H, {
                                    breakpoint: C,
                                    overrides: {
                                      acm0y4Ysf: {
                                        width: `max((min(min(${m?.width || `100vw`}, 1300px), 780px) - 10px) * 0.5349, 1px)`,
                                      },
                                      cx0ZXnHvi: {
                                        width: `max((min(min(${m?.width || `100vw`}, 1300px) - 24px, 600px) - 10px) * 0.5349, 1px)`,
                                      },
                                    },
                                    children: c(N, {
                                      height: 232,
                                      width: `max((min(min(${m?.width || `100vw`}, 1300px), 1180px) - 10px) * 0.5349, 1px)`,
                                      children: c(lr, {
                                        __framer__spring: {
                                          damping: 60,
                                          delay: 0,
                                          duration: 0.3,
                                          ease: [0.44, 0, 0.56, 1],
                                          mass: 1,
                                          stagger: 0,
                                          stiffness: 500,
                                          type: `spring`,
                                        },
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: -50,
                                              y: 0,
                                            },
                                          },
                                          {
                                            ref: te,
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                        ],
                                        __framer__transformTrigger: `onScrollTarget`,
                                        __framer__transformViewportThreshold: 1,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-6cvxb7-container`,
                                        nodeId: `E6reqONmK`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: c(mn, {
                                          height: `100%`,
                                          id: `E6reqONmK`,
                                          layoutId: `E6reqONmK`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  c(N, {
                                    height: 72,
                                    children: c(lr, {
                                      __framer__spring: {
                                        damping: 60,
                                        delay: 0,
                                        duration: 0.3,
                                        ease: [0.44, 0, 0.56, 1],
                                        mass: 1,
                                        stagger: 0,
                                        stiffness: 500,
                                        type: `spring`,
                                      },
                                      __framer__styleTransformEffectEnabled: !0,
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 100,
                                          },
                                        },
                                        {
                                          ref: te,
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                      ],
                                      __framer__transformTrigger: `onScrollTarget`,
                                      __framer__transformViewportThreshold: 1,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1e0yf7f-container`,
                                      nodeId: `ddBtR6Ewh`,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      transformTemplate: Nr,
                                      children: c(fr, {
                                        __framer__animateOnce: !1,
                                        __framer__obscuredVariantId: `c1zN2Q_tk`,
                                        __framer__threshold: 0.5,
                                        __framer__variantAppearEffectEnabled: !0,
                                        __framer__visibleVariantId: `U667MgtoG`,
                                        height: `100%`,
                                        id: `ddBtR6Ewh`,
                                        layoutId: `ddBtR6Ewh`,
                                        tmWVwMCTj: `The AI`,
                                        variant: $(`c1zN2Q_tk`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              c(`div`, {
                                className: `framer-njc2en`,
                                "data-framer-name": `Right Hand`,
                                children: c(H, {
                                  breakpoint: C,
                                  overrides: {
                                    acm0y4Ysf: {
                                      background: {
                                        alt: `Human Hand Reaching For Right Side`,
                                        fit: `fill`,
                                        intrinsicHeight: 470.5,
                                        intrinsicWidth: 836,
                                        pixelHeight: 941,
                                        pixelWidth: 1672,
                                        sizes: `max((min(min(${m?.width || `100vw`}, 1300px), 780px) - 10px) / 2.15, 1px)`,
                                        src: `../../assets/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?width=1672&height=941`,
                                        srcSet: `../../assets/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?scale-down-to=512&width=1672&height=941 512w,../../assets/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png 1024w,../../assets/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?width=1672&height=941 1672w`,
                                      },
                                    },
                                    cx0ZXnHvi: {
                                      background: {
                                        alt: `Human Hand Reaching For Right Side`,
                                        fit: `fill`,
                                        intrinsicHeight: 470.5,
                                        intrinsicWidth: 836,
                                        pixelHeight: 941,
                                        pixelWidth: 1672,
                                        sizes: `max((min(min(${m?.width || `100vw`}, 1300px) - 24px, 600px) - 10px) / 2.15, 1px)`,
                                        src: `../../assets/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?width=1672&height=941`,
                                        srcSet: `../../assets/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?scale-down-to=512&width=1672&height=941 512w,../../assets/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png 1024w,../../assets/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?width=1672&height=941 1672w`,
                                      },
                                    },
                                  },
                                  children: c(pr, {
                                    __framer__spring: {
                                      damping: 60,
                                      delay: 0,
                                      duration: 0.3,
                                      ease: [0.44, 0, 0.56, 1],
                                      mass: 1,
                                      stagger: 0,
                                      stiffness: 500,
                                      type: `spring`,
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 50,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: te,
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onScrollTarget`,
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    as: `figure`,
                                    background: {
                                      alt: `Human Hand Reaching For Right Side`,
                                      fit: `fill`,
                                      intrinsicHeight: 470.5,
                                      intrinsicWidth: 836,
                                      pixelHeight: 941,
                                      pixelWidth: 1672,
                                      sizes: `max((min(min(${m?.width || `100vw`}, 1300px), 1180px) - 10px) / 2.15, 1px)`,
                                      src: `../../assets/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?width=1672&height=941`,
                                      srcSet: `../../assets/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?scale-down-to=512&width=1672&height=941 512w,../../assets/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png 1024w,../../assets/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?width=1672&height=941 1672w`,
                                    },
                                    className: `framer-1a98h8r`,
                                    "data-framer-name": `Right Hand`,
                                    draggable: `false`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      u(_.section, {
                        className: `framer-c3bwax`,
                        "data-border": !0,
                        "data-framer-name": `The Edge`,
                        id: ne,
                        layout: `position`,
                        ref: M,
                        children: [
                          u(`div`, {
                            className: `framer-12aryng`,
                            "data-framer-name": `Header`,
                            children: [
                              c(N, {
                                height: 25,
                                children: c(z, {
                                  className: `framer-6in2xr-container`,
                                  nodeId: `wSA0hnkSG`,
                                  scopeId: `augiA20Il`,
                                  children: c(X, {
                                    height: `100%`,
                                    id: `wSA0hnkSG`,
                                    KPDdVnbJ9: `THE EDGE`,
                                    layoutId: `wSA0hnkSG`,
                                    nHzYRdzoI: !0,
                                    variant: $(`wjdnMwXds`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              u(`div`, {
                                className: `framer-tys3m3`,
                                "data-framer-name": `Text`,
                                children: [
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`h3`, {
                                        className: `framer-styles-preset-or66bk`,
                                        "data-styles-preset": `xv81tUXg1`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `Most outreach inserts a name and a company. We bring intelligence.`,
                                      }),
                                    }),
                                    className: `framer-9a44s3`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                        },
                                        children: `Four capabilities, one output: interested owners you can actually reach.`,
                                      }),
                                    }),
                                    className: `framer-w806ry`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u(`div`, {
                            className: `framer-1oz1yg5`,
                            "data-framer-name": `Feature Grid`,
                            children: [
                              u(`div`, {
                                className: `framer-a4l40c`,
                                "data-framer-name": `Features`,
                                children: [
                                  u(`div`, {
                                    className: `framer-fsqpi9`,
                                    "data-border": !0,
                                    "data-framer-name": `See the sale before it happens`,
                                    children: [
                                      c(N, {
                                        children: c(z, {
                                          className: `framer-1ixohzr-container`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          nodeId: `aSc269yGO`,
                                          scopeId: `augiA20Il`,
                                          children: c(ke, {
                                            blur: 0,
                                            brightness: 52,
                                            characterSet: `blocks`,
                                            color: {
                                              color: `rgb(0, 162, 255)`,
                                              color1: `rgb(255, 255, 255)`,
                                              color1Point: 0,
                                              color2: `rgba(107, 107, 107, 0)`,
                                              color2Point: 100,
                                              mode: `color`,
                                              threshold: 50,
                                            },
                                            contrast: 0,
                                            customCharacterSet: `@%#*+=-:.`,
                                            ditheringMode: `none`,
                                            font: {
                                              fontFamily: `"Fragment Mono", monospace`,
                                              fontSize: `10px`,
                                              fontStyle: `normal`,
                                              fontWeight: 400,
                                              letterSpacing: `0em`,
                                              lineHeight: `1em`,
                                            },
                                            glow: { blur: 11, opacity: 1 },
                                            height: `100%`,
                                            id: `aSc269yGO`,
                                            image: Pr(
                                              {
                                                pixelHeight: 1254,
                                                pixelWidth: 1254,
                                                src: `../../assets/images/wqszz1c73P5pzvj7UzaEJAVDiY.png`,
                                                srcSet: `../../assets/images/wqszz1c73P5pzvj7UzaEJAVDiY.png?scale-down-to=512&width=1254&height=1254 512w,../../assets/images/wqszz1c73P5pzvj7UzaEJAVDiY.png?scale-down-to=1024&width=1254&height=1254 1024w,../../assets/images/wqszz1c73P5pzvj7UzaEJAVDiY.png 1254w`,
                                              },
                                              `Customer Support Agents Icon`
                                            ),
                                            invertColors: !0,
                                            layoutId: `aSc269yGO`,
                                            outputWidth: 64,
                                            radius: `0px`,
                                            sizing: `fit`,
                                            staticEffect: { interval: 0.1, preview: !1 },
                                            style: { width: `100%` },
                                            whiteMode: `ignore`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      u(`div`, {
                                        className: `framer-pjzi70`,
                                        "data-framer-name": `Heading & Description`,
                                        children: [
                                          c(L, {
                                            __fromCanvasComponent: !0,
                                            children: c(o, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-79bu04`,
                                                "data-styles-preset": `GMp6ZDbq7`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `center` },
                                                children: `See the sale before it happens`,
                                              }),
                                            }),
                                            className: `framer-nxr3nh`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          c(L, {
                                            __fromCanvasComponent: !0,
                                            children: c(o, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-1i4fe7d`,
                                                "data-styles-preset": `NbDFs5rgP`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                                },
                                                children: `We scan millions of private companies for the early signs that an owner is heading toward a sale: generational handover, burnout, life events, lending activity, major asset moves. The targets that are not listed, and will not be for a while.`,
                                              }),
                                            }),
                                            className: `framer-lve91t`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  u(`div`, {
                                    className: `framer-1t8olbu`,
                                    "data-border": !0,
                                    "data-framer-name": `Find the targets you can actually reach`,
                                    children: [
                                      u(`div`, {
                                        className: `framer-r84i3e`,
                                        "data-framer-name": `Heading & Description`,
                                        children: [
                                          c(L, {
                                            __fromCanvasComponent: !0,
                                            children: c(o, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-79bu04`,
                                                "data-styles-preset": `GMp6ZDbq7`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `center` },
                                                children: `Find the targets you can actually reach`,
                                              }),
                                            }),
                                            className: `framer-pctxpr`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          c(L, {
                                            __fromCanvasComponent: !0,
                                            children: c(o, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-1i4fe7d`,
                                                "data-styles-preset": `NbDFs5rgP`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                                },
                                                children: `We map your network, across your professional and email connections, onto every target. Most of these deals get done warm. We show you not just the right companies, but the ones a step or two away from you.`,
                                              }),
                                            }),
                                            className: `framer-p19syk`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(N, {
                                        children: c(z, {
                                          className: `framer-am3hqz-container`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          nodeId: `kGUki_0vr`,
                                          scopeId: `augiA20Il`,
                                          children: c(ke, {
                                            blur: 0,
                                            brightness: 52,
                                            characterSet: `blocks`,
                                            color: {
                                              color: `rgb(255, 79, 252)`,
                                              color1: `rgb(255, 255, 255)`,
                                              color1Point: 0,
                                              color2: `rgba(107, 107, 107, 0)`,
                                              color2Point: 100,
                                              mode: `color`,
                                              threshold: 50,
                                            },
                                            contrast: 0,
                                            customCharacterSet: `@%#*+=-:.`,
                                            ditheringMode: `none`,
                                            font: {
                                              fontFamily: `"Fragment Mono", monospace`,
                                              fontSize: `10px`,
                                              fontStyle: `normal`,
                                              fontWeight: 400,
                                              letterSpacing: `0em`,
                                              lineHeight: `1em`,
                                            },
                                            glow: { blur: 11, opacity: 1 },
                                            height: `100%`,
                                            id: `kGUki_0vr`,
                                            image: Pr(
                                              {
                                                pixelHeight: 1254,
                                                pixelWidth: 1254,
                                                src: `../../assets/images/PrAfnm9BIJ2fFf3C3DBLJH1fgQQ.png`,
                                                srcSet: `../../assets/images/PrAfnm9BIJ2fFf3C3DBLJH1fgQQ.png?scale-down-to=512&width=1254&height=1254 512w,../../assets/images/PrAfnm9BIJ2fFf3C3DBLJH1fgQQ.png?scale-down-to=1024&width=1254&height=1254 1024w,../../assets/images/PrAfnm9BIJ2fFf3C3DBLJH1fgQQ.png 1254w`,
                                              },
                                              `Automated Data Pipelines Icon`
                                            ),
                                            invertColors: !0,
                                            layoutId: `kGUki_0vr`,
                                            outputWidth: 83,
                                            radius: `0px`,
                                            sizing: `fit`,
                                            staticEffect: { interval: 0.1, preview: !1 },
                                            style: { width: `100%` },
                                            whiteMode: `ignore`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              u(`div`, {
                                className: `framer-d3fn2q`,
                                "data-framer-name": `Features`,
                                children: [
                                  u(`div`, {
                                    className: `framer-1ikekdd`,
                                    "data-border": !0,
                                    "data-framer-name": `Two scores, hundreds of inputs`,
                                    children: [
                                      u(`div`, {
                                        className: `framer-o8sg5c`,
                                        "data-framer-name": `Heading & Description`,
                                        children: [
                                          c(L, {
                                            __fromCanvasComponent: !0,
                                            children: c(o, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-79bu04`,
                                                "data-styles-preset": `GMp6ZDbq7`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `center` },
                                                children: `Two scores, hundreds of inputs`,
                                              }),
                                            }),
                                            className: `framer-1kqeal8`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          c(L, {
                                            __fromCanvasComponent: !0,
                                            children: c(o, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-1i4fe7d`,
                                                "data-styles-preset": `NbDFs5rgP`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                                },
                                                children: `Every target carries a strategic fit score and a closeness score, built from hundreds of data points grouped into financials, market, location, and access. The strongest opportunities rise to the top.`,
                                              }),
                                            }),
                                            className: `framer-1x1j9fg`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(N, {
                                        children: c(z, {
                                          className: `framer-1nzu913-container`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          nodeId: `a9pM_xOJ2`,
                                          scopeId: `augiA20Il`,
                                          children: c(ke, {
                                            blur: 0,
                                            brightness: 52,
                                            characterSet: `blocks`,
                                            color: {
                                              color: `rgb(71, 230, 195)`,
                                              color1: `rgb(255, 255, 255)`,
                                              color1Point: 0,
                                              color2: `rgba(107, 107, 107, 0)`,
                                              color2Point: 100,
                                              mode: `color`,
                                              threshold: 50,
                                            },
                                            contrast: 0,
                                            customCharacterSet: `@%#*+=-:.`,
                                            ditheringMode: `none`,
                                            font: {
                                              fontFamily: `"Fragment Mono", monospace`,
                                              fontSize: `10px`,
                                              fontStyle: `normal`,
                                              fontWeight: 400,
                                              letterSpacing: `0em`,
                                              lineHeight: `1em`,
                                            },
                                            glow: { blur: 11, opacity: 1 },
                                            height: `100%`,
                                            id: `a9pM_xOJ2`,
                                            image: Pr(
                                              {
                                                pixelHeight: 1254,
                                                pixelWidth: 1254,
                                                src: `../../assets/images/isZhSGFMk9O7knpadvTkO7vOA2A.png`,
                                                srcSet: `../../assets/images/isZhSGFMk9O7knpadvTkO7vOA2A.png?scale-down-to=512&width=1254&height=1254 512w,../../assets/images/isZhSGFMk9O7knpadvTkO7vOA2A.png?scale-down-to=1024&width=1254&height=1254 1024w,../../assets/images/isZhSGFMk9O7knpadvTkO7vOA2A.png 1254w`,
                                              },
                                              `Secure Enterprise Data Icon`
                                            ),
                                            invertColors: !0,
                                            layoutId: `a9pM_xOJ2`,
                                            outputWidth: 104,
                                            radius: `0px`,
                                            sizing: `fit`,
                                            staticEffect: { interval: 0.1, preview: !1 },
                                            style: { width: `100%` },
                                            whiteMode: `ignore`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  u(`div`, {
                                    className: `framer-108spou`,
                                    "data-border": !0,
                                    "data-framer-name": `A research firm, and we say so`,
                                    children: [
                                      u(`div`, {
                                        className: `framer-iuyg6u`,
                                        "data-framer-name": `Heading & Description`,
                                        children: [
                                          c(L, {
                                            __fromCanvasComponent: !0,
                                            children: c(o, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-79bu04`,
                                                "data-styles-preset": `GMp6ZDbq7`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `center` },
                                                children: `A research firm`,
                                              }),
                                            }),
                                            className: `framer-1k9pkps`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          c(L, {
                                            __fromCanvasComponent: !0,
                                            children: c(o, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-1i4fe7d`,
                                                "data-styles-preset": `NbDFs5rgP`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                                },
                                                children: `We reach owners on behalf of a serious, funded buyer, never posing as the buyer ourselves. We arrive with a full profile of their business, honest about what we might have wrong, and ask one thing: are you open to a conversation. That is why they answer.`,
                                              }),
                                            }),
                                            className: `framer-1bg2shk`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(N, {
                                        children: c(z, {
                                          className: `framer-1dt33t3-container`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          nodeId: `YbCHcfNEp`,
                                          scopeId: `augiA20Il`,
                                          children: c(ke, {
                                            blur: 0,
                                            brightness: 52,
                                            characterSet: `blocks`,
                                            color: {
                                              color: `rgb(255, 189, 46)`,
                                              color1: `rgb(255, 255, 255)`,
                                              color1Point: 0,
                                              color2: `rgba(107, 107, 107, 0)`,
                                              color2Point: 100,
                                              mode: `color`,
                                              threshold: 50,
                                            },
                                            contrast: 0,
                                            customCharacterSet: `@%#*+=-:.`,
                                            ditheringMode: `none`,
                                            font: {
                                              fontFamily: `"Fragment Mono", monospace`,
                                              fontSize: `10px`,
                                              fontStyle: `normal`,
                                              fontWeight: 400,
                                              letterSpacing: `0em`,
                                              lineHeight: `1em`,
                                            },
                                            glow: { blur: 11, opacity: 1 },
                                            height: `100%`,
                                            id: `YbCHcfNEp`,
                                            image: Pr(
                                              {
                                                pixelHeight: 1254,
                                                pixelWidth: 1254,
                                                src: `../../assets/images/soyrmVUDP6ujrsoU9JioDoUW3s.png`,
                                                srcSet: `../../assets/images/soyrmVUDP6ujrsoU9JioDoUW3s.png?scale-down-to=512&width=1254&height=1254 512w,../../assets/images/soyrmVUDP6ujrsoU9JioDoUW3s.png?scale-down-to=1024&width=1254&height=1254 1024w,../../assets/images/soyrmVUDP6ujrsoU9JioDoUW3s.png 1254w`,
                                              },
                                              `Strategic AI Infra Audits Icon`
                                            ),
                                            invertColors: !0,
                                            layoutId: `YbCHcfNEp`,
                                            outputWidth: 98,
                                            radius: `0px`,
                                            sizing: `fit`,
                                            staticEffect: { interval: 0.1, preview: !1 },
                                            style: { width: `100%` },
                                            whiteMode: `ignore`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      u(_.section, {
                        className: `framer-j9v9k1`,
                        "data-border": !0,
                        "data-framer-name": `The Data`,
                        id: ie,
                        layout: `position`,
                        ref: ae,
                        children: [
                          c(H, {
                            breakpoint: C,
                            overrides: {
                              acm0y4Ysf: {
                                width: `min(min(${m?.width || `100vw`}, 1300px), 780px)`,
                              },
                              cx0ZXnHvi: {
                                height: 270,
                                width: `min(min(${m?.width || `100vw`}, 1300px) - 24px, 600px)`,
                              },
                            },
                            children: c(N, {
                              height: 350,
                              width: `min(min(${m?.width || `100vw`}, 1300px), 1180px)`,
                              children: c(H, {
                                breakpoint: C,
                                overrides: {
                                  cx0ZXnHvi: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 0,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -40,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                    ],
                                  },
                                },
                                children: c(lr, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stagger: 0,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 0,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: -100,
                                        y: 0,
                                      },
                                    },
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onInView`,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1llhsr9-container`,
                                  nodeId: `gcV6kbrQr`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  children: c(H, {
                                    breakpoint: C,
                                    overrides: { cx0ZXnHvi: { variant: $(`yKTU0IAET`) } },
                                    children: c($t, {
                                      height: `100%`,
                                      id: `gcV6kbrQr`,
                                      knFpBuDfo: `Public records`,
                                      ky6f7sFMK: `Professional networks`,
                                      layoutId: `gcV6kbrQr`,
                                      style: { height: `100%`, width: `100%` },
                                      toKKbHeGB: `Court filings`,
                                      variant: $(`Rz3JuSc6N`),
                                      width: `100%`,
                                      WwMLgqbB0: `Financial databases`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                          ce() &&
                            c(H, {
                              breakpoint: C,
                              overrides: {
                                cx0ZXnHvi: {
                                  height: 292,
                                  width: `min(min(${m?.width || `100vw`}, 1300px) - 24px, 600px)`,
                                },
                              },
                              children: c(N, {
                                children: c(lr, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stagger: 0,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 0,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 40,
                                      },
                                    },
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onInView`,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1d8gtvm-container hidden-72rtr7 hidden-c8sga5`,
                                  nodeId: `g23LyA_7g`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  children: c($t, {
                                    height: `100%`,
                                    id: `g23LyA_7g`,
                                    knFpBuDfo: `Life-event signals`,
                                    ky6f7sFMK: `Multi-source confidence scoring`,
                                    layoutId: `g23LyA_7g`,
                                    style: { height: `100%`, width: `100%` },
                                    toKKbHeGB: `Lending and asset activity`,
                                    variant: $(`YQHffT1iJ`),
                                    width: `100%`,
                                    WwMLgqbB0: `Owner verification`,
                                  }),
                                }),
                              }),
                            }),
                          u(`div`, {
                            className: `framer-42i74x`,
                            "data-framer-name": `Text`,
                            children: [
                              c(N, {
                                height: 25,
                                children: c(z, {
                                  className: `framer-1gtd50j-container`,
                                  nodeId: `Ghh3RcQvt`,
                                  scopeId: `augiA20Il`,
                                  children: c(X, {
                                    height: `100%`,
                                    id: `Ghh3RcQvt`,
                                    KPDdVnbJ9: `THE DATA`,
                                    layoutId: `Ghh3RcQvt`,
                                    nHzYRdzoI: !0,
                                    variant: $(`wjdnMwXds`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              c(L, {
                                __fromCanvasComponent: !0,
                                children: c(o, {
                                  children: c(`h3`, {
                                    className: `framer-styles-preset-or66bk`,
                                    "data-styles-preset": `xv81tUXg1`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `Breadth others don’t have. Validation others skip.`,
                                  }),
                                }),
                                className: `framer-1vcxbe9`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              c(L, {
                                __fromCanvasComponent: !0,
                                children: c(o, {
                                  children: c(`p`, {
                                    className: `framer-styles-preset-1i4fe7d`,
                                    "data-styles-preset": `NbDFs5rgP`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                    },
                                    children: `We pull from a wide range of public records, court filings, financial databases, professional networks, and proprietary signals, then we do not trust any single one. Every data point is weighed across sources for agreement and reliability, scored for confidence, and confirmed by the owner where possible. When an owner links their books directly, that becomes the highest confidence of all.`,
                                  }),
                                }),
                                className: `framer-1toc2sc`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      u(_.section, {
                        className: `framer-e55wp`,
                        "data-border": !0,
                        "data-framer-name": `Engagements`,
                        id: F,
                        layout: `position`,
                        ref: I,
                        children: [
                          u(`div`, {
                            className: `framer-4kss3d`,
                            "data-framer-name": `Header`,
                            children: [
                              c(N, {
                                height: 25,
                                children: c(z, {
                                  className: `framer-1namnlg-container`,
                                  nodeId: `tANZe7jIu`,
                                  scopeId: `augiA20Il`,
                                  children: c(X, {
                                    height: `100%`,
                                    id: `tANZe7jIu`,
                                    KPDdVnbJ9: `ENGAGEMENTS`,
                                    layoutId: `tANZe7jIu`,
                                    nHzYRdzoI: !0,
                                    variant: $(`wjdnMwXds`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              c(L, {
                                __fromCanvasComponent: !0,
                                children: c(o, {
                                  children: c(`h3`, {
                                    className: `framer-styles-preset-or66bk`,
                                    "data-styles-preset": `xv81tUXg1`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `Start with a map. Scale to a pipeline.`,
                                  }),
                                }),
                                className: `framer-99m0qs`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              c(L, {
                                __fromCanvasComponent: !0,
                                children: c(o, {
                                  children: c(`p`, {
                                    className: `framer-styles-preset-1i4fe7d`,
                                    "data-styles-preset": `NbDFs5rgP`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                    },
                                    children: `From a one-off market study to a fully managed off-market sourcing function.`,
                                  }),
                                }),
                                className: `framer-ma02lv`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          u(`div`, {
                            className: `framer-gexfu6`,
                            "data-framer-name": `Pricing Tiers`,
                            children: [
                              u(Q, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 0,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 20,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onInView`,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-ubehhx`,
                                "data-framer-name": `Tier 1`,
                                children: [
                                  R() &&
                                    c(N, {
                                      height: 25,
                                      children: c(z, {
                                        className: `framer-1jh02ey-container hidden-etszke`,
                                        nodeId: `aH9mpgpey`,
                                        scopeId: `augiA20Il`,
                                        children: c(X, {
                                          height: `100%`,
                                          id: `aH9mpgpey`,
                                          KPDdVnbJ9: `01`,
                                          layoutId: `aH9mpgpey`,
                                          nHzYRdzoI: !1,
                                          variant: $(`wjdnMwXds`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  R() &&
                                    c(`div`, {
                                      className: `framer-1t2eg0w hidden-etszke`,
                                      "data-framer-name": `Horizontal Line`,
                                    }),
                                  c(j, {
                                    links: [
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      c(H, {
                                        breakpoint: C,
                                        overrides: {
                                          cx0ZXnHvi: {
                                            width: `min(min(min(${m?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 900px)`,
                                          },
                                        },
                                        children: c(N, {
                                          height: 308,
                                          children: c(z, {
                                            className: `framer-h4vtil-container`,
                                            nodeId: `i6AcmZZkn`,
                                            scopeId: `augiA20Il`,
                                            children: c(H, {
                                              breakpoint: C,
                                              overrides: {
                                                acm0y4Ysf: { niAwTawgS: e[1] },
                                                cx0ZXnHvi: {
                                                  niAwTawgS: e[2],
                                                  variant: $(`s6o11_xc3`),
                                                },
                                              },
                                              children: c(rr, {
                                                cCu2pK96F: `Yours to action however you like`,
                                                DgtRoYMt5: `Ranked fit scoring`,
                                                height: `100%`,
                                                i9BVbHqB1: `Market Map`,
                                                id: `i6AcmZZkn`,
                                                layoutId: `i6AcmZZkn`,
                                                niAwTawgS: e[0],
                                                O_Vg4pLJ1: `Get a map`,
                                                o3goZ8Nim: `A complete map of every company in a market you define.`,
                                                o62mij8m9: ``,
                                                qJucm0u5h: `Core firmographics and signals`,
                                                style: { width: `100%` },
                                                variant: $(`Xo9XOAvxa`),
                                                WCv3R3NfD: `One-time`,
                                                width: `100%`,
                                                x2B0YMB5u: `from $1,000`,
                                                XbxI6AcL0: `Full company set for your target market`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                              u(Q, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 0,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 20,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onInView`,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-adxkle`,
                                "data-framer-name": `Tier 2`,
                                children: [
                                  c(j, {
                                    links: [
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      c(H, {
                                        breakpoint: C,
                                        overrides: {
                                          cx0ZXnHvi: {
                                            width: `min(min(min(${m?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 900px)`,
                                          },
                                        },
                                        children: c(N, {
                                          height: 308,
                                          children: c(z, {
                                            className: `framer-9nsnxu-container`,
                                            nodeId: `K1hKRmQop`,
                                            scopeId: `augiA20Il`,
                                            children: c(H, {
                                              breakpoint: C,
                                              overrides: {
                                                acm0y4Ysf: { niAwTawgS: e[1] },
                                                cx0ZXnHvi: {
                                                  niAwTawgS: e[2],
                                                  variant: $(`s6o11_xc3`),
                                                },
                                              },
                                              children: c(rr, {
                                                cCu2pK96F: `Single user`,
                                                DgtRoYMt5: `Decision-maker contacts`,
                                                height: `100%`,
                                                i9BVbHqB1: `Signal Starter`,
                                                id: `K1hKRmQop`,
                                                layoutId: `K1hKRmQop`,
                                                niAwTawgS: e[0],
                                                O_Vg4pLJ1: `Start sourcing`,
                                                o3goZ8Nim: `Ongoing off-market targets matched to one deal box.`,
                                                o62mij8m9: ``,
                                                qJucm0u5h: `Intent and relationship scoring`,
                                                style: { width: `100%` },
                                                variant: $(`Xo9XOAvxa`),
                                                WCv3R3NfD: `Per month`,
                                                width: `100%`,
                                                x2B0YMB5u: `From $3,000 per month`,
                                                XbxI6AcL0: `Continuous target surfacing`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  R() &&
                                    c(`div`, {
                                      className: `framer-1rr4jdm hidden-etszke`,
                                      "data-framer-name": `Horizontal Line`,
                                    }),
                                  R() &&
                                    c(`div`, {
                                      className: `framer-1rj88tz hidden-etszke`,
                                      "data-framer-name": `Vertical Line`,
                                    }),
                                  R() &&
                                    c(N, {
                                      height: 25,
                                      children: c(z, {
                                        className: `framer-p1oevt-container hidden-etszke`,
                                        nodeId: `k8lzqmVEA`,
                                        scopeId: `augiA20Il`,
                                        children: c(X, {
                                          height: `100%`,
                                          id: `k8lzqmVEA`,
                                          KPDdVnbJ9: `02`,
                                          layoutId: `k8lzqmVEA`,
                                          nHzYRdzoI: !1,
                                          variant: $(`wjdnMwXds`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                              u(Q, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 0,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 20,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onInView`,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1ahm9j2`,
                                "data-framer-name": `Tier 1`,
                                children: [
                                  R() &&
                                    c(N, {
                                      height: 25,
                                      children: c(z, {
                                        className: `framer-1khehm6-container hidden-etszke`,
                                        nodeId: `AVMapFgCT`,
                                        scopeId: `augiA20Il`,
                                        children: c(X, {
                                          height: `100%`,
                                          id: `AVMapFgCT`,
                                          KPDdVnbJ9: `03`,
                                          layoutId: `AVMapFgCT`,
                                          nHzYRdzoI: !1,
                                          variant: $(`wjdnMwXds`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  R() &&
                                    c(`div`, {
                                      className: `framer-19mb0wy hidden-etszke`,
                                      "data-framer-name": `Horizontal Line`,
                                    }),
                                  R() &&
                                    c(`div`, {
                                      className: `framer-uul1ue hidden-etszke`,
                                      "data-framer-name": `Vertical Line`,
                                    }),
                                  c(j, {
                                    links: [
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      c(H, {
                                        breakpoint: C,
                                        overrides: {
                                          cx0ZXnHvi: {
                                            width: `min(min(min(${m?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 900px)`,
                                          },
                                        },
                                        children: c(N, {
                                          height: 308,
                                          children: c(z, {
                                            className: `framer-13o12ul-container`,
                                            nodeId: `azrJuuxzx`,
                                            scopeId: `augiA20Il`,
                                            children: c(H, {
                                              breakpoint: C,
                                              overrides: {
                                                acm0y4Ysf: { niAwTawgS: e[1] },
                                                cx0ZXnHvi: {
                                                  niAwTawgS: e[2],
                                                  variant: $(`s6o11_xc3`),
                                                },
                                              },
                                              children: c(rr, {
                                                cCu2pK96F: `A full dossier on every interested owner`,
                                                DgtRoYMt5: `Interest and financial validation`,
                                                height: `100%`,
                                                i9BVbHqB1: `Signal Pro`,
                                                id: `azrJuuxzx`,
                                                layoutId: `azrJuuxzx`,
                                                niAwTawgS: e[0],
                                                O_Vg4pLJ1: `Talk to us`,
                                                o3goZ8Nim: `We run the outreach, validation, and dossiers end to end.`,
                                                o62mij8m9: `/month`,
                                                qJucm0u5h: `Done-for-you outreach under your brand`,
                                                style: { width: `100%` },
                                                variant: $(`Xo9XOAvxa`),
                                                WCv3R3NfD: `Most popular`,
                                                width: `100%`,
                                                x2B0YMB5u: `$5,000 per month`,
                                                XbxI6AcL0: `Everything in Starter`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                              u(Q, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 0,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 20,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onInView`,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1664ow7`,
                                "data-framer-name": `Tier 4`,
                                children: [
                                  c(j, {
                                    links: [
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      c(N, {
                                        height: 308,
                                        children: c(z, {
                                          className: `framer-2aln4p-container`,
                                          nodeId: `Lx5atnZwS`,
                                          scopeId: `augiA20Il`,
                                          children: c(H, {
                                            breakpoint: C,
                                            overrides: {
                                              acm0y4Ysf: { niAwTawgS: e[1] },
                                              cx0ZXnHvi: { niAwTawgS: e[2] },
                                            },
                                            children: c(rr, {
                                              cCu2pK96F: `API and direct data access`,
                                              DgtRoYMt5: `Data enrichment on request`,
                                              height: `100%`,
                                              i9BVbHqB1: `Multi-Thesis`,
                                              id: `Lx5atnZwS`,
                                              layoutId: `Lx5atnZwS`,
                                              niAwTawgS: e[0],
                                              O_Vg4pLJ1: `Request a quote`,
                                              o3goZ8Nim: `Multiple deal boxes and users for a firm-wide program.`,
                                              o62mij8m9: ``,
                                              qJucm0u5h: `Team relationship mapping`,
                                              style: { width: `100%` },
                                              variant: $(`Xo9XOAvxa`),
                                              WCv3R3NfD: `Custom`,
                                              width: `100%`,
                                              x2B0YMB5u: `Custom pricing`,
                                              XbxI6AcL0: `Multiple theses and seats`,
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  c(`div`, {
                                    className: `framer-o92knj`,
                                    "data-framer-name": `Horizontal Line`,
                                  }),
                                  c(`div`, {
                                    className: `framer-1sfhczf`,
                                    "data-framer-name": `Vertical Line`,
                                  }),
                                  c(N, {
                                    height: 25,
                                    children: c(z, {
                                      className: `framer-z6zws2-container`,
                                      nodeId: `oDRJPaZOS`,
                                      scopeId: `augiA20Il`,
                                      children: c(X, {
                                        height: `100%`,
                                        id: `oDRJPaZOS`,
                                        KPDdVnbJ9: `04`,
                                        layoutId: `oDRJPaZOS`,
                                        nHzYRdzoI: !1,
                                        variant: $(`wjdnMwXds`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c(L, {
                            __fromCanvasComponent: !0,
                            children: c(o, {
                              children: c(`p`, {
                                className: `framer-styles-preset-kmsqt2`,
                                "data-styles-preset": `dXsx8iVCg`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86)`,
                                },
                                children: `Data enrichment on your existing list is available as a one-off project.`,
                              }),
                            }),
                            className: `framer-1i8omyh`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      u(vr, {
                        className: `framer-1f9t1zk`,
                        "data-border": !0,
                        "data-framer-name": `What You Receive`,
                        flowEffectEnabled: !0,
                        flowEffectTransition: kr,
                        isNestedFlowEffect: !0,
                        layout: `position`,
                        children: [
                          c(_r, {
                            className: `framer-vo7snk`,
                            "data-framer-name": `Content`,
                            flowEffectEnabled: !0,
                            flowEffectTransition: kr,
                            isNestedFlowEffect: !0,
                            layout: `position`,
                            children: u(_.div, {
                              className: `framer-19nxfmp`,
                              "data-framer-name": `Text`,
                              layout: `position`,
                              children: [
                                c(N, {
                                  height: 25,
                                  children: c(z, {
                                    className: `framer-5bhhot-container`,
                                    nodeId: `nG0PQDBbh`,
                                    scopeId: `augiA20Il`,
                                    children: c(X, {
                                      height: `100%`,
                                      id: `nG0PQDBbh`,
                                      KPDdVnbJ9: `WHAT YOU RECEIVE`,
                                      layoutId: `nG0PQDBbh`,
                                      nHzYRdzoI: !0,
                                      variant: $(`wjdnMwXds`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                c(L, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(`h3`, {
                                      className: `framer-styles-preset-or66bk`,
                                      "data-styles-preset": `xv81tUXg1`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `From your thesis to a ready conversation.`,
                                    }),
                                  }),
                                  className: `framer-1a335sz`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                c(L, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-1i4fe7d`,
                                      "data-styles-preset": `NbDFs5rgP`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                      },
                                      children: `Here is what a typical engagement looks like. Details below are an illustrative example, not a specific client.`,
                                    }),
                                  }),
                                  className: `framer-leyx5e`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          u(_.div, {
                            className: `framer-1viufib`,
                            "data-framer-name": `Steps`,
                            layout: `position`,
                            children: [
                              u(`div`, {
                                className: `framer-1qmbnci`,
                                "data-border": !0,
                                "data-framer-name": `Step 1`,
                                children: [
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-13o8gvd`,
                                        "data-styles-preset": `rhzuGFsMS`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86)`,
                                        },
                                        children: `01`,
                                      }),
                                    }),
                                    className: `framer-121xke8`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-79bu04`,
                                        "data-styles-preset": `GMp6ZDbq7`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `You define your deal box`,
                                      }),
                                    }),
                                    className: `framer-fschug`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86)`,
                                        },
                                        children: `Sector, size, geography, model, and the kind of owner situation you want to step into. The sharper the thesis, the sharper the targets.`,
                                      }),
                                    }),
                                    className: `framer-szzqsr`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              u(`div`, {
                                className: `framer-1qx2ijy`,
                                "data-border": !0,
                                "data-framer-name": `Step 1`,
                                children: [
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-13o8gvd`,
                                        "data-styles-preset": `rhzuGFsMS`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86)`,
                                        },
                                        children: `02`,
                                      }),
                                    }),
                                    className: `framer-1ko5c1r`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-79bu04`,
                                        "data-styles-preset": `GMp6ZDbq7`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `We surface the off-market targets`,
                                      }),
                                    }),
                                    className: `framer-5ww5ru`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86)`,
                                        },
                                        children: `We rank private companies on strategic fit and on how close each one already is to your network.`,
                                      }),
                                    }),
                                    className: `framer-1nmi3p7`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              u(`div`, {
                                className: `framer-uw5sjq`,
                                "data-border": !0,
                                "data-framer-name": `Step 1`,
                                children: [
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-13o8gvd`,
                                        "data-styles-preset": `rhzuGFsMS`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86)`,
                                        },
                                        children: `03`,
                                      }),
                                    }),
                                    className: `framer-199vrfi`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-79bu04`,
                                        "data-styles-preset": `GMp6ZDbq7`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `We validate interest and financials`,
                                      }),
                                    }),
                                    className: `framer-gdmtmt`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86)`,
                                        },
                                        children: `We reach the decision-makers as a research firm, confirm they are open to a conversation, and build a full dossier on each.`,
                                      }),
                                    }),
                                    className: `framer-1jv3je3`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              u(`div`, {
                                className: `framer-6gx5jj`,
                                "data-border": !0,
                                "data-framer-name": `Step 1`,
                                children: [
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-13o8gvd`,
                                        "data-styles-preset": `rhzuGFsMS`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86)`,
                                        },
                                        children: `04`,
                                      }),
                                    }),
                                    className: `framer-1hjo7qf`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-79bu04`,
                                        "data-styles-preset": `GMp6ZDbq7`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `You choose who to pursue`,
                                      }),
                                    }),
                                    className: `framer-4gtpss`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86)`,
                                        },
                                        children: `You receive a ranked list of interested, verified owners. Pick the ones worth pursuing and we line up the introduction for your deal team.`,
                                      }),
                                    }),
                                    className: `framer-50akif`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u(_.div, {
                            className: `framer-i2iwlp`,
                            "data-border": !0,
                            "data-framer-name": `Example Dossier`,
                            layout: `position`,
                            children: [
                              c(L, {
                                __fromCanvasComponent: !0,
                                children: c(o, {
                                  children: c(`p`, {
                                    className: `framer-styles-preset-13o8gvd`,
                                    "data-styles-preset": `rhzuGFsMS`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86)`,
                                    },
                                    children: `EXAMPLE DOSSIER (ILLUSTRATIVE)`,
                                  }),
                                }),
                                className: `framer-hls0t3`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              c(L, {
                                __fromCanvasComponent: !0,
                                children: c(o, {
                                  children: c(`p`, {
                                    className: `framer-styles-preset-1i4fe7d`,
                                    "data-styles-preset": `NbDFs5rgP`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: `A regional operator in your target sector, showing a generational-handover signal, an owner-verified revenue profile, a strategic fit score, a closeness score, and two shared connections into the company.`,
                                  }),
                                }),
                                className: `framer-19xyyxc`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      u(vr, {
                        className: `framer-1nf5w1g`,
                        "data-border": !0,
                        "data-framer-name": `Frequently Asked Questions`,
                        flowEffectEnabled: !0,
                        flowEffectTransition: kr,
                        isNestedFlowEffect: !0,
                        layout: `position`,
                        children: [
                          c(_r, {
                            className: `framer-1vg89ub`,
                            "data-framer-name": `Text & Email`,
                            flowEffectEnabled: !0,
                            flowEffectTransition: kr,
                            isNestedFlowEffect: !0,
                            layout: `position`,
                            children: u(_.div, {
                              className: `framer-vb0t50`,
                              "data-framer-name": `Text`,
                              layout: `position`,
                              children: [
                                c(L, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(`h3`, {
                                      className: `framer-styles-preset-or66bk`,
                                      "data-styles-preset": `xv81tUXg1`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: `Frequently Asked Questions`,
                                    }),
                                  }),
                                  className: `framer-1qd9cfl`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                c(L, {
                                  __fromCanvasComponent: !0,
                                  children: c(o, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-1i4fe7d`,
                                      "data-styles-preset": `NbDFs5rgP`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                      },
                                      children: `Straight answers on how we find targets, reach owners, and what you receive.`,
                                    }),
                                  }),
                                  className: `framer-1b6ksw0`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          c(H, {
                            breakpoint: C,
                            overrides: {
                              acm0y4Ysf: {
                                width: `max((min(min(${m?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                              },
                              cx0ZXnHvi: {
                                width: `calc(min(min(${m?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                              },
                            },
                            children: c(N, {
                              height: 448,
                              width: `max((min(min(${m?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                              children: c(z, {
                                className: `framer-vxv5en-container`,
                                layout: `position`,
                                nodeId: `DpGvX6bB2`,
                                rendersWithMotion: !0,
                                scopeId: `augiA20Il`,
                                children: c(On, {
                                  height: `100%`,
                                  id: `DpGvX6bB2`,
                                  layoutId: `DpGvX6bB2`,
                                  style: { width: `100%` },
                                  variant: $(`tjfnlNbXA`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          ce() &&
                            c(_.div, {
                              className: `framer-1n9inkx hidden-72rtr7 hidden-c8sga5`,
                              "data-framer-name": `Support Email`,
                              layout: `position`,
                              children: c(N, {
                                height: 25,
                                children: c(z, {
                                  className: `framer-1ng5joe-container`,
                                  nodeId: `zAuPnEL19`,
                                  scopeId: `augiA20Il`,
                                  children: c(Ve, {
                                    AHhpNBfRr: `mailto:krutikmaru18@gmail.com`,
                                    height: `100%`,
                                    id: `zAuPnEL19`,
                                    KPDdVnbJ9: `support@stackgrid.framer.website`,
                                    layoutId: `zAuPnEL19`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                        ],
                      }),
                      u(_.section, {
                        className: `framer-1t95ab7`,
                        "data-border": !0,
                        "data-framer-name": `Request Access`,
                        id: pe,
                        layout: `position`,
                        ref: B(pe),
                        children: [
                          u(`div`, {
                            className: `framer-owgqqa`,
                            "data-framer-name": `Content`,
                            children: [
                              u(`div`, {
                                className: `framer-8dgwa8`,
                                "data-framer-name": `Text`,
                                children: [
                                  c(N, {
                                    height: 25,
                                    children: c(z, {
                                      className: `framer-14tfkwe-container`,
                                      nodeId: `vheRhD9Wm`,
                                      scopeId: `augiA20Il`,
                                      children: c(X, {
                                        height: `100%`,
                                        id: `vheRhD9Wm`,
                                        KPDdVnbJ9: `REQUEST ACCESS`,
                                        layoutId: `vheRhD9Wm`,
                                        nHzYRdzoI: !0,
                                        variant: $(`wjdnMwXds`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`h3`, {
                                        className: `framer-styles-preset-or66bk`,
                                        "data-styles-preset": `xv81tUXg1`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `Tell us your deal box.`,
                                      }),
                                    }),
                                    className: `framer-qnul74`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(L, {
                                    __fromCanvasComponent: !0,
                                    children: c(o, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                        },
                                        children: `Describe the kind of company you want to acquire. We will come back with a sample of off-market owners who fit, and how close they already are to you.`,
                                      }),
                                    }),
                                    className: `framer-1co84jf`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              u(`div`, {
                                className: `framer-1ncmn0x`,
                                "data-framer-name": `Micro Trust Elements`,
                                children: [
                                  c(H, {
                                    breakpoint: C,
                                    overrides: {
                                      acm0y4Ysf: {
                                        width: `max((min(min(${m?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                      },
                                      cx0ZXnHvi: {
                                        width: `calc(min(min(${m?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                      },
                                    },
                                    children: c(N, {
                                      height: 55,
                                      width: `max((min(min(${m?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      children: c(z, {
                                        className: `framer-1j70mko-container`,
                                        nodeId: `VT_GLRVyL`,
                                        scopeId: `augiA20Il`,
                                        children: c(Fe, {
                                          height: `100%`,
                                          id: `VT_GLRVyL`,
                                          layoutId: `VT_GLRVyL`,
                                          mQrslU2vj: `You speak with a principal, not a bot.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: $(`LxBtIKFqa`),
                                          vE6Ulm4Jw: ze,
                                          VJBFLDEGc: `A person who works your market reads every deal box.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  c(H, {
                                    breakpoint: C,
                                    overrides: {
                                      acm0y4Ysf: {
                                        width: `max((min(min(${m?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                      },
                                      cx0ZXnHvi: {
                                        width: `calc(min(min(${m?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                      },
                                    },
                                    children: c(N, {
                                      height: 55,
                                      width: `max((min(min(${m?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      children: c(z, {
                                        className: `framer-jq1j17-container`,
                                        nodeId: `wxSMDdoZe`,
                                        scopeId: `augiA20Il`,
                                        children: c(Fe, {
                                          height: `100%`,
                                          id: `wxSMDdoZe`,
                                          layoutId: `wxSMDdoZe`,
                                          mQrslU2vj: `No aggressive sales pitch.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: $(`LxBtIKFqa`),
                                          vE6Ulm4Jw: ot,
                                          VJBFLDEGc: `We answer your questions and show you a sample. That is it.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  c(H, {
                                    breakpoint: C,
                                    overrides: {
                                      acm0y4Ysf: {
                                        width: `max((min(min(${m?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                      },
                                      cx0ZXnHvi: {
                                        width: `calc(min(min(${m?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                      },
                                    },
                                    children: c(N, {
                                      height: 55,
                                      width: `max((min(min(${m?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      children: c(z, {
                                        className: `framer-1cq3mll-container`,
                                        nodeId: `k1Iv1Yu7D`,
                                        scopeId: `augiA20Il`,
                                        children: c(Fe, {
                                          height: `100%`,
                                          id: `k1Iv1Yu7D`,
                                          layoutId: `k1Iv1Yu7D`,
                                          mQrslU2vj: `Nothing is shared until you choose to engage.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: $(`LxBtIKFqa`),
                                          vE6Ulm4Jw: Le,
                                          VJBFLDEGc: `Outreach is discreet and framed as research, not a sale.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c(fe, {
                            action: `https://api.framer.com/forms/v1/forms/a16558eb-ce00-46c2-ad72-9da46be52cca/submit`,
                            className: `framer-1nak2lz`,
                            "data-border": !0,
                            "data-framer-name": `Deal Box Form`,
                            nodeId: `vQKSMKYTN`,
                            children: (e) =>
                              u(f, {
                                children: [
                                  u(`div`, {
                                    className: `framer-1a8ib4y`,
                                    "data-framer-name": `Name & Firm`,
                                    children: [
                                      u(`label`, {
                                        className: `framer-2vnwyg`,
                                        children: [
                                          c(L, {
                                            __fromCanvasComponent: !0,
                                            children: c(o, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-kmsqt2`,
                                                "data-styles-preset": `dXsx8iVCg`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e)`,
                                                },
                                                children: `Name`,
                                              }),
                                            }),
                                            className: `framer-1hgu5mr`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          c(V, {
                                            className: `framer-ijdbhl`,
                                            inputName: `Name`,
                                            placeholder: `Your name`,
                                            required: !0,
                                            type: `text`,
                                          }),
                                        ],
                                      }),
                                      u(`label`, {
                                        className: `framer-638yv5`,
                                        children: [
                                          c(L, {
                                            __fromCanvasComponent: !0,
                                            children: c(o, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-kmsqt2`,
                                                "data-styles-preset": `dXsx8iVCg`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e)`,
                                                },
                                                children: `Firm`,
                                              }),
                                            }),
                                            className: `framer-1eelwjo`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          c(V, {
                                            className: `framer-xaqtz8`,
                                            inputName: `Firm`,
                                            placeholder: `Your firm`,
                                            required: !0,
                                            type: `text`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  u(`label`, {
                                    className: `framer-1di073k`,
                                    children: [
                                      c(L, {
                                        __fromCanvasComponent: !0,
                                        children: c(o, {
                                          children: c(`p`, {
                                            className: `framer-styles-preset-kmsqt2`,
                                            "data-styles-preset": `dXsx8iVCg`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e)`,
                                            },
                                            children: `Work email`,
                                          }),
                                        }),
                                        className: `framer-19i5lmr`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      c(V, {
                                        className: `framer-go5qbc`,
                                        inputName: `Work Email`,
                                        placeholder: `you@firm.com`,
                                        required: !0,
                                        type: `email`,
                                      }),
                                    ],
                                  }),
                                  u(`label`, {
                                    className: `framer-1hewr0y`,
                                    children: [
                                      c(L, {
                                        __fromCanvasComponent: !0,
                                        children: c(o, {
                                          children: c(`p`, {
                                            className: `framer-styles-preset-kmsqt2`,
                                            "data-styles-preset": `dXsx8iVCg`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e)`,
                                            },
                                            children: `Target sector`,
                                          }),
                                        }),
                                        className: `framer-1wtx51h`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      c(V, {
                                        className: `framer-1wbtnwe`,
                                        inputName: `Target Sector`,
                                        placeholder: `e.g. Industrial services`,
                                        required: !0,
                                        type: `text`,
                                      }),
                                    ],
                                  }),
                                  u(`label`, {
                                    className: `framer-110yoe3`,
                                    children: [
                                      c(L, {
                                        __fromCanvasComponent: !0,
                                        children: c(o, {
                                          children: c(`p`, {
                                            className: `framer-styles-preset-kmsqt2`,
                                            "data-styles-preset": `dXsx8iVCg`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e)`,
                                            },
                                            children: `Revenue range`,
                                          }),
                                        }),
                                        className: `framer-11kj3aa`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      c(se, {
                                        className: `framer-99nbxb`,
                                        inputName: `Revenue Range`,
                                        required: !0,
                                        selectOptions: [
                                          {
                                            title: `Under $5M`,
                                            type: `option`,
                                            value: `Under $5M`,
                                          },
                                          {
                                            title: `$5M to $25M`,
                                            type: `option`,
                                            value: `$5M to $25M`,
                                          },
                                          {
                                            title: `$25M to $100M`,
                                            type: `option`,
                                            value: `$25M to $100M`,
                                          },
                                          { title: `$100M+`, type: `option`, value: `$100M+` },
                                        ],
                                      }),
                                    ],
                                  }),
                                  u(`label`, {
                                    className: `framer-y1k560`,
                                    children: [
                                      c(L, {
                                        __fromCanvasComponent: !0,
                                        children: c(o, {
                                          children: c(`p`, {
                                            className: `framer-styles-preset-kmsqt2`,
                                            "data-styles-preset": `dXsx8iVCg`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e)`,
                                            },
                                            children: `Geography`,
                                          }),
                                        }),
                                        className: `framer-wc9dbj`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      c(V, {
                                        className: `framer-m2xh4d`,
                                        inputName: `Geography`,
                                        placeholder: `e.g. Midwest, national`,
                                        type: `text`,
                                      }),
                                    ],
                                  }),
                                  u(`label`, {
                                    className: `framer-1adccai`,
                                    children: [
                                      c(L, {
                                        __fromCanvasComponent: !0,
                                        children: c(o, {
                                          children: c(`p`, {
                                            className: `framer-styles-preset-kmsqt2`,
                                            "data-styles-preset": `dXsx8iVCg`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e)`,
                                            },
                                            children: `Notes on your thesis`,
                                          }),
                                        }),
                                        className: `framer-1ifrogx`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      c(V, {
                                        className: `framer-1kyk8y4`,
                                        inputName: `Notes On Your Thesis`,
                                        placeholder: `What you look for, what you avoid, anything else we should know.`,
                                        type: `textarea`,
                                      }),
                                    ],
                                  }),
                                  c(H, {
                                    breakpoint: C,
                                    overrides: {
                                      acm0y4Ysf: {
                                        width: `calc(min(max((min(min(${m?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px), 500px) - 80px)`,
                                      },
                                      cx0ZXnHvi: {
                                        width: `calc(min(min(min(${m?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 500px) - 80px)`,
                                      },
                                    },
                                    children: c(N, {
                                      height: 40,
                                      width: `calc(min(max((min(min(${m?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px), 500px) - 80px)`,
                                      children: c(z, {
                                        className: `framer-1j1elfp-container`,
                                        nodeId: `URzxJlU08`,
                                        scopeId: `augiA20Il`,
                                        children: c(Ke, {
                                          arpT9QFmV: `Received. We will be in touch.`,
                                          height: `100%`,
                                          id: `URzxJlU08`,
                                          layoutId: `URzxJlU08`,
                                          style: { height: `100%`, width: `100%` },
                                          type: `submit`,
                                          variant: Fr(
                                            e,
                                            {
                                              error: `PPljyH5_r`,
                                              incomplete: `WRb6p8jNW`,
                                              pending: `UPQmYyUya`,
                                              success: `jG0My5y6_`,
                                            },
                                            $(`rIkqgLzeQ`)
                                          ),
                                          w5DnkIBNM: `Send my deal box`,
                                          width: `100%`,
                                          Z86Zq0Wki: `Something went wrong. Try again.`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-5sVnl.framer-lux5qc, .framer-5sVnl .framer-lux5qc { display: block; }`,
        `.framer-5sVnl.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, #f5f5f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-5sVnl .framer-41erml { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1prmqhr { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-end; max-width: 1180px; overflow: visible; padding: 140px 28px 110px 28px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1m0mf1k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-11kwsia-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-5sVnl .framer-13vovq9, .framer-5sVnl .framer-tys3m3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1ec2sr0, .framer-5sVnl .framer-1jyy2b7, .framer-5sVnl .framer-9a44s3, .framer-5sVnl .framer-nxr3nh, .framer-5sVnl .framer-pctxpr, .framer-5sVnl .framer-1kqeal8, .framer-5sVnl .framer-1k9pkps, .framer-5sVnl .framer-1vcxbe9, .framer-5sVnl .framer-99m0qs, .framer-5sVnl .framer-1a335sz, .framer-5sVnl .framer-1qd9cfl, .framer-5sVnl .framer-1b6ksw0, .framer-5sVnl .framer-qnul74 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5sVnl .framer-f2ebt0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 520px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5sVnl .framer-1uwjo92, .framer-5sVnl .framer-1a8ib4y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-139243h-container, .framer-5sVnl .framer-1qcx8hd-container, .framer-5sVnl .framer-1cp670y-container, .framer-5sVnl .framer-buzzqf-container, .framer-5sVnl .framer-6in2xr-container, .framer-5sVnl .framer-1gtd50j-container, .framer-5sVnl .framer-1namnlg-container, .framer-5sVnl .framer-1jh02ey-container, .framer-5sVnl .framer-p1oevt-container, .framer-5sVnl .framer-1khehm6-container, .framer-5sVnl .framer-z6zws2-container, .framer-5sVnl .framer-5bhhot-container, .framer-5sVnl .framer-1ng5joe-container, .framer-5sVnl .framer-14tfkwe-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-5sVnl .framer-s7f9jy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-5sVnl .framer-1o0dxdi { --border-bottom-width: 0px; --border-color: var(--token-4e110321-98f8-47ee-937e-751736baa2db, #808080); --border-left-width: 2px; --border-right-width: 0px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 20px; z-index: 1; }`,
        `.framer-5sVnl .framer-1hvlnu7 { --border-bottom-width: 0px; --border-color: var(--token-4e110321-98f8-47ee-937e-751736baa2db, #808080); --border-left-width: 0px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; width: 20px; z-index: 1; }`,
        `.framer-5sVnl .framer-1sahttm { --border-bottom-width: 2px; --border-color: var(--token-4e110321-98f8-47ee-937e-751736baa2db, #808080); --border-left-width: 0px; --border-right-width: 2px; --border-style: solid; --border-top-width: 0px; aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; width: 20px; z-index: 1; }`,
        `.framer-5sVnl .framer-1kc3t1w { --border-bottom-width: 2px; --border-color: var(--token-4e110321-98f8-47ee-937e-751736baa2db, #808080); --border-left-width: 2px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 20px; z-index: 1; }`,
        `.framer-5sVnl .framer-1tisc1z-container { flex: none; height: 420px; position: relative; width: 595px; }`,
        `.framer-5sVnl .framer-1efn30 { --border-bottom-width: 1px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 0px 50px 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1qvmdcl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 28px 0px 28px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-4lkamd, .framer-5sVnl .framer-ohjd4v, .framer-5sVnl .framer-jtnk3y, .framer-5sVnl .framer-19tuvrf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-5sVnl .framer-1vgi5xr, .framer-5sVnl .framer-18zhbar, .framer-5sVnl .framer-h3f5gx, .framer-5sVnl .framer-1sou08, .framer-5sVnl .framer-159yi3l, .framer-5sVnl .framer-1vlxohz, .framer-5sVnl .framer-1i9o2y2, .framer-5sVnl .framer-zpzq9s, .framer-5sVnl .framer-1i8omyh, .framer-5sVnl .framer-fschug, .framer-5sVnl .framer-szzqsr, .framer-5sVnl .framer-5ww5ru, .framer-5sVnl .framer-1nmi3p7, .framer-5sVnl .framer-gdmtmt, .framer-5sVnl .framer-1jv3je3, .framer-5sVnl .framer-4gtpss, .framer-5sVnl .framer-50akif, .framer-5sVnl .framer-hls0t3, .framer-5sVnl .framer-19xyyxc, .framer-5sVnl .framer-1hgu5mr, .framer-5sVnl .framer-1eelwjo, .framer-5sVnl .framer-19i5lmr, .framer-5sVnl .framer-1wtx51h, .framer-5sVnl .framer-11kj3aa, .framer-5sVnl .framer-wc9dbj, .framer-5sVnl .framer-1ifrogx { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5sVnl .framer-1pyv8p4 { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1obe6kf, .framer-5sVnl .framer-42i74x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 28px 0px 28px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-ncrx5h { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 560px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-p2sija { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1ubv7j2 { align-content: center; align-items: center; display: flex; flex: 1.15 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 100px 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-5sVnl .framer-6cvxb7-container, .framer-5sVnl .framer-1j70mko-container, .framer-5sVnl .framer-jq1j17-container, .framer-5sVnl .framer-1cq3mll-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1e0yf7f-container { flex: none; height: auto; left: 45%; position: absolute; top: 66%; transform: translate(-50%, -50%); width: auto; z-index: 1; }`,
        `.framer-5sVnl .framer-njc2en { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 170px 0px 0px 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-5sVnl .framer-1a98h8r { -webkit-filter: grayscale(1); -webkit-user-select: none; filter: grayscale(1); flex: 1 0 0px; height: auto; overflow: visible; position: relative; user-select: none; width: 1px; }`,
        `.framer-5sVnl .framer-c3bwax, .framer-5sVnl .framer-1f9t1zk { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-12aryng, .framer-5sVnl .framer-4kss3d, .framer-5sVnl .framer-19nxfmp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-w806ry, .framer-5sVnl .framer-ma02lv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5sVnl .framer-1oz1yg5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 900px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-a4l40c, .framer-5sVnl .framer-d3fn2q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 400px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-fsqpi9 { --border-bottom-width: 1px; --border-color: var(--token-95a8f7e0-de26-4a21-abd8-7324f048c094, #bdbdbd); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-5sVnl .framer-1ixohzr-container { flex: none; height: auto; left: 50%; position: absolute; top: 43%; transform: translate(-50%, -50%); width: 343px; z-index: 1; }`,
        `.framer-5sVnl .framer-pjzi70, .framer-5sVnl .framer-iuyg6u { align-content: center; align-items: center; background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.19) 11%, rgba(254, 254, 254, 0.38) 23%, rgba(254, 254, 254, 0.45) 28.999999999999996%, rgba(254, 254, 254, 0.62) 45%, rgba(254, 254, 254, 0.72) 57.99999999999999%, rgba(253, 253, 253, 0.89) 78%, var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(253, 253, 253)) 100%); bottom: 1px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; left: 1px; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: absolute; right: 1px; z-index: 2; }`,
        `.framer-5sVnl .framer-lve91t, .framer-5sVnl .framer-p19syk, .framer-5sVnl .framer-1x1j9fg, .framer-5sVnl .framer-1bg2shk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1t8olbu, .framer-5sVnl .framer-1ikekdd, .framer-5sVnl .framer-108spou { --border-bottom-width: 1px; --border-color: var(--token-95a8f7e0-de26-4a21-abd8-7324f048c094, #bdbdbd); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-5sVnl .framer-r84i3e { align-content: center; align-items: center; background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.19) 11%, rgba(254, 254, 254, 0.38) 23%, rgba(254, 254, 254, 0.45) 28.999999999999996%, rgba(254, 254, 254, 0.62) 45%, rgba(254, 254, 254, 0.72) 57.99999999999999%, rgba(253, 253, 253, 0.89) 78%, var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(253, 253, 253)) 100%); bottom: 1px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; left: 1px; overflow: var(--overflow-clip-fallback, clip); padding: 46px 28px 46px 28px; position: absolute; right: 1px; z-index: 2; }`,
        `.framer-5sVnl .framer-am3hqz-container { flex: none; height: auto; left: 50%; position: absolute; top: 25px; transform: translateX(-50%); width: 320px; z-index: 1; }`,
        `.framer-5sVnl .framer-o8sg5c { align-content: center; align-items: center; background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.19) 11%, rgba(254, 254, 254, 0.38) 23%, rgba(254, 254, 254, 0.45) 28.999999999999996%, rgba(254, 254, 254, 0.62) 45%, rgba(254, 254, 254, 0.72) 57.99999999999999%, rgba(253, 253, 253, 0.89) 78%, var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(253, 253, 253)) 100%); bottom: 1px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; left: 1px; overflow: var(--overflow-clip-fallback, clip); padding: 52px 28px 52px 28px; position: absolute; right: 1px; z-index: 2; }`,
        `.framer-5sVnl .framer-1nzu913-container { flex: none; height: auto; position: relative; width: 317px; }`,
        `.framer-5sVnl .framer-1dt33t3-container { flex: none; height: auto; position: relative; width: 310px; }`,
        `.framer-5sVnl .framer-j9v9k1 { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 50px 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1llhsr9-container { flex: none; height: 350px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1d8gtvm-container { flex: none; height: 292px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1toc2sc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 560px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5sVnl .framer-e55wp { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; scroll-margin-top: 60px; width: 100%; }`,
        `.framer-5sVnl .framer-gexfu6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 900px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-ubehhx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1t2eg0w, .framer-5sVnl .framer-19mb0wy { -webkit-user-select: none; background: linear-gradient(270deg, var(--token-95a8f7e0-de26-4a21-abd8-7324f048c094, #bdbdbd) 0%, var(--token-50035390-3908-4921-abeb-233ceaab1b03, rgb(0, 0, 0)) 100%); flex: none; height: 2px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; user-select: none; width: 100px; }`,
        `.framer-5sVnl .framer-h4vtil-container, .framer-5sVnl .framer-9nsnxu-container, .framer-5sVnl .framer-13o12ul-container, .framer-5sVnl .framer-2aln4p-container, .framer-5sVnl .framer-vxv5en-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-5sVnl .framer-adxkle, .framer-5sVnl .framer-1ahm9j2, .framer-5sVnl .framer-1664ow7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 125px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1rr4jdm, .framer-5sVnl .framer-o92knj { -webkit-user-select: none; background: linear-gradient(90deg, var(--token-95a8f7e0-de26-4a21-abd8-7324f048c094, #bdbdbd) 0%, var(--token-50035390-3908-4921-abeb-233ceaab1b03, rgb(0, 0, 0)) 100%); flex: none; height: 2px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; user-select: none; width: 100px; }`,
        `.framer-5sVnl .framer-1rj88tz, .framer-5sVnl .framer-1sfhczf { -webkit-user-select: none; background: linear-gradient(180deg, var(--token-95a8f7e0-de26-4a21-abd8-7324f048c094, #bdbdbd) 0%, var(--token-50035390-3908-4921-abeb-233ceaab1b03, rgb(0, 0, 0)) 100%); flex: none; height: 65%; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: 22px; top: -1px; user-select: none; width: 2px; z-index: 1; }`,
        `.framer-5sVnl .framer-uul1ue { -webkit-user-select: none; background: linear-gradient(180deg, var(--token-95a8f7e0-de26-4a21-abd8-7324f048c094, #bdbdbd) 0%, var(--token-50035390-3908-4921-abeb-233ceaab1b03, rgb(0, 0, 0)) 100%); flex: none; height: 65%; left: 22px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; top: -1px; user-select: none; width: 2px; z-index: 1; }`,
        `.framer-5sVnl .framer-vo7snk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-leyx5e { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 380px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5sVnl .framer-1viufib { display: grid; flex: none; gap: 10px 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(280px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; max-width: 900px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1qmbnci, .framer-5sVnl .framer-1qx2ijy, .framer-5sVnl .framer-uw5sjq, .framer-5sVnl .framer-6gx5jj { --border-bottom-width: 1px; --border-color: var(--token-95a8f7e0-de26-4a21-abd8-7324f048c094); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-121xke8, .framer-5sVnl .framer-1ko5c1r, .framer-5sVnl .framer-199vrfi, .framer-5sVnl .framer-1hjo7qf { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-5sVnl .framer-i2iwlp { --border-bottom-width: 1px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; max-width: 900px; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1nf5w1g { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1vg89ub { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-5sVnl .framer-vb0t50 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1n9inkx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 30px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-5sVnl .framer-1t95ab7 { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-owgqqa { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-5sVnl .framer-8dgwa8, .framer-5sVnl .framer-1ncmn0x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1co84jf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 440px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5sVnl .framer-1nak2lz { --border-bottom-width: 1px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: hidden; padding: 40px; position: relative; width: 1px; }`,
        `.framer-5sVnl .framer-2vnwyg, .framer-5sVnl .framer-638yv5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-5sVnl .framer-ijdbhl, .framer-5sVnl .framer-xaqtz8, .framer-5sVnl .framer-go5qbc, .framer-5sVnl .framer-1wbtnwe, .framer-5sVnl .framer-m2xh4d { --corner-shape-fallback: 0.796; --framer-input-background: var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-bottom-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-corner-shape: superellipse(1.4); --framer-input-focused-border-color: var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e); flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1di073k, .framer-5sVnl .framer-1hewr0y, .framer-5sVnl .framer-110yoe3, .framer-5sVnl .framer-y1k560, .framer-5sVnl .framer-1adccai { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-99nbxb { --corner-shape-fallback: 0.796; --framer-input-background: var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-bottom-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-corner-shape: superellipse(1.4); --framer-input-focused-border-color: var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-invalid-text-color: var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e); --framer-input-padding: 12px; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1kyk8y4 { --corner-shape-fallback: 0.796; --framer-input-background: var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-bottom-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-corner-shape: superellipse(1.4); --framer-input-focused-border-color: var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e); --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 100px; position: relative; width: 100%; }`,
        `.framer-5sVnl .framer-1j1elfp-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        ...Qe,
        ...ve,
        ...we,
        ...Ce,
        ...nt,
        ...je,
        `.framer-5sVnl[data-border="true"]::after, .framer-5sVnl [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-5sVnl.framer-72rtr7 { width: 810px; } .framer-5sVnl .framer-1prmqhr, .framer-5sVnl .framer-1efn30, .framer-5sVnl .framer-1pyv8p4, .framer-5sVnl .framer-c3bwax, .framer-5sVnl .framer-j9v9k1, .framer-5sVnl .framer-e55wp, .framer-5sVnl .framer-1f9t1zk, .framer-5sVnl .framer-1nf5w1g, .framer-5sVnl .framer-1t95ab7 { max-width: 780px; }}`,
        `@media (max-width: 809.98px) { .framer-5sVnl.framer-72rtr7 { width: 390px; } .framer-5sVnl .framer-41erml { padding: 0px 12px 0px 12px; } .framer-5sVnl .framer-1prmqhr { max-width: 600px; padding: 140px 28px 100px 28px; } .framer-5sVnl .framer-1o0dxdi, .framer-5sVnl .framer-1kc3t1w { height: var(--framer-aspect-ratio-supported, 10px); left: 40px; width: 10px; } .framer-5sVnl .framer-1hvlnu7, .framer-5sVnl .framer-1sahttm { height: var(--framer-aspect-ratio-supported, 10px); right: 40px; width: 10px; } .framer-5sVnl .framer-1tisc1z-container { height: 300px; width: 400px; } .framer-5sVnl .framer-1efn30, .framer-5sVnl .framer-1pyv8p4, .framer-5sVnl .framer-c3bwax, .framer-5sVnl .framer-e55wp, .framer-5sVnl .framer-1f9t1zk { max-width: 600px; } .framer-5sVnl .framer-1qvmdcl { flex-wrap: wrap; gap: 20px 10px; } .framer-5sVnl .framer-4lkamd, .framer-5sVnl .framer-ohjd4v, .framer-5sVnl .framer-jtnk3y, .framer-5sVnl .framer-19tuvrf { flex: none; width: 45%; } .framer-5sVnl .framer-1ubv7j2 { overflow: visible; padding: 0px 0px 50px 0px; } .framer-5sVnl .framer-1e0yf7f-container { left: 45%; top: 111%; } .framer-5sVnl .framer-njc2en { padding: 100px 0px 0px 0px; } .framer-5sVnl .framer-a4l40c, .framer-5sVnl .framer-d3fn2q { flex-direction: column; height: min-content; } .framer-5sVnl .framer-fsqpi9, .framer-5sVnl .framer-1t8olbu, .framer-5sVnl .framer-1ikekdd, .framer-5sVnl .framer-108spou { flex: none; height: 400px; width: 100%; } .framer-5sVnl .framer-j9v9k1 { gap: 20px; height: min-content; max-width: 600px; padding: 0px; } .framer-5sVnl .framer-1llhsr9-container { height: 270px; order: 0; } .framer-5sVnl .framer-1d8gtvm-container { order: 2; } .framer-5sVnl .framer-42i74x { order: 1; } .framer-5sVnl .framer-ubehhx { flex-direction: column; } .framer-5sVnl .framer-h4vtil-container, .framer-5sVnl .framer-9nsnxu-container, .framer-5sVnl .framer-13o12ul-container, .framer-5sVnl .framer-vxv5en-container, .framer-5sVnl .framer-owgqqa, .framer-5sVnl .framer-1nak2lz { flex: none; width: 100%; } .framer-5sVnl .framer-adxkle, .framer-5sVnl .framer-1ahm9j2 { flex-direction: column; padding: 20px 0px 0px 0px; } .framer-5sVnl .framer-1nf5w1g, .framer-5sVnl .framer-1t95ab7 { flex-direction: column; max-width: 600px; } .framer-5sVnl .framer-1vg89ub { align-self: unset; flex: none; gap: 0px; height: min-content; justify-content: center; width: 100%; }}`,
      ],
      `framer-5sVnl`
    )),
    (Br = zr),
    (zr.displayName = `Home`),
    (zr.defaultProps = { height: 8990, width: 1200 }),
    A(
      zr,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Fragment Mono`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Fragment Mono`,
              url: `https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2`,
              weight: `400`,
            },
          ],
        },
        ...ar,
        ...sr,
        ...cr,
        ...ur,
        ...dr,
        ...mr,
        ...hr,
        ...gr,
        ...yr,
        ...br,
        ...xr,
        ...Sr,
        ...D($e),
        ...D(J),
        ...D(Ee),
        ...D(Te),
        ...D(rt),
        ...D(Me),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (zr.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          G(X, {}, t),
          G(q, {}, t),
          G(mn, {}, t),
          G(At, {}, t),
          G($t, {}, t),
          G(rr, {}, t),
          G(Ve, {}, t),
          G(On, {}, t),
          G(Fe, {}, t),
          G(Ke, {}, t),
        ])
      ),
    }),
    (Vr = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `{"dMa3I_0FQ":{"pattern":":dMa3I_0FQ","name":"the-solution"},"wHPteuBSd":{"pattern":":wHPteuBSd","name":"the-edge"},"rMkm87RAJ":{"pattern":":rMkm87RAJ","name":"the-data"},"IEzvAGyIY":{"pattern":":IEzvAGyIY","name":"pricing"},"LC8uHYUKO":{"pattern":":LC8uHYUKO","name":"request-access"}}`,
            framerIntrinsicWidth: `1200`,
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `8990`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"acm0y4Ysf":{"layout":["fixed","auto"]},"cx0ZXnHvi":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerColorSyntax: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Vr as __FramerMetadata__, Br as default, Er as queryParamNames };
//# sourceMappingURL=_hLt4hg9tgys6lgcWPLlQAG0A2detOfMMyQjWFMQefI.DSbPMurY.mjs.map
