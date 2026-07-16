import { a as p } from "./chunk-FUQZY6JN.mjs";
import { b as c } from "./chunk-5D5WEAJK.mjs";
import { B as a, Q as i } from "./chunk-WGS5WK5D.mjs";
import { o as n } from "./chunk-CFUM4JW5.mjs";
import { Ta as s } from "./chunk-V7MLU2WL.mjs";
function d() {
  return !0;
}
function l() {
  return n.isOn("enableCrdtForNewProjects");
}
function F(e, r = {}) {
  let o = e.space.scope !== "user" ? e.space.id : void 0,
    t;
  return (
    a(e) ? (t = "recent") : e.collection && (t = e.collection.id),
    s({ ...r, duplicateFrom: e.id, spaceId: o, collectionId: t })
  );
}
function N(e, r) {
  return c.put(`/web/v2/projects/${e}`, r);
}
async function h(e, r = !1) {
  let o = { ...e };
  l() && (o.crdt = !0);
  let t = s(o);
  r ? i(t) : p(t);
}
async function x(e) {
  return c.delete(`/web/projects/${e}/acl/me`);
}
async function y(e) {
  return c.delete(`/web/projects/${e}`);
}
export { d as a, F as b, N as c, h as d, x as e, y as f };
//# sourceMappingURL=chunk-OAXSFRCO.mjs.map
