import { Uf as r, a as o } from "chunk-PBNCD2KE.mjs";
import { i as e } from "chunk-M5RSXAYK.mjs";
import { a as s } from "chunk-T77QJFCJ.mjs";
import { e as i } from "chunk-CT63CFX7.mjs";
var n = "cq2i6r2",
  l = "o199fue7",
  p = "o16gpm6";
var t = i(s(), 1);
function A({ avatar: c, displayName: m, organization: a }) {
  let f = r.extractInitials(m);
  return (0, t.jsxs)("div", {
    className: n,
    children: [
      (0, t.jsx)(o, { color: e.tint, src: c || void 0, text: f }),
      a &&
        (0, t.jsx)(o, {
          size: "small",
          src: a.avatar || void 0,
          textCustomStyles: p,
          avatarCustomStyles: l,
          color: "#fff",
          text: r.extractInitials(a.displayName),
        }),
    ],
  });
}
export { A as a };
//# sourceMappingURL=chunk-GWKWA7DX.mjs.map
