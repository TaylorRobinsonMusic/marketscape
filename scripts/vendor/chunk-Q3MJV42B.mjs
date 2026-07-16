import { lb as f } from "chunk-RYAQJ2V7.mjs";
import { d } from "chunk-LTIBGRNF.mjs";
import { n as c } from "chunk-AMYECL4X.mjs";
import { H as m, P as p } from "chunk-ODCA7OFJ.mjs";
import { qd as a } from "chunk-AHICRW35.mjs";
import { da as s } from "chunk-SSHL25ZI.mjs";
import { b as l } from "chunk-DYNCKUFC.mjs";
function W(e, t, i, o) {
  let { imageSize: r, originalFilename: u } = t,
    T = l(e.fillImage) ? s(e.fillImage)?.preferredSize : void 0,
    n = {
      fillType: "image",
      fillImage: d(t, o ?? T, i),
      fillImageOriginalName: u,
      fillImagePixelWidth: r.naturalWidth,
      fillImagePixelHeight: r.naturalHeight,
      ...R(e),
    };
  if ((m(e) && e.fillEnabled === !1 && (n.fillEnabled = !0), a(e))) {
    let { nonZeroNaturalWidth: g, nonZeroNaturalHeight: h } = c(r);
    ((n.intrinsicWidth = g), (n.intrinsicHeight = h));
  }
  e.set(n);
}
function R(e) {
  if (p(e)) return { fillImagePositionX: void 0, fillImagePositionY: void 0 };
}
var V = {
  enum: ["controlReference", "enum"],
  boolean: ["boolean"],
  border: ["border"],
  boxshadow: ["boxshadow"],
  date: ["date"],
  number: ["number"],
  transition: ["transition"],
  string: ["string", "slug"],
  color: ["color"],
  richtext: ["richtext"],
  link: ["link", "file"],
  linkrelvalues: ["linkrelvalues"],
  scrollsectionref: ["scrollsectionref"],
  customcursor: ["customcursor"],
  cursor: ["cursor"],
  file: ["file", "controlReference"],
  gap: ["gap", "number"],
  padding: ["padding", "number"],
  borderradius: ["borderradius", "number"],
  collectionreference: ["collectionreference"],
  location: ["location"],
  multicollectionreference: ["multicollectionreference"],
  vectorsetitem: ["vectorsetitem"],
  trackingid: ["trackingid"],
  image: ["image"],
};
function z(e, t, i) {
  if (!t && !i) return !1;
  for (let o of e) {
    let r = f[o];
    if (i) {
      if (i.includes(o)) return !0;
    } else if (t && r && t.includes(r)) return !0;
  }
  return !1;
}
export { W as a, V as b, z as c };
//# sourceMappingURL=chunk-Q3MJV42B.mjs.map
