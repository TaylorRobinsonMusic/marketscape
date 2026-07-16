import { a as n, i as o, j as i, k as m } from "./chunk-CFUM4JW5.mjs";
var a = Object.fromEntries(Object.keys(n).map((e) => [e, "off"])),
  r = new o(a);
r.update(l());
var c = i(r);
function f(e) {
  return m(r, e, (t) => t === "on");
}
function l() {
  if (globalThis?.framerUser?.isFramerEmployee !== !0) return {};
  let t = { ...n };
  try {
    let s = JSON.parse(localStorage.employeesOnlySettings || "{}");
    Object.assign(t, s);
  } catch {}
  return t;
}
export { r as a, c as b, f as c };
//# sourceMappingURL=chunk-AWPQ2FI2.mjs.map
