import { a as C } from "chunk-EQBCTBZ3.mjs";
import { b as v, h as I, l as D, o as P } from "chunk-DYNCKUFC.mjs";
import { a as L } from "chunk-UZNETSBG.mjs";
import { a as J } from "chunk-4I6ENMO3.mjs";
import { Qa as p, Z as R } from "chunk-V7MLU2WL.mjs";
import { a as b } from "chunk-425IX65M.mjs";
import { e as $, j as c, k as E, l as S, m as T } from "chunk-CT63CFX7.mjs";
var _ = {
  disableAIAgentMessageRedaction: "off",
  disableLazyModuleLoading: "off",
  disablePartialDocumentLoading: "off",
  disablePartialTreeInSandbox: "off",
  editableLegacyProjects: "off",
  moduleTools: "off",
  openPrimaryForBuiltInModules: "on",
  sandboxExportDebugging: "off",
  sandboxNodeDebugging: "off",
  showAdditionalAutosaves: "off",
  showDOMLayoutDebuggingPanel: "off",
  showErrorForOutdatedBuiltInModules: "on",
  showImportMap: "off",
  showShaderTools: "off",
  showDebugBar: "off",
  showStatusBar: "on",
  suppressDocumentLoading: "off",
  suppressUIMount: "off",
  userIsViewer: "off",
};
function w(t, e) {
  let n = new Set(t);
  return (n.add("on"), n.add("off"), { variants: [...n], value: e });
}
var k = {};
function q(t) {
  return k[t];
}
function Q(t) {
  let e = {};
  for (let n in t) {
    let a = t[n];
    if (typeof a == "object") ((e[n] = a.value), (k[n] = a.variants));
    else if (typeof a == "string") e[n] = a;
    else throw Error(`Invalid experiment value: ${a}`);
  }
  return e;
}
var x = Q({
    advancedAgentControls: "off",
    advancedHostingUpsells: "on",
    "agent-2026-w25": "on",
    "agent-2026-w26": "on",
    "agent-2026-w28": "on",
    "agent-2026-w29": "off",
    "agent-2026-w30": "off",
    agentModelSpecificChecklist: "off",
    agentRating: "off",
    agentUseAnthropicMessagesAPI: "off",
    agentUseOpenAIResponsesAPI: "off",
    aiCreditsHideBillingPeriodToggle: "on",
    aiCreditsTopUps: "on",
    analyticsFunnelGroupBy: "off",
    appShortcutsWhileEditingText: "off",
    arrays: "off",
    assertCenterAnchorPresent: "off",
    betterStackGridItemMoving: "on",
    billingV3: "on",
    bryelTracing: "off",
    cmsDatabase: "off",
    cmsTablePlaceholderRow: "on",
    codeLinkPlugin: "off",
    collectionLocalModuleImportMapEntries: "off",
    compareFastTreeLibrary: "off",
    componentSlotsAreChildNodes: "off",
    contentEditor: "on",
    convertToOutline: "off",
    coupons: "on",
    dashboardSettingsUpdate: "off",
    dataOnlyTree: "on",
    debugEditWhileLoadingRuntimeChecks: "off",
    debugEditWhileNeverLoadingRest: "off",
    disableLoadingIndicatorTimeout: "off",
    editorBarDisableFrameAncestorsSecurity: "off",
    effectsInDesignPages: "off",
    enableCrdtForNewProjects: "off",
    F1Keyboard: "off",
    fastLocalization: "off",
    fixedSizeImageSrcset: "off",
    gptCacheMiss: "off",
    gptNext: "on",
    greyFrameDefault: "off",
    gridBentoFit: "off",
    hydrationAutobahn: "on",
    importMapPruning: "off",
    improveInpDuringHydration: "on",
    inlineColorArrayControl: "on",
    jsonRichTextStorage: "off",
    layoutMenuStack: "on",
    layoutScroll: "off",
    lazyProviderMaps: "on",
    localCache: w(["syncWorker"], "on"),
    localizationAiUpdate: "on",
    localizationCacheWarmup: "off",
    localizationModelUpdate: "off",
    localizationUiUpdate: "off",
    localizedLinks: "off",
    locationControl: "off",
    masonryLayout: "on",
    mentionsInComments: "on",
    motionDivToDiv: "off",
    onDemandSSG: "on",
    onPageEnumVariableOnComponentInstanceEditTool: "on",
    onPageLocalizationSupport: "on",
    onPageLockedLayers: "on",
    onPageMoveTool: "on",
    onPageQuickAddRepeaterItems: "on",
    overridesWithPropertyControls: "off",
    pageLinkReferenceCheck: "on",
    paneEdgeDoubleClickReset: "off",
    passkeys: "off",
    patching: w(["collections"], "off"),
    preventVariableDeletion: "on",
    previewSharing: "off",
    prioritizedInitialModuleEvaluation: "on",
    prioritizedModuleEvaluation: "on",
    privateRouterReplaceState: "off",
    protectedStaging: "on",
    prototypeTreeDriver: w(["dynamicOverrides"], "dynamicOverrides"),
    publishingRecoveryProgress: "off",
    publishStaleModuleErrors: "off",
    raindropSelfDiagnostics: "on",
    raindropTraceAgentCommands: "off",
    redirectLondonTimezone: "on",
    removeProjectFontUploads: "on",
    renameLayers: "on",
    rolldown: "on",
    separateAiCreditsSubscription: "on",
    serverTimingRoute: "on",
    showCanonicalUrlAsDefault: "off",
    snapshotTrackingIdNodes: "off",
    squircle: "on",
    subscriptionNotInOrderDismiss: "on",
    synchronousNavigationOnDesktop: "off",
    transientLocalModuleTreeData: "off",
    translationModelGemini3Flash: "off",
    useFastTreeLibraryFastCloneCompare: "off",
    vantara: "off",
    verifyTreeOnCommit: "off",
    visibilityFromSandbox: "off",
    yieldOnTap: "off",
  }),
  X = ["jsonRichTextStorage"];
function Y(t) {
  return X.includes(t);
}
var U = {
    appShortcutsWhileEditingText: "on",
    assertCenterAnchorPresent: "on",
    codeLinkPlugin: "on",
    convertToOutline: "on",
    debugEditWhileLoadingRuntimeChecks: "on",
    enableCrdtForNewProjects: "on",
    layoutScroll: "on",
    translationModelGemini3Flash: "on",
    vantara: "on",
  },
  O = {
    "agent-2026-w29": "on",
    "agent-2026-w30": "on",
    agentModelSpecificChecklist: "on",
    arrays: "on",
    bryelTracing: "on",
    disableLoadingIndicatorTimeout: "on",
    effectsInDesignPages: "on",
    F1Keyboard: "on",
    fastLocalization: "on",
    gptCacheMiss: "on",
    localCache: "syncWorker",
    localizedLinks: "on",
    motionDivToDiv: "on",
    paneEdgeDoubleClickReset: "on",
    passkeys: "on",
    privateRouterReplaceState: "on",
    snapshotTrackingIdNodes: "on",
    synchronousNavigationOnDesktop: "on",
    transientLocalModuleTreeData: "on",
    verifyTreeOnCommit: "on",
    visibilityFromSandbox: "on",
    yieldOnTap: "on",
  },
  N = { vantara: [{ sample: 0.5, scope: "User", includeEnterprise: !1, variant: "on" }] };
var Z = {
  canPublishToCustomDomain: "upsell",
  canUsePasswordProtection: "upsell",
  canUseAnalytics: "upsell",
  canUseStagingEnvironment: "upsell",
  canUseVersioning: "upsell",
  showBannerOnPublishedSite: "on",
  canUseRedirects: "upsell",
  canUseCustomCanonicalUrl: "upsell",
  canUseRewriteCanonicalUrl: "off",
  canUseWellKnown: "upsell",
  canUseEditorPermissions: "off",
  canInviteEditors: "on",
  canUsePrivateLink: "upsell",
  canUsePrototypePassword: "upsell",
  canPublishTeamPackages: "upsell",
  canChangeProjectAccess: "off",
  canChangePrototypeAccess: "off",
  canInviteAnyDomain: "off",
  canInviteAnyDomainToPrototype: "off",
  canExportToHtml: "off",
  canHidePreviewInterface: "off",
  showSitesUpsell: "off",
  canUseBatchAITranslation: "upsell",
  canUseCustomLocaleRegions: "upsell",
  canUseLocalizationVariables: "upsell",
  canUseLocalizationCustomAiInstructions: "upsell",
  canUseBetaChannel: "off",
  canUseUTMTracking: "off",
  canUseTeamPlugins: "off",
  canUseWorkspacePlugins: "off",
  blockEditorBar: "off",
  canUseAdvancedAnalytics: "off",
  canUseFunnels: "off",
  canUseSpamProtectionAdvanced: "off",
  canUseBranching: "off",
  canUseAdvancedHosting: "off",
  canUseTriggers: "off",
  canUseExternalRewrites: "off",
  canUseInternalRewrites: "off",
  canUseCustomHeaders: "off",
  canUseAdvancedHeaders: "off",
};
var s = $(J(), 1);
var m = !1,
  f,
  y = class {
    constructor(e, { assertIfUsedBeforeUpdate: n = !1 } = {}) {
      c(this, "activeConfig");
      c(this, "activeOverrides", []);
      c(this, "initialConfig");
      c(this, "listeners", new Map());
      c(this, "assertOnUse");
      c(this, "updated");
      S(this, f);
      ((this.initialConfig = te(e)),
        (this.activeConfig = { ...this.initialConfig }),
        (this.assertOnUse = !1),
        (this.updated = new Promise((a) => {
          T(this, f, a);
        })));
    }
    addListener(e, n) {
      let a = this.listeners.get(e);
      (a || ((a = new Set()), this.listeners.set(e, a)), a.add(n));
    }
    get(e) {
      this.assertOnUse &&
        b(m, () => `Tried to read state of ${e} before update, await on .updated first`);
      for (let n = this.activeOverrides.length - 1; n >= 0; n--) {
        let a = this.activeOverrides[n][e];
        if (v(a)) return a;
      }
      return this.activeConfig[e];
    }
    getInitial(e) {
      return this.initialConfig[e];
    }
    is(e, n) {
      this.assertOnUse &&
        b(m, () => `Tried to read state of ${e} before update, await on .updated first`);
      let a = this.isActiveByOverrides(e, n);
      return D(a) ? this.activeConfig[e] === n : a;
    }
    isOn(e) {
      return (
        this.assertOnUse &&
          b(m, () => `Tried to read the state of ${e} before update, await on .updated first`),
        this.is(e, "on")
      );
    }
    getVariantName(e) {
      this.assertOnUse &&
        b(m, () => `Tried to read the state of ${e} before update, await on .updated first`);
      let n = this.get(e);
      return n === "on" || n === "off" ? e : `${e}_${n}`;
    }
    async didUpdateAndIsOn(e) {
      return (await this.updated, this.isOn(e));
    }
    overrideForTest(e) {
      let n = this.assertOnUse;
      ((this.assertOnUse = !1), this.activeOverrides.push(e));
      let a = !1,
        o = Object.assign(
          () => {
            if (!a) {
              if (this.activeOverrides.pop() !== e)
                throw Error("Something went wrong with experiment overrides");
              ((a = !0), (this.assertOnUse = n));
            }
          },
          {
            [Symbol.dispose]() {
              o();
            },
          }
        );
      return o;
    }
    removeListener(e, n) {
      this.listeners.get(e)?.delete(n);
    }
    update(e) {
      this.assertOnUse = !1;
      for (let n in e) {
        let a = j(e[n]);
        if (!v(a) || a === this.activeConfig[n]) continue;
        this.activeConfig[n] = a;
        let o = this.listeners.get(n);
        o && o.forEach((r) => r(a, n));
      }
      E(this, f) && (E(this, f).call(this), T(this, f, void 0));
    }
    withOverridesForTest(e, n) {
      let a = this.overrideForTest(e);
      try {
        return (this.signalForTests(e), n());
      } finally {
        (a(), this.signalForTests(e));
      }
    }
    signalForTests(e) {
      for (let n in e) {
        let a = this.listeners.get(n);
        if (!a) continue;
        let o = this.get(n);
        a.forEach((r) => r(o, n));
      }
    }
    isActiveByOverrides(e, n) {
      for (let a = this.activeOverrides.length - 1; a >= 0; a--) {
        let o = this.activeOverrides[a];
        if (e in o) return o[e] === n;
      }
    }
    serialize() {
      let e = {};
      for (let n in this.activeConfig) e[n] = this.get(n);
      return e;
    }
    diffFromInitial() {
      let e = {};
      for (let n in this.initialConfig) {
        let a = this.get(n);
        this.initialConfig[n] !== a && (e[n] = a);
      }
      return e;
    }
  };
f = new WeakMap();
function j(t) {
  return typeof t == "boolean" ? (t ? "on" : "off") : t;
}
function te(t) {
  let e = {};
  for (let n in t) e[n] = j(t[n]);
  return e;
}
function ne(t) {
  if ("isOn" in t) return [t.isOn, "on", !0];
  if ("isNotOn" in t) return [t.isNotOn, "on", !1];
  if ("isActive" in t) return [t.isActive, t.variant, !0];
  if ("isNotActive" in t) return [t.isNotActive, t.variant, !1];
  if ("condition" in t) return [t.name, t.condition];
  throw Error("invalid props");
}
function M(t) {
  return function ({ children: n, ...a }) {
    let o, r;
    if ("condition" in a) ((o = a.condition), (r = a.name));
    else {
      let [l, g, h] = ne(a);
      ((o = (K) => (K === g) === h), (r = l));
    }
    return F(t, r, o) ? s.default.createElement(s.default.Fragment, null, n) : null;
  };
}
function ae(t, e) {
  m = !0;
  try {
    return t.get(e);
  } finally {
    m = !1;
  }
}
function F(t, e, n) {
  let [, a] = (0, s.useReducer)((l) => l + 1, 0),
    o = (0, s.useRef)(!1),
    r = (0, s.useRef)(n);
  r.current = n;
  let d = ae(t, e);
  return (
    (o.current = r.current(d)),
    (0, s.useLayoutEffect)(() => {
      let l = (g) => {
        let h = r.current(g);
        h !== o.current && ((o.current = h), a());
      };
      return (t.addListener(e, l), () => t.removeListener(e, l));
    }, [t, e]),
    o.current
  );
}
var oe = 4294967295,
  i = {
    hashes: { Project: null, Team: null, User: null },
    isEnterprise: { Project: null, Team: null, User: null },
    channel: null,
  };
function we(t) {
  ((i.isEnterprise.Project = t.license.type === "enterpriseSite"), (i.hashes.Project = p(t.id)));
}
function z(t) {
  ((i.isEnterprise.User = t.spaces.some((e) => e.license?.type === "enterprise")),
    (i.hashes.User = p(t.id)));
}
function Oe(t, e) {
  ((i.isEnterprise.Team = e === "enterprise"), (i.hashes.Team = p(t)));
}
function Ne(t) {
  i.channel = t;
}
function re(t, { sample: e, scope: n, variant: a, includeEnterprise: o, channels: r }) {
  if (r)
    if (i.channel) {
      if (!r.includes(i.channel)) return !1;
    } else return !1;
  let d = e * oe,
    l = p(t),
    g = p(a);
  return P(i.hashes[n]) || P(i.isEnterprise[n]) || (!o && i.isEnterprise[n])
    ? !1
    : (i.hashes[n] ^ l ^ g) >>> 0 < d;
}
function B(t = N) {
  let e = {};
  return (
    Object.keys(t).forEach((n) => {
      if (!t[n]) return;
      let a = I(t[n]) ? t[n] : [t[n]];
      for (let o of a) {
        if (!re(n, o)) continue;
        [n, ...(o.dependencies ?? [])].forEach((d) => {
          e[d] = o.variant;
        });
        break;
      }
    }),
    e
  );
}
var V = {
  "637362dde0f8db852b3ff44aba1678e1ceee077bd6d1ac503a395dd8fd467cd1": [
    "translationModelGemini3Flash",
    "localizationAiUpdate",
  ],
  "95b5cc8ae7f015eabad543eef528a979c811885f9a3ca65168a6cb126da680ba": [
    "translationModelGemini3Flash",
    "localizationAiUpdate",
  ],
  de0eb89af30f0e49c67495d6440ea21ecc1a1e200c38829566040b22c7bf59fc: [
    "translationModelGemini3Flash",
    "localizationAiUpdate",
  ],
  d90a8d106017986195d14414e9a0ac4d2d6044c34e40ccd9400cde31b0137ca2: [
    "translationModelGemini3Flash",
  ],
  c874a142cd73dccb399c7352e844346a524c7af0347d60b7a9b620f18b7a9158: ["localizationAiUpdate"],
  bf17748a4e084a2d7e9929a68f3b31a5759f614ce328e84ee4192fddecea62f3: ["localizationAiUpdate"],
  bf53f24395c6f2b6c965b10d5633d16cf9d2c58341612c180c1ac280b5b03168: ["localizationAiUpdate"],
  ff2a11c8e1a1dd6eee7c7a0365dec3c1c1b353e62230395bb9a00fd347a52d1a: ["localizationAiUpdate"],
  "8c10117d000814e2891bdde214fefbd2f4a2ac6d417600eede2856d8102cf86e": ["localizationAiUpdate"],
  "36439efdb60b949ee33791118d3c3dc47b657a23a2fda8bacc7fc3ed7d2dda45": ["localizationAiUpdate"],
  a2846c600bf841b5247f2b81233f20d47f922bcbc0a39716a7c3db7282dd1e72: ["localizationAiUpdate"],
  cb15333875ee186289f57808e05d6f985476b719299224518950be3df89a4155: ["localizationAiUpdate"],
  "980d6bef77fdbd2250892051a61fd33b5381a35d768e1a94842e233c70d04632": ["localizationAiUpdate"],
  "5c333815ebd3604547ec50da62e896c7d58552e1cc771babf4e63a452db4f047": ["localizationAiUpdate"],
  "832f30149c8800940b48335ae7dcb95a57bbc50699106f1fb9ef51e3745e97d9": ["localizationAiUpdate"],
};
typeof window < "u" && window.framerUser && z(window.framerUser);
var u = new y(ue());
u.update(H());
var je = M(u);
function Me(t, e) {
  return F(u, t, (a) => a === "on") || W(t, e);
}
function ze(t, e) {
  return F(u, t, (n) => n === e);
}
function Be(t, e) {
  return u.isOn(t) || W(t, e);
}
function W(t, e) {
  return !e || !V[e] ? !1 : V[e].includes(t);
}
function A() {
  if (typeof window > "u") return "experiments";
  let t = C(window)?.channel;
  return t ? `experiments-${t}` : "experiments";
}
function G() {
  let t = {};
  if (typeof window > "u") return {};
  let e = C(window);
  if (!e) return t;
  let { channel: n, override: a } = e,
    o = a === "tunnel" && R.isDevelopment;
  return (
    (n === "alpha" || n === "local" || o) && Object.assign(t, U, O),
    n === "beta" && Object.assign(t, U),
    t
  );
}
function se() {
  let t = {};
  try {
    let e = JSON.parse(localStorage[A()] || "{}");
    Object.assign(t, e);
  } catch {}
  return t;
}
function le() {
  if (typeof window > "u") return {};
  if (!ce(window)) return {};
  try {
    return JSON.parse(window.experiments);
  } catch {}
  return {};
}
function ce(t) {
  return "experiments" in t && v(t.experiments);
}
function fe() {
  let t = {};
  if (typeof window > "u") return {};
  for (let e of new URLSearchParams(window?.location.search).getAll("experiment")) {
    let [n, a = "on"] = e.split("=");
    t[n] = a;
  }
  return t;
}
function ue() {
  return { ...x, ...G() };
}
function We({ resetStorage: t, resetSession: e } = {}) {
  if (!(typeof window > "u")) {
    if ((t && localStorage.removeItem(A()), e)) {
      let n = new URL(window.location.href);
      (n.searchParams.delete("experiment"),
        window.history.replaceState(window.history.state, "", n.href));
    }
    u.update({ ...x, ...H() });
  }
}
function H() {
  return { ...B(), ...G(), ...se(), ...le(), ...fe() };
}
typeof window < "u" && window.localStorage.removeItem("useThemeLogo");
function Ge(t) {
  let e = A(),
    n = {};
  try {
    n = JSON.parse(localStorage[e] || "{}");
  } catch {}
  let a = { ...n, ...t };
  for (let o of L(a)) u.getInitial(o) === a[o] && delete a[o];
  try {
    Object.keys(a).length === 0
      ? localStorage.removeItem(e)
      : localStorage.setItem(e, JSON.stringify(a));
  } catch {}
}
export {
  _ as a,
  q as b,
  x as c,
  Y as d,
  U as e,
  O as f,
  N as g,
  Z as h,
  y as i,
  M as j,
  F as k,
  we as l,
  Oe as m,
  Ne as n,
  u as o,
  je as p,
  Me as q,
  ze as r,
  Be as s,
  ue as t,
  We as u,
  Ge as v,
};
//# sourceMappingURL=chunk-CFUM4JW5.mjs.map
