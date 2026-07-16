(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  528187,
  424154,
  (e) => {
    "use strict";
    var t,
      n = e.i(58417);
    function r(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    let o = Object.entries,
      i = Object.setPrototypeOf,
      a = Object.isFrozen,
      l = Object.getPrototypeOf,
      c = Object.getOwnPropertyDescriptor,
      s = Object.freeze,
      u = Object.seal,
      f = Object.create,
      p = "u" > typeof Reflect && Reflect,
      m = p.apply,
      d = p.construct;
    (s ||
      (s = function (e) {
        return e;
      }),
      u ||
        (u = function (e) {
          return e;
        }),
      m ||
        (m = function (e, t) {
          for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
            r[o - 2] = arguments[o];
          return e.apply(t, r);
        }),
      d ||
        (d = function (e) {
          for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
          return new e(...n);
        }));
    let h = M(Array.prototype.forEach),
      g = M(Array.prototype.lastIndexOf),
      y = M(Array.prototype.pop),
      T = M(Array.prototype.push),
      b = M(Array.prototype.splice),
      S = Array.isArray,
      E = M(String.prototype.toLowerCase),
      _ = M(String.prototype.toString),
      A = M(String.prototype.match),
      N = M(String.prototype.replace),
      w = M(String.prototype.indexOf),
      O = M(String.prototype.trim),
      v = M(Number.prototype.toString),
      R = M(Boolean.prototype.toString),
      C = "u" < typeof BigInt ? null : M(BigInt.prototype.toString),
      D = "u" < typeof Symbol ? null : M(Symbol.prototype.toString),
      x = M(Object.prototype.hasOwnProperty),
      k = M(Object.prototype.toString),
      I = M(RegExp.prototype.test),
      L =
        ((t = TypeError),
        function () {
          for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          return d(t, n);
        });
    function M(e) {
      return function (t) {
        t instanceof RegExp && (t.lastIndex = 0);
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
          r[o - 1] = arguments[o];
        return m(e, t, r);
      };
    }
    function P(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E;
      if ((i && i(e, null), !S(t))) return e;
      let r = t.length;
      for (; r--; ) {
        let o = t[r];
        if ("string" == typeof o) {
          let e = n(o);
          e !== o && (a(t) || (t[r] = e), (o = e));
        }
        e[o] = !0;
      }
      return e;
    }
    function U(e) {
      let t = f(null);
      for (let i of o(e)) {
        var n =
          (function (e) {
            if (Array.isArray(e)) return e;
          })(i) ||
          (function (e) {
            var t =
              null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != t) {
              var n,
                r,
                o,
                i,
                a = [],
                l = !0,
                c = !1;
              try {
                ((o = (t = t.call(e)).next), !1);
                for (; !(l = (n = o.call(t)).done) && (a.push(n.value), 2 !== a.length); l = !0);
              } catch (e) {
                ((c = !0), (r = e));
              } finally {
                try {
                  if (!l && null != t.return && ((i = t.return()), Object(i) !== i)) return;
                } finally {
                  if (c) throw r;
                }
              }
              return a;
            }
          })(i) ||
          (function (e) {
            if (e) {
              if ("string" == typeof e) return r(e, 2);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? r(e, 2)
                    : void 0
              );
            }
          })(i) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })();
        let o = n[0],
          a = n[1];
        x(e, o) &&
          (S(a)
            ? (t[o] = (function (e) {
                for (let t = 0; t < e.length; t++) x(e, t) || (e[t] = null);
                return e;
              })(a))
            : a && "object" == typeof a && a.constructor === Object
              ? (t[o] = U(a))
              : (t[o] = a));
      }
      return t;
    }
    function z(e, t) {
      for (; null !== e; ) {
        let n = c(e, t);
        if (n) {
          if (n.get) return M(n.get);
          if ("function" == typeof n.value) return M(n.value);
        }
        e = l(e);
      }
      return function () {
        return null;
      };
    }
    let F = s([
        "a",
        "abbr",
        "acronym",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "bdi",
        "bdo",
        "big",
        "blink",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "center",
        "cite",
        "code",
        "col",
        "colgroup",
        "content",
        "data",
        "datalist",
        "dd",
        "decorator",
        "del",
        "details",
        "dfn",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "element",
        "em",
        "fieldset",
        "figcaption",
        "figure",
        "font",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meter",
        "nav",
        "nobr",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "search",
        "section",
        "select",
        "shadow",
        "slot",
        "small",
        "source",
        "spacer",
        "span",
        "strike",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "track",
        "tt",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
      ]),
      H = s([
        "svg",
        "a",
        "altglyph",
        "altglyphdef",
        "altglyphitem",
        "animatecolor",
        "animatemotion",
        "animatetransform",
        "circle",
        "clippath",
        "defs",
        "desc",
        "ellipse",
        "enterkeyhint",
        "exportparts",
        "filter",
        "font",
        "g",
        "glyph",
        "glyphref",
        "hkern",
        "image",
        "inputmode",
        "line",
        "lineargradient",
        "marker",
        "mask",
        "metadata",
        "mpath",
        "part",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialgradient",
        "rect",
        "stop",
        "style",
        "switch",
        "symbol",
        "text",
        "textpath",
        "title",
        "tref",
        "tspan",
        "view",
        "vkern",
      ]),
      j = s([
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feDropShadow",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
      ]),
      B = s([
        "animate",
        "color-profile",
        "cursor",
        "discard",
        "font-face",
        "font-face-format",
        "font-face-name",
        "font-face-src",
        "font-face-uri",
        "foreignobject",
        "hatch",
        "hatchpath",
        "mesh",
        "meshgradient",
        "meshpatch",
        "meshrow",
        "missing-glyph",
        "script",
        "set",
        "solidcolor",
        "unknown",
        "use",
      ]),
      G = s([
        "math",
        "menclose",
        "merror",
        "mfenced",
        "mfrac",
        "mglyph",
        "mi",
        "mlabeledtr",
        "mmultiscripts",
        "mn",
        "mo",
        "mover",
        "mpadded",
        "mphantom",
        "mroot",
        "mrow",
        "ms",
        "mspace",
        "msqrt",
        "mstyle",
        "msub",
        "msup",
        "msubsup",
        "mtable",
        "mtd",
        "mtext",
        "mtr",
        "munder",
        "munderover",
        "mprescripts",
      ]),
      W = s([
        "maction",
        "maligngroup",
        "malignmark",
        "mlongdiv",
        "mscarries",
        "mscarry",
        "msgroup",
        "mstack",
        "msline",
        "msrow",
        "semantics",
        "annotation",
        "annotation-xml",
        "mprescripts",
        "none",
      ]),
      Y = s(["#text"]),
      $ = s([
        "accept",
        "action",
        "align",
        "alt",
        "autocapitalize",
        "autocomplete",
        "autopictureinpicture",
        "autoplay",
        "background",
        "bgcolor",
        "border",
        "capture",
        "cellpadding",
        "cellspacing",
        "checked",
        "cite",
        "class",
        "clear",
        "color",
        "cols",
        "colspan",
        "command",
        "commandfor",
        "controls",
        "controlslist",
        "coords",
        "crossorigin",
        "datetime",
        "decoding",
        "default",
        "dir",
        "disabled",
        "disablepictureinpicture",
        "disableremoteplayback",
        "download",
        "draggable",
        "enctype",
        "enterkeyhint",
        "exportparts",
        "face",
        "for",
        "headers",
        "height",
        "hidden",
        "high",
        "href",
        "hreflang",
        "id",
        "inert",
        "inputmode",
        "integrity",
        "ismap",
        "kind",
        "label",
        "lang",
        "list",
        "loading",
        "loop",
        "low",
        "max",
        "maxlength",
        "media",
        "method",
        "min",
        "minlength",
        "multiple",
        "muted",
        "name",
        "nonce",
        "noshade",
        "novalidate",
        "nowrap",
        "open",
        "optimum",
        "part",
        "pattern",
        "placeholder",
        "playsinline",
        "popover",
        "popovertarget",
        "popovertargetaction",
        "poster",
        "preload",
        "pubdate",
        "radiogroup",
        "readonly",
        "rel",
        "required",
        "rev",
        "reversed",
        "role",
        "rows",
        "rowspan",
        "spellcheck",
        "scope",
        "selected",
        "shape",
        "size",
        "sizes",
        "slot",
        "span",
        "srclang",
        "start",
        "src",
        "srcset",
        "step",
        "style",
        "summary",
        "tabindex",
        "title",
        "translate",
        "type",
        "usemap",
        "valign",
        "value",
        "width",
        "wrap",
        "xmlns",
      ]),
      q = s([
        "accent-height",
        "accumulate",
        "additive",
        "alignment-baseline",
        "amplitude",
        "ascent",
        "attributename",
        "attributetype",
        "azimuth",
        "basefrequency",
        "baseline-shift",
        "begin",
        "bias",
        "by",
        "class",
        "clip",
        "clippathunits",
        "clip-path",
        "clip-rule",
        "color",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "cx",
        "cy",
        "d",
        "dx",
        "dy",
        "diffuseconstant",
        "direction",
        "display",
        "divisor",
        "dur",
        "edgemode",
        "elevation",
        "end",
        "exponent",
        "fill",
        "fill-opacity",
        "fill-rule",
        "filter",
        "filterunits",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "fx",
        "fy",
        "g1",
        "g2",
        "glyph-name",
        "glyphref",
        "gradientunits",
        "gradienttransform",
        "height",
        "href",
        "id",
        "image-rendering",
        "in",
        "in2",
        "intercept",
        "k",
        "k1",
        "k2",
        "k3",
        "k4",
        "kerning",
        "keypoints",
        "keysplines",
        "keytimes",
        "lang",
        "lengthadjust",
        "letter-spacing",
        "kernelmatrix",
        "kernelunitlength",
        "lighting-color",
        "local",
        "marker-end",
        "marker-mid",
        "marker-start",
        "markerheight",
        "markerunits",
        "markerwidth",
        "maskcontentunits",
        "maskunits",
        "max",
        "mask",
        "mask-type",
        "media",
        "method",
        "mode",
        "min",
        "name",
        "numoctaves",
        "offset",
        "operator",
        "opacity",
        "order",
        "orient",
        "orientation",
        "origin",
        "overflow",
        "paint-order",
        "path",
        "pathlength",
        "patterncontentunits",
        "patterntransform",
        "patternunits",
        "points",
        "preservealpha",
        "preserveaspectratio",
        "primitiveunits",
        "r",
        "rx",
        "ry",
        "radius",
        "refx",
        "refy",
        "repeatcount",
        "repeatdur",
        "restart",
        "result",
        "rotate",
        "scale",
        "seed",
        "shape-rendering",
        "slope",
        "specularconstant",
        "specularexponent",
        "spreadmethod",
        "startoffset",
        "stddeviation",
        "stitchtiles",
        "stop-color",
        "stop-opacity",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke",
        "stroke-width",
        "style",
        "surfacescale",
        "systemlanguage",
        "tabindex",
        "tablevalues",
        "targetx",
        "targety",
        "transform",
        "transform-origin",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "textlength",
        "type",
        "u1",
        "u2",
        "unicode",
        "values",
        "viewbox",
        "visibility",
        "version",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "width",
        "word-spacing",
        "wrap",
        "writing-mode",
        "xchannelselector",
        "ychannelselector",
        "x",
        "x1",
        "x2",
        "xmlns",
        "y",
        "y1",
        "y2",
        "z",
        "zoomandpan",
      ]),
      X = s([
        "accent",
        "accentunder",
        "align",
        "bevelled",
        "close",
        "columnalign",
        "columnlines",
        "columnspacing",
        "columnspan",
        "denomalign",
        "depth",
        "dir",
        "display",
        "displaystyle",
        "encoding",
        "fence",
        "frame",
        "height",
        "href",
        "id",
        "largeop",
        "length",
        "linethickness",
        "lquote",
        "lspace",
        "mathbackground",
        "mathcolor",
        "mathsize",
        "mathvariant",
        "maxsize",
        "minsize",
        "movablelimits",
        "notation",
        "numalign",
        "open",
        "rowalign",
        "rowlines",
        "rowspacing",
        "rowspan",
        "rspace",
        "rquote",
        "scriptlevel",
        "scriptminsize",
        "scriptsizemultiplier",
        "selection",
        "separator",
        "separators",
        "stretchy",
        "subscriptshift",
        "supscriptshift",
        "symmetric",
        "voffset",
        "width",
        "xmlns",
      ]),
      K = s(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
      V = u(/{{[\w\W]*|^[\w\W]*}}/g),
      Z = u(/<%[\w\W]*|^[\w\W]*%>/g),
      J = u(/\${[\w\W]*/g),
      Q = u(/^data-[\-\w.\u00B7-\uFFFF]+$/),
      ee = u(/^aria-[\-\w]+$/),
      et = u(
        /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
      ),
      en = u(/^(?:\w+script|data):/i),
      er = u(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
      eo = u(/^html$/i),
      ei = u(/^[a-z][.\w]*(-[.\w]+)+$/i),
      ea = u(/<[/\w!]/g),
      el = u(/<[/\w]/g),
      ec = u(/<\/no(script|embed|frames)/i),
      es = u(/\/>/i),
      eu = function (e, t) {
        if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
        let n = null,
          r = "data-tt-policy-suffix";
        t && t.hasAttribute(r) && (n = t.getAttribute(r));
        let o = "dompurify" + (n ? "#" + n : "");
        try {
          return e.createPolicy(o, { createHTML: (e) => e, createScriptURL: (e) => e });
        } catch (e) {
          return (console.warn("TrustedTypes policy " + o + " could not be created."), null);
        }
      },
      ef = function () {
        return {
          afterSanitizeAttributes: [],
          afterSanitizeElements: [],
          afterSanitizeShadowDOM: [],
          beforeSanitizeAttributes: [],
          beforeSanitizeElements: [],
          beforeSanitizeShadowDOM: [],
          uponSanitizeAttribute: [],
          uponSanitizeElement: [],
          uponSanitizeShadowNode: [],
        };
      },
      ep = function (e, t, n, r) {
        return x(e, t) && S(e[t]) ? P(r.base ? U(r.base) : {}, e[t], r.transform) : n;
      };
    var em = (function e() {
      let t,
        n,
        r =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "u" < typeof window
              ? null
              : window,
        i = (t) => e(t);
      if (
        ((i.version = "3.4.11"),
        (i.removed = []),
        !r || !r.document || 9 !== r.document.nodeType || !r.Element)
      )
        return ((i.isSupported = !1), i);
      let a = r.document,
        l = a,
        c = l.currentScript;
      r.DocumentFragment;
      let p = r.HTMLTemplateElement,
        m = r.Node,
        d = r.Element,
        M = r.NodeFilter;
      (void 0 === r.NamedNodeMap && (r.NamedNodeMap || r.MozNamedAttrMap), r.HTMLFormElement);
      let em = r.DOMParser,
        ed = r.trustedTypes,
        eh = d.prototype,
        eg = z(eh, "cloneNode"),
        ey = z(eh, "remove"),
        eT = z(eh, "nextSibling"),
        eb = z(eh, "childNodes"),
        eS = z(eh, "parentNode"),
        eE = z(eh, "shadowRoot"),
        e_ = z(eh, "attributes"),
        eA = m && m.prototype ? z(m.prototype, "nodeType") : null,
        eN = m && m.prototype ? z(m.prototype, "nodeName") : null;
      if ("function" == typeof p) {
        let e = a.createElement("template");
        e.content && e.content.ownerDocument && (a = e.content.ownerDocument);
      }
      let ew = "",
        eO = !1,
        ev = 0,
        eR = function () {
          if (ev > 0)
            throw L(
              'A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.'
            );
        },
        eC = function (e) {
          (eR(), ev++);
          try {
            return t.createHTML(e);
          } finally {
            ev--;
          }
        },
        eD = function (e) {
          (eR(), ev++);
          try {
            return t.createScriptURL(e);
          } finally {
            ev--;
          }
        },
        ex = a,
        ek = ex.implementation,
        eI = ex.createNodeIterator,
        eL = ex.createDocumentFragment,
        eM = ex.getElementsByTagName,
        eP = l.importNode,
        eU = ef();
      i.isSupported =
        "function" == typeof o && "function" == typeof eS && ek && void 0 !== ek.createHTMLDocument;
      let ez = et,
        eF = null,
        eH = P({}, [...F, ...H, ...j, ...G, ...Y]),
        ej = null,
        eB = P({}, [...$, ...q, ...X, ...K]),
        eG = Object.seal(
          f(null, {
            tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
            attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
            allowCustomizedBuiltInElements: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: !1,
            },
          })
        ),
        eW = null,
        eY = null,
        e$ = Object.seal(
          f(null, {
            tagCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
            attributeCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
          })
        ),
        eq = !0,
        eX = !0,
        eK = !1,
        eV = !0,
        eZ = !1,
        eJ = !0,
        eQ = !1,
        e0 = !1,
        e1 = null,
        e2 = null,
        e8 = !1,
        e4 = !1,
        e3 = !1,
        e9 = !1,
        e5 = !0,
        e7 = !1,
        e6 = "user-content-",
        te = !0,
        tt = !1,
        tn = {},
        tr = null,
        to = P({}, [
          "annotation-xml",
          "audio",
          "colgroup",
          "desc",
          "foreignobject",
          "head",
          "iframe",
          "math",
          "mi",
          "mn",
          "mo",
          "ms",
          "mtext",
          "noembed",
          "noframes",
          "noscript",
          "plaintext",
          "script",
          "selectedcontent",
          "style",
          "svg",
          "template",
          "thead",
          "title",
          "video",
          "xmp",
        ]),
        ti = null,
        ta = P({}, ["audio", "video", "img", "source", "image", "track"]),
        tl = null,
        tc = P({}, [
          "alt",
          "class",
          "for",
          "id",
          "label",
          "name",
          "pattern",
          "placeholder",
          "role",
          "summary",
          "title",
          "value",
          "style",
          "xmlns",
        ]),
        ts = "http://www.w3.org/1998/Math/MathML",
        tu = "http://www.w3.org/2000/svg",
        tf = "http://www.w3.org/1999/xhtml",
        tp = tf,
        tm = !1,
        td = null,
        th = P({}, [ts, tu, tf], _),
        tg = s(["mi", "mo", "mn", "ms", "mtext"]),
        ty = P({}, tg),
        tT = s(["annotation-xml"]),
        tb = P({}, tT),
        tS = P({}, ["title", "style", "font", "a", "script"]),
        tE = null,
        t_ = ["application/xhtml+xml", "text/html"],
        tA = null,
        tN = null,
        tw = a.createElement("form"),
        tO = function (e) {
          return e instanceof RegExp || e instanceof Function;
        },
        tv = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (tN && tN === e) return;
          ((e && "object" == typeof e) || (e = {}),
            (e = U(e)),
            (tA =
              "application/xhtml+xml" ===
              (tE = -1 === t_.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE)
                ? _
                : E),
            (eF = ep(e, "ALLOWED_TAGS", eH, { transform: tA })),
            (ej = ep(e, "ALLOWED_ATTR", eB, { transform: tA })),
            (td = ep(e, "ALLOWED_NAMESPACES", th, { transform: _ })),
            (tl = ep(e, "ADD_URI_SAFE_ATTR", tc, { transform: tA, base: tc })),
            (ti = ep(e, "ADD_DATA_URI_TAGS", ta, { transform: tA, base: ta })),
            (tr = ep(e, "FORBID_CONTENTS", to, { transform: tA })),
            (eW = ep(e, "FORBID_TAGS", U({}), { transform: tA })),
            (eY = ep(e, "FORBID_ATTR", U({}), { transform: tA })),
            (tn =
              !!x(e, "USE_PROFILES") &&
              (e.USE_PROFILES && "object" == typeof e.USE_PROFILES
                ? U(e.USE_PROFILES)
                : e.USE_PROFILES)),
            (eq = !1 !== e.ALLOW_ARIA_ATTR),
            (eX = !1 !== e.ALLOW_DATA_ATTR),
            (eK = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
            (eV = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
            (eZ = e.SAFE_FOR_TEMPLATES || !1),
            (eJ = !1 !== e.SAFE_FOR_XML),
            (eQ = e.WHOLE_DOCUMENT || !1),
            (e4 = e.RETURN_DOM || !1),
            (e3 = e.RETURN_DOM_FRAGMENT || !1),
            (e9 = e.RETURN_TRUSTED_TYPE || !1),
            (e8 = e.FORCE_BODY || !1),
            (e5 = !1 !== e.SANITIZE_DOM),
            (e7 = e.SANITIZE_NAMED_PROPS || !1),
            (te = !1 !== e.KEEP_CONTENT),
            (tt = e.IN_PLACE || !1),
            (ez = !(function (e) {
              try {
                return (I(e, ""), !0);
              } catch (e) {
                return !1;
              }
            })(e.ALLOWED_URI_REGEXP)
              ? et
              : e.ALLOWED_URI_REGEXP),
            (tp = "string" == typeof e.NAMESPACE ? e.NAMESPACE : tf),
            (ty =
              x(e, "MATHML_TEXT_INTEGRATION_POINTS") &&
              e.MATHML_TEXT_INTEGRATION_POINTS &&
              "object" == typeof e.MATHML_TEXT_INTEGRATION_POINTS
                ? U(e.MATHML_TEXT_INTEGRATION_POINTS)
                : P({}, tg)),
            (tb =
              x(e, "HTML_INTEGRATION_POINTS") &&
              e.HTML_INTEGRATION_POINTS &&
              "object" == typeof e.HTML_INTEGRATION_POINTS
                ? U(e.HTML_INTEGRATION_POINTS)
                : P({}, tT)));
          let r =
            x(e, "CUSTOM_ELEMENT_HANDLING") &&
            e.CUSTOM_ELEMENT_HANDLING &&
            "object" == typeof e.CUSTOM_ELEMENT_HANDLING
              ? U(e.CUSTOM_ELEMENT_HANDLING)
              : f(null);
          if (
            ((eG = f(null)),
            x(r, "tagNameCheck") && tO(r.tagNameCheck) && (eG.tagNameCheck = r.tagNameCheck),
            x(r, "attributeNameCheck") &&
              tO(r.attributeNameCheck) &&
              (eG.attributeNameCheck = r.attributeNameCheck),
            x(r, "allowCustomizedBuiltInElements") &&
              "boolean" == typeof r.allowCustomizedBuiltInElements &&
              (eG.allowCustomizedBuiltInElements = r.allowCustomizedBuiltInElements),
            u(eG),
            eZ && (eX = !1),
            e3 && (e4 = !0),
            tn &&
              ((eF = P({}, Y)),
              (ej = f(null)),
              !0 === tn.html && (P(eF, F), P(ej, $)),
              !0 === tn.svg && (P(eF, H), P(ej, q), P(ej, K)),
              !0 === tn.svgFilters && (P(eF, j), P(ej, q), P(ej, K)),
              !0 === tn.mathMl && (P(eF, G), P(ej, X), P(ej, K))),
            (e$.tagCheck = null),
            (e$.attributeCheck = null),
            x(e, "ADD_TAGS") &&
              ("function" == typeof e.ADD_TAGS
                ? (e$.tagCheck = e.ADD_TAGS)
                : S(e.ADD_TAGS) && (eF === eH && (eF = U(eF)), P(eF, e.ADD_TAGS, tA))),
            x(e, "ADD_ATTR") &&
              ("function" == typeof e.ADD_ATTR
                ? (e$.attributeCheck = e.ADD_ATTR)
                : S(e.ADD_ATTR) && (ej === eB && (ej = U(ej)), P(ej, e.ADD_ATTR, tA))),
            x(e, "ADD_URI_SAFE_ATTR") && S(e.ADD_URI_SAFE_ATTR) && P(tl, e.ADD_URI_SAFE_ATTR, tA),
            x(e, "FORBID_CONTENTS") &&
              S(e.FORBID_CONTENTS) &&
              (tr === to && (tr = U(tr)), P(tr, e.FORBID_CONTENTS, tA)),
            x(e, "ADD_FORBID_CONTENTS") &&
              S(e.ADD_FORBID_CONTENTS) &&
              (tr === to && (tr = U(tr)), P(tr, e.ADD_FORBID_CONTENTS, tA)),
            te && (eF["#text"] = !0),
            eQ && P(eF, ["html", "head", "body"]),
            eF.table && (P(eF, ["tbody"]), delete eW.tbody),
            e.TRUSTED_TYPES_POLICY)
          ) {
            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
              throw L(
                'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
              );
            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
              throw L(
                'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
              );
            let n = t;
            t = e.TRUSTED_TYPES_POLICY;
            try {
              ew = eC("");
            } catch (e) {
              throw ((t = n), e);
            }
          } else
            null === e.TRUSTED_TYPES_POLICY
              ? ((t = void 0), (ew = ""))
              : (void 0 === t && (eO || ((n = eu(ed, c)), (eO = !0)), (t = n)),
                t && "string" == typeof ew && (ew = eC("")));
          (s && s(e), (tN = e));
        },
        tR = P({}, [...H, ...j, ...B]),
        tC = P({}, [...G, ...W]),
        tD = function (e) {
          var t, n, r;
          let o = eS(e);
          (o && o.tagName) || (o = { namespaceURI: tp, tagName: "template" });
          let i = E(e.tagName),
            a = E(o.tagName);
          return (
            !!td[e.namespaceURI] &&
            (e.namespaceURI === tu
              ? (t = o).namespaceURI === tf
                ? "svg" === i
                : t.namespaceURI === ts
                  ? "svg" === i && ("annotation-xml" === a || ty[a])
                  : !!tR[i]
              : e.namespaceURI === ts
                ? (n = o).namespaceURI === tf
                  ? "math" === i
                  : n.namespaceURI === tu
                    ? "math" === i && tb[a]
                    : !!tC[i]
                : e.namespaceURI === tf
                  ? ((r = o).namespaceURI !== tu || !!tb[a]) &&
                    (r.namespaceURI !== ts || !!ty[a]) &&
                    !tC[i] &&
                    (tS[i] || !tR[i])
                  : "application/xhtml+xml" === tE && !!td[e.namespaceURI])
          );
        },
        tx = function (e) {
          T(i.removed, { element: e });
          try {
            eS(e).removeChild(e);
          } catch (t) {
            if ((ey(e), !eS(e)))
              throw L(
                "a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place"
              );
          }
        },
        tk = function (e) {
          let t = eb(e);
          if (t) {
            let e = [];
            (h(t, (t) => {
              T(e, t);
            }),
              h(e, (e) => {
                try {
                  ey(e);
                } catch (e) {}
              }));
          }
          let n = e_(e);
          if (n)
            for (let t = n.length - 1; t >= 0; --t) {
              let r = n[t],
                o = r && r.name;
              if ("string" == typeof o)
                try {
                  e.removeAttribute(o);
                } catch (e) {}
            }
        },
        tI = function (e, t) {
          try {
            T(i.removed, { attribute: t.getAttributeNode(e), from: t });
          } catch (e) {
            T(i.removed, { attribute: null, from: t });
          }
          if ((t.removeAttribute(e), "is" === e))
            if (e4 || e3)
              try {
                tx(t);
              } catch (e) {}
            else
              try {
                t.setAttribute(e, "");
              } catch (e) {}
        },
        tL = function (e) {
          let t = e_(e);
          if (t)
            for (let n = t.length - 1; n >= 0; --n) {
              let r = t[n],
                o = r && r.name;
              if ("string" == typeof o && !ej[tA(o)])
                try {
                  e.removeAttribute(o);
                } catch (e) {}
            }
        },
        tM = function (e) {
          let t = [e];
          for (; t.length > 0; ) {
            let e = t.pop();
            (eA ? eA(e) : e.nodeType) === 1 && tL(e);
            let n = eb(e);
            if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
          }
        },
        tP = function (e) {
          let n = null,
            r = null;
          if (e8) e = "<remove></remove>" + e;
          else {
            let t = A(e, /^[\r\n\t ]+/);
            r = t && t[0];
          }
          "application/xhtml+xml" === tE &&
            tp === tf &&
            (e =
              '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
              e +
              "</body></html>");
          let o = t ? eC(e) : e;
          if (tp === tf)
            try {
              n = new em().parseFromString(o, tE);
            } catch (e) {}
          if (!n || !n.documentElement) {
            n = ek.createDocument(tp, "template", null);
            try {
              n.documentElement.innerHTML = tm ? ew : o;
            } catch (e) {}
          }
          let i = n.body || n.documentElement;
          return (e && r && i.insertBefore(a.createTextNode(r), i.childNodes[0] || null), tp === tf)
            ? eM.call(n, eQ ? "html" : "body")[0]
            : eQ
              ? n.documentElement
              : i;
        },
        tU = function (e) {
          return eI.call(
            e.ownerDocument || e,
            e,
            M.SHOW_ELEMENT |
              M.SHOW_COMMENT |
              M.SHOW_TEXT |
              M.SHOW_PROCESSING_INSTRUCTION |
              M.SHOW_CDATA_SECTION,
            null
          );
        },
        tz = function (e) {
          return ((e = N(e, V, " ")), (e = N(e, Z, " ")), (e = N(e, J, " ")));
        },
        tF = function (e) {
          var t;
          e.normalize();
          let n = eI.call(
              e.ownerDocument || e,
              e,
              M.SHOW_TEXT | M.SHOW_COMMENT | M.SHOW_CDATA_SECTION | M.SHOW_PROCESSING_INSTRUCTION,
              null
            ),
            r = n.nextNode();
          for (; r; ) ((r.data = tz(r.data)), (r = n.nextNode()));
          let o = null == (t = e.querySelectorAll) ? void 0 : t.call(e, "template");
          o &&
            h(o, (e) => {
              tj(e.content) && tF(e.content);
            });
        },
        tH = function (e) {
          let t = eN ? eN(e) : null;
          return (
            "string" == typeof t &&
            "form" === tA(t) &&
            ("string" != typeof e.nodeName ||
              "string" != typeof e.textContent ||
              "function" != typeof e.removeChild ||
              e.attributes !== e_(e) ||
              "function" != typeof e.removeAttribute ||
              "function" != typeof e.setAttribute ||
              "string" != typeof e.namespaceURI ||
              "function" != typeof e.insertBefore ||
              "function" != typeof e.hasChildNodes ||
              e.nodeType !== eA(e) ||
              e.childNodes !== eb(e))
          );
        },
        tj = function (e) {
          if (!eA || "object" != typeof e || null === e) return !1;
          try {
            return 11 === eA(e);
          } catch (e) {
            return !1;
          }
        },
        tB = function (e) {
          if (!eA || "object" != typeof e || null === e) return !1;
          try {
            return "number" == typeof eA(e);
          } catch (e) {
            return !1;
          }
        };
      function tG(e, t, n) {
        0 !== e.length &&
          h(e, (e) => {
            e.call(i, t, n, tN);
          });
      }
      let tW = function (e, t) {
          if (
            !eW[t] &&
            tX(t) &&
            ((eG.tagNameCheck instanceof RegExp && I(eG.tagNameCheck, t)) ||
              (eG.tagNameCheck instanceof Function && eG.tagNameCheck(t)))
          )
            return !1;
          if (te && !tr[t]) {
            let t = eS(e),
              n = eb(e);
            if (n && t) {
              let r = n.length;
              for (let o = r - 1; o >= 0; --o) {
                let r = tt ? n[o] : eg(n[o], !0);
                t.insertBefore(r, eT(e));
              }
            }
          }
          return (tx(e), !0);
        },
        tY = function (e) {
          if ((tG(eU.beforeSanitizeElements, e, null), tH(e))) return (tx(e), !0);
          let t = tA(eN ? eN(e) : e.nodeName);
          if (
            (tG(eU.uponSanitizeElement, e, { tagName: t, allowedTags: eF }),
            (eJ &&
              e.hasChildNodes() &&
              !tB(e.firstElementChild) &&
              I(ea, e.textContent) &&
              I(ea, e.innerHTML)) ||
              (eJ && e.namespaceURI === tf && "style" === t && tB(e.firstElementChild)) ||
              7 === e.nodeType ||
              (eJ && 8 === e.nodeType && I(el, e.data)) ||
              0)
          )
            return (tx(e), !0);
          if (eW[t] || (!(e$.tagCheck instanceof Function && e$.tagCheck(t)) && !eF[t]))
            return tW(e, t);
          if (
            ((eA ? eA(e) : e.nodeType) === 1 && !tD(e)) ||
            (("noscript" === t || "noembed" === t || "noframes" === t) && I(ec, e.innerHTML))
          )
            return (tx(e), !0);
          if (eZ && 3 === e.nodeType) {
            let t = tz(e.textContent);
            e.textContent !== t && (T(i.removed, { element: e.cloneNode() }), (e.textContent = t));
          }
          return (tG(eU.afterSanitizeElements, e, null), !1);
        },
        t$ = function (e, t, n) {
          if (eY[t] || (e5 && ("id" === t || "name" === t) && (n in a || n in tw))) return !1;
          let r = ej[t] || (e$.attributeCheck instanceof Function && e$.attributeCheck(t, e));
          if (eX && I(Q, t));
          else if (eq && I(ee, t));
          else if (r) {
            if (tl[t]);
            else if (I(ez, N(n, er, "")));
            else if (
              ("src" === t || "xlink:href" === t || "href" === t) &&
              "script" !== e &&
              0 === w(n, "data:") &&
              ti[e]
            );
            else if (eK && !I(en, N(n, er, "")));
            else if (n) return !1;
          } else if (
            !(
              (tX(e) &&
                ((eG.tagNameCheck instanceof RegExp && I(eG.tagNameCheck, e)) ||
                  (eG.tagNameCheck instanceof Function && eG.tagNameCheck(e))) &&
                ((eG.attributeNameCheck instanceof RegExp && I(eG.attributeNameCheck, t)) ||
                  (eG.attributeNameCheck instanceof Function && eG.attributeNameCheck(t, e)))) ||
              ("is" === t &&
                eG.allowCustomizedBuiltInElements &&
                ((eG.tagNameCheck instanceof RegExp && I(eG.tagNameCheck, n)) ||
                  (eG.tagNameCheck instanceof Function && eG.tagNameCheck(n))))
            )
          )
            return !1;
          return !0;
        },
        tq = P({}, [
          "annotation-xml",
          "color-profile",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-src",
          "font-face-uri",
          "missing-glyph",
        ]),
        tX = function (e) {
          return !tq[E(e)] && I(ei, e);
        },
        tK = function (e, n, r, o) {
          if (t && "object" == typeof ed && "function" == typeof ed.getAttributeType && !r)
            switch (ed.getAttributeType(e, n)) {
              case "TrustedHTML":
                return eC(o);
              case "TrustedScriptURL":
                return eD(o);
            }
          return o;
        },
        tV = function (e, t, n, r) {
          try {
            (n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r), tH(e) ? tx(e) : y(i.removed));
          } catch (n) {
            tI(t, e);
          }
        },
        tZ = function (e) {
          tG(eU.beforeSanitizeAttributes, e, null);
          let t = e.attributes;
          if (!t || tH(e)) return;
          let n = {
              attrName: "",
              attrValue: "",
              keepAttr: !0,
              allowedAttributes: ej,
              forceKeepAttr: void 0,
            },
            r = t.length,
            o = tA(e.nodeName);
          for (; r--; ) {
            let i = t[r],
              a = i.name,
              l = i.namespaceURI,
              c = i.value,
              s = tA(a),
              u = "value" === a ? c : O(c);
            if (
              ((n.attrName = s),
              (n.attrValue = u),
              (n.keepAttr = !0),
              (n.forceKeepAttr = void 0),
              tG(eU.uponSanitizeAttribute, e, n),
              (u = n.attrValue),
              e7 && ("id" === s || "name" === s) && 0 !== w(u, e6) && (tI(a, e), (u = e6 + u)),
              (eJ &&
                I(
                  /((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,
                  u
                )) ||
                ("attributename" === s && A(u, "href")))
            ) {
              tI(a, e);
              continue;
            }
            if (!n.forceKeepAttr) {
              if (!n.keepAttr || (!eV && I(es, u)) || (eZ && (u = tz(u)), !t$(o, s, u))) {
                tI(a, e);
                continue;
              }
              (u = tK(o, s, l, u)) !== c && tV(e, a, l, u);
            }
          }
          tG(eU.afterSanitizeAttributes, e, null);
        },
        tJ = function (e) {
          let t = null,
            n = tU(e);
          for (tG(eU.beforeSanitizeShadowDOM, e, null); (t = n.nextNode()); )
            if (
              (tG(eU.uponSanitizeShadowNode, t, null),
              tY(t),
              tZ(t),
              tj(t.content) && tJ(t.content),
              (eA ? eA(t) : t.nodeType) === 1)
            ) {
              let e = eE(t);
              tj(e) && (tQ(e), tJ(e));
            }
          tG(eU.afterSanitizeShadowDOM, e, null);
        },
        tQ = function (e) {
          let t = [{ node: e, shadow: null }];
          for (; t.length > 0; ) {
            let e = t.pop();
            if (e.shadow) {
              tJ(e.shadow);
              continue;
            }
            let n = e.node,
              r = (eA ? eA(n) : n.nodeType) === 1,
              o = eb(n);
            if (o) for (let e = o.length - 1; e >= 0; --e) t.push({ node: o[e], shadow: null });
            if (r) {
              let e = eN ? eN(n) : null;
              if ("string" == typeof e && "template" === tA(e)) {
                let e = n.content;
                tj(e) && t.push({ node: e, shadow: null });
              }
            }
            if (r) {
              let e = eE(n);
              tj(e) && t.push({ node: null, shadow: e }, { node: e, shadow: null });
            }
          }
        };
      return (
        (i.sanitize = function (e) {
          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = null,
            o = null,
            a = null,
            c = null;
          if (
            ((tm = !e) && (e = "<!-->"),
            "string" != typeof e &&
              !tB(e) &&
              "string" !=
                typeof (e = (function (e) {
                  switch (typeof e) {
                    case "string":
                      return e;
                    case "number":
                      return v(e);
                    case "boolean":
                      return R(e);
                    case "bigint":
                      return C ? C(e) : "0";
                    case "symbol":
                      return D ? D(e) : "Symbol()";
                    case "undefined":
                    default:
                      return k(e);
                    case "function":
                    case "object": {
                      if (null === e) return k(e);
                      let t = z(e, "toString");
                      if ("function" == typeof t) {
                        let n = t(e);
                        return "string" == typeof n ? n : k(n);
                      }
                      return k(e);
                    }
                  }
                })(e)))
          )
            throw L("dirty is not a string, aborting");
          if (!i.isSupported) return e;
          (e0 ? ((eF = e1), (ej = e2)) : tv(n),
            (eU.uponSanitizeElement.length > 0 || eU.uponSanitizeAttribute.length > 0) &&
              (eF = U(eF)),
            eU.uponSanitizeAttribute.length > 0 && (ej = U(ej)),
            (i.removed = []));
          let s = tt && "string" != typeof e && tB(e);
          if (s) {
            let t = eN ? eN(e) : e.nodeName;
            if ("string" == typeof t) {
              let e = tA(t);
              if (!eF[e] || eW[e])
                throw L("root node is forbidden and cannot be sanitized in-place");
            }
            if (tH(e)) throw L("root node is clobbered and cannot be sanitized in-place");
            try {
              tQ(e);
            } catch (t) {
              throw (tk(e), t);
            }
          } else if (tB(e))
            ((1 === (o = (r = tP("<!---->")).ownerDocument.importNode(e, !0)).nodeType &&
              "BODY" === o.nodeName) ||
            "HTML" === o.nodeName
              ? (r = o)
              : r.appendChild(o),
              tQ(o));
          else {
            if (!e4 && !eZ && !eQ && -1 === e.indexOf("<")) return t && e9 ? eC(e) : e;
            if (!(r = tP(e))) return e4 ? null : e9 ? ew : "";
          }
          r && e8 && tx(r.firstChild);
          let u = tU(s ? e : r);
          try {
            for (; (a = u.nextNode()); ) (tY(a), tZ(a), tj(a.content) && tJ(a.content));
          } catch (t) {
            throw (s && tk(e), t);
          }
          if (s)
            return (
              h(i.removed, (e) => {
                e.element && tM(e.element);
              }),
              eZ && tF(e),
              e
            );
          if (e4) {
            if ((eZ && tF(r), e3))
              for (c = eL.call(r.ownerDocument); r.firstChild; ) c.appendChild(r.firstChild);
            else c = r;
            return ((ej.shadowroot || ej.shadowrootmode) && (c = eP.call(l, c, !0)), c);
          }
          let f = eQ ? r.outerHTML : r.innerHTML;
          return (
            eQ &&
              eF["!doctype"] &&
              r.ownerDocument &&
              r.ownerDocument.doctype &&
              r.ownerDocument.doctype.name &&
              I(eo, r.ownerDocument.doctype.name) &&
              (f = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + f),
            eZ && (f = tz(f)),
            t && e9 ? eC(f) : f
          );
        }),
        (i.setConfig = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (tv(e), (e0 = !0), (e1 = eF), (e2 = ej));
        }),
        (i.clearConfig = function () {
          ((tN = null), (e0 = !1), (e1 = null), (e2 = null), (t = n), (ew = ""));
        }),
        (i.isValidAttribute = function (e, t, n) {
          return (tN || tv({}), t$(tA(e), tA(t), n));
        }),
        (i.addHook = function (e, t) {
          "function" != typeof t || (x(eU, e) && T(eU[e], t));
        }),
        (i.removeHook = function (e, t) {
          if (x(eU, e)) {
            if (void 0 !== t) {
              let n = g(eU[e], t);
              return -1 === n ? void 0 : b(eU[e], n, 1)[0];
            }
            return y(eU[e]);
          }
        }),
        (i.removeHooks = function (e) {
          x(eU, e) && (eU[e] = []);
        }),
        (i.removeAllHooks = function () {
          eU = ef();
        }),
        i
      );
    })();
    (e.s(["default", 0, em], 424154),
      e.s(
        [
          "markdownToSafeHTMLClient",
          0,
          function (e) {
            if (!e) return "";
            let t = n.md.render(e),
              r = em
                .sanitize(t)
                .replace(
                  /<ul>/g,
                  "<ul style='list-style-type: disc; list-style-position: inside; margin-left: 12px; margin-bottom: 4px'>"
                )
                .replace(
                  /<ol>/g,
                  "<ol style='list-style-type: decimal; list-style-position: inside; margin-left: 12px; margin-bottom: 4px'>"
                )
                .replace(/<a\s+([^>]*)>/g, (e, t) => {
                  let n = t
                    .replace(/\s*(?:target|rel|class)\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
                    .trim();
                  return `<a target='_blank' rel='noopener noreferrer nofollow ugc' class='text-blue-500 hover:text-blue-600'${n ? ` ${n}` : ""}>`;
                })
                .replace(
                  /<h1[^>]*>/g,
                  "<h1 style='font-size: 25px; font-weight: bold; margin-bottom: 8px'>"
                )
                .replace(
                  /<h2[^>]*>/g,
                  "<h2 style='font-size: 20px; font-weight: bold; margin-bottom: 8px'>"
                );
            return r.replace(
              /<li>([^<]+|<strong>.*?<\/strong>)<\/li>\s*<li>\s*<ul([^>]*)>([\s\S]*?)<\/ul>\s*<\/li>/g,
              "<li>$1<ul$2>$3</ul></li>"
            );
          },
        ],
        528187
      ));
  },
]);
