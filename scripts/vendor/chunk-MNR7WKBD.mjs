import { h as t, l as o } from "./chunk-GX2Q2FIZ.mjs";
var r = "https://ec6f39c7d6654defa8ab3d67acd9f94f@o20425.ingest.sentry.io/1860728",
  p = r.split("/").pop() ?? "";
var i = 0.1;
function s(e) {
  return !!e?.originalException?.skipSentry;
}
function S() {
  t({
    dsn: r,
    release: "3f060d600d260eabc1be91bd81957be1f97f0852",
    environment: "production",
    tracePropagationTargets: [],
    tracesSampleRate: i,
    beforeSend(e, n) {
      return s(n) ? null : (o(e, n), e);
    },
  });
}
function d() {
  t({
    dsn: "https://6673e0d10436437a91575c80a59959cc@o20425.ingest.sentry.io/5026406",
    release: "3f060d600d260eabc1be91bd81957be1f97f0852",
    environment: "production",
    ignoreErrors: ["Component exceeded time limit"],
    integrations: (e) => e.filter((n) => n.name !== "GlobalHandlers"),
    tracesSampleRate: i,
    tracePropagationTargets: [],
    beforeSend(e, n) {
      return s(n) ? null : e;
    },
  });
}
function y() {
  t({
    dsn: "https://66e90dac3a594415ba30098b9f9fcac4@sentry.io/92817",
    environment: "production",
    release: "3f060d600d260eabc1be91bd81957be1f97f0852",
  });
}
function l() {
  t({
    dsn: "https://6334759d5f8d49868b7d831eef45097b@sentry.io/1365185",
    release: "3f060d600d260eabc1be91bd81957be1f97f0852",
    environment: "production",
  });
}
export { p as a, S as b, d as c, y as d, l as e };
//# sourceMappingURL=chunk-MNR7WKBD.mjs.map
