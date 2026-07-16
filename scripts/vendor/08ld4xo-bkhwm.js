(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  494510,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "parseRelativeUrl", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let r = e.r(718967),
      a = e.r(998183);
    function i(e, t, n = !0) {
      let s = new URL("u" < typeof window ? "http://n" : (0, r.getLocationOrigin)()),
        o = t
          ? new URL(t, s)
          : e.startsWith(".")
            ? new URL("u" < typeof window ? "http://n" : window.location.href)
            : s,
        {
          pathname: u,
          searchParams: l,
          search: c,
          hash: p,
          href: d,
          origin: f,
        } = e.startsWith("/") ? new URL(`${o.protocol}//${o.host}${e}`) : new URL(e, o);
      if (f !== s.origin)
        throw Object.defineProperty(
          Error(`invariant: invalid relative URL, router received ${e}`),
          "__NEXT_ERROR_CODE",
          { value: "E159", enumerable: !1, configurable: !0 }
        );
      return {
        auth: null,
        host: null,
        hostname: null,
        pathname: u,
        port: null,
        protocol: null,
        query: n ? (0, a.searchParamsToUrlQuery)(l) : void 0,
        search: c,
        hash: p,
        href: d.slice(f.length),
        slashes: null,
      };
    }
  },
  401643,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      getParamProperties: function () {
        return u;
      },
      getSegmentParam: function () {
        return s;
      },
      isCatchAll: function () {
        return o;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let i = e.r(591463);
    function s(e) {
      let t = i.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t));
      return (t && (e = e.slice(t.length)), e.startsWith("[[...") && e.endsWith("]]"))
        ? { paramType: "optional-catchall", paramName: e.slice(5, -2) }
        : e.startsWith("[...") && e.endsWith("]")
          ? { paramType: t ? `catchall-intercepted-${t}` : "catchall", paramName: e.slice(4, -1) }
          : e.startsWith("[") && e.endsWith("]")
            ? { paramType: t ? `dynamic-intercepted-${t}` : "dynamic", paramName: e.slice(1, -1) }
            : null;
    }
    function o(e) {
      return (
        "catchall" === e ||
        "catchall-intercepted-(..)(..)" === e ||
        "catchall-intercepted-(.)" === e ||
        "catchall-intercepted-(..)" === e ||
        "catchall-intercepted-(...)" === e ||
        "optional-catchall" === e
      );
    }
    function u(e) {
      let t = !1,
        n = !1;
      switch (e) {
        case "catchall":
        case "catchall-intercepted-(..)(..)":
        case "catchall-intercepted-(.)":
        case "catchall-intercepted-(..)":
        case "catchall-intercepted-(...)":
          t = !0;
          break;
        case "optional-catchall":
          ((t = !0), (n = !0));
      }
      return { repeat: t, optional: n };
    }
  },
  491915,
  (e, t, n) => {
    "use strict";
    function r(e, t = {}) {
      if (t.onlyHashChange) return void e();
      let n = document.documentElement;
      if ("smooth" !== n.dataset.scrollBehavior) return void e();
      let a = n.style.scrollBehavior;
      ((n.style.scrollBehavior = "auto"),
        t.dontForceLayout || n.getClientRects(),
        e(),
        (n.style.scrollBehavior = a));
    }
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "disableSmoothScrollDuringRouteTransition", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }),
      e.r(233525));
  },
  590373,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "useUntrackedPathname", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let r = e.r(271645),
      a = e.r(47790);
    function i() {
      return !(function () {
        if ("u" < typeof window) {
          let { workUnitAsyncStorage: t } = e.r(662141),
            n = t.getStore();
          if (!n) return !1;
          switch (n.type) {
            case "prerender":
            case "prerender-client":
            case "prerender-ppr":
            case "validation-client":
              let r = n.fallbackRouteParams;
              return !!r && r.size > 0;
          }
        }
        return !1;
      })()
        ? (0, r.useContext)(a.PathnameContext)
        : null;
    }
    ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  178377,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      handleHardNavError: function () {
        return s;
      },
      useNavFailureHandler: function () {
        return o;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    e.r(271645);
    let i = e.r(451191);
    function s(e) {
      return (
        !!(e && "u" > typeof window) &&
        !!window.next.__pendingUrl &&
        (0, i.createHrefFromUrl)(new URL(window.location.href)) !==
          (0, i.createHrefFromUrl)(window.next.__pendingUrl) &&
        (console.error("Error occurred during navigation, falling back to hard navigation", e),
        (window.location.href = window.next.__pendingUrl.toString()),
        !0)
      );
    }
    function o() {}
    ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  912354,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "handleISRError", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let r = "u" < typeof window ? e.r(144256).workAsyncStorage : void 0;
    function a({ error: e }) {
      if (r) {
        let t = r.getStore();
        if (t?.isStaticGeneration) throw (e && console.error(e), e);
      }
    }
    ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  972383,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      ErrorBoundary: function () {
        return m;
      },
      ErrorBoundaryHandler: function () {
        return _;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let i = e.r(190809),
      s = e.r(843476),
      o = i._(e.r(271645)),
      u = e.r(590373),
      l = e.r(265713);
    e.r(178377);
    let c = e.r(912354),
      p = e.r(82604),
      d = e.r(8372),
      f = "u" > typeof window && (0, p.isBot)(window.navigator.userAgent);
    class _ extends o.default.Component {
      static {
        this.contextType = d.AppRouterContext;
      }
      constructor(e) {
        (super(e),
          (this.reset = () => {
            this.setState({ error: null });
          }),
          (this.unstable_retry = () => {
            (0, o.startTransition)(() => {
              (this.context?.refresh(), this.reset());
            });
          }),
          (this.state = { error: null, previousPathname: this.props.pathname }));
      }
      static getDerivedStateFromError(e) {
        if ((0, l.isNextRouterError)(e)) throw e;
        return { error: e };
      }
      static getDerivedStateFromProps(e, t) {
        let { error: n } = t;
        return e.pathname !== t.previousPathname && t.error
          ? { error: null, previousPathname: e.pathname }
          : { error: t.error, previousPathname: e.pathname };
      }
      render() {
        return this.state.error && !f
          ? ((0, c.handleISRError)({ error: this.state.error }),
            (0, s.jsxs)(s.Fragment, {
              children: [
                this.props.errorStyles,
                this.props.errorScripts,
                (0, s.jsx)(this.props.errorComponent, {
                  error: this.state.error,
                  reset: this.reset,
                  unstable_retry: this.unstable_retry,
                }),
              ],
            }))
          : this.props.children;
      }
    }
    function m({ errorComponent: e, errorStyles: t, errorScripts: n, children: r }) {
      let a = (0, u.useUntrackedPathname)();
      return e
        ? (0, s.jsx)(_, {
            pathname: a,
            errorComponent: e,
            errorStyles: t,
            errorScripts: n,
            children: r,
          })
        : (0, s.jsx)(s.Fragment, { children: r });
    }
    ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  358442,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      RedirectBoundary: function () {
        return f;
      },
      RedirectErrorBoundary: function () {
        return d;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let i = e.r(190809),
      s = e.r(843476),
      o = i._(e.r(271645)),
      u = e.r(976562),
      l = e.r(124063),
      c = e.r(968391);
    function p({ redirect: e, reset: t, redirectType: n }) {
      let r = (0, u.useRouter)();
      return (
        (0, o.useEffect)(() => {
          o.default.startTransition(() => {
            ("push" === n ? r.push(e, {}) : r.replace(e, {}), t());
          });
        }, [e, n, t, r]),
        null
      );
    }
    class d extends o.default.Component {
      constructor(e) {
        (super(e), (this.state = { redirect: null, redirectType: null }));
      }
      static getDerivedStateFromError(e) {
        if ((0, c.isRedirectError)(e)) {
          let t = (0, l.getURLFromRedirectError)(e),
            n = (0, l.getRedirectTypeFromError)(e);
          return "handled" in e
            ? { redirect: null, redirectType: null }
            : { redirect: t, redirectType: n };
        }
        throw e;
      }
      render() {
        let { redirect: e, redirectType: t } = this.state;
        return null !== e && null !== t
          ? (0, s.jsx)(p, {
              redirect: e,
              redirectType: t,
              reset: () => this.setState({ redirect: null }),
            })
          : this.props.children;
      }
    }
    function f({ children: e }) {
      let t = (0, u.useRouter)();
      return (0, s.jsx)(d, { router: t, children: e });
    }
    ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  270725,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "createRouterCacheKey", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let r = e.r(813258);
    function a(e, t = !1) {
      return Array.isArray(e)
        ? `${e[0]}|${e[1]}|${e[2]}`
        : t && e.startsWith(r.PAGE_SEGMENT_KEY)
          ? r.PAGE_SEGMENT_KEY
          : e;
    }
    ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  201244,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "unresolvedThenable", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let r = { then: () => {} };
    ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  897367,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      MetadataBoundary: function () {
        return o;
      },
      OutletBoundary: function () {
        return l;
      },
      RootLayoutBoundary: function () {
        return c;
      },
      ViewportBoundary: function () {
        return u;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let i = e.r(954839),
      s = {
        [i.METADATA_BOUNDARY_NAME]: function ({ children: e }) {
          return e;
        },
        [i.VIEWPORT_BOUNDARY_NAME]: function ({ children: e }) {
          return e;
        },
        [i.OUTLET_BOUNDARY_NAME]: function ({ children: e }) {
          return e;
        },
        [i.ROOT_LAYOUT_BOUNDARY_NAME]: function ({ children: e }) {
          return e;
        },
      },
      o = s[i.METADATA_BOUNDARY_NAME.slice(0)],
      u = s[i.VIEWPORT_BOUNDARY_NAME.slice(0)],
      l = s[i.OUTLET_BOUNDARY_NAME.slice(0)],
      c = s[i.ROOT_LAYOUT_BOUNDARY_NAME.slice(0)];
  },
  662537,
  454300,
  812024,
  728469,
  286564,
  869766,
  804478,
  14177,
  541193,
  580611,
  213186,
  (e) => {
    "use strict";
    let t, n, r, a;
    var i = e.i(250804),
      s = e.i(901020),
      o = e.i(341041),
      u = e.i(301263),
      l = e.i(923288),
      c = e.i(519988);
    e.i(602309);
    var p = e.i(62068);
    e.i(450574);
    var d = e.i(453288),
      f = e.i(10008),
      _ = e.i(821593);
    function m(e) {
      p.debug.log(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`);
    }
    function h(e, t) {
      if (!t?.length) return !1;
      for (let r of t) {
        var n;
        if ("string" == typeof (n = r) || n instanceof RegExp) {
          if (e.description && (0, _.isMatchingPattern)(e.description, r))
            return (s.DEBUG_BUILD && m(e), !0);
          continue;
        }
        let t = !!r.attributes && Object.keys(r.attributes).length > 0;
        if (!r.name && !r.op && !t) continue;
        let a = !r.name || (e.description && (0, _.isMatchingPattern)(e.description, r.name)),
          i = !r.op || (e.op && (0, _.isMatchingPattern)(e.op, r.op)),
          o =
            !r.attributes ||
            Object.entries(r.attributes).every(([t, n]) =>
              (function (e, t) {
                return "string" == typeof e && ("string" == typeof t || t instanceof RegExp)
                  ? (0, _.isMatchingPattern)(e, t)
                  : Array.isArray(e) && Array.isArray(t)
                    ? e.length === t.length && e.every((e, n) => e === t[n])
                    : e === t;
              })(e.attributes?.[t], n)
            );
        if (a && i && o) return (s.DEBUG_BUILD && m(e), !0);
      }
      return !1;
    }
    function g(e) {
      return "stream" === e.getOptions().traceLifecycle;
    }
    (e.s(
      [
        "reparentChildSpans",
        0,
        function (e, t) {
          let n = t.parent_span_id,
            r = t.span_id;
          if (n) for (let t of e) t.parent_span_id === r && (t.parent_span_id = n);
        },
        "shouldIgnoreSpan",
        0,
        h,
      ],
      454300
    ),
      e.s(["hasSpanStreamingEnabled", 0, g], 812024));
    var S = e.i(170637),
      E = e.i(373382),
      T = e.i(111139),
      b = e.i(821061),
      v = e.i(304661);
    e.i(132584);
    var y = e.i(473753);
    class I {
      constructor(e = {}) {
        ((this._traceId = e.traceId || (0, E.generateTraceId)()),
          (this._spanId = e.spanId || (0, E.generateSpanId)()),
          (this.dropReason = e.dropReason));
      }
      spanContext() {
        return { spanId: this._spanId, traceId: this._traceId, traceFlags: v.TRACE_FLAG_NONE };
      }
      end(e) {}
      setAttribute(e, t) {
        return this;
      }
      setAttributes(e) {
        return this;
      }
      setStatus(e) {
        return this;
      }
      updateName(e) {
        return this;
      }
      isRecording() {
        return !1;
      }
      addEvent(e, t, n) {
        return this;
      }
      addLink(e) {
        return this;
      }
      addLinks(e) {
        return this;
      }
      recordException(e, t) {}
    }
    function R(e) {
      return !!e && "function" == typeof e && "_streamed" in e && !!e._streamed;
    }
    (e.s(["SentryNonRecordingSpan", 0, I], 728469),
      e.i(951497),
      e.s(["isStreamedBeforeSendSpanCallback", 0, R], 286564));
    var O = e.i(339435),
      A = e.i(67486);
    function N(e, t) {
      let n = (0, y.getDynamicSamplingContextFromSpan)(e[0]),
        r = t?.getDsn(),
        a = t?.getOptions().tunnel,
        i = {
          sent_at: new Date().toISOString(),
          ...(!!n.trace_id && !!n.public_key && { trace: n }),
          ...(!!a && r && { dsn: (0, O.dsnToString)(r) }),
        },
        { beforeSendSpan: s, ignoreSpans: o } = t?.getOptions() || {},
        u = o?.length
          ? e.filter((e) => {
              let t = (0, v.spanToJSON)(e);
              return !h({ description: t.description, op: t.op, attributes: t.data }, o);
            })
          : e,
        l = e.length - u.length;
      l && t?.recordDroppedEvent("before_send", "span", l);
      let c = s
          ? (e) => {
              let t = (0, v.spanToJSON)(e),
                n = R(s) ? t : s(t);
              return n || ((0, v.showSpanDropWarning)(), t);
            }
          : v.spanToJSON,
        p = [];
      for (let e of u) {
        let t = c(e);
        t && p.push((0, A.createSpanEnvelopeItem)(t));
      }
      return (0, A.createEnvelope)(i, p);
    }
    e.s(
      [
        "createEventEnvelope",
        0,
        function (e, t, n, r) {
          let a = (0, A.getSdkMetadataForEnvelopeHeader)(n),
            i = e.type && "replay_event" !== e.type ? e.type : "event";
          !(function (e, t) {
            if (!t) return;
            let n = e.sdk || {};
            e.sdk = {
              ...n,
              name: n.name || t.name,
              version: n.version || t.version,
              integrations: [...(e.sdk?.integrations || []), ...(t.integrations || [])],
              packages: [...(e.sdk?.packages || []), ...(t.packages || [])],
              settings:
                e.sdk?.settings || t.settings ? { ...e.sdk?.settings, ...t.settings } : void 0,
            };
          })(e, n?.sdk);
          let s = (0, A.createEventEnvelopeHeaders)(e, a, r, t);
          delete e.sdkProcessingMetadata;
          let o = [{ type: i }, e];
          return (0, A.createEnvelope)(s, [o]);
        },
        "createSessionEnvelope",
        0,
        function (e, t, n, r) {
          let a = (0, A.getSdkMetadataForEnvelopeHeader)(n),
            i = {
              sent_at: new Date().toISOString(),
              ...(a && { sdk: a }),
              ...(!!r && t && { dsn: (0, O.dsnToString)(t) }),
            },
            s = "aggregates" in e ? [{ type: "sessions" }, e] : [{ type: "session" }, e.toJSON()];
          return (0, A.createEnvelope)(i, [s]);
        },
        "createSpanEnvelope",
        0,
        N,
      ],
      869766
    );
    var C = e.i(605394);
    function M(e) {
      if (!e || 0 === e.length) return;
      let t = {};
      return (
        e.forEach((e) => {
          let n = e.attributes || {},
            r = n[c.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT],
            a = n[c.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
          "string" == typeof r && "number" == typeof a && (t[e.name] = { value: a, unit: r });
        }),
        t
      );
    }
    e.s(
      [
        "setMeasurement",
        0,
        function (e, t, n, r = (0, v.getActiveSpan)()) {
          let a = r && (0, v.getRootSpan)(r);
          a &&
            (s.DEBUG_BUILD &&
              p.debug.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`),
            a.addEvent(e, {
              [c.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: t,
              [c.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: n,
            }));
        },
        "timedEventsToMeasurements",
        0,
        M,
      ],
      804478
    );
    var U = e.i(242222);
    class D {
      constructor(e = {}) {
        ((this._traceId = e.traceId || (0, E.generateTraceId)()),
          (this._spanId = e.spanId || (0, E.generateSpanId)()),
          (this._startTime = e.startTimestamp || (0, C.timestampInSeconds)()),
          (this._links = e.links),
          (this._attributes = {}),
          this.setAttributes({
            [c.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual",
            [c.SEMANTIC_ATTRIBUTE_SENTRY_OP]: e.op,
            ...e.attributes,
          }),
          (this._name = e.name),
          e.parentSpanId && (this._parentSpanId = e.parentSpanId),
          "sampled" in e && (this._sampled = e.sampled),
          e.endTimestamp && (this._endTime = e.endTimestamp),
          (this._events = []),
          (this._isStandaloneSpan = e.isStandalone),
          this._endTime && this._onSpanEnded());
      }
      addLink(e) {
        return (this._links ? this._links.push(e) : (this._links = [e]), this);
      }
      addLinks(e) {
        return (this._links ? this._links.push(...e) : (this._links = e), this);
      }
      recordException(e, t) {}
      spanContext() {
        let { _spanId: e, _traceId: t, _sampled: n } = this;
        return { spanId: e, traceId: t, traceFlags: n ? v.TRACE_FLAG_SAMPLED : v.TRACE_FLAG_NONE };
      }
      setAttribute(e, t) {
        return (void 0 === t ? delete this._attributes[e] : (this._attributes[e] = t), this);
      }
      setAttributes(e) {
        return (Object.keys(e).forEach((t) => this.setAttribute(t, e[t])), this);
      }
      updateStartTime(e) {
        this._startTime = (0, v.spanTimeInputToSeconds)(e);
      }
      setStatus(e) {
        return ((this._status = e), this);
      }
      updateName(e) {
        return (
          (this._name = e),
          this.setAttribute(c.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom"),
          this
        );
      }
      end(e) {
        this._endTime ||
          ((this._endTime = (0, v.spanTimeInputToSeconds)(e)),
          (function (e) {
            if (!s.DEBUG_BUILD) return;
            let { description: t = "< unknown name >", op: n = "< unknown op >" } = (0,
              v.spanToJSON)(e),
              { spanId: r } = e.spanContext(),
              a = (0, v.getRootSpan)(e) === e,
              i = `[Tracing] Finishing "${n}" ${a ? "root " : ""}span "${t}" with ID ${r}`;
            p.debug.log(i);
          })(this),
          this._onSpanEnded());
      }
      getSpanJSON() {
        return {
          data: this._attributes,
          description: this._name,
          op: this._attributes[c.SEMANTIC_ATTRIBUTE_SENTRY_OP],
          parent_span_id: this._parentSpanId,
          span_id: this._spanId,
          start_timestamp: this._startTime,
          status: (0, v.getStatusMessage)(this._status),
          timestamp: this._endTime,
          trace_id: this._traceId,
          origin: this._attributes[c.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
          profile_id: this._attributes[c.SEMANTIC_ATTRIBUTE_PROFILE_ID],
          exclusive_time: this._attributes[c.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
          measurements: M(this._events),
          is_segment: (this._isStandaloneSpan && (0, v.getRootSpan)(this) === this) || void 0,
          segment_id: this._isStandaloneSpan
            ? (0, v.getRootSpan)(this).spanContext().spanId
            : void 0,
          links: (0, v.convertSpanLinksForEnvelope)(this._links),
        };
      }
      getStreamedSpanJSON() {
        return {
          name: this._name ?? "",
          span_id: this._spanId,
          trace_id: this._traceId,
          parent_span_id: this._parentSpanId,
          start_timestamp: this._startTime,
          end_timestamp: this._endTime ?? this._startTime,
          is_segment: this._isStandaloneSpan || this === (0, v.getRootSpan)(this),
          status: (0, v.getSimpleStatusMessage)(this._status),
          attributes: this._attributes,
          links: (0, v.getStreamedSpanLinks)(this._links),
        };
      }
      isRecording() {
        return !this._endTime && !!this._sampled;
      }
      addEvent(e, t, n) {
        s.DEBUG_BUILD && p.debug.log("[Tracing] Adding an event to span:", e);
        let r = B(t) ? t : n || (0, C.timestampInSeconds)(),
          a = B(t) ? {} : t || {},
          i = { name: e, time: (0, v.spanTimeInputToSeconds)(r), attributes: a };
        return (this._events.push(i), this);
      }
      isStandaloneSpan() {
        return !!this._isStandaloneSpan;
      }
      _onSpanEnded() {
        let e = (0, i.getClient)();
        if (
          (e && (e.emit("spanEnd", this), this._isStandaloneSpan || e.emit("afterSpanEnd", this)),
          !(this._isStandaloneSpan || this === (0, v.getRootSpan)(this)))
        )
          return;
        if (this._isStandaloneSpan)
          return void (this._sampled
            ? (function (e) {
                let t = (0, i.getClient)();
                if (!t) return;
                let n = e[1];
                n && 0 !== n.length
                  ? t.sendEnvelope(e)
                  : t.recordDroppedEvent("before_send", "span");
              })(N([this], e))
            : (s.DEBUG_BUILD &&
                p.debug.log(
                  "[Tracing] Discarding standalone span because its trace was not chosen to be sampled."
                ),
              e && e.recordDroppedEvent("sample_rate", "span")));
        if (e && g(e)) return void e.emit("afterSegmentSpanEnd", this);
        let t = this._convertSpanToTransaction();
        t &&
          ((0, U.getCapturedScopesOnSpan)(this).scope || (0, i.getCurrentScope)()).captureEvent(t);
      }
      _convertSpanToTransaction() {
        if (!x((0, v.spanToJSON)(this))) return;
        this._name ||
          (s.DEBUG_BUILD &&
            p.debug.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
          (this._name = "<unlabeled transaction>"));
        let { scope: e, isolationScope: t } = (0, U.getCapturedScopesOnSpan)(this),
          n = e?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
        if (!0 !== this._sampled) return;
        let r = (0, v.getSpanDescendants)(this)
            .filter((e) => {
              var t;
              return e !== this && !((t = e) instanceof D && t.isStandaloneSpan());
            })
            .map((e) => (0, v.spanToJSON)(e))
            .filter(x),
          a = this._attributes[c.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
        delete this._attributes[c.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
        let i = !1;
        r.forEach((e) => {
          (delete e.data[c.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME],
            e.op?.startsWith("gen_ai.") && (i = !0));
        });
        let o = {
            contexts: { trace: (0, v.spanToTransactionTraceContext)(this) },
            spans:
              r.length > 1e3
                ? r.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1e3)
                : r,
            start_timestamp: this._startTime,
            timestamp: this._endTime,
            transaction: this._name,
            type: "transaction",
            sdkProcessingMetadata: {
              capturedSpanScope: e,
              capturedSpanIsolationScope: t,
              dynamicSamplingContext: (0, y.getDynamicSamplingContextFromSpan)(this),
              hasGenAiSpans: i,
            },
            request: n,
            ...(a && { transaction_info: { source: a } }),
          },
          u = M(this._events);
        return (
          u &&
            Object.keys(u).length &&
            (s.DEBUG_BUILD &&
              p.debug.log(
                "[Measurements] Adding measurements to transaction event",
                JSON.stringify(u, void 0, 2)
              ),
            (o.measurements = u)),
          o
        );
      }
    }
    function B(e) {
      return (e && "number" == typeof e) || e instanceof Date || Array.isArray(e);
    }
    function x(e) {
      return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
    }
    function w(e, t) {
      let n = P();
      return n.withActiveSpan
        ? n.withActiveSpan(e, t)
        : (0, i.withScope)((n) => ((0, b._setSpanForScope)(n, e || void 0), t(n)));
    }
    function P() {
      let e = (0, l.getMainCarrier)();
      return (0, u.getAsyncContextStrategy)(e);
    }
    function k(e, t, n) {
      let r = (0, i.getClient)(),
        a = r?.getOptions() || {},
        { name: o = "" } = e,
        u = { spanAttributes: { ...e.attributes }, spanName: o, parentSampled: n };
      r?.emit("beforeSampling", u, { decision: !1 });
      let l = u.parentSampled ?? n,
        d = u.spanAttributes,
        _ = t.getPropagationContext(),
        m = j(t),
        [h, E, T] = m
          ? [!1]
          : (function (e, t, n) {
              let r, a;
              if (!(0, f.hasSpansEnabled)(e)) return [!1];
              "function" == typeof e.tracesSampler
                ? ((r = e.tracesSampler({
                    ...t,
                    inheritOrSampleWith: (e) =>
                      "number" == typeof t.parentSampleRate
                        ? t.parentSampleRate
                        : "boolean" == typeof t.parentSampled
                          ? Number(t.parentSampled)
                          : e,
                  })),
                  (a = !0))
                : void 0 !== t.parentSampled
                  ? (r = t.parentSampled)
                  : void 0 !== e.tracesSampleRate && ((r = e.tracesSampleRate), (a = !0));
              let i = (0, S.parseSampleRate)(r);
              if (void 0 === i)
                return (
                  s.DEBUG_BUILD &&
                    p.debug.warn(
                      `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`
                    ),
                  [!1]
                );
              if (!i)
                return (
                  s.DEBUG_BUILD &&
                    p.debug.log(
                      `[Tracing] Discarding transaction because ${"function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`
                    ),
                  [!1, i, a]
                );
              let o = n < i;
              return (
                !o &&
                  s.DEBUG_BUILD &&
                  p.debug.log(
                    `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`
                  ),
                [o, i, a]
              );
            })(
              a,
              {
                name: o,
                parentSampled: l,
                attributes: d,
                parentSampleRate: (0, S.parseSampleRate)(_.dsc?.sample_rate),
              },
              _.sampleRand
            ),
        b = new D({
          ...e,
          attributes: {
            [c.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
            [c.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: void 0 !== E && T ? E : void 0,
            ...d,
          },
          sampled: h,
        });
      return (
        h ||
          !r ||
          m ||
          (s.DEBUG_BUILD &&
            p.debug.log(
              "[Tracing] Discarding root span because its trace was not chosen to be sampled."
            ),
          r.recordDroppedEvent("sample_rate", g(r) ? "span" : "transaction")),
        r && r.emit("spanStart", b),
        b
      );
    }
    function j(e) {
      return !0 === e.getScopeData().sdkProcessingMetadata.__SENTRY_SUPPRESS_TRACING__;
    }
    (e.s(["SentrySpan", 0, D], 14177),
      e.i(776710),
      e.s(
        [
          "startInactiveSpan",
          0,
          function (e) {
            let t = P();
            if (t.startInactiveSpan) return t.startInactiveSpan(e);
            let n = (function (e) {
                let t = { isStandalone: (e.experimental || {}).standalone, ...e };
                if (e.startTime) {
                  let n = { ...t };
                  return (
                    (n.startTimestamp = (0, v.spanTimeInputToSeconds)(e.startTime)),
                    delete n.startTime,
                    n
                  );
                }
                return t;
              })(e),
              { forceTransaction: r, parentSpan: a } = e;
            return (
              e.scope
                ? (t) => (0, i.withScope)(e.scope, t)
                : void 0 !== a
                  ? (e) => w(a, e)
                  : (e) => e()
            )(() => {
              let t = (0, i.getCurrentScope)(),
                o = (function (e, t) {
                  if (t) return t;
                  if (null === t) return;
                  let n = (0, b._getSpanForScope)(e);
                  if (!n) return;
                  let r = (0, i.getClient)();
                  return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan
                    ? (0, v.getRootSpan)(n)
                    : n;
                })(t, a),
                u = (0, i.getClient)();
              return e.onlyIfParent && !o
                ? (u?.recordDroppedEvent("no_parent_span", "span"), new I())
                : (function ({ parentSpan: e, spanArguments: t, forceTransaction: n, scope: r }) {
                    var a, o;
                    let u, l;
                    if (!(0, f.hasSpansEnabled)()) {
                      let r = new I();
                      if (n || !e) {
                        let e = {
                          sampled: "false",
                          sample_rate: "0",
                          transaction: t.name,
                          ...(0, y.getDynamicSamplingContextFromSpan)(r),
                        };
                        (0, y.freezeDscOnSpan)(r, e);
                      }
                      return r;
                    }
                    let d = (0, i.getClient)();
                    if (
                      ((a = d),
                      (o = t),
                      (l = a?.getOptions().ignoreSpans),
                      a &&
                        g(a) &&
                        l?.length &&
                        h(
                          {
                            description: o.name || "",
                            op: o.attributes?.[c.SEMANTIC_ATTRIBUTE_SENTRY_OP] || o.op,
                            attributes: o.attributes,
                          },
                          l
                        ))
                    )
                      return (
                        j(r) || d?.recordDroppedEvent("ignored", "span"),
                        new I({
                          dropReason: "ignored",
                          traceId: e?.spanContext().traceId ?? r.getPropagationContext().traceId,
                        })
                      );
                    let _ = (0, i.getIsolationScope)();
                    if (e && !n)
                      ((u = (function (e, t, n) {
                        let { spanId: r, traceId: a } = e.spanContext(),
                          s = j(t),
                          o = !s && (0, v.spanIsSampled)(e),
                          u = o
                            ? new D({ ...n, parentSpanId: r, traceId: a, sampled: o })
                            : new I({ traceId: a });
                        (0, v.addChildSpanToSpan)(e, u);
                        let l = (0, i.getClient)();
                        return (
                          l &&
                            (g(l) &&
                              u instanceof I &&
                              (e instanceof I && e.dropReason
                                ? ((u.dropReason = e.dropReason),
                                  l.recordDroppedEvent(e.dropReason, "span"))
                                : s ||
                                  ((u.dropReason = "sample_rate"),
                                  l.recordDroppedEvent("sample_rate", "span"))),
                            l.emit("spanStart", u),
                            n.endTimestamp && (l.emit("spanEnd", u), l.emit("afterSpanEnd", u))),
                          u
                        );
                      })(e, r, t)),
                        (0, v.addChildSpanToSpan)(e, u));
                    else if (e) {
                      let n = (0, y.getDynamicSamplingContextFromSpan)(e),
                        { traceId: a, spanId: i } = e.spanContext(),
                        s = (0, v.spanIsSampled)(e);
                      ((u = k({ traceId: a, parentSpanId: i, ...t }, r, s)),
                        (0, y.freezeDscOnSpan)(u, n));
                    } else {
                      let {
                        traceId: e,
                        dsc: n,
                        parentSpanId: a,
                        sampled: i,
                      } = { ..._.getPropagationContext(), ...r.getPropagationContext() };
                      ((u = k({ traceId: e, parentSpanId: a, ...t }, r, i)),
                        n && (0, y.freezeDscOnSpan)(u, n));
                    }
                    return (
                      !(function (e) {
                        if (!s.DEBUG_BUILD) return;
                        let {
                            description: t = "< unknown name >",
                            op: n = "< unknown op >",
                            parent_span_id: r,
                          } = (0, v.spanToJSON)(e),
                          { spanId: a } = e.spanContext(),
                          i = (0, v.spanIsSampled)(e),
                          o = (0, v.getRootSpan)(e),
                          u = o === e,
                          l = `[Tracing] Starting ${i ? "sampled" : "unsampled"} ${u ? "root " : ""}span`,
                          c = [`op: ${n}`, `name: ${t}`, `ID: ${a}`];
                        if ((r && c.push(`parent ID: ${r}`), !u)) {
                          let { op: e, description: t } = (0, v.spanToJSON)(o);
                          (c.push(`root ID: ${o.spanContext().spanId}`),
                            e && c.push(`root op: ${e}`),
                            t && c.push(`root description: ${t}`));
                        }
                        p.debug.log(`${l}
  ${c.join("\n  ")}`);
                      })(u),
                      (0, U.setCapturedScopesOnSpan)(u, r, _),
                      u
                    );
                  })({ parentSpan: o, spanArguments: n, forceTransaction: r, scope: t });
            });
          },
          "startNewTrace",
          0,
          function (e) {
            let t = P();
            return t.startNewTrace
              ? t.startNewTrace(e)
              : (0, i.withScope)(
                  (t) => (
                    t.setPropagationContext({
                      traceId: (0, E.generateTraceId)(),
                      sampleRand: (0, T.safeMathRandom)(),
                    }),
                    s.DEBUG_BUILD &&
                      p.debug.log(
                        `Starting a new trace with id ${t.getPropagationContext().traceId}`
                      ),
                    w(null, e)
                  )
                );
          },
          "withActiveSpan",
          0,
          w,
        ],
        541193
      ));
    var L = e.i(682564),
      G = e.i(373250);
    function $(e) {
      return new Y((t) => {
        t(e);
      });
    }
    function F(e) {
      return new Y((t, n) => {
        n(e);
      });
    }
    class Y {
      constructor(e) {
        ((this._state = 0), (this._handlers = []), this._runExecutor(e));
      }
      then(e, t) {
        return new Y((n, r) => {
          (this._handlers.push([
            !1,
            (t) => {
              if (e)
                try {
                  n(e(t));
                } catch (e) {
                  r(e);
                }
              else n(t);
            },
            (e) => {
              if (t)
                try {
                  n(t(e));
                } catch (e) {
                  r(e);
                }
              else r(e);
            },
          ]),
            this._executeHandlers());
        });
      }
      catch(e) {
        return this.then((e) => e, e);
      }
      finally(e) {
        return new Y((t, n) => {
          let r, a;
          return this.then(
            (t) => {
              ((a = !1), (r = t), e && e());
            },
            (t) => {
              ((a = !0), (r = t), e && e());
            }
          ).then(() => {
            a ? n(r) : t(r);
          });
        });
      }
      _executeHandlers() {
        if (0 === this._state) return;
        let e = this._handlers.slice();
        ((this._handlers = []),
          e.forEach((e) => {
            e[0] ||
              (1 === this._state && e[1](this._value),
              2 === this._state && e[2](this._value),
              (e[0] = !0));
          }));
      }
      _runExecutor(e) {
        let t = (e, t) => {
            if (0 === this._state) {
              if ((0, d.isThenable)(t)) return void t.then(n, r);
              ((this._state = e), (this._value = t), this._executeHandlers());
            }
          },
          n = (e) => {
            t(1, e);
          },
          r = (e) => {
            t(2, e);
          };
        try {
          e(n, r);
        } catch (e) {
          r(e);
        }
      }
    }
    e.s(["rejectedSyncPromise", 0, F, "resolvedSyncPromise", 0, $], 580611);
    var J = e.i(994218);
    e.i(936032);
    var W = e.i(225304),
      z = e.i(45968),
      H = e.i(571993);
    function K(e) {
      if (e) {
        var t;
        return (t = e) instanceof J.Scope ||
          "function" == typeof t ||
          Object.keys(e).some((e) => V.includes(e))
          ? { captureContext: e }
          : e;
      }
    }
    let V = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];
    function q() {
      let e = (0, i.getIsolationScope)(),
        t = (0, i.getCurrentScope)().getSession() || e.getSession();
      (t && (0, o.closeSession)(t), X(), e.setSession());
    }
    function X() {
      let e = (0, i.getIsolationScope)(),
        t = (0, i.getClient)(),
        n = e.getSession();
      n && t && t.captureSession(n);
    }
    (e.s(
      [
        "parseEventHintOrCaptureContext",
        0,
        K,
        "prepareEvent",
        0,
        function (e, i, o, u, l, c) {
          var f, m, h;
          let g,
            { normalizeDepth: S = 3, normalizeMaxBreadth: E = 1e3 } = e,
            T = {
              ...i,
              event_id: i.event_id || o.event_id || (0, L.uuid4)(),
              timestamp: i.timestamp || (0, C.dateTimestampInSeconds)(),
            },
            b = o.integrations || e.integrations.map((e) => e.name);
          ((function (e, t) {
            let { environment: n, release: r, dist: a, maxValueLength: i } = t;
            ((e.environment = e.environment || n || G.DEFAULT_ENVIRONMENT),
              !e.release && r && (e.release = r),
              !e.dist && a && (e.dist = a));
            let s = e.request;
            (s?.url && i && (s.url = (0, _.truncate)(s.url, i)),
              i &&
                e.exception?.values?.forEach((e) => {
                  e.value && (e.value = (0, _.truncate)(e.value, i));
                }));
          })(T, e),
            (f = T),
            (m = b).length > 0 &&
              ((f.sdk = f.sdk || {}), (f.sdk.integrations = [...(f.sdk.integrations || []), ...m])),
            l && l.emit("applyFrameMetadata", i),
            void 0 === i.type &&
              ((h = T),
              (g = (function (e) {
                let i = W.GLOBAL_OBJ._sentryDebugIds,
                  s = W.GLOBAL_OBJ._debugIds;
                if (!i && !s) return {};
                let o = i ? Object.keys(i) : [],
                  u = s ? Object.keys(s) : [];
                if (a && o.length === n && u.length === r) return a;
                ((n = o.length), (r = u.length), (a = {}), t || (t = {}));
                let l = (n, r) => {
                  for (let i of n) {
                    let n = r[i],
                      s = t?.[i];
                    if (s && a && n) ((a[s[0]] = n), t && (t[i] = [s[0], n]));
                    else if (n) {
                      let r = e(i);
                      for (let e = r.length - 1; e >= 0; e--) {
                        let s = r[e],
                          o = s?.filename;
                        if (o && a && t) {
                          ((a[o] = n), (t[i] = [o, n]));
                          break;
                        }
                      }
                    }
                  }
                };
                return (i && l(o, i), s && l(u, s), a);
              })(e.stackParser)),
              h.exception?.values?.forEach((e) => {
                e.stacktrace?.frames?.forEach((e) => {
                  e.filename && (e.debug_id = g[e.filename]);
                });
              })));
          let v = (function (e, t) {
            if (!t) return e;
            let n = e ? e.clone() : new J.Scope();
            return (n.update(t), n);
          })(u, o.captureContext);
          o.mechanism && (0, L.addExceptionMechanism)(T, o.mechanism);
          let y = l ? l.getEventProcessors() : [],
            I = (0, H.getCombinedScopeData)(c, v),
            R = [...(o.attachments || []), ...I.attachments];
          (R.length && (o.attachments = R), (0, H.applyScopeDataToEvent)(T, I));
          let O = [...y, ...I.eventProcessors];
          return (
            o.data && !0 === o.data.__sentry__
              ? $(T)
              : (function (e, t, n, r = 0) {
                  try {
                    let a = (function e(t, n, r, a) {
                      let i = r[a];
                      if (!t || !i) return t;
                      let o = i({ ...t }, n);
                      return (s.DEBUG_BUILD &&
                        null === o &&
                        p.debug.log(`Event processor "${i.id || "?"}" dropped event`),
                      (0, d.isThenable)(o))
                        ? o.then((t) => e(t, n, r, a + 1))
                        : e(o, n, r, a + 1);
                    })(t, n, e, r);
                    return (0, d.isThenable)(a) ? a : $(a);
                  } catch (e) {
                    return F(e);
                  }
                })(O, T, o)
          ).then((e) =>
            (e &&
              (function (e) {
                let t = {};
                if (
                  (e.exception?.values?.forEach((e) => {
                    e.stacktrace?.frames?.forEach((e) => {
                      e.debug_id &&
                        (e.abs_path
                          ? (t[e.abs_path] = e.debug_id)
                          : e.filename && (t[e.filename] = e.debug_id),
                        delete e.debug_id);
                    });
                  }),
                  0 === Object.keys(t).length)
                )
                  return;
                ((e.debug_meta = e.debug_meta || {}),
                  (e.debug_meta.images = e.debug_meta.images || []));
                let n = e.debug_meta.images;
                Object.entries(t).forEach(([e, t]) => {
                  n.push({ type: "sourcemap", code_file: e, debug_id: t });
                });
              })(e),
            "number" == typeof S && S > 0)
              ? (function (e, t, n) {
                  if (!e) return null;
                  let r = {
                    ...e,
                    ...(e.breadcrumbs && {
                      breadcrumbs: e.breadcrumbs.map((e) => ({
                        ...e,
                        ...(e.data && { data: (0, z.normalize)(e.data, t, n) }),
                      })),
                    }),
                    ...(e.user && { user: (0, z.normalize)(e.user, t, n) }),
                    ...(e.contexts && { contexts: (0, z.normalize)(e.contexts, t, n) }),
                    ...(e.extra && { extra: (0, z.normalize)(e.extra, t, n) }),
                  };
                  return (
                    e.contexts?.trace &&
                      r.contexts &&
                      ((r.contexts.trace = e.contexts.trace),
                      e.contexts.trace.data &&
                        (r.contexts.trace.data = (0, z.normalize)(e.contexts.trace.data, t, n))),
                    e.spans &&
                      (r.spans = e.spans.map((e) => ({
                        ...e,
                        ...(e.data && { data: (0, z.normalize)(e.data, t, n) }),
                      }))),
                    e.contexts?.flags &&
                      r.contexts &&
                      (r.contexts.flags = (0, z.normalize)(e.contexts.flags, 3, n)),
                    r
                  );
                })(e, S, E)
              : e
          );
        },
      ],
      213186
    ),
      e.s(
        [
          "addEventProcessor",
          0,
          function (e) {
            (0, i.getIsolationScope)().addEventProcessor(e);
          },
          "captureEvent",
          0,
          function (e, t) {
            return (0, i.getCurrentScope)().captureEvent(e, t);
          },
          "captureException",
          0,
          function (e, t) {
            return (0, i.getCurrentScope)().captureException(e, K(t));
          },
          "captureSession",
          0,
          function (e = !1) {
            e ? q() : X();
          },
          "isEnabled",
          0,
          function () {
            let e = (0, i.getClient)();
            return e?.getOptions().enabled !== !1 && !!e?.getTransport();
          },
          "setContext",
          0,
          function (e, t) {
            (0, i.getIsolationScope)().setContext(e, t);
          },
          "startSession",
          0,
          function (e) {
            let t = (0, i.getIsolationScope)(),
              { user: n } = (0, H.getCombinedScopeData)(t, (0, i.getCurrentScope)()),
              { userAgent: r } = W.GLOBAL_OBJ.navigator || {},
              a = (0, o.makeSession)({ user: n, ...(r && { userAgent: r }), ...e }),
              s = t.getSession();
            return (
              s?.status === "ok" && (0, o.updateSession)(s, { status: "exited" }),
              q(),
              t.setSession(a),
              a
            );
          },
        ],
        662537
      ));
  },
  886117,
  948826,
  805107,
  858384,
  901538,
  668595,
  (e) => {
    "use strict";
    let t;
    var n = e.i(759075),
      r = e.i(923288),
      a = e.i(250804),
      i = e.i(901020),
      s = e.i(62068),
      o = e.i(571993),
      u = e.i(821061),
      l = e.i(605394);
    let c = 0;
    function p(e) {
      let n = Math.floor(1e3 * e);
      void 0 !== t && n !== t && (c = 0);
      let r = c;
      return (
        c++,
        (t = n),
        { key: "sentry.timestamp.sequence", value: { value: r, type: "integer" } }
      );
    }
    e.s(["getSequenceAttribute", 0, p], 948826);
    var d = e.i(473753),
      f = e.i(304661);
    function _(e, t) {
      return t
        ? (0, a.withScope)(t, () => {
            let n = (0, f.getActiveSpan)(),
              r = n ? (0, f.spanToTraceContext)(n) : (0, a.getTraceContextFromScope)(t);
            return [
              n
                ? (0, d.getDynamicSamplingContextFromSpan)(n)
                : (0, d.getDynamicSamplingContextFromScope)(e, t),
              r,
            ];
          })
        : [void 0, void 0];
    }
    e.s(["_getTraceInfoFromScope", 0, _], 805107);
    var m = e.i(339435),
      h = e.i(67486),
      g = e.i(247167);
    function S() {
      return "u" > typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__;
    }
    e.s(
      [
        "getSDKSource",
        0,
        function () {
          return "npm";
        },
        "isBrowserBundle",
        0,
        S,
      ],
      858384
    );
    var E = e.i(225304);
    function T() {
      let e;
      return (
        "u" > typeof window &&
        (!(
          !S() &&
          "[object process]" ===
            Object.prototype.toString.call(void 0 !== g.default ? g.default : 0)
        ) ||
          ((e = E.GLOBAL_OBJ.process), e?.type === "renderer"))
      );
    }
    function b(e, t, n, r = !0) {
      !n || (!r && t in e) || (e[t] = n);
    }
    function v(e, t) {
      var n;
      let r = R(),
        a = ((n = e), R().get(n));
      void 0 === a
        ? r.set(e, [t])
        : a.length >= 1e3
          ? (I(e, a), r.set(e, [t]))
          : r.set(e, [...a, t]);
    }
    function y(e, t) {
      let r = t?.scope ?? (0, a.getCurrentScope)(),
        c = t?.captureSerializedMetric ?? v,
        d = r?.getClient() ?? (0, a.getClient)();
      if (!d) {
        i.DEBUG_BUILD && s.debug.warn("No client available to capture metric.");
        return;
      }
      let { _experiments: f, enableMetrics: m, beforeSendMetric: h } = d.getOptions();
      if (!(m ?? f?.enableMetrics ?? !0)) {
        i.DEBUG_BUILD && s.debug.warn("metrics option not enabled, metric will not be captured.");
        return;
      }
      let { user: g, attributes: S } = (0, o.getCombinedScopeData)((0, a.getIsolationScope)(), r),
        E = (function (e, t, n) {
          let { release: r, environment: a } = t.getOptions(),
            i = { ...e.attributes };
          (b(i, "user.id", n.id, !1),
            b(i, "user.email", n.email, !1),
            b(i, "user.name", n.username, !1),
            b(i, "sentry.release", r),
            b(i, "sentry.environment", a));
          let { name: s, version: o } = t.getSdkMetadata()?.sdk ?? {};
          (b(i, "sentry.sdk.name", s), b(i, "sentry.sdk.version", o));
          let u = t.getIntegrationByName("Replay"),
            l = u?.getReplayId(!0);
          return (
            b(i, "sentry.replay_id", l),
            l &&
              u?.getRecordingMode() === "buffer" &&
              b(i, "sentry._internal.replay_is_buffering", !0),
            { ...e, attributes: i }
          );
        })(e, d, g);
      d.emit("processMetric", E);
      let T = h || f?.beforeSendMetric,
        y = T ? T(E) : E;
      if (!y) {
        i.DEBUG_BUILD && s.debug.log("`beforeSendMetric` returned `null`, will not send metric.");
        return;
      }
      let I = (function (e, t, r, a) {
        let [, i] = _(t, r),
          s = (0, u._getSpanForScope)(r),
          o = s ? s.spanContext().traceId : i?.trace_id,
          c = s ? s.spanContext().spanId : void 0,
          d = (0, l.timestampInSeconds)(),
          f = p(d);
        return {
          timestamp: d,
          trace_id: o ?? "",
          span_id: c,
          name: e.name,
          type: e.type,
          unit: e.unit,
          value: e.value,
          attributes: {
            ...(0, n.serializeAttributes)(a),
            ...(0, n.serializeAttributes)(e.attributes, "skip-undefined"),
            [f.key]: f.value,
          },
        };
      })(y, d, r, S);
      (i.DEBUG_BUILD && s.debug.log("[Metric]", I), c(d, I), d.emit("afterCaptureMetric", y));
    }
    function I(e, t) {
      var n, r, a, i, s;
      let o,
        u,
        l = t ?? ((s = e), R().get(s)) ?? [];
      if (0 === l.length) return;
      let c = e.getOptions(),
        p =
          ((n = c._metadata),
          (r = c.tunnel),
          (a = e.getDsn()),
          (i = e.getDataCollectionOptions().userInfo),
          (o = {}),
          n?.sdk && (o.sdk = { name: n.sdk.name, version: n.sdk.version }),
          r && a && (o.dsn = (0, m.dsnToString)(a)),
          (0, h.createEnvelope)(o, [
            ((u = i ? "auto" : "never"),
            [
              {
                type: "trace_metric",
                item_count: l.length,
                content_type: "application/vnd.sentry.items.trace-metric+json",
              },
              {
                version: 2,
                ...(T() && { ingest_settings: { infer_ip: u, infer_user_agent: u } }),
                items: l,
              },
            ]),
          ]));
      (R().set(e, []), e.emit("flushMetrics"), e.sendEnvelope(p));
    }
    e.s(["isBrowser", 0, T], 901538);
    function R() {
      return (0, r.getGlobalSingleton)("clientToMetricBufferMap", () => new WeakMap());
    }
    function O(e, t, n, r) {
      y(
        { type: e, name: t, value: n, unit: r?.unit, attributes: r?.attributes },
        { scope: r?.scope }
      );
    }
    (e.s(["_INTERNAL_captureMetric", 0, y, "_INTERNAL_flushMetricsBuffer", 0, I], 668595),
      e.s(
        [
          "count",
          0,
          function (e, t = 1, n) {
            O("counter", e, t, n);
          },
          "distribution",
          0,
          function (e, t, n) {
            O("distribution", e, t, n);
          },
          "gauge",
          0,
          function (e, t, n) {
            O("gauge", e, t, n);
          },
        ],
        386277
      ));
    var A = e.i(386277);
    e.s(["metrics", 0, A], 886117);
  },
]);
