(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1071],
  {
    2730: function (e, i, V) {
      var L = V(7294);
      function r(e) {
        return Array.prototype.slice.call(e);
      }
      function o(e, i) {
        var V = Math.floor(e);
        return V === i || V + 1 === i ? e : i;
      }
      function a() {
        return Date.now();
      }
      function u(e, i, V) {
        if (((i = "data-keen-slider-" + i), null === V))
          return e.removeAttribute(i);
        e.setAttribute(i, V || "");
      }
      function s(e, i) {
        return (
          (i = i || document),
          "function" == typeof e && (e = e(i)),
          Array.isArray(e)
            ? e
            : "string" == typeof e
            ? r(i.querySelectorAll(e))
            : e instanceof HTMLElement
            ? [e]
            : e instanceof NodeList
            ? r(e)
            : []
        );
      }
      function c(e) {
        e.raw && (e = e.raw),
          e.cancelable && !e.defaultPrevented && e.preventDefault();
      }
      function d(e) {
        e.raw && (e = e.raw), e.stopPropagation && e.stopPropagation();
      }
      function l() {
        var e = [];
        return {
          add: function (i, V, L, P) {
            i.addListener ? i.addListener(L) : i.addEventListener(V, L, P),
              e.push([i, V, L, P]);
          },
          input: function (e, i, V, L) {
            this.add(
              e,
              i,
              function (e) {
                e.nativeEvent && (e = e.nativeEvent);
                var i = e.changedTouches || [],
                  L = e.targetTouches || [],
                  P = e.detail && e.detail.x ? e.detail : null;
                return V({
                  id: P
                    ? P.identifier
                      ? P.identifier
                      : "i"
                    : L[0]
                    ? L[0]
                      ? L[0].identifier
                      : "e"
                    : "d",
                  idChanged: P
                    ? P.identifier
                      ? P.identifier
                      : "i"
                    : i[0]
                    ? i[0]
                      ? i[0].identifier
                      : "e"
                    : "d",
                  raw: e,
                  x: P && P.x ? P.x : L[0] ? L[0].screenX : P ? P.x : e.pageX,
                  y: P && P.y ? P.y : L[0] ? L[0].screenY : P ? P.y : e.pageY,
                });
              },
              L
            );
          },
          purge: function () {
            e.forEach(function (e) {
              e[0].removeListener
                ? e[0].removeListener(e[2])
                : e[0].removeEventListener(e[1], e[2], e[3]);
            }),
              (e = []);
          },
        };
      }
      function f(e, i, V) {
        return Math.min(Math.max(e, i), V);
      }
      function p(e) {
        return (e > 0 ? 1 : 0) - (e < 0 ? 1 : 0) || +e;
      }
      function v(e) {
        var i = e.getBoundingClientRect();
        return {
          height: o(i.height, e.offsetHeight),
          width: o(i.width, e.offsetWidth),
        };
      }
      function h(e, i, V, L) {
        var P = e && e[i];
        return null == P ? V : L && "function" == typeof P ? P() : P;
      }
      function g(e) {
        return Math.round(1e6 * e) / 1e6;
      }
      var m = function () {
        return (m =
          Object.assign ||
          function (e) {
            for (var i, V = 1, L = arguments.length; V < L; V++)
              for (var P in (i = arguments[V]))
                Object.prototype.hasOwnProperty.call(i, P) && (e[P] = i[P]);
            return e;
          }).apply(this, arguments);
      };
      function b(e, i, V) {
        if (V || 2 == arguments.length)
          for (var L, P = 0, j = i.length; P < j; P++)
            (!L && P in i) ||
              (L || (L = Array.prototype.slice.call(i, 0, P)), (L[P] = i[P]));
        return e.concat(L || Array.prototype.slice.call(i));
      }
      function y(e) {
        var i, V, L, P, j, N, H, W;
        function c(e) {
          return 1 - Math.pow(1 - e, 3);
        }
        function d() {
          return L ? e.track.velocity() : 0;
        }
        function l(e, i) {
          void 0 === i && (i = 1e3);
          var V = 147e-9 + (e = Math.abs(e)) / i;
          return { dist: Math.pow(e, 2) / V, dur: e / V };
        }
        function v() {
          var i = e.track.details;
          i && ((j = i.min), (N = i.max), (H = i.minIdx), (W = i.maxIdx));
        }
        function h() {
          e.animator.stop();
        }
        e.on("updated", v),
          e.on("optionsChanged", v),
          e.on("created", v),
          e.on("dragStarted", function () {
            (L = !1), h(), (i = V = e.track.details.abs);
          }),
          e.on("dragChecked", function () {
            L = !0;
          }),
          e.on("dragEnded", function () {
            var L,
              Y,
              q,
              B,
              F,
              X,
              $ = e.options.mode;
            "snap" === $ &&
              ((L = e.track),
              (q = (Y = e.track.details).position),
              (B = p(d())),
              (q > N || q < j) && (B = 0),
              (F = i + B),
              0 === Y.slides[L.absToRel(F)].portion && (F -= B),
              i !== V && (F = V),
              p(L.idxToDist(F, !0)) !== B && (F += B),
              (F = f(F, H, W)),
              (X = L.idxToDist(F, !0)),
              e.animator.start([
                {
                  distance: X,
                  duration: 500,
                  easing: function (e) {
                    return 1 + --e * e * e * e * e;
                  },
                },
              ])),
              ("free" !== $ && "free-snap" !== $) ||
                (function () {
                  h();
                  var i = "free-snap" === e.options.mode,
                    V = e.track,
                    L = d();
                  P = p(L);
                  var Y = e.track.details,
                    q = [];
                  if (L || !i) {
                    var B = l(L),
                      F = B.dist,
                      X = B.dur;
                    if (((X *= 2), (F *= P), i)) {
                      var $ = V.idxToDist(V.distToIdx(F), !0);
                      $ && (F = $);
                    }
                    q.push({ distance: F, duration: X, easing: c });
                    var G = Y.position,
                      J = G + F;
                    if (J < j || J > N) {
                      var K = J < j ? j - G : N - G,
                        Q = 0,
                        U = L;
                      if (p(K) === P) {
                        var Z = Math.min(Math.abs(K) / Math.abs(F), 1),
                          tt = (1 - Math.pow(1 - Z, 1 / 3)) * X;
                        (q[0].earlyExit = tt), (U = L * (1 - Z));
                      } else (q[0].earlyExit = 0), (Q += K);
                      var nt = l(U, 100),
                        et = nt.dist * P;
                      e.options.rubberband &&
                        (q.push({
                          distance: et,
                          duration: 2 * nt.dur,
                          easing: c,
                        }),
                        q.push({
                          distance: -et + Q,
                          duration: 500,
                          easing: c,
                        }));
                    }
                    e.animator.start(q);
                  } else
                    e.moveToIdx(f(Y.abs, H, W), !0, {
                      duration: 500,
                      easing: function (e) {
                        return 1 + --e * e * e * e * e;
                      },
                    });
                })();
          }),
          e.on("dragged", function () {
            V = e.track.details.abs;
          });
      }
      function w(e) {
        var i,
          V,
          L,
          P,
          j,
          N,
          H,
          W,
          Y,
          q,
          B,
          F,
          X,
          $,
          G,
          J,
          K,
          Q,
          U = l();
        function E(i) {
          if (N && W === i.id) {
            var X = z(i);
            if (Y) {
              if (!O(i)) return A(i);
              (q = X), (Y = !1), e.emit("dragChecked");
            }
            if (J) return (q = X);
            c(i);
            var $ = (function (i) {
              if (K === -1 / 0 && Q === 1 / 0) return i;
              var L = e.track.details,
                N = L.length,
                H = L.position,
                W = f(i, K - H, Q - H);
              if (0 === N) return 0;
              if (!e.options.rubberband) return W;
              if ((H <= Q && H >= K) || (H < K && V > 0) || (H > Q && V < 0))
                return i;
              var Y = Math.max(
                0,
                1 - (Math.abs(((H < K ? H - K : H - Q) / N) * (P * N)) / j) * 2
              );
              return Y * Y * i;
            })((H(q - X) / P) * L);
            V = p($);
            var G = e.track.details.position;
            ((G > K && G < Q) || (G === K && V > 0) || (G === Q && V < 0)) &&
              d(i),
              (B += $),
              !F && Math.abs(B * P) > 5 && (F = !0),
              e.track.add($),
              (q = X),
              e.emit("dragged");
          }
        }
        function I(i) {
          !N &&
            e.track.details &&
            e.track.details.length &&
            ((B = 0),
            (N = !0),
            (F = !1),
            (Y = !0),
            (W = i.id),
            O(i),
            (q = z(i)),
            e.emit("dragStarted"));
        }
        function A(i) {
          N && W === i.idChanged && ((N = !1), e.emit("dragEnded"));
        }
        function O(e) {
          var i = S(),
            V = i ? e.y : e.x,
            L = i ? e.x : e.y,
            P =
              void 0 !== X &&
              void 0 !== $ &&
              Math.abs($ - L) <= Math.abs(X - V);
          return (X = V), ($ = L), P;
        }
        function z(e) {
          return S() ? e.y : e.x;
        }
        function S() {
          return e.options.vertical;
        }
        function R() {
          (P = e.size), (j = S() ? window.innerHeight : window.innerWidth);
          var i = e.track.details;
          i && ((K = i.min), (Q = i.max));
        }
        function D(e) {
          F && (d(e), c(e));
        }
        function _() {
          if ((U.purge(), e.options.drag && !e.options.disabled)) {
            (H =
              "function" == typeof (P = e.options.dragSpeed || 1)
                ? P
                : function (e) {
                    return e * P;
                  }),
              (L = e.options.rtl ? -1 : 1),
              R(),
              (i = e.container),
              s(
                "["
                  .concat((V = "data-keen-slider-clickable"), "]:not([")
                  .concat(V, "=false])"),
                i
              ).map(function (e) {
                U.add(e, "dragstart", d),
                  U.add(e, "mousedown", d),
                  U.add(e, "touchstart", d);
              }),
              U.add(i, "dragstart", function (e) {
                c(e);
              }),
              U.add(i, "click", D, { capture: !0 }),
              U.input(i, "ksDragStart", I),
              U.input(i, "ksDrag", E),
              U.input(i, "ksDragEnd", A),
              U.input(i, "mousedown", I),
              U.input(i, "mousemove", E),
              U.input(i, "mouseleave", A),
              U.input(i, "mouseup", A),
              U.input(i, "touchstart", I, { passive: !0 }),
              U.input(i, "touchmove", E, { passive: !1 }),
              U.input(i, "touchend", A),
              U.input(i, "touchcancel", A),
              U.add(window, "wheel", function (e) {
                N && c(e);
              });
            var V,
              P,
              j = "data-keen-slider-scrollable";
            s("[".concat(j, "]:not([").concat(j, "=false])"), e.container).map(
              function (e) {
                var i;
                U.input(
                  e,
                  "touchstart",
                  function (e) {
                    (i = z(e)), (J = !0), (G = !0);
                  },
                  { passive: !0 }
                ),
                  U.input(e, "touchmove", function (V) {
                    var L = S(),
                      P = L
                        ? e.scrollHeight - e.clientHeight
                        : e.scrollWidth - e.clientWidth,
                      j = i - z(V),
                      N = L ? e.scrollTop : e.scrollLeft,
                      H =
                        (L && "scroll" === e.style.overflowY) ||
                        (!L && "scroll" === e.style.overflowX);
                    if (
                      ((i = z(V)),
                      ((j < 0 && N > 0) || (j > 0 && N < P)) && G && H)
                    )
                      return (J = !0);
                    (G = !1), c(V), (J = !1);
                  }),
                  U.input(e, "touchend", function () {
                    J = !1;
                  });
              }
            );
          }
        }
        e.on("updated", R),
          e.on("optionsChanged", _),
          e.on("created", _),
          e.on("destroyed", U.purge);
      }
      function k(e) {
        var i,
          V,
          L = null;
        function r(i, V, L) {
          e.animator.active
            ? a(i, V, L)
            : requestAnimationFrame(function () {
                return a(i, V, L);
              });
        }
        function o() {
          r(!1, !1, V);
        }
        function a(V, P, j) {
          var N = 0,
            H = e.size,
            W = e.track.details;
          if (W && i) {
            var Y = W.slides;
            i.forEach(function (e, i) {
              if (V) !L && P && s(e, null, j), c(e, null, j);
              else {
                if (!Y[i]) return;
                var W = Y[i].size * H;
                !L && P && s(e, W, j), c(e, Y[i].distance * H - N, j), (N += W);
              }
            });
          }
        }
        function u(i) {
          return "performance" === e.options.renderMode ? Math.round(i) : i;
        }
        function s(e, i, V) {
          var L = V ? "height" : "width";
          null !== i && (i = u(i) + "px"),
            (e.style["min-" + L] = i),
            (e.style["max-" + L] = i);
        }
        function c(e, i, V) {
          if (null !== i) {
            i = u(i);
            var L = V ? i : 0;
            i = "translate3d(".concat(V ? 0 : i, "px, ").concat(L, "px, 0)");
          }
          (e.style.transform = i), (e.style["-webkit-transform"] = i);
        }
        function d() {
          i && (a(!0, !0, V), (i = null)), e.on("detailsChanged", o, !0);
        }
        function l() {
          r(!1, !0, V);
        }
        function f() {
          d(),
            (V = e.options.vertical),
            e.options.disabled ||
              "custom" === e.options.renderMode ||
              ((L = "auto" === h(e.options.slides, "perView", null)),
              e.on("detailsChanged", o),
              (i = e.slides).length && l());
        }
        e.on("created", f),
          e.on("optionsChanged", f),
          e.on("beforeOptionsChanged", function () {
            d();
          }),
          e.on("updated", l),
          e.on("destroyed", d);
      }
      var x = function (e, i, V) {
        try {
          var L, P, j, N;
          return (
            (P = b(
              [
                ((L = {
                  drag: !0,
                  mode: "snap",
                  renderMode: "precision",
                  rubberband: !0,
                  selector: ".keen-slider__slide",
                }),
                function (i) {
                  var V,
                    P,
                    j,
                    N,
                    H,
                    W = l();
                  function p(e) {
                    var V;
                    u(
                      i.container,
                      "reverse",
                      "rtl" !==
                        ((V = i.container),
                        window
                          .getComputedStyle(V, null)
                          .getPropertyValue("direction")) || e
                        ? null
                        : ""
                    ),
                      u(i.container, "v", i.options.vertical && !e ? "" : null),
                      u(
                        i.container,
                        "disabled",
                        i.options.disabled && !e ? "" : null
                      );
                  }
                  function g() {
                    b() && x();
                  }
                  function b() {
                    var e = null;
                    if (
                      (N.forEach(function (i) {
                        i.matches && (e = i.__media);
                      }),
                      e === V)
                    )
                      return !1;
                    V || i.emit("beforeOptionsChanged"), (V = e);
                    var L = e ? j.breakpoints[e] : j;
                    return (i.options = m(m({}, j), L)), p(), I(), A(), C(), !0;
                  }
                  function y() {
                    return i.options.trackConfig.length;
                  }
                  function w(e) {
                    for (var H in ((V = !1),
                    (j = m(m({}, L), e)),
                    W.purge(),
                    (P = i.size),
                    (N = []),
                    j.breakpoints || [])) {
                      var Y = window.matchMedia(H);
                      (Y.__media = H), N.push(Y), W.add(Y, "change", g);
                    }
                    W.add(window, "orientationchange", E),
                      W.add(window, "resize", T),
                      b();
                  }
                  function k(e) {
                    i.animator.stop();
                    var V = i.track.details;
                    i.track.init(null != e ? e : V ? V.abs : 0);
                  }
                  function x(e) {
                    k(e), i.emit("optionsChanged");
                  }
                  function M(e, V) {
                    if (e) return w(e), void x(V);
                    I(), A();
                    var L = y();
                    C(), y() !== L ? x(V) : k(V), i.emit("updated");
                  }
                  function C() {
                    var e = i.options.slides;
                    if ("function" == typeof e)
                      return (i.options.trackConfig = e(i.size, i.slides));
                    for (
                      var V = i.slides,
                        L = V.length,
                        P = "number" == typeof e ? e : h(e, "number", L, !0),
                        j = [],
                        N = h(e, "perView", 1, !0),
                        H = h(e, "spacing", 0, !0) / i.size || 0,
                        W = "auto" === N ? H : H / N,
                        Y = h(e, "origin", "auto"),
                        q = 0,
                        B = 0;
                      B < P;
                      B++
                    ) {
                      var F =
                          "auto" === N
                            ? (function (e) {
                                var V = v(e);
                                return (
                                  (i.options.vertical ? V.height : V.width) /
                                    i.size || 1
                                );
                              })(V[B])
                            : 1 / N - H + W,
                        X = "center" === Y ? 0.5 - F / 2 : "auto" === Y ? 0 : Y;
                      j.push({ origin: X, size: F, spacing: H }), (q += F);
                    }
                    if (
                      ((q += H * (P - 1)),
                      "auto" === Y && !i.options.loop && 1 !== N)
                    ) {
                      var $ = 0;
                      j.map(function (e) {
                        var i = q - $;
                        return (
                          ($ += e.size + H),
                          i >= 1 || (e.origin = 1 - i - (q > 1 ? 0 : 1 - q)),
                          e
                        );
                      });
                    }
                    i.options.trackConfig = j;
                  }
                  function T() {
                    I();
                    var e = i.size;
                    i.options.disabled || e === P || ((P = e), M());
                  }
                  function E() {
                    T(), setTimeout(T, 500), setTimeout(T, 2e3);
                  }
                  function I() {
                    var e = v(i.container);
                    i.size = (i.options.vertical ? e.height : e.width) || 1;
                  }
                  function A() {
                    i.slides = s(i.options.selector, i.container);
                  }
                  (i.container = (H = s(e, document)).length ? H[0] : null),
                    (i.destroy = function () {
                      W.purge(), i.emit("destroyed"), p(!0);
                    }),
                    (i.prev = function () {
                      i.moveToIdx(i.track.details.abs - 1, !0);
                    }),
                    (i.next = function () {
                      i.moveToIdx(i.track.details.abs + 1, !0);
                    }),
                    (i.update = M),
                    w(i.options);
                }),
                k,
                w,
                y,
              ],
              V || [],
              !0
            )),
            (N = {}),
            (j = {
              emit: function (e) {
                N[e] &&
                  N[e].forEach(function (e) {
                    e(j);
                  });
                var i = j.options && j.options[e];
                i && i(j);
              },
              moveToIdx: function (e, i, V) {
                var L = j.track.idxToDist(e, i);
                if (L) {
                  var P = j.options.defaultAnimation;
                  j.animator.start([
                    {
                      distance: L,
                      duration: h(V || P, "duration", 500),
                      easing: h(V || P, "easing", function (e) {
                        return 1 + --e * e * e * e * e;
                      }),
                    },
                  ]);
                }
              },
              on: function (e, i, V) {
                void 0 === V && (V = !1), N[e] || (N[e] = []);
                var L = N[e].indexOf(i);
                L > -1 ? V && delete N[e][L] : V || N[e].push(i);
              },
              options: i,
            }),
            (function () {
              if (
                ((j.track = (function (e) {
                  var i,
                    V,
                    L,
                    P,
                    j,
                    N,
                    H,
                    W,
                    Y,
                    q,
                    B,
                    F,
                    X,
                    $,
                    G = 1 / 0,
                    J = [],
                    K = null,
                    Q = 0;
                  function T(e) {
                    R(Q + e);
                  }
                  function E(e) {
                    var i = I(Q + e).abs;
                    return z(i) === i ? i : null;
                  }
                  function I(e) {
                    var i = Math.floor(Math.abs(g(e / V))),
                      L = g(((e % V) + V) % V);
                    L === V && (L = 0);
                    var P = p(e),
                      j = H.indexOf(
                        b([], H, !0).reduce(function (e, i) {
                          return Math.abs(i - L) < Math.abs(e - L) ? i : e;
                        })
                      ),
                      W = j;
                    return (
                      P < 0 && i++,
                      j === N && ((W = 0), (i += P > 0 ? 1 : -1)),
                      { abs: W + i * N * P, origin: j, rel: W }
                    );
                  }
                  function A(e, i, V) {
                    if (i || !P.loop) return O(e, V);
                    if (z(e) !== e) return null;
                    var L,
                      j = I(null != V ? V : Q),
                      H = j.abs,
                      W = e - j.rel,
                      Y = H + W;
                    L = O(Y);
                    var q = O(Y - N * p(W));
                    return (
                      ((null !== q && Math.abs(q) < Math.abs(L)) ||
                        null === L) &&
                        (L = q),
                      g(L)
                    );
                  }
                  function O(e, i) {
                    if (
                      (null == i && (i = g(Q)), z((L = e)) !== L || null === e)
                    )
                      return null;
                    e = Math.round(e);
                    var L,
                      P = I(i),
                      j = P.abs,
                      W = P.rel,
                      Y = P.origin,
                      q = S(e),
                      B = ((i % V) + V) % V,
                      F = H[Y],
                      X = Math.floor((e - (j - W)) / N) * V;
                    return g(F - B - F + H[q] + X + (Y === N ? V : 0));
                  }
                  function z(e) {
                    return f(e, Y, q);
                  }
                  function S(e) {
                    return ((e % N) + N) % N;
                  }
                  function R(i) {
                    (V = i - Q),
                      J.push({ distance: V, timestamp: a() }),
                      J.length > 6 && (J = J.slice(-6)),
                      (Q = g(i));
                    var V,
                      L = D().abs;
                    if (L !== K) {
                      var P = null !== K;
                      (K = L), P && e.emit("slideChanged");
                    }
                  }
                  function D(H) {
                    var W = H
                      ? null
                      : (function () {
                          if (N) {
                            var e = P.loop,
                              i = e ? ((Q % V) + V) % V : Q,
                              H = (e ? Q % V : Q) - j[0][2],
                              W = 0 - (H < 0 && e ? V - Math.abs(H) : H),
                              G = 0,
                              J = I(Q),
                              K = J.abs,
                              U = J.rel,
                              Z = j[U][2],
                              tt = j.map(function (i, L) {
                                var j = W + G;
                                (j < 0 - i[0] || j > 1) &&
                                  (j +=
                                    (Math.abs(j) > V - 1 && e ? V : 0) * p(-j));
                                var H = L - U,
                                  Y = p(H),
                                  q = H + K;
                                e &&
                                  (-1 === Y && j > Z && (q += N),
                                  1 === Y && j < Z && (q -= N),
                                  null !== B && q < B && (j += V),
                                  null !== F && q > F && (j -= V));
                                var X = j + i[0] + i[1],
                                  $ = Math.max(
                                    j >= 0 && X <= 1
                                      ? 1
                                      : X < 0 || j > 1
                                      ? 0
                                      : j < 0
                                      ? Math.min(1, (i[0] + j) / i[0])
                                      : (1 - j) / i[0],
                                    0
                                  );
                                return (
                                  (G += i[0] + i[1]),
                                  {
                                    abs: q,
                                    distance: P.rtl ? -1 * j + 1 - i[0] : j,
                                    portion: $,
                                    size: i[0],
                                  }
                                );
                              });
                            return (
                              (U = S((K = z(K)))),
                              {
                                abs: z(K),
                                length: L,
                                max: $,
                                maxIdx: q,
                                min: X,
                                minIdx: Y,
                                position: Q,
                                progress: e ? i / V : Q / L,
                                rel: U,
                                slides: tt,
                                slidesLength: V,
                              }
                            );
                          }
                        })();
                    return (i.details = W), e.emit("detailsChanged"), W;
                  }
                  return (i = {
                    absToRel: S,
                    add: T,
                    details: null,
                    distToIdx: E,
                    idxToDist: A,
                    init: function (i) {
                      var J, K, U, Z;
                      if (
                        ((function () {
                          if (
                            (N = (j = ((P = e.options).trackConfig || []).map(
                              function (e) {
                                return [
                                  h(e, "size", 1),
                                  h(e, "spacing", 0),
                                  h(e, "origin", 0),
                                ];
                              }
                            )).length)
                          ) {
                            V = g(
                              j.reduce(function (e, i) {
                                return e + i[0] + i[1];
                              }, 0)
                            );
                            var i,
                              Y = N - 1;
                            (L = g(V + j[0][2] - j[Y][0] - j[Y][2] - j[Y][1])),
                              (H = j.reduce(function (e, V) {
                                if (!e) return [0];
                                var L = j[e.length - 1],
                                  P = e[e.length - 1] + (L[0] + L[2]) + L[1];
                                return (
                                  (P -= V[2]),
                                  e[e.length - 1] > P && (P = e[e.length - 1]),
                                  (P = g(P)),
                                  e.push(P),
                                  (!i || i < P) && (W = e.length - 1),
                                  (i = P),
                                  e
                                );
                              }, null)),
                              0 === L && (W = 0),
                              H.push(g(V));
                          }
                        })(),
                        !N)
                      )
                        return D(!0);
                      (J = e.options.range),
                        (B = Y =
                          (K = e.options.loop) ? h(K, "min", -1 / 0) : 0),
                        (F = q = K ? h(K, "max", G) : W),
                        (U = h(J, "min", null)),
                        (Z = h(J, "max", null)),
                        U && (Y = U),
                        Z && (q = Z),
                        (X =
                          Y === -1 / 0 ? Y : e.track.idxToDist(Y || 0, !0, 0)),
                        ($ = q === G ? q : A(q, !0, 0)),
                        null === Z && (F = q),
                        h(J, "align", !1) &&
                          q !== G &&
                          0 === j[S(q)][2] &&
                          (($ -= 1 - j[S(q)][0]), (q = E($ - Q))),
                        (X = g(X)),
                        ($ = g($)),
                        Number(i) === i ? T(O(z(i))) : D();
                    },
                    to: R,
                    velocity: function () {
                      var e = a(),
                        i = J.reduce(
                          function (i, V) {
                            var L = V.distance,
                              P = V.timestamp;
                            return (
                              e - P > 200 ||
                                (p(L) !== p(i.distance) &&
                                  i.distance &&
                                  (i = {
                                    distance: 0,
                                    lastTimestamp: 0,
                                    time: 0,
                                  }),
                                i.time && (i.distance += L),
                                i.lastTimestamp &&
                                  (i.time += P - i.lastTimestamp),
                                (i.lastTimestamp = P)),
                              i
                            );
                          },
                          { distance: 0, lastTimestamp: 0, time: 0 }
                        );
                      return i.distance / i.time || 0;
                    },
                  });
                })(j)),
                (j.animator = (function (e) {
                  var i, V, L, P, j, N;
                  function u(e) {
                    i.active = e;
                  }
                  function s(e) {
                    i.targetIdx = e;
                  }
                  function c() {
                    var i;
                    (i = j),
                      window.cancelAnimationFrame(i),
                      u(!1),
                      s(null),
                      N && e.emit("animationStopped"),
                      (N = null);
                  }
                  return (i = {
                    active: !1,
                    start: function (i) {
                      if ((c(), e.track.details)) {
                        var H = 0,
                          W = e.track.details.position;
                        (V = 0),
                          (L = 0),
                          (P = i.map(function (e) {
                            var i,
                              V = Number(W),
                              P =
                                null !== (i = e.earlyExit) && void 0 !== i
                                  ? i
                                  : e.duration,
                              j = e.easing,
                              N = e.distance * j(P / e.duration) || 0;
                            W += N;
                            var Y = L;
                            return (
                              (L += P),
                              (H += N),
                              [V, e.distance, Y, L, e.duration, j]
                            );
                          })),
                          s(e.track.distToIdx(H)),
                          (function n() {
                            var i;
                            (i = function o(i) {
                              N || (N = i), u(!0);
                              var j = i - N;
                              j > L && (j = L);
                              var H = P[V];
                              if (H[3] < j) return V++, o(i);
                              var W = H[2],
                                Y = H[4],
                                q = H[0],
                                B = H[1] * (0, H[5])(0 === Y ? 1 : (j - W) / Y);
                              if ((B && e.track.to(q + B), j < L)) return n();
                              (N = null),
                                u(!1),
                                s(null),
                                e.emit("animationEnded");
                            }),
                              (j = window.requestAnimationFrame(i));
                          })(),
                          e.emit("animationStarted");
                      }
                    },
                    stop: c,
                    targetIdx: null,
                  });
                })(j)),
                P)
              )
                for (var e = 0; e < P.length; e++) (0, P[e])(j);
              j.track.init(j.options.initial || 0), j.emit("created");
            })(),
            j
          );
        } catch (e) {
          console.error(e);
        }
      };
      i.E = function (e, i) {
        var V = L.useRef(null),
          P = L.useRef(!1),
          j = L.useRef(e),
          N = L.useCallback(function (L) {
            L
              ? ((j.current = e),
                (V.current = new x(L, e, i)),
                (P.current = !1))
              : (V.current && V.current.destroy && V.current.destroy(),
                (V.current = null));
          }, []);
        return (
          L.useEffect(
            function () {
              (function t(e, i) {
                if (e === i) return !0;
                var V = typeof e;
                if (V !== typeof i) return !1;
                if ("object" !== V || null === e || null === i)
                  return "function" === V && e.toString() === i.toString();
                if (
                  e.length !== i.length ||
                  Object.getOwnPropertyNames(e).length !==
                    Object.getOwnPropertyNames(i).length
                )
                  return !1;
                for (var L in e) if (!t(e[L], i[L])) return !1;
                return !0;
              })(j.current, e) ||
                ((j.current = e), V.current && V.current.update(j.current));
            },
            [e]
          ),
          [N, V]
        );
      };
    },
    7497: function () {},
    2708: function (e, i, V) {
      V.d(i, {
        YD: function () {
          return c;
        },
      });
      var L = V(7294),
        P = (Object.defineProperty, new Map()),
        j = new WeakMap(),
        N = 0,
        H = void 0;
      function c({
        threshold: e,
        delay: i,
        trackVisibility: V,
        rootMargin: W,
        root: Y,
        triggerOnce: q,
        skip: B,
        initialInView: F,
        fallbackInView: X,
        onChange: $,
      } = {}) {
        var G;
        let [J, K] = L.useState(null),
          Q = L.useRef(),
          [U, Z] = L.useState({ inView: !!F, entry: void 0 });
        (Q.current = $),
          L.useEffect(() => {
            let L;
            if (!B && J)
              return (
                (L = (function (e, i, V = {}, L = H) {
                  if (void 0 === window.IntersectionObserver && void 0 !== L) {
                    let P = e.getBoundingClientRect();
                    return (
                      i(L, {
                        isIntersecting: L,
                        target: e,
                        intersectionRatio:
                          "number" == typeof V.threshold ? V.threshold : 0,
                        time: 0,
                        boundingClientRect: P,
                        intersectionRect: P,
                        rootBounds: P,
                      }),
                      () => {}
                    );
                  }
                  let {
                      id: W,
                      observer: Y,
                      elements: q,
                    } = (function (e) {
                      let i = Object.keys(e)
                          .sort()
                          .filter((i) => void 0 !== e[i])
                          .map((i) => {
                            var V;
                            return `${i}_${
                              "root" === i
                                ? (V = e.root)
                                  ? (j.has(V) ||
                                      ((N += 1), j.set(V, N.toString())),
                                    j.get(V))
                                  : "0"
                                : e[i]
                            }`;
                          })
                          .toString(),
                        V = P.get(i);
                      if (!V) {
                        let L,
                          j = new Map(),
                          N = new IntersectionObserver((i) => {
                            i.forEach((i) => {
                              var V;
                              let P =
                                i.isIntersecting &&
                                L.some((e) => i.intersectionRatio >= e);
                              e.trackVisibility &&
                                void 0 === i.isVisible &&
                                (i.isVisible = P),
                                null == (V = j.get(i.target)) ||
                                  V.forEach((e) => {
                                    e(P, i);
                                  });
                            });
                          }, e);
                        (L =
                          N.thresholds ||
                          (Array.isArray(e.threshold)
                            ? e.threshold
                            : [e.threshold || 0])),
                          (V = { id: i, observer: N, elements: j }),
                          P.set(i, V);
                      }
                      return V;
                    })(V),
                    B = q.get(e) || [];
                  return (
                    q.has(e) || q.set(e, B),
                    B.push(i),
                    Y.observe(e),
                    function () {
                      B.splice(B.indexOf(i), 1),
                        0 === B.length && (q["delete"](e), Y.unobserve(e)),
                        0 === q.size && (Y.disconnect(), P["delete"](W));
                    }
                  );
                })(
                  J,
                  (e, i) => {
                    Z({ inView: e, entry: i }),
                      Q.current && Q.current(e, i),
                      i.isIntersecting && q && L && (L(), (L = void 0));
                  },
                  {
                    root: Y,
                    rootMargin: W,
                    threshold: e,
                    trackVisibility: V,
                    delay: i,
                  },
                  X
                )),
                () => {
                  L && L();
                }
              );
          }, [Array.isArray(e) ? e.toString() : e, J, Y, W, q, B, V, X, i]);
        let tt = null == (G = U.entry) ? void 0 : G.target,
          nt = L.useRef();
        J ||
          !tt ||
          q ||
          B ||
          nt.current === tt ||
          ((nt.current = tt), Z({ inView: !!F, entry: void 0 }));
        let et = [K, U.inView, U.entry];
        return (et.ref = et[0]), (et.inView = et[1]), (et.entry = et[2]), et;
      }
      L.Component;
    },
  },
]);
