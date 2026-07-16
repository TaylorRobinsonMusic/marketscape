import { i as U } from "./chunk-Q3WX3LWW.mjs";
import { b as k, i as C } from "./chunk-KNO5UQLJ.mjs";
import { w as _, y as K } from "./chunk-WGS5WK5D.mjs";
import { a as y } from "./chunk-XD24P57D.mjs";
import { b as h, e as E, f as G, g as I, l as P } from "./chunk-DYNCKUFC.mjs";
import { b as p } from "./chunk-425IX65M.mjs";
function D(e, n, a, t, l, M) {
  if (n.pages > (a.maxPages ?? 1 / 0)) return "pages";
  if (n.cmsCollections > (a.maxCmsCollections ?? 1 / 0)) return "cmsCollections";
  if (n.cmsItems > (a.maxCmsItems ?? 1 / 0)) return "cmsItems";
  if (n.locales > (a.maxLocales ?? 1 / 0)) return "locales";
  let x = M ? a.maxEditors : t !== "free" ? (l?.maxEditors ?? a.maxEditors) : a.maxEditors;
  if (n.editors > (x ?? 1 / 0)) return "editors";
  if (e !== "freeSite" && n.abTests > (a.maxAbTests ?? 1 / 0)) return "abTests";
  let f = a.maxBandwidthInGB ?? 1 / 0,
    { previousMonth: o, twoMonthsAgo: g, currentMonth: w } = n.bandwidthInGB,
    Y = o > f && g > f,
    q = o > f && w > f;
  if ((Y || q) && !(U === f)) return "bandwidth";
}
var J = {
  pages: "You currently have more pages than this plan allows for.",
  cmsCollections: "You currently have more CMS collections than this plan allows for.",
  cmsItems: "You currently have more CMS items than this plan allows for.",
  locales: "You currently have more locales than this plan allows for.",
  editors: "You currently have more editors in your project than this plan allows for.",
  abTests: "You currently have more A/B tests in your project than this plan allows for.",
  bandwidth: "Your current bandwidth usage exceeds this plan\u2019s limit.",
};
function Le(e) {
  return J[e];
}
function ve({ isEnterprise: e, count: n, maxLimit: a, selfServeMax: t }) {
  return e ? 3 : n <= a ? 1 : n <= t ? 0 : 2;
}
var j = ((i) => (
  (i.fileUploadLimitInMB = "fileUploadLimitInMB"),
  (i.pages = "pages"),
  (i.cmsCollections = "cmsCollections"),
  (i.cmsItems = "cmsItems"),
  (i.localeAddon = "localeAddon"),
  (i.abTests = "abTests"),
  (i.trackingEventsLimit = "trackingEventsLimit"),
  (i.translatableWords = "translatableWords"),
  (i.bandwidthInGB = "bandwidthInGB"),
  (i.analyticsRangeInDays = "analyticsRangeInDays"),
  (i.aiCredits = "aiCredits"),
  (i.canUseFunnels = "canUseFunnels"),
  (i.canUseTriggers = "canUseTriggers"),
  (i.canInviteEditors = "canInviteEditors"),
  (i.canInviteProjectEditors = "canInviteProjectEditors"),
  (i.canPublishToCustomDomain = "canPublishToCustomDomain"),
  (i.canUseBatchAITranslation = "canUseBatchAITranslation"),
  (i.canUseBranching = "canUseBranching"),
  (i.canUseCustomCanonicalUrl = "canUseCustomCanonicalUrl"),
  (i.canUseCustomLocaleRegions = "canUseCustomLocaleRegions"),
  (i.canUseEditorPermissions = "canUseEditorPermissions"),
  (i.canUsePasswordProtection = "canUsePasswordProtection"),
  (i.canUseRedirects = "canUseRedirects"),
  (i.canUseStagingEnvironment = "canUseStagingEnvironment"),
  (i.canUseUTMTracking = "canUseUTMTracking"),
  (i.canUseWellKnown = "canUseWellKnown"),
  (i.customDomainRecoverUpsell = "customDomainRecoverUpsell"),
  (i.domainToBuyUpsell = "domainToBuyUpsell"),
  i
))(j || {});
function Be(e) {
  return e in j;
}
function Re(e, n) {
  return e !== null ? e : n.abTests > 0 ? "abTests" : null;
}
function c(e, n, a) {
  return e.find(({ resourceLimits: t }) => (t[a] ?? 1 / 0) > (n[a] ?? 1 / 0))?.licenseType ?? null;
}
function u(e, n, a) {
  return e.find(({ featureFlags: t }) => t[n] === a)?.licenseType ?? null;
}
function Ve(e, n, a, t, l, M, x) {
  let o = a
    .filter(({ licenseType: g }) => K(g, n) && _(g) && g !== "basicSite2025")
    .filter(
      ({ resourceLimits: g, licenseType: w }) => !D(n, M, g, t, l, x) && w !== "enterpriseSite"
    );
  switch (e) {
    case "pages":
      return c(o, l, "pages");
    case "fileUploadLimitInMB":
      return c(o, l, "fileUploadLimitInMB");
    case "cmsCollections":
      return c(o, l, "cmsCollections");
    case "cmsItems":
      return c(o, l, "cmsItems");
    case "canUseEditorPermissions":
      return u(o, "canUseEditorPermissions", "on");
    case "canPublishToCustomDomain":
    case "customDomainRecoverUpsell":
    case "domainToBuyUpsell":
      return u(o, "canPublishToCustomDomain", "on");
    case "canInviteEditors":
    case "canInviteProjectEditors":
      return c(o, l, "maxEditors");
    case "translatableWords":
    case "localeAddon":
      return c(o, l, "maxLocales");
    case "canUseBatchAITranslation":
      return u(o, "canUseBatchAITranslation", "on");
    case "canUseBranching":
      return u(o, "canUseBranching", "on");
    case "canUseUTMTracking":
      return u(o, "canUseUTMTracking", "on");
    case "canUseFunnels":
      return u(o, "canUseFunnels", "upsell");
    case "canUseTriggers":
      return u(o, "canUseTriggers", "upsell");
    case "abTests":
      return c(o, l, "maxAbTests");
    case "trackingEventsLimit":
      return c(o, l, "maxTrackingEventsLimit");
    case "canUseRedirects":
      return u(o, "canUseRedirects", "on");
    case "canUseCustomCanonicalUrl":
      return u(o, "canUseCustomCanonicalUrl", "upsell");
    case "canUseCustomLocaleRegions":
      return u(o, "canUseCustomLocaleRegions", "on");
    case "canUsePasswordProtection":
      return u(o, "canUsePasswordProtection", "on");
    case "canUseStagingEnvironment":
      return u(o, "canUseStagingEnvironment", "on");
    case "canUseWellKnown":
      return u(o, "canUseWellKnown", "on");
    case "analyticsRangeInDays":
      return c(o, l, "analyticsRangeInDays");
    case "bandwidthInGB":
      return c(o, l, "bandwidthInGB");
    case "aiCredits":
      return c(o, l, "aiCredits");
  }
}
var r = { modelId: "contour-1", environment: "production", deployment: "" };
function L(e, n, a) {
  let t = e[n];
  return h(t) ? t : a;
}
function Ie(e) {
  return G(e)
    ? {
        modelId: L(e, "modelId", r.modelId),
        environment: L(e, "environment", r.environment),
        deployment: L(e, "deployment", r.deployment),
      }
    : { ...r };
}
function b(e, n) {
  return e.trim() || n;
}
function $(e = r) {
  return b(e.modelId, r.modelId);
}
function Q(e = r) {
  let n = $(e),
    a = e.deployment.trim(),
    t = b(e.environment, r.environment);
  return a ? `${n}:${a}` : t === "production" ? n : `${n}:${t}`;
}
function Z(e = r) {
  return e.deployment.trim().length > 0;
}
function _e(e = r) {
  return $(e) !== r.modelId || b(e.environment, r.environment) !== r.environment || Z(e);
}
var H = [
    {
      languageModel: "contour/dev",
      displayName: "Contour Dev",
      base: "dev",
      baseten: { override: "debug-bar" },
    },
    {
      languageModel: "contour/hex-v8",
      displayName: "Contour Hex v8",
      base: "hex",
      baseten: { alias: "contour-1" },
    },
    {
      languageModel: "contour/iris-v8",
      displayName: "Contour Iris v8",
      base: "iris",
      baseten: { modelId: "qvvy52rq", deployment: "w6pyrm2" },
    },
  ],
  ne = [
    ...H,
    {
      languageModel: "contour-1",
      displayName: "Contour",
      base: "hex",
      baseten: { alias: "contour-1" },
    },
  ],
  O = ne,
  je = H.map((e) => e.languageModel),
  F = new Map(O.map((e) => [e.languageModel, e]));
function T(e) {
  return F.has(e);
}
function $e(e, n) {
  let a = F.get(e);
  y(a, "Unknown Contour variant");
  let { baseten: t } = a;
  return "override" in t ? Q(n ?? r) : "alias" in t ? t.alias : `${t.modelId}:${t.deployment}`;
}
function Qe(e) {
  let n = F.get(e);
  return (y(n, "Unknown Contour variant"), "override" in n.baseten);
}
function v(e) {
  let n = O.map((a) => [a.languageModel, e]);
  return Object.fromEntries(n);
}
function S(e) {
  let n = O.map((a) => [a.languageModel, e(a)]);
  return Object.fromEntries(n);
}
var ae = {
  "openai/gpt-3.5-turbo-1106": 16385,
  "openai/gpt-4": 8191,
  "openai/gpt-4o-2024-08-06": 128e3,
  "openai/gpt-4o-mini-2024-07-18": 128e3,
  "google/gemini-2.0-flash-001": 1048576,
  "google/gemini-2.5-flash": 1048576,
  "google/gemini-2.5-flash-lite": 1048576,
  "google/gemini-2.5-pro": 1048576,
  "google/gemini-3.1-pro-preview-customtools": 1048576,
  "google/gemini-3.1-flash-lite-preview": 1048576,
  "google/gemini-3-flash-preview": 1048576,
  "google/gemini-3.5-flash": 1048576,
  "qwen/qwen3.6-flash": 1e6,
  "openai/gpt-4.1": 1047576,
  "openai/gpt-5.1": 4e5,
  "openai/gpt-5.2": 4e5,
  "openai/gpt-5.2-codex": 4e5,
  "openai/gpt-5.1-codex-mini": 4e5,
  "openai/gpt-5.3-codex": 4e5,
  "openai/gpt-5.4": [272e3, 105e4],
  "openai/gpt-5.5": [272e3, 105e4],
  "openai/gpt-5.6-sol": [272e3, 105e4],
  "openai/gpt-5.6-terra": [272e3, 105e4],
  "openai/gpt-5.6-luna": [272e3, 105e4],
  "openai/gpt-5.4-mini": 4e5,
  "anthropic/claude-haiku-4.5": 2e5,
  "moonshotai/Kimi-K2.5": 262144,
  "moonshotai/Kimi-K2.6": 262144,
  "moonshotai/Kimi-K2.7-Code": 262144,
  "deepseek/deepseek-v4-pro": 1048576,
  "deepseek/deepseek-v4-flash": 1048576,
  "x-ai/grok-build-0.1": [2e5, 256e3],
  "qwen/qwen3-vl-235b-a22b-instruct": 262144,
  "openai/gpt-oss-120b": 131072,
  "openai/gpt-oss-20b": 131072,
  "anthropic/claude-opus-4.5": 2e5,
  "anthropic/claude-sonnet-4.5": [2e5, 3e5, 1e6],
  "anthropic/claude-sonnet-4.6": [3e5, 5e5, 1e6],
  "anthropic/claude-sonnet-5": 1e6,
  "anthropic/claude-opus-4.6": [5e5, 7e5, 1e6],
  "anthropic/claude-opus-4.7": [5e5, 7e5, 1e6],
  "anthropic/claude-opus-4.8": [2e5, 5e5, 1e6],
  "anthropic/claude-fable-5": [2e5, 5e5, 1e6],
  ...v(262144),
};
function Je(e, n) {
  let a = ae[e];
  if (E(a)) return a;
  let t = a.length === 2 ? a[1] : a[2];
  switch (n) {
    case "lower":
      return a[0];
    case "upper":
      return a.length === 2 ? t : a[1];
    case "max":
      return t;
    default:
      p(n, "Context limit cap must be supported.");
  }
}
var te = ["low", "medium", "high", "xhigh"],
  ie = {
    none: "None",
    enabled: "Enabled",
    minimal: "Minimal",
    low: "Low",
    medium: "Medium",
    high: "High",
    xhigh: "Extra High",
    interleaved: "Adaptive",
  };
function Ze(e) {
  return ie[e];
}
var R = {
    "openai/gpt-3.5-turbo-1106": new Set(["none", "minimal", "low", "medium", "high"]),
    "openai/gpt-4": new Set(["none", "minimal", "low", "medium", "high"]),
    "openai/gpt-4o-2024-08-06": new Set(["none", "minimal", "low", "medium", "high"]),
    "openai/gpt-4o-mini-2024-07-18": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-2.0-flash-001": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-2.5-flash": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-2.5-flash-lite": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-2.5-pro": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-3-flash-preview": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-3.1-pro-preview-customtools": new Set(["minimal", "low", "medium", "high"]),
    "google/gemini-3.1-flash-lite-preview": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-3.5-flash": new Set(["minimal", "low", "medium", "high"]),
    "qwen/qwen3.6-flash": new Set(["none"]),
    "openai/gpt-4.1": new Set(["none", "minimal", "low", "medium", "high"]),
    "openai/gpt-5.1": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.2": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.2-codex": new Set(["low", "medium", "high"]),
    "openai/gpt-5.1-codex-mini": new Set(["low", "medium", "high"]),
    "openai/gpt-5.3-codex": new Set(["low", "medium", "high"]),
    "openai/gpt-5.4": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.5": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.6-sol": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.6-terra": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.6-luna": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.4-mini": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-oss-120b": new Set(["low", "medium", "high"]),
    "openai/gpt-oss-20b": new Set(["low", "medium", "high"]),
    "anthropic/claude-haiku-4.5": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-sonnet-4.5": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-sonnet-4.6": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-sonnet-5": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-opus-4.5": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-opus-4.6": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-opus-4.7": new Set(["none", "low", "medium", "high", "xhigh"]),
    "anthropic/claude-opus-4.8": new Set(["none", "low", "medium", "high", "xhigh"]),
    "anthropic/claude-fable-5": new Set(["none", "low", "medium", "high", "xhigh"]),
    "deepseek/deepseek-v4-pro": new Set(["none", "high", "xhigh"]),
    "deepseek/deepseek-v4-flash": new Set(["none", "high", "xhigh"]),
    "x-ai/grok-build-0.1": new Set(["enabled"]),
    "moonshotai/Kimi-K2.5": new Set(["enabled", "none"]),
    "moonshotai/Kimi-K2.6": new Set(["enabled", "none"]),
    "moonshotai/Kimi-K2.7-Code": new Set(["enabled", "none"]),
    "qwen/qwen3-vl-235b-a22b-instruct": new Set(["none"]),
    ...S((e) => (e.base === "iris" ? new Set(["enabled"]) : new Set(["enabled", "none"]))),
  },
  oe = S((e) => (e.base === "hex" ? "none" : "enabled")),
  se = new Set(["none", "enabled", "minimal", "low", "medium", "high", "xhigh", "interleaved"]);
function re(e) {
  return h(e) ? se.has(e) : !1;
}
function en(e) {
  if (!G(e)) return !1;
  for (let n in e) {
    if (!k(n)) return !1;
    let a = e[n];
    if (!re(a) || !R[n].has(a)) return !1;
  }
  return !0;
}
function nn(e) {
  return R[e];
}
function an(e, n) {
  return R[n].has(e);
}
function tn(e) {
  if (T(e)) return oe[e];
  switch (e) {
    case "openai/gpt-3.5-turbo-1106":
    case "openai/gpt-4":
    case "openai/gpt-4o-2024-08-06":
    case "openai/gpt-4o-mini-2024-07-18":
    case "google/gemini-2.0-flash-001":
    case "google/gemini-2.5-flash":
    case "google/gemini-2.5-flash-lite":
    case "google/gemini-2.5-pro":
    case "google/gemini-3-flash-preview":
    case "google/gemini-3.1-pro-preview-customtools":
    case "google/gemini-3.1-flash-lite-preview":
    case "openai/gpt-4.1":
    case "openai/gpt-5.1":
    case "openai/gpt-5.2":
    case "openai/gpt-5.2-codex":
    case "openai/gpt-5.1-codex-mini":
    case "openai/gpt-5.3-codex":
    case "openai/gpt-5.4":
    case "openai/gpt-5.5":
    case "openai/gpt-5.6-sol":
    case "openai/gpt-5.6-terra":
    case "openai/gpt-5.6-luna":
    case "openai/gpt-5.4-mini":
    case "openai/gpt-oss-120b":
    case "openai/gpt-oss-20b":
    case "anthropic/claude-haiku-4.5":
    case "anthropic/claude-sonnet-4.5":
    case "anthropic/claude-sonnet-4.6":
    case "anthropic/claude-sonnet-5":
    case "anthropic/claude-opus-4.5":
    case "anthropic/claude-opus-4.6":
    case "anthropic/claude-opus-4.7":
    case "anthropic/claude-opus-4.8":
    case "anthropic/claude-fable-5":
      return "low";
    case "google/gemini-3.5-flash":
      return "medium";
    case "deepseek/deepseek-v4-pro":
    case "deepseek/deepseek-v4-flash":
    case "qwen/qwen3-vl-235b-a22b-instruct":
    case "qwen/qwen3.6-flash":
      return "none";
    case "x-ai/grok-build-0.1":
    case "moonshotai/Kimi-K2.5":
    case "moonshotai/Kimi-K2.6":
    case "moonshotai/Kimi-K2.7-Code":
      return "enabled";
    default:
      p(e, "Model must have a default reasoning effort specified.");
  }
}
var le = {
  "openai/gpt-3.5-turbo-1106": !1,
  "openai/gpt-4": !1,
  "openai/gpt-4o-2024-08-06": !1,
  "openai/gpt-4o-mini-2024-07-18": !1,
  "google/gemini-2.0-flash-001": !1,
  "google/gemini-2.5-flash": !1,
  "google/gemini-2.5-flash-lite": !1,
  "google/gemini-2.5-pro": !1,
  "google/gemini-3.1-pro-preview-customtools": !1,
  "google/gemini-3.1-flash-lite-preview": !1,
  "google/gemini-3-flash-preview": !1,
  "google/gemini-3.5-flash": !1,
  "qwen/qwen3.6-flash": !1,
  "openai/gpt-4.1": !1,
  "openai/gpt-5.1": !1,
  "openai/gpt-5.2": !1,
  "openai/gpt-5.2-codex": !1,
  "openai/gpt-5.1-codex-mini": !1,
  "openai/gpt-5.3-codex": !1,
  "openai/gpt-5.4": !1,
  "openai/gpt-5.5": !1,
  "openai/gpt-5.6-sol": !1,
  "openai/gpt-5.6-terra": !1,
  "openai/gpt-5.6-luna": !1,
  "openai/gpt-5.4-mini": !1,
  "anthropic/claude-haiku-4.5": !1,
  "moonshotai/Kimi-K2.5": !1,
  "moonshotai/Kimi-K2.6": !1,
  "moonshotai/Kimi-K2.7-Code": !1,
  "deepseek/deepseek-v4-pro": !1,
  "deepseek/deepseek-v4-flash": !1,
  "x-ai/grok-build-0.1": !1,
  "qwen/qwen3-vl-235b-a22b-instruct": !1,
  "openai/gpt-oss-120b": !1,
  "openai/gpt-oss-20b": !1,
  "anthropic/claude-opus-4.5": !1,
  "anthropic/claude-sonnet-4.5": !1,
  "anthropic/claude-sonnet-4.6": !0,
  "anthropic/claude-sonnet-5": !0,
  "anthropic/claude-opus-4.6": !0,
  "anthropic/claude-opus-4.7": !0,
  "anthropic/claude-opus-4.8": !0,
  "anthropic/claude-fable-5": !0,
  ...v(!1),
};
function B(e) {
  return le[e];
}
var ue = new Set(te);
function de(e) {
  return ue.has(e);
}
var ce = { low: 1024, medium: 2048, high: 4096 };
function me(e, n) {
  if (P(e)) return ge(n);
  switch (e) {
    case "enabled":
      return;
    case "none":
      switch (n) {
        case "anthropic/claude-haiku-4.5":
        case "anthropic/claude-sonnet-4.5":
        case "anthropic/claude-sonnet-4.6":
        case "anthropic/claude-sonnet-5":
        case "anthropic/claude-opus-4.5":
        case "anthropic/claude-opus-4.6":
        case "anthropic/claude-opus-4.7":
        case "anthropic/claude-opus-4.8":
        case "anthropic/claude-fable-5":
        case "qwen/qwen3.6-flash":
        case "moonshotai/Kimi-K2.5":
        case "moonshotai/Kimi-K2.6":
        case "moonshotai/Kimi-K2.7-Code":
        case "qwen/qwen3-vl-235b-a22b-instruct":
          return;
        default:
          return { effort: "none", enabled: !0 };
      }
    case "minimal":
      return { effort: e, enabled: !0 };
    case "interleaved":
      return { enabled: !0 };
    case "low":
    case "medium":
    case "high": {
      if (n === "anthropic/claude-sonnet-4.6") {
        let a = ce[e];
        if (!P(a)) return { enabled: !0, max_tokens: a };
      }
      return B(n) ? { enabled: !0 } : { effort: e, enabled: !0 };
    }
    case "xhigh":
      return B(n) ? { enabled: !0 } : { effort: e, enabled: !0 };
    default:
      p(e, "Reasoning effort must have a reasoning config.");
  }
}
function on(e, n) {
  if (!(P(e) || !B(n) || !de(e))) return { verbosity: e };
}
var N = "effort";
function sn(e, n) {
  let a = me(e, n);
  if (!I(a, N)) return;
  let t = a[N];
  return h(t) ? t : void 0;
}
function ge(e) {
  if (!T(e))
    switch (e) {
      case "google/gemini-3.5-flash":
        return { effort: "medium", enabled: !0 };
      case "google/gemini-2.0-flash-001":
      case "google/gemini-2.5-flash":
      case "google/gemini-2.5-pro":
      case "google/gemini-3-flash-preview":
      case "google/gemini-3.1-pro-preview-customtools":
      case "google/gemini-3.1-flash-lite-preview":
      case "openai/gpt-4.1":
      case "openai/gpt-3.5-turbo-1106":
      case "openai/gpt-4":
      case "openai/gpt-4o-2024-08-06":
      case "openai/gpt-4o-mini-2024-07-18":
        return { effort: "minimal", enabled: !0 };
      case "openai/gpt-oss-120b":
      case "openai/gpt-oss-20b":
      case "anthropic/claude-opus-4.5":
        return { effort: "low", enabled: !0 };
      case "anthropic/claude-haiku-4.5":
      case "anthropic/claude-sonnet-4.5":
      case "anthropic/claude-sonnet-4.6":
      case "anthropic/claude-sonnet-5":
      case "anthropic/claude-opus-4.6":
      case "anthropic/claude-opus-4.7":
      case "anthropic/claude-opus-4.8":
      case "anthropic/claude-fable-5":
      case "deepseek/deepseek-v4-pro":
      case "deepseek/deepseek-v4-flash":
      case "qwen/qwen3.6-flash":
      case "qwen/qwen3-vl-235b-a22b-instruct":
        return;
      case "moonshotai/Kimi-K2.5":
      case "moonshotai/Kimi-K2.6":
      case "moonshotai/Kimi-K2.7-Code":
      case "x-ai/grok-build-0.1":
        return;
      case "openai/gpt-5.2-codex":
      case "openai/gpt-5.1-codex-mini":
      case "openai/gpt-5.3-codex":
        return { effort: "low", enabled: !0 };
      case "google/gemini-2.5-flash-lite":
      case "openai/gpt-5.1":
      case "openai/gpt-5.2":
      case "openai/gpt-5.4":
      case "openai/gpt-5.5":
      case "openai/gpt-5.6-sol":
      case "openai/gpt-5.6-terra":
      case "openai/gpt-5.6-luna":
      case "openai/gpt-5.4-mini":
        return { effort: "none", enabled: !0 };
      default:
        p(e, "Model must have reasoning specified.");
    }
}
var rn = [
  "google/gemini-3.5-flash",
  "openai/gpt-5.4-mini",
  "google/gemini-3-flash-preview",
  "openai/gpt-5.5",
  "openai/gpt-5.4",
  "openai/gpt-5.2",
];
function ln(e) {
  switch (e) {
    case "google/gemini-3.5-flash":
      return { effort: "minimal", enabled: !0 };
    case "openai/gpt-5.3-codex":
    case "openai/gpt-5.2":
    case "openai/gpt-5.5":
    case "openai/gpt-5.6-sol":
    case "openai/gpt-5.6-terra":
    case "openai/gpt-5.6-luna":
    case "google/gemini-3-flash-preview":
      return { effort: "low", enabled: !0 };
    case "openai/gpt-5.4":
    case "openai/gpt-5.4-mini":
      return { effort: "medium", enabled: !0 };
    default:
      return;
  }
}
function un(e) {
  if (!T(e))
    switch (e) {
      case "google/gemini-2.5-flash":
      case "google/gemini-2.0-flash-001":
      case "google/gemini-2.5-flash-lite":
      case "google/gemini-2.5-pro":
      case "google/gemini-3-flash-preview":
      case "google/gemini-3.1-flash-lite-preview":
      case "google/gemini-3.1-pro-preview-customtools":
      case "google/gemini-3.5-flash":
      case "openai/gpt-4.1":
      case "openai/gpt-5.1":
      case "openai/gpt-5.2":
      case "openai/gpt-5.2-codex":
      case "openai/gpt-5.1-codex-mini":
      case "openai/gpt-5.3-codex":
      case "openai/gpt-5.4":
      case "openai/gpt-5.5":
      case "openai/gpt-5.6-sol":
      case "openai/gpt-5.6-terra":
      case "openai/gpt-5.6-luna":
      case "openai/gpt-5.4-mini":
      case "openai/gpt-3.5-turbo-1106":
      case "openai/gpt-4":
      case "openai/gpt-4o-2024-08-06":
      case "openai/gpt-4o-mini-2024-07-18":
      case "openai/gpt-oss-20b":
      case "x-ai/grok-build-0.1":
      case "moonshotai/Kimi-K2.5":
      case "moonshotai/Kimi-K2.6":
      case "moonshotai/Kimi-K2.7-Code":
        return;
      case "deepseek/deepseek-v4-pro":
      case "deepseek/deepseek-v4-flash":
        return { ignore: ["deepseek", "gmicloud/fp8"] };
      case "qwen/qwen3.6-flash":
      case "qwen/qwen3-vl-235b-a22b-instruct":
        return { only: ["alibaba"] };
      case "anthropic/claude-haiku-4.5":
      case "anthropic/claude-sonnet-4.5":
      case "anthropic/claude-sonnet-4.6":
      case "anthropic/claude-sonnet-5":
      case "anthropic/claude-opus-4.5":
      case "anthropic/claude-opus-4.6":
      case "anthropic/claude-opus-4.7":
      case "anthropic/claude-opus-4.8":
      case "anthropic/claude-fable-5":
        return { order: ["amazon-bedrock", "anthropic/2", "anthropic"], ignore: ["google-vertex"] };
      case "openai/gpt-oss-120b":
        return { only: ["cerebras/fp16"] };
      default:
        p(e, "Model must have provider specified.");
    }
}
var pe = {
    "openai/gpt-3.5-turbo-1106": "GPT 3.5 Turbo",
    "openai/gpt-4": "GPT 4",
    "openai/gpt-4o-2024-08-06": "GPT 4o",
    "openai/gpt-4o-mini-2024-07-18": "GPT 4o Mini",
    "google/gemini-2.0-flash-001": "Gemini 2.0 Flash",
    "google/gemini-2.5-flash": "Gemini 2.5 Flash",
    "google/gemini-2.5-flash-lite": "Gemini 2.5 Flash Lite",
    "google/gemini-2.5-pro": "Gemini 2.5 Pro",
    "google/gemini-3-flash-preview": "Gemini 3 Flash",
    "google/gemini-3.1-pro-preview-customtools": "Gemini 3.1 Pro",
    "google/gemini-3.1-flash-lite-preview": "Gemini 3.1 Flash Lite",
    "google/gemini-3.5-flash": "Gemini 3.5",
    "qwen/qwen3.6-flash": "Qwen 3.6 Flash",
    "openai/gpt-4.1": "GPT 4.1",
    "openai/gpt-5.1": "GPT 5.1",
    "openai/gpt-5.2": "GPT 5.2",
    "openai/gpt-5.4": "GPT 5.4",
    "openai/gpt-5.5": "GPT 5.5",
    "openai/gpt-5.6-sol": "GPT 5.6 Sol",
    "openai/gpt-5.6-terra": "GPT 5.6 Terra",
    "openai/gpt-5.6-luna": "GPT 5.6 Luna",
    "openai/gpt-5.4-mini": "GPT 5.4 Mini",
    "anthropic/claude-haiku-4.5": "Haiku 4.5",
    "anthropic/claude-sonnet-4.5": "Sonnet 4.5",
    "anthropic/claude-sonnet-4.6": "Sonnet 4.6",
    "anthropic/claude-sonnet-5": "Sonnet 5",
    "anthropic/claude-opus-4.5": "Opus 4.5",
    "anthropic/claude-opus-4.6": "Opus 4.6",
    "anthropic/claude-opus-4.7": "Opus 4.7",
    "anthropic/claude-opus-4.8": "Opus 4.8",
    "anthropic/claude-fable-5": "Fable 5",
    "deepseek/deepseek-v4-pro": "DeepSeek V4 Pro",
    "deepseek/deepseek-v4-flash": "DeepSeek V4 Flash",
    "x-ai/grok-build-0.1": "Grok Build 0.1",
    "moonshotai/Kimi-K2.5": "Kimi K2.5",
    "moonshotai/Kimi-K2.6": "Kimi K2.6",
    "moonshotai/Kimi-K2.7-Code": "Kimi K2.7 Code",
    "qwen/qwen3-vl-235b-a22b-instruct": "Qwen3 VL 235B",
    "openai/gpt-5.1-codex-mini": "GPT-5.1 Codex Mini",
    "openai/gpt-5.2-codex": "GPT-5.2 Codex",
    "openai/gpt-5.3-codex": "GPT-5.3 Codex",
    "openai/gpt-oss-120b": "GPT OSS 120B",
    "openai/gpt-oss-20b": "GPT OSS 20B",
    ...S((e) => e.displayName),
  },
  fe = pe["openai/gpt-5.5"];
function d(e, n, a) {
  return { multiplier: n, description: { name: e, body: a(`${n}\xD7`, fe) } };
}
var V = {
  "openai/gpt-5.6-sol": d(
    "GPT 5.6 Sol",
    1,
    () => "is OpenAI\u2019s flagship model and is the baseline for credits spent in Framer."
  ),
  "openai/gpt-5.6-terra": d(
    "GPT 5.6 Terra",
    0.6,
    (e, n) => `is OpenAI\u2019s balanced model and uses ${e} as many credits as ${n}.`
  ),
  "openai/gpt-5.6-luna": d(
    "GPT 5.6 Luna",
    0.4,
    (e, n) => `is OpenAI\u2019s fastest model and uses ${e} as many credits as ${n}.`
  ),
  "openai/gpt-5.5": d(
    "GPT 5.5",
    1,
    () => "is OpenAI\u2019s flagship model and is the baseline for credits spent in Framer."
  ),
  "anthropic/claude-haiku-4.5": d(
    "Haiku 4.5",
    0.2,
    (e, n) => `is Anthropic\u2019s fastest model and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-sonnet-4.5": d(
    "Sonnet 4.5",
    0.9,
    (e, n) => `is a previous-generation model and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-sonnet-4.6": d(
    "Sonnet 4.6",
    0.9,
    (e, n) => `is Anthropic\u2019s prior Sonnet model and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-sonnet-5": d(
    "Sonnet 5",
    0.6,
    (e, n) =>
      `is Anthropic\u2019s latest Sonnet model and uses ${e} as many credits as ${n}. 33% off until Aug 31, 2026.`
  ),
  "anthropic/claude-opus-4.5": d(
    "Opus 4.5",
    1.8,
    (e, n) => `is a previous-generation Anthropic flagship and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-opus-4.6": d(
    "Opus 4.6",
    1.8,
    (e, n) => `is Anthropic\u2019s previous flagship model and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-opus-4.7": d(
    "Opus 4.7",
    1.8,
    (e, n) => `is Anthropic\u2019s flagship model and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-opus-4.8": d(
    "Opus 4.8",
    1.2,
    (e, n) => `is Anthropic\u2019s flagship model and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-fable-5": d(
    "Fable 5",
    2,
    (e, n) => `is Anthropic\u2019s most powerful model and uses ${e} as many credits as ${n}.`
  ),
};
function dn(e) {
  let n = V[e];
  if (n !== void 0) return `${n.multiplier}\xD7`;
}
function cn(e) {
  return V[e]?.multiplier;
}
function mn(e, n = !1) {
  let a = V[e];
  if (a !== void 0)
    return e === "openai/gpt-5.5" && n
      ? {
          name: a.description.name,
          body: "is OpenAI\u2019s previous-generation model and uses 1\xD7 as many credits as GPT 5.6 Sol.",
        }
      : a.description;
}
var m = { maxVisionImageDimension: 1568, maxVisionImages: 20, maxVisionImageSizeKB: 5e3 },
  W = 200,
  z = Pe(50),
  he = {
    allowedFileTypes: ["image/jpeg", "image/png"],
    maxAttachments: W,
    totalSizeLimit: z,
    maxVisionImageSizeKB: 20 * 1024,
  };
function s(e) {
  return { allowedFileTypes: ["image/*"], maxAttachments: W, totalSizeLimit: z, ...e };
}
var A = {
  "openai/gpt-5.1": s(),
  "openai/gpt-5.2": s(),
  "openai/gpt-5.2-codex": s(),
  "openai/gpt-5.3-codex": s(),
  "openai/gpt-5.1-codex-mini": s(),
  "openai/gpt-5.4": s(),
  "openai/gpt-5.5": s(),
  "openai/gpt-5.6-sol": s(),
  "openai/gpt-5.6-terra": s(),
  "openai/gpt-5.6-luna": s(),
  "openai/gpt-5.4-mini": s(),
  "x-ai/grok-build-0.1": he,
  "anthropic/claude-sonnet-4.5": s(m),
  "anthropic/claude-opus-4.5": s(m),
  "anthropic/claude-sonnet-4.6": s(m),
  "anthropic/claude-sonnet-5": s(m),
  "anthropic/claude-opus-4.6": s(m),
  "anthropic/claude-opus-4.7": s(m),
  "anthropic/claude-opus-4.8": s(m),
  "anthropic/claude-fable-5": s(m),
  "anthropic/claude-haiku-4.5": s(m),
};
function Ce(e = C) {
  return A[e]?.maxVisionImageDimension;
}
function Te(e = C) {
  return A[e]?.maxVisionImages;
}
function Ge(e = C) {
  return A[e]?.maxVisionImageSizeKB;
}
function gn(e = C) {
  return Ce(e) !== void 0 || Te(e) !== void 0 || Ge(e) !== void 0;
}
function Pe(e) {
  return e * 1024 * 1024;
}
function pn(e) {
  if (T(e)) return "framer";
  switch (e) {
    case "anthropic/claude-haiku-4.5":
    case "anthropic/claude-sonnet-4.5":
    case "anthropic/claude-sonnet-4.6":
    case "anthropic/claude-sonnet-5":
    case "anthropic/claude-opus-4.5":
    case "anthropic/claude-opus-4.6":
    case "anthropic/claude-opus-4.7":
    case "anthropic/claude-opus-4.8":
    case "anthropic/claude-fable-5":
      return "anthropic";
    case "google/gemini-2.0-flash-001":
    case "google/gemini-2.5-flash":
    case "google/gemini-2.5-flash-lite":
    case "google/gemini-2.5-pro":
    case "google/gemini-3-flash-preview":
    case "google/gemini-3.1-pro-preview-customtools":
    case "google/gemini-3.1-flash-lite-preview":
    case "google/gemini-3.5-flash":
      return "google";
    case "qwen/qwen3.6-flash":
    case "qwen/qwen3-vl-235b-a22b-instruct":
      return "qwen";
    case "deepseek/deepseek-v4-pro":
    case "deepseek/deepseek-v4-flash":
      return "deepseek";
    case "x-ai/grok-build-0.1":
      return "x-ai";
    case "moonshotai/Kimi-K2.5":
    case "moonshotai/Kimi-K2.6":
    case "moonshotai/Kimi-K2.7-Code":
      return "moonshotai";
    case "openai/gpt-3.5-turbo-1106":
    case "openai/gpt-4":
    case "openai/gpt-4o-2024-08-06":
    case "openai/gpt-4o-mini-2024-07-18":
    case "openai/gpt-4.1":
    case "openai/gpt-5.1":
    case "openai/gpt-5.2":
    case "openai/gpt-5.2-codex":
    case "openai/gpt-5.1-codex-mini":
    case "openai/gpt-5.3-codex":
    case "openai/gpt-5.4":
    case "openai/gpt-5.5":
    case "openai/gpt-5.6-sol":
    case "openai/gpt-5.6-terra":
    case "openai/gpt-5.6-luna":
    case "openai/gpt-5.4-mini":
    case "openai/gpt-oss-120b":
    case "openai/gpt-oss-20b":
      return "openai";
    default:
      p(e, "Model must have a provider specified.");
  }
}
export {
  D as a,
  Le as b,
  ve as c,
  Be as d,
  Re as e,
  Ve as f,
  r as g,
  Ie as h,
  Q as i,
  Z as j,
  _e as k,
  je as l,
  T as m,
  $e as n,
  Qe as o,
  v as p,
  S as q,
  Je as r,
  Ze as s,
  re as t,
  en as u,
  nn as v,
  an as w,
  tn as x,
  me as y,
  on as z,
  sn as A,
  ge as B,
  rn as C,
  ln as D,
  un as E,
  pe as F,
  dn as G,
  cn as H,
  mn as I,
  W as J,
  z as K,
  A as L,
  Ce as M,
  Te as N,
  Ge as O,
  gn as P,
  pn as Q,
};
//# sourceMappingURL=chunk-KU23N77F.mjs.map
