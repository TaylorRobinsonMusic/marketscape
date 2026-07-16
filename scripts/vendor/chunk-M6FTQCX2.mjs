import { a as c } from "chunk-4I6ENMO3.mjs";
import { e as s } from "chunk-CT63CFX7.mjs";
var e = s(c(), 1);
function a(t) {
  let r = (0, e.useMemo)(() => {
    let n = window.matchMedia(t);
    function o() {
      return n.matches;
    }
    function i(u) {
      return (n.addEventListener("change", u), () => n.removeEventListener("change", u));
    }
    return { getCurrentValue: o, subscribe: i };
  }, [t]);
  return (0, e.useSyncExternalStore)(r.subscribe, r.getCurrentValue);
}
export { a };
//# sourceMappingURL=chunk-M6FTQCX2.mjs.map
