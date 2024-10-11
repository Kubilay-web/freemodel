(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1664],
  {
    6691: function (e, t) {
      var n, l, u, f;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ACTION_FAST_REFRESH: function () {
            return y;
          },
          ACTION_NAVIGATE: function () {
            return i;
          },
          ACTION_PREFETCH: function () {
            return b;
          },
          ACTION_REFRESH: function () {
            return c;
          },
          ACTION_RESTORE: function () {
            return s;
          },
          ACTION_SERVER_ACTION: function () {
            return _;
          },
          ACTION_SERVER_PATCH: function () {
            return h;
          },
          PrefetchCacheEntryStatus: function () {
            return l;
          },
          PrefetchKind: function () {
            return n;
          },
          isThenable: function () {
            return p;
          },
        });
      let c = "refresh",
        i = "navigate",
        s = "restore",
        h = "server-patch",
        b = "prefetch",
        y = "fast-refresh",
        _ = "server-action";
      function p(e) {
        return (
          e &&
          ("object" == typeof e || "function" == typeof e) &&
          "function" == typeof e.then
        );
      }
      ((u = n || (n = {})).AUTO = "auto"),
        (u.FULL = "full"),
        (u.TEMPORARY = "temporary"),
        ((f = l || (l = {})).fresh = "fresh"),
        (f.reusable = "reusable"),
        (f.expired = "expired"),
        (f.stale = "stale"),
        ("function" == typeof t["default"] ||
          ("object" == typeof t["default"] && null !== t["default"])) &&
          void 0 === t["default"].__esModule &&
          (Object.defineProperty(t["default"], "__esModule", { value: !0 }),
          Object.assign(t["default"], t),
          (e.exports = t["default"]));
    },
    4318: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let l = n(8364);
      function o(e, t, u, f) {
        {
          let c = n(9720).normalizeLocalePath,
            i = n(3656).detectDomainLocale,
            s = t || c(e, u).detectedLocale,
            h = i(f, void 0, s);
          if (h) {
            let t = "http" + (h.http ? "" : "s") + "://",
              n = s === h.defaultLocale ? "" : "/" + s;
            return (
              "" + t + h.domain + (0, l.normalizePathTrailingSlash)("" + n + e)
            );
          }
          return !1;
        }
      }
      ("function" == typeof t["default"] ||
        ("object" == typeof t["default"] && null !== t["default"])) &&
        void 0 === t["default"].__esModule &&
        (Object.defineProperty(t["default"], "__esModule", { value: !0 }),
        Object.assign(t["default"], t),
        (e.exports = t["default"]));
    },
    9577: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return E;
          },
        });
      let l = n(8754),
        u = n(5893),
        f = l._(n(7294)),
        c = n(1401),
        i = n(2045),
        s = n(7420),
        h = n(7201),
        b = n(1443),
        y = n(9953),
        _ = n(5320),
        g = n(2905),
        P = n(4318),
        C = n(953),
        j = n(6691),
        m = new Set();
      function v(e, t, n, l, u, f) {
        if (f || (0, i.isLocalURL)(t)) {
          if (!l.bypassPrefetchedCheck) {
            let u =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== l.locale
                ? l.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (m.has(u)) return;
            m.add(u);
          }
          (async () => (f ? e.prefetch(t, u) : e.prefetch(t, n, l)))()["catch"](
            (e) => {}
          );
        }
      }
      function O(e) {
        return "string" == typeof e ? e : (0, s.formatUrl)(e);
      }
      let E = f["default"].forwardRef(function (e, t) {
        let n,
          l,
          {
            href: s,
            as: m,
            children: E,
            prefetch: M = null,
            passHref: T,
            replace: R,
            shallow: L,
            scroll: k,
            locale: A,
            onClick: I,
            onMouseEnter: x,
            onTouchStart: S,
            legacyBehavior: N = !1,
            ...w
          } = e;
        (n = E),
          N &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, u.jsx)("a", { children: n }));
        let U = f["default"].useContext(y.RouterContext),
          H = f["default"].useContext(_.AppRouterContext),
          K = null != U ? U : H,
          F = !U,
          z = !1 !== M,
          D = null === M ? j.PrefetchKind.AUTO : j.PrefetchKind.FULL,
          { href: V, as: B } = f["default"].useMemo(() => {
            if (!U) {
              let e = O(s);
              return { href: e, as: m ? O(m) : e };
            }
            let [e, t] = (0, c.resolveHref)(U, s, !0);
            return { href: e, as: m ? (0, c.resolveHref)(U, m) : t || e };
          }, [U, s, m]),
          q = f["default"].useRef(V),
          G = f["default"].useRef(B);
        N && (l = f["default"].Children.only(n));
        let Y = N ? l && "object" == typeof l && l.ref : t,
          [J, Q, W] = (0, g.useIntersection)({ rootMargin: "200px" }),
          X = f["default"].useCallback(
            (e) => {
              (G.current !== B || q.current !== V) &&
                (W(), (G.current = B), (q.current = V)),
                J(e),
                Y &&
                  ("function" == typeof Y
                    ? Y(e)
                    : "object" == typeof Y && (Y.current = e));
            },
            [B, Y, V, W, J]
          );
        f["default"].useEffect(() => {
          K && Q && z && v(K, V, B, { locale: A }, { kind: D }, F);
        }, [B, V, Q, A, z, null == U ? void 0 : U.locale, K, F, D]);
        let Z = {
          ref: X,
          onClick(e) {
            N || "function" != typeof I || I(e),
              N &&
                l.props &&
                "function" == typeof l.props.onClick &&
                l.props.onClick(e),
              K &&
                !e.defaultPrevented &&
                (function (e, t, n, l, u, c, s, h, b) {
                  let { nodeName: y } = e.currentTarget;
                  if (
                    "A" === y.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!b && !(0, i.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let d = () => {
                    let e = null == s || s;
                    "beforePopState" in t
                      ? t[u ? "replace" : "push"](n, l, {
                          shallow: c,
                          locale: h,
                          scroll: e,
                        })
                      : t[u ? "replace" : "push"](l || n, { scroll: e });
                  };
                  b ? f["default"].startTransition(d) : d();
                })(e, K, V, B, R, L, k, A, F);
          },
          onMouseEnter(e) {
            N || "function" != typeof x || x(e),
              N &&
                l.props &&
                "function" == typeof l.props.onMouseEnter &&
                l.props.onMouseEnter(e),
              K &&
                (z || !F) &&
                v(
                  K,
                  V,
                  B,
                  { locale: A, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: D },
                  F
                );
          },
          onTouchStart: function (e) {
            N || "function" != typeof S || S(e),
              N &&
                l.props &&
                "function" == typeof l.props.onTouchStart &&
                l.props.onTouchStart(e),
              K &&
                (z || !F) &&
                v(
                  K,
                  V,
                  B,
                  { locale: A, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: D },
                  F
                );
          },
        };
        if ((0, h.isAbsoluteUrl)(B)) Z.href = B;
        else if (!N || T || ("a" === l.type && !("href" in l.props))) {
          let e = void 0 !== A ? A : null == U ? void 0 : U.locale,
            t =
              (null == U ? void 0 : U.isLocaleDomain) &&
              (0, P.getDomainLocale)(
                B,
                e,
                null == U ? void 0 : U.locales,
                null == U ? void 0 : U.domainLocales
              );
          Z.href =
            t ||
            (0, C.addBasePath)(
              (0, b.addLocale)(B, e, null == U ? void 0 : U.defaultLocale)
            );
        }
        return N
          ? f["default"].cloneElement(l, Z)
          : (0, u.jsx)("a", { ...w, ...Z, children: n });
      });
      ("function" == typeof t["default"] ||
        ("object" == typeof t["default"] && null !== t["default"])) &&
        void 0 === t["default"].__esModule &&
        (Object.defineProperty(t["default"], "__esModule", { value: !0 }),
        Object.assign(t["default"], t),
        (e.exports = t["default"]));
    },
    9720: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeLocalePath", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (e, t) => n(1808).normalizeLocalePath(e, t);
      ("function" == typeof t["default"] ||
        ("object" == typeof t["default"] && null !== t["default"])) &&
        void 0 === t["default"].__esModule &&
        (Object.defineProperty(t["default"], "__esModule", { value: !0 }),
        Object.assign(t["default"], t),
        (e.exports = t["default"]));
    },
    2905: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let l = n(7294),
        u = n(3815),
        f = "function" == typeof IntersectionObserver,
        c = new Map(),
        i = [];
      function a(e) {
        let { rootRef: t, rootMargin: n, disabled: s } = e,
          h = s || !f,
          [b, y] = (0, l.useState)(!1),
          _ = (0, l.useRef)(null),
          g = (0, l.useCallback)((e) => {
            _.current = e;
          }, []);
        return (
          (0, l.useEffect)(() => {
            if (f) {
              if (h || b) return;
              let e = _.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: l,
                    observer: u,
                    elements: f,
                  } = (function (e) {
                    let t,
                      n = { root: e.root || null, margin: e.rootMargin || "" },
                      l = i.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (l && (t = c.get(l))) return t;
                    let u = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = u.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: u,
                      }),
                      i.push(n),
                      c.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    f.set(e, (e) => e && y(e)),
                    u.observe(e),
                    function () {
                      if ((f["delete"](e), u.unobserve(e), 0 === f.size)) {
                        u.disconnect(), c["delete"](l);
                        let e = i.findIndex(
                          (e) => e.root === l.root && e.margin === l.margin
                        );
                        e > -1 && i.splice(e, 1);
                      }
                    }
                  );
                })(e, 0, {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!b) {
              let e = (0, u.requestIdleCallback)(() => y(!0));
              return () => (0, u.cancelIdleCallback)(e);
            }
          }, [h, n, t, b, _.current]),
          [
            g,
            b,
            (0, l.useCallback)(() => {
              y(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t["default"] ||
        ("object" == typeof t["default"] && null !== t["default"])) &&
        void 0 === t["default"].__esModule &&
        (Object.defineProperty(t["default"], "__esModule", { value: !0 }),
        Object.assign(t["default"], t),
        (e.exports = t["default"]));
    },
    1664: function (e, t, n) {
      e.exports = n(9577);
    },
  },
]);
