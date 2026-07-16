import { c as N, d as G } from "./chunk-HYVDAETN.mjs";
import { a as H } from "./chunk-T77QJFCJ.mjs";
import { a as T } from "./chunk-4I6ENMO3.mjs";
import { a as k, c as B, d as D, f as U } from "./chunk-DB6FQNZV.mjs";
import { c as E } from "./chunk-NHVEFQOW.mjs";
import { X as h, Y as P, g as V, ia as R } from "./chunk-V7MLU2WL.mjs";
import { b as F } from "./chunk-425IX65M.mjs";
import { e as I, j as A } from "./chunk-CT63CFX7.mjs";
var {
    onewayMethodTemplate: fe,
    voidMethodTemplate: Y,
    valueMethodTemplate: W,
    streamMethodTemplate: $,
  } = U,
  K;
((a) =>
  (a.service = {
    id: "__WorkLouderKeyboard__",
    fingerprint: "3eff8b99ea97789bff218fa4b027cdef",
    methods: {
      connectionStateStream: {},
      deviceStatusStream: {},
      findDevices: {},
      connect: {},
      disconnect: {},
      getDeviceStatus: {},
      sendBubbleInfo: {},
    },
    newOutgoingWrapper: (o) => ({
      connectionStateStream: $.bind(-1, "connectionStateStream", o),
      deviceStatusStream: $.bind(-1, "deviceStatusStream", o),
      findDevices: W.bind(-1, "findDevices", !0, o),
      connect: W.bind(-1, "connect", !0, o),
      disconnect: Y.bind(-1, "disconnect", !1, o),
      getDeviceStatus: W.bind(-1, "getDeviceStatus", !1, o),
      sendBubbleInfo: W.bind(-1, "sendBubbleInfo", !0, o),
    }),
  }))((K ||= {}));
var M;
((d) => {
  d.service = K.service;
  function a(m) {
    let i = k.shared();
    return {
      expect: () => i.expectWithoutDiscovery(d.service, m),
      discover: (l) => i.discover(d.service, m, l),
      register: (l) => i.register({ channel: m, service: d.service, implementation: l }),
    };
  }
  d.on = a;
  async function o(m) {
    k.shared().unregister(m);
  }
  d.unregister = o;
})((M ||= {}));
var w = I(T());
function O(e, a) {
  let o = { service: e.service.service, onDiscover: e.onDiscover },
    d = (0, w.useRef)(o);
  if (d.current.service !== o.service)
    throw new Error("useServiceStream: service must be identical between re-renders");
  let m = { onStreamValue: a, onError: e.onError },
    i = (0, w.useRef)(m);
  i.current = m;
  let l = (0, w.useRef)(),
    { channel: y, enabled: g = !0 } = e;
  (0, w.useEffect)(() => {
    if (!g || !y) return;
    let c = !0,
      b = () => {
        let r = l.current;
        ((l.current = void 0), r?.cancel().catch(() => {}));
      };
    return (
      (async () => {
        let r = !1,
          p = 0;
        for (; !r; ) {
          r = !0;
          try {
            let s = d.current,
              f = await k.shared().discover(s.service, y);
            if (!c) return;
            let L = s.onDiscover(f);
            ((l.current = L),
              (p = 0),
              await L.read((n) => (c ? i.current.onStreamValue(n) : Promise.resolve())));
          } catch (s) {
            if (!c) return;
            let f = i.current.onError(P(s));
            if ((p++, p > 1)) continue;
            if (f?.retry === !0) {
              if ((await V(0), !c)) return;
              r = !1;
            }
          }
        }
      })().catch(h),
      () => {
        ((c = !1), b());
      }
    );
  }, [y, g]);
}
function ge(e) {
  if (e instanceof E.ServiceGone) return { retry: !0 };
  h(e);
}
var S = I(T());
var J =
    "autoplay; ambient-light-sensor; accelerometer; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; picture-in-picture; usb; xr-spatial-tracking",
  z = "autoplay",
  Q =
    "autoplay; ambient-light-sensor; accelerometer; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; picture-in-picture; usb; xr-spatial-tracking; clipboard-read; clipboard-write";
function q(e) {
  let a;
  switch (e) {
    case "on_page":
      a = z;
      break;
    case "editor":
      a = J;
      break;
    case "preview":
      a = Q;
      break;
    default:
      F(e);
  }
  return a;
}
var j = I(H()),
  X = R("services:hooks:useiframewithchannel"),
  _ = class extends Error {
    constructor(o, d = {}) {
      super(o);
      A(this, "extras", d);
    }
  };
function xe(e) {
  let { onSetup: a = () => {}, targetOrigin: o, type: d, src: m } = e,
    i = m;
  if (m) {
    let { pathname: r, search: p, hash: s } = new URL(m),
      f = `${r}${p}${s}`;
    (G(f), (i = N(f).url));
  }
  let [l, y] = (0, S.useReducer)(
      (r, p) => (
        r &&
          k
            .shared()
            .unregister(r)
            .catch((s) => {
              s instanceof E.ServiceGone || h(s);
            }),
        p
      ),
      null
    ),
    g = (0, S.useRef)(null),
    c = (0, S.useRef)(null),
    b = (0, S.useRef)({ onError: null, onLoad: null });
  return (
    (0, S.useEffect)(() => {
      if (!i || !g.current) {
        ((c.current = null), l && y(null));
        return;
      }
      if (c.current) return;
      let r = document.createElement("iframe");
      ((r.src = i),
        (r.style.border = "none"),
        (r.style.display = "block"),
        (r.style.height = "100%"),
        (r.style.width = "100%"),
        (r.dataset.testid = `${d}-iframe`),
        (r.allowFullscreen = !0));
      let p = (t) => {
        (y(null),
          X.reportError(
            new _("iframe load error", {
              message: t.message,
              filename: t.filename,
              lineno: t.lineno,
              colno: t.colno,
              error: t.error,
            })
          ));
      };
      (r.addEventListener("error", p), (b.current.onError = p));
      let s = new URL(i, document.baseURI).origin,
        f = r.sandbox;
      (f?.add("allow-downloads"),
        f?.add("allow-popups"),
        f?.add("allow-popups-to-escape-sandbox"),
        f?.add("allow-same-origin"),
        f?.add("allow-scripts"),
        f?.add("allow-forms"),
        (r.allow = q(d === "canvas" ? "editor" : "preview")),
        g.current.appendChild(r),
        (c.current = r));
      let L = () => {
          let { contentWindow: t } = r;
          return t ? new B(t, o ?? s) : (g.current?.removeChild(r), null);
        },
        n = () => {
          let t = L();
          y(t);
        };
      return (r.addEventListener("load", n), (b.current.onLoad = n), a(r));
    }, [l, y, a, i, o, d]),
    (0, S.useEffect)(
      () => () => {
        (b.current.onError && c.current?.removeEventListener("error", b.current.onError),
          b.current.onLoad && c.current?.removeEventListener("load", b.current.onLoad),
          (b.current.onError = null),
          (b.current.onLoad = null),
          (c.current = null),
          y(null));
      },
      []
    ),
    [
      (0, S.useCallback)(function (p) {
        return (
          (0, S.useEffect)(() => {
            if (g.current?.children.length === 0 && c.current)
              throw new Error(
                "IFrameWithChannel was re-rendered. The Service connection will be broken."
              );
          }),
          (0, j.jsx)("div", { ...p, ref: g })
        );
      }, []),
      l,
      c.current,
    ]
  );
}
var v = I(T());
var u = R("work-louder-keyboard");
function Z(e) {
  return e instanceof E.ServiceNotFound || e instanceof E.TimedOut;
}
function Te({ enabled: e }) {
  let a = (0, v.useRef)(),
    [o, d] = (0, v.useState)(),
    [m, i] = (0, v.useState)(),
    l = (0, v.useCallback)(() => {
      ((a.current = void 0), d(void 0), i(void 0));
    }, []),
    [y, g] = (0, v.useState)(e);
  y !== e && (g(e), e || (u.debug("Work Louder keyboard hook disabled"), l()));
  let c = (0, v.useCallback)(
    (n) => {
      let t = P(n);
      if (Z(t)) {
        u.debug("Work Louder keyboard stream unavailable", t);
        return;
      }
      if (t instanceof E.ServiceGone)
        return (u.debug("Work Louder keyboard service gone, retrying stream"), l(), { retry: !0 });
      u.warn("Work Louder keyboard stream error", t);
    },
    [l]
  );
  (O(
    {
      channel: e ? D : void 0,
      service: M,
      onDiscover: (n) => (
        u.debug("Work Louder keyboard service discovered"),
        (a.current = n),
        u.debug("Subscribing to connectionStateStream"),
        n.connectionStateStream({ replay: "latest" })
      ),
      onError: c,
    },
    async (n) => {
      (u.debug("Connection state stream update", n), d(n), n.status !== "connected" && i(void 0));
    }
  ),
    O(
      {
        channel: e ? D : void 0,
        enabled: e && o?.status === "connected",
        service: M,
        onDiscover: (n) => (
          u.debug("Subscribing to deviceStatusStream"),
          n.deviceStatusStream({ replay: "latest" })
        ),
        onError: c,
      },
      async (n) => {
        u.debug("Device status stream update", n);
        let t = n.status;
        i(t ? { batteryPercentage: t.batteryPercentage, isCharging: t.isCharging } : void 0);
      }
    ));
  let b = e && o !== void 0,
    C = o?.status === "connected",
    r = (0, v.useCallback)(() => {
      let n = a.current;
      if (!n) {
        u.warn("Connect requested but Work Louder keyboard service is unavailable");
        return;
      }
      (u.debug("Connect requested from preferences menu"), n.connect().catch(h));
    }, []),
    p = (0, v.useCallback)(() => {
      let n = a.current;
      if (!n) {
        u.warn("Disconnect requested but Work Louder keyboard service is unavailable");
        return;
      }
      (u.debug("Disconnect requested from preferences menu"), n.disconnect().catch(h));
    }, []),
    s = (0, v.useCallback)(
      async (n) => {
        let t = a.current;
        if (!t || !C) return (u.debug("sendBubbleInfo skipped: keyboard not connected"), !1);
        try {
          let { success: x } = await t.sendBubbleInfo({ bubbleInfo: n });
          return (u.debug("sendBubbleInfo complete", { bubbleInfo: n, success: x }), x);
        } catch (x) {
          return (u.warn("sendBubbleInfo failed", x), !1);
        }
      },
      [C]
    ),
    f = (0, v.useCallback)((n) => s({ show: !0, ...n }), [s]),
    L = (0, v.useCallback)(() => s({ show: !1 }), [s]);
  return {
    isServiceAvailable: b,
    connectionState: o,
    status: m,
    connect: r,
    disconnect: p,
    showBubble: f,
    hideBubble: L,
  };
}
export { q as a, xe as b, O as c, ge as d, Te as e };
//# sourceMappingURL=chunk-6FSPSTNE.mjs.map
