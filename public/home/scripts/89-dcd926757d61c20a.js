(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [89],
  {
    89: function (i, u, h) {
      let d;
      h.d(u, {
        E: function () {
          return ai;
        },
      });
      var c,
        v,
        S = h(7294);
      let V = (0, S.createContext)({
          transformPagePoint: (i) => i,
          isStatic: !1,
          reducedMotion: "never",
        }),
        A = (0, S.createContext)({}),
        M = (0, S.createContext)(null),
        D = "undefined" != typeof document,
        B = D ? S.useLayoutEffect : S.useEffect,
        O = (0, S.createContext)({ strict: !1 });
      function p(i) {
        return (
          "object" == typeof i &&
          Object.prototype.hasOwnProperty.call(i, "current")
        );
      }
      function m(i) {
        return "string" == typeof i || Array.isArray(i);
      }
      function f(i) {
        return "object" == typeof i && "function" == typeof i.start;
      }
      let $ = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        N = ["initial", ...$];
      function y(i) {
        return f(i.animate) || N.some((u) => m(i[u]));
      }
      function x(i) {
        return !(!y(i) && !i.variants);
      }
      function P(i) {
        return Array.isArray(i) ? i.join(" ") : i;
      }
      let W = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        z = {};
      for (let li in W) z[li] = { isEnabled: (i) => W[li].some((u) => !!i[u]) };
      let X = (0, S.createContext)({}),
        Y = (0, S.createContext)({}),
        Z = Symbol["for"]("motionComponentSymbol"),
        _ = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function E(i) {
        if ("string" != typeof i || i.includes("-"));
        else if (_.indexOf(i) > -1 || /[A-Z]/.test(i)) return !0;
        return !1;
      }
      let K = {},
        J = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        Q = new Set(J);
      function k(i, { layout: u, layoutId: h }) {
        return (
          Q.has(i) ||
          i.startsWith("origin") ||
          ((u || void 0 !== h) && (!!K[i] || "opacity" === i))
        );
      }
      let R = (i) => !(!i || !i.getVelocity),
        tt = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        nt = J.length,
        F = (i) => (u) => "string" == typeof u && u.startsWith(i),
        st = F("--"),
        ot = F("var(--"),
        I = (i, u) => (u && "number" == typeof i ? u.transform(i) : i),
        U = (i, u, h) => Math.min(Math.max(h, i), u),
        at = {
          test: (i) => "number" == typeof i,
          parse: parseFloat,
          transform: (i) => i,
        },
        lt = { ...at, transform: (i) => U(0, 1, i) },
        ut = { ...at, default: 1 },
        H = (i) => Math.round(1e5 * i) / 1e5,
        ht = /(-)?([\d]*\.?[\d])+/g,
        dt =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        ct =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function G(i) {
        return "string" == typeof i;
      }
      let q = (i) => ({
          test: (u) => G(u) && u.endsWith(i) && 1 === u.split(" ").length,
          parse: parseFloat,
          transform: (u) => `${u}${i}`,
        }),
        pt = q("deg"),
        mt = q("%"),
        ft = q("px"),
        gt = q("vh"),
        yt = q("vw"),
        vt = {
          ...mt,
          parse: (i) => mt.parse(i) / 100,
          transform: (i) => mt.transform(100 * i),
        },
        xt = { ...at, transform: Math.round },
        Pt = {
          borderWidth: ft,
          borderTopWidth: ft,
          borderRightWidth: ft,
          borderBottomWidth: ft,
          borderLeftWidth: ft,
          borderRadius: ft,
          radius: ft,
          borderTopLeftRadius: ft,
          borderTopRightRadius: ft,
          borderBottomRightRadius: ft,
          borderBottomLeftRadius: ft,
          width: ft,
          maxWidth: ft,
          height: ft,
          maxHeight: ft,
          size: ft,
          top: ft,
          right: ft,
          bottom: ft,
          left: ft,
          padding: ft,
          paddingTop: ft,
          paddingRight: ft,
          paddingBottom: ft,
          paddingLeft: ft,
          margin: ft,
          marginTop: ft,
          marginRight: ft,
          marginBottom: ft,
          marginLeft: ft,
          rotate: pt,
          rotateX: pt,
          rotateY: pt,
          rotateZ: pt,
          scale: ut,
          scaleX: ut,
          scaleY: ut,
          scaleZ: ut,
          skew: pt,
          skewX: pt,
          skewY: pt,
          distance: ft,
          translateX: ft,
          translateY: ft,
          translateZ: ft,
          x: ft,
          y: ft,
          z: ft,
          perspective: ft,
          transformPerspective: ft,
          opacity: lt,
          originX: vt,
          originY: vt,
          originZ: ft,
          zIndex: xt,
          fillOpacity: lt,
          strokeOpacity: lt,
          numOctaves: xt,
        };
      function tn(i, u, h, d) {
        let { style: c, vars: v, transform: S, transformOrigin: V } = i,
          A = !1,
          M = !1,
          D = !0;
        for (let B in u) {
          let i = u[B];
          if (st(B)) {
            v[B] = i;
            continue;
          }
          let h = Pt[B],
            d = I(i, h);
          if (Q.has(B)) {
            if (((A = !0), (S[B] = d), !D)) continue;
            i !== (h["default"] || 0) && (D = !1);
          } else B.startsWith("origin") ? ((M = !0), (V[B] = d)) : (c[B] = d);
        }
        if (
          (!u.transform &&
            (A || d
              ? (c.transform = (function (
                  i,
                  {
                    enableHardwareAcceleration: u = !0,
                    allowTransformNone: h = !0,
                  },
                  d,
                  c
                ) {
                  let v = "";
                  for (let S = 0; S < nt; S++) {
                    let u = J[S];
                    if (void 0 !== i[u]) {
                      v += `${tt[u] || u}(${i[u]}) `;
                    }
                  }
                  return (
                    u && !i.z && (v += "translateZ(0)"),
                    (v = v.trim()),
                    c ? (v = c(i, d ? "" : v)) : h && d && (v = "none"),
                    v
                  );
                })(i.transform, h, D, d))
              : c.transform && (c.transform = "none")),
          M)
        ) {
          let { originX: i = "50%", originY: u = "50%", originZ: h = 0 } = V;
          c.transformOrigin = `${i} ${u} ${h}`;
        }
      }
      let tr = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function ts(i, u, h) {
        for (let d in u) R(u[d]) || k(d, h) || (i[d] = u[d]);
      }
      let bt = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function ta(i) {
        return (
          i.startsWith("while") ||
          (i.startsWith("drag") && "draggable" !== i) ||
          i.startsWith("layout") ||
          i.startsWith("onTap") ||
          i.startsWith("onPan") ||
          bt.has(i)
        );
      }
      let tl = (i) => !ta(i);
      try {
        (c = require("@emotion/is-prop-valid")["default"]) &&
          (tl = (i) => (i.startsWith("on") ? !ta(i) : c(i)));
      } catch (i) {}
      function tu(i, u, h) {
        return "string" == typeof i ? i : ft.transform(u + h * i);
      }
      let Tt = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        St = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function td(
        i,
        {
          attrX: u,
          attrY: h,
          attrScale: d,
          originX: c,
          originY: v,
          pathLength: S,
          pathSpacing: V = 1,
          pathOffset: A = 0,
          ...M
        },
        D,
        B,
        O
      ) {
        if ((tn(i, M, D, O), B))
          return void (i.style.viewBox && (i.attrs.viewBox = i.style.viewBox));
        (i.attrs = i.style), (i.style = {});
        let { attrs: $, style: N, dimensions: W } = i;
        $.transform && (W && (N.transform = $.transform), delete $.transform),
          W &&
            (void 0 !== c || void 0 !== v || N.transform) &&
            (N.transformOrigin = (function (i, u, h) {
              return `${tu(u, i.x, i.width)} ${tu(h, i.y, i.height)}`;
            })(W, void 0 !== c ? c : 0.5, void 0 !== v ? v : 0.5)),
          void 0 !== u && ($.x = u),
          void 0 !== h && ($.y = h),
          void 0 !== d && ($.scale = d),
          void 0 !== S &&
            (function (i, u, h = 1, d = 0, c = !0) {
              i.pathLength = 1;
              let v = c ? Tt : St;
              i[v.offset] = ft.transform(-d);
              let S = ft.transform(u),
                V = ft.transform(h);
              i[v.array] = `${S} ${V}`;
            })($, S, V, A, !1);
      }
      let tp = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
          attrs: {},
        }),
        tm = (i) => "string" == typeof i && "svg" === i.toLowerCase(),
        tf = (i) => i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function tg(i, { style: u, vars: h }, d, c) {
        for (let v in (Object.assign(i.style, u, c && c.getProjectionStyles(d)),
        h))
          i.style.setProperty(v, h[v]);
      }
      let wt = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function ty(i, u, h, d) {
        for (let c in (tg(i, u, void 0, d), u.attrs))
          i.setAttribute(wt.has(c) ? c : tf(c), u.attrs[c]);
      }
      function tx(i, u) {
        let { style: h } = i,
          d = {};
        for (let c in h)
          (R(h[c]) || (u.style && R(u.style[c])) || k(c, i)) && (d[c] = h[c]);
        return d;
      }
      function tP(i, u) {
        let h = tx(i, u);
        for (let d in i)
          (R(i[d]) || R(u[d])) &&
            (h[
              -1 !== J.indexOf(d)
                ? "attr" + d.charAt(0).toUpperCase() + d.substring(1)
                : d
            ] = i[d]);
        return h;
      }
      function tb(i, u, h, d = {}, c = {}) {
        return (
          "function" == typeof u && (u = u(void 0 !== h ? h : i.custom, d, c)),
          "string" == typeof u && (u = i.variants && i.variants[u]),
          "function" == typeof u && (u = u(void 0 !== h ? h : i.custom, d, c)),
          u
        );
      }
      let tT = (i) => Array.isArray(i),
        tw = (i) => !!(i && "object" == typeof i && i.mix && i.toValue),
        tA = (i) => (tT(i) ? i[i.length - 1] || 0 : i);
      function tV(i) {
        let u = R(i) ? i.get() : i;
        return tw(u) ? u.toValue() : u;
      }
      let tS = (i) => (u, h) => {
          let d = (0, S.useContext)(A),
            c = (0, S.useContext)(M),
            s = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: i,
                  createRenderState: u,
                  onMount: h,
                },
                d,
                c,
                v
              ) {
                let S = {
                  latestValues: (function (i, u, h, d) {
                    let c = {},
                      v = d(i, {});
                    for (let O in v) c[O] = tV(v[O]);
                    let { initial: S, animate: V } = i,
                      A = y(i),
                      M = x(i);
                    u &&
                      M &&
                      !A &&
                      !1 !== i.inherit &&
                      (void 0 === S && (S = u.initial),
                      void 0 === V && (V = u.animate));
                    let D = !!h && !1 === h.initial,
                      B = (D = D || !1 === S) ? V : S;
                    return (
                      B &&
                        "boolean" != typeof B &&
                        !f(B) &&
                        (Array.isArray(B) ? B : [B]).forEach((u) => {
                          let h = tb(i, u);
                          if (!h) return;
                          let { transitionEnd: d, transition: v, ...S } = h;
                          for (let i in S) {
                            let u = S[i];
                            if (Array.isArray(u)) {
                              u = u[D ? u.length - 1 : 0];
                            }
                            null !== u && (c[i] = u);
                          }
                          for (let i in d) c[i] = d[i];
                        }),
                      c
                    );
                  })(d, c, v, i),
                  renderState: u(),
                };
                return h && (S.mount = (i) => h(d, i, S)), S;
              })(i, u, d, c);
          return h
            ? s()
            : (function (i) {
                let u = (0, S.useRef)(null);
                return null === u.current && (u.current = i()), u.current;
              })(s);
        },
        Vt = {
          useVisualState: tS({
            scrapeMotionValuesFromProps: tP,
            createRenderState: tp,
            onMount: (i, u, { renderState: h, latestValues: d }) => {
              try {
                h.dimensions =
                  "function" == typeof u.getBBox
                    ? u.getBBox()
                    : u.getBoundingClientRect();
              } catch (i) {
                h.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              td(
                h,
                d,
                { enableHardwareAcceleration: !1 },
                tm(u.tagName),
                i.transformTemplate
              ),
                ty(u, h);
            },
          }),
        },
        At = {
          useVisualState: tS({
            scrapeMotionValuesFromProps: tx,
            createRenderState: tr,
          }),
        };
      function tM(i, u, h, d = { passive: !0 }) {
        return i.addEventListener(u, h, d), () => i.removeEventListener(u, h);
      }
      let tD = (i) =>
        "mouse" === i.pointerType
          ? "number" != typeof i.button || i.button <= 0
          : !1 !== i.isPrimary;
      function tk(i, u = "page") {
        return { point: { x: i[u + "X"], y: i[u + "Y"] } };
      }
      let tR = (i) => (u) => tD(u) && i(u, tk(u));
      function tL(i, u, h, d) {
        return tM(i, u, tR(h), d);
      }
      let tj = (i, u) => (h) => u(i(h)),
        tF = (...i) => i.reduce(tj);
      function tB(i) {
        let u = null;
        return () =>
          null === u &&
          ((u = i),
          () => {
            u = null;
          });
      }
      let Et = tB("dragHorizontal"),
        Ct = tB("dragVertical");
      function tU(i) {
        let u = !1;
        if ("y" === i) u = Ct();
        else if ("x" === i) u = Et();
        else {
          let i = Et(),
            h = Ct();
          i && h
            ? (u = () => {
                i(), h();
              })
            : (i && i(), h && h());
        }
        return u;
      }
      function tN() {
        let i = tU(!0);
        return !i || (i(), !1);
      }
      class t$ {
        constructor(i) {
          (this.isMounted = !1), (this.node = i);
        }
        update() {}
      }
      let tW = (i) => i,
        Mt = ["prepare", "read", "update", "preRender", "render", "postRender"],
        {
          schedule: Dt,
          cancel: kt,
          state: Lt,
          steps: Rt,
        } = (function (i, u) {
          let h = !1,
            d = !0,
            c = { delta: 0, timestamp: 0, isProcessing: !1 },
            v = Mt.reduce(
              (i, u) => (
                (i[u] = (function (i) {
                  let u = [],
                    h = [],
                    d = 0,
                    c = !1,
                    v = !1,
                    S = new WeakSet(),
                    V = {
                      schedule: (i, v = !1, V = !1) => {
                        let A = V && c,
                          M = A ? u : h;
                        return (
                          v && S.add(i),
                          -1 === M.indexOf(i) &&
                            (M.push(i), A && c && (d = u.length)),
                          i
                        );
                      },
                      cancel: (i) => {
                        let u = h.indexOf(i);
                        -1 !== u && h.splice(u, 1), S["delete"](i);
                      },
                      process: (A) => {
                        if (c) v = !0;
                        else {
                          if (
                            ((c = !0),
                            ([u, h] = [h, u]),
                            (h.length = 0),
                            (d = u.length))
                          )
                            for (let h = 0; h < d; h++) {
                              let d = u[h];
                              d(A), S.has(d) && (V.schedule(d), i());
                            }
                          (c = !1), v && ((v = !1), V.process(A));
                        }
                      },
                    };
                  return V;
                })(() => (h = !0))),
                i
              ),
              {}
            ),
            o = (i) => v[i].process(c),
            a = () => {
              let u = performance.now();
              (h = !1),
                (c.delta = d
                  ? 1e3 / 60
                  : Math.max(Math.min(u - c.timestamp, 40), 1)),
                (c.timestamp = u),
                (c.isProcessing = !0),
                Mt.forEach(o),
                (c.isProcessing = !1),
                h && ((d = !1), i(a));
            },
            l = () => {
              (h = !0), (d = !0), c.isProcessing || i(a);
            };
          return {
            schedule: Mt.reduce((i, u) => {
              let d = v[u];
              return (
                (i[u] = (i, u = !1, c = !1) => (h || l(), d.schedule(i, u, c))),
                i
              );
            }, {}),
            cancel: (i) => Mt.forEach((u) => v[u].cancel(i)),
            state: c,
            steps: v,
          };
        })(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : tW
        );
      function tq(i, u) {
        let h = "onHover" + (u ? "Start" : "End");
        return tL(
          i.current,
          "pointer" + (u ? "enter" : "leave"),
          (d, c) => {
            if ("touch" === d.type || tN()) return;
            let v = i.getProps();
            i.animationState &&
              v.whileHover &&
              i.animationState.setActive("whileHover", u),
              v[h] && Dt.update(() => v[h](d, c));
          },
          { passive: !i.getProps()[h] }
        );
      }
      let t_ = (i, u) => !!u && (i === u || t_(i, u.parentElement));
      function tJ(i, u) {
        if (!u) return;
        let h = new PointerEvent("pointer" + i);
        u(h, tk(h));
      }
      let jt = new WeakMap(),
        Ft = new WeakMap(),
        t5 = (i) => {
          let u = jt.get(i.target);
          u && u(i);
        },
        t2 = (i) => {
          i.forEach(t5);
        },
        Bt = { some: 0, all: 1 };
      function t4(i, u) {
        if (!Array.isArray(u)) return !1;
        let h = u.length;
        if (h !== i.length) return !1;
        for (let d = 0; d < h; d++) if (u[d] !== i[d]) return !1;
        return !0;
      }
      function t6(i, u, h) {
        let d = i.getProps();
        return tb(
          d,
          u,
          void 0 !== h ? h : d.custom,
          (function (i) {
            let u = {};
            return i.values.forEach((i, h) => (u[h] = i.get())), u;
          })(i),
          (function (i) {
            let u = {};
            return i.values.forEach((i, h) => (u[h] = i.getVelocity())), u;
          })(i)
        );
      }
      let Ot = "data-" + tf("framerAppearId"),
        t7 = (i) => 1e3 * i,
        et = (i) => i / 1e3,
        Ut = !1,
        ei = (i) => Array.isArray(i) && "number" == typeof i[0],
        en = ([i, u, h, d]) => `cubic-bezier(${i}, ${u}, ${h}, ${d})`,
        It = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: en([0, 0.65, 0.55, 1]),
          circOut: en([0.55, 0, 1, 0.45]),
          backIn: en([0.31, 0.01, 0.66, -0.59]),
          backOut: en([0.33, 1.53, 0.69, 0.99]),
        },
        es = (i, u, h) =>
          (((1 - 3 * h + 3 * u) * i + (3 * h - 6 * u)) * i + 3 * u) * i;
      function eo(i, u, h, d) {
        if (i === u && h === d) return tW;
        let r = (u) =>
          (function (i, u, h, d, c) {
            let v,
              S,
              V = 0;
            do {
              (v = es((S = u + (h - u) / 2), d, c) - i) > 0 ? (h = S) : (u = S);
            } while (Math.abs(v) > 1e-7 && ++V < 12);
            return S;
          })(u, 0, 1, i, h);
        return (i) => (0 === i || 1 === i ? i : es(r(i), u, d));
      }
      let $t = eo(0.42, 0, 1, 1),
        Nt = eo(0, 0, 0.58, 1),
        Wt = eo(0.42, 0, 0.58, 1),
        eh = (i) => Array.isArray(i) && "number" != typeof i[0],
        ec = (i) => (u) => u <= 0.5 ? i(2 * u) / 2 : (2 - i(2 * (1 - u))) / 2,
        ed = (i) => (u) => 1 - i(1 - u),
        ep = (i) => 1 - Math.sin(Math.acos(i)),
        zt = ed(ep),
        Gt = ec(zt),
        Xt = eo(0.33, 1.53, 0.69, 0.99),
        Ht = ed(Xt),
        Yt = ec(Ht),
        qt = {
          linear: tW,
          easeIn: $t,
          easeInOut: Wt,
          easeOut: Nt,
          circIn: ep,
          circInOut: Gt,
          circOut: zt,
          backIn: Ht,
          backInOut: Yt,
          backOut: Xt,
          anticipate: (i) =>
            (i *= 2) < 1 ? 0.5 * Ht(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))),
        },
        eP = (i) => {
          if (Array.isArray(i)) {
            tW(
              4 === i.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [u, h, d, c] = i;
            return eo(u, h, d, c);
          }
          return "string" == typeof i
            ? (tW(void 0 !== qt[i], `Invalid easing type '${i}'`), qt[i])
            : i;
        },
        eb = (i, u) => (h) =>
          !!(
            (G(h) && ct.test(h) && h.startsWith(i)) ||
            (u && Object.prototype.hasOwnProperty.call(h, u))
          ),
        eT = (i, u, h) => (d) => {
          if (!G(d)) return d;
          let [c, v, S, V] = d.match(ht);
          return {
            [i]: parseFloat(c),
            [u]: parseFloat(v),
            [h]: parseFloat(S),
            alpha: void 0 !== V ? parseFloat(V) : 1,
          };
        },
        Zt = { ...at, transform: (i) => Math.round(((i) => U(0, 255, i))(i)) },
        _t = {
          test: eb("rgb", "red"),
          parse: eT("red", "green", "blue"),
          transform: ({ red: i, green: u, blue: h, alpha: d = 1 }) =>
            "rgba(" +
            Zt.transform(i) +
            ", " +
            Zt.transform(u) +
            ", " +
            Zt.transform(h) +
            ", " +
            H(lt.transform(d)) +
            ")",
        },
        Kt = {
          test: eb("#"),
          parse: function (i) {
            let u = "",
              h = "",
              d = "",
              c = "";
            return (
              i.length > 5
                ? ((u = i.substring(1, 3)),
                  (h = i.substring(3, 5)),
                  (d = i.substring(5, 7)),
                  (c = i.substring(7, 9)))
                : ((u = i.substring(1, 2)),
                  (h = i.substring(2, 3)),
                  (d = i.substring(3, 4)),
                  (c = i.substring(4, 5)),
                  (u += u),
                  (h += h),
                  (d += d),
                  (c += c)),
              {
                red: parseInt(u, 16),
                green: parseInt(h, 16),
                blue: parseInt(d, 16),
                alpha: c ? parseInt(c, 16) / 255 : 1,
              }
            );
          },
          transform: _t.transform,
        },
        Jt = {
          test: eb("hsl", "hue"),
          parse: eT("hue", "saturation", "lightness"),
          transform: ({ hue: i, saturation: u, lightness: h, alpha: d = 1 }) =>
            "hsla(" +
            Math.round(i) +
            ", " +
            mt.transform(H(u)) +
            ", " +
            mt.transform(H(h)) +
            ", " +
            H(lt.transform(d)) +
            ")",
        },
        Qt = {
          test: (i) => _t.test(i) || Kt.test(i) || Jt.test(i),
          parse: (i) =>
            _t.test(i) ? _t.parse(i) : Jt.test(i) ? Jt.parse(i) : Kt.parse(i),
          transform: (i) =>
            G(i)
              ? i
              : i.hasOwnProperty("red")
              ? _t.transform(i)
              : Jt.transform(i),
        },
        eM = (i, u, h) => -h * i + h * u + i;
      function eD(i, u, h) {
        return (
          h < 0 && (h += 1),
          h > 1 && (h -= 1),
          h < 1 / 6
            ? i + 6 * (u - i) * h
            : h < 0.5
            ? u
            : h < 2 / 3
            ? i + (u - i) * (2 / 3 - h) * 6
            : i
        );
      }
      let ek = (i, u, h) => {
          let d = i * i;
          return Math.sqrt(Math.max(0, h * (u * u - d) + d));
        },
        te = [Kt, _t, Jt];
      function ej(i) {
        let u = ((i) => te.find((u) => u.test(i)))(i);
        tW(
          !!u,
          `'${i}' is not an animatable color. Use the equivalent color code instead.`
        );
        let h = u.parse(i);
        return (
          u === Jt &&
            (h = (function ({ hue: i, saturation: u, lightness: h, alpha: d }) {
              (i /= 360), (h /= 100);
              let c = 0,
                v = 0,
                S = 0;
              if ((u /= 100)) {
                let d = h < 0.5 ? h * (1 + u) : h + u - h * u,
                  V = 2 * h - d;
                (c = eD(V, d, i + 1 / 3)),
                  (v = eD(V, d, i)),
                  (S = eD(V, d, i - 1 / 3));
              } else c = v = S = h;
              return {
                red: Math.round(255 * c),
                green: Math.round(255 * v),
                blue: Math.round(255 * S),
                alpha: d,
              };
            })(h)),
          h
        );
      }
      let eF = (i, u) => {
          let h = ej(i),
            d = ej(u),
            c = { ...h };
          return (i) => (
            (c.red = ek(h.red, d.red, i)),
            (c.green = ek(h.green, d.green, i)),
            (c.blue = ek(h.blue, d.blue, i)),
            (c.alpha = eM(h.alpha, d.alpha, i)),
            _t.transform(c)
          );
        },
        ee = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: tW,
        },
        ie = { regex: dt, countKey: "Colors", token: "${c}", parse: Qt.parse },
        se = { regex: ht, countKey: "Numbers", token: "${n}", parse: at.parse };
      function eU(i, { regex: u, countKey: h, token: d, parse: c }) {
        let v = i.tokenised.match(u);
        v &&
          ((i["num" + h] = v.length),
          (i.tokenised = i.tokenised.replace(u, d)),
          i.values.push(...v.map(c)));
      }
      function eN(i) {
        let u = i.toString(),
          h = {
            value: u,
            tokenised: u,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return h.value.includes("var(--") && eU(h, ee), eU(h, ie), eU(h, se), h;
      }
      function e$(i) {
        return eN(i).values;
      }
      function eW(i) {
        let { values: u, numColors: h, numVars: d, tokenised: c } = eN(i),
          v = u.length;
        return (i) => {
          let u = c;
          for (let c = 0; c < v; c++)
            u =
              c < d
                ? u.replace(ee.token, i[c])
                : c < d + h
                ? u.replace(ie.token, Qt.transform(i[c]))
                : u.replace(se.token, H(i[c]));
          return u;
        };
      }
      let eH = (i) => ("number" == typeof i ? 0 : i),
        oe = {
          test: function (i) {
            var u, h;
            return (
              isNaN(i) &&
              G(i) &&
              ((null === (u = i.match(ht)) || void 0 === u
                ? void 0
                : u.length) || 0) +
                ((null === (h = i.match(dt)) || void 0 === h
                  ? void 0
                  : h.length) || 0) >
                0
            );
          },
          parse: e$,
          createTransformer: eW,
          getAnimatableNone: function (i) {
            let u = e$(i);
            return eW(i)(u.map(eH));
          },
        },
        eY = (i, u) => (h) => `${h > 0 ? u : i}`;
      function eX(i, u) {
        return "number" == typeof i
          ? (h) => eM(i, u, h)
          : Qt.test(i)
          ? eF(i, u)
          : i.startsWith("var(")
          ? eY(i, u)
          : eZ(i, u);
      }
      let eG = (i, u) => {
          let h = [...i],
            d = h.length,
            c = i.map((i, h) => eX(i, u[h]));
          return (i) => {
            for (let u = 0; u < d; u++) h[u] = c[u](i);
            return h;
          };
        },
        eq = (i, u) => {
          let h = { ...i, ...u },
            d = {};
          for (let c in h)
            void 0 !== i[c] && void 0 !== u[c] && (d[c] = eX(i[c], u[c]));
          return (i) => {
            for (let u in d) h[u] = d[u](i);
            return h;
          };
        },
        eZ = (i, u) => {
          let h = oe.createTransformer(u),
            d = eN(i),
            c = eN(u);
          return d.numVars === c.numVars &&
            d.numColors === c.numColors &&
            d.numNumbers >= c.numNumbers
            ? tF(eG(d.values, c.values), h)
            : (tW(
                !0,
                `Complex values '${i}' and '${u}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              eY(i, u));
        },
        eK = (i, u, h) => {
          let d = u - i;
          return 0 === d ? 1 : (h - i) / d;
        },
        e_ = (i, u) => (h) => eM(i, u, h);
      function eJ(i, u, { clamp: h = !0, ease: d, mixer: c } = {}) {
        let v = i.length;
        if (
          (tW(
            v === u.length,
            "Both input and output ranges must be the same length"
          ),
          1 === v)
        )
          return () => u[0];
        i[0] > i[v - 1] && ((i = [...i].reverse()), (u = [...u].reverse()));
        let S = (function (i, u, h) {
            let d = [],
              c =
                h ||
                (function (i) {
                  if ("number" == typeof i);
                  else {
                    if ("string" == typeof i) return Qt.test(i) ? eF : eZ;
                    if (Array.isArray(i)) return eG;
                    if ("object" == typeof i) return eq;
                  }
                  return e_;
                })(i[0]),
              v = i.length - 1;
            for (let S = 0; S < v; S++) {
              let h = c(i[S], i[S + 1]);
              u && (h = tF(Array.isArray(u) ? u[S] || tW : u, h)), d.push(h);
            }
            return d;
          })(u, d, c),
          V = S.length,
          l = (u) => {
            let h = 0;
            if (V > 1) for (; h < i.length - 2 && !(u < i[h + 1]); h++);
            let d = eK(i[h], i[h + 1], u);
            return S[h](d);
          };
        return h ? (u) => l(U(i[0], i[v - 1], u)) : l;
      }
      function eQ({
        duration: i = 300,
        keyframes: u,
        times: h,
        ease: d = "easeInOut",
      }) {
        let c = eh(d) ? d.map(eP) : eP(d),
          v = { done: !1, value: u[0] },
          S = eJ(
            (h && h.length === u.length
              ? h
              : (function (i) {
                  let u = [0];
                  return (
                    (function (i, u) {
                      let h = i[i.length - 1];
                      for (let d = 1; d <= u; d++) {
                        let c = eK(0, u, d);
                        i.push(eM(h, 1, c));
                      }
                    })(u, i.length - 1),
                    u
                  );
                })(u)
            ).map((u) => u * i),
            u,
            {
              ease: Array.isArray(c)
                ? c
                : u.map(() => c || Wt).splice(0, u.length - 1),
            }
          );
        return {
          calculatedDuration: i,
          next: (u) => ((v.value = S(u)), (v.done = u >= i), v),
        };
      }
      function e0(i, u, h) {
        var d, c;
        let v = Math.max(u - 5, 0);
        return (d = h - i(v)), (c = u - v) ? (1e3 / c) * d : 0;
      }
      function e1(i, u) {
        return i * Math.sqrt(1 - u * u);
      }
      let ae = ["duration", "bounce"],
        le = ["stiffness", "damping", "mass"];
      function e3(i, u) {
        return u.some((u) => void 0 !== i[u]);
      }
      function e9({ keyframes: i, restDelta: u, restSpeed: h, ...d }) {
        let c,
          v = i[0],
          S = i[i.length - 1],
          V = { done: !1, value: v },
          {
            stiffness: A,
            damping: M,
            mass: D,
            velocity: B,
            duration: O,
            isResolvedFromDuration: $,
          } = (function (i) {
            let u = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...i,
            };
            if (!e3(i, le) && e3(i, ae)) {
              let h = (function ({
                duration: i = 800,
                bounce: u = 0.25,
                velocity: h = 0,
                mass: d = 1,
              }) {
                let c, v;
                tW(i <= t7(10), "Spring duration must be 10 seconds or less");
                let S = 1 - u;
                (S = U(0.05, 1, S)),
                  (i = U(0.01, 10, et(i))),
                  S < 1
                    ? ((c = (u) => {
                        let d = u * S,
                          c = d * i;
                        return 0.001 - ((d - h) / e1(u, S)) * Math.exp(-c);
                      }),
                      (v = (u) => {
                        let d = u * S * i,
                          v = Math.pow(S, 2) * Math.pow(u, 2) * i,
                          V = e1(Math.pow(u, 2), S);
                        return (
                          ((d * h + h - v) *
                            Math.exp(-d) *
                            (0.001 - c(u) > 0 ? -1 : 1)) /
                          V
                        );
                      }))
                    : ((c = (u) =>
                        Math.exp(-u * i) * ((u - h) * i + 1) - 0.001),
                      (v = (u) => i * i * (h - u) * Math.exp(-u * i)));
                let V = (function (i, u, h) {
                  let d = h;
                  for (let c = 1; c < 12; c++) d -= i(d) / u(d);
                  return d;
                })(c, v, 5 / i);
                if (((i = t7(i)), isNaN(V)))
                  return { stiffness: 100, damping: 10, duration: i };
                {
                  let u = Math.pow(V, 2) * d;
                  return {
                    stiffness: u,
                    damping: 2 * S * Math.sqrt(d * u),
                    duration: i,
                  };
                }
              })(i);
              (u = {
                ...u,
                ...h,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return u;
          })(d),
          N = B ? -et(B) : 0,
          W = M / (2 * Math.sqrt(A * D)),
          z = S - v,
          X = et(Math.sqrt(A / D)),
          Y = 5 > Math.abs(z);
        if ((h || (h = Y ? 0.01 : 2), u || (u = Y ? 0.005 : 0.5), W < 1)) {
          let i = e1(X, W);
          c = (u) =>
            S -
            Math.exp(-W * X * u) *
              (((N + W * X * z) / i) * Math.sin(i * u) + z * Math.cos(i * u));
        } else if (1 === W)
          c = (i) => S - Math.exp(-X * i) * (z + (N + X * z) * i);
        else {
          let i = X * Math.sqrt(W * W - 1);
          c = (u) => {
            let h = Math.exp(-W * X * u),
              d = Math.min(i * u, 300);
            return (
              S -
              (h * ((N + W * X * z) * Math.sinh(d) + i * z * Math.cosh(d))) / i
            );
          };
        }
        return {
          calculatedDuration: ($ && O) || null,
          next: (i) => {
            let d = c(i);
            if ($) V.done = i >= O;
            else {
              let v = N;
              0 !== i && (v = W < 1 ? e0(c, i, d) : 0);
              let A = Math.abs(v) <= h,
                M = Math.abs(S - d) <= u;
              V.done = A && M;
            }
            return (V.value = V.done ? S : d), V;
          },
        };
      }
      function e4({
        keyframes: i,
        velocity: u = 0,
        power: h = 0.8,
        timeConstant: d = 325,
        bounceDamping: c = 10,
        bounceStiffness: v = 500,
        modifyTarget: S,
        min: V,
        max: A,
        restDelta: M = 0.5,
        restSpeed: D,
      }) {
        let B,
          O,
          $ = i[0],
          N = { done: !1, value: $ },
          g = (i) =>
            void 0 === V
              ? A
              : void 0 === A || Math.abs(V - i) < Math.abs(A - i)
              ? V
              : A,
          W = h * u,
          z = $ + W,
          X = void 0 === S ? z : S(z);
        X !== z && (W = X - $);
        let P = (i) => -W * Math.exp(-i / d),
          b = (i) => X + P(i),
          T = (i) => {
            let u = P(i),
              h = b(i);
            (N.done = Math.abs(u) <= M), (N.value = N.done ? X : h);
          },
          w = (i) => {
            ((i) => (void 0 !== V && i < V) || (void 0 !== A && i > A))(
              N.value
            ) &&
              ((B = i),
              (O = e9({
                keyframes: [N.value, g(N.value)],
                velocity: e0(b, i, N.value),
                damping: c,
                stiffness: v,
                restDelta: M,
                restSpeed: D,
              })));
          };
        return (
          w(0),
          {
            calculatedDuration: null,
            next: (i) => {
              let u = !1;
              return (
                O || void 0 !== B || ((u = !0), T(i), w(i)),
                void 0 !== B && i > B ? O.next(i - B) : (u || T(i), N)
              );
            },
          }
        );
      }
      let e6 = (i) => {
        let e = ({ timestamp: u }) => i(u);
        return {
          start: () => Dt.update(e, !0),
          stop: () => kt(e),
          now: () => (Lt.isProcessing ? Lt.timestamp : performance.now()),
        };
      };
      function e8(i) {
        let u = 0,
          h = i.next(u);
        for (; !h.done && u < 2e4; ) (u += 50), (h = i.next(u));
        return u >= 2e4 ? 1 / 0 : u;
      }
      let ue = { decay: e4, inertia: e4, tween: eQ, keyframes: eQ, spring: e9 };
      function it({
        autoplay: i = !0,
        delay: u = 0,
        driver: h = e6,
        keyframes: d,
        type: c = "keyframes",
        repeat: v = 0,
        repeatDelay: S = 0,
        repeatType: V = "loop",
        onPlay: A,
        onStop: M,
        onComplete: D,
        onUpdate: B,
        ...O
      }) {
        let $,
          N,
          W,
          z,
          X,
          Y = 1,
          Z = !1,
          P = () => {
            N = new Promise((i) => {
              $ = i;
            });
          };
        P();
        let _ = ue[c] || eQ;
        _ !== eQ &&
          "number" != typeof d[0] &&
          ((z = eJ([0, 100], d, { clamp: !1 })), (d = [0, 100]));
        let K = _({ ...O, keyframes: d });
        "mirror" === V &&
          (X = _({
            ...O,
            keyframes: [...d].reverse(),
            velocity: -(O.velocity || 0),
          }));
        let J = "idle",
          Q = null,
          tt = null,
          nt = null;
        null === K.calculatedDuration && v && (K.calculatedDuration = e8(K));
        let { calculatedDuration: st } = K,
          ot = 1 / 0,
          at = 1 / 0;
        null !== st && (at = (ot = st + S) * (v + 1) - S);
        let lt = 0,
          k = (i) => {
            if (null === tt) return;
            Y > 0 && (tt = Math.min(tt, i)),
              Y < 0 && (tt = Math.min(i - at / Y, tt));
            let h =
                (lt = null !== Q ? Q : Math.round(i - tt) * Y) -
                u * (Y >= 0 ? 1 : -1),
              c = Y >= 0 ? h < 0 : h > at;
            (lt = Math.max(h, 0)), "finished" === J && null === Q && (lt = at);
            let A = lt,
              M = K;
            if (v) {
              let i = lt / ot,
                u = Math.floor(i),
                h = i % 1;
              !h && i >= 1 && (h = 1), 1 === h && u--;
              let d = !!((u = Math.min(u, v + 1)) % 2);
              d &&
                ("reverse" === V
                  ? ((h = 1 - h), S && (h -= S / ot))
                  : "mirror" === V && (M = X));
              let c = U(0, 1, h);
              lt > at && (c = "reverse" === V && d ? 1 : 0), (A = c * ot);
            }
            let D = c ? { done: !1, value: d[0] } : M.next(A);
            z && (D.value = z(D.value));
            let { done: O } = D;
            c || null === st || (O = Y >= 0 ? lt >= at : lt <= 0);
            let $ = null === Q && ("finished" === J || ("running" === J && O));
            return B && B(D.value), $ && j(), D;
          },
          R = () => {
            W && W.stop(), (W = void 0);
          },
          L = () => {
            (J = "idle"), R(), $(), P(), (tt = nt = null);
          },
          j = () => {
            (J = "finished"), D && D(), R(), $();
          },
          F = () => {
            if (Z) return;
            W || (W = h(k));
            let i = W.now();
            A && A(),
              null !== Q ? (tt = i - Q) : (tt && "finished" !== J) || (tt = i),
              "finished" === J && P(),
              (nt = tt),
              (Q = null),
              (J = "running"),
              W.start();
          };
        i && F();
        let ut = {
          then: (i, u) => N.then(i, u),
          get time() {
            return et(lt);
          },
          set time(i) {
            (lt = i = t7(i)),
              null === Q && W && 0 !== Y ? (tt = W.now() - i / Y) : (Q = i);
          },
          get duration() {
            return et(
              null === K.calculatedDuration ? e8(K) : K.calculatedDuration
            );
          },
          get speed() {
            return Y;
          },
          set speed(i) {
            i !== Y && W && ((Y = i), (ut.time = et(lt)));
          },
          get state() {
            return J;
          },
          play: F,
          pause: () => {
            (J = "paused"), (Q = lt);
          },
          stop: () => {
            (Z = !0), "idle" !== J && ((J = "idle"), M && M(), L());
          },
          cancel: () => {
            null !== nt && k(nt), L();
          },
          complete: () => {
            J = "finished";
          },
          sample: (i) => ((tt = 0), k(i)),
        };
        return ut;
      }
      let he =
          ((v = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === d && (d = v()), d)),
        de = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        ce = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        pe = { type: "keyframes", duration: 0.8 },
        me = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        iu = (i, { keyframes: u }) =>
          u.length > 2
            ? pe
            : Q.has(i)
            ? i.startsWith("scale")
              ? ((i) => ({
                  type: "spring",
                  stiffness: 550,
                  damping: 0 === i ? 2 * Math.sqrt(550) : 30,
                  restSpeed: 10,
                }))(u[1])
              : ce
            : me,
        ih = (i, u) =>
          "zIndex" !== i &&
          !(
            "number" != typeof u &&
            !Array.isArray(u) &&
            ("string" != typeof u ||
              (!oe.test(u) && "0" !== u) ||
              u.startsWith("url("))
          ),
        fe = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function id(i) {
        let [u, h] = i.slice(0, -1).split("(");
        if ("drop-shadow" === u) return i;
        let [d] = h.match(ht) || [];
        if (!d) return i;
        let c = h.replace(d, ""),
          v = fe.has(u) ? 1 : 0;
        return d !== h && (v *= 100), u + "(" + v + c + ")";
      }
      let ge = /([a-z-]*)\(.*?\)/g,
        ye = {
          ...oe,
          getAnimatableNone: (i) => {
            let u = i.match(ge);
            return u ? u.map(id).join(" ") : i;
          },
        },
        ve = {
          ...Pt,
          color: Qt,
          backgroundColor: Qt,
          outlineColor: Qt,
          fill: Qt,
          stroke: Qt,
          borderColor: Qt,
          borderTopColor: Qt,
          borderRightColor: Qt,
          borderBottomColor: Qt,
          borderLeftColor: Qt,
          filter: ye,
          WebkitFilter: ye,
        },
        iv = (i) => ve[i];
      function iy(i, u) {
        let h = iv(i);
        return (
          h !== ye && (h = oe),
          h.getAnimatableNone ? h.getAnimatableNone(u) : void 0
        );
      }
      let ix = (i) => /^0[^.\s]+$/.test(i);
      function iP(i, u) {
        return i[u] || i["default"] || i;
      }
      let ib =
        (i, u, h, d = {}) =>
        (c) => {
          let v = iP(d, i) || {},
            S = v.delay || d.delay || 0,
            { elapsed: V = 0 } = d;
          V -= t7(S);
          let A = (function (i, u, h, d) {
              let c,
                v,
                S = ih(u, h);
              c = Array.isArray(h) ? [...h] : [null, h];
              let V = void 0 !== d.from ? d.from : i.get(),
                A = [];
              for (let D = 0; D < c.length; D++) {
                var M;
                null === c[D] && (c[D] = 0 === D ? V : c[D - 1]),
                  ("number" == typeof (M = c[D])
                    ? 0 === M
                    : null !== M
                    ? "none" === M || "0" === M || ix(M)
                    : void 0) && A.push(D),
                  "string" == typeof c[D] &&
                    "none" !== c[D] &&
                    "0" !== c[D] &&
                    (v = c[D]);
              }
              if (S && A.length && v)
                for (let D = 0; D < A.length; D++) c[A[D]] = iy(u, v);
              return c;
            })(u, i, h, v),
            M = A[0],
            D = A[A.length - 1],
            B = ih(i, M),
            O = ih(i, D);
          tW(
            B === O,
            `You are trying to animate ${i} from "${M}" to "${D}". ${M} is not an animatable value - to enable this animation set ${M} to a value animatable to ${D} via the \`style\` property.`
          );
          let $ = {
            keyframes: A,
            velocity: u.getVelocity(),
            ease: "easeOut",
            ...v,
            delay: -V,
            onUpdate: (i) => {
              u.set(i), v.onUpdate && v.onUpdate(i);
            },
            onComplete: () => {
              c(), v.onComplete && v.onComplete();
            },
          };
          if (
            (!(function ({
              when: i,
              delay: u,
              delayChildren: h,
              staggerChildren: d,
              staggerDirection: c,
              repeat: v,
              repeatType: S,
              repeatDelay: V,
              from: A,
              elapsed: M,
              ...D
            }) {
              return !!Object.keys(D).length;
            })(v) && ($ = { ...$, ...iu(i, $) }),
            $.duration && ($.duration = t7($.duration)),
            $.repeatDelay && ($.repeatDelay = t7($.repeatDelay)),
            !B || !O || Ut || !1 === v.type)
          )
            return (function ({
              keyframes: i,
              delay: u,
              onUpdate: h,
              onComplete: d,
            }) {
              let r = () => (
                h && h(i[i.length - 1]),
                d && d(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: tW,
                  pause: tW,
                  stop: tW,
                  then: (i) => (i(), Promise.resolve()),
                  cancel: tW,
                  complete: tW,
                }
              );
              return u
                ? it({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: u,
                    onComplete: r,
                  })
                : r();
            })(Ut ? { ...$, delay: 0 } : $);
          if (
            u.owner &&
            u.owner.current instanceof HTMLElement &&
            !u.owner.getProps().onUpdate
          ) {
            let h = (function (i, u, { onUpdate: h, onComplete: d, ...c }) {
              let v, S;
              if (
                !he() ||
                !de.has(u) ||
                c.repeatDelay ||
                "mirror" === c.repeatType ||
                0 === c.damping ||
                "inertia" === c.type
              )
                return !1;
              let V = !1,
                l = () => {
                  S = new Promise((i) => {
                    v = i;
                  });
                };
              l();
              let { keyframes: A, duration: M = 300, ease: D, times: B } = c;
              if (
                ((i, u) =>
                  "spring" === u.type ||
                  "backgroundColor" === i ||
                  !(function t(i) {
                    return !!(
                      !i ||
                      ("string" == typeof i && It[i]) ||
                      ei(i) ||
                      (Array.isArray(i) && i.every(t))
                    );
                  })(u.ease))(u, c)
              ) {
                let i = it({ ...c, repeat: 0, delay: 0 }),
                  u = { done: !1, value: A[0] },
                  h = [],
                  d = 0;
                for (; !u.done && d < 2e4; )
                  (u = i.sample(d)), h.push(u.value), (d += 10);
                (B = void 0), (A = h), (M = d - 10), (D = "linear");
              }
              let O = (function (
                  i,
                  u,
                  h,
                  {
                    delay: d = 0,
                    duration: c,
                    repeat: v = 0,
                    repeatType: S = "loop",
                    ease: V,
                    times: A,
                  } = {}
                ) {
                  let M = { [u]: h };
                  A && (M.offset = A);
                  let D = (function t(i) {
                    if (i)
                      return ei(i)
                        ? en(i)
                        : Array.isArray(i)
                        ? i.map(t)
                        : It[i];
                  })(V);
                  return (
                    Array.isArray(D) && (M.easing = D),
                    i.animate(M, {
                      delay: d,
                      duration: c,
                      easing: Array.isArray(D) ? "linear" : D,
                      fill: "both",
                      iterations: v + 1,
                      direction: "reverse" === S ? "alternate" : "normal",
                    })
                  );
                })(i.owner.current, u, A, {
                  ...c,
                  duration: M,
                  ease: D,
                  times: B,
                }),
                m = () => O.cancel(),
                f = () => {
                  Dt.update(m), v(), l();
                };
              return (
                (O.onfinish = () => {
                  i.set(
                    (function (i, { repeat: u, repeatType: h = "loop" }) {
                      return i[
                        u && "loop" !== h && u % 2 == 1 ? 0 : i.length - 1
                      ];
                    })(A, c)
                  ),
                    d && d(),
                    f();
                }),
                {
                  then: (i, u) => S.then(i, u),
                  attachTimeline: (i) => (
                    (O.timeline = i), (O.onfinish = null), tW
                  ),
                  get time() {
                    return et(O.currentTime || 0);
                  },
                  set time(i) {
                    O.currentTime = t7(i);
                  },
                  get speed() {
                    return O.playbackRate;
                  },
                  set speed(i) {
                    O.playbackRate = i;
                  },
                  get duration() {
                    return et(M);
                  },
                  play: () => {
                    V || (O.play(), kt(m));
                  },
                  pause: () => O.pause(),
                  stop: () => {
                    if (((V = !0), "idle" === O.playState)) return;
                    let { currentTime: u } = O;
                    if (u) {
                      let h = it({ ...c, autoplay: !1 });
                      i.setWithVelocity(
                        h.sample(u - 10).value,
                        h.sample(u).value,
                        10
                      );
                    }
                    f();
                  },
                  complete: () => O.finish(),
                  cancel: f,
                }
              );
            })(u, i, $);
            if (h) return h;
          }
          return it($);
        };
      function iT(i) {
        return !(!R(i) || !i.add);
      }
      let iw = (i) => /^\-?\d*\.?\d+$/.test(i);
      function iA(i, u) {
        -1 === i.indexOf(u) && i.push(u);
      }
      function iV(i, u) {
        let h = i.indexOf(u);
        h > -1 && i.splice(h, 1);
      }
      class iS {
        constructor() {
          this.subscriptions = [];
        }
        add(i) {
          return iA(this.subscriptions, i), () => iV(this.subscriptions, i);
        }
        notify(i, u, h) {
          let d = this.subscriptions.length;
          if (d)
            if (1 === d) this.subscriptions[0](i, u, h);
            else
              for (let c = 0; c < d; c++) {
                let d = this.subscriptions[c];
                d && d(i, u, h);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let xe = { current: void 0 };
      class iM {
        constructor(i, u = {}) {
          (this.version = "10.16.0"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (i, u = !0) => {
              (this.prev = this.current), (this.current = i);
              let { delta: h, timestamp: d } = Lt;
              this.lastUpdated !== d &&
                ((this.timeDelta = h),
                (this.lastUpdated = d),
                Dt.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                u &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              Dt.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: i }) => {
              i !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = i),
            (this.canTrackVelocity = ((i) => !isNaN(parseFloat(i)))(
              this.current
            )),
            (this.owner = u.owner);
        }
        onChange(i) {
          return this.on("change", i);
        }
        on(i, u) {
          this.events[i] || (this.events[i] = new iS());
          let h = this.events[i].add(u);
          return "change" === i
            ? () => {
                h(),
                  Dt.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : h;
        }
        clearListeners() {
          for (let i in this.events) this.events[i].clear();
        }
        attach(i, u) {
          (this.passiveEffect = i), (this.stopPassiveEffect = u);
        }
        set(i, u = !0) {
          u && this.passiveEffect
            ? this.passiveEffect(i, this.updateAndNotify)
            : this.updateAndNotify(i, u);
        }
        setWithVelocity(i, u, h) {
          this.set(u), (this.prev = i), (this.timeDelta = h);
        }
        jump(i) {
          this.updateAndNotify(i),
            (this.prev = i),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return xe.current && xe.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var i, u;
          return this.canTrackVelocity
            ? ((i = parseFloat(this.current) - parseFloat(this.prev)),
              (u = this.timeDelta) ? (1e3 / u) * i : 0)
            : 0;
        }
        start(i) {
          return (
            this.stop(),
            new Promise((u) => {
              (this.hasAnimated = !0),
                (this.animation = i(u)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function iD(i, u) {
        return new iM(i, u);
      }
      let ik = (i) => (u) => u.test(i),
        Pe = [
          at,
          ft,
          mt,
          pt,
          yt,
          gt,
          { test: (i) => "auto" === i, parse: (i) => i },
        ],
        iL = (i) => Pe.find(ik(i)),
        be = [...Pe, Qt, oe],
        iF = (i) => be.find(ik(i));
      function iB(i, u, { delay: h = 0, transitionOverride: d, type: c } = {}) {
        let {
            transition: v = i.getDefaultTransition(),
            transitionEnd: S,
            ...V
          } = i.makeTargetAnimatable(u),
          A = i.getValue("willChange");
        d && (v = d);
        let M = [],
          D = c && i.animationState && i.animationState.getState()[c];
        for (let B in V) {
          let u = i.getValue(B),
            d = V[B];
          if (
            !u ||
            void 0 === d ||
            (D &&
              (function ({ protectedKeys: i, needsAnimating: u }, h) {
                let d = i.hasOwnProperty(h) && !0 !== u[h];
                return (u[h] = !1), d;
              })(D, B))
          )
            continue;
          let c = { delay: h, elapsed: 0, ...v };
          if (window.HandoffAppearAnimations && !u.hasAnimated) {
            let h = i.getProps()[Ot];
            h && (c.elapsed = window.HandoffAppearAnimations(h, B, u, Dt));
          }
          u.start(
            ib(B, u, d, i.shouldReduceMotion && Q.has(B) ? { type: !1 } : c)
          );
          let S = u.animation;
          iT(A) && (A.add(B), S.then(() => A.remove(B))), M.push(S);
        }
        return (
          S &&
            Promise.all(M).then(() => {
              S &&
                (function (i, u) {
                  let h = t6(i, u),
                    {
                      transitionEnd: d = {},
                      transition: c = {},
                      ...v
                    } = h ? i.makeTargetAnimatable(h, !1) : {};
                  for (let S in (v = { ...v, ...d })) {
                    let u = tA(v[S]);
                    i.hasValue(S) ? i.getValue(S).set(u) : i.addValue(S, iD(u));
                  }
                })(i, S);
            }),
          M
        );
      }
      function iO(i, u, h = {}) {
        let d = t6(i, u, h.custom),
          { transition: c = i.getDefaultTransition() || {} } = d || {};
        h.transitionOverride && (c = h.transitionOverride);
        let v = d ? () => Promise.all(iB(i, d, h)) : () => Promise.resolve(),
          S =
            i.variantChildren && i.variantChildren.size
              ? (d = 0) => {
                  let {
                    delayChildren: v = 0,
                    staggerChildren: S,
                    staggerDirection: V,
                  } = c;
                  return (function (i, u, h = 0, d = 0, c = 1, v) {
                    let S = [],
                      V = (i.variantChildren.size - 1) * d,
                      A = 1 === c ? (i = 0) => i * d : (i = 0) => V - i * d;
                    return (
                      Array.from(i.variantChildren)
                        .sort(iI)
                        .forEach((i, d) => {
                          i.notify("AnimationStart", u),
                            S.push(
                              iO(i, u, { ...v, delay: h + A(d) }).then(() =>
                                i.notify("AnimationComplete", u)
                              )
                            );
                        }),
                      Promise.all(S)
                    );
                  })(i, u, v + d, S, V, h);
                }
              : () => Promise.resolve(),
          { when: V } = c;
        if (!V) return Promise.all([v(), S(h.delay)]);
        {
          let [i, u] = "beforeChildren" === V ? [v, S] : [S, v];
          return i().then(() => u());
        }
      }
      function iI(i, u) {
        return i.sortNodePosition(u);
      }
      let Te = [...$].reverse(),
        Se = $.length;
      function i$(i = !1) {
        return {
          isActive: i,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let we = 0;
      let iY = (i, u) => Math.abs(i - u);
      class iX {
        constructor(i, u, { transformPagePoint: h } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              var i, u;
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              let h = iZ(this.lastMoveEventInfo, this.history),
                d = null !== this.startEvent,
                c =
                  ((i = h.offset),
                  (u = { x: 0, y: 0 }),
                  Math.sqrt(iY(i.x, u.x) ** 2 + iY(i.y, u.y) ** 2) >= 3);
              if (!d && !c) return;
              let { point: v } = h,
                { timestamp: S } = Lt;
              this.history.push({ ...v, timestamp: S });
              let { onStart: V, onMove: A } = this.handlers;
              d ||
                (V && V(this.lastMoveEvent, h),
                (this.startEvent = this.lastMoveEvent)),
                A && A(this.lastMoveEvent, h);
            }),
            (this.handlePointerMove = (i, u) => {
              (this.lastMoveEvent = i),
                (this.lastMoveEventInfo = iG(u, this.transformPagePoint)),
                Dt.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (i, u) => {
              if ((this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo))
                return;
              let { onEnd: h, onSessionEnd: d } = this.handlers,
                c = iZ(
                  "pointercancel" === i.type
                    ? this.lastMoveEventInfo
                    : iG(u, this.transformPagePoint),
                  this.history
                );
              this.startEvent && h && h(i, c), d && d(i, c);
            }),
            !tD(i))
          )
            return;
          (this.handlers = u), (this.transformPagePoint = h);
          let d = iG(tk(i), this.transformPagePoint),
            { point: c } = d,
            { timestamp: v } = Lt;
          this.history = [{ ...c, timestamp: v }];
          let { onSessionStart: S } = u;
          S && S(i, iZ(d, this.history)),
            (this.removeListeners = tF(
              tL(window, "pointermove", this.handlePointerMove),
              tL(window, "pointerup", this.handlePointerUp),
              tL(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(i) {
          this.handlers = i;
        }
        end() {
          this.removeListeners && this.removeListeners(), kt(this.updatePoint);
        }
      }
      function iG(i, u) {
        return u ? { point: u(i.point) } : i;
      }
      function iq(i, u) {
        return { x: i.x - u.x, y: i.y - u.y };
      }
      function iZ({ point: i }, u) {
        return {
          point: i,
          delta: iq(i, iK(u)),
          offset: iq(i, u[0]),
          velocity: (function (i, u) {
            if (i.length < 2) return { x: 0, y: 0 };
            let h = i.length - 1,
              d = null,
              c = iK(i);
            for (
              ;
              h >= 0 && ((d = i[h]), !(c.timestamp - d.timestamp > t7(0.1)));

            )
              h--;
            if (!d) return { x: 0, y: 0 };
            let v = et(c.timestamp - d.timestamp);
            if (0 === v) return { x: 0, y: 0 };
            let S = { x: (c.x - d.x) / v, y: (c.y - d.y) / v };
            return S.x === 1 / 0 && (S.x = 0), S.y === 1 / 0 && (S.y = 0), S;
          })(u),
        };
      }
      function iK(i) {
        return i[i.length - 1];
      }
      function i_(i) {
        return i.max - i.min;
      }
      function iJ(i, u = 0, h = 0.01) {
        return Math.abs(i - u) <= h;
      }
      function iQ(i, u, h, d = 0.5) {
        (i.origin = d),
          (i.originPoint = eM(u.min, u.max, i.origin)),
          (i.scale = i_(h) / i_(u)),
          (iJ(i.scale, 1, 1e-4) || isNaN(i.scale)) && (i.scale = 1),
          (i.translate = eM(h.min, h.max, i.origin) - i.originPoint),
          (iJ(i.translate) || isNaN(i.translate)) && (i.translate = 0);
      }
      function i0(i, u, h, d) {
        iQ(i.x, u.x, h.x, d ? d.originX : void 0),
          iQ(i.y, u.y, h.y, d ? d.originY : void 0);
      }
      function i1(i, u, h) {
        (i.min = h.min + u.min), (i.max = i.min + i_(u));
      }
      function i5(i, u, h) {
        (i.min = u.min - h.min), (i.max = i.min + i_(u));
      }
      function i2(i, u, h) {
        i5(i.x, u.x, h.x), i5(i.y, u.y, h.y);
      }
      function i3(i, u, h) {
        return {
          min: void 0 !== u ? i.min + u : void 0,
          max: void 0 !== h ? i.max + h - (i.max - i.min) : void 0,
        };
      }
      function i9(i, u) {
        let h = u.min - i.min,
          d = u.max - i.max;
        return (
          u.max - u.min < i.max - i.min && ([h, d] = [d, h]), { min: h, max: d }
        );
      }
      function i4(i, u, h) {
        return { min: i6(i, u), max: i6(i, h) };
      }
      function i6(i, u) {
        return "number" == typeof i ? i : i[u] || 0;
      }
      let i7 = () => ({
          x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        }),
        ne = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
      function ni(i) {
        return [i("x"), i("y")];
      }
      function nn({ top: i, left: u, right: h, bottom: d }) {
        return { x: { min: u, max: h }, y: { min: i, max: d } };
      }
      function nr(i) {
        return void 0 === i || 1 === i;
      }
      function ns({ scale: i, scaleX: u, scaleY: h }) {
        return !nr(i) || !nr(u) || !nr(h);
      }
      function no(i) {
        return ns(i) || na(i) || i.z || i.rotate || i.rotateX || i.rotateY;
      }
      function na(i) {
        var u, h;
        return ((u = i.x) && "0%" !== u) || ((h = i.y) && "0%" !== h);
      }
      function nl(i, u, h, d, c) {
        return void 0 !== c && (i = d + c * (i - d)), d + h * (i - d) + u;
      }
      function nu(i, u = 0, h = 1, d, c) {
        (i.min = nl(i.min, u, h, d, c)), (i.max = nl(i.max, u, h, d, c));
      }
      function nh(i, { x: u, y: h }) {
        nu(i.x, u.translate, u.scale, u.originPoint),
          nu(i.y, h.translate, h.scale, h.originPoint);
      }
      function nc(i) {
        return Number.isInteger(i) || i > 1.0000000000001 || i < 0.999999999999
          ? i
          : 1;
      }
      function nd(i, u) {
        (i.min = i.min + u), (i.max = i.max + u);
      }
      function np(i, u, [h, d, c]) {
        let v = void 0 !== u[c] ? u[c] : 0.5,
          S = eM(i.min, i.max, v);
        nu(i, u[h], u[d], S, u.scale);
      }
      let Ve = ["x", "scaleX", "originX"],
        Ae = ["y", "scaleY", "originY"];
      function ng(i, u) {
        np(i.x, u, Ve), np(i.y, u, Ae);
      }
      function nv(i, u) {
        return nn(
          (function (i, u) {
            if (!u) return i;
            let h = u({ x: i.left, y: i.top }),
              d = u({ x: i.right, y: i.bottom });
            return { top: h.y, left: h.x, bottom: d.y, right: d.x };
          })(i.getBoundingClientRect(), u)
        );
      }
      let Ee = new WeakMap();
      class nx {
        constructor(i) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = ne()),
            (this.visualElement = i);
        }
        start(i, { snapToCursor: u = !1 } = {}) {
          let { presenceContext: h } = this.visualElement;
          (h && !1 === h.isPresent) ||
            (this.panSession = new iX(
              i,
              {
                onSessionStart: (i) => {
                  this.stopAnimation(),
                    u && this.snapToCursor(tk(i, "page").point);
                },
                onStart: (i, u) => {
                  let {
                    drag: h,
                    dragPropagation: d,
                    onDragStart: c,
                  } = this.getProps();
                  if (
                    h &&
                    !d &&
                    (this.openGlobalLock && this.openGlobalLock(),
                    (this.openGlobalLock = tU(h)),
                    !this.openGlobalLock)
                  )
                    return;
                  (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                      ((this.visualElement.projection.isAnimationBlocked = !0),
                      (this.visualElement.projection.target = void 0)),
                    ni((i) => {
                      let u = this.getAxisMotionValue(i).get() || 0;
                      if (mt.test(u)) {
                        let { projection: h } = this.visualElement;
                        if (h && h.layout) {
                          let d = h.layout.layoutBox[i];
                          if (d) {
                            let i = i_(d);
                            u = (parseFloat(u) / 100) * i;
                          }
                        }
                      }
                      this.originPoint[i] = u;
                    }),
                    c && Dt.update(() => c(i, u), !1, !0);
                  let { animationState: v } = this.visualElement;
                  v && v.setActive("whileDrag", !0);
                },
                onMove: (i, u) => {
                  let {
                    dragPropagation: h,
                    dragDirectionLock: d,
                    onDirectionLock: c,
                    onDrag: v,
                  } = this.getProps();
                  if (!h && !this.openGlobalLock) return;
                  let { offset: S } = u;
                  if (d && null === this.currentDirection)
                    return (
                      (this.currentDirection = (function (i, u = 10) {
                        let h = null;
                        return (
                          Math.abs(i.y) > u
                            ? (h = "y")
                            : Math.abs(i.x) > u && (h = "x"),
                          h
                        );
                      })(S)),
                      void (
                        null !== this.currentDirection &&
                        c &&
                        c(this.currentDirection)
                      )
                    );
                  this.updateAxis("x", u.point, S),
                    this.updateAxis("y", u.point, S),
                    this.visualElement.render(),
                    v && v(i, u);
                },
                onSessionEnd: (i, u) => this.stop(i, u),
              },
              { transformPagePoint: this.visualElement.getTransformPagePoint() }
            ));
        }
        stop(i, u) {
          let h = this.isDragging;
          if ((this.cancel(), !h)) return;
          let { velocity: d } = u;
          this.startAnimation(d);
          let { onDragEnd: c } = this.getProps();
          c && Dt.update(() => c(i, u));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: i, animationState: u } = this.visualElement;
          i && (i.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: h } = this.getProps();
          !h &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            u && u.setActive("whileDrag", !1);
        }
        updateAxis(i, u, h) {
          let { drag: d } = this.getProps();
          if (!h || !nP(i, d, this.currentDirection)) return;
          let c = this.getAxisMotionValue(i),
            v = this.originPoint[i] + h[i];
          this.constraints &&
            this.constraints[i] &&
            (v = (function (i, { min: u, max: h }, d) {
              return (
                void 0 !== u && i < u
                  ? (i = d ? eM(u, i, d.min) : Math.max(i, u))
                  : void 0 !== h &&
                    i > h &&
                    (i = d ? eM(h, i, d.max) : Math.min(i, h)),
                i
              );
            })(v, this.constraints[i], this.elastic[i])),
            c.set(v);
        }
        resolveConstraints() {
          let { dragConstraints: i, dragElastic: u } = this.getProps(),
            { layout: h } = this.visualElement.projection || {},
            d = this.constraints;
          i && p(i)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : (this.constraints =
                !(!i || !h) &&
                (function (i, { top: u, left: h, bottom: d, right: c }) {
                  return { x: i3(i.x, h, c), y: i3(i.y, u, d) };
                })(h.layoutBox, i)),
            (this.elastic = (function (i = 0.35) {
              return (
                !1 === i ? (i = 0) : !0 === i && (i = 0.35),
                { x: i4(i, "left", "right"), y: i4(i, "top", "bottom") }
              );
            })(u)),
            d !== this.constraints &&
              h &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              ni((i) => {
                this.getAxisMotionValue(i) &&
                  (this.constraints[i] = (function (i, u) {
                    let h = {};
                    return (
                      void 0 !== u.min && (h.min = u.min - i.min),
                      void 0 !== u.max && (h.max = u.max - i.min),
                      h
                    );
                  })(h.layoutBox[i], this.constraints[i]));
              });
        }
        resolveRefConstraints() {
          var i;
          let { dragConstraints: u, onMeasureDragConstraints: h } =
            this.getProps();
          if (!u || !p(u)) return !1;
          let d = u.current;
          tW(
            null !== d,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: c } = this.visualElement;
          if (!c || !c.layout) return !1;
          let v = (function (i, u, h) {
              let d = nv(i, h),
                { scroll: c } = u;
              return c && (nd(d.x, c.offset.x), nd(d.y, c.offset.y)), d;
            })(d, c.root, this.visualElement.getTransformPagePoint()),
            S = { x: i9((i = c.layout.layoutBox).x, v.x), y: i9(i.y, v.y) };
          if (h) {
            let i = h(
              (function ({ x: i, y: u }) {
                return { top: u.min, right: i.max, bottom: u.max, left: i.min };
              })(S)
            );
            (this.hasMutatedConstraints = !!i), i && (S = nn(i));
          }
          return S;
        }
        startAnimation(i) {
          let {
              drag: u,
              dragMomentum: h,
              dragElastic: d,
              dragTransition: c,
              dragSnapToOrigin: v,
              onDragTransitionEnd: S,
            } = this.getProps(),
            V = this.constraints || {};
          return Promise.all(
            ni((S) => {
              if (!nP(S, u, this.currentDirection)) return;
              let A = (V && V[S]) || {};
              v && (A = { min: 0, max: 0 });
              let M = {
                type: "inertia",
                velocity: h ? i[S] : 0,
                bounceStiffness: d ? 200 : 1e6,
                bounceDamping: d ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...c,
                ...A,
              };
              return this.startAxisValueAnimation(S, M);
            })
          ).then(S);
        }
        startAxisValueAnimation(i, u) {
          let h = this.getAxisMotionValue(i);
          return h.start(ib(i, h, 0, u));
        }
        stopAnimation() {
          ni((i) => this.getAxisMotionValue(i).stop());
        }
        getAxisMotionValue(i) {
          let u = "_drag" + i.toUpperCase(),
            h = this.visualElement.getProps();
          return (
            h[u] ||
            this.visualElement.getValue(
              i,
              (h.initial ? h.initial[i] : void 0) || 0
            )
          );
        }
        snapToCursor(i) {
          ni((u) => {
            let { drag: h } = this.getProps();
            if (!nP(u, h, this.currentDirection)) return;
            let { projection: d } = this.visualElement,
              c = this.getAxisMotionValue(u);
            if (d && d.layout) {
              let { min: h, max: v } = d.layout.layoutBox[u];
              c.set(i[u] - eM(h, v, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: i, dragConstraints: u } = this.getProps(),
            { projection: h } = this.visualElement;
          if (!p(u) || !h || !this.constraints) return;
          this.stopAnimation();
          let d = { x: 0, y: 0 };
          ni((i) => {
            let u = this.getAxisMotionValue(i);
            if (u) {
              let h = u.get();
              d[i] = (function (i, u) {
                let h = 0.5,
                  d = i_(i),
                  c = i_(u);
                return (
                  c > d
                    ? (h = eK(u.min, u.max - d, i.min))
                    : d > c && (h = eK(i.min, i.max - c, u.min)),
                  U(0, 1, h)
                );
              })({ min: h, max: h }, this.constraints[i]);
            }
          });
          let { transformTemplate: c } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = c ? c({}, "") : "none"),
            h.root && h.root.updateScroll(),
            h.updateLayout(),
            this.resolveConstraints(),
            ni((u) => {
              if (!nP(u, i, null)) return;
              let h = this.getAxisMotionValue(u),
                { min: c, max: v } = this.constraints[u];
              h.set(eM(c, v, d[u]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          Ee.set(this.visualElement, this);
          let i = tL(this.visualElement.current, "pointerdown", (i) => {
              let { drag: u, dragListener: h = !0 } = this.getProps();
              u && h && this.start(i);
            }),
            e = () => {
              let { dragConstraints: i } = this.getProps();
              p(i) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: u } = this.visualElement,
            h = u.addEventListener("measure", e);
          u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()),
            e();
          let d = tM(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            c = u.addEventListener(
              "didUpdate",
              ({ delta: i, hasLayoutChanged: u }) => {
                this.isDragging &&
                  u &&
                  (ni((u) => {
                    let h = this.getAxisMotionValue(u);
                    h &&
                      ((this.originPoint[u] += i[u].translate),
                      h.set(h.get() + i[u].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            d(), i(), h(), c && c();
          };
        }
        getProps() {
          let i = this.visualElement.getProps(),
            {
              drag: u = !1,
              dragDirectionLock: h = !1,
              dragPropagation: d = !1,
              dragConstraints: c = !1,
              dragElastic: v = 0.35,
              dragMomentum: S = !0,
            } = i;
          return {
            ...i,
            drag: u,
            dragDirectionLock: h,
            dragPropagation: d,
            dragConstraints: c,
            dragElastic: v,
            dragMomentum: S,
          };
        }
      }
      function nP(i, u, h) {
        return !((!0 !== u && u !== i) || (null !== h && h !== i));
      }
      let nT = (i) => (u, h) => {
        i && Dt.update(() => i(u, h));
      };
      let Ce = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function nV(i, u) {
        return u.max === u.min ? 0 : (i / (u.max - u.min)) * 100;
      }
      let Me = {
        correct: (i, u) => {
          if (!u.target) return i;
          if ("string" == typeof i) {
            if (!ft.test(i)) return i;
            i = parseFloat(i);
          }
          return `${nV(i, u.target.x)}% ${nV(i, u.target.y)}%`;
        },
      };
      class nE extends S.Component {
        componentDidMount() {
          let {
              visualElement: i,
              layoutGroup: u,
              switchLayoutGroup: h,
              layoutId: d,
            } = this.props,
            { projection: c } = i;
          Object.assign(K, De),
            c &&
              (u.group && u.group.add(c),
              h && h.register && d && h.register(c),
              c.root.didUpdate(),
              c.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              c.setOptions({
                ...c.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (Ce.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(i) {
          let {
              layoutDependency: u,
              visualElement: h,
              drag: d,
              isPresent: c,
            } = this.props,
            v = h.projection;
          return (
            v &&
              ((v.isPresent = c),
              d || i.layoutDependency !== u || void 0 === u
                ? v.willUpdate()
                : this.safeToRemove(),
              i.isPresent === c ||
                (c
                  ? v.promote()
                  : v.relegate() ||
                    Dt.postRender(() => {
                      let i = v.getStack();
                      (i && i.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: i } = this.props.visualElement;
          i &&
            (i.root.didUpdate(),
            queueMicrotask(() => {
              !i.currentAnimation && i.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: i,
              layoutGroup: u,
              switchLayoutGroup: h,
            } = this.props,
            { projection: d } = i;
          d &&
            (d.scheduleCheckAfterUnmount(),
            u && u.group && u.group.remove(d),
            h && h.deregister && h.deregister(d));
        }
        safeToRemove() {
          let { safeToRemove: i } = this.props;
          i && i();
        }
        render() {
          return null;
        }
      }
      function nC(i) {
        let [u, h] = (function () {
            let i = (0, S.useContext)(M);
            if (null === i) return [!0, null];
            let { isPresent: u, onExitComplete: h, register: d } = i,
              c = (0, S.useId)();
            return (
              (0, S.useEffect)(() => d(c), []),
              !u && h ? [!1, () => h && h(c)] : [!0]
            );
          })(),
          d = (0, S.useContext)(X);
        return S.createElement(nE, {
          ...i,
          layoutGroup: d,
          switchLayoutGroup: (0, S.useContext)(Y),
          isPresent: u,
          safeToRemove: h,
        });
      }
      let De = {
          borderRadius: {
            ...Me,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: Me,
          borderTopRightRadius: Me,
          borderBottomLeftRadius: Me,
          borderBottomRightRadius: Me,
          boxShadow: {
            correct: (i, { treeScale: u, projectionDelta: h }) => {
              let d = oe.parse(i);
              if (d.length > 5) return i;
              let c = oe.createTransformer(i),
                v = "number" != typeof d[0] ? 1 : 0,
                S = h.x.scale * u.x,
                V = h.y.scale * u.y;
              (d[0 + v] /= S), (d[1 + v] /= V);
              let A = eM(S, V, 0.5);
              return (
                "number" == typeof d[2 + v] && (d[2 + v] /= A),
                "number" == typeof d[3 + v] && (d[3 + v] /= A),
                c(d)
              );
            },
          },
        },
        ke = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Le = ke.length,
        nR = (i) => ("string" == typeof i ? parseFloat(i) : i),
        nL = (i) => "number" == typeof i || ft.test(i);
      function nj(i, u) {
        return void 0 !== i[u] ? i[u] : i.borderRadius;
      }
      let Re = nO(0, 0.5, zt),
        je = nO(0.5, 0.95, tW);
      function nO(i, u, h) {
        return (d) => (d < i ? 0 : d > u ? 1 : h(eK(i, u, d)));
      }
      function nI(i, u) {
        (i.min = u.min), (i.max = u.max);
      }
      function nU(i, u) {
        nI(i.x, u.x), nI(i.y, u.y);
      }
      function nN(i, u, h, d, c) {
        return (
          (i = d + (1 / h) * ((i -= u) - d)),
          void 0 !== c && (i = d + (1 / c) * (i - d)),
          i
        );
      }
      function n$(i, u, [h, d, c], v, S) {
        !(function (i, u = 0, h = 1, d = 0.5, c, v = i, S = i) {
          if (
            (mt.test(u) &&
              ((u = parseFloat(u)), (u = eM(S.min, S.max, u / 100) - S.min)),
            "number" != typeof u)
          )
            return;
          let V = eM(v.min, v.max, d);
          i === v && (V -= u),
            (i.min = nN(i.min, u, h, V, c)),
            (i.max = nN(i.max, u, h, V, c));
        })(i, u[h], u[d], u[c], u.scale, v, S);
      }
      let Fe = ["x", "scaleX", "originX"],
        Be = ["y", "scaleY", "originY"];
      function nz(i, u, h, d) {
        n$(i.x, u, Fe, h ? h.x : void 0, d ? d.x : void 0),
          n$(i.y, u, Be, h ? h.y : void 0, d ? d.y : void 0);
      }
      function nY(i) {
        return 0 === i.translate && 1 === i.scale;
      }
      function nX(i) {
        return nY(i.x) && nY(i.y);
      }
      function nG(i, u) {
        return (
          Math.round(i.x.min) === Math.round(u.x.min) &&
          Math.round(i.x.max) === Math.round(u.x.max) &&
          Math.round(i.y.min) === Math.round(u.y.min) &&
          Math.round(i.y.max) === Math.round(u.y.max)
        );
      }
      function nq(i) {
        return i_(i.x) / i_(i.y);
      }
      class nZ {
        constructor() {
          this.members = [];
        }
        add(i) {
          iA(this.members, i), i.scheduleRender();
        }
        remove(i) {
          if (
            (iV(this.members, i),
            i === this.prevLead && (this.prevLead = void 0),
            i === this.lead)
          ) {
            let i = this.members[this.members.length - 1];
            i && this.promote(i);
          }
        }
        relegate(i) {
          let u,
            h = this.members.findIndex((u) => i === u);
          if (0 === h) return !1;
          for (let d = h; d >= 0; d--) {
            let i = this.members[d];
            if (!1 !== i.isPresent) {
              u = i;
              break;
            }
          }
          return !!u && (this.promote(u), !0);
        }
        promote(i, u) {
          let h = this.lead;
          if (i !== h && ((this.prevLead = h), (this.lead = i), i.show(), h)) {
            h.instance && h.scheduleRender(),
              i.scheduleRender(),
              (i.resumeFrom = h),
              u && (i.resumeFrom.preserveOpacity = !0),
              h.snapshot &&
                ((i.snapshot = h.snapshot),
                (i.snapshot.latestValues =
                  h.animationValues || h.latestValues)),
              i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
            let { crossfade: d } = i.options;
            !1 === d && h.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((i) => {
            let { options: u, resumingFrom: h } = i;
            u.onExitComplete && u.onExitComplete(),
              h && h.options.onExitComplete && h.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((i) => {
            i.instance && i.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function nK(i, u, h) {
        let d = "",
          c = i.x.translate / u.x,
          v = i.y.translate / u.y;
        if (
          ((c || v) && (d = `translate3d(${c}px, ${v}px, 0) `),
          (1 !== u.x || 1 !== u.y) && (d += `scale(${1 / u.x}, ${1 / u.y}) `),
          h)
        ) {
          let { rotate: i, rotateX: u, rotateY: c } = h;
          i && (d += `rotate(${i}deg) `),
            u && (d += `rotateX(${u}deg) `),
            c && (d += `rotateY(${c}deg) `);
        }
        let S = i.x.scale * u.x,
          V = i.y.scale * u.y;
        return (1 !== S || 1 !== V) && (d += `scale(${S}, ${V})`), d || "none";
      }
      let n_ = (i, u) => i.depth - u.depth;
      class nJ {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(i) {
          iA(this.children, i), (this.isDirty = !0);
        }
        remove(i) {
          iV(this.children, i), (this.isDirty = !0);
        }
        forEach(i) {
          this.isDirty && this.children.sort(n_),
            (this.isDirty = !1),
            this.children.forEach(i);
        }
      }
      let Oe = ["", "X", "Y", "Z"],
        Ue = 0,
        Ie = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function n5({
        attachResizeListener: i,
        defaultParent: u,
        measureScroll: h,
        checkIsScrollRoot: d,
        resetTransform: c,
      }) {
        return class {
          constructor(i = {}, h = null == u ? void 0 : u()) {
            (this.id = Ue++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (Ie.totalNodes =
                  Ie.resolvedTargetDeltas =
                  Ie.recalculatedProjection =
                    0),
                  this.nodes.forEach(n9),
                  this.nodes.forEach(ri),
                  this.nodes.forEach(rn),
                  this.nodes.forEach(n4),
                  window.MotionDebug && window.MotionDebug.record(Ie);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = i),
              (this.root = h ? h.root || h : this),
              (this.path = h ? [...h.path, h] : []),
              (this.parent = h),
              (this.depth = h ? h.depth + 1 : 0);
            for (let u = 0; u < this.path.length; u++)
              this.path[u].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nJ());
          }
          addEventListener(i, u) {
            return (
              this.eventHandlers.has(i) || this.eventHandlers.set(i, new iS()),
              this.eventHandlers.get(i).add(u)
            );
          }
          notifyListeners(i, ...u) {
            let h = this.eventHandlers.get(i);
            h && h.notify(...u);
          }
          hasListeners(i) {
            return this.eventHandlers.has(i);
          }
          mount(u, h = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = u instanceof SVGElement && "svg" !== u.tagName),
              (this.instance = u);
            let { layoutId: d, layout: c, visualElement: v } = this.options;
            if (
              (v && !v.current && v.mount(u),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              h && (c || d) && (this.isLayoutDirty = !0),
              i)
            ) {
              let h,
                n = () => (this.root.updateBlockedByResize = !1);
              i(u, () => {
                (this.root.updateBlockedByResize = !0),
                  h && h(),
                  (h = (function (i, u) {
                    let h = performance.now(),
                      n = ({ timestamp: u }) => {
                        let d = u - h;
                        d >= 250 && (kt(n), i(d - 250));
                      };
                    return Dt.read(n, !0), () => kt(n);
                  })(n)),
                  Ce.hasAnimatedSinceResize &&
                    ((Ce.hasAnimatedSinceResize = !1), this.nodes.forEach(re));
              });
            }
            d && this.root.registerSharedNode(d, this),
              !1 !== this.options.animate &&
                v &&
                (d || c) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: i,
                    hasLayoutChanged: u,
                    hasRelativeTargetChanged: h,
                    layout: d,
                  }) => {
                    if (this.isTreeAnimationBlocked())
                      return (
                        (this.target = void 0),
                        void (this.relativeTarget = void 0)
                      );
                    let c =
                        this.options.transition ||
                        v.getDefaultTransition() ||
                        $e,
                      {
                        onLayoutAnimationStart: S,
                        onLayoutAnimationComplete: V,
                      } = v.getProps(),
                      A = !this.targetLayout || !nG(this.targetLayout, d) || h,
                      M = !u && h;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      M ||
                      (u && (A || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(i, M);
                      let u = { ...iP(c, "layout"), onPlay: S, onComplete: V };
                      (v.shouldReduceMotion || this.options.layoutRoot) &&
                        ((u.delay = 0), (u.type = !1)),
                        this.startAnimation(u);
                    } else
                      u || re(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = d;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let i = this.getStack();
            i && i.remove(this),
              this.parent && this.parent.children["delete"](this),
              (this.instance = void 0),
              kt(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(rr),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: i } = this.options;
            return i && i.getProps().transformTemplate;
          }
          willUpdate(i = !0) {
            if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked()))
              return void (
                this.options.onExitComplete && this.options.onExitComplete()
              );
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
              let i = this.path[c];
              (i.shouldResetTransform = !0),
                i.updateScroll("snapshot"),
                i.options.layoutRoot && i.willUpdate(!1);
            }
            let { layoutId: u, layout: h } = this.options;
            if (void 0 === u && !h) return;
            let d = this.getTransformTemplate();
            (this.prevTransformTemplateValue = d
              ? d(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              i && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked()))
              return (
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                void this.nodes.forEach(n8)
              );
            this.isUpdating || this.nodes.forEach(n7),
              (this.isUpdating = !1),
              this.nodes.forEach(rt),
              this.nodes.forEach(n2),
              this.nodes.forEach(n3),
              this.clearAllSnapshots();
            let i = performance.now();
            (Lt.delta = U(0, 1e3 / 60, i - Lt.timestamp)),
              (Lt.timestamp = i),
              (Lt.isProcessing = !0),
              Rt.update.process(Lt),
              Rt.preRender.process(Lt),
              Rt.render.process(Lt),
              (Lt.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(n6), this.sharedNodes.forEach(rs);
          }
          scheduleUpdateProjection() {
            Dt.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            Dt.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !(
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              )
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let h = 0; h < this.path.length; h++)
                this.path[h].updateScroll();
            let i = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = ne()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: u } = this.options;
            u &&
              u.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                i ? i.layoutBox : void 0
              );
          }
          updateScroll(i = "measure") {
            let u = !(!this.options.layoutScroll || !this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === i &&
              (u = !1),
              u &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: i,
                  isRoot: d(this.instance),
                  offset: h(this.instance),
                });
          }
          resetTransform() {
            if (!c) return;
            let i = this.isLayoutDirty || this.shouldResetTransform,
              u = this.projectionDelta && !nX(this.projectionDelta),
              h = this.getTransformTemplate(),
              d = h ? h(this.latestValues, "") : void 0,
              v = d !== this.prevTransformTemplateValue;
            i &&
              (u || no(this.latestValues) || v) &&
              (c(this.instance, d),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(i = !0) {
            var u;
            let h = this.measurePageBox(),
              d = this.removeElementScroll(h);
            return (
              i && (d = this.removeTransform(d)),
              rd((u = d).x),
              rd(u.y),
              {
                animationId: this.root.animationId,
                measuredBox: h,
                layoutBox: d,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: i } = this.options;
            if (!i) return ne();
            let u = i.measureViewportBox(),
              { scroll: h } = this.root;
            return h && (nd(u.x, h.offset.x), nd(u.y, h.offset.y)), u;
          }
          removeElementScroll(i) {
            let u = ne();
            nU(u, i);
            for (let h = 0; h < this.path.length; h++) {
              let d = this.path[h],
                { scroll: c, options: v } = d;
              if (d !== this.root && c && v.layoutScroll) {
                if (c.isRoot) {
                  nU(u, i);
                  let { scroll: h } = this.root;
                  h && (nd(u.x, -h.offset.x), nd(u.y, -h.offset.y));
                }
                nd(u.x, c.offset.x), nd(u.y, c.offset.y);
              }
            }
            return u;
          }
          applyTransform(i, u = !1) {
            let h = ne();
            nU(h, i);
            for (let d = 0; d < this.path.length; d++) {
              let i = this.path[d];
              !u &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                ng(h, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                no(i.latestValues) && ng(h, i.latestValues);
            }
            return no(this.latestValues) && ng(h, this.latestValues), h;
          }
          removeTransform(i) {
            let u = ne();
            nU(u, i);
            for (let h = 0; h < this.path.length; h++) {
              let i = this.path[h];
              if (!i.instance || !no(i.latestValues)) continue;
              ns(i.latestValues) && i.updateSnapshot();
              let d = ne();
              nU(d, i.measurePageBox()),
                nz(
                  u,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  d
                );
            }
            return no(this.latestValues) && nz(u, this.latestValues), u;
          }
          setTargetDelta(i) {
            (this.targetDelta = i),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(i) {
            this.options = {
              ...this.options,
              ...i,
              crossfade: void 0 === i.crossfade || i.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== Lt.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(i = !1) {
            var u, h, d, c;
            let v = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = v.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = v.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = v.isSharedProjectionDirty);
            let S = !!this.resumingFrom || this !== v;
            if (
              !(
                i ||
                (S && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (u = this.parent) || void 0 === u
                  ? void 0
                  : u.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: V, layoutId: A } = this.options;
            if (this.layout && (V || A)) {
              if (
                ((this.resolvedRelativeTargetAt = Lt.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let i = this.getClosestProjectingParent();
                i && i.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = i),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = ne()),
                    (this.relativeTargetOrigin = ne()),
                    i2(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      i.layout.layoutBox
                    ),
                    nU(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = ne()), (this.targetWithTransforms = ne())),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.relativeParent &&
                  this.relativeParent.target
                    ? (this.forceRelativeParentToResolveTarget(),
                      (h = this.target),
                      (d = this.relativeTarget),
                      (c = this.relativeParent.target),
                      i1(h.x, d.x, c.x),
                      i1(h.y, d.y, c.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nU(this.target, this.layout.layoutBox),
                      nh(this.target, this.targetDelta))
                    : nU(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let i = this.getClosestProjectingParent();
                  i &&
                  !!i.resumingFrom == !!this.resumingFrom &&
                  !i.options.layoutScroll &&
                  i.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = i),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = ne()),
                      (this.relativeTargetOrigin = ne()),
                      i2(this.relativeTargetOrigin, this.target, i.target),
                      nU(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                Ie.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              ns(this.parent.latestValues) ||
              na(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !(
              !(
                this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot
              ) || !this.layout
            );
          }
          calcProjection() {
            var i;
            let u = this.getLead(),
              h = !!this.resumingFrom || this !== u,
              d = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (i = this.parent) || void 0 === i
                  ? void 0
                  : i.isProjectionDirty)) &&
                (d = !1),
              h &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (d = !1),
              this.resolvedRelativeTargetAt === Lt.timestamp && (d = !1),
              d)
            )
              return;
            let { layout: c, layoutId: v } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || (!c && !v))
            )
              return;
            nU(this.layoutCorrected, this.layout.layoutBox);
            let S = this.treeScale.x,
              V = this.treeScale.y;
            !(function (i, u, h, d = !1) {
              let c,
                v,
                S = h.length;
              if (S) {
                u.x = u.y = 1;
                for (let V = 0; V < S; V++) {
                  v = (c = h[V]).projectionDelta;
                  let S = c.instance;
                  (!S || !S.style || "contents" !== S.style.display) &&
                    (d &&
                      c.options.layoutScroll &&
                      c.scroll &&
                      c !== c.root &&
                      ng(i, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
                    v && ((u.x *= v.x.scale), (u.y *= v.y.scale), nh(i, v)),
                    d && no(c.latestValues) && ng(i, c.latestValues));
                }
                (u.x = nc(u.x)), (u.y = nc(u.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, h),
              u.layout &&
                !u.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (u.target = u.layout.layoutBox);
            let { target: A } = u;
            if (!A)
              return void (
                this.projectionTransform &&
                ((this.projectionDelta = i7()),
                (this.projectionTransform = "none"),
                this.scheduleRender())
              );
            this.projectionDelta ||
              ((this.projectionDelta = i7()),
              (this.projectionDeltaWithTransform = i7()));
            let M = this.projectionTransform;
            i0(
              this.projectionDelta,
              this.layoutCorrected,
              A,
              this.latestValues
            ),
              (this.projectionTransform = nK(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== M ||
                this.treeScale.x !== S ||
                this.treeScale.y !== V) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", A)),
              Ie.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(i = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), i)
            ) {
              let i = this.getStack();
              i && i.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(i, u = !1) {
            let h,
              d = this.snapshot,
              c = d ? d.latestValues : {},
              v = { ...this.latestValues },
              S = i7();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !u);
            let V = ne(),
              A =
                (d ? d.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              M = this.getStack(),
              D = !M || M.members.length <= 1,
              B = !(
                !A ||
                D ||
                !0 !== this.options.crossfade ||
                this.path.some(rl)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (u) => {
                let d = u / 1e3;
                var M, O, $, N;
                (ro(S.x, i.x, d),
                ro(S.y, i.y, d),
                this.setTargetDelta(S),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.layout &&
                  this.relativeParent &&
                  this.relativeParent.layout) &&
                  (i2(
                    V,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                  ($ = this.relativeTarget),
                  (N = this.relativeTargetOrigin),
                  ra($.x, N.x, V.x, d),
                  ra($.y, N.y, V.y, d),
                  h &&
                    ((M = this.relativeTarget),
                    (O = h),
                    M.x.min === O.x.min &&
                      M.x.max === O.x.max &&
                      M.y.min === O.y.min &&
                      M.y.max === O.y.max) &&
                    (this.isProjectionDirty = !1),
                  h || (h = ne()),
                  nU(h, this.relativeTarget));
                A &&
                  ((this.animationValues = v),
                  (function (i, u, h, d, c, v) {
                    c
                      ? ((i.opacity = eM(
                          0,
                          void 0 !== h.opacity ? h.opacity : 1,
                          Re(d)
                        )),
                        (i.opacityExit = eM(
                          void 0 !== u.opacity ? u.opacity : 1,
                          0,
                          je(d)
                        )))
                      : v &&
                        (i.opacity = eM(
                          void 0 !== u.opacity ? u.opacity : 1,
                          void 0 !== h.opacity ? h.opacity : 1,
                          d
                        ));
                    for (let S = 0; S < Le; S++) {
                      let c = `border${ke[S]}Radius`,
                        v = nj(u, c),
                        V = nj(h, c);
                      (void 0 !== v || void 0 !== V) &&
                        (v || (v = 0),
                        V || (V = 0),
                        0 === v || 0 === V || nL(v) === nL(V)
                          ? ((i[c] = Math.max(eM(nR(v), nR(V), d), 0)),
                            (mt.test(V) || mt.test(v)) && (i[c] += "%"))
                          : (i[c] = V));
                    }
                    (u.rotate || h.rotate) &&
                      (i.rotate = eM(u.rotate || 0, h.rotate || 0, d));
                  })(v, c, this.latestValues, d, B, D)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = d);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(i) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (kt(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = Dt.update(() => {
                (Ce.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (i, u, h) {
                    let d = R(0) ? 0 : iD(0);
                    return d.start(ib("", d, 1e3, h)), d.animation;
                  })(0, 0, {
                    ...i,
                    onUpdate: (u) => {
                      this.mixTargetDelta(u), i.onUpdate && i.onUpdate(u);
                    },
                    onComplete: () => {
                      i.onComplete && i.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let i = this.getStack();
            i && i.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let i = this.getLead(),
              {
                targetWithTransforms: u,
                target: h,
                layout: d,
                latestValues: c,
              } = i;
            if (u && h && d) {
              if (
                this !== i &&
                this.layout &&
                d &&
                rp(
                  this.options.animationType,
                  this.layout.layoutBox,
                  d.layoutBox
                )
              ) {
                h = this.target || ne();
                let u = i_(this.layout.layoutBox.x);
                (h.x.min = i.target.x.min), (h.x.max = h.x.min + u);
                let d = i_(this.layout.layoutBox.y);
                (h.y.min = i.target.y.min), (h.y.max = h.y.min + d);
              }
              nU(u, h),
                ng(u, c),
                i0(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  u,
                  c
                );
            }
          }
          registerSharedNode(i, u) {
            this.sharedNodes.has(i) || this.sharedNodes.set(i, new nZ()),
              this.sharedNodes.get(i).add(u);
            let h = u.options.initialPromotionConfig;
            u.promote({
              transition: h ? h.transition : void 0,
              preserveFollowOpacity:
                h && h.shouldPreserveFollowOpacity
                  ? h.shouldPreserveFollowOpacity(u)
                  : void 0,
            });
          }
          isLead() {
            let i = this.getStack();
            return !i || i.lead === this;
          }
          getLead() {
            var i;
            let { layoutId: u } = this.options;
            return (
              (u &&
                (null === (i = this.getStack()) || void 0 === i
                  ? void 0
                  : i.lead)) ||
              this
            );
          }
          getPrevLead() {
            var i;
            let { layoutId: u } = this.options;
            return u
              ? null === (i = this.getStack()) || void 0 === i
                ? void 0
                : i.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: i } = this.options;
            if (i) return this.root.sharedNodes.get(i);
          }
          promote({
            needsReset: i,
            transition: u,
            preserveFollowOpacity: h,
          } = {}) {
            let d = this.getStack();
            d && d.promote(this, h),
              i && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              u && this.setOptions({ transition: u });
          }
          relegate() {
            let i = this.getStack();
            return !!i && i.relegate(this);
          }
          resetRotation() {
            let { visualElement: i } = this.options;
            if (!i) return;
            let u = !1,
              { latestValues: h } = i;
            if (
              ((h.rotate || h.rotateX || h.rotateY || h.rotateZ) && (u = !0),
              !u)
            )
              return;
            let d = {};
            for (let c = 0; c < Oe.length; c++) {
              let u = "rotate" + Oe[c];
              h[u] && ((d[u] = h[u]), i.setStaticValue(u, 0));
            }
            for (let c in (i.render(), d)) i.setStaticValue(c, d[c]);
            i.scheduleRender();
          }
          getProjectionStyles(i = {}) {
            var u, h;
            let d = {};
            if (!this.instance || this.isSVG) return d;
            if (!this.isVisible) return { visibility: "hidden" };
            d.visibility = "";
            let c = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (d.opacity = ""),
                (d.pointerEvents = tV(i.pointerEvents) || ""),
                (d.transform = c ? c(this.latestValues, "") : "none"),
                d
              );
            let v = this.getLead();
            if (!this.projectionDelta || !this.layout || !v.target) {
              let u = {};
              return (
                this.options.layoutId &&
                  ((u.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (u.pointerEvents = tV(i.pointerEvents) || "")),
                this.hasProjected &&
                  !no(this.latestValues) &&
                  ((u.transform = c ? c({}, "") : "none"),
                  (this.hasProjected = !1)),
                u
              );
            }
            let S = v.animationValues || v.latestValues;
            this.applyTransformsToTarget(),
              (d.transform = nK(
                this.projectionDeltaWithTransform,
                this.treeScale,
                S
              )),
              c && (d.transform = c(S, d.transform));
            let { x: V, y: A } = this.projectionDelta;
            for (let M in ((d.transformOrigin = `${100 * V.origin}% ${
              100 * A.origin
            }% 0`),
            v.animationValues
              ? (d.opacity =
                  v === this
                    ? null !==
                        (h =
                          null !== (u = S.opacity) && void 0 !== u
                            ? u
                            : this.latestValues.opacity) && void 0 !== h
                      ? h
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : S.opacityExit)
              : (d.opacity =
                  v === this
                    ? void 0 !== S.opacity
                      ? S.opacity
                      : ""
                    : void 0 !== S.opacityExit
                    ? S.opacityExit
                    : 0),
            K)) {
              if (void 0 === S[M]) continue;
              let { correct: i, applyTo: u } = K[M],
                h = "none" === d.transform ? S[M] : i(S[M], v);
              if (u) {
                let i = u.length;
                for (let c = 0; c < i; c++) d[u[c]] = h;
              } else d[M] = h;
            }
            return (
              this.options.layoutId &&
                (d.pointerEvents =
                  v === this ? tV(i.pointerEvents) || "" : "none"),
              d
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((i) => {
              var u;
              return null === (u = i.currentAnimation) || void 0 === u
                ? void 0
                : u.stop();
            }),
              this.root.nodes.forEach(n8),
              this.root.sharedNodes.clear();
          }
        };
      }
      function n2(i) {
        i.updateLayout();
      }
      function n3(i) {
        var u;
        let h =
          (null === (u = i.resumeFrom) || void 0 === u ? void 0 : u.snapshot) ||
          i.snapshot;
        if (i.isLead() && i.layout && h && i.hasListeners("didUpdate")) {
          let { layoutBox: u, measuredBox: d } = i.layout,
            { animationType: c } = i.options,
            v = h.source !== i.layout.source;
          "size" === c
            ? ni((i) => {
                let d = v ? h.measuredBox[i] : h.layoutBox[i],
                  c = i_(d);
                (d.min = u[i].min), (d.max = d.min + c);
              })
            : rp(c, h.layoutBox, u) &&
              ni((d) => {
                let c = v ? h.measuredBox[d] : h.layoutBox[d],
                  S = i_(u[d]);
                (c.max = c.min + S),
                  i.relativeTarget &&
                    !i.currentAnimation &&
                    ((i.isProjectionDirty = !0),
                    (i.relativeTarget[d].max = i.relativeTarget[d].min + S));
              });
          let S = i7();
          i0(S, u, h.layoutBox);
          let V = i7();
          v
            ? i0(V, i.applyTransform(d, !0), h.measuredBox)
            : i0(V, u, h.layoutBox);
          let A = !nX(S),
            M = !1;
          if (!i.resumeFrom) {
            let d = i.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
              let { snapshot: c, layout: v } = d;
              if (c && v) {
                let S = ne();
                i2(S, h.layoutBox, c.layoutBox);
                let V = ne();
                i2(V, u, v.layoutBox),
                  nG(S, V) || (M = !0),
                  d.options.layoutRoot &&
                    ((i.relativeTarget = V),
                    (i.relativeTargetOrigin = S),
                    (i.relativeParent = d));
              }
            }
          }
          i.notifyListeners("didUpdate", {
            layout: u,
            snapshot: h,
            delta: V,
            layoutDelta: S,
            hasLayoutChanged: A,
            hasRelativeTargetChanged: M,
          });
        } else if (i.isLead()) {
          let { onExitComplete: u } = i.options;
          u && u();
        }
        i.options.transition = void 0;
      }
      function n9(i) {
        Ie.totalNodes++,
          i.parent &&
            (i.isProjecting() ||
              (i.isProjectionDirty = i.parent.isProjectionDirty),
            i.isSharedProjectionDirty ||
              (i.isSharedProjectionDirty = !!(
                i.isProjectionDirty ||
                i.parent.isProjectionDirty ||
                i.parent.isSharedProjectionDirty
              )),
            i.isTransformDirty ||
              (i.isTransformDirty = i.parent.isTransformDirty));
      }
      function n4(i) {
        i.isProjectionDirty =
          i.isSharedProjectionDirty =
          i.isTransformDirty =
            !1;
      }
      function n6(i) {
        i.clearSnapshot();
      }
      function n8(i) {
        i.clearMeasurements();
      }
      function n7(i) {
        i.isLayoutDirty = !1;
      }
      function rt(i) {
        let { visualElement: u } = i.options;
        u &&
          u.getProps().onBeforeLayoutMeasure &&
          u.notify("BeforeLayoutMeasure"),
          i.resetTransform();
      }
      function re(i) {
        i.finishAnimation(),
          (i.targetDelta = i.relativeTarget = i.target = void 0),
          (i.isProjectionDirty = !0);
      }
      function ri(i) {
        i.resolveTargetDelta();
      }
      function rn(i) {
        i.calcProjection();
      }
      function rr(i) {
        i.resetRotation();
      }
      function rs(i) {
        i.removeLeadSnapshot();
      }
      function ro(i, u, h) {
        (i.translate = eM(u.translate, 0, h)),
          (i.scale = eM(u.scale, 1, h)),
          (i.origin = u.origin),
          (i.originPoint = u.originPoint);
      }
      function ra(i, u, h, d) {
        (i.min = eM(u.min, h.min, d)), (i.max = eM(u.max, h.max, d));
      }
      function rl(i) {
        return i.animationValues && void 0 !== i.animationValues.opacityExit;
      }
      let $e = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        rh = (i) =>
          "undefined" != typeof navigator &&
          navigator.userAgent.toLowerCase().includes(i),
        Ne = rh("applewebkit/") && !rh("chrome/") ? Math.round : tW;
      function rd(i) {
        (i.min = Ne(i.min)), (i.max = Ne(i.max));
      }
      function rp(i, u, h) {
        return (
          "position" === i ||
          ("preserve-aspect" === i && !iJ(nq(u), nq(h), 0.2))
        );
      }
      let We = n5({
          attachResizeListener: (i, u) => tM(i, "resize", u),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ze = { current: void 0 },
        Ge = n5({
          measureScroll: (i) => ({ x: i.scrollLeft, y: i.scrollTop }),
          defaultParent: () => {
            if (!ze.current) {
              let i = new We({});
              i.mount(window),
                i.setOptions({ layoutScroll: !0 }),
                (ze.current = i);
            }
            return ze.current;
          },
          resetTransform: (i, u) => {
            i.style.transform = void 0 !== u ? u : "none";
          },
          checkIsScrollRoot: (i) =>
            "fixed" === window.getComputedStyle(i).position,
        }),
        Xe = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function ry(i, u, h = 1) {
        tW(
          h <= 4,
          `Max CSS variable fallback depth detected in property "${i}". This may indicate a circular fallback dependency.`
        );
        let [d, c] = (function (i) {
          let u = Xe.exec(i);
          if (!u) return [,];
          let [, h, d] = u;
          return [h, d];
        })(i);
        if (!d) return;
        let v = window.getComputedStyle(u).getPropertyValue(d);
        if (v) {
          let i = v.trim();
          return iw(i) ? parseFloat(i) : i;
        }
        return ot(c) ? ry(c, u, h + 1) : c;
      }
      let He = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        rP = (i) => He.has(i),
        rT = (i) => i === at || i === ft,
        rw = (i, u) => parseFloat(i.split(", ")[u]),
        rA =
          (i, u) =>
          (h, { transform: d }) => {
            if ("none" === d || !d) return 0;
            let c = d.match(/^matrix3d\((.+)\)$/);
            if (c) return rw(c[1], u);
            {
              let u = d.match(/^matrix\((.+)\)$/);
              return u ? rw(u[1], i) : 0;
            }
          },
        Ye = new Set(["x", "y", "z"]),
        qe = J.filter((i) => !Ye.has(i)),
        Ze = {
          width: ({ x: i }, { paddingLeft: u = "0", paddingRight: h = "0" }) =>
            i.max - i.min - parseFloat(u) - parseFloat(h),
          height: ({ y: i }, { paddingTop: u = "0", paddingBottom: h = "0" }) =>
            i.max - i.min - parseFloat(u) - parseFloat(h),
          top: (i, { top: u }) => parseFloat(u),
          left: (i, { left: u }) => parseFloat(u),
          bottom: ({ y: i }, { top: u }) => parseFloat(u) + (i.max - i.min),
          right: ({ x: i }, { left: u }) => parseFloat(u) + (i.max - i.min),
          x: rA(4, 13),
          y: rA(5, 14),
        };
      (Ze.translateX = Ze.x), (Ze.translateY = Ze.y);
      let rM = (i, u, h = {}, d = {}) => {
          (u = { ...u }), (d = { ...d });
          let c = Object.keys(u).filter(rP),
            v = [],
            S = !1,
            V = [];
          if (
            (c.forEach((c) => {
              let A,
                M = i.getValue(c);
              if (!i.hasValue(c)) return;
              let D = h[c],
                B = iL(D),
                O = u[c];
              if (tT(O)) {
                let i = O.length,
                  u = null === O[0] ? 1 : 0;
                B = iL((D = O[u]));
                for (let h = u; h < i && null !== O[h]; h++)
                  A
                    ? tW(
                        iL(O[h]) === A,
                        "All keyframes must be of the same type"
                      )
                    : tW(
                        (A = iL(O[h])) === B || (rT(B) && rT(A)),
                        "Keyframes must be of the same dimension as the current value"
                      );
              } else A = iL(O);
              if (B !== A)
                if (rT(B) && rT(A)) {
                  let i = M.get();
                  "string" == typeof i && M.set(parseFloat(i)),
                    "string" == typeof O
                      ? (u[c] = parseFloat(O))
                      : Array.isArray(O) &&
                        A === ft &&
                        (u[c] = O.map(parseFloat));
                } else
                  (null == B ? void 0 : B.transform) &&
                  (null == A ? void 0 : A.transform) &&
                  (0 === D || 0 === O)
                    ? 0 === D
                      ? M.set(A.transform(D))
                      : (u[c] = B.transform(O))
                    : (S ||
                        ((v = (function (i) {
                          let u = [];
                          return (
                            qe.forEach((h) => {
                              let d = i.getValue(h);
                              void 0 !== d &&
                                (u.push([h, d.get()]),
                                d.set(h.startsWith("scale") ? 1 : 0));
                            }),
                            u.length && i.render(),
                            u
                          );
                        })(i)),
                        (S = !0)),
                      V.push(c),
                      (d[c] = void 0 !== d[c] ? d[c] : u[c]),
                      M.jump(O));
            }),
            !V.length)
          )
            return { target: u, transitionEnd: d };
          {
            let h = V.indexOf("height") >= 0 ? window.pageYOffset : null,
              c = ((i, u, h) => {
                let d = u.measureViewportBox(),
                  c = getComputedStyle(u.current),
                  { display: v } = c,
                  S = {};
                "none" === v &&
                  u.setStaticValue("display", i.display || "block"),
                  h.forEach((i) => {
                    S[i] = Ze[i](d, c);
                  }),
                  u.render();
                let V = u.measureViewportBox();
                return (
                  h.forEach((h) => {
                    let d = u.getValue(h);
                    d && d.jump(S[h]), (i[h] = Ze[h](V, c));
                  }),
                  i
                );
              })(u, i, V);
            return (
              v.length &&
                v.forEach(([u, h]) => {
                  i.getValue(u).set(h);
                }),
              i.render(),
              D && null !== h && window.scrollTo({ top: h }),
              { target: c, transitionEnd: d }
            );
          }
        },
        rD = (i, u, h, d) => {
          var c, v;
          let S = (function (i, { ...u }, h) {
            let d = i.current;
            if (!(d instanceof Element)) return { target: u, transitionEnd: h };
            for (let c in (h && (h = { ...h }),
            i.values.forEach((i) => {
              let u = i.get();
              if (!ot(u)) return;
              let h = ry(u, d);
              h && i.set(h);
            }),
            u)) {
              let i = u[c];
              if (!ot(i)) continue;
              let v = ry(i, d);
              v && ((u[c] = v), h || (h = {}), void 0 === h[c] && (h[c] = i));
            }
            return { target: u, transitionEnd: h };
          })(i, u, d);
          return (
            (u = S.target),
            (v = d = S.transitionEnd),
            ((i) => Object.keys(i).some(rP))((c = u))
              ? rM(i, c, h, v)
              : { target: c, transitionEnd: v }
          );
        },
        _e = { current: null },
        Ke = { current: !1 },
        Je = new WeakMap(),
        Qe = Object.keys(z),
        ti = Qe.length,
        ii = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        si = N.length;
      class rI {
        constructor(
          {
            parent: i,
            props: u,
            presenceContext: h,
            reducedMotionConfig: d,
            visualState: c,
          },
          v = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => Dt.render(this.render, !1, !0));
          let { latestValues: S, renderState: V } = c;
          (this.latestValues = S),
            (this.baseTarget = { ...S }),
            (this.initialValues = u.initial ? { ...S } : {}),
            (this.renderState = V),
            (this.parent = i),
            (this.props = u),
            (this.presenceContext = h),
            (this.depth = i ? i.depth + 1 : 0),
            (this.reducedMotionConfig = d),
            (this.options = v),
            (this.isControllingVariants = y(u)),
            (this.isVariantNode = x(u)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !(!i || !i.current));
          let { willChange: A, ...M } = this.scrapeMotionValuesFromProps(u, {});
          for (let D in M) {
            let i = M[D];
            void 0 !== S[D] && R(i) && (i.set(S[D], !1), iT(A) && A.add(D));
          }
        }
        scrapeMotionValuesFromProps(i, u) {
          return {};
        }
        mount(i) {
          (this.current = i),
            Je.set(i, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(i),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((i, u) => this.bindToMotionValue(u, i)),
            Ke.current ||
              (function () {
                if (((Ke.current = !0), D))
                  if (window.matchMedia) {
                    let i = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (_e.current = i.matches);
                    i.addListener(e), e();
                  } else _e.current = !1;
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || _e.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let i in (Je["delete"](this.current),
          this.projection && this.projection.unmount(),
          kt(this.notifyUpdate),
          kt(this.render),
          this.valueSubscriptions.forEach((i) => i()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children["delete"](this),
          this.events))
            this.events[i].clear();
          for (let i in this.features) this.features[i].unmount();
          this.current = null;
        }
        bindToMotionValue(i, u) {
          let h = Q.has(i),
            d = u.on("change", (u) => {
              (this.latestValues[i] = u),
                this.props.onUpdate && Dt.update(this.notifyUpdate, !1, !0),
                h && this.projection && (this.projection.isTransformDirty = !0);
            }),
            c = u.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(i, () => {
            d(), c();
          });
        }
        sortNodePosition(i) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === i.type
            ? this.sortInstanceNodePosition(this.current, i.current)
            : 0;
        }
        loadFeatures({ children: i, ...u }, h, d, c) {
          let v, S;
          for (let V = 0; V < ti; V++) {
            let i = Qe[V],
              {
                isEnabled: h,
                Feature: d,
                ProjectionNode: c,
                MeasureLayout: A,
              } = z[i];
            c && (v = c),
              h(u) &&
                (!this.features[i] && d && (this.features[i] = new d(this)),
                A && (S = A));
          }
          if (!this.projection && v) {
            this.projection = new v(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: i,
              layout: h,
              drag: d,
              dragConstraints: S,
              layoutScroll: V,
              layoutRoot: A,
            } = u;
            this.projection.setOptions({
              layoutId: i,
              layout: h,
              alwaysMeasureLayout: !!d || (S && p(S)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof h ? h : "both",
              initialPromotionConfig: c,
              layoutScroll: V,
              layoutRoot: A,
            });
          }
          return S;
        }
        updateFeatures() {
          for (let i in this.features) {
            let u = this.features[i];
            u.isMounted ? u.update() : (u.mount(), (u.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : ne();
        }
        getStaticValue(i) {
          return this.latestValues[i];
        }
        setStaticValue(i, u) {
          this.latestValues[i] = u;
        }
        makeTargetAnimatable(i, u = !0) {
          return this.makeTargetAnimatableFromInstance(i, this.props, u);
        }
        update(i, u) {
          (i.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = i),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = u);
          for (let h = 0; h < ii.length; h++) {
            let u = ii[h];
            this.propEventSubscriptions[u] &&
              (this.propEventSubscriptions[u](),
              delete this.propEventSubscriptions[u]);
            let d = i["on" + u];
            d && (this.propEventSubscriptions[u] = this.on(u, d));
          }
          (this.prevMotionValues = (function (i, u, h) {
            let { willChange: d } = u;
            for (let c in u) {
              let v = u[c],
                S = h[c];
              if (R(v)) i.addValue(c, v), iT(d) && d.add(c);
              else if (R(S))
                i.addValue(c, iD(v, { owner: i })), iT(d) && d.remove(c);
              else if (S !== v)
                if (i.hasValue(c)) {
                  let u = i.getValue(c);
                  u.hasAnimated || u.set(v);
                } else {
                  let u = i.getStaticValue(c);
                  i.addValue(c, iD(void 0 !== u ? u : v, { owner: i }));
                }
            }
            for (let c in h) void 0 === u[c] && i.removeValue(c);
            return u;
          })(
            this,
            this.scrapeMotionValuesFromProps(i, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(i) {
          return this.props.variants ? this.props.variants[i] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(i = !1) {
          if (i) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let i = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (i.initial = this.props.initial),
              i
            );
          }
          let u = {};
          for (let h = 0; h < si; h++) {
            let i = N[h],
              d = this.props[i];
            (m(d) || !1 === d) && (u[i] = d);
          }
          return u;
        }
        addVariantChild(i) {
          let u = this.getClosestVariantNode();
          if (u)
            return (
              u.variantChildren && u.variantChildren.add(i),
              () => u.variantChildren["delete"](i)
            );
        }
        addValue(i, u) {
          u !== this.values.get(i) &&
            (this.removeValue(i), this.bindToMotionValue(i, u)),
            this.values.set(i, u),
            (this.latestValues[i] = u.get());
        }
        removeValue(i) {
          this.values["delete"](i);
          let u = this.valueSubscriptions.get(i);
          u && (u(), this.valueSubscriptions["delete"](i)),
            delete this.latestValues[i],
            this.removeValueFromRenderState(i, this.renderState);
        }
        hasValue(i) {
          return this.values.has(i);
        }
        getValue(i, u) {
          if (this.props.values && this.props.values[i])
            return this.props.values[i];
          let h = this.values.get(i);
          return (
            void 0 === h &&
              void 0 !== u &&
              ((h = iD(u, { owner: this })), this.addValue(i, h)),
            h
          );
        }
        readValue(i) {
          var u;
          return void 0 === this.latestValues[i] && this.current
            ? null !== (u = this.getBaseTargetFromProps(this.props, i)) &&
              void 0 !== u
              ? u
              : this.readValueFromInstance(this.current, i, this.options)
            : this.latestValues[i];
        }
        setBaseTarget(i, u) {
          this.baseTarget[i] = u;
        }
        getBaseTarget(i) {
          var u;
          let { initial: h } = this.props,
            d =
              "string" == typeof h || "object" == typeof h
                ? null === (u = tb(this.props, h)) || void 0 === u
                  ? void 0
                  : u[i]
                : void 0;
          if (h && void 0 !== d) return d;
          let c = this.getBaseTargetFromProps(this.props, i);
          return void 0 === c || R(c)
            ? void 0 !== this.initialValues[i] && void 0 === d
              ? void 0
              : this.baseTarget[i]
            : c;
        }
        on(i, u) {
          return (
            this.events[i] || (this.events[i] = new iS()), this.events[i].add(u)
          );
        }
        notify(i, ...u) {
          this.events[i] && this.events[i].notify(...u);
        }
      }
      class rU extends rI {
        sortInstanceNodePosition(i, u) {
          return 2 & i.compareDocumentPosition(u) ? 1 : -1;
        }
        getBaseTargetFromProps(i, u) {
          return i.style ? i.style[u] : void 0;
        }
        removeValueFromRenderState(i, { vars: u, style: h }) {
          delete u[i], delete h[i];
        }
        makeTargetAnimatableFromInstance(
          { transition: i, transitionEnd: u, ...h },
          { transformValues: d },
          c
        ) {
          let v = (function (i, u, h) {
            let d = {};
            for (let c in i) {
              let i = (function (i, u) {
                if (u) return (u[i] || u["default"] || u).from;
              })(c, u);
              if (void 0 !== i) d[c] = i;
              else {
                let i = h.getValue(c);
                i && (d[c] = i.get());
              }
            }
            return d;
          })(h, i || {}, this);
          if ((d && (u && (u = d(u)), h && (h = d(h)), v && (v = d(v))), c)) {
            !(function (i, u, h) {
              var d, c;
              let v = Object.keys(u).filter((u) => !i.hasValue(u)),
                S = v.length;
              if (S)
                for (let V = 0; V < S; V++) {
                  let S = v[V],
                    A = u[S],
                    M = null;
                  Array.isArray(A) && (M = A[0]),
                    null === M &&
                      (M =
                        null !==
                          (c =
                            null !== (d = h[S]) && void 0 !== d
                              ? d
                              : i.readValue(S)) && void 0 !== c
                          ? c
                          : u[S]),
                    null != M &&
                      ("string" == typeof M && (iw(M) || ix(M))
                        ? (M = parseFloat(M))
                        : !iF(M) && oe.test(A) && (M = iy(S, A)),
                      i.addValue(S, iD(M, { owner: i })),
                      void 0 === h[S] && (h[S] = M),
                      null !== M && i.setBaseTarget(S, M));
                }
            })(this, h, v);
            let i = rD(this, h, v, u);
            (u = i.transitionEnd), (h = i.target);
          }
          return { transition: i, transitionEnd: u, ...h };
        }
      }
      class rN extends rU {
        readValueFromInstance(i, u) {
          if (Q.has(u)) {
            let i = iv(u);
            return (i && i["default"]) || 0;
          }
          {
            let h = window.getComputedStyle(i),
              d = (st(u) ? h.getPropertyValue(u) : h[u]) || 0;
            return "string" == typeof d ? d.trim() : d;
          }
        }
        measureInstanceViewportBox(i, { transformPagePoint: u }) {
          return nv(i, u);
        }
        build(i, u, h, d) {
          tn(i, u, h, d.transformTemplate);
        }
        scrapeMotionValuesFromProps(i, u) {
          return tx(i, u);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: i } = this.props;
          R(i) &&
            (this.childSubscription = i.on("change", (i) => {
              this.current && (this.current.textContent = `${i}`);
            }));
        }
        renderInstance(i, u, h, d) {
          tg(i, u, h, d);
        }
      }
      class r$ extends rU {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(i, u) {
          return i[u];
        }
        readValueFromInstance(i, u) {
          if (Q.has(u)) {
            let i = iv(u);
            return (i && i["default"]) || 0;
          }
          return (u = wt.has(u) ? u : tf(u)), i.getAttribute(u);
        }
        measureInstanceViewportBox() {
          return ne();
        }
        scrapeMotionValuesFromProps(i, u) {
          return tP(i, u);
        }
        build(i, u, h, d) {
          td(i, u, h, this.isSVGTag, d.transformTemplate);
        }
        renderInstance(i, u, h, d) {
          ty(i, u, 0, d);
        }
        mount(i) {
          (this.isSVGTag = tm(i.tagName)), super.mount(i);
        }
      }
      let rW = (i, u) =>
          E(i)
            ? new r$(u, { enableHardwareAcceleration: !1 })
            : new rN(u, { enableHardwareAcceleration: !0 }),
        oi = {
          animation: {
            Feature: class iW extends t$ {
              constructor(i) {
                super(i),
                  i.animationState ||
                    (i.animationState = (function (i) {
                      let e = (u) =>
                          Promise.all(
                            u.map(({ animation: u, options: h }) =>
                              (function (i, u, h = {}) {
                                let d;
                                if (
                                  (i.notify("AnimationStart", u),
                                  Array.isArray(u))
                                )
                                  d = Promise.all(u.map((u) => iO(i, u, h)));
                                else if ("string" == typeof u) d = iO(i, u, h);
                                else {
                                  let c =
                                    "function" == typeof u
                                      ? t6(i, u, h.custom)
                                      : u;
                                  d = Promise.all(iB(i, c, h));
                                }
                                return d.then(() =>
                                  i.notify("AnimationComplete", u)
                                );
                              })(i, u, h)
                            )
                          ),
                        u = {
                          animate: i$(!0),
                          whileInView: i$(),
                          whileHover: i$(),
                          whileTap: i$(),
                          whileDrag: i$(),
                          whileFocus: i$(),
                          exit: i$(),
                        },
                        h = !0,
                        r = (u, h) => {
                          let d = t6(i, h);
                          if (d) {
                            let { transition: i, transitionEnd: h, ...c } = d;
                            u = { ...u, ...c, ...h };
                          }
                          return u;
                        };
                      function s(d, c) {
                        let v = i.getProps(),
                          S = i.getVariantContext(!0) || {},
                          V = [],
                          A = new Set(),
                          M = {},
                          D = 1 / 0;
                        for (let $ = 0; $ < Se; $++) {
                          var B;
                          let O = Te[$],
                            N = u[O],
                            W = void 0 !== v[O] ? v[O] : S[O],
                            z = m(W),
                            X = O === c ? N.isActive : null;
                          !1 === X && (D = $);
                          let Y = W === S[O] && W !== v[O] && z;
                          if (
                            (Y && h && i.manuallyAnimateOnMount && (Y = !1),
                            (N.protectedKeys = { ...M }),
                            (!N.isActive && null === X) ||
                              (!W && !N.prevProp) ||
                              f(W) ||
                              "boolean" == typeof W)
                          )
                            continue;
                          let Z =
                              ((B = N.prevProp),
                              "string" == typeof W
                                ? W !== B
                                : !!Array.isArray(W) && !t4(W, B)),
                            _ =
                              Z ||
                              (O === c && N.isActive && !Y && z) ||
                              ($ > D && z),
                            K = Array.isArray(W) ? W : [W],
                            J = K.reduce(r, {});
                          !1 === X && (J = {});
                          let { prevResolvedValues: Q = {} } = N,
                            tt = { ...Q, ...J },
                            C = (i) => {
                              (_ = !0),
                                A["delete"](i),
                                (N.needsAnimating[i] = !0);
                            };
                          for (let i in tt) {
                            let u = J[i],
                              h = Q[i];
                            M.hasOwnProperty(i) ||
                              (u !== h
                                ? tT(u) && tT(h)
                                  ? !t4(u, h) || Z
                                    ? C(i)
                                    : (N.protectedKeys[i] = !0)
                                  : void 0 !== u
                                  ? C(i)
                                  : A.add(i)
                                : void 0 !== u && A.has(i)
                                ? C(i)
                                : (N.protectedKeys[i] = !0));
                          }
                          (N.prevProp = W),
                            (N.prevResolvedValues = J),
                            N.isActive && (M = { ...M, ...J }),
                            h && i.blockInitialAnimation && (_ = !1),
                            _ &&
                              !Y &&
                              V.push(
                                ...K.map((i) => ({
                                  animation: i,
                                  options: { type: O, ...d },
                                }))
                              );
                        }
                        if (A.size) {
                          let u = {};
                          A.forEach((h) => {
                            let d = i.getBaseTarget(h);
                            void 0 !== d && (u[h] = d);
                          }),
                            V.push({ animation: u });
                        }
                        let O = !!V.length;
                        return (
                          h &&
                            !1 === v.initial &&
                            !i.manuallyAnimateOnMount &&
                            (O = !1),
                          (h = !1),
                          O ? e(V) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: s,
                        setActive: function (h, d, c) {
                          var v;
                          if (u[h].isActive === d) return Promise.resolve();
                          null === (v = i.variantChildren) ||
                            void 0 === v ||
                            v.forEach((i) => {
                              var u;
                              return null === (u = i.animationState) ||
                                void 0 === u
                                ? void 0
                                : u.setActive(h, d);
                            }),
                            (u[h].isActive = d);
                          let S = s(c, h);
                          for (let i in u) u[i].protectedKeys = {};
                          return S;
                        },
                        setAnimateFunction: function (u) {
                          e = u(i);
                        },
                        getState: () => u,
                      };
                    })(i));
              }
              updateAnimationControlsSubscription() {
                let { animate: i } = this.node.getProps();
                this.unmount(), f(i) && (this.unmount = i.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: i } = this.node.getProps(),
                  { animate: u } = this.node.prevProps || {};
                i !== u && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class iz extends t$ {
              constructor() {
                super(...arguments), (this.id = we++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: i,
                    onExitComplete: u,
                    custom: h,
                  } = this.node.presenceContext,
                  { isPresent: d } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || i === d) return;
                let c = this.node.animationState.setActive("exit", !i, {
                  custom: null != h ? h : this.node.getProps().custom,
                });
                u && !i && c.then(() => u(this.id));
              }
              mount() {
                let { register: i } = this.node.presenceContext || {};
                i && (this.unmount = i(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class t9 extends t$ {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                this.unmount();
                let { viewport: i = {} } = this.node.getProps(),
                  { root: u, margin: h, amount: d = "some", once: c } = i,
                  v = {
                    root: u ? u.current : void 0,
                    rootMargin: h,
                    threshold: "number" == typeof d ? d : Bt[d],
                  };
                return (function (i, u, h) {
                  let d = (function ({ root: i, ...u }) {
                    let h = i || document;
                    Ft.has(h) || Ft.set(h, {});
                    let d = Ft.get(h),
                      c = JSON.stringify(u);
                    return (
                      d[c] ||
                        (d[c] = new IntersectionObserver(t2, {
                          root: i,
                          ...u,
                        })),
                      d[c]
                    );
                  })(u);
                  return (
                    jt.set(i, h),
                    d.observe(i),
                    () => {
                      jt["delete"](i), d.unobserve(i);
                    }
                  );
                })(this.node.current, v, (i) => {
                  let { isIntersecting: u } = i;
                  if (
                    this.isInView === u ||
                    ((this.isInView = u), c && !u && this.hasEnteredView)
                  )
                    return;
                  u && (this.hasEnteredView = !0),
                    this.node.animationState &&
                      this.node.animationState.setActive("whileInView", u);
                  let { onViewportEnter: h, onViewportLeave: d } =
                      this.node.getProps(),
                    v = u ? h : d;
                  v && v(i);
                });
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: i, prevProps: u } = this.node;
                ["amount", "margin", "root"].some(
                  (function ({ viewport: i = {} }, { viewport: u = {} } = {}) {
                    return (h) => i[h] !== u[h];
                  })(i, u)
                ) && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class tQ extends t$ {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = tW),
                  (this.removeEndListeners = tW),
                  (this.removeAccessibleListeners = tW),
                  (this.startPointerPress = (i, u) => {
                    if ((this.removeEndListeners(), this.isPressing)) return;
                    let h = this.node.getProps(),
                      d = tL(
                        window,
                        "pointerup",
                        (i, u) => {
                          if (!this.checkPressEnd()) return;
                          let { onTap: h, onTapCancel: d } =
                            this.node.getProps();
                          Dt.update(() => {
                            t_(this.node.current, i.target)
                              ? h && h(i, u)
                              : d && d(i, u);
                          });
                        },
                        { passive: !(h.onTap || h.onPointerUp) }
                      ),
                      c = tL(
                        window,
                        "pointercancel",
                        (i, u) => this.cancelPress(i, u),
                        { passive: !(h.onTapCancel || h.onPointerCancel) }
                      );
                    (this.removeEndListeners = tF(d, c)), this.startPress(i, u);
                  }),
                  (this.startAccessiblePress = () => {
                    let i = tM(this.node.current, "keydown", (i) => {
                        "Enter" !== i.key ||
                          this.isPressing ||
                          (this.removeEndListeners(),
                          (this.removeEndListeners = tM(
                            this.node.current,
                            "keyup",
                            (i) => {
                              "Enter" === i.key &&
                                this.checkPressEnd() &&
                                tJ("up", (i, u) => {
                                  let { onTap: h } = this.node.getProps();
                                  h && Dt.update(() => h(i, u));
                                });
                            }
                          )),
                          tJ("down", (i, u) => {
                            this.startPress(i, u);
                          }));
                      }),
                      u = tM(this.node.current, "blur", () => {
                        this.isPressing &&
                          tJ("cancel", (i, u) => this.cancelPress(i, u));
                      });
                    this.removeAccessibleListeners = tF(i, u);
                  });
              }
              startPress(i, u) {
                this.isPressing = !0;
                let { onTapStart: h, whileTap: d } = this.node.getProps();
                d &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  h && Dt.update(() => h(i, u));
              }
              checkPressEnd() {
                return (
                  this.removeEndListeners(),
                  (this.isPressing = !1),
                  this.node.getProps().whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !tN()
                );
              }
              cancelPress(i, u) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: h } = this.node.getProps();
                h && Dt.update(() => h(i, u));
              }
              mount() {
                let i = this.node.getProps(),
                  u = tL(
                    this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(i.onTapStart || i.onPointerStart) }
                  ),
                  h = tM(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = tF(u, h);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class tK extends t$ {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let i = !1;
                try {
                  i = this.node.current.matches(":focus-visible");
                } catch (u) {
                  i = !0;
                }
                i &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = tF(
                  tM(this.node.current, "focus", () => this.onFocus()),
                  tM(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class tZ extends t$ {
              mount() {
                this.unmount = tF(tq(this.node, !0), tq(this.node, !1));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class nw extends t$ {
              constructor() {
                super(...arguments), (this.removePointerDownListener = tW);
              }
              onPointerDown(i) {
                this.session = new iX(i, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: i,
                  onPanStart: u,
                  onPan: h,
                  onPanEnd: d,
                } = this.node.getProps();
                return {
                  onSessionStart: nT(i),
                  onStart: nT(u),
                  onMove: h,
                  onEnd: (i, u) => {
                    delete this.session, d && Dt.update(() => d(i, u));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = tL(
                  this.node.current,
                  "pointerdown",
                  (i) => this.onPointerDown(i)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class nb extends t$ {
              constructor(i) {
                super(i),
                  (this.removeGroupControls = tW),
                  (this.removeListeners = tW),
                  (this.controls = new nx(i));
              }
              mount() {
                let { dragControls: i } = this.node.getProps();
                i && (this.removeGroupControls = i.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || tW);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: Ge,
            MeasureLayout: nC,
          },
          layout: { ProjectionNode: Ge, MeasureLayout: nC },
        },
        ai = (function (i) {
          function e(i, u = {}) {
            return (function ({
              preloadedFeatures: i,
              createVisualElement: u,
              useRender: h,
              useVisualState: d,
              Component: c,
            }) {
              i &&
                (function (i) {
                  for (let u in i) z[u] = { ...z[u], ...i[u] };
                })(i);
              let v = (0, S.forwardRef)(function (v, $) {
                var N;
                let W,
                  z = {
                    ...(0, S.useContext)(V),
                    ...v,
                    layoutId: (function ({ layoutId: i }) {
                      let u = (0, S.useContext)(X).id;
                      return u && void 0 !== i ? u + "-" + i : i;
                    })(v),
                  },
                  { isStatic: Z } = z,
                  _ = (function (i) {
                    let { initial: u, animate: h } = (function (i, u) {
                      if (y(i)) {
                        let { initial: u, animate: h } = i;
                        return {
                          initial: !1 === u || m(u) ? u : void 0,
                          animate: m(h) ? h : void 0,
                        };
                      }
                      return !1 !== i.inherit ? u : {};
                    })(i, (0, S.useContext)(A));
                    return (0, S.useMemo)(
                      () => ({ initial: u, animate: h }),
                      [P(u), P(h)]
                    );
                  })(v),
                  K = d(v, Z);
                if (!Z && D) {
                  _.visualElement = (function (i, u, h, d) {
                    let { visualElement: c } = (0, S.useContext)(A),
                      v = (0, S.useContext)(O),
                      D = (0, S.useContext)(M),
                      $ = (0, S.useContext)(V).reducedMotion,
                      N = (0, S.useRef)();
                    (d = d || v.renderer),
                      !N.current &&
                        d &&
                        (N.current = d(i, {
                          visualState: u,
                          parent: c,
                          props: h,
                          presenceContext: D,
                          blockInitialAnimation: !!D && !1 === D.initial,
                          reducedMotionConfig: $,
                        }));
                    let W = N.current;
                    return (
                      (0, S.useInsertionEffect)(() => {
                        W && W.update(h, D);
                      }),
                      B(() => {
                        W && W.render();
                      }),
                      (0, S.useEffect)(() => {
                        W && W.updateFeatures();
                      }),
                      (window.HandoffAppearAnimations ? B : S.useEffect)(() => {
                        W &&
                          W.animationState &&
                          W.animationState.animateChanges();
                      }),
                      W
                    );
                  })(c, K, z, u);
                  let h = (0, S.useContext)(Y),
                    d = (0, S.useContext)(O).strict;
                  _.visualElement &&
                    (W = _.visualElement.loadFeatures(z, d, i, h));
                }
                return S.createElement(
                  A.Provider,
                  { value: _ },
                  W && _.visualElement
                    ? S.createElement(W, {
                        visualElement: _.visualElement,
                        ...z,
                      })
                    : null,
                  h(
                    c,
                    v,
                    ((N = _.visualElement),
                    (0, S.useCallback)(
                      (i) => {
                        i && K.mount && K.mount(i),
                          N && (i ? N.mount(i) : N.unmount()),
                          $ &&
                            ("function" == typeof $
                              ? $(i)
                              : p($) && ($.current = i));
                      },
                      [N]
                    )),
                    K,
                    Z,
                    _.visualElement
                  )
                );
              });
              return (v[Z] = c), v;
            })(
              ((i, u) =>
                (function (i, { forwardMotionProps: u = !1 }, h, d) {
                  return {
                    ...(E(i) ? Vt : At),
                    preloadedFeatures: h,
                    useRender: (function (i = !1) {
                      return (u, h, d, { latestValues: c }, v) => {
                        let V = (
                            E(u)
                              ? function (i, u, h, d) {
                                  let c = (0, S.useMemo)(() => {
                                    let h = {
                                      style: {},
                                      transform: {},
                                      transformOrigin: {},
                                      vars: {},
                                      attrs: {},
                                    };
                                    return (
                                      td(
                                        h,
                                        u,
                                        { enableHardwareAcceleration: !1 },
                                        tm(d),
                                        i.transformTemplate
                                      ),
                                      { ...h.attrs, style: { ...h.style } }
                                    );
                                  }, [u]);
                                  if (i.style) {
                                    let u = {};
                                    ts(u, i.style, i),
                                      (c.style = { ...u, ...c.style });
                                  }
                                  return c;
                                }
                              : function (i, u, h) {
                                  let d = {},
                                    c = (function (i, u, h) {
                                      let d = {};
                                      return (
                                        ts(d, i.style || {}, i),
                                        Object.assign(
                                          d,
                                          (function (
                                            { transformTemplate: i },
                                            u,
                                            h
                                          ) {
                                            return (0, S.useMemo)(() => {
                                              let d = {
                                                style: {},
                                                transform: {},
                                                transformOrigin: {},
                                                vars: {},
                                              };
                                              return (
                                                tn(
                                                  d,
                                                  u,
                                                  {
                                                    enableHardwareAcceleration:
                                                      !h,
                                                  },
                                                  i
                                                ),
                                                Object.assign(
                                                  {},
                                                  d.vars,
                                                  d.style
                                                )
                                              );
                                            }, [u]);
                                          })(i, u, h)
                                        ),
                                        i.transformValues
                                          ? i.transformValues(d)
                                          : d
                                      );
                                    })(i, u, h);
                                  return (
                                    i.drag &&
                                      !1 !== i.dragListener &&
                                      ((d.draggable = !1),
                                      (c.userSelect =
                                        c.WebkitUserSelect =
                                        c.WebkitTouchCallout =
                                          "none"),
                                      (c.touchAction =
                                        !0 === i.drag
                                          ? "none"
                                          : "pan-" +
                                            ("x" === i.drag ? "y" : "x"))),
                                    void 0 === i.tabIndex &&
                                      (i.onTap || i.onTapStart || i.whileTap) &&
                                      (d.tabIndex = 0),
                                    (d.style = c),
                                    d
                                  );
                                }
                          )(h, c, v, u),
                          A = {
                            ...(function (i, u, h) {
                              let d = {};
                              for (let c in i)
                                ("values" !== c ||
                                  "object" != typeof i.values) &&
                                  (tl(c) ||
                                    (!0 === h && ta(c)) ||
                                    (!u && !ta(c)) ||
                                    (i.draggable && c.startsWith("onDrag"))) &&
                                  (d[c] = i[c]);
                              return d;
                            })(h, "string" == typeof u, i),
                            ...V,
                            ref: d,
                          },
                          { children: M } = h,
                          D = (0, S.useMemo)(() => (R(M) ? M.get() : M), [M]);
                        return (0, S.createElement)(u, { ...A, children: D });
                      };
                    })(u),
                    createVisualElement: d,
                    Component: i,
                  };
                })(i, u, oi, rW))(i, u)
            );
          }
          if ("undefined" == typeof Proxy) return e;
          let u = new Map();
          return new Proxy(e, {
            get: (i, h) => (u.has(h) || u.set(h, e(h)), u.get(h)),
          });
        })();
    },
  },
]);
