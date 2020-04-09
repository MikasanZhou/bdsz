;
/*!/app/constants/nav.js*/
define("629be40", function (e, A) {
    "use strict";
    A.NAV_UPDATE = "NAV_UPDATE"
});
;
/*!/app/reducers/nav.js*/
define("267a348", function (e, t) {
    "use strict";

    function u(e, t) {
        switch (void 0 === e && (e = n), t.type) {
            case a.NAV_UPDATE:
                return t.data;
            default:
                return e
        }
    }

    var a = e("629be40"), n = {};
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = u
});
;
/*!/app/constants/userinfo.js*/
define("5e518fe", function (O, E) {
    "use strict";
    E.USERINFO_LOGIN = "USERINFO_LOGIN", E.USERINFO_LOGOUT = "USERINFO_LOGOUT", E.USERINFO_UPDATEIMAGEMODEL = "USERINFO_UPDATEIMAGEMODEL", E.USERINFO_UPDATELOCALINFO = "USERINFO_UPDATELOCALINFO", E.USERINFO_UPDATE_FONT_SIZE = "USERINFO_UPDATE_FONT_SIZE"
});
;
/*!/app/reducers/userinfo.js*/
define("fcbe2a8", function (e, t) {
    "use strict";

    function a(e, t) {
        switch (void 0 === e && (e = u), t.type) {
            case r.USERINFO_LOGIN:
                return t.data;
            case r.USERINFO_LOGOUT:
                return t.data;
            case r.USERINFO_UPDATEIMAGEMODEL:
                return t.data;
            case r.USERINFO_UPDATE_FONT_SIZE:
                return t.data;
            case r.USERINFO_UPDATELOCALINFO:
                return t.data;
            default:
                return e
        }
    }

    var r = e("5e518fe"), u = {};
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
});
;
/*!/app/constants/ad.js*/
define("1511f8e", function (e, A) {
    "use strict";
    A.AD_UPDATE = "AD_UPDATE"
});
;
/*!/app/reducers/ad.js*/
define("a3acad7", function (e, t) {
    "use strict";

    function a(e, t) {
        switch (void 0 === e && (e = d), t.type) {
            case u.AD_UPDATE:
                return t.data;
            default:
                return e
        }
    }

    var u = e("1511f8e"), d = {};
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
});
;
/*!/app/constants/collectlist.js*/
define("527b632", function (L, T) {
    "use strict";
    T.COLLECTLIST_UPDATE = "COLLECTLIST_UPDATE", T.COLLECTLIST_ADDITEMS = "COLLECTLIST_ADDITEMS", T.COLLECTLIST_ADDITEM = "COLLECTLIST_ADDITEM", T.COLLECTLIST_RMITEM = "COLLECTLIST_RMITEM"
});
;
/*!/app/reducers/collecclist.js*/
define("27a62da", function (e, t) {
    "use strict";

    function a(e, t) {
        switch (void 0 === e && (e = r), t.type) {
            case n.COLLECTLIST_UPDATE:
                return t.data;
            case n.COLLECTLIST_ADDITEMS:
                return e.concat(t.data);
            case n.COLLECTLIST_ADDITEM:
                return e.unshift(t.data), e;
            case n.COLLECTLIST_RMITEM:
                return e.filter(function (e) {
                    return e.nid !== t.data.nid ? e : void 0
                });
            default:
                return e
        }
    }

    var n = e("527b632"), r = [];
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
});
;
/*!/app/reducers/index.js*/
define("651cd43", function (e, a) {
    "use strict";
    var d = e("ecb7045"), t = e("267a348"), c = e("fcbe2a8"), u = e("a3acad7"), f = e("27a62da"),
        l = d.combineReducers({
            nav: t.default,
            userinfo: c.default,
            ad: u.default,
            collectlist: f.default
        });
    Object.defineProperty(a, "__esModule", {value: !0}), a.default = l
});
;
/*!/app/store/configureStore.js*/
define("95d86e0", function (e, o) {
    "use strict";

    function n(e) {
        var o = t.createStore(d.default, e, window.devToolsExtension ? window.devToolsExtension() : void 0);
        return o
    }

    var t = e("ecb7045"), d = e("651cd43");
    Object.defineProperty(o, "__esModule", {value: !0}), o.default = n
});
;
/*!/app/router/appHistory.js*/
define("557cc4f", function (e, t) {
    "use strict";
    var r = e("d9ac10b"), u = e("517706e"),
        c = r.useRouterHistory(u.createHashHistory)({queryKey: !1});
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = c
});
;
/*!/app/util/common.js*/
define("96d7310", function (n, t) {
    "use strict";

    function r(n) {
        return "function" == typeof n
    }

    function i() {
        var n = +new Date, t = (n + "").slice(-3);
        return t++
    }

    function e() {
        var n = navigator.userAgent;
        return / baiduboxapp\//i.test(n)
    }

    function o() {
        var n = navigator.userAgent;
        return /baidubrowser/i.test(n)
    }

    function u(n) {
        return a(n) && !c(n) && Object.getPrototypeOf(n) == Object.prototype
    }

    function a(n) {
        return "object" == typeof n
    }

    function c(n) {
        return null != n && n == n.window
    }

    function s(n) {
        return Array.isArray(n)
    }

    function f(n, t) {
        return t.slice.call(n)
    }

    function d(n) {
        return "boolean" == typeof n
    }

    function w(n) {
        return void 0 === n
    }

    function b() {
        var n = window.navigator.userAgent;
        return /(Android);?[\s\/]+([\d.]+)?/.test(n)
    }

    function g() {
        var n = window.navigator.userAgent;
        return n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    }

    function v() {
        var n = window.navigator.userAgent;
        return n.match(/UC/) || window.ucweb || window.ucbrowser
    }

    t.isFunction = r, t.getId = i, t.isBox = e, t.isBaiduBrowser = o, t.isPlainObject = u, t.isObject = a, t.isWindow = c, t.isArray = s, t.toArray = f, t.isBoolean = d, t.isUndefined = w, t.isAndroid = b, t.isIOS = g, t.isUC = v
});
;
/*!/app/fetch/post.js*/
define("c2909ec", function (e, n) {
    "use strict";

    function t(e) {
        var n, t = "";
        for (n in e) t += "&" + n + "=" + encodeURIComponent(e[n]);
        return t && (t = t.slice(1)), t
    }

    function o(e, n) {
        if (e.indexOf("recommendlist") > 0 || e.indexOf("relatednewslist") > 0 || e.indexOf("newchosenlist") > 0 || e.indexOf("recommendinfo") > 0) {
            var o = /pad/i.test(navigator.userAgent) ? 2 : 1, r = a.isIOS() ? 2 : 1,
                i = screen.width, c = screen.height;
            n.remote_device_type = o, n.os_type = r, n.screen_size_width = i, n.screen_size_height = c
        }
        var d = fetch(e, {
            method: "POST",
            credentials: "include",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: t(n)
        });
        return d
    }

    function r(e, n) {
        var o = fetch(e, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: t(n)
        });
        return o
    }

    function i(e, n, o) {
        var r = document.createElement("script");
        n = t(n), n && (e += (-1 === e.indexOf("?") ? "?" : "&") + n);
        var i = c();
        r.type = "text/javascript", r.src = e;
        var a, d = !0, s = function () {
            a && clearTimeout(a), r.onload = r.onreadystatechange = r.onerror = null, r = null
        }, l = function () {
            !r || r.readyState && !/loaded|complete/.test(r.readyState) || (s(), d = !1)
        }, u = function () {
            s(), d = !1, window[o]({errno: "failed"})
        };
        a = setTimeout(function () {
            s(), d = !1
        }, 2e3), r.onload = r.onreadystatechange = r.onerror = l, r.onerror = u, i.appendChild(r)
    }

    function c() {
        return document.head || document.getElementsByTagName("head")[0] || document.documentElement
    }

    e("89c93f8"), e("48b4cd1"), e("9e26c59");
    var a = e("96d7310");
    n.post = o, n.postNoCredentials = r, n.getjsonp = i
});
;
/*!/app/fetch/newslist/withNav/afd.js*/
define("d10eb16", function (e, t) {
    "use strict";

    function i() {
        var e = navigator.userAgent;
        return e.indexOf("Android") > -1 || e.indexOf("Adr") > -1 ? 2 : e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? 1 : 0
    }

    function a(e) {
        return new Promise(function (t) {
            var a = e.pos, n = parseInt(e.fc), o = parseInt(1e5 * Math.random(), 10);
            window["getAFDCallback_" + o] = function (e) {
                t(0 != e.errno ? {error: "server_error", pos: a, da_ext1: 1} : e)
            };
            var d, r;
            d = "https://afd.baidu.com/afd/entry";
            var s = window.document.cookie.match(/userId=[^;]*/g) && window.document.cookie.match(/userId=[^;]*/g)[0].slice(7),
                u = window.document.cookie.match(/BAIDUID=[^;]*/g) && window.document.cookie.match(/BAIDUID=[^;]*/g)[0].slice(8);
            r = {
                pid: 2 == i() ? 1498720506054 : 1498720644947,
                ac: e.ac || 1,
                pn: 0,
                ver: "",
                uid: s || "",
                bdid: u || "",
                cuid: "",
                mod: "",
                ot: i(),
                ov: "",
                sv: "",
                nt: 0,
                ct: 1,
                sw: window.innerWidth,
                sh: window.innerHeight,
                iw: window.innerWidth,
                ih: window.innerHeight,
                sd: "",
                imei: "",
                idfa: "",
                ua: window.navigator.userAgent,
                idc: "",
                refer: "",
                fmt: "jsonp",
                ft: "",
                fc: n || "",
                mc: "",
                qe: "xianhua1",
                st: 2,
                coot: "",
                lgt: "",
                lat: "",
                tabn: e.tabn || "",
                tabid: "",
                ip: "",
                apna: "",
                flr: a || "",
                ctk: "",
                ext: "",
                callback: "getAFDCallback_" + o,
                tuid: "",
                acid: "",
                eid: "",
                pt: "",
                mpi: "",
                is_https: 1
            }, setTimeout(function () {
                t({errno: "timeout", pos: a, da_ext1: 5})
            }, 1500), c.getjsonp(d, r, "getAFDCallback_" + o)
        })
    }

    function n(e) {
        return new Promise(function (t) {
            var a = e.pos, n = parseInt(e.fc), o = parseInt(1e5 * Math.random(), 10);
            window["getAFDCallback_" + o] = function (e) {
                t(0 != e.errno ? {error: "server_error", pos: a, da_ext1: 1} : e)
            };
            var d, s;
            d = "https://afd.baidu.com/afd/entry";
            var u = [];
            r.isIOS() ? (u.push({pid: "1517295245188", ac: 1}), u.push({
                pid: "1517295325631",
                ac: e.ac
            })) : (u.push({pid: "1517295199356", ac: 1}), u.push({pid: "1517295358894", ac: e.ac}));
            var p = window.document.cookie.match(/userId=[^;]*/g) && window.document.cookie.match(/userId=[^;]*/g)[0].slice(7),
                w = window.document.cookie.match(/BAIDUID=[^;]*/g) && window.document.cookie.match(/BAIDUID=[^;]*/g)[0].slice(8);
            s = {
                pid: r.isIOS() ? "1517295245188_1517295325631" : "1517295199356_1517295358894",
                ac: e.ac || 1,
                pn: 0,
                ver: "",
                uid: p || "",
                bdid: w || "",
                cuid: "",
                mod: "",
                ot: i(),
                ov: "",
                sv: "",
                nt: 0,
                ct: 1,
                sw: window.innerWidth,
                sh: window.innerHeight,
                iw: window.innerWidth,
                ih: window.innerHeight,
                sd: "",
                imei: "",
                idfa: "",
                ua: window.navigator.userAgent,
                idc: "",
                refer: "",
                fmt: "jsonp",
                ft: "",
                fc: n || "",
                mc: "",
                qe: "xianhua1",
                st: 2,
                coot: "",
                lgt: "",
                lat: "",
                tabn: e.tabn || "",
                tabid: "",
                ip: "",
                apna: "",
                flr: a || "",
                ctk: "",
                ext: "",
                callback: "getAFDCallback_" + o,
                tuid: "",
                acid: "",
                eid: "",
                pt: "",
                mpi: JSON.stringify(u),
                is_https: 1
            }, setTimeout(function () {
                t({errno: "timeout", pos: a, da_ext1: 5})
            }, 1500), c.getjsonp(d, s, "getAFDCallback_" + o)
        })
    }

    function o(e) {
        try {
            window._hmt.push(["_trackEvent", "adsYuansheng", e.trigger_type || "click"])
        } catch (t) {
        }
        var a, n;
        a = "https://als.baidu.com/clog/clog";
        var o = window.document.cookie.match(/userId=[^;]*/g) && window.document.cookie.match(/userId=[^;]*/g)[0].slice(7),
            d = window.document.cookie.match(/BAIDUID=[^;]*/g) && window.document.cookie.match(/BAIDUID=[^;]*/g)[0].slice(8);
        n = {
            productId: 7,
            _client_type: 1,
            _client_version: "",
            _os_type: i(),
            _os_version: "",
            model: "",
            net_type: 0,
            cuid: "",
            baiduid: d || "",
            passportId: o || "",
            ad: encodeURIComponent(JSON.stringify([{
                da_type: e.da_type || 0,
                da_page: e.da_page || "FRS",
                da_page_num: e.da_page_num || 1,
                da_locate: e.pos,
                origin_time: (new Date).getTime(),
                da_area: e.da_area || "",
                extra_param: e.extra_params || "undefined",
                da_ext1: e.da_ext1 || ""
            }]))
        };
        var r = c.postNoCredentials(a, n);
        return r
    }

    function d(e) {
        o({
            pos: e.pos || 3,
            da_type: 5,
            da_page_num: e.floor || 1,
            da_ext1: e.da_ext1,
            trigger_type: "logError"
        })
    }

    var c = e("c2909ec"), r = e("96d7310");
    t.getAFDNewsData = a, t.getRelativeAFDNewsData = n, t.logAFDNewsData = o, t.logErrorAFDNewsData = d
});
;
/*!/app/util/afd.js*/
define("a5a3143", function (e, a) {
    "use strict";

    function t() {
        for (var e = document.getElementsByClassName("afd-item"), a = 0; a < e.length; a++) {
            var t = e[a];
            if (t.classList.contains("afd-item-visit")) if (o() + window.innerHeight > t.offsetTop + 89 && t.offsetTop + 89 + t.offsetHeight > o() && window.exts && window.exts.length > 0) {
                var n = window.exts[a];
                if (t.classList.remove("afd-item-visit"), 0 == t.offsetHeight) {
                    d.logAFDNewsData({
                        pos: n.floor + 1,
                        da_type: 3,
                        da_page_num: n.page + 1,
                        da_page: n.da_page || "FRS",
                        extra_params: n.extraParamsAFD,
                        trigger_type: "DETAIL" === n.da_page ? "detailMoveTop" : "feedMoveTop"
                    });
                    continue
                }
                d.logAFDNewsData({
                    pos: n.floor + 1,
                    da_type: 3,
                    da_page_num: n.page + 1,
                    da_page: n.da_page || "FRS",
                    extra_params: n.extraParamsAFD,
                    trigger_type: "DETAIL" === n.da_page ? "detailMoveScroll" : "feedMoveScroll"
                })
            } else ;
        }
    }

    function o() {
        var e;
        return "undefined" != typeof window.pageYOffset ? e = window.pageYOffset : "undefined" != typeof document.compatMode && "BackCompat" != document.compatMode ? e = document.documentElement.scrollTop : "undefined" != typeof document.body && (e = document.body.scrollTop), e
    }

    var d = e("d10eb16");
    a.afdLogProcess = t
});
;
/*!/app/components/ShareBox/detect.js*/
define("4e62aeb", function (i, e) {
    "use strict";

    function n(i) {
        var e = {name: "unknown", version: 0};
        this === window || this.os || (this.os = e), i = i;
        var n = {Weibo: /weibo/i, Wechat: /micromessenger\//i, QQ: /QQ\//};
        for (var o in n) n.hasOwnProperty(o) && (e["is" + o] = n[o].test(i));
        e.isUC = i.match(/UC/) || window.ucweb || window.ucbrowser;
        var r = i.match(/Windows Phone ([\d.]+)/);
        if (r) return e.win10 = !0, e.version = r[1], e.name = "win10", e;
        var s = i.match(/(Android);?\s+([\d.]+)?/);
        if (s) return e.android = !0, e.version = s[2], e.name = "android", e;
        var a = i.match(/(iPad).*OS\s([\d_]+)/), t = i.match(/(iPod)(.*OS\s([\d_]+))?/),
            d = !a && i.match(/(iPhone\sOS)\s([\d_]+)/);
        return d && !t ? (e.ios = e.iphone = !0, e.version = d[2].replace(/_/g, "."), e.name = "ios", e) : a ? (e.ios = e.ipad = !0, e.name = "ios", e.version = a[2].replace(/_/g, "."), e) : t ? (e.name = "ios", e.ios = e.ipod = !0, e.version = t[3] ? t[3].replace(/_/g, ".") : null, e) : e
    }

    e.detect = n
});
;
/*!/app/components/ShareBox/version_compare.js*/
define("51a1049", function (t, n) {
    "use strict";

    function r(t, n) {
        n += "", t += "";
        for (var r = t.split("."), e = n.split("."), a = 0, s = Math.max(r.length, e.length); s > a; a++) {
            if (r[a] && !e[a] && parseInt(r[a], 10) > 0 || parseInt(r[a], 10) > parseInt(e[a], 10)) return 1;
            if (e[a] && !r[a] && parseInt(e[a], 10) > 0 || parseInt(r[a], 10) < parseInt(e[a], 10)) return -1
        }
        return 0
    }

    n.versionCompare = r
});
;
/*!/app/components/ShareBox/share.jsx*/
define("d4a0d6d", function (e, a) {
    "use strict";

    function i(e, a, i) {
        var n = +Date.now(), s = a || "normal", t = document.createElement("iframe");
        t.style.display = "none", t.src = e;
        var d = document.body || document.getElementsByTagName("body")[0];
        d.appendChild(t), setTimeout(function () {
            d.removeChild(t), t = null
        }, 0), setTimeout(function () {
            Date.now() - n < 1600 && ("webdetrel" == a || "webdetban" == a || "webappout" == a ? window.location.href = "https://m.news.baidu.com/app/downloadv8?from=" + s : p.default.push("detail/" + i))
        }, 100)
    }

    function n() {
        var e = document.createElement("div");
        e.innerHTML = '<div class="wrapper"><section class="main"><div class="tips"></div><dl class="options"><dt><span class="num">1</span> <span class="case">若您已安装百度新闻</span></dt><dd class="bb"><div class="wizard"><div class="arr"></div><div class="img"></div><p>第1步 点击该页右上角的“更多”</p><p>第2步 选择在浏览器中打开</p></div></dd><dt><span class="num">2</span> <span class="case">若您尚未安装百度新闻</span></dt><dd><a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.news" class="btn">去Appstore下载</a></dd></dl></section><footer><div class="logo"></div><div class="copy">Copyright ? 2016 BAIDU Corporation. All rights reserved.</div></footer></div>', document.body.appendChild(e), e.addEventListener("click", function (a) {
            "A" !== a.target.tagName && (e.style.display = "none")
        })
    }

    function s(e) {
        var a = {};
        for (var i in e) e.hasOwnProperty(i) && (a[i] = e[i]);
        return a
    }

    function t(e, a, i) {
        var n, t = e, o = a, r = i;
        if (0 === o) n = {
            nid: t.nid,
            title: t.title,
            url: t.url,
            site: t.site,
            type: t.type,
            abs: t.abs,
            display_type: t.display_type,
            display_url: t.display_url
        }; else if (1 === o) n = {nid: t.nid, viewid: t.viewid}; else if (2 === o) {
            t.url = t.shareUrl || t.url;
            var l = s(t);
            !t instanceof Array && (l.imageurls = [], l.imageurls.push(t.imageurls));
            var p = new Object;
            p.shortvideo = 1, l.content_type = p, n = l, c.isIOS() && (o = 5)
        } else 3 === o ? n = t : 6 === o ? n = {tid: t.topicId} : 7 === o ? (n = {
            nid: t.nid,
            title: t.title,
            url: t.url,
            site: t.site,
            type: "text",
            abs: t.abs,
            display_type: t.display_type,
            display_url: t.display_url
        }, o = 0) : 8 === o && (n = t);
        var m = navigator.userAgent;
        d(JSON.stringify(n), m, o, r)
    }

    function d(e, a, s, t) {
        var d = r.detect(a), o = s || 0;
        if (d.android) {
            var p = "bdnews://share?type=" + o + "&info=" + encodeURIComponent(e);
            if (d.isWechat || d.isQQ) window.location.href = m + encodeURIComponent(p); else {
                e = JSON.parse(e);
                var c = e.nid;
                i(p, t, c)
            }
        } else if (d.ios) {
            var v = "bdnews://share?info=" + encodeURIComponent(e);
            e = JSON.parse(e), e.type = "" + o;
            var c = e.nid;
            e = JSON.stringify(e);
            var f = t || "normal";
            l.versionCompare(d.version, "9.0") >= 0 ? window.location.href = u + encodeURIComponent(e) + "&from=" + f : d.isWechat ? n() : i(v, t, c)
        }
    }

    function o(e, a, i, n) {
        var s = n || "normal";
        window.location.href = "https://m.news.baidu.com/app/downloadv8?from=" + s
    }

    var r = e("4e62aeb"), l = e("51a1049"), p = e("557cc4f"), c = e("96d7310"),
        m = "http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.news&android_schema=",
        u = "https://m.news.baidu.com/app/downloadv8?scheme=";
    a.toShare = t, a.share = d, a.launch = o
});
;
/*!/app/util/customLocalStorage.js*/
define("7761247", function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
        getItem: function (e) {
            var t;
            try {
                t = localStorage.getItem(e)
            } catch (o) {
                console.error("localStorage.getItem报错, ", o.message)
            } finally {
                return t
            }
        }, setItem: function (e, t) {
            try {
                localStorage.setItem(e, t)
            } catch (o) {
                console.error("localStorage.setItem报错, ", o.message)
            }
        }, delItem: function (e) {
            try {
                localStorage.removeItem(e)
            } catch (t) {
                console.error("localStorage.delItem报错, ", t.message)
            }
        }
    }
});
;
/*!/app/config/localStorageKey.js*/
define("11e0dbb", function (_, E) {
    "use strict";
    E.NEWS_SHOW_IMAGE = "BD_NEWS_WEBAPP_SHOW_IMAGE", E.NAV_SHOW_MORE = "BD_NEWS_WEBAPP_NAVSHOWMORE", E.CITY_INFO = "BD_NEWS_WEBAPP_CITY_INFO", E.SUBSCRIBE_DATA = "BD_NEWS_WEBAPP_SUBSCRIBE_DATA", E.GPS_CITY_INFO = "BD_NEWS_WEBAPP_GPS_CITY_INFO", E.CHOSEN_READED_IDS = "CHOSEN_READED_IDS", E.FONT_SIZE = "FONT_SIZE"
});
;
/*!/app/actions/userinfo.js*/
define("9b13b92", function (t, e) {
    "use strict";

    function n(t) {
        return {type: E.USERINFO_LOGIN, data: t}
    }

    function u() {
        return {type: E.USERINFO_LOGOUT}
    }

    function a(t) {
        return O.default.setItem(d.NEWS_SHOW_IMAGE, t.imageMode), {
            type: E.USERINFO_UPDATEIMAGEMODEL,
            data: t
        }
    }

    function o(t) {
        return O.default.setItem(d.FONT_SIZE, t.fontSize), {
            type: E.USERINFO_UPDATE_FONT_SIZE,
            data: t
        }
    }

    function I(t) {
        return {type: E.USERINFO_UPDATELOCALINFO, data: t}
    }

    var E = t("5e518fe"), O = t("7761247"), d = t("11e0dbb");
    e.login = n, e.logout = u, e.updateImageModel = a, e.updateFontSize = o, e.updateLocalInfo = I
});
;
/*!/app/actions/ad.js*/
define("df78f76", function (t, e) {
    "use strict";

    function f(t) {
        return {type: n.AD_UPDATE, data: t}
    }

    var n = t("1511f8e");
    e.update = f
});
;
/*!/app/actions/collectlist.js*/
define("21624e5", function (t, e) {
    "use strict";

    function n(t) {
        return {type: r.COLLECTLIST_UPDATE, data: t}
    }

    function a(t) {
        return {type: r.COLLECTLIST_ADDITEMS, data: t}
    }

    function L(t) {
        return {type: r.COLLECTLIST_ADDITEM, data: t}
    }

    function T(t) {
        return {type: r.COLLECTLIST_RMITEM, data: t}
    }

    var r = t("527b632");
    e.update = n, e.addItems = a, e.addItem = L, e.rmItem = T
});
;
/*!/app/config/nav.js*/
define("7358dc6", function (e, n) {
    "use strict";

    function t() {
        var e, n = f.default.getItem(o.SUBSCRIBE_DATA);
        if (n) e = JSON.parse(n); else {
            e = {push: [], tag: m};
            var t = JSON.stringify(e);
            f.default.setItem(o.SUBSCRIBE_DATA, t)
        }
        return e
    }

    function a(e) {
        var n = JSON.stringify(e);
        f.default.setItem(o.SUBSCRIBE_DATA, n)
    }

    function i(e) {
        var n = [];
        return e.forEach(function (e) {
            "news" !== e.type && n.push(e)
        }), n
    }

    var f = e("7761247"), o = e("11e0dbb"),
        m = [{name: "推荐", type: "chosen"}, {name: "本地", type: "local", id: "0"}, {
            name: "科技",
            type: "info"
        }, {name: "娱乐", type: "info"}, {name: "图片", type: "image", id: "1"}, {
            name: "互联网",
            type: "info"
        }, {name: "财经", type: "info"}, {name: "体育", type: "info"}, {
            name: "军事",
            type: "info"
        }, {name: "汽车", type: "info"}, {name: "国内", type: "info"}, {
            name: "国际",
            type: "info"
        }, {name: "生活", type: "info"}, {name: "时尚", type: "info"}, {
            name: "房产",
            type: "info"
        }, {name: "人文", type: "info"}];
    n.getLocalNav = t, n.saveLocalNav = a, n.filterNav = i
});
;
/*!/app/fetch/baiduIdHandle.js*/
define("76618eb", function (e, t) {
    "use strict";

    function n(e) {
        if (e) return e;
        var t = document.cookie.match(new RegExp("(^| )BAIDUID=([^;]*)(;|$)"));
        return t ? t[2] : "7C35091F8552AFD19AA4A03D0828F99B:FG=1"
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n
});
;
/*!/app/fetch/profile/nav.js*/
define("81844c1", function (t, e) {
    "use strict";

    function a() {
        var t = "/news?tn=bdapibaiyue&t=getuserdata", e = {
            cuid: d.default(),
            type: "tag",
            OS: r.isAndroid() ? "android" : "iphone",
            ver: 9,
            from: "webapp",
            rand: Date.now()
        }, a = i.post(t, e);
        return a
    }

    function n(t) {
        var e = "/news?tn=bdapibaiyue&t=setuserdata", a = {
            cuid: d.default(),
            text: JSON.stringify(t),
            ischeck: 0,
            type: "tag",
            OS: r.isAndroid() ? "android" : "iphone",
            ver: 9,
            from: "webapp",
            rand: Date.now()
        }, n = i.post(e, a);
        return n
    }

    var i = t("c2909ec"), d = t("76618eb"), r = t("96d7310");
    e.getNavData = a, e.updateNavData = n
});
;
/*!/app/actions/nav.js*/
define("0ad32a9", function (a, n) {
    "use strict";

    function t(a, n, t) {
        t || (i.saveLocalNav(a), o.updateNavData(a))
    }

    function e(a, n, e) {
        return t(a, n, e), {type: r.NAV_UPDATE, data: a}
    }

    function u(a, n, e) {
        var u, c = a.tag, i = a.push, o = !1;
        return c.forEach(function (a) {
            return a.name === n.name ? (o = !0, !1) : void 0
        }), o || i.forEach(function (a) {
            return a.name === n.name ? (o = !0, !1) : void 0
        }), o ? void 0 : (c.push(n), t(a, e), u = {type: r.NAV_UPDATE, data: a})
    }

    function c(a, n, e) {
        var u, c = a.tag, i = a.push;
        return c.forEach(function (a, t) {
            a.name === n.name && c.splice(t, 1)
        }), i.forEach(function (a, t) {
            a.name === n.name && i.splice(t, 1)
        }), t(a, e), u = {type: r.NAV_UPDATE, data: a}
    }

    var r = a("629be40"), i = a("7358dc6"), o = a("81844c1");
    n.update = e, n.add = u, n.minus = c
});
;
/*!/app/fetch/get.js*/
define("286d917", function (e, t) {
    "use strict";

    function c(e) {
        var t = fetch(e, {
            credentials: "include",
            headers: {Accept: "application/json, text/plain, */*"}
        });
        return t
    }

    e("89c93f8"), e("48b4cd1"), t.get = c
});
;
/*!/app/fetch/profile/passport.js*/
define("5ed85fe", function (t, e) {
    "use strict";

    function n() {
        return a.get("/news?tn=bdapipassport&_t=" + Date.now())
    }

    var a = t("286d917");
    e.getPassportData = n
});
;
/*!/app/fetch/common/getAdData.js*/
define("f0c8e7d", function (e, n) {
    "use strict";

    function t() {
        return a.get("/news?tn=bdcmsindex")
    }

    function s() {
        return a.get("/news?tn=bdcmspage")
    }

    var a = e("286d917");
    n.getCmsIndexData = t, n.getCmsPageData = s
});
;
/*!/app/fetch/profile/collectlist.js*/
define("88cedf5", function (t, e) {
    "use strict";

    function n(t) {
        void 0 === t && (t = 0);
        var e = "/news?tn=bdapibaiyue&t=getcollectlist",
            n = {wf: 0, nid: "", token: "", time: t, pn: 50}, i = l.post(e, n);
        return i
    }

    function i(t, e) {
        var n = "/news?tn=bdapibaiyue&t=collect", i = {nid: t, from: "info", url: e, urls: ""},
            c = l.post(n, i);
        return c
    }

    function c(t) {
        var e = "/news?tn=bdapibaiyue&t=delcollect", n = {nid: t}, i = l.post(e, n);
        return i
    }

    var l = t("c2909ec");
    e.getCollectList = n, e.collectNews = i, e.delCollectNews = c
});
;
/*!/app/util/lazyload.js*/
define("c00263d", function (t, e) {
    "use strict";

    function n(t) {
        return s && s.indexOf(t) > 0
    }

    function i() {
        c = document.getElementsByTagName("img"), d = c.length;
        var t, e;
        for (t = 0; d > t; t++) e = c[t], e.getBoundingClientRect().top > window.screen.height || e.getBoundingClientRect().bottom < 0 || null != e.getAttribute("data-src") && (e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("class", e.getAttribute("data-className")), e.removeAttribute("data-className"), null != e.getAttribute("data-save") && (s.push(e.getAttribute("src")), s.length > 500 && (s = [])))
    }

    function r() {
        u && clearTimeout(u), u = setTimeout(i, 200)
    }

    function a() {
        u = !1, window.removeEventListener("scroll", r, !1), window.addEventListener("scroll", r, !1);
        var t = navigator.userAgent.toLowerCase(),
            e = document.querySelector(".baidubox8 #sesultList");
        t.indexOf("iphone") > 0 && t.indexOf("baiduboxapp") > 0 && e && (e.removeEventListener("scroll", r, !1), e.addEventListener("scroll", r, !1))
    }

    function o() {
        l && clearTimeout(l), l = setTimeout(i, 500)
    }

    var s = [];
    e.isInLazyLoadList = n;
    var u, c, d, l;
    e.bindLazyload = a, e.trigglerLoadImgs = o
});
;
/*!/app/components/common/Loading/index.jsx*/
define("f516060", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, o = e("53ab468"), a = e("6d58bc2"), i = e("53ab468"), r = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            return o.createElement("div", {className: "page-loading"}, o.createElement("div", {className: "page-loading-logo-wrap"}, o.createElement("div", {className: "page-loading-logo"}), o.createElement("div", {className: "page-loading-anim"})))
        }, t
    }(i.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
});
;
/*!/app/components/Feedback/index.jsx*/
define("0439047", function (t, e) {
    "use strict";
    var o = this && this.__extends || function (t, e) {
        function o() {
            this.constructor = t
        }

        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
    }, n = t("53ab468"), i = t("6d58bc2"), s = function (t) {
        function e(e, o) {
            t.call(this, e, o), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this), this.state = {isShow: !1}
        }

        return o(e, t), e.prototype.render = function () {
            var t = {display: this.state.isShow ? "block" : "none"};
            return n.createElement("div", null, n.createElement("div", {
                className: "go-top-trigger",
                style: t,
                onClick: function () {
                    window.scrollTo(0, 0)
                }
            }))
        }, e.prototype.componentDidMount = function () {
            function t() {
                o.setState(window.pageYOffset > 750 ? {isShow: !0} : {isShow: !1})
            }

            var e, o = this;
            window.addEventListener("scroll", function () {
                e && clearTimeout(e), e = setTimeout(t, 50)
            }, !1)
        }, e.prototype.feedbackHandle = function () {
            var t = this.props.userinfo, e = t.BAIDUID || "null",
                o = ["https://ufosdk.baidu.com/?m=Client", "u=" + encodeURIComponent(encodeURIComponent(location.href)), "a=postView", "appid=2110", "product_type=10614", "bw=" + encodeURIComponent(e)].join("&");
            setTimeout(function () {
                location.href = o
            }, 600)
        }, e
    }(n.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = s
});
;
/*!/app/router/routerSkip.js*/
define("bb32aca", function (t, s) {
    "use strict";

    function e() {
        var t = window.location.hash.trim();
        i(t), n(t)
    }

    function i(t) {
        if (0 === t.indexOf("#/_http://m.news.baidu.com")) {
            var s = /&word=(.+)/i, e = t.match(s) && t.match(s)[1].split("&")[0];
            a.default.push(null != e && e.length ? "/search/" + e : "/searchpage")
        }
    }

    function n(t) {
        0 === t.indexOf("#/index/") && (/\/focus\b/.test(t) && a.default.push("/"), /\/chosen\b/.test(t) && a.default.push("/"), /\/info\b/.test(t) && a.default.push("/newslist/widthNav/info/" + t.match(/info:(.*)[\?|$]/)[1]), /\/enternews\b/.test(t) && a.default.push("/newslist/widthNav/info/%E5%A8%B1%E4%B9%90"), /\/socianews\b/.test(t) && a.default.push("/newslist/widthNav/info/%E7%A4%BE%E4%BC%9A"), /\/mil\b/.test(t) && a.default.push("/newslist/widthNav/info/%E5%86%9B%E4%BA%8B"), /\/sportnews\b/.test(t) && a.default.push("/newslist/widthNav/info/%E4%BD%93%E8%82%B2"), /\/technnews\b/.test(t) && a.default.push("/newslist/widthNav/info/%E7%A7%91%E6%8A%80"), /\/finannews\b/.test(t) && a.default.push("/newslist/widthNav/info/%E8%B4%A2%E7%BB%8F"), /\/internet\b/.test(t) && a.default.push("/newslist/widthNav/info/%E4%BA%92%E8%81%94%E7%BD%91"), /\/healthnews\b/.test(t) && a.default.push("/newslist/widthNav/info/%E5%A5%B3%E4%BA%BA"), /\/life\b/.test(t) && a.default.push("/newslist/widthNav/info/%E7%94%9F%E6%B4%BB"), /\/autonews\b/.test(t) && a.default.push("/newslist/widthNav/info/%E6%B1%BD%E8%BD%A6"), /\/fashion\b/.test(t) && a.default.push("/newslist/widthNav/info/%E6%97%B6%E5%B0%9A"), /\/internews\b/.test(t) && a.default.push("/newslist/widthNav/info/%E5%9B%BD%E9%99%85"), /\/civilnews\b/.test(t) && a.default.push("/newslist/widthNav/info/%E5%9B%BD%E5%86%85"), /\/housenews\b/.test(t) && a.default.push("/newslist/widthNav/info/%E6%88%BF%E4%BA%A7"), /\/edunews\b/.test(t) && a.default.push("/newslist/widthNav/info/%E6%95%99%E8%82%B2"), /\/renwen\b/.test(t) && a.default.push("/newslist/widthNav/info/%E4%BA%BA%E6%96%87"), /\/lvyou\b/.test(t) && a.default.push("/newslist/widthNav/info/%E6%97%85%E6%B8%B8"), /\/gamenews\b/.test(t) && a.default.push("/newslist/widthNav/info/%E6%B8%B8%E6%88%8F"), /\/creative\b/.test(t) && a.default.push("/newslist/widthNav/info/%E5%88%9B%E6%84%8F"))
    }

    var a = t("557cc4f");
    s.doRouterSkip = e
});
;
/*!/app/containers/App.jsx*/
define("314d53d", function (t, e) {
    "use strict";

    function a(t) {
        return {userinfo: t.userinfo}
    }

    function n(t) {
        return {
            userInfoActions: d.bindActionCreators(l, t),
            adActions: d.bindActionCreators(c, t),
            collectlistActions: d.bindActionCreators(u, t),
            navActions: d.bindActionCreators(f, t)
        }
    }

    var i = this && this.__extends || function (t, e) {
            function a() {
                this.constructor = t
            }

            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }, o = t("53ab468"), s = t("6d58bc2"), r = t("53ab468"), d = t("ecb7045"), p = t("f0a789e"),
        l = t("9b13b92"), c = t("df78f76"), u = t("21624e5"), f = t("0ad32a9"), b = t("7358dc6"),
        h = t("81844c1"), m = t("5ed85fe"), g = t("f0c8e7d"), v = t("88cedf5"), I = t("c00263d"),
        S = t("f516060"), _ = t("0439047"), x = t("7761247"), N = t("bb32aca"), A = t("11e0dbb"),
        D = function (t) {
            function e(e, a) {
                t.call(this, e, a), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this), this.state = {
                    isWaitingPassport: !0,
                    isWaitingCollectData: !0,
                    isWaitingNavData: !0,
                    cn: "app"
                }
            }

            return i(e, t), e.prototype.render = function () {
                var t = window.navigator.userAgent, e = /light/.test(t),
                    a = t.toLowerCase().indexOf("baiduboxapp") > 0;
                return a && e ? o.createElement("div", {
                    className: this.state.cn,
                    id: "app"
                }, this.state.isWaitingPassport || this.state.isWaitingNavData ? "" : o.createElement("div", null, o.createElement(_.default, {userinfo: this.props.userinfo}), this.props.children)) : o.createElement("div", {
                    className: this.state.cn,
                    id: "app"
                }, this.state.isWaitingPassport || this.state.isWaitingNavData ? o.createElement(S.default, null) : o.createElement("div", null, o.createElement(_.default, {userinfo: this.props.userinfo}), this.props.children))
            }, e.prototype.componentDidMount = function () {
                var t = this;
                this.deleteLsData(), x.default.delItem(A.CHOSEN_READED_IDS), N.doRouterSkip();
                var e = m.getPassportData();
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    t.passportHandle(e), t.loadNavData()
                }), this.getCollectListData(), this.getAdData(), I.bindLazyload()
            }, e.prototype.deleteLsData = function () {
                x.default.delItem("NEWS_CITY_INFO"), x.default.delItem("NEWS_LAST_NOTI"), x.default.delItem("NEWS_SHOW_IMAGE"), x.default.delItem("NEWS_SUBSCRIBE_DATA"), x.default.delItem("NEWS_SUBSCRIBE_PUSH_DATA"), x.default.delItem("NEWS_WEBAPP_SUBSCRIBE_DATA"), x.default.delItem("NEWS_WHOLECITY_INFO"), x.default.delItem("NEWS_GPS_CITY_INFO"), x.default.delItem("navmore")
            }, e.prototype.passportHandle = function (t) {
                var e = {}, a = window.navigator.userAgent;
                if (0 === t.errno && t.data && (e = t.data, e.isLogIn = Boolean(e.displayname)), e.baidubox = a.toLowerCase().indexOf("baiduboxapp") > 0, e.baidubox) {
                    if (a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) if (a.indexOf("_enohpi") > 0) {
                        var n = a.split("baiduboxapp")[1], i = n.split("_enohpi")[0],
                            o = i.split(".")[2], s = i.split(".")[3];
                        parseInt(s, 10) > 7 ? (e.baidubox8 = !0, this.setState({cn: "app baidubox8"})) : 7 == parseInt(s, 10) && parseInt(o, 10) > 6 ? (e.baidubox8 = !0, this.setState({cn: "app baidubox8"})) : (e.baidubox8 = !0, this.setState({cn: "app baidubox8"}))
                    } else {
                        var n = a.split("baiduboxapp/")[1], i = n.split(".")[0];
                        parseInt(i, 10) > 7 && (e.baidubox8 = !0, this.setState({cn: "app baidubox8"}))
                    } else if (a.indexOf("Android") > -1 || a.indexOf("Linux") > -1) {
                        var n = a.split("baiduboxapp/")[1], i = n.split(".")[0],
                            o = n.split(".")[1];
                        parseInt(i, 10) > 7 ? (e.baidubox8 = !0, this.setState({cn: "app baidubox8"})) : 7 == parseInt(i, 10) && parseInt(o, 10) >= 6 ? (e.baidubox8 = !0, this.setState({cn: "app baidubox8"})) : (e.baidubox8 = !0, this.setState({cn: "app baidubox8"}))
                    }
                    navigator.userAgent.indexOf("lite") > -1 && (e.baidubox8 = !0, this.setState(a.match(/iphone|ipod|ipad/i) ? {cn: "app baidubox8"} : {cn: "app baidubox8 litebox"}))
                }
                var r = document.cookie, d = r.split(";");
                d.length && d.forEach(function (t) {
                    var a = t.split("=");
                    2 === a.length && (e[a[0].trim()] = a[1].trim())
                });
                var p = x.default.getItem(A.NEWS_SHOW_IMAGE);
                e.imageMode = "false" === p ? !1 : !0;
                var l = parseInt(x.default.getItem(A.FONT_SIZE)) || 2;
                e.fontSize = l;
                try {
                    var c = JSON.parse(x.default.getItem(A.CITY_INFO)),
                        u = JSON.parse(x.default.getItem(A.GPS_CITY_INFO));
                    c ? (e.localid = c.id, e.localname = c.name) : u ? (e.localid = u.localid, e.localname = u.displayname) : (e.localid = 0, e.localname = "本地")
                } catch (f) {
                    console.error("处理localStore中的本地城市出错"), e.localid = 0, e.localname = "本地"
                }
                this.props.userInfoActions.login(e), this.setState({isWaitingPassport: !1})
            }, e.prototype.getAdData = function () {
                function t(t, e) {
                    n[t] = e, a.update(n)
                }

                function e(t, e) {
                    var a = {};
                    try {
                        a = t.json()
                    } catch (n) {
                        console.error(e + " 广告转换json数据失败, msg: " + n.message)
                    }
                    return a
                }

                var a = this.props.adActions, n = {}, i = g.getCmsPageData();
                i.then(function (t) {
                    return e(t, "cmsPage")
                }).then(function (e) {
                    return 0 !== e.errno ? void console.error("获取cmsPage出错，errno: " + e.errno) : void t("cmsPage", e.data)
                })
            }, e.prototype.getCollectListData = function () {
                var t = this, e = (this.props.userinfo, v.getCollectList());
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (t.setState({isWaitingCollectData: !1}), 0 !== e.errno) return void console.error("App组件获取收藏新闻列表出错，errno: " + e.errno);
                    var a = e.data || {}, n = a.news || [];
                    n.length && t.props.collectlistActions.update(n)
                })
            }, e.prototype.loadNavData = function () {
                var t, e = this, a = this.props.userinfo.isLogIn;
                t = h.getNavData(), t.then(function (t) {
                    return t.json()
                }).then(function (t) {
                    if (0 === t.errno && t.data && t.data.tag) {
                        t.data.tag = b.filterNav(t.data.tag);
                        var n = e.updateLocalInfo(t.data), i = n.tag.filter(function (t) {
                            return !("info" == t.type && ("51" == t.cate_id || "52" == t.cate_id))
                        });
                        n.tag = i, e.updateNavData(n, a)
                    } else {
                        var n = e.updateLocalInfo(b.getLocalNav());
                        e.updateNavData(n, a)
                    }
                })
            }, e.prototype.updateLocalInfo = function (t) {
                var e = this;
                return t.tag.map(function (t) {
                    "local" == t.type && (t.name = "本地", t.id = e.props.userinfo.localid)
                }), t
            }, e.prototype.updateNavData = function (t, e) {
                this.props.navActions.update(t, e, !0), this.setState({isWaitingNavData: !1})
            }, e.prototype.componentDidUpdate = function () {
                window.webappLocationFrom = location.hash
            }, e
        }(r.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = p.connect(a, n)(D)
});
;
/*!/app/containers/NewsList/index.jsx*/
define("dae19b8", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, o = e("53ab468"), r = e("6d58bc2"), p = e("53ab468"), i = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            return o.createElement("div", {className: "index_view"}, this.props.children)
        }, t.prototype.componentDidMount = function () {
            this.updateCurrentChannelName()
        }, t.prototype.componentDidUpdate = function () {
            this.updateCurrentChannelName()
        }, t.prototype.updateCurrentChannelName = function () {
            var e = this.props.children || {}, t = e.props.children || {}, n = t.props.params,
                o = n ? n.name || "" : "推荐";
            window._currentChannelName = o
        }, t
    }(p.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = i
});
;
/*!/app/components/Nav/NavItem.jsx*/
define("a265c0e", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, o = t("53ab468"), i = t("6d58bc2"), a = t("53ab468"), s = t("557cc4f"), p = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this)
        }

        return n(e, t), e.prototype.render = function () {
            var t = this.props.item;
            if ("百家" === t.name && (t.type = "baijia"), "scrollmenu" == this.props.from) if (this.props.id) var e = "nav_" + this.props.id; else var e = "nav_0";
            return o.createElement("li", {
                style: this.props.style,
                id: e
            }, "local" === t.type || "百家" !== t.name && "news" === t.type || "author" === t.type ? o.createElement("a", {onClick: this.clicktab.bind(this, "/newslist/widthNav/" + t.type + "/" + t.id + "/" + encodeURIComponent(t.name))}, t.name) : o.createElement("a", {onClick: this.clicktab.bind(this, "/newslist/widthNav/" + t.type + "/" + encodeURIComponent(t.name))}, t.name))
        }, e.prototype.clicktab = function (t) {
            try {
                window.localStorage.footstap = t, s.default.replace(t)
            } catch (e) {
                s.default.push(t)
            }
            this.props.clickTabFn(this.props.item.name)
        }, e
    }(a.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = p
});
;
/*!/app/components/NavHeader/index.jsx*/
define("da72e6e", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, i = e("53ab468"), a = e("6d58bc2"), o = e("53ab468"), c = e("557cc4f"), l = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            var e, t = this.props.userinfo || {}, n = t.baidubox, a = t.baidubox8;
            return e = a ? i.createElement("div", {className: "clearfix nav-header-container-9"}, i.createElement("span", null, "百度新闻"), i.createElement("i", {
                onClick: this.linkToHandle.bind(this, "/searchpage"),
                className: "search-icon-9"
            }), i.createElement("i", {
                onClick: this.linkToHandle.bind(this, "/profile/home"),
                className: "profile-icon-9"
            })) : n ? i.createElement("div", {className: "clearfix nav-header-container-9"}, i.createElement("span", null, "百度新闻"), i.createElement("i", {
                onClick: this.linkToHandle.bind(this, "/searchpage"),
                className: "search-icon-9"
            }), i.createElement("i", {
                onClick: this.linkToHandle.bind(this, "/profile/home"),
                className: "profile-icon-9"
            })) : i.createElement("div", {className: "nav-header-container nav-header-container-logo clearfix"}, i.createElement("a", {
                href: "https://m.baidu.com/",
                className: "float-left baidu-icon"
            }), i.createElement("a", {
                onClick: this.linkToHandle.bind(this, "/profile/home"),
                className: "float-left profile-icon"
            }), i.createElement("a", {
                onClick: this.linkToHandle.bind(this, "/searchpage"),
                className: "float-right search-icon"
            })), i.createElement("div", {className: "nav-header"}, e)
        }, t.prototype.linkToHandle = function (e) {
            e.indexOf("subscribe") > 0 ? window._hmt.push(["_trackEvent", "subscribe", "click", "enter"]) : e.indexOf("search") > 0 && window._hmt.push(["_trackEvent", "search", "click"]), window._animateLinkTime = Date.now(), c.default.push(e)
        }, t.prototype.touchs = function () {
            this.refs.profileicon.className = "float-right profile-icon profile-icon-pressed"
        }, t.prototype.touchm = function (e) {
            e.preventDefault()
        }, t.prototype.touche = function () {
            this.refs.profileicon.className = "float-right profile-icon"
        }, t
    }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = l
});
;
/*!/app/components/Nav/index.jsx*/
define("e87c67d", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var l in t) t.hasOwnProperty(l) && (e[l] = t[l]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, l = e("53ab468"), s = e("53ab468"), i = e("d9ac10b"), a = e("068f3ff"), o = e("a265c0e"),
        r = e("da72e6e"), c = e("96d7310");
    if ("undefined" != typeof window) var d = e("2c9c6b6");
    var u = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.state = {showMore: !1, isShowIscroll: !1}
        }

        return n(t, e), t.prototype.render = function () {
            function e(e) {
                var t = e.name;
                u.indexOf(t) >= 0 || (u.push(t), s.push(e))
            }

            var t = this, n = this.props.data, s = [], u = [], m = this.props.userinfo,
                h = m.baidubox, f = m.baidubox8;
            n.tag.forEach(e), n.push.forEach(e);
            var p, g = 6, M = {width: 100 / g + "%"}, v = {width: 200 / g + "%"},
                E = {scrollY: !0, click: c.isIOS() ? !1 : !0};
            p = h || f ? l.createElement("ul", {
                ref: "otherNavContiner",
                className: this.state.isShowIscroll ? "inscrollMenu btmMenu" : "btmMenu"
            }, l.createElement("li", null, l.createElement(i.Link, {to: "/subscribe/manage"}, "删除及排序"))) : l.createElement("ul", {
                ref: "otherNavContiner",
                className: this.state.isShowIscroll ? "inscrollMenu btmMenu" : "btmMenu"
            }, l.createElement("li", null, l.createElement(i.Link, {to: "/subscribe/manage"}, "删除及排序")));
            var b, y = l.createElement("div", {
                className: "scrollMenu",
                ref: "scrollMenuContainer",
                id: "scrollMenuContainer"
            }, l.createElement("p", {
                className: "lgrad",
                ref: "lgrad",
                id: "lgrad"
            }), l.createElement("ul", {
                className: "menus",
                ref: "scrollMenus",
                id: "scrollMenus"
            }, s.map(function (e, n) {
                return l.createElement(o.default, {
                    key: n,
                    item: e,
                    clickTabFn: t.clickTab.bind(t),
                    id: n,
                    from: "scrollmenu"
                })
            })), l.createElement("p", {className: "rgrad"}), l.createElement("p", {
                className: "more",
                onClick: this.slideDownHandle.bind(this)
            }, l.createElement("i", {className: "i"}))), w = l.createElement("ul", {
                className: "menus",
                id: "allMenus",
                ref: "allMenus"
            }, s.map(function (e, n) {
                var s = e.name, i = s.length, a = i > 2 ? v : M;
                return l.createElement(o.default, {
                    key: n,
                    style: a,
                    item: e,
                    clickTabFn: t.clickTab.bind(t)
                })
            }));
            b = this.state.showMore ? this.isSp() ? "dis" : "vis" : "novis";
            var N = l.createElement("div", {
                className: "allMenu " + b,
                ref: "allMenuContainer"
            }, l.createElement("div", {className: "menusArea"}, l.createElement("div", {className: "title"}, "切换栏目", l.createElement("a", {
                href: "#",
                onClick: this.slideUpHandle.bind(this),
                className: "less"
            }, l.createElement("i", {className: "i"}))), l.createElement("div", {
                className: "menusbg",
                id: "allMenusbg",
                ref: "allMenusbg"
            }, this.state.isShowIscroll ? l.createElement(a.default, {
                iScroll: d,
                options: E,
                id: "ReactIScroll",
                ref: "ReactIScroll"
            }, w) : l.createElement("div", null, w)), p), l.createElement("div", {
                className: "mark",
                onClick: this.slideUpHandle.bind(this)
            }));
            return this.isSp() ? l.createElement("div", {id: "index_view_header"}, l.createElement(r.default, {userinfo: this.props.userinfo}), l.createElement("div", {
                id: "index_view_navigator",
                className: h ? "inbaidubox" : "normalBrowser"
            }, this.state.showMore ? N : y)) : l.createElement("div", {id: "index_view_header"}, l.createElement(r.default, {userinfo: this.props.userinfo}), l.createElement("div", {
                id: "index_view_navigator",
                className: h ? "inbaidubox" : "normalBrowser"
            }, y, N))
        }, t.prototype.componentDidMount = function () {
            var e;
            e = c.isBox() ? 124 : 129, this.isSp() ? this.scrollMenuSelectedHandle() : (document.getElementById("allMenus").offsetHeight > window.innerHeight - e && this.setState({isShowIscroll: !0}), this.listenScrollMenu(), this.scrollMenuSelectedHandle(), this.allMenuSelectedHandle());
            var t = document.getElementById("scrollMenus");
            t.addEventListener("scroll", this.listenScrollMenu, !1)
        }, t.prototype.componentDidUpdate = function () {
            this.isSp() ? setTimeout(function () {
                this.state.showMore ? this.allMenuSelectedHandle() : this.scrollMenuSelectedHandle()
            }.bind(this), 10) : (this.scrollMenuSelectedHandle(), this.allMenuSelectedHandle())
        }, t.prototype.listenScrollMenu = function () {
            var e = document.getElementById("scrollMenus"), t = document.getElementById("lgrad");
            t.className = e.scrollLeft > 0 ? "lgrad" : "lgrad nodis"
        }, t.prototype.isSp = function () {
            return c.isAndroid() && c.isBox() ? !0 : !1
        }, t.prototype.clickTab = function () {
            if (this.isSp()) setTimeout(function () {
                var e = document.getElementById("scrollMenus");
                e.scrollLeft = 0, document.getElementById("lgrad").className = "lgrad nodis"
            }, 0); else {
                var e = document.getElementById("scrollMenus");
                e.scrollLeft = 0, document.getElementById("lgrad").className = "lgrad nodis"
            }
            this.setState({showMore: !1})
        }, t.prototype.tabAlign = function (e) {
            var t = document.getElementById("scrollMenus"), n = t.scrollWidth,
                l = e.getBoundingClientRect(), s = window.innerWidth / 2, i = l.right - l.left;
            if (l.left > s) {
                if (n - l.left - i / 2 > s) {
                    var a = l.left + i / 2 - s;
                    t.scrollLeft = a
                } else {
                    var a = n - (window.innerWidth - 62);
                    t.scrollLeft = a
                }
                document.getElementById("lgrad").className = "lgrad"
            }
            this.isSp() && (t.style.display = "none", setTimeout(function () {
                t.style.display = "-webkit-box", document.getElementById(e.id).style.background = "", document.getElementById(e.id).className = "selected", this.listenScrollMenu()
            }.bind(this), 100))
        }, t.prototype.slideUpHandle = function (e) {
            e.preventDefault(), this.setState({showMore: !1})
        }, t.prototype.slideDownHandle = function (e) {
            e.preventDefault(), this.setState({showMore: !0});
            var t;
            t = c.isBox() ? 124 : 129, this.isSp() ? (setTimeout(function () {
                document.getElementById("allMenus").offsetHeight > window.innerHeight - t && this.setState({isShowIscroll: !0})
            }.bind(this), 100), setTimeout(function () {
                this.state.isShowIscroll && (document.getElementById("allMenusbg").style.height = window.innerHeight - t + "px")
            }.bind(this), 150)) : this.state.isShowIscroll && (document.getElementById("allMenusbg").style.height = window.innerHeight - t + "px")
        }, t.prototype.scrollMenuSelectedHandle = function () {
            var e = document.getElementById("scrollMenuContainer"), t = e.childNodes[1],
                n = t.childNodes;
            this.changeClassName(n, !0)
        }, t.prototype.allMenuSelectedHandle = function () {
            var e = this.refs.allMenuContainer,
                t = e.childNodes[0].childNodes[1].childNodes[0].childNodes[0], n = t.childNodes;
            this.changeClassName(n)
        }, t.prototype.changeClassName = function (e, t) {
            var n = decodeURIComponent(location.hash);
            n.indexOf("newslist") <= 0 && (n += "/推荐");
            for (var l = 0; l < e.length; l++) {
                var s = e[l];
                if (!s || null == s.className) return;
                s.className = "", this.isSp() && setTimeout(function () {
                    s.className = "", s.style.background = ""
                }, 40), null != s.className && n.substring(n.indexOf("/" + s.textContent) + 1) == s.textContent && null != s.className && (s.className = "selected", t && this.tabAlign(s))
            }
        }, t
    }(s.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = u
});
;
/*!/app/components/BannerAd/index.jsx*/
define("011834d", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, a = t("53ab468"), o = t("6d58bc2"), s = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this), this.state = {close: !1}
        }

        return n(e, t), e.prototype.render = function () {
            var t = this.props.data, e = t.url, n = t.imgUrl;
            return a.createElement("div", {
                className: "banner-add-container",
                style: {display: this.state.close ? "none" : "block"}
            }, a.createElement("a", {href: e}, a.createElement("img", {src: n})), a.createElement("span", {className: "ad-tag tag-bg"}), a.createElement("span", {className: "ad-tag ad-label"}, "广告"))
        }, e.prototype.closeHandle = function () {
            this.setState({close: !0}), this.props.data.closeCallback && this.props.data.closeCallback()
        }, e.prototype.componentDidMount = function () {
        }, e
    }(a.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = s
});
;
/*!/app/components/ShareBox/FooterLauncher.jsx*/
define("8a93c4d", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, o = e("53ab468"), a = e("53ab468"), c = e("d4a0d6d");
    e("./style.css");
    var r = function (e) {
        function t(t, n) {
            e.call(this, t, n)
        }

        return n(t, e), t.prototype.render = function () {
            return o.createElement("div", {
                id: "share",
                onClick: this.Share.bind(this)
            }, o.createElement("div", {
                className: "btnclose",
                onClick: this.toClose.bind(this)
            }), o.createElement("div", {className: "logo"}), o.createElement("div", {className: "text"}, o.createElement("p", {className: "title"}), o.createElement("div", {className: "slogan"}, "每一次阅读都有价值")), o.createElement("div", {className: "btn"}, "下载"))
        }, t.prototype.componentDidMount = function () {
        }, t.prototype.toClose = function (e) {
            e ? e.stopPropagation() : window.event.cancelBubble = !0;
            var t = document.getElementById("share");
            t && (t.style.display = "none"), this.props.onClose()
        }, t.prototype.Share = function () {
            window._hmt.push(["_trackEvent", "backFlow", "click", "FooterLauncher"]), c.launch()
        }, t
    }(a.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
});
;
/*!/app/containers/NewsList/withNav/index.jsx*/
define("03b9e34", function (e, t) {
    "use strict";

    function n(e) {
        return {userinfo: e.userinfo, nav: e.nav, ad: e.ad}
    }

    function o() {
        return {}
    }

    var a = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, r = e("53ab468"), i = e("6d58bc2"), s = e("53ab468"), d = e("f0a789e"), u = e("e87c67d"),
        l = e("011834d"), p = e("8a93c4d"), c = e("96d7310"), f = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this), this.state = {}
            }

            return a(t, e), t.prototype.render = function () {
                var e = this.props.params && this.props.params.name || "推荐";
                /local/.test(location.href) && (e = "本地"), window._hmt.push(["_trackEvent", "feed", "view", e]);
                var t = this.props.ad, n = t.cmsIndex || {}, o = n.top_appdownload || {}, a = o.enable,
                    i = {url: o.url, imgUrl: o.imageurl}, s = n.top_ad || {}, d = s.enable,
                    f = {url: s.url, imgUrl: s.imageurl}, m = this.props.userinfo || {},
                    h = Math.random();
                return r.createElement("div", {className: "index_view_content"}, 1 != a || m.baidubox ? r.createElement("div", {style: {display: "none"}}) : r.createElement(l.default, {data: i}), r.createElement(u.default, {
                    data: this.props.nav,
                    userinfo: this.props.userinfo,
                    baidubox8: this.props.userinfo.baidubox8
                }), 1 != d || m.baidubox ? r.createElement("div", {style: {display: "none"}}) : r.createElement(l.default, {data: f}), r.createElement("div", {
                    className: "index_view_body",
                    id: "index_view_body"
                }, this.props.children), c.isBox() || c.isBaiduBrowser() ? "" : .2 >= h ? r.createElement(p.default, null) : "")
            }, t.prototype.componentDidMount = function () {
            }, t
        }(s.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = d.connect(n, o)(f)
});
;
/*!/app/components/Carousel/index.jsx*/
define("86efa70", function (e, t) {
    "use strict";

    function n(e) {
        return {userinfo: e.userinfo}
    }

    function a() {
        return {}
    }

    var r = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, i = e("53ab468"), o = e("6d58bc2"), s = e("53ab468"), c = e("f0a789e"), l = e("f0c9b41"),
        u = e("d9ac10b"), d = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this), this.state = {
                    index: 0,
                    height: "auto"
                }
            }

            return r(t, e), t.prototype.render = function () {
                var e = this, t = this.props.userinfo.imageMode;
                if (!t) return i.createElement("div", {style: {display: "none"}});
                var n = {
                        auto: 2500, callback: function (e) {
                            this.setState({index: e})
                        }.bind(this)
                    }, a = this.props.data, r = this.props.userinfo.baidubox,
                    o = "Carousel" + (r ? " baidubox" : "");
                return i.createElement("div", {
                    className: o,
                    ref: "carousel"
                }, i.createElement(l, {
                    className: "carousel-content",
                    swipeOptions: n
                }, a.map(function (t, n) {
                    var a, r, o, s;
                    if (a = t.title, a && a.substr && a.length > 15 && (a = a.substr(0, 15)), "ad" === t.type) return s = t.url, o = t.imgUrl, i.createElement("a", {
                        className: "carousel-item",
                        key: n,
                        href: s
                    }, i.createElement("div", {
                        style: {
                            overflow: "hidden",
                            height: e.state.height
                        }
                    }, i.createElement("img", {
                        src: o,
                        alt: a
                    })), i.createElement("p", {className: "optons-text"}, i.createElement("span", null, a)));
                    r = t.nid, o = t.imageurls[0].url;
                    var c = "/detail/" + r + "/carousel";
                    return t.content_type.image && (c = "/image/image%3A图片/" + r + "/carousel"), i.createElement("div", {key: n}, i.createElement(u.Link, {
                        onClick: e.countCarouselClick.bind(e),
                        className: "carousel-item",
                        to: c
                    }, i.createElement("div", {
                        style: {
                            overflow: "hidden",
                            height: e.state.height
                        }
                    }, i.createElement("img", {
                        src: o,
                        alt: a
                    })), i.createElement("p", {className: "optons-text"}, i.createElement("span", null, a))))
                })), i.createElement("div", {className: "carousel-nav"}, a.map(function (t, n) {
                    return i.createElement("div", {
                        key: n,
                        className: "carousel-nav-item " + (n === e.state.index ? "selected" : "")
                    })
                })))
            }, t.prototype.componentDidMount = function () {
                if (this.props.userinfo.imageMode) {
                    var e = this.refs.carousel, t = e.childNodes[0].getBoundingClientRect().width,
                        n = Math.floor(t / 16 * 9);
                    this.setState({height: n + "px"})
                }
            }, t.prototype.countCarouselClick = function () {
                var e = this.props.channelname;
                e && window._hmt.push(["_trackEvent", "carousel", "click", e])
            }, t
        }(s.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = c.connect(n, a)(d)
});
;
/*!/app/util/backFlow.js*/
define("efd0827", function (i, t) {
    "use strict";

    function e(i, t, e) {
        e = e || 0;
        var a;
        0 === e ? a = {
            nid: i.nid,
            title: i.title,
            url: i.url,
            site: i.site,
            type: i.type,
            abs: i.abs,
            display_type: i.display_type,
            display_url: i.display_url
        } : 1 === e && (a = {nid: i.nid, viewid: i.viewid});
        var s = navigator.userAgent;
        d.share(JSON.stringify(a), s, e, t)
    }

    var d = i("d4a0d6d");
    t.toBackFlow = e
});
;
/*!/app/components/HotScrollNews/index.jsx*/
define("296160a", function (t, e) {
    "use strict";

    function n(t) {
        return {userinfo: t.userinfo}
    }

    function a() {
        return {}
    }

    var i = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, o = t("53ab468"), s = t("6d58bc2"), r = t("53ab468"), l = t("f0a789e"), c = t("d9ac10b"),
        p = t("557cc4f"), h = t("96d7310"), d = t("efd0827"), u = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this), this.state = {
                    marginTop: 0,
                    useAnimate: !0,
                    intervalId: ""
                }
            }

            return i(e, t), e.prototype.render = function () {
                var t = this, e = this.props.userinfo, n = e.baidubox;
                if (n) return o.createElement("div", {style: {display: "none"}});
                var a = this.props.data, i = window.TUIGUANG || "";
                return a.length > 0 ? o.createElement("div", {className: "hot-scroll-news-container clearfix"}, o.createElement("div", {className: "hot-scroll-content"}, o.createElement("div", {className: "hot-news-icon float-left"}, o.createElement("span", null, "热点")), o.createElement("ul", {
                    className: "hot-news-content float-left",
                    style: {
                        marginTop: this.state.marginTop,
                        transition: this.state.useAnimate ? "margin-top 1s ease-out 0s" : "none"
                    }
                }, a.map(function (e, n) {
                    return o.createElement("li", {
                        key: n,
                        className: "hot-news-item"
                    }, o.createElement(c.Link, {
                        "data-index": n,
                        onClick: t.toHotNews.bind(t)
                    }, e.title))
                })))) : i && i.showflag ? o.createElement("div", {className: "hot-scroll-news-container clearfix"}, o.createElement("div", {className: "hot-scroll-content"}, o.createElement("div", {className: "hot-news-icon float-left"}, o.createElement("span", null, "推广")), o.createElement("ul", {
                    className: "hot-news-content float-left",
                    style: {
                        marginTop: this.state.marginTop,
                        transition: this.state.useAnimate ? "margin-top 1s ease-out 0s" : "none"
                    }
                }, o.createElement("li", {className: "hot-news-item"}, o.createElement("a", {
                    href: "javascript:void(0)",
                    onClick: this.tg.bind(this)
                }, i.title))))) : !1
            }, e.prototype.componentDidMount = function () {
                function t() {
                    if (n || (n = this.props.data.length), 0 === a && this.setState({useAnimate: !0}), a >= n - 1) this.setState({useAnimate: !1}), this.setState({marginTop: 0}), a = 0; else {
                        var t = this.state.marginTop;
                        this.setState({marginTop: t - 18}), a++
                    }
                }

                var e, n = this.props.data.length, a = 0;
                e = setInterval(t.bind(this), 2500), this.setState({intervalId: e})
            }, e.prototype.componentWillUnmount = function () {
                this.state.intervalId && clearInterval(this.state.intervalId)
            }, e.prototype.tg = function () {
                var t = window.TUIGUANG || "";
                window._hmt.push(["_trackEvent", "tuiguang", "click", t.title]), location.href = t.url
            }, e.prototype.toHotNews = function (t) {
                var e = this.props.detailPage ? "detailTop" : "feed";
                window._hmt.push(["_trackEvent", "hotNews", "click", e]);
                var n = t.target.getAttribute("data-index"), a = this.props.data[n],
                    i = location.href.indexOf("fr=bdapp") > 0;
                h.isBaiduBrowser() || h.isBox() || i ? p.default.push("/detail/" + a.nid) : d.toBackFlow(a, this.props.detailPage ? "detail_hotnews" : "feed_hotnews"), t.preventDefault()
            }, e
        }(r.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = l.connect(n, a)(u)
});
;
/*!/app/util/transf.js*/
define("8f88548", function (e, r) {
    "use strict";

    function t(e) {
        var r, t, a, c, n, p;
        return r = e.replace(/&quot;/g, '"'), t = r.replace(/&amp;/g, "&"), a = t.replace(/&lt;/g, "<"), c = a.replace(/&gt;/g, ">"), n = c.replace(/&nbsp;/g, " "), p = n
    }

    r.transf = t
});
;
/*!/app/util/getVersion.js*/
define("e37fc08", function (e, i) {
    "use strict";

    function n() {
        var e = 0;
        if (window.baiduboxapp_version) e = window.baiduboxapp_version; else {
            var i, n = navigator.userAgent;
            (i = /([\d+.]+)_(?:diordna|enohpi)_/.exec(n)) ? (i = i[1].split("."), e = i.reverse().join(".")) : (i = /baiduboxapp\/([\d+.]+)/.exec(n)) && (e = i[1])
        }
        return self = function () {
            return e
        }, e
    }

    i.getVersion = n
});
;
/*!/app/util/versionCompare.js*/
define("319f2a3", function (t, n) {
    "use strict";

    function r(t, n) {
        n += "", t += "";
        for (var r = t.split("."), e = n.split("."), a = 0, s = Math.max(r.length, e.length); s > a; a++) {
            if (r[a] && !e[a] && parseInt(r[a]) > 0 || parseInt(r[a]) > parseInt(e[a])) return 1;
            if (e[a] && !r[a] && parseInt(e[a]) > 0 || parseInt(r[a]) < parseInt(e[a])) return -1
        }
        return 0
    }

    n.versionCompare = r
});
;
/*!/app/util/invokeApp.js*/
define("faf017b", function (r, n) {
    "use strict";

    function e(r, n, e) {
        if (r && i.isBox) {
            var o = [];
            if (i.isFunction(n)) e = n; else for (var t in n) o.push(t + "=" + n[t]);
            if (i.isFunction(e)) {
                var a = "_bdbox_js_" + i.getId();
                window[a] = function () {
                    e.apply(window, [].slice.call(arguments, 0))
                }, o.push("func=" + a)
            } else e && o.push("func=" + e);
            o = "baiduboxapp://" + r + "?" + o.join("&");
            var s = document.createElement("iframe");
            s.style.display = "none", s.src = o;
            var p = document.body || document.getElementsByTagName("body")[0];
            p.appendChild(s), setTimeout(function () {
                p.removeChild(s), s = null
            }, 0)
        }
    }

    function o(r, n, e) {
        if (e && !i.isArray(e) && (e = Array.prototype.slice.call(arguments, 0).slice(2)), window[r] && window[r][n]) {
            var o = window[r][n].apply(window[r], e);
            if (!o) try {
                var p = JSON.stringify(e);
                p = p.match(/start_url=.*;component/)[0], p = decodeURIComponent(p.split("start_url=")[1].split(";component")[0]), location.href = p
            } catch (u) {
            }
            return {error: 0, result: o, __from: "js"}
        }
        var c = a.getVersion();
        if (s.versionCompare(c, 4.8) >= 0) {
            var f = t(r, n, e);
            return f = f ? JSON.parse(f) : {}, f.__from = "app", f
        }
        if ("4.7.1" === c || "4.7" == c) {
            var d = t(r, n, e);
            return {error: 0, result: d, __from: "app4.7"}
        }
        return {error: 200}
    }

    function t(r, n, e) {
        var o = {obj: r, func: n, args: e ? e : []};
        try {
            return window.prompt("BdboxApp:" + JSON.stringify(o))
        } catch (t) {
            return {error: 201}
        }
    }

    var i = r("96d7310"), a = r("e37fc08"), s = r("319f2a3");
    n.iosInvokeApp = e, n.androidInvokeApp = o
});
;
/*!/app/util/each.js*/
define("4360218", function (t, r) {
    "use strict";

    function e(t, r, e) {
        if ("object" == typeof t) {
            var i, o, l = n(t);
            if (e = e || t, "array" === l || "arguments" === l || "nodelist" === l) {
                for (i = 0, o = t.length; o > i; i++) if (r.call(e, t[i], i, t) === !1) return
            } else for (i in t) if (t.hasOwnProperty(i) && r.call(e, t[i], i, t) === !1) return
        }
    }

    function n(t) {
        var r;
        return null == t ? r = String(t) : (r = Object.prototype.toString.call(t).toLowerCase(), r = r.substring(8, r.length - 1)), r
    }

    r.each = e
});
;
/*!/app/util/o2o.js*/
define("4fa7a68", function (e, i) {
    "use strict";

    function n(e, i) {
        if (r.isAndroid()) {
            r.isObject(e) && (i = e, e = e.url, delete i.url);
            var n = ["S.bdsb_light_start_url=" + encodeURIComponent(e), "component=com.baidu.searchbox/.home.feed.ThirdPartDetailActivity"];
            if (r.isObject(i)) {
                var a = i.min_v;
                delete i.min_v;
                var d = {color: "i.extra_actionbar_color_id", appid: "S.bdsb_wallet_appid"};
                t.each(i, function (e, i) {
                    "color" === i && (e = 4278190080 | parseInt("0x" + e)), i = d[i] || i, n.push(i + "=" + e)
                })
            }
            n = n.join(";");
            var c = {
                intent: "intent:#Intent;" + n + ";end",
                min_v: a && "" != a ? a : "16783629",
                mode: "0"
            };
            o.androidInvokeApp("Bdbox_android_utils", "command", [JSON.stringify(c)])
        } else {
            r.isObject(e) && (i = e, e = e.url, delete i.url);
            var l = {
                openurl: encodeURIComponent(e),
                minver: "5.3.0.0",
                isla: 0,
                opentype: 1,
                append: 0,
                rbtnstyle: 2
            };
            if (r.isObject(i)) {
                var d = {color: "barcolor"};
                t.each(i, function (e, i) {
                    i = d[i] || i, l[i] = e
                })
            }
            l.appid && (l.isla = 1), o.iosInvokeApp("easybrowse", l)
        }
    }

    var o = e("faf017b"), t = e("4360218"), r = e("96d7310");
    i.o2o = n
});
;
/*!/app/constants/Text.js*/
define("2c7e20f", function (e, c) {
    "use strict";
    c.TEXT_OPEN_NEWS = "打开百度新闻"
});
;
/*!/app/components/NewsList/newsItemNoPic/index.jsx*/
define("49f4f8a", function (t, e) {
    "use strict";
    var s = this && this.__extends || function (t, e) {
            function s() {
                this.constructor = t
            }

            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            t.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s)
        }, i = t("53ab468"), a = t("6d58bc2"), o = t("53ab468"), n = t("557cc4f"), p = t("8f88548"),
        r = t("7761247"), l = t("11e0dbb"), c = t("96d7310"), d = t("4fa7a68"), h = t("efd0827"),
        m = t("4e62aeb"), u = t("2c7e20f"), w = function (t) {
            function e(e, s) {
                t.call(this, e, s), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this)
            }

            return s(e, t), e.prototype.render = function () {
                var t = this.props.channelname, e = this.props.item, s = !1, a = e.title;
                "搞笑" == t && (s = !0), "search" == this.props.type && (a = p.transf(e.title));
                var o = (m.detect(window.navigator.userAgent), c.isBox());
                return !o && this.props.relatedNews && e.index < 5 && "ads" != e.type && (e.showtype = e.showtype || {}, e.showtype.text = u.TEXT_OPEN_NEWS, e.showtype.classname = "tip-hot", e.showtype.style = "tip-fillred"), i.createElement("div", {
                    className: "index-list-main",
                    onClick: this.toNewpage.bind(this),
                    ref: "item"
                }, i.createElement("div", {className: "index-list-main-text"}, i.createElement("div", {
                    className: "index-list-main-title",
                    style: {display: s ? "none" : "block"},
                    dangerouslySetInnerHTML: {__html: a}
                }), i.createElement("div", {
                    className: "index-list-main-abs",
                    style: {display: s ? "block" : "none"}
                }, e.abs), i.createElement("div", {className: "index-list-bottom"}, i.createElement("div", {className: "index-list-main-time"}, e.pulltime || e.ts ? i.createElement("b", {className: "tip-time"}, e.site) : "", e.showtype ? i.createElement("b", {className: e.showtype.classname + " " + e.showtype.style}, e.showtype.text) : ""))))
            }, e.prototype.toNewpage = function () {
                var t = this.props.channelname;
                t ? window._hmt.push(["_trackEvent", "feed", "click", t]) : this.props.relatedNews && window._hmt.push(["_trackEvent", "relatedNews", "click"]);
                var e = (m.detect(window.navigator.userAgent), c.isBox());
                if (!e && this.props.relatedNews && this.props.item.index < 5 && "ads" !== this.props.item.type) return window._hmt.push(["_trackEvent", "relatedNews5", "click"]), void h.toBackFlow(this.props.item, "webdetrel");
                var s = "/detail/" + this.props.item.nid, i = this.props.item;
                try {
                    if (i.ext && i.ext.swap_youxuan && "1" == i.ext.swap_youxuan) {
                        window._hmt.push(["_trackEvent", "swap_youxuan", "click", i.site]);
                        var a = i.ext.swap_youxuan + "+" + i.site + "+noimg";
                        return window._hmt.push(["_trackEvent", "swap_youxuan_ext", "click", a]), void this.toOutsite("bdchannel=baidunews")
                    }
                } catch (o) {
                }
                "search" === this.props.type ? this.props.item && this.props.item.url && (window.location.href = this.props.item.url) : 3 == this.props.item.display_type ? this.toOutsite() : 2 == this.props.item.display_type ? this.toOutsite() : c.isBox() || c.isIOS() || this.props.relatedNews ? n.default.push(s) : h.toBackFlow(this.props.item, "feed")
            }, e.prototype.toOutsite = function (t) {
                var e = this.props.item.nid,
                    s = JSON.parse(r.default.getItem(l.CHOSEN_READED_IDS)) || [], i = !0,
                    a = this.props.item.display_url;
                if (t && (a += a.indexOf("?") <= 0 ? "?" : "&", a += t), s && s.length && s.map(function (t) {
                    return t == e ? void(i = !1) : void(i = !0)
                }), i) {
                    s.push(e)
                }
                this.refs.item.className = this.refs.item.className + " read", r.default.setItem(l.CHOSEN_READED_IDS, JSON.stringify(s)), setTimeout(function () {
                    var t = {};
                    c.isIOS() && (t.newbrowser = 1), c.isBox() ? d.o2o(a, t) : location.href = a
                }, 0)
            }, e
        }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = w
});
;
/*!/app/components/NewsList/showVideoIcon.jsx*/
define("4cf86ac", function (n, r) {
    "use strict";

    function t() {
        var n = window.navigator.userAgent;
        if (n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            var r = n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)[0].match(/(\d*)_(\d*)/),
                t = parseInt(r[1]), a = parseInt(r[2]);
            return t > 7 || 7 === t && a > 0 ? !0 : !1
        }
        if (n.indexOf("Android") > -1 || n.indexOf("Linux") > -1) {
            var i = n.split("Android")[1].match(/\d+/g);
            return 4 == parseInt(i[0]) && parseInt(i[1]) > 0 ? !0 : parseInt(i[0]) > 4 ? !0 : !1
        }
        return !1
    }

    r.showVideoIcon = t
});
;
/*!/app/components/LazyLoadImg/index.jsx*/
define("31fb39e", function (A, t) {
    "use strict";
    var e = this && this.__extends || function (A, t) {
            function e() {
                this.constructor = A
            }

            for (var i in t) t.hasOwnProperty(i) && (A[i] = t[i]);
            A.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e)
        }, i = A("53ab468"), n = A("6d58bc2"), o = A("c00263d"),
        Q = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAACWCAIAAABINBNqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZDg4Y2FlNi0zOTU2LTRkNmQtYjAxNy1mYmQxOWIxNmY2NzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTkxNEU0NDUzRDYyMTFFNkE5Q0JFOEIxRUFDNjM0MDMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTkxNEU0NDQzRDYyMTFFNkE5Q0JFOEIxRUFDNjM0MDMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5N2NkZDIyLThjMGEtNDg4MS1hN2YxLTMwMTUyZDM3NjIxZCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjI0NTllYzc5LTg4OTAtMTE3OS05MTBlLTg0MGFkMzFiMWRiMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pse4ew0AAAXQSURBVHja7NxtUxNJFIZhAokgL1Iiaun//2/4UoXAAkFWYZ/irO2YhDGBYWtr97o/pMJMJx/a29PnnO7J6OTkZA34tzIiKAgKEBQEBQgKEBQEBQgKggIEBQgKggIEBUEBggIEBUEBgoKgAEEBgoKgAEFBUIKCoABBQVCAoABBQVCAoCAoQFCAoCAoQFAQFCAoQFAQFCAoCAoQFCAoCAoQFAQlKAgKEBQEBQgKEBQE/b9we3t7eXl5fX2dN5PJZHt7e2Njo2fwaDQyaQT95+w8Ozv79u1bu7K+vv7ixYt5RyPx1dVVSbyzs9MjMQg6GNFuOp3OXIyCcbQr8fn5eULsz3kfjTJgPB6bwH7WTcEjw+fXr1/nr/95R/vz4uKia2d9MBdNIEGfllh4c3Oz8FYTN2oulDhZQVZ8c0jQJ6Sbes7w/fv3etNj4UxYBUEH5r7w2b3VI3HPLRB0iOlbX3+MxCDo07K5ublwmY6Uz549a/XQfTnA8+fPzWE/2hzLEp+m02leEzXjZfm3sbGRP+d777H28PCwX9AUWAQVQQer1k9PT1OMJ2uMfH/cUeYdHBxcXFy0dbx2lfb395uysbnbclr70WN69eqVif0tGvW/Jz7FzlaVNxL/tre3q07/+PFjxdEMS+zsdunD0dFRHJ1MJjUgir9+/Xp3d9fcEnQAsrInKC68FRGjXUmcYXnd2tpauIeZiFuBNrlB4mt9qlqhpf54PL7vswRFH2dnZzNrdGNmS3MlkjCcn5//8o8xGu3s7CQlMOdy0BXo6VY+uIW0cKuztuw1Rwm6cv0+uKCVD9x3y5w3tJmWinYrjb++I1pnya7Mcr6fb3uJoMPl6fecL464rRvf3Moa3Y24SV4TEVPsz7Q8l9kjhSV+KVIGLTzwkYupabouppxamA9cXl7O1EMEJehgbN4RydpaHwsjXMRta3esypWeZCA1u+TSEv9UHB4enpycHB8f18o+mUxypRs+u5tJ9xHFk5JWBzRm99Re+Jlf6YOuVC0ly6z995m6uzr5GVBnRyLiwpZ7Pri/v5/X5AMfPnyojaguuZ6LD+6tEhQLMtHW0YygFUfz5r7njSJu5QaZ+S9fvqTMysjUYflg7Mzd9+/fm1WCDm9n1fsHBwdrvZtPFV/jaAYnMc3IBN3YGTV3d3f39vY8lEzQYYiaM9X9koKWo3FxmfPOiiSsTAJee1CzTidV/V4FUKMGbNzRyv+qjfINkbjbBwBBhyGGxa3KNav3lHK+POsWRu0Ucy3f3Shbd/M9p6eniaOejrfED0aq+NhZ8TJ2JgSmKp8fVkt8HUnuZgJxscanPCrFnWASQYdc2dtB+rxP8CvbcqVlnDObn7+lTjDVQVIzTNBHkZDZuvF5U3ZGzRjWwmEVSQ+ot5IGzKSwWLPVuVL47D7AmUW5ssmutY/Br4wQ9FG0Uv3viftRffe3k5Yn37PquT6C4pfy6JfqstNO799VX1K7tgsFOeiD/iv/2rCsgBdNX758eXR0VD8Plgqp5aDN4GSWnz59Kk17Ntn9sO1CtJlWiKDHx8fdjmZ77Hitc4izPK42U6qo6nHe3lHWloWtzdQNw2/evDHPlviHrjXj8cxSPp1OU32Xees/aIPXOmfwImXdbTFyfgNJ+BRBH0sK9kzXTFO9Hjya0attaS68W/G4G0ETbrP6z5++A0FX4/Pnz0k3t7a2egLezR1N327g7Knf3717Z3oJOgDJRDNp9Ts2tVJXihkpEzVr573u1oZ7gmXF0TrFXL628dE9Ifnt27dOjRB0MCJW8sv2+9+VX8a/VPFRc161eiDp6uqqHkfuPpG8t7dnZScoCAoQFAQFCAoQFAQFCAqCAgQFCAqCAgQFCAqCAgQFQQGCAgQFQQGCgqAAQQGCgqAAQUFQgKAAQUFQgKAgKEBQgKAgKEBQgKAgKEBQEBQgKEBQEBQgKAgKEBQgKAgKEBQEBQgKEBQEBQgKggIEBQiK/xJ/CTAAyz7UBLnuykoAAAAASUVORK5CYII=",
        a = function (A) {
            function t(t, e) {
                A.call(this, t, e), this.shouldComponentUpdate = n.shouldComponentUpdate.bind(this)
            }

            return e(t, A), t.prototype.render = function () {
                var A = this.props.src, t = this.props.cover || Q, e = this.props.className || "";
                return o.isInLazyLoadList(A) ? i.createElement("img", {
                    className: e,
                    src: A
                }) : i.createElement("img", {
                    "data-className": e,
                    src: t,
                    "data-src": A,
                    "data-save": "true",
                    onLoad: this.loadHandle
                })
            }, t.prototype.loadHandle = function () {
                t.hash !== window.location.hash && (t.hash = window.location.hash, o.trigglerLoadImgs())
            }, t
        }(i.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
});
;
/*!/app/util/nidStore.js*/
define("b5a4532", function (e, t) {
    "use strict";

    function n(e) {
        if (!a(e)) {
            var t = JSON.parse(f.default.getItem(i.CHOSEN_READED_IDS)) || [];
            r.push(e), t && t.length && t.map(function (e) {
                r.push(e)
            }), f.default.setItem(i.CHOSEN_READED_IDS, JSON.stringify(r))
        }
    }

    function a(e) {
        return u(e) ? !0 : r.indexOf(e) >= 0 ? !0 : !1
    }

    function u(e) {
        var t = JSON.parse(f.default.getItem(i.CHOSEN_READED_IDS)) || [];
        return t && t.length ? void t.map(function (t) {
            return t == e ? !0 : !1
        }) : !1
    }

    var f = e("7761247"), i = e("11e0dbb"), r = [];
    t.addReadNewsId = n, t.hasRead = a
});
;
/*!/app/components/NewsList/newsItemOnePic/index.jsx*/
define("5fc3f75", function (e, t) {
    "use strict";
    var s = this && this.__extends || function (e, t) {
            function s() {
                this.constructor = e
            }

            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            e.prototype = null === t ? Object.create(t) : (s.prototype = t.prototype, new s)
        }, i = e("53ab468"), a = e("6d58bc2"), o = e("53ab468"), r = e("557cc4f"), n = e("4cf86ac"),
        p = e("31fb39e"), l = e("8f88548"), d = e("7761247"), c = e("11e0dbb"), h = e("96d7310"),
        m = e("4fa7a68"), u = e("b5a4532"), w = e("efd0827"), f = e("4e62aeb"), y = e("2c7e20f"),
        _ = function (e) {
            function t(t, s) {
                e.call(this, t, s), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this)
            }

            return s(t, e), t.prototype.render = function () {
                var e = this.props.item, t = e.title;
                "search" == this.props.type && (t = l.transf(e.title));
                var s = (f.detect(window.navigator.userAgent), h.isBox());
                return !s && this.props.relatedNews && e.index < 5 && "ads" != e.type && (e.showtype = e.showtype || {}, e.showtype.text = y.TEXT_OPEN_NEWS, e.showtype.classname = "tip-hot", e.showtype.style = "tip-fillred"), i.createElement("div", {
                    className: "index-list-main showleft",
                    onClick: this.toNewpage.bind(this),
                    ref: "item"
                }, i.createElement("div", {className: "index-list-image"}, "ads_feed" != e.type && n.showVideoIcon() ? i.createElement("i", {className: "ivideoplay"}) : "", i.createElement(p.default, {src: e.imageurls[0].url})), i.createElement("div", {className: "index-list-main-text"}, i.createElement("div", {
                    className: "index-list-main-title",
                    dangerouslySetInnerHTML: {__html: t}
                }), i.createElement("div", {className: "index-list-bottom"}, i.createElement("div", {className: "index-list-main-time"}, "ads" === e.type ? i.createElement("b", {className: "tip-time"}, "广告") : e.pulltime || e.ts ? i.createElement("b", {className: "tip-time"}, e.site) : "", e.showtype ? i.createElement("b", {className: e.showtype.classname + " " + e.showtype.style}, e.showtype.text) : "", "ads" === e.type ? e.ads.win_notice_url.map(function (e, t) {
                    return i.createElement("div", {
                        key: "exposure_" + t,
                        style: {visibility: "hidden"}
                    }, i.createElement(p.default, {src: e}))
                }) : ""))))
            }, t.prototype.toNewpage = function () {
                var e = this.props.channelname;
                e ? window._hmt.push(["_trackEvent", "feed", "click", e]) : this.props.relatedNews && window._hmt.push(["_trackEvent", "relatedNews", "click"]);
                var t = (f.detect(window.navigator.userAgent), h.isBox());
                if (!t && this.props.relatedNews && this.props.item.index < 5 && "ads" !== this.props.item.type) return window._hmt.push(["_trackEvent", "relatedNews5", "click"]), void w.toBackFlow(this.props.item, "webdetrel");
                var s = "/detail/" + this.props.item.nid, i = this.props.item;
                try {
                    if (i.ext && i.ext.swap_youxuan && "1" == i.ext.swap_youxuan) {
                        window._hmt.push(["_trackEvent", "swap_youxuan", "click", i.site]);
                        var a = i.ext.swap_youxuan + "+" + i.site + "+oneimg";
                        return window._hmt.push(["_trackEvent", "swap_youxuan_ext", "click", a]), void this.toOutsite("bdchannel=baidunews")
                    }
                } catch (o) {
                }
                "search" === this.props.type ? this.props.item && this.props.item.url && (window.location.href = this.props.item.url) : "ads" === this.props.item.type ? this.toAd() : 3 == this.props.item.display_type ? this.toOutsite() : 2 == this.props.item.display_type ? this.toOutsite() : h.isBox() || h.isIOS() || this.props.relatedNews ? r.default.push(s) : w.toBackFlow(this.props.item, "feed")
            }, t.prototype.toOutsite = function (e) {
                var t = this.props.item.nid,
                    s = JSON.parse(d.default.getItem(c.CHOSEN_READED_IDS)) || [], i = !0,
                    a = this.props.item.display_url;
                if (e && (a += a.indexOf("?") <= 0 ? "?" : "&", a += e), s && s.length && s.map(function (e) {
                    return e == t ? void(i = !1) : void(i = !0)
                }), i) {
                    s.push(t)
                }
                this.refs.item.className = this.refs.item.className + " read", d.default.setItem(c.CHOSEN_READED_IDS, JSON.stringify(s)), setTimeout(function () {
                    var e = {};
                    h.isIOS() && (e.newbrowser = 1), h.isBox() ? m.o2o(a, e) : location.href = a
                }, 0)
            }, t.prototype.toAd = function () {
                var e = this.props.item.nid, t = this.props.item.ads.click_url;
                u.addReadNewsId(e), this.refs.item.className = this.refs.item.className + " read";
                var s = {};
                h.isIOS() && (s.newbrowser = 1), h.isBox() ? m.o2o(t, s) : location.href = t
            }, t
        }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = _
});
;
/*!/app/components/NewsList/newsItemThreePic/index.jsx*/
define("5ffa835", function (e, t) {
    "use strict";
    var s = this && this.__extends || function (e, t) {
            function s() {
                this.constructor = e
            }

            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            e.prototype = null === t ? Object.create(t) : (s.prototype = t.prototype, new s)
        }, i = e("53ab468"), a = e("6d58bc2"), n = e("53ab468"), r = e("557cc4f"), o = e("31fb39e"),
        p = e("8f88548"), l = e("7761247"), c = e("11e0dbb"), d = e("96d7310"), m = e("4fa7a68"),
        h = e("efd0827"), u = e("4e62aeb"), w = e("2c7e20f"), f = function (e) {
            function t(t, s) {
                e.call(this, t, s), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this)
            }

            return s(t, e), t.prototype.render = function () {
                var e = this.props.item, t = e.title, s = e.imageurls.map(function (e, t) {
                    return i.createElement("div", {
                        key: "NewsItemThreePic_" + t,
                        className: "index-list-album"
                    }, i.createElement("div", {className: "index-list-album-wrapper"}, i.createElement(o.default, {src: e.url})))
                });
                "search" == this.props.type && (t = p.transf(e.title));
                var a = (u.detect(window.navigator.userAgent), d.isBox());
                return !a && this.props.relatedNews && e.index < 5 && "ads" != e.type && (e.showtype = e.showtype || {}, e.showtype.text = w.TEXT_OPEN_NEWS, e.showtype.classname = "tip-hot", e.showtype.style = "tip-fillred"), i.createElement("div", {
                    className: "index-list-main",
                    onClick: this.toNewpage.bind(this),
                    ref: "item"
                }, i.createElement("div", {className: "index-list-main-text"}, i.createElement("div", {
                    className: "index-list-main-title",
                    dangerouslySetInnerHTML: {__html: t}
                })), i.createElement("div", {className: "index-list-album-container"}, s), i.createElement("div", {className: "index-list-bottom"}, i.createElement("div", {className: "index-list-main-time"}, e.pulltime || e.ts ? i.createElement("b", {className: "tip-time"}, e.site) : "", e.showtype ? i.createElement("b", {className: e.showtype.classname + " " + e.showtype.style}, e.showtype.text) : "")))
            }, t.prototype.toNewpage = function () {
                var e = this.props.channelname;
                e ? window._hmt.push(["_trackEvent", "feed", "click", e]) : this.props.relatedNews && window._hmt.push(["_trackEvent", "relatedNews", "click"]);
                var t = (u.detect(window.navigator.userAgent), d.isBox());
                if (!t && this.props.relatedNews && this.props.item.index < 5 && "ads" !== this.props.item.type) return window._hmt.push(["_trackEvent", "relatedNews5", "click"]), void h.toBackFlow(this.props.item, "webdetrel");
                var s = "/detail/" + this.props.item.nid, i = this.props.item;
                try {
                    if (i.ext && i.ext.swap_youxuan && "1" == i.ext.swap_youxuan) {
                        window._hmt.push(["_trackEvent", "swap_youxuan", "click", i.site]);
                        var a = i.ext.swap_youxuan + "+" + i.site + "+threeimg";
                        return window._hmt.push(["_trackEvent", "swap_youxuan_ext", "click", a]), void this.toOutsite("bdchannel=baidunews")
                    }
                } catch (n) {
                }
                "search" === this.props.type ? this.props.item && this.props.item.url && (window.location.href = this.props.item.url) : 3 == this.props.item.display_type ? this.toOutsite() : 2 == this.props.item.display_type ? this.toOutsite() : d.isBox() || d.isIOS() || this.props.relatedNews ? r.default.push(s) : h.toBackFlow(this.props.item, "feed")
            }, t.prototype.toOutsite = function (e) {
                var t = this.props.item.nid,
                    s = JSON.parse(l.default.getItem(c.CHOSEN_READED_IDS)) || [], i = !0,
                    a = this.props.item.display_url;
                if (e && (a += a.indexOf("?") <= 0 ? "?" : "&", a += e), s && s.length && s.map(function (e) {
                    return e == t ? void(i = !1) : void(i = !0)
                }), i) {
                    s.push(t)
                }
                this.refs.item.className = this.refs.item.className + " read", l.default.setItem(c.CHOSEN_READED_IDS, JSON.stringify(s)), setTimeout(function () {
                    var e = {};
                    d.isIOS() && (e.newbrowser = 1), d.isBox() ? m.o2o(a, e) : location.href = a
                }, 0)
            }, t
        }(n.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = f
});
;
/*!/app/components/NewsList/newsItemImg/index.jsx*/
define("3af05ff", function (t, e) {
    "use strict";
    var i = this && this.__extends || function (t, e) {
            function i() {
                this.constructor = t
            }

            for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }, s = t("53ab468"), n = t("6d58bc2"), a = t("557cc4f"), o = t("7761247"), r = t("11e0dbb"),
        p = t("96d7310"), l = t("4fa7a68"), c = function (t) {
            function e(e, i) {
                t.call(this, e, i), this.shouldComponentUpdate = n.shouldComponentUpdate.bind(this)
            }

            return i(e, t), e.prototype.render = function () {
                var t = this.props.item;
                return s.createElement("div", null, s.createElement("p", {
                    className: "index-list-main-title",
                    dangerouslySetInnerHTML: {__html: t.title}
                }), s.createElement("div", {
                    className: "img",
                    onClick: this.toNewpage.bind(this),
                    ref: "item"
                }, s.createElement("img", {src: t.imageurls[0].url})), s.createElement("div", {className: "index-list-bottom"}, s.createElement("div", {className: "index-list-main-time"}, t.pulltime || t.ts ? s.createElement("b", {className: "tip-time"}, t.site) : "", t.showtype ? s.createElement("b", {className: t.showtype.classname + " " + t.showtype.style}, t.showtype.text) : "")))
            }, e.prototype.toNewpage = function () {
                var t = this.props.channelname;
                t ? window._hmt.push(["_trackEvent", "feed", "click", t]) : this.props.relatedNews && window._hmt.push(["_trackEvent", "relatedNews", "click"]);
                var e = "/image/image%3A%E5%9B%BE%E7%89%87/" + this.props.item.nid + "/0",
                    i = this.props.item;
                try {
                    if (i.ext && i.ext.swap_youxuan && "1" == i.ext.swap_youxuan) {
                        window._hmt.push(["_trackEvent", "swap_youxuan", "click", i.site]);
                        var s = i.ext.swap_youxuan + "+" + i.site + "+imageMode";
                        return window._hmt.push(["_trackEvent", "swap_youxuan_ext", "click", s]), void this.toOutsite("bdchannel=baidunews")
                    }
                } catch (n) {
                }
                "search" === this.props.type ? this.props.item && this.props.item.url && (window.location.href = this.props.item.url) : 3 == this.props.item.display_type ? this.toOutsite() : 2 == this.props.item.display_type ? this.toOutsite() : a.default.push(e)
            }, e.prototype.toOutsite = function (t) {
                var e = this.props.item.nid,
                    i = JSON.parse(o.default.getItem(r.CHOSEN_READED_IDS)) || [], s = !0,
                    n = this.props.item.display_url;
                if (t && (n += n.indexOf("?") <= 0 ? "?" : "&", n += t), i && i.length && i.map(function (t) {
                    return t == e ? void(s = !1) : void(s = !0)
                }), s) {
                    i.push(e)
                }
                this.refs.item.className = this.refs.item.className + " read", o.default.setItem(r.CHOSEN_READED_IDS, JSON.stringify(i)), setTimeout(function () {
                    var t = {};
                    p.isIOS() && (t.newbrowser = 1), p.isBox() ? l.o2o(n, t) : location.href = n
                }, 0)
            }, e
        }(s.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = c
});
;
/*!/app/components/NewsList/afdItem/index.jsx*/
define("ca6523a", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, i = t("53ab468"), r = function (t) {
        function e(e) {
            t.call(this, e)
        }

        return n(e, t), e.prototype.componentDidMount = function () {
            var t = this.props.item, e = t._html, n = e.substring(e.indexOf("<script")),
                i = e.substring(0, e.indexOf("<script"));
            t._html.indexOf("adType") > 0 && t._html.indexOf("3") > 0 || (this.refs.afdItem.innerHTML = i, setTimeout(function () {
                var t = document.createElement("script");
                if (e.indexOf("<script") > 0) {
                    var i = n.match(/<script.*>([^<]+)/)[1];
                    t.innerHTML = i, this.refs.afdItem && this.refs.afdItem.appendChild(t)
                }
            }.bind(this), 100))
        }, e.prototype.render = function () {
            return i.createElement("div", {ref: "afdItem"})
        }, e
    }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = r
});
;
/*!/app/components/NewsList/getShowNewsType.jsx*/
define("0d0b4d1", function (t, e) {
    "use strict";

    function n(t) {
        var e = null, n = null, c = null, u = null, E = null;
        switch (t && (t.ctag ? t.ctag.name && (n = t.ctag.name, u = p.FILL_RED, e = 5) : "z" == t.type ? (n = "专题", e = a.TOPIC, u = p.FILL_RED) : "ads_feed" == t.type ? (n = "推广", e = a.ADS, u = p.FILL_GRAY) : "backflow" == t.type ? (n = "用百度新闻查看", e = p.FILL_RED) : (E = i(t)) ? (n = E.text, e = E.type) : (E = o(t)) ? (n = E.text, e = E.type) : t.istopnews ? (n = "置顶", e = a.TOP, u = p.FILL_RED) : "hot" == t.type ? (n = "热点", e = a.HOT) : "recommend" == t.type ? (n = "推荐", e = a.RECOMMAND) : (E = r(t)) ? (n = E.text, e = E.type, c = E.extra, u = p.STROKE_BLUE) : (E = l(t)) && (n = E.text, e = E.type, u = p.STROKE_BLUE)), u) {
            case 1:
                u = "tip-fillred";
                break;
            case 2:
                u = "tip-strokeblue";
                break;
            case 3:
                u = "tip-ad";
                break;
            default:
                u = "tip-fillblue"
        }
        if (null != u && null != n && null != e) {
            var f = {style: u, text: n, type: e, extra: c};
            return f
        }
        return null
    }

    function i(t) {
        if ("info" == t.type) return null;
        if (t && t.topic && t.topic.length) for (var e = 0; e < t.topic.length; e++) if (t.topic[e] && "reason" == t.topic[e].type && t.topic[e].name) return {
            text: t.topic[e].name,
            type: a.REASON
        };
        return null
    }

    function l(t) {
        if (t && t.tag && t.tag.length) for (var e = 0; e < t.tag.length; e++) {
            var n = t.tag[e];
            try {
                if (!new RegExp("/" + n + "?_k=", "i").test(decodeURIComponent(window.location.hash))) return {
                    text: n,
                    type: a.TAG
                }
            } catch (i) {
                continue
            }
        }
        return null
    }

    function r(t) {
        if (t && t.topic && t.topic.length) for (var e = 0; e < t.topic.length; e++) if (t.topic[e] && "area" == t.topic[e].type && t.topic[e].name && null != t.topic[e].id) return {
            text: t.topic[e].name,
            type: a.AREA,
            extra: t.topic[e].id
        };
        return null
    }

    function o() {
        return null
    }

    var p = {FILL_BLUE: 0, FILL_RED: 1, STROKE_BLUE: 2, FILL_GRAY: 3}, a = {
        EDITOR: 0,
        TOPIC: 1,
        REASON: 2,
        CONTENT_VIDEO: 30,
        CONTENT_AUTIO: 31,
        CONTENT_IMAGE: 32,
        TOP: 4,
        HOT: 5,
        RECOMMAND: 6,
        AREA: 7,
        TAG: 8,
        ADS: 9,
        BACKFLOW: 10
    };
    e.getShowNewsType = n
});
;
/*!/app/components/NewsList/setTypeHtml.jsx*/
define("537e11c", function (t, e) {
    "use strict";

    function p(t) {
        return t.showtype = s.getShowNewsType(t), t && t.showtype && ("1" == t.showtype.type ? t.showtype.classname = "tip-topic" : "2" == t.showtype.type ? t.showtype.classname = "tip-reason" : "3" == t.showtype.type ? t.showtype.classname = "tip-contenttype" : "4" == t.showtype.type ? t.showtype.classname = "tip-topnews" : "5" == t.showtype.type ? t.showtype.classname = "tip-hot" : "6" == t.showtype.type ? t.showtype.classname = "tip-recommend" : "7" == t.showtype.type ? t.showtype.classname = "tip-area tip-tag" : "8" == t.showtype.type ? t.showtype.classname = "tip-tag" : "9" == t.showtype.type ? t.showtype.classname = "" : "10" == t.showtype.type && (t.showtype.classname = "tip-hot tip-backflow")), t
    }

    var s = t("0d0b4d1");
    e.setTypeHtml = p
});
;
/*!/app/components/NewsList/index.jsx*/
define("e199b57", function (e, t) {
    "use strict";

    function n(e) {
        return {userinfo: e.userinfo}
    }

    function i() {
        return {}
    }

    var a = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, s = e("53ab468"), r = e("6d58bc2"), l = e("53ab468"), o = e("f0a789e"), d = e("49f4f8a"),
        c = e("5fc3f75"), m = e("5ffa835"), p = e("3af05ff"), f = e("ca6523a"), u = e("537e11c"),
        y = e("b5a4532"), h = e("d10eb16"), N = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this), this.afdClickProcess = this.afdClickProcess.bind(this)
            }

            return a(t, e), t.prototype.componentDidMount = function () {
            }, t.prototype.afdClickProcess = function (e, t) {
                if (t) {
                    var n = t.page + 1, i = t.floor + 1, a = t.extraParamsAFD;
                    h.logAFDNewsData({
                        pos: i,
                        da_type: 2,
                        da_page_num: n,
                        extra_params: a,
                        trigger_type: "DETAIL" === t.da_page ? "detailClick" : "feedClick"
                    })
                }
            }, t.prototype.render = function () {
                var e = this, t = this.props.channelname, n = this.props.newslist,
                    i = this.props.userinfo.imageMode, a = this.props.showNumber || 0;
                return (navigator.userAgent.toLowerCase().indexOf("ucbrowser") > 0 || navigator.userAgent.toLowerCase().indexOf("miuibrowser") > 0) && (n = n.filter(function (e) {
                    return !("ads" === e.type)
                })), s.createElement("div", {
                    className: "newslist-container",
                    id: "newslist-container"
                }, n.map(function (n, r) {
                    var l = n.content_type || {}, o = !!l.image, h = n.imageurls || [], N = h.length,
                        v = n.nid, w = n.url, E = y.hasRead(v) || y.hasRead(w) ? " read" : "";
                    n = u.setTypeHtml(n);
                    var k = e.props.relatedNews, _ = e.props.fromChosen, b = !0;
                    if (a && r + 1 > a && (b = !1), n.index = r, !i) return n._html ? s.createElement("div", {
                        className: "index-list-item-container afd-item afd-item-visit afd-item-no-pic",
                        "data-order": r + 1,
                        key: "NewsList_" + r,
                        onClick: e.afdClickProcess.bind(e, r + 1, n.flrInfo)
                    }, s.createElement(f.default, {item: n})) : s.createElement("div", {
                        className: "index-list-item-container",
                        "data-order": r + 1,
                        key: "NewsList_" + r
                    }, s.createElement("div", {
                        style: {display: b ? "block" : "none"},
                        className: "index-list-item" + E,
                        id: n.nid
                    }, s.createElement(d.default, {
                        item: n,
                        channelname: t,
                        type: e.props.type,
                        fromChosen: _
                    })));
                    if (o) return s.createElement("div", {
                        className: "index-list-item-container",
                        "data-order": r + 1,
                        key: "NewsList_" + r
                    }, s.createElement("div", {
                        style: {display: b ? "block" : "none"},
                        className: "index-list-item" + E
                    }, s.createElement(p.default, {
                        type: e.props.type,
                        item: n,
                        channelname: t,
                        relatedNews: k,
                        fromChosen: _
                    })));
                    if (n._html) return s.createElement("div", {
                        className: "index-list-item-container afd-item afd-item-visit",
                        "data-order": r + 1,
                        key: "NewsList_" + r,
                        onClick: e.afdClickProcess.bind(e, r + 1, n.flrInfo)
                    }, s.createElement(f.default, {item: n}));
                    if (n.invalidAFDItem) return s.createElement("div", {
                        className: "index-list-item-container afd-invaliditem",
                        style: {display: "none"},
                        key: "NewsList_" + r
                    });
                    switch (N) {
                        case 0:
                            return s.createElement("div", {
                                className: "index-list-item-container",
                                "data-order": r + 1,
                                key: "NewsList_" + r
                            }, s.createElement("div", {
                                style: {display: b ? "block" : "none"},
                                className: "index-list-item" + E,
                                id: n.nid
                            }, s.createElement(d.default, {
                                type: e.props.type,
                                item: n,
                                channelname: t,
                                relatedNews: k,
                                fromChosen: _
                            })));
                        case 1:
                            return s.createElement("div", {
                                className: "index-list-item-container",
                                "data-order": r + 1,
                                key: "NewsList_" + r
                            }, s.createElement("div", {
                                style: {display: b ? "block" : "none"},
                                className: "index-list-item" + E,
                                id: n.nid
                            }, s.createElement(c.default, {
                                type: e.props.type,
                                item: n,
                                channelname: t,
                                relatedNews: k,
                                fromChosen: _
                            })));
                        case 3:
                            return s.createElement("div", {
                                className: "index-list-item-container",
                                "data-order": r + 1,
                                key: "NewsList_" + r
                            }, s.createElement("div", {
                                style: {display: b ? "block" : "none"},
                                className: "index-list-item" + E,
                                id: n.nid
                            }, s.createElement(m.default, {
                                type: e.props.type,
                                item: n,
                                channelname: t,
                                relatedNews: k,
                                fromChosen: _
                            })));
                        default:
                            return s.createElement("div", {
                                className: "index-list-item-container",
                                "data-order": r + 1,
                                key: "NewsList_" + r
                            }, s.createElement("div", {
                                style: {display: b ? "block" : "none"},
                                className: "index-list-item" + E
                            }, s.createElement(d.default, {
                                type: e.props.type,
                                item: n,
                                channelname: t,
                                relatedNews: k,
                                fromChosen: _
                            })))
                    }
                }))
            }, t
        }(l.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = o.connect(n, i)(N)
});
;
/*!/app/components/LoadMore/index.jsx*/
define("a34f2db", function (e, t) {
    "use strict";
    var o = this && this.__extends || function (e, t) {
        function o() {
            this.constructor = e
        }

        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    }, n = e("53ab468"), i = e("53ab468"), r = e("6d58bc2"), s = function (e) {
        function t(t, o) {
            e.call(this, t, o), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return o(t, e), t.prototype.loadMoreHandle = function (e) {
            e.preventDefault(), this.props.loadmorefn()
        }, t.prototype.render = function () {
            return n.createElement("div", {
                className: "ui-refresh-wrapper",
                ref: "wrapper"
            }, n.createElement("div", {
                className: "ui-refresh",
                style: {display: this.props.isLoadingMore ? "block" : "none"}
            }, "加载中..."), n.createElement("div", {
                className: "ui-refresh",
                style: {display: this.props.isLoadingMore ? "none" : "block"},
                onClick: this.loadMoreHandle.bind(this)
            }, "加载更多"))
        }, t.prototype.componentDidMount = function () {
            function e() {
                var e = i.getBoundingClientRect().top, t = window.screen.height;
                e && t > e && n()
            }

            var t = this.props.loadByClick;
            if (!t) {
                var o, n = this.props.loadmorefn, i = this.refs.wrapper;
                window.addEventListener("scroll", function () {
                    this.props.isLoadingMore || (o && clearTimeout(o), o = setTimeout(e, 50))
                }.bind(this), !1);
                var r = navigator.userAgent.toLowerCase(),
                    s = document.querySelector(".baidubox8 #sesultList");
                r.indexOf("iphone") > 0 && r.indexOf("baiduboxapp") > 0 && s && s.addEventListener("scroll", function () {
                    this.props.isLoadingMore || (o && clearTimeout(o), o = setTimeout(e, 50))
                }.bind(this), !1)
            }
        }, t
    }(i.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = s
});
;
/*!/app/fetch/newslist/withNav/chosen.js*/
define("92b89c2", function (e, i) {
    "use strict";

    function t(e) {
        void 0 === e && (e = (new Date).getTime());
        var i = n.default(), t = {
            from: "news_webapp",
            pd: "webapp",
            os: d.isIOS() ? "iphone" : "android",
            mid: i,
            ver: 6,
            category_id: 101,
            action: 0 === e ? 1 : 0,
            display_time: e || (new Date).getTime(),
            wf: 0
        }, o = "/sn/api/feed_feedlist", s = a.post(o, t);
        return s
    }

    var a = e("c2909ec"), n = e("76618eb"), d = e("96d7310");
    i.getChosenData = t
});
;
/*!/app/fetch/common/getHotNews.js*/
define("35fd99b", function (t, e) {
    "use strict";

    function n(t) {
        return void 0 === t && (t = 0), i.get("/news?tn=bdapibaiyue&t=hotwordnews&wf=0")
    }

    var i = t("286d917");
    e.getHotNewsData = n
});
;
/*!/app/containers/NewsList/withNav/Chosen.jsx*/
define("a26010f", function (t, e) {
    "use strict";

    function a(t) {
        return {userinfo: t.userinfo, ad: t.ad}
    }

    function n() {
        return {}
    }

    var o = this && this.__extends || function (t, e) {
            function a() {
                this.constructor = t
            }

            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }, s = t("53ab468"), r = t("6d58bc2"), i = t("53ab468"), l = t("f0a789e"), d = t("f516060"),
        h = t("86efa70"), u = t("296160a"), c = t("e199b57"), f = t("a34f2db"), p = t("92b89c2"),
        m = t("d10eb16"), w = t("35fd99b"), v = function (t) {
            function e(e, a) {
                t.call(this, e, a), this.loadDataWithAFDHandle = this.loadDataWithAFDHandle.bind(this), this.loadAFDExceptFirstScreen = this.loadAFDExceptFirstScreen.bind(this), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this), this.state = {
                    newslist: [],
                    hotnews: [],
                    carousel: [],
                    displayTime: 0,
                    hasMore: !1,
                    isLoadingMore: !1,
                    afdnewsCount: 0,
                    topCount: 0,
                    page: 0
                }
            }

            return o(e, t), e.prototype.render = function () {
                return s.createElement("div", null, this.state.carousel.length > 0 ? s.createElement(h.default, {
                    channelname: "推荐",
                    data: this.state.carousel
                }) : s.createElement("div", null), this.state.hotnews.length > 0 ? s.createElement(u.default, {data: this.state.hotnews}) : s.createElement("div", null), 0 === this.state.newslist.length ? s.createElement(d.default, null) : s.createElement(c.default, {
                    channelname: "推荐",
                    newslist: this.state.newslist,
                    fromChosen: !0,
                    topCount: this.state.topCount
                }), this.state.hasMore ? s.createElement(f.default, {
                    loadmorefn: this.loadMoreHandle.bind(this),
                    isLoadingMore: this.state.isLoadingMore
                }) : s.createElement("div", null))
            }, e.prototype.dptongji = function () {
                void function (t, e) {
                    for (var a = e.getElementsByTagName("img"), n = +new Date, o = [], s = function () {
                        this.removeEventListener && this.removeEventListener("load", s, !1), o.push({
                            img: this,
                            time: +new Date
                        })
                    }, r = 0; r < a.length; r++) !function () {
                        var t = a[r];
                        t.addEventListener ? !t.complete && t.addEventListener("load", s, !1) : t.attachEvent && t.attachEvent("onreadystatechange", function () {
                            "complete" == t.readyState && s.call(t, s)
                        })
                    }();
                    alog("speed.set", {fsItems: o, fs: n})
                }(window, document)
            }, e.prototype.componentDidMount = function () {
                window.afdMode ? this.loadDataWithAFDHandle("init") : this.loadDataHandle("init"), this.dptongji(), this.loadHotNews()
            }, e.prototype.componentWillUnmount = function () {
                this._isMounted = !1, e.locationKey = this.props.userinfo.uname, e.tempState = this.state, e.tempScrollTop = document.body.scrollTop || document.documentElement.scrollTop
            }, e.prototype.componentWillMount = function () {
                this._isMounted = !0
            }, e.prototype.loadMoreHandle = function () {
                this._isMounted && this.setState({isLoadingMore: !0}), window.afdMode ? this.loadDataWithAFDHandle("more") : this.loadDataHandle("more")
            }, e.prototype.loadDataHandle = function (t) {
                var e = this, a = (this.props.userinfo, this.state.displayTime), n = p.getChosenData(a);
                n.then(function (t) {
                    return t.json()
                }).then(function (a) {
                    if (0 !== a.errno) return void console.error("推荐页获取数据错误，errno:" + a.errno);
                    var n, o = a.data, s = o.news, r = o.top, i = o.toppic || "",
                        l = e.carouselAdHandle(i);
                    if (e.setState({hasMore: o.hasmore || s && s.length > 0}), s.length) {
                        if ("init" === t) {
                            var d = r.concat(s);
                            e.setState({topCount: r.length}), e.setState({newslist: d}), e.setState({carousel: l})
                        } else "more" === t && e.setState({newslist: e.state.newslist.concat(s)});
                        n = s.slice(-1)[0], e.setState({displayTime: n.pulltime || 0})
                    }
                    "more" === t && e.setState({isLoadingMore: !1, displayTime: n.pulltime})
                })
            }, e.prototype.loadDataWithAFDHandle = function (t) {
                var e = this, a = (this.props.userinfo, this.state.displayTime), n = 3,
                    o = p.getChosenData(a),
                    s = (this.state.newslist ? this.state.newslist.length : 0, "init" === t),
                    r = this.state.page,
                    i = m.getAFDNewsData({tabn: "推荐", pos: "3,10,17", ac: n, fc: r + 1});
                Promise.all([o, i]).then(function (a) {
                    var o = [], i = [], l = a[0].json(), d = a[1];
                    if (0 == d.errno) for (var h = 0; n > h; h++) {
                        var u = {_html: d.res && d.res.ad && d.res.ad[h] && d.res.ad[h].adInfo && d.res.ad[h].adInfo[0].material && d.res.ad[h].adInfo[0].material[0] && d.res.ad[h].adInfo[0].material[0].info};
                        i[h] = d.res && d.res.ad && d.res.ad[h] && d.res.ad[h].adInfo && d.res.ad[h].adInfo[0].extra && d.res.ad[h].adInfo[0].extra[0].v, o.push(u)
                    } else for (var c = 0; n > c; c++) {
                        var f = {invalidAFDItem: !0};
                        o.push(f);
                        var p = 7 * c + 2, w = {page: r, floor: p};
                        m.logErrorAFDNewsData(w)
                    }
                    l.then(function (a) {
                        if (0 !== a.errno) return void console.error("推荐页获取数据错误，errno:" + a.errno);
                        var n = a.data, l = n.news;
                        if (l && 0 != l.length) {
                            l = l.filter(function (t) {
                                return "ads" != t.type
                            });
                            var d;
                            d = l.slice(-1)[0];
                            {
                                e.state.newslist ? e.state.newslist.length : 0
                            }
                            s && (window.exts = []);
                            for (var h = 0; h < o.length; h++) {
                                var u = o[h], c = 7 * h + 2;
                                if (c > l.length) break;
                                if (u._html) {
                                    l.splice(c, 0, u);
                                    var f = {page: r, floor: c, extraParamsAFD: i[h]};
                                    u.flrInfo = f, window.exts.push(f)
                                }
                                if (u.invalidAFDItem) {
                                    l.splice(c, 0, u);
                                    var f = {page: r, floor: c, extraParamsAFD: i[h]};
                                    u.flrInfo = f, window.exts.push(f)
                                }
                            }
                            var p = n.top || [], m = n.toppic;
                            try {
                                p.forEach(function (t, e) {
                                    p[e].istopnews = !0
                                }), m = []
                            } catch (w) {
                                console.log(w)
                            }
                            var v = e.carouselAdHandle(m), g = n.hasmore || l && l.length > 0;
                            if (e._isMounted && e.setState({hasMore: g}), l.length && e._isMounted) {
                                var D = e.state.newslist || {};
                                s ? (D = p.concat(l), e.setState({
                                    topCount: p.length,
                                    afdnewsCount: 3,
                                    carousel: v,
                                    displayTime: d.pulltime || 0,
                                    newslist: D,
                                    page: r + 1
                                })) : (D = D.concat(l), e.setState({
                                    displayTime: d.pulltime || 0,
                                    newslist: D,
                                    page: r + 1
                                }))
                            }
                            "more" === t && e._isMounted && e.setState({isLoadingMore: !1})
                        }
                    })
                })
            }, e.prototype.loadAFDExceptFirstScreen = function (t) {
                var e = this, a = t.length,
                    n = a - this.state.topCount - 3 - 7 * (this.state.afdnewsCount - 1),
                    o = parseInt(n / 6, 10), s = this.state.topCount + 2 + 7 * this.state.afdnewsCount,
                    r = m.getAFDNewsData({tabn: "推荐", ac: o, pos: s + 1 - this.state.topCount});
                r.then(function (a) {
                    if (0 == a.errno) for (var n = 0; o > n; n++) {
                        var r = {}, i = {};
                        r = {_html: a.res && a.res.ad && a.res.ad[n] && a.res.ad[n].adInfo && a.res.ad[n].adInfo[0].material && a.res.ad[n].adInfo[0].material[0] && a.res.ad[n].adInfo[0].material[0].info}, i = a.res && a.res.ad && a.res.ad[n] && a.res.ad[n].adInfo && a.res.ad[n].adInfo[0].extra && a.res.ad[n].adInfo[0].extra[0].v, r._html && (t.splice(s + 7 * n, 0, r), window.extraParamsAFD.push(i))
                    } else for (var l = 0; o > l; l++) {
                        a.pos = s + 7 * l;
                        var d = {invalidAFDItem: !0};
                        t.splice(s + 7 * l, 0, d), m.logErrorAFDNewsData(a)
                    }
                    e.setState({
                        isLoadingMore: !1,
                        afdnewsCount: e.state.afdnewsCount + o,
                        newslist: t.slice(0)
                    })
                })
            }, e.prototype.loadHotNews = function () {
                var t = this, e = w.getHotNewsData(0);
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (0 !== e.errno) return void console.error("推荐页获取热点新闻错误，errno:" + e.errno);
                    var a = e.data && e.data.news || [];
                    t._isMounted && t.setState({hotnews: a})
                })
            }, e.prototype.carouselAdHandle = function (t) {
                var e = this.props.userinfo || {};
                return e.baidubox ? t : t
            }, e
        }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = l.connect(a, n)(v)
});
;
/*!/app/router/Home.jsx*/
define("c18cbfb", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, o = e("53ab468"), r = e("53ab468"), a = e("6d58bc2"), c = e("dae19b8"), i = e("03b9e34"),
        l = e("a26010f"), u = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this)
            }

            return n(t, e), t.prototype.render = function () {
                return o.createElement(c.default, {location: {key: "homelist"}}, o.createElement(i.default, null, o.createElement(l.default, {location: {key: "homelist"}})))
            }, t
        }(r.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = u
});
;
/*!/app/fetch/detail/thumb.js*/
define("fe64d9f", function (n, t) {
    "use strict";

    function r(n, t) {
        var r = {nid: n, from: "info", type: t}, u = "/news?tn=bdapibaiyue&t=newssupport",
            e = i.post(u, r);
        return e
    }

    function u(n) {
        var t = r(n, "up");
        return t
    }

    function e(n) {
        var t = r(n, "down");
        return t
    }

    var i = n("c2909ec");
    t.thumbUp = u, t.thumbDown = e
});
;
/*!/app/components/detail/DetailContent/index.jsx*/
define("2efd116", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, a = e("53ab468"), o = e("6d58bc2"), s = e("31fb39e"), i = e("fe64d9f"), r = e("d4a0d6d"),
        c = e("96d7310"), l = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this), this.state = {
                    showFontSet: !1,
                    clickedUp: !1,
                    showMore: !1
                }
            }

            return n(t, e), t.prototype.render = function () {
                var e = this, t = this.props.data, n = this.props.bodyInfo || {},
                    o = (n.count || {}).up || 0, i = t.content || [], r = this.props.userinfo,
                    l = r.imageMode, d = this.props.searchPage, m = t.site || "";
                m.length > 10 && (m = m.substr(0, 9) + "...");
                var p = this.props.userinfo.fontSize, h = "";
                return h = c.isBox() || c.isBaiduBrowser() || Math.random() < .8 ? a.createElement("div", {className: "show-more-btn-container"}, a.createElement("div", {
                    className: "show-more-btn",
                    onClick: this.showMore.bind(this)
                }, a.createElement("i", {className: "arrow-bottom-blue"}), a.createElement("span", {className: "show-more-text"}, "展开余下全文"))) : a.createElement("div", {className: "show-more-btn-container"}, a.createElement("div", {
                    className: "show-more-btn",
                    onClick: this.showMore.bind(this)
                }, a.createElement("img", {
                    src: "https://gss0.bdstatic.com/5foIcy0a2gI2n2jgoY3K/n/nvn/static/news/imgs/arrow-down_0d9b858.png",
                    className: "arrow-down"
                })), a.createElement("div", {
                    className: "show-more-app-btn",
                    onClick: this.showApp.bind(this)
                }, a.createElement("i", {className: "arrow-bottom-blue"}), a.createElement("span", {className: "show-more-text"}, "下载百度新闻APP阅读全文 >"))), a.createElement("div", {
                    className: this.state.showMore ? "detail-content-container show-more" : "detail-content-container",
                    ref: "detailContentContainer"
                }, a.createElement("div", {
                    className: "detail-content-main",
                    ref: "detailContentMain"
                }, a.createElement("div", {className: "detail-content-header"}, a.createElement("h2", null, t.title), a.createElement("div", {className: "header-info"}, a.createElement("span", null, m), a.createElement("span", {style: {marginLeft: "8px"}}, this.dateTimeFormat(t.ts)), a.createElement("div", {className: "info-group"}, a.createElement("div", {
                    className: "info-group-item info-group-font",
                    onClick: this.toggleFontSetView.bind(this)
                }, a.createElement("div", {
                    className: "info-set-font",
                    style: {display: this.state.showFontSet ? "block" : "none"},
                    onClick: function (e) {
                        e.stopPropagation()
                    }
                }, a.createElement("div", {
                    className: "font-item " + (4 === p ? "font-increase-end" : "font-increase"),
                    onClick: this.fontIncreaseHandle.bind(this)
                }), a.createElement("div", {className: "font-item font-divider"}), a.createElement("div", {
                    className: "font-item " + (1 === p ? "font-decrease-end" : "font-decrease"),
                    onClick: this.fontDecreaseHandle.bind(this)
                }), a.createElement("div", {className: "up-arrow"}), a.createElement("div", {className: "up-arrow_inner"})))))), a.createElement("div", {
                    id: "newsDetailContent",
                    className: "detail-content-content",
                    ref: "contentDom"
                }, i.map(function (t, n) {
                    if (null == t) return "";
                    switch (t.type) {
                        case"image":
                            return a.createElement("div", {
                                key: n,
                                className: "img-container" + (0 === n ? " first-container" : "")
                            }, l ? a.createElement(s.default, {
                                className: "original",
                                src: t.data.big.url
                            }) : a.createElement("img", {
                                src: "https://gss0.bdstatic.com/5foIcy0a2gI2n2jgoY3K/n/nvn/static/news/imgs/img-placeholder_290eaf1.png",
                                "data-srcbyclick": t.data.big.url,
                                onClick: e.showImageHandle
                            }));
                        case"text":
                            return t.data.trim() ? a.createElement("p", {
                                key: n,
                                className: 0 === n ? " first-p" : "",
                                dangerouslySetInnerHTML: {__html: t.data}
                            }) : "";
                        case"video_source":
                            return a.createElement("div", {
                                key: n,
                                className: "content-video-container" + (0 === n ? " first-container" : "")
                            }, a.createElement("div", {className: "content-video-content"}, a.createElement("span", {
                                className: "play-icon",
                                onClick: e.playVideoHandle.bind(e)
                            }), a.createElement("img", {
                                className: "original",
                                src: t.data.image.big.url,
                                ref: "videoCoverDom"
                            }), a.createElement("video", {
                                src: t.data.url,
                                controls: "controls",
                                ref: "videoDom"
                            })));
                        default:
                            return a.createElement("p", {key: n, style: {display: "none"}})
                    }
                })), a.createElement("div", {
                    className: "link-container clearfix",
                    ref: "linkContainer"
                }, t.url ? a.createElement("div", {
                    ref: "toOriginal",
                    className: "float-left"
                }, a.createElement("a", {href: t.url}, "查看原文 >")) : "", a.createElement("div", {
                    className: "float-right",
                    ref: "upBox"
                }, this.state.clickedUp ? a.createElement("span", {className: "up-container clicked"}, o + 1) : a.createElement("span", {
                    className: "up-container",
                    onClick: this.upClickHandle.bind(this),
                    style: {display: d ? "none" : "inline-block"}
                }, o), a.createElement("span", {className: "up-plus1"}, "+1"))), a.createElement("div", {className: "show-more-end"})), h)
            }, t.prototype.componentDidMount = function () {
                window._hmt.push(["_trackEvent", "detailPage", "view"]), window._hmt.push(["_trackEvent", "backFlow", "exposure", "banner"]);
                var e, t = this.refs.toOriginal, n = !1, a = function () {
                    var e = t.getBoundingClientRect().top, a = window.screen.height;
                    e && a > e && !document.querySelector(".show-more") && (window._hmt.push(["_trackEvent", "detailPage", "view", "end"]), n = !0)
                };
                window.addEventListener("scroll", function () {
                    n || (e && clearTimeout(e), e = setTimeout(a, 50))
                }.bind(this), !1);
                var o = this.props.mountedHandle;
                o && o(), this.refs.linkContainer.getBoundingClientRect().top > 2 * window.screen.height && (this.setState({showMore: !0}), this.refs.detailContentMain.style.maxHeight = 2 * window.screen.height - 300 + "px")
            }, t.prototype.dateTimeFormat = function (e) {
                var t, n, a;
                return t = "number" == typeof e ? e : parseInt(e), isNaN(t) ? "" : (n = new Date(t), a = n.getFullYear() + "年" + (n.getMonth() + 1) + "月" + n.getDate() + "日 " + n.getHours() + ":" + n.getMinutes())
            }, t.prototype.toggleFontSetView = function () {
                this.setState({showFontSet: !this.state.showFontSet})
            }, t.prototype.fontIncreaseHandle = function () {
                this.fontSet("increase")
            }, t.prototype.fontDecreaseHandle = function () {
                this.fontSet("decrease")
            }, t.prototype.fontSet = function (e) {
                var t = {};
                if (Object.assign) t = Object.assign({}, this.props.userinfo); else for (var n in this.props.userinfo) if (this.props.userinfo.hasOwnProperty(n)) {
                    var a = this.props.userinfo[n];
                    t[n] = a
                }
                var o = parseInt(t.fontSize) || 2;
                "increase" === e ? (o++, o > 4 && (o = 4)) : "decrease" === e && (o--, 1 > o && (o = 1)), t.fontSize = o, this.props.userInfoActions.updateFontSize(t), this.setState({showFontSet: !1})
            }, t.prototype.playVideoHandle = function () {
                var e = this.refs.videoCoverDom, t = this.refs.videoDom;
                e.style.display = "none", t.style.display = "block", t.play()
            }, t.prototype.showImageHandle = function (e) {
                var t = e.currentTarget;
                t.src = t.getAttribute("data-srcbyclick")
            }, t.prototype.upClickHandle = function () {
                var e = (this.props.userinfo, this.props.nid);
                i.thumbUp(e), this.refs.upBox.className += " uping", this.setState({clickedUp: !0})
            }, t.prototype.showMore = function () {
                this.setState({showMore: !1}), this.refs.detailContentMain.style.maxHeight = ""
            }, t.prototype.showApp = function () {
                window._hmt.push(["_trackEvent", "backFlow", "click", "ShowMore"]), r.launch()
            }, t
        }(a.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = l
});
;
/*!/app/components/AlertTip/index.jsx*/
define("34f6781", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, o = t("53ab468"), r = t("6d58bc2"), i = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(e, t), e.prototype.render = function () {
            return o.createElement("div", {className: "page-alert-tip"}, o.createElement("span", null, this.props.info))
        }, e
    }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = i
});
;
/*!/app/components/detail/DetailBottomInfo/bdNativeShare.js*/
define("853e1ee", function (e, i) {
    "use strict";

    function t(e) {
        var i, t = {
                lower: "http://news.baidu.com/resource/js/3gimg.qq.com_html5_js_qb.js",
                higher: "http://jsapi.qq.com/get?api=app.share"
            }, r = {qq: {forbid: 0, lower: 1, higher: 2}, uc: {forbid: 0, allow: 1}},
            n = navigator.appVersion,
            s = n.split("MQQBrowser/").length > 1 ? r.qq.higher : r.qq.forbid,
            o = n.split("UCBrowser/").length > 1 ? r.uc.allow : r.uc.forbid, h = {uc: "", qq: ""},
            l = !1;
        return e = e || {}, this.url = e.url || document.location.href || "", this.title = e.title || document.title || "", this.desc = e.desc || this.title, this.img = e.img || document.getElementsByTagName("img").length > 0 && document.getElementsByTagName("img")[0].src || "", this.img_title = e.img_title || this.title, this.from = e.from || window.location.host || "", this.ucAppList = {
            sinaWeibo: ["kSinaWeibo", "SinaWeibo", 11, "新浪微博"],
            weixin: ["kWeixin", "WechatFriends", 1, "微信好友"],
            weixinFriend: ["kWeixinFriend", "WechatTimeline", "8", "微信朋友圈"],
            QQ: ["kQQ", "QQ", "4", "QQ好友"],
            QZone: ["kQZone", "QZone", "3", "QQ空间"]
        }, this.share = function (e, t, n) {
            if (this.isQQUC) {
                e.preventDefault(), n = n || {};
                var h = n.url || this.url, a = n.title || this.title, d = n.desc || a,
                    u = n.img || this.img, c = n.img_title || a, p = n.from || this.from;
                if (o) t = "" == t ? "" : "iPhone" == i ? this.ucAppList[t][0] : this.ucAppList[t][1], "QZone" == t && (B = "mqqapi://share/to_qzone?src_type=web&version=1&file_type=news&req_type=1&image_url=" + u + "&title=" + a + "&description=" + d + "&url=" + h + "&app_name=" + p, k = document.createElement("div"), k.style.visibility = "hidden", k.innerHTML = '<iframe src="' + B + '" scrolling="no" width="1" height="1"></iframe>', document.body.appendChild(k), setTimeout(function () {
                    k && k.parentNode && k.parentNode.removeChild(k)
                }, 5e3)), "undefined" != typeof ucweb ? ucweb.startRequest("shell.page_share", [a, a, h, t, "", "@" + p, ""]) : "undefined" != typeof ucbrowser && ucbrowser.web_share(a, a, h, t, "", "@" + p, ""); else if (s && !l) {
                    t = "" == t ? "" : this.ucAppList[t][2];
                    var m = {
                        url: h,
                        title: a,
                        description: d,
                        img_url: u,
                        img_title: c,
                        to_app: t,
                        cus_txt: "请输入此时此刻想要分享的内容"
                    };
                    m = "" == t ? "" : m, "undefined" != typeof browser ? "undefined" != typeof browser.app && s == r.qq.higher && browser.app.share(m) : "undefined" != typeof window.qb && s == r.qq.lower && window.qb.share(m)
                }
            }
        }, this.isloadqqApi = function () {
            if (s) {
                var e = h.qq < 5.4 ? t.lower : t.higher, i = document.createElement("script"),
                    r = document.getElementsByTagName("body")[0];
                i.setAttribute("src", e), r.appendChild(i)
            }
        }, this.getPlantform = function () {
            var e = navigator.userAgent;
            return e.indexOf("iPhone") > -1 || e.indexOf("iPod") > -1 ? "iPhone" : "Android"
        }, this.is_weixin = function () {
            var e = n.toLowerCase();
            return "micromessenger" == e.match(/MicroMessenger/i) ? !0 : !1
        }, this.getVersion = function (e) {
            var i = e.split("."), t = parseFloat(i[0] + "." + i[1]);
            return t
        }, this.isQQUC = !1, this.init = function () {
            i = this.getPlantform(), h.qq = s ? this.getVersion(n.split("MQQBrowser/")[1]) : 0, h.uc = o ? this.getVersion(n.split("UCBrowser/")[1]) : 0, l = this.is_weixin(), s && h.qq < 5.4 && "iPhone" == i || s && h.qq < 5.3 && "Android" == i ? s = r.qq.forbid : s && h.qq < 5.4 && "Android" == i ? s = r.qq.lower : o && (h.uc < 10.2 && "iPhone" == i || h.uc < 9.7 && "Android" == i) && (o = r.uc.forbid), this.isloadqqApi(), (s || o) && (this.isQQUC = !0)
        }, this.init(), this
    }

    Object.defineProperty(i, "__esModule", {value: !0}), i.default = t
});
;
/*!/app/fetch/comment/comment.js*/
define("9a398db", function (t, n) {
    "use strict";

    function e(t, n, e) {
        var i = "/news?tn=bdapibaiyue&t=getcomments&act=get", o = {
            nid: t,
            from: "info",
            pd: "webapp",
            comment_id: n,
            order: "time",
            ver: 3,
            pn: 10,
            ts: e
        }, p = r.post(i, o);
        return p
    }

    function i(t) {
        var n = "/news?tn=bdapibaiyue&t=getcommentcount&act=get",
            e = {nid: t, from: "info", pd: "webapp"}, i = r.post(n, e);
        return i
    }

    function o(t, n) {
        var e = "/news?tn=bdapibaiyue&t=support&act=post",
            i = {nid: t, from: "info", pd: "webapp", comment_id: n, cuid: 1}, o = r.post(e, i);
        return o
    }

    function p(t, n, e, i) {
        var o = "/news?tn=bdapibaiyue&t=comment&act=post",
            p = {nid: t, from: "info", pd: "webapp", text: n, is_reply: e, reply_id: i, ver: 2},
            a = r.post(o, p);
        return a
    }

    t("89c93f8"), t("48b4cd1");
    var r = t("c2909ec");
    n.getCmtlist = e, n.getCount = i, n.cmtsupport = o, n.sentComment = p
});
;
/*!/app/components/CommentBox/index.jsx*/
define("b5ef1a4", function (e, t) {
    "use strict";
    var s = this && this.__extends || function (e, t) {
            function s() {
                this.constructor = e
            }

            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            e.prototype = null === t ? Object.create(t) : (s.prototype = t.prototype, new s)
        }, n = e("53ab468"), i = e("6d58bc2"), o = e("53ab468"), r = e("9a398db"), a = e("34f6781"),
        p = function (e) {
            function t(t, s) {
                e.call(this, t, s), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this), this.state = {isShowTip: !1}
            }

            return s(t, e), t.prototype.render = function () {
                var e;
                return e = "reply" == this.props.type ? "回复" + this.props.userName : this.props.ph, n.createElement("div", {className: "cmtbox"}, n.createElement("div", {className: "tarea"}, n.createElement("textarea", {
                    placeholder: e,
                    ref: "textarea"
                })), n.createElement("div", {className: "status"}, this.props.isLogIn ? "" : n.createElement("div", {
                    className: "nologin",
                    onClick: this.toLoginPage.bind(this)
                }, "点此处登录后再评论"), "sent" == this.props.type ? n.createElement("div", {
                    className: "sent",
                    onClick: this.sentComment.bind(this)
                }, "发表") : n.createElement("div", {
                    className: "sent",
                    onClick: this.sentComment.bind(this)
                }, "回复")), this.state.isShowTip ? n.createElement(a.default, {info: "评论失败，请重试"}) : n.createElement("div", {style: {display: "none"}}))
            }, t.prototype.sentComment = function () {
                var e = this;
                if (this.props.isLogIn) {
                    var t, s = this.refs.textarea.value, n = "", i = 0, o = new Date;
                    "reply" == this.props.type && (s = s + "//@" + this.props.userName + ":" + this.props.text, i = 1, n = this.props.commentId), t = {
                        ts: o.getTime(),
                        text: s,
                        is_reply: i,
                        reply_user_name: this.props.userName,
                        user_name: "我",
                        user_pic: this.props.userImg,
                        isme: !0
                    };
                    var a = r.sentComment(this.props.nid, s, i, n);
                    a.then(function (e) {
                        return e.json()
                    }).then(function (s) {
                        if (s.errno) {
                            e.setState({isShowTip: !0});
                            var n = e;
                            setTimeout(function () {
                                n.setState({isShowTip: !1})
                            }, 1500)
                        } else e.refs.textarea.value = "", e.props.setCommentFn(t)
                    })
                } else this.toLoginPage()
            }, t.prototype.toLoginPage = function () {
                this.props.toLoginPageFn()
            }, t
        }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = p
});
;
/*!/app/components/NewsList/getFormatedDate.jsx*/
define("7251d27", function (e, t) {
    "use strict";

    function r(e, t) {
        e = ("" + e).length < 13 ? 1e3 * e : e;
        var r, u, a, i, o = (new Date).getTime(), g = (o - e) / 1e3;
        a = Math.round(g / 86400), u = Math.round(g / 3600), r = Math.round(g / 60), i = Math.round(g);
        var f = !1;
        if ("boolean" == typeof t && (f = t, t = null), f) {
            var l = new Date;
            return l.setTime(e), l.getFullYear() + "-" + n(l.getMonth() + 1) + "-" + n(l.getDate()) + " " + n(l.getHours()) + ":" + n(l.getMinutes())
        }
        if (0 > g) return "1分钟前";
        if (a > 0 && 4 > a) return a + "天前";
        if (0 >= a && u > 0) return u + "小时前";
        if (0 >= u && r > 0) return r + "分钟前";
        if (0 >= r && i > 0) return i + "秒钟前";
        if (0 === i) return "刚刚";
        var s = new Date;
        s.setTime(e);
        var M = s.getFullYear() + "-" + n(s.getMonth() + 1) + "-" + n(s.getDate()),
            d = n(s.getHours()) + ":" + n(s.getMinutes());
        return null != t && 1 === t ? M : M + " " + d
    }

    function n(e) {
        return (10 > e ? "0" : "") + e
    }

    t.getFormatedDate = r
});
;
/*!/app/components/CommentList/Item/index.jsx*/
define("4bd9837", function (t, e) {
    "use strict";
    var s = this && this.__extends || function (t, e) {
            function s() {
                this.constructor = t
            }

            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s)
        }, o = t("53ab468"), n = t("6d58bc2"), i = t("53ab468"), a = t("b5ef1a4"), r = t("7251d27"),
        p = t("9a398db"), m = function (t) {
            function e(e, s) {
                t.call(this, e, s), this.shouldComponentUpdate = n.shouldComponentUpdate.bind(this), this.state = {
                    showBox: !1,
                    supportCount: parseInt(this.props.item.support_count),
                    comment_id: this.props.item.id,
                    nid: this.props.nid
                }
            }

            return s(e, t), e.prototype.render = function () {
                var t = this.props.item;
                return o.createElement("div", {className: "item clearfix"}, o.createElement("div", {className: "float-left photo-container"}, o.createElement("div", {className: "photo-wrapper"}, o.createElement("img", {
                    src: t.user_pic,
                    alt: t.user_name
                }))), o.createElement("div", {className: "comment-container"}, o.createElement("div", {className: "info clearfix"}, o.createElement("div", {className: "user float-left"}, t.is_reply && t.reply_user_name ? o.createElement("span", {className: "reply"}, "我 回复了 ", t.reply_user_name) : o.createElement("span", null, t.user_name)), o.createElement("div", {className: "handle float-right"}, t.isme ? "" : o.createElement("div", {
                    className: "praise",
                    onClick: this.supportCmt.bind(this),
                    ref: "support"
                }, this.state.supportCount, " 赞"), t.isme || this.props.hideReply ? "" : o.createElement("div", {
                    className: "replybtn",
                    onClick: this.showBox.bind(this)
                }, "回复"))), o.createElement("div", {className: "time-label"}, r.getFormatedDate(t.ts)), o.createElement("div", {className: "content"}, t.text), this.state.showBox ? o.createElement(a.default, {
                    userName: t.user_name,
                    isLogIn: this.props.isLogIn,
                    type: "reply",
                    text: t.text,
                    commentId: t.id,
                    nid: this.props.nid,
                    setCommentFn: this.setComment.bind(this),
                    toLoginPageFn: this.toLoginPage.bind(this)
                }) : ""))
            }, e.prototype.showBox = function () {
                this.setState(this.state.showBox ? {showBox: !1} : {showBox: !0})
            }, e.prototype.supportCmt = function () {
                var t = this;
                if (this.props.isLogIn) {
                    if ("praise" == this.refs.support.className) {
                        var e = p.cmtsupport(this.state.nid, this.state.comment_id);
                        e.then(function (t) {
                            return t.json()
                        }).then(function () {
                            t.setState({supportCount: t.state.supportCount + 1}), t.refs.support.className = "haspraise"
                        })
                    }
                } else this.toLoginPage()
            }, e.prototype.setComment = function (t) {
                this.props.setCommentFn(t), this.setState({showBox: !1})
            }, e.prototype.toLoginPage = function () {
                this.props.toLoginPageFn()
            }, e
        }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = m
});
;
/*!/app/components/detail/DetailBottomInfo/parts/HotComment.jsx*/
define("f71b10d", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, o = e("53ab468"), i = e("6d58bc2"), r = e("d9ac10b"), a = e("4bd9837"), c = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props.data;
            return o.createElement("div", {className: "detail-hot-comment-container"}, o.createElement("div", {className: "bottom-info-title-container"}, o.createElement("h2", null, "热门评论")), o.createElement("div", {className: "cmtlist"}, t.map(function (t, n) {
                return o.createElement(a.default, {
                    key: n,
                    item: t,
                    hideReply: !0,
                    toLoginPageFn: e.props.showLoginTip,
                    isLogIn: e.props.userinfo.isLogIn
                })
            })), o.createElement("div", {className: "hot-comment-link"}, o.createElement(r.Link, {to: "/comment/" + this.props.nid}, "查看全部评论")), o.createElement("div", {className: "detail-divider-block"}))
        }, t
    }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = c
});
;
/*!/app/components/detail/DetailBottomInfo/index.jsx*/
define("6777fb0", function (t, e) {
    "use strict";

    function n(t) {
        return {nav: t.nav, userinfo: t.userinfo, collectlist: t.collectlist}
    }

    function o(t) {
        return {navActions: a.bindActionCreators(d, t), collectActions: a.bindActionCreators(u, t)}
    }

    var i = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, s = t("53ab468"), r = t("6d58bc2"), a = t("ecb7045"), c = t("f0a789e"), p = t("34f6781"),
        d = t("0ad32a9"), u = t("21624e5"), l = t("853e1ee"), f = t("f71b10d"), h = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this), this.state = {isShowTip: !1}
            }

            return i(e, t), e.prototype.render = function () {
                {
                    var t = (this.props.userinfo, this.props.data),
                        e = (t.tag || [], t.hot_comment || []);
                    t.forward_medias || [], t.related_image || [], new l.default
                }
                return s.createElement("div", null, e.length ? s.createElement(f.default, {
                    data: e,
                    userinfo: this.props.userinfo,
                    nid: this.props.nid,
                    commentCount: t.count.comment,
                    showLoginTip: this.showLoginTip.bind(this)
                }) : "", s.createElement("div", {className: "detail-divider-block"}), this.state.isShowTip ? s.createElement(p.default, {info: "请先登录"}) : s.createElement("div", {style: {display: "none"}}))
            }, e.prototype.componentDidMount = function () {
            }, e.prototype.showLoginTip = function () {
                this.setState({isShowTip: !0}), setTimeout(function () {
                    window.open("http://wappass.baidu.com/passport/?login&u=" + encodeURIComponent(window.location.href), "_self")
                }, 2e3)
            }, e
        }(s.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = c.connect(n, o)(h)
});
;
/*!/app/components/detail/DetailHotWords/index.jsx*/
define("f8cdc8d", function (t, e) {
    "use strict";
    var o = this && this.__extends || function (t, e) {
        function o() {
            this.constructor = t
        }

        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
    }, n = t("53ab468"), i = t("6d58bc2"), r = function (t) {
        function e(e, o) {
            t.call(this, e, o), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this)
        }

        return o(e, t), e.prototype.render = function () {
            var t = this, e = this.props.data;
            return n.createElement("div", {className: "detail-hotwords-container"}, n.createElement("div", {className: "bottom-info-title-container"}, n.createElement("h2", null, "热点")), n.createElement("div", {className: "detail-hotwords"}, e.map(function (e, o) {
                return o >= 10 ? !1 : n.createElement("a", {
                    onClick: t.hotScrollCount.bind(t),
                    key: o,
                    href: "http://m.baidu.com/s?word=" + e.title,
                    className: "detail-hotwords-item class" + (o + 1)
                }, e.title)
            })))
        }, e.prototype.hotScrollCount = function () {
            window._hmt.push(["_trackEvent", "hotNews", "click", "detailMiddle"])
        }, e
    }(n.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = r
});
;
/*!/app/fetch/detail/getRelatedNews.js*/
define("4831827", function (e, t) {
    "use strict";

    function n(e) {
        var t = "/news?tn=bdapibaiyue&t=relatednewslist&act=get",
            n = {cuid: "", ln: 30, an: 5, from: "webapp", nid: e}, a = i.post(t, n);
        return a
    }

    function a(e, t) {
        var n = "/news?tn=bdapibaiyue&t=relatednewsinfo&act=post",
            a = {cuid: "", ln: 30, an: e, from: "webapp", nids: t}, r = i.post(n, a);
        return r
    }

    var i = e("c2909ec");
    t.getDefaultRelatedNews = n, t.getMoreRelatedNews = a
});
;
/*!/app/components/detail/RelatedNews/index.jsx*/
define("b53d1b3", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, i = t("53ab468"), s = t("6d58bc2"), o = t("e199b57"), r = t("a34f2db"), a = t("4831827"),
        l = t("96d7310"), d = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this), this.state = {
                    newslist: [],
                    nids: [],
                    isLoadingMore: !1
                }, this.displayAfdFlag = !1
            }

            return n(e, t), e.prototype.render = function () {
                return i.createElement("div", {ref: "wrapper"}, this.state.newslist.length ? i.createElement("div", {className: "detail-related-news"}, i.createElement("div", {className: "bottom-info-title-container"}, i.createElement("h2", null, "相关新闻")), i.createElement("div", null, i.createElement(o.default, {
                    newslist: this.state.newslist,
                    relatedNews: !0
                }), this.state.nids.length ? i.createElement(r.default, {
                    loadmorefn: this.loadRelatedNewsMore.bind(this),
                    isLoadingMore: this.state.isLoadingMore
                }) : i.createElement("div", null, i.createElement("div", {className: "no-more-info"}, "没有更多了")))) : "")
            }, e.prototype.componentDidMount = function () {
                {
                    var t = this.props.nid;
                    this.props.userinfo
                }
                if (this.loadRelatedNews(t), !l.isBox() && !l.isBaiduBrowser()) {
                    var e, n = this.refs.wrapper, i = !1, s = function () {
                        var t = n.getBoundingClientRect().top, e = window.screen.height;
                        t && e > t && (window._hmt.push(["_trackEvent", "backFlow", "exposure", "relatedNews"]), i = !0)
                    };
                    window.addEventListener("scroll", function () {
                        i || (e && clearTimeout(e), e = setTimeout(s, 50))
                    }.bind(this), !1)
                }
            }, e.prototype.componentDidUpdate = function () {
                this.props.relativeAfds.length > 0 && this.displayAfd()
            }, e.prototype.displayAfd = function () {
                if (!this.displayAfdFlag) {
                    var t = [], e = this.state.newslist;
                    e = e.filter(function (t) {
                        return "ads" !== t.type
                    }), e.forEach(function (e) {
                        t.push(e)
                    });
                    var n = this.props.relativeAfds;
                    0 !== n.length && (n.map(function (e, n) {
                        t.splice(5 * n + 2, 0, e)
                    }), this.setState({newslist: t}), this.displayAfdFlag = !0)
                }
            }, e.prototype.loadRelatedNews = function (t) {
                var e = this, n = a.getDefaultRelatedNews(t);
                n.then(function (t) {
                    return t.json()
                }).then(function (t) {
                    if (0 !== t.errno) return void console.error("detail页获取相关新闻第一页出错，errno: " + t.errno);
                    var n = t.data || {}, i = n.news || [];
                    if (!i.length) return void e.props.relatedNewsCallback(0);
                    var s = [], o = [];
                    i = i.filter(function (t) {
                        return "ads" !== t.type
                    }), i.map(function (t) {
                        t.nid && t.title ? s.push(t) : t.nid && o.push(t)
                    });
                    location.href.indexOf("fr=bdapp") > 0;
                    e.setState({newslist: s, nids: o}), e.props.relatedNewsCallback(s.length)
                })
            }, e.prototype.loadRelatedNewsMore = function () {
                var t = this, e = [], n = 5, i = this.state.nids;
                if (0 !== i.length) {
                    i.length <= n ? (e = i, this.setState({nids: []})) : i.map(function (t, s) {
                        return s >= n ? !1 : void e.push(i.shift())
                    }), this.setState({isLoadingMore: !0});
                    var s = (this.props.nid, this.props.userinfo, a.getMoreRelatedNews(n, JSON.stringify(e)));
                    s.then(function (t) {
                        return t.json()
                    }).then(function (e) {
                        if (0 !== e.errno) return void console.error("detail页获取相关新闻（更多）出错，errno: " + e.errno);
                        var n = e.data || {}, i = n.news || [];
                        i = i.filter(function (t) {
                            return "ads" !== t.type
                        }), i.length && t.setState({newslist: t.state.newslist.concat(i)}), t.setState({isLoadingMore: !1})
                    })
                }
            }, e
        }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = d
});
;
/*!/app/components/detail/DetailComment/index.jsx*/
define("d308d5e", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, i = t("53ab468"), o = t("6d58bc2"), s = t("557cc4f"), a = t("88cedf5"), c = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this), this.state = {isStared: !1}
        }

        return n(e, t), e.prototype.render = function () {
            return i.createElement("div", {
                className: "detail-comment-wrapper clearfix",
                style: {display: "block"}
            }, i.createElement("div", {className: "detail-comment-container"}, i.createElement("div", {className: "detail-comment-count-container float-right"}, i.createElement("div", {
                className: "detail-comment-count",
                onClick: this.linkToCommentPage.bind(this)
            }, i.createElement("div", {
                className: "detail-comment-num",
                style: {display: this.props.commentCount ? "block" : "none"}
            }, this.props.commentCount)), this.state.isStared ? i.createElement("div", {
                className: "favor-icon done",
                onClick: this.starHandle.bind(this, "rm")
            }) : i.createElement("div", {
                className: "favor-icon",
                onClick: this.starHandle.bind(this, "add")
            })), i.createElement("div", {className: "detail-comment-text-container"}, i.createElement("div", {onClick: this.linkToCommentPage.bind(this)}, i.createElement("div", {className: "detail-comment-text"}, "我来说两句...")))))
        }, e.prototype.componentDidMount = function () {
            this.isInCollectList()
        }, e.prototype.isInCollectList = function () {
            var t = this, e = this.props.nid, n = this.props.collectlist;
            n.length && n.forEach(function (n) {
                return n.nid === e ? (t.setState({isStared: !0}), !1) : void 0
            })
        }, e.prototype.linkToCommentPage = function () {
            window._hmt.push(["_trackEvent", "comment", "click"]), s.default.push("/comment/" + this.props.nid)
        }, e.prototype.starHandle = function (t) {
            window._hmt.push(["_trackEvent", "star", "click"]);
            var e = this.props.item, n = this.props.collectActions, i = this.props.userinfo,
                o = i.isLogIn, s = this.props.showLoginTip;
            if (!o) return void s();
            var c = this.props.nid, r = this.props.newsUrl;
            "add" === t ? (a.collectNews(c, r), this.setState({isStared: !0}), n.addItem(e)) : (a.delCollectNews(c), this.setState({isStared: !1}), n.rmItem(e))
        }, e
    }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = c
});
;
/*!/app/components/detail/DetailAd/index.jsx*/
define("f14b203", function (t, e) {
    "use strict";
    var o = this && this.__extends || function (t, e) {
        function o() {
            this.constructor = t
        }

        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
    }, n = t("53ab468"), i = t("6d58bc2"), s = t("011834d"), r = function (t) {
        function e(e, o) {
            t.call(this, e, o), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this), this.state = {closed: !1}
        }

        return o(e, t), e.prototype.render = function () {
            var t = {
                url: this.props.url,
                imgUrl: this.props.imgUrl,
                closeCallback: this.HideAd.bind(this)
            };
            return n.createElement("div", {
                className: "detail-ad-container",
                style: {display: this.state.closed ? "none" : "block"}
            }, n.createElement(s.default, {data: t}))
        }, e.prototype.HideAd = function () {
            this.setState({closed: !0})
        }, e
    }(n.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = r
});
;
/*!/app/components/ShareBox/index.jsx*/
define("a912d84", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, a = e("53ab468"), l = e("53ab468"), i = e("96d7310"), o = e("efd0827"), c = function (e) {
        function t(t, n) {
            e.call(this, t, n)
        }

        return n(t, e), t.prototype.render = function () {
            if (i.isBox() || i.isBaiduBrowser()) return a.createElement("div", {style: {display: "none"}});
            var e = this.props.bannerItemData;
            return a.createElement("div", {
                className: "backflow",
                onClick: this.clickHandler.bind(this, e.data)
            }, a.createElement("div", {
                className: "close-btn",
                onClick: this.closeClickHandler.bind(this)
            }), "logo" === e.imageURL ? a.createElement("div", {
                className: "news-img logo",
                alt: ""
            }) : a.createElement("img", {
                className: "news-img",
                src: e.imageURL,
                alt: ""
            }), a.createElement("div", {className: "text"}, e.slogan ? a.createElement("div", null, a.createElement("div", {className: "title-with-slogan"}, e.title), a.createElement("div", {className: "slogan"}, e.slogan)) : a.createElement("div", {className: "title"}, e.title)), a.createElement("div", {className: "btn"}, "打开"))
        }, t.prototype.clickHandler = function (e) {
            o.toBackFlow(e, "webdetban"), window._hmt.push(["_trackEvent", "backFlow", "click", "DetailBanner"])
        }, t.prototype.closeClickHandler = function (e) {
            e.preventDefault(), e.stopPropagation(), this.props.closeBanner()
        }, t
    }(l.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = c
});
;
/*!/app/components/ShareBox/addStyle.js*/
define("cb1549f", function (e, t) {
    "use strict";

    function n(e) {
        if (/.+\.css$/.test(e)) {
            var t = document.createElement("link");
            t.type = "text/css", t.rel = "stylesheet", t.href = e, (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t)
        } else {
            var t = document.createElement("style");
            t.type = "text/css", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t), t.innerHTML = e
        }
    }

    t.addStyle = n
});
;
/*!/app/components/ShareBox/inSwipe.jsx*/
define("47e2e56", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, a = e("53ab468"), o = e("53ab468"), i = e("f0c9b41"), r = e("a912d84"), c = e("4e62aeb"),
        s = e("51a1049"), l = e("cb1549f"), p = e("96d7310"), d = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.state = {index: 0, close: !1}
            }

            return n(t, e), t.prototype.render = function () {
                {
                    var e = this;
                    c.detect(window.navigator.userAgent)
                }
                if (p.isBox() || p.isBaiduBrowser() || this.state.close) return a.createElement("div", {style: {display: "none"}});
                var t = location.href.indexOf("fr=bdapp") > 0;
                if (t) return a.createElement("div", {className: "placehold-60"});
                var n = this.props.bannerData;
                if (n = n.slice(1), 0 === n.length) return a.createElement("div", {
                    style: {
                        width: "100%",
                        height: "62px",
                        background: "rgba(0, 0, 0, .7)"
                    }
                });
                var o = {
                    auto: 2500, callback: function (e) {
                        this.setState(n.length > 2 ? {index: e} : {index: e % 2})
                    }.bind(this)
                };
                return a.createElement("div", null, a.createElement("div", {className: "swipe-backflow-container"}, a.createElement(i, {swipeOptions: o}, n.map(function (t, n) {
                    return a.createElement("div", {key: n}, a.createElement(r.default, {
                        bannerItemData: t,
                        closeBanner: e.closeBanner.bind(e)
                    }))
                })), a.createElement("div", {className: "swipe-nav"}, n.map(function (t, n) {
                    return a.createElement("div", {
                        key: n,
                        className: "swipe-nav-item " + (n === e.state.index ? "selected" : "")
                    })
                }))), a.createElement("div", {className: "placehold-62"}))
            }, t.prototype.componentWillMount = function () {
                var e = location.href.indexOf("fr=bdapp") > 0;
                e && this.loadOpenBox()
            }, t.prototype.componentDidMount = function () {
                var e = navigator.userAgent, t = c.detect(e);
                t.ios && s.versionCompare(t.version, "9.0") < 0 && t.isWechat && l.addStyle("https://m.baidu.com/static/searchbox/activity/openbox/wechatPop.css")
            }, t.prototype.loadOpenBox = function () {
                var e = document.createElement("script");
                e.src = "//s.bdstatic.com/common/openjs/openBox.js?_v=" + Math.floor(Date.now() / 1e3 / 60 / 60), e.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(e), e.onload = function () {
                    window.OpenBox({showTip: !0})
                }
            }, t.prototype.closeBanner = function () {
                this.setState({close: !0})
            }, t
        }(o.Component);
    d.propTypes = {}, Object.defineProperty(t, "__esModule", {value: !0}), t.default = d
});
;
/*!/app/fetch/detail/getNewsDetail.js*/
define("b23a64d", function (e, n) {
    "use strict";

    function t(e) {
        var n = "/news?tn=bdapibaiyue&t=recommendinfo", t = {cuid: "", nids: e, wf: 1},
            i = r.post(n, t);
        return i
    }

    function i(e) {
        var n = "/news?tn=bdapibody&type=2&nids=" + e + "&category=0";
        return fetch(n, {credentials: "include"})
    }

    function o(e) {
        var n = "/news?tn=bdapibaiyue&t=getbodyinfo&act=get",
            t = {nid: e, from: "info", pd: "webapp", ver: 5}, i = r.post(n, t);
        return i
    }

    var r = e("c2909ec");
    n.getNewsContent = t, n.getCarouselNewsContent = i, n.getBodyInfo = o
});
;
/*!/app/components/NewsList/afdItem/Afd.jsx*/
define("c5f7a45", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, i = t("53ab468"), a = t("d10eb16"), r = function (t) {
        function e(e) {
            t.call(this, e)
        }

        return n(e, t), e.prototype.render = function () {
            return i.createElement("div", {
                ref: "afdRef",
                className: "afd-banner afd-item afd-item-visit",
                onClick: this.afdClick.bind(this)
            })
        }, e.prototype.afdClick = function () {
            var t = this.props.afdData;
            t && a.logAFDNewsData({
                pos: 1,
                da_type: 2,
                da_page_num: 1,
                da_page: "DETAIL",
                extra_params: t.adInfo[0].extra[0].v,
                trigger_type: "bannerClick"
            })
        }, e.prototype.componentDidMount = function () {
            var t = this.props.afdData, e = "";
            t && t.adInfo && t.adInfo[0].material && t.adInfo[0].material[0] && (e = t.adInfo[0].material[0].info);
            var n = e.substring(e.indexOf("<script")), i = e.substring(0, e.indexOf("<script"));
            e.indexOf("adType") > 0 && e.indexOf("3") > 0 || (this.refs.afdRef.innerHTML = i, setTimeout(function () {
                var t = document.createElement("script");
                if (e.indexOf("<script") > 0) {
                    var i = n.match(/<script.*>([^<]+)/)[1];
                    t.innerHTML = i, this.refs.afdRef && this.refs.afdRef.appendChild(t)
                }
            }.bind(this), 100))
        }, e.prototype.componentDidUpdate = function () {
            this.componentDidMount()
        }, e
    }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = r
});
;
/*!/app/containers/Detail/index.jsx*/
define("96048e0", function (t, e) {
    "use strict";

    function n(t) {
        return {userinfo: t.userinfo, ad: t.ad, collectlist: t.collectlist}
    }

    function o(t) {
        return {
            collectActions: d.bindActionCreators(A, t),
            userInfoActions: d.bindActionCreators(E, t)
        }
    }

    var a = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, r = t("53ab468"), s = t("6d58bc2"), i = t("53ab468"), d = t("ecb7045"), l = t("f0a789e"),
        f = t("f516060"), c = t("296160a"), h = t("2efd116"), u = t("6777fb0"), p = t("f8cdc8d"),
        m = t("b53d1b3"), w = t("d308d5e"), g = t("f14b203"), I = t("34f6781"), v = t("47e2e56"),
        b = t("35fd99b"), y = t("b23a64d"), N = t("92b89c2"), C = t("b5a4532"), x = t("96d7310"),
        D = t("d10eb16"), A = t("21624e5"), E = t("9b13b92"), B = t("557cc4f"), _ = t("c5f7a45"),
        P = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this), this.state = {
                    hotNews: [],
                    content: !1,
                    contenterror: !1,
                    bodyInfo: !1,
                    detailContentMounted: !1,
                    isShowTip: !1,
                    bannerData: [],
                    bannerAfd: {},
                    relativeAfds: []
                }
            }

            return a(e, t), e.prototype.render = function () {
                var t = window._currentChannelName;
                t || (t = "百度新闻");
                var e = this.props.userinfo || {}, n = this.props.ad || {}, o = n.cmsPage || {},
                    a = o.top_ad || {}, s = this.props.userinfo.fontSize || 2;
                return r.createElement("div", {
                    style: {marginBottom: "50px"},
                    className: "font-size-" + s
                }, this.state.contenterror ? r.createElement("p", {
                    style: {
                        fontSize: ".16rem",
                        color: "#666",
                        textAlign: "center",
                        marginTop: "50px"
                    }
                }, r.createElement("span", null, "获取新闻内容出错  "), r.createElement("a", {
                    href: "#",
                    onClick: this.goBackHandle
                }, "返回上一页")) : "", r.createElement("div", {
                    style: {
                        position: "relative",
                        display: this.state.contenterror ? "none" : "block"
                    }
                }, r.createElement(v.default, {bannerData: this.state.bannerData}), this.state.hotNews && !e.baidubox ? r.createElement("div", {id: "detail-HotScrollNews-wrapper"}, r.createElement(c.default, {
                    detailPage: !0,
                    data: this.state.hotNews
                })) : r.createElement("div", {style: {display: "none"}}), this.state.bodyInfo && this.state.content ? r.createElement(h.default, {
                    nid: this.getParamsNewsId(),
                    data: this.state.content,
                    bodyInfo: this.state.bodyInfo,
                    commentCount: this.state.bodyInfo.count.comment,
                    userinfo: this.props.userinfo,
                    mountedHandle: this.detailContentMountHandle.bind(this),
                    userInfoActions: this.props.userInfoActions
                }) : r.createElement(f.default, null), r.createElement(_.default, {afdData: this.state.bannerAfd}), this.state.detailContentMounted && this.state.content ? r.createElement(u.default, {
                    item: this.state.content,
                    data: this.state.bodyInfo,
                    nid: this.getParamsNewsId(),
                    newsUrl: this.state.content.url,
                    title: this.state.content.title
                }) : r.createElement("div", {style: {display: "none"}}), !e.baidubox && this.state.detailContentMounted && this.state.hotNews && this.state.hotNews.length > 0 ? r.createElement(p.default, {data: this.state.hotNews}) : "", this.state.detailContentMounted && a.enable && !e.baidubox ? r.createElement(g.default, {
                    url: a.url,
                    imgUrl: a.imageurl
                }) : "", this.state.detailContentMounted ? r.createElement(m.default, {
                    nid: this.getParamsNewsId(),
                    userinfo: this.props.userinfo,
                    relativeAfds: this.state.relativeAfds,
                    relatedNewsCallback: this.relatedNewsCallback.bind(this)
                }) : "", this.state.detailContentMounted ? r.createElement(w.default, {
                    nid: this.getParamsNewsId(),
                    commentCount: this.state.bodyInfo.count.comment,
                    collectlist: this.props.collectlist,
                    collectActions: this.props.collectActions,
                    item: this.state.content,
                    userinfo: this.props.userinfo,
                    showLoginTip: this.showLoginTip.bind(this)
                }) : "", this.state.isShowTip ? r.createElement(I.default, {info: "请先登录"}) : r.createElement("div", {style: {display: "none"}})))
            }, e.prototype.componentDidMount = function () {
                this.getHotNewsData(), this.loadNewsContent(this.props.params.carousel), this.getBodyInfo(), C.addReadNewsId(this.getParamsNewsId()), this.getBannerDate()
            }, e.prototype.componentWillMount = function () {
                if (!x.isBox() && !x.isBaiduBrowser()) {
                    var t = window.location.href;
                    if (t.indexOf("?scheme") > 0) if (location.href.match("from=[^&]*")) {
                        var e = location.href.match("from=[^&]*")[0].substring(5);
                        B.default.replace("download/" + e)
                    } else B.default.replace("download")
                }
            }, e.prototype.componentWillUpdate = function () {
                if (!x.isBox() && !x.isBaiduBrowser()) {
                    var t = window.location.href;
                    if (t.indexOf("?scheme") > 0) if (location.href.match("from=[^&]*")) {
                        var e = location.href.match("from=[^&]*")[0].substring(5);
                        B.default.replace("download/" + e)
                    } else B.default.replace("download")
                }
            }, e.prototype.componentDidUpdate = function (t) {
                this.getParamsNewsId(t.params.newsId) !== this.getParamsNewsId() && (window.scrollTo(0, 0), this.setState({
                    hotNews: [],
                    content: !1,
                    bodyInfo: !1,
                    detailContentMounted: !1,
                    bannerAfd: {},
                    relativeAfds: []
                }), this.getHotNewsData(), this.loadNewsContent(this.props.params.carousel), this.getBodyInfo())
            }, e.prototype.getHotNewsData = function () {
                var t = this, e = b.getHotNewsData();
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (0 !== e.errno) return void console.error("detail页获取hotnews出错，errno: " + e.errno);
                    var n = e.data && e.data.news || [];
                    n.length && t.setState({hotNews: n})
                })
            }, e.prototype.loadNewsContent = function (t) {
                {
                    var e, n = this, o = this.getParamsNewsId();
                    this.props.userinfo
                }
                e = t ? y.getCarouselNewsContent(o) : y.getNewsContent(o), e.then(function (t) {
                    return t.json()
                }).then(function (t) {
                    var e, o, a;
                    return 0 !== t.errno ? void console.error("detail页面获取新闻content出错，errno: " + t.errno) : (e = t.data || {}, o = e.news || [], a = o[0], void(a ? (n.setState({content: a}), document.title = a.title) : n.setState({contenterror: !0})))
                })
            }, e.prototype.getBodyInfo = function () {
                var t = this, e = this.getParamsNewsId(), n = y.getBodyInfo(e);
                n.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (0 !== e.errno) return void console.error("detail页获取getBodyInfo出错，errno: " + e.errno);
                    var n = e.data || {};
                    t.setState({bodyInfo: n})
                })
            }, e.prototype.componentWillUnmount = function () {
                document.title = "百度新闻"
            }, e.prototype.detailContentMountHandle = function () {
                this.setState({detailContentMounted: !0})
            }, e.prototype.goBackHandle = function (t) {
                t.preventDefault(), history.back()
            }, e.prototype.getParamsNewsId = function (t) {
                var e = t || this.props.params.newsId;
                return /^\d*$/.test(e) ? e : e.match(/^\d*/)[0]
            }, e.prototype.showLoginTip = function () {
                this.setState({isShowTip: !0}), setTimeout(function () {
                    window._hmt.push(["_trackEvent", "login", "click"]), window.open("http://wappass.baidu.com/passport/?login&u=" + encodeURIComponent(window.location.href), "_self")
                }, 2e3)
            }, e.prototype.getBannerDate = function () {
                var t = this;
                if (!x.isBox() && !x.isBaiduBrowser()) {
                    var e = (this.props.userinfo, 0), n = "logo", o = N.getChosenData(e);
                    o.then(function (t) {
                        return t.json()
                    }).then(function (e) {
                        if (0 !== e.errno) return void console.error("推荐页获取数据错误，errno:" + e.errno);
                        var o, a, r = e.data, s = r.news, i = function () {
                            var t = Math.floor(Math.random() * s.length);
                            return t
                        }, d = t.state.content.nid;
                        do o = i(); while ("ads" === s[o].type || s[o].nid === d);
                        do a = i(); while (o === a || "ads" === s[a].type || s[a].nid === d);
                        var l = [];
                        l.push({
                            title: "百度新闻",
                            imageURL: n,
                            slogan: "每一次阅读都有价值",
                            data: t.state.content
                        }), l.push({
                            title: s[o].title,
                            imageURL: s[o].imageurls[0] && s[o].imageurls[0].url || n,
                            data: s[o]
                        }), l.push({
                            title: s[a].title,
                            imageURL: s[a].imageurls[0] && s[a].imageurls[0].url || n,
                            data: s[a]
                        }), t.setState({bannerData: l})
                    })
                }
            }, e.prototype.relatedNewsCallback = function (t) {
                this.getDetailAFDNewsData(t)
            }, e.prototype.getDetailAFDNewsData = function (t) {
                var e = this, n = 0;
                window._hmt.push(0 >= t ? ["_trackEvent", "relatedNews", "view", "没有相关新闻"] : 2 > t ? ["_trackEvent", "relatedNews", "view", "相关新闻只有1条"] : ["_trackEvent", "relatedNews", "view", "相关新闻2条以上"]), 2 === t && (n = 1), t > 2 && (n = parseInt((t - 2) / 4) + 1);
                for (var o = [], a = 0; n > a; a++) o.push(5 * a + 2);
                var r = [], s = D.getRelativeAFDNewsData({pos: o.join(), ac: o.length, fc: 1});
                s.then(function (t) {
                    if (0 === t.errno) {
                        var n = t.res && t.res.ad;
                        if (!n || 0 === n.length) return;
                        window.exts = [];
                        for (var a = 0; a < n.length; a++) {
                            var s = {};
                            if (n[a] && n[a].locCode) if (x.isIOS()) {
                                if ("1517295245188" === n[a].locCode) {
                                    var i = n[a] && n[a].adInfo && n[a].adInfo[0].extra && n[a].adInfo[0].extra[0] && n[a].adInfo[0].extra[0].v,
                                        d = {
                                            page: 0,
                                            floor: 0,
                                            da_page: "DETAIL",
                                            extraParamsAFD: i
                                        };
                                    s.flrInfo = d, window.exts.push(d), e.setState({bannerAfd: n[a]});
                                    continue
                                }
                                if ("1517295325631" === n[a].locCode) for (var l = 0, f = n[a].adInfo, c = 0; c < f.length; c++) {
                                    s = {_html: n[a] && n[a].adInfo && n[a].adInfo[c].material && n[a].adInfo[c].material[0] && n[a].adInfo[c].material[0].info};
                                    var i = n[a] && n[a].adInfo && n[a].adInfo[c].extra && n[a].adInfo[c].extra[0] && n[a].adInfo[c].extra[0].v,
                                        d = {
                                            page: 0,
                                            floor: o[l],
                                            da_page: "DETAIL",
                                            extraParamsAFD: i
                                        };
                                    s.flrInfo = d, window.exts.push(d), r.push(s), l++
                                }
                            } else {
                                if ("1517295199356" === n[a].locCode) {
                                    var i = n[a] && n[a].adInfo && n[a].adInfo[0].extra && n[a].adInfo[0].extra[0] && n[a].adInfo[0].extra[0].v,
                                        d = {
                                            page: 0,
                                            floor: 0,
                                            da_page: "DETAIL",
                                            extraParamsAFD: i
                                        };
                                    s.flrInfo = d, window.exts.push(d), e.setState({bannerAfd: n[a]});
                                    continue
                                }
                                if ("1517295358894" === n[a].locCode) for (var l = 0, f = n[a].adInfo, c = 0; c < f.length; c++) {
                                    s = {_html: n[a] && n[a].adInfo && n[a].adInfo[c].material && n[a].adInfo[c].material[0] && n[a].adInfo[c].material[0].info};
                                    var i = n[a] && n[a].adInfo && n[a].adInfo[c].extra && n[a].adInfo[c].extra[0] && n[a].adInfo[c].extra[0].v,
                                        d = {
                                            page: 0,
                                            floor: o[l],
                                            da_page: "DETAIL",
                                            extraParamsAFD: i
                                        };
                                    s.flrInfo = d, window.exts.push(d), r.push(s), l++
                                }
                            }
                        }
                    }
                    r && r.length > 0 && e.setState({relativeAfds: r})
                })
            }, e
        }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = l.connect(n, o)(P)
});
;
/*!/app/containers/Detail/PrevImg.jsx*/
define("291f6cf", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, o = t("53ab468"), r = t("6d58bc2"), s = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(e, t), e.prototype.render = function () {
            return console.log("newsid", this.props.params.newsId), console.log("index", this.props.params.index), o.createElement("h1", null, "正文页 图片 预览")
        }, e
    }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = s
});
;
/*!/app/containers/Detail/PrevRelatedImg.jsx*/
define("4b6b68d", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, o = t("53ab468"), r = t("6d58bc2"), s = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(e, t), e.prototype.render = function () {
            return console.log("newsid", this.props.params.newsId), console.log("index", this.props.params.index), o.createElement("h1", null, "正文页 相关图片 预览")
        }, e
    }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = s
});
;
/*!/app/components/Header/index.jsx*/
define("3c76f40", function (t, e) {
    "use strict";
    var s = this && this.__extends || function (t, e) {
        function s() {
            this.constructor = t
        }

        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        t.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s)
    }, o = t("53ab468"), i = t("6d58bc2"), a = t("53ab468"), r = t("d9ac10b"), p = function (t) {
        function e(e, s) {
            t.call(this, e, s), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this)
        }

        return s(e, t), e.prototype.render = function () {
            var t;
            t = "image" == this.props.type && this.props.cur && this.props.total_images ? this.props.cur + "/" + this.props.total_images : this.props.title;
            var e = this.props.baidubox8, s = this.props.isLigth, i = this.props.hideTobackBtn;
            if (e && "true" == s) var a = "baidubox8-isLigth"; else var a = "";
            return o.createElement("header", {className: a}, "album" != this.props.type || e ? "" : o.createElement(r.Link, {
                to: "/newslist/widthNav/image/%E5%9B%BE%E7%89%87",
                className: "toolbar-l btn-back"
            }), "subscribe" != this.props.type || e ? "" : o.createElement(r.Link, {
                to: "/",
                className: "toolbar-l btn-back"
            }), "album" == this.props.type || "subscribe" == this.props.type || e || "true" == i ? "" : o.createElement("span", {
                className: "toolbar-l btn-back",
                onClick: this.toBack.bind(this)
            }), "album" != this.props.type ? o.createElement("span", {className: "title"}, t) : "", "image" == this.props.type ? o.createElement("span", {
                className: "toolbar-r btn-ori",
                onClick: this.openOriginal.bind(this)
            }, "原图") : "", "searchsubscribe" == this.props.type && !e || "managesubscribe" == this.props.type && !e ? o.createElement(r.Link, {
                className: "toolbar-r btn-close",
                to: "/"
            }, "完成") : "", "city" != this.props.type || e ? "" : o.createElement("span", {
                className: "toolbar-r btn-close",
                onClick: this.toBack.bind(this)
            }, "关闭"), "detail" === this.props.type ? o.createElement("a", {
                className: "toolbar-r btn-baidu",
                href: "https://m.baidu.com/?from=1000376a"
            }) : "")
        }, e.prototype.toBack = function () {
            history.back()
        }, e.prototype.openOriginal = function () {
            this.props.openOriginalFn()
        }, e.prototype.saveSubscribe = function () {
            this.props.saveSubscribeFn()
        }, e
    }(a.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = p
});
;
/*!/app/components/ImgCarousel/index.jsx*/
define("1c7992c", function (t, e) {
    "use strict";
    var s = this && this.__extends || function (t, e) {
        function s() {
            this.constructor = t
        }

        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        t.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s)
    }, i = t("53ab468"), a = t("53ab468"), o = t("f0c9b41"), n = function (t) {
        function e(e, s) {
            t.call(this, e, s), this.state = {
                index: 0,
                imglen: 0,
                willToAblum: !1,
                touchsY: 0,
                touchmY: 0
            }
        }

        return s(e, t), e.prototype.render = function () {
            var t = this, e = {
                callback: function (t) {
                    this.setState({index: t}), this.props.setImageFn(t), this.setState(t + 1 == this.state.imglen ? {willToAblum: !0} : {willToAblum: !1})
                }.bind(this), swiping: function (t) {
                    this.state.willToAblum && t > 0 && this.props.toAlbumFn()
                }.bind(this)
            }, s = this.props.data;
            return i.createElement("div", {
                id: "ImageCarousel",
                ref: "ImageCarousel"
            }, i.createElement("div", {
                className: "ImageCarouselbg",
                onClick: this.toggleInfo.bind(this)
            }, i.createElement(o, {
                id: "imageCarousel",
                className: "imageCarousel",
                swipeOptions: e,
                ref: "imageCarousel"
            }, s.map(function (e, s) {
                var a = e.data.text || "", o = e.data.big.url;
                return i.createElement("div", {
                    className: "item",
                    key: s
                }, i.createElement("div", {className: "img"}, i.createElement("img", {src: o})), i.createElement("p", {
                    className: "mark nodis",
                    ref: "mark"
                }), i.createElement("div", {
                    className: "abs",
                    ref: "abs",
                    style: {bottom: 0},
                    onTouchStart: t.touchs.bind(t),
                    onTouchMove: t.touchm.bind(t),
                    onTouchEnd: t.touche.bind(t)
                }, a))
            }))), i.createElement("div", {className: "imageCarouselBtn"}, i.createElement("p", {
                className: "btn prev",
                onClick: this.toPrev.bind(this)
            }), i.createElement("p", {className: "btn next", onClick: this.toNext.bind(this)})))
        }, e.prototype.componentDidMount = function () {
            var t = document.getElementById("imageCarousel").childNodes;
            t[0].style.height = "100%", this.setState({imglen: this.props.data.length})
        }, e.prototype.toPrev = function () {
            this.refs.imageCarousel.prev()
        }, e.prototype.toNext = function () {
            this.state.index + 1 == this.state.imglen ? this.props.toAlbumFn() : this.refs.imageCarousel.next()
        }, e.prototype.toggleInfo = function () {
            this.props.toggleInfoFn()
        }, e.prototype.touchs = function (t) {
            t.preventDefault(), this.state.touchsY = t.targetTouches[0].screenY, this.state.absHeight = t.target.offsetHeight, this.state.allheight = parseInt(window.innerHeight - 90)
        }, e.prototype.touchm = function (t) {
            this.state.touchmY = t.targetTouches[0].screenY;
            var e = this.state.touchsY - this.state.touchmY, t = t.target;
            e >= 0 ? (t.style.height = e < this.state.allheight - this.state.absHeight ? e + this.state.absHeight + "px" : this.state.allheight + "px", t.previousElementSibling.className = "mark") : this.state.absHeight - 92 > -e ? (t.style.height = this.state.absHeight + e + "px", t.previousElementSibling.className = "mark") : (t.style.height = "92px", t.previousElementSibling.className = "mark nodis")
        }, e.prototype.touche = function (t) {
            t.preventDefault()
        }, e
    }(a.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = n
});
;
/*!/app/fetch/imagedetail/imagedetail.js*/
define("9572a04", function (e, t) {
    "use strict";

    function a(e) {
        var t = "/news?tn=bdapibaiyue&t=medianewsinfo&act=get",
            a = {nids: e, topic: "图片", type: "image", platform: "webapp"}, n = i.post(t, a);
        return n
    }

    e("89c93f8"), e("48b4cd1");
    var i = e("c2909ec");
    t.getImageDetail = a
});
;
/*!/app/containers/ImageDetail/index.jsx*/
define("5d77e48", function (t, e) {
    "use strict";

    function n(t) {
        return {userinfo: t.userinfo}
    }

    function o() {
        return {}
    }

    var i = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, a = t("53ab468"), s = t("6d58bc2"), r = t("53ab468"), u = t("d9ac10b"), c = t("557cc4f"),
        l = t("f0a789e"), p = t("3c76f40"), m = t("1c7992c"), h = t("9572a04"), f = t("fe64d9f"),
        d = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this), this.state = {
                    newslist: [],
                    total_images: 0,
                    comment: 0,
                    up: 0,
                    cur: 1,
                    curUrl: "",
                    voted: !1
                }
            }

            return i(e, t), e.prototype.render = function () {
                return a.createElement("div", {
                    id: "image_view",
                    ref: "imageView"
                }, a.createElement(p.default, {
                    type: "image",
                    cur: this.state.cur,
                    total_images: this.state.total_images,
                    openOriginalFn: this.openOriginal.bind(this),
                    baidubox8: this.props.userinfo.baidubox8
                }), a.createElement("div", {id: "image_toolbar"}, a.createElement(u.Link, {
                    to: "/comment/" + this.props.params.newsId,
                    className: "image-toolbar-comment"
                }, this.state.comment), a.createElement("span", {
                    className: "image-toolbar-up",
                    ref: "toolbarUp",
                    onClick: this.thumbUpHandle.bind(this)
                }, a.createElement("em", null, this.state.up))), this.state.newslist.length > 0 ? a.createElement(m.default, {
                    data: this.state.newslist,
                    setImageFn: this.setImage.bind(this),
                    toAlbumFn: this.toAlbum.bind(this),
                    toggleInfoFn: this.toggleInfo.bind(this)
                }) : "")
            }, e.prototype.componentDidMount = function () {
                var t = this, e = h.getImageDetail(this.props.params.newsId);
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    var n = e.data.news[0], o = (n.content, n.content.filter(function (t) {
                        return "image" === t.type ? t : void 0
                    }));
                    t.setState({
                        newslist: o,
                        total_images: n.total_images,
                        comment: n.count.comment,
                        up: n.count.up,
                        curUrl: o[0].data.original.url
                    })
                })
            }, e.prototype.thumbUpHandle = function (t) {
                var e = this;
                t.preventDefault(), t.stopPropagation();
                this.props.userinfo;
                if (!this.state.voted) {
                    var n = f.thumbUp(this.props.params.newsId);
                    n.then(function (t) {
                        return t.json()
                    }).then(function () {
                        e.setState({
                            up: e.state.up + 1,
                            voted: !0
                        }), e.refs.toolbarUp.className = "image-toolbar-up voted"
                    })
                }
            }, e.prototype.setImage = function (t) {
                this.setState({cur: t + 1, curUrl: this.state.newslist[t].data.original.url})
            }, e.prototype.openOriginal = function () {
                var t = window.open(this.state.curUrl);
                t || (location.href = this.state.curUrl)
            }, e.prototype.toAlbum = function () {
                var t = "/album/" + this.props.params.newsId;
                c.default.push(t)
            }, e.prototype.toggleInfo = function () {
                this.refs.imageView.className = "hideInfo" == this.refs.imageView.className ? "" : "hideInfo"
            }, e
        }(r.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = l.connect(n, o)(d)
});
;
/*!/app/components/AlbumList/index.jsx*/
define("f4c3129", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, i = e("53ab468"), r = e("6d58bc2"), o = e("53ab468"), a = e("d9ac10b"), l = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props.newslist;
            return i.createElement("div", {id: "album_list"}, i.createElement("div", {className: "title"}, "为您推荐"), i.createElement("ul", null, e.map(function (e, t) {
                return i.createElement(a.Link, {
                    className: "list-item",
                    to: "image/image%3A%E5%9B%BE%E7%89%87/" + e.nid + "/0",
                    key: "AblumList_" + t
                }, i.createElement("img", {src: e.image_url}), i.createElement("p", {className: "tit"}, e.title))
            })))
        }, t
    }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = l
});
;
/*!/app/fetch/imagedetail/album.js*/
define("53bd71c", function (e, t) {
    "use strict";

    function c(e) {
        var t = "/news?tn=bdapibaiyue&t=medianewsmore&act=get",
            c = {nid: e, topic: "图片", type: "image", platform: "webapp"}, n = i.post(t, c);
        return n
    }

    e("89c93f8"), e("48b4cd1");
    var i = e("c2909ec");
    t.getAlbum = c
});
;
/*!/app/containers/ImageDetail/album.jsx*/
define("78c06d7", function (t, e) {
    "use strict";

    function n(t) {
        return {userinfo: t.userinfo}
    }

    function o() {
        return {}
    }

    var i = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, s = t("53ab468"), r = t("6d58bc2"), u = t("53ab468"), a = t("f0a789e"), c = t("f516060"),
        l = t("f4c3129"), d = t("3c76f40"), f = t("53bd71c"), p = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this), this.state = {
                    newslist: [],
                    loading: !0
                }
            }

            return i(e, t), e.prototype.render = function () {
                return s.createElement("div", {id: "album_view"}, s.createElement(d.default, {
                    type: "album",
                    baidubox8: this.props.userinfo.baidubox8
                }), this.state.loading ? s.createElement(c.default, null) : s.createElement(l.default, {newslist: this.state.newslist}))
            }, e.prototype.componentDidMount = function () {
                var t = this, e = f.getAlbum(this.props.params.newsId);
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    var n = e.data.news;
                    n.length && t.setState({newslist: n, loading: !1})
                })
            }, e
        }(u.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = a.connect(n, o)(p)
});
;
/*!/app/components/CommentList/index.jsx*/
define("05719fa", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, o = t("53ab468"), s = t("6d58bc2"), i = t("53ab468"), r = t("4bd9837"), a = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this), this.state = {showBox: !1}
        }

        return n(e, t), e.prototype.render = function () {
            var t, e = this, n = this.props.data;
            return t = "new" == this.props.type ? "cmtlist newest" : "cmtlist hot", o.createElement("div", {className: t}, "new" == this.props.type ? o.createElement("h3", {className: "cmtlist_title yellow"}, o.createElement("span", null, "最新评论")) : o.createElement("h3", {className: "cmtlist_title red"}, o.createElement("span", null, "最热评论")), o.createElement("div", {className: "cmtlis"}, n.map(function (t, n) {
                return o.createElement(r.default, {
                    item: t,
                    key: "CmtList_" + n,
                    nid: e.props.nid,
                    setCommentFn: e.setComment.bind(e),
                    isLogIn: e.props.isLogIn,
                    toLoginPageFn: e.toLoginPage.bind(e)
                })
            })))
        }, e.prototype.setComment = function (t) {
            this.props.setCommentFn(t)
        }, e.prototype.toLoginPage = function () {
            this.props.toLoginPageFn()
        }, e
    }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = a
});
;
/*!/app/containers/Comment/index.jsx*/
define("6ca7337", function (t, e) {
    "use strict";

    function n(t) {
        return {userinfo: t.userinfo}
    }

    function s() {
        return {}
    }

    var o = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, i = t("53ab468"), a = t("53ab468"), r = t("f0a789e"), m = t("3c76f40"), c = t("05719fa"),
        h = t("b5ef1a4"), p = t("a34f2db"), l = t("34f6781"), d = t("9a398db"), u = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.state = {
                    cmtlist: [],
                    hasmore: !1,
                    hotlist: [],
                    count: 0,
                    isLoadingMore: !1,
                    lastTs: 0,
                    lastCommentId: 0,
                    isShowTip: !1
                }
            }

            return o(e, t), e.prototype.render = function () {
                return i.createElement("div", {id: "comment_view"}, i.createElement(m.default, {
                    type: "comment",
                    title: "评论",
                    baidubox8: this.props.userinfo.baidubox8
                }), i.createElement("div", {id: "comment_view_content"}, i.createElement(h.default, {
                    ph: "我来说两句...",
                    type: "sent",
                    nid: this.props.params.newsId,
                    userImg: this.props.userinfo.image,
                    isLogIn: this.props.userinfo.isLogIn,
                    setCommentFn: this.setComment.bind(this),
                    toLoginPageFn: this.toLoginPage.bind(this)
                }), i.createElement("div", {className: "count"}, i.createElement("span", null, this.state.count), "条评论"), i.createElement("div", {className: "comment_list"}, this.state.hotlist.length ? i.createElement(c.default, {
                    type: "hot",
                    data: this.state.hotlist,
                    nid: this.props.params.newsId,
                    isLogIn: this.props.userinfo.isLogIn,
                    setCommentFn: this.setComment.bind(this),
                    toLoginPageFn: this.toLoginPage.bind(this)
                }) : "", this.state.cmtlist.length ? i.createElement(c.default, {
                    type: "new",
                    data: this.state.cmtlist,
                    nid: this.props.params.newsId,
                    isLogIn: this.props.userinfo.isLogIn,
                    setCommentFn: this.setComment.bind(this),
                    toLoginPageFn: this.toLoginPage.bind(this)
                }) : ""), this.state.hasmore ? i.createElement(p.default, {
                    loadmorefn: this.loadMoreHandle.bind(this),
                    isLoadingMore: this.state.isLoadingMore
                }) : ""), this.state.isShowTip ? i.createElement(l.default, {info: "请先登录"}) : i.createElement("div", {style: {display: "none"}}))
            }, e.prototype.componentDidMount = function () {
                var t = this, e = document.querySelector(".openBox-shareEntry");
                e && e.parentElement.removeChild(e), this.getCommentList();
                var n = d.getCount(this.props.params.newsId);
                n.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    t.setState({count: e.data.count})
                })
            }, e.prototype.getCommentList = function () {
                var t = this,
                    e = d.getCmtlist(this.props.params.newsId, this.state.lastCommentId, this.state.lastTs);
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    var n = e.data, s = n.comments.length;
                    t.setState({
                        cmtlist: t.state.cmtlist.concat(n.comments),
                        hasmore: n.hasmore
                    }), n.comments.map(function (e, n) {
                        n + 1 == s && t.setState({lastTs: e.ts, lastCommentId: e.id})
                    }), t.setState(t.state.isLoadingMore ? {isLoadingMore: !1} : {hotlist: n.hot_comments})
                })
            }, e.prototype.loadMoreHandle = function () {
                this.setState({isLoadingMore: !0}), this.getCommentList()
            }, e.prototype.setComment = function (t) {
                if (this.props.userinfo.isLogIn) {
                    {
                        this.state.cmtlist.splice(0, 0, t)
                    }
                    this.setState({cmtlist: this.state.cmtlist})
                } else this.toLoginPage()
            }, e.prototype.toLoginPage = function () {
                this.setState({isShowTip: !0}), setTimeout(function () {
                    window._hmt.push(["_trackEvent", "login", "click"]), window.open("http://wappass.baidu.com/passport/?login&u=" + encodeURIComponent(window.location.href), "_self")
                }, 2e3)
            }, e
        }(a.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = r.connect(n, s)(u)
});
;
/*!/app/components/city/CityListItem/index.jsx*/
define("2cb66c8", function (t, o) {
    "use strict";

    function e(t) {
        return {userinfo: t.userinfo, nav: t.nav}
    }

    function n(t) {
        return {userInfoActions: c.bindActionCreators(h, t), navActions: c.bindActionCreators(m, t)}
    }

    var i = this && this.__extends || function (t, o) {
            function e() {
                this.constructor = t
            }

            for (var n in o) o.hasOwnProperty(n) && (t[n] = o[n]);
            t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e)
        }, s = t("53ab468"), a = t("6d58bc2"), r = t("53ab468"), p = t("557cc4f"), c = t("ecb7045"),
        u = t("f0a789e"), f = t("11e0dbb"), d = t("7761247"), l = t("7358dc6"), h = t("9b13b92"),
        m = t("0ad32a9"), v = function (t) {
            function o(o, e) {
                t.call(this, o, e), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this), this.state = {}
            }

            return i(o, t), o.prototype.render = function () {
                {
                    var t = this.props.item;
                    t.hasmore
                }
                return s.createElement("li", {className: "item province-item"}, s.createElement("div", {onClick: this.goCityPage.bind(this)}, t.name, t.hasmore ? s.createElement("i", {className: "city-arrow"}) : ""))
            }, o.prototype.componentDidMount = function () {
            }, o.prototype.goCityPage = function () {
                var t = this.props.item, o = "/province/" + t.id + "/" + encodeURIComponent(t.name);
                if (!t.hasmore) {
                    var e = JSON.stringify(t);
                    if (d.default.setItem(f.CITY_INFO, e), this.props.userinfo.localid = t.id, this.props.userinfo.localname = t.name, this.props.userInfoActions.updateLocalInfo(this.props.userinfo), this.props.userinfo.isLogIn) this.updateNavInfo(t); else {
                        var n = l.getLocalNav();
                        this.updateLocalInfo(n)
                    }
                    o = "/newslist/widthNav/local/" + t.id + "/" + encodeURIComponent(t.name)
                }
                p.default.push(o)
            }, o.prototype.updateLocalInfo = function (t) {
                var o = this;
                t.tag.map(function (t) {
                    "local" == t.type && (t.name = "本地", t.id = o.props.userinfo.localid)
                }), l.saveLocalNav(t), this.props.navActions.update(t, this.props.userinfo.isLogIn, !0)
            }, o.prototype.updateNavInfo = function (t) {
                var o = this.props.nav;
                o.tag.map(function (o) {
                    "local" == o.type && (o.name = "本地", o.id = t.id)
                }), this.props.navActions.update(o, this.props.userinfo.isLogIn, !0)
            }, o
        }(r.Component);
    Object.defineProperty(o, "__esModule", {value: !0}), o.default = u.connect(e, n)(v)
});
;
/*!/app/components/city/CitySearchListItem/index.jsx*/
define("0b00ad0", function (t, e) {
    "use strict";
    var o = this && this.__extends || function (t, e) {
        function o() {
            this.constructor = t
        }

        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
    }, n = t("53ab468"), i = t("6d58bc2"), r = t("53ab468"), p = function (t) {
        function e(e, o) {
            t.call(this, e, o), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this), this.state = {}
        }

        return o(e, t), e.prototype.render = function () {
            var t = this.props.item;
            return n.createElement("div", {
                className: "item city-item",
                onClick: this.goCityPage.bind(this)
            }, t.name)
        }, e.prototype.componentDidMount = function () {
        }, e.prototype.goCityPage = function () {
            this.props.goCityPageFn(this.props.item)
        }, e
    }(r.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = p
});
;
/*!/app/fetch/city/city.js*/
define("0b3c71e", function (t, a) {
    "use strict";

    function c(t) {
        var a = "/news?tn=bdapibaiyue&t=getareaconf&act=get", c = {id: t}, e = l.post(a, c);
        return e
    }

    function e(t) {
        var a = "/news?tn=bdapibaiyue&t=suggestion&act=get", c = {ver: 3, wd: t}, e = l.post(a, c);
        return e
    }

    function i(t) {
        var a = "/news?tn=bdapibaiyue&t=getlocalid&act=get",
            c = {province: t.province, city: t.city, county: t.county}, e = l.post(a, c);
        return e
    }

    function n(t) {
        var a, c;
        o(t) ? (a = "https://api.map.baidu.com/geocoder/v2/", c = {
            callback: "getCityCallback",
            ak: "27c40676446aa36d331c6256e164d5ea",
            location: t.lat + "," + t.lng,
            output: "json",
            pois: "0",
            coordtype: "wgs84ll"
        }) : (a = "https://api.map.baidu.com/location/ip", c = {
            callback: "getCityCallback",
            ak: "27c40676446aa36d331c6256e164d5ea",
            coor: "wgs84ll"
        }), l.getjsonp(a, c)
    }

    function o(t) {
        return t.lat && t.lng ? !0 : !1
    }

    t("89c93f8"), t("48b4cd1"), t("9e26c59");
    var l = t("c2909ec");
    a.getCityList = c, a.getSearchList = e, a.getlocalid = i, a.getCityLbs = n
});
;
/*!/app/containers/City/index.jsx*/
define("fe0b3a4", function (t, e) {
    "use strict";

    function i(t) {
        return {userinfo: t.userinfo, nav: t.nav}
    }

    function s(t) {
        return {userInfoActions: c.bindActionCreators(u, t), navActions: c.bindActionCreators(p, t)}
    }

    var n = this && this.__extends || function (t, e) {
            function i() {
                this.constructor = t
            }

            for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }, r = t("53ab468"), o = t("53ab468"), a = t("557cc4f"), c = t("ecb7045"), l = t("f0a789e"),
        d = t("6d58bc2"), u = t("9b13b92"), p = t("0ad32a9"), y = t("3c76f40"), h = t("2cb66c8"),
        f = t("0b00ad0"), v = t("0b3c71e"), m = t("11e0dbb"), g = t("7761247"), b = t("7358dc6"),
        I = function (t) {
            function e(e, i) {
                t.call(this, e, i), this.shouldComponentUpdate = d.shouldComponentUpdate.bind(this), this.state = {
                    cityId: 0,
                    citylist: [],
                    searchlist: [],
                    keyword: "",
                    currInfo: "",
                    currcity: "",
                    currcityid: ""
                }
            }

            return n(e, t), e.prototype.render = function () {
                var t = this;
                return r.createElement("div", {id: "city_view"}, r.createElement(y.default, {
                    type: "city",
                    title: "城市切换",
                    baidubox8: this.props.userinfo.baidubox8
                }), r.createElement("div", {id: "city_searchbox"}, r.createElement("div", {className: "simple-searchbox"}, r.createElement("form", null, r.createElement("input", {
                    type: "text",
                    placeholder: "输入城市名或首字母",
                    onKeyUp: this.searchwd.bind(this),
                    ref: "searchinput"
                }), r.createElement("span", {
                    ref: "closebtn",
                    style: {display: "none"},
                    onClick: this.clearWd.bind(this)
                })))), r.createElement("div", {id: "city_list"}, r.createElement("div", {
                    id: "city_list_noresult",
                    ref: "noresult"
                }, "抱歉暂不提供该城市的新闻，建议您手工", r.createElement("br", null), "选择所在城市，或重新输入。"), r.createElement("div", {
                    id: "city_list_searching",
                    ref: "searching"
                }, "正在查询，请稍候...."), r.createElement("div", {
                    id: "city_list_current",
                    ref: "curcity"
                }, r.createElement("div", {className: "title"}, "当前定位城市"), this.state.currcity && this.state.currcityid ? r.createElement("div", {
                    className: "list",
                    onClick: this.goGPSCityPage.bind(this)
                }, this.state.currcity) : r.createElement("div", {className: "list"}, this.state.currInfo)), r.createElement("div", {
                    id: "city_list_province",
                    ref: "citylist"
                }, r.createElement("div", {className: "title"}, "全国省份"), r.createElement("ul", {className: "list"}, this.state.citylist.map(function (t, e) {
                    return r.createElement(h.default, {item: t, key: "citylist_" + e})
                }))), r.createElement("div", {
                    id: "city_list_suggest",
                    ref: "searchlist"
                }, r.createElement("div", {className: "list"}, this.state.searchlist.map(function (e, i) {
                    return r.createElement(f.default, {
                        item: e,
                        key: "citysearch_" + i,
                        goCityPageFn: t.goCityPage.bind(t)
                    })
                })))))
            }, e.prototype.componentDidMount = function () {
                var t = this, e = v.getCityList(this.state.cityId);
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    var i = e.data.area;
                    t.setState({citylist: i})
                }), this.canGPS() ? navigator.geolocation.getCurrentPosition(this.getGirdSuccess.bind(this), this.getGirdFailed.bind(this), {
                    enableHighAccuracy: !1,
                    timeout: 6e4,
                    maximumAge: 36e4
                }) : this.setState({currInfo: "您的设备没有定位功能"});
                var t = this;
                window.getCityCallback = function (e) {
                    t.getCityCallback.call(t, e)
                }
            }, e.prototype.canGPS = function () {
                return navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition ? !0 : !1
            }, e.prototype.getGirdSuccess = function (t) {
                var e = null;
                t && t.coords && (e = {
                    lat: t.coords.latitude,
                    lng: t.coords.longitude
                }, v.getCityLbs(e))
            }, e.prototype.getGirdFailed = function (t) {
                1 === t.code ? this.setState({currInfo: "您禁止了系统获取您的位置，请在设置中更改"}) : 2 === t.code ? this.setState({currInfo: "获取地理位置无响应"}) : 3 === t.code && this.setState({currInfo: "获取地理位置超时"})
            }, e.prototype.getCityCallback = function (t) {
                var e, i = {};
                this.canGPS() ? t.result && t.result.addressComponent && (e = t.result.addressComponent, i.province = e.province, i.city = e.city, i.county = e.county, i.cityCode = t.result.cityCode, i.district = e.district, i.street = e.street, i.street_number = e.street_number, i.business = t.result.business) : t.content && t.content.address_detail && (i.city = t.content.address_detail.city, i.province = t.content.address_detail.province, i.cityCode = t.content.address_detail.city_code), this.callLocalInfo(i)
            }, e.prototype.callLocalInfo = function (t) {
                var e = this, i = {};
                t.province && (i.province = t.province), t.city && (i.city = t.city), t.district && (i.county = t.district);
                var s = v.getlocalid(i);
                s.then(function (t) {
                    return t.json()
                }).then(function (t) {
                    var i = t.data;
                    e.setState({currcity: i.displayname, currcityid: i.localid});
                    var s = JSON.stringify(i);
                    g.default.setItem(m.GPS_CITY_INFO, s)
                })
            }, e.prototype.searchwd = function () {
                var t = this, e = this.trim(this.refs.searchinput.value);
                if (e.length) {
                    this.refs.closebtn.style.display = "block", this.refs.citylist.style.display = "none", this.refs.curcity.style.display = "none", this.refs.searching.style.display = "block", this.refs.noresult.style.display = "none", this.setState({keyword: this.refs.searchinput.value});
                    var i = v.getSearchList(e);
                    i.then(function (t) {
                        return t.json()
                    }).then(function (e) {
                        var i = e.data.area;
                        i.length ? t.refs.searching.style.display = "none" : (t.refs.searching.style.display = "none", t.refs.noresult.style.display = "block"), t.setState({searchlist: i})
                    })
                } else this.clearWd()
            }, e.prototype.trim = function (t) {
                return t.replace(/(^\s*)|(\s*$)/g, "")
            }, e.prototype.clearWd = function () {
                this.refs.closebtn.style.display = "none", this.refs.citylist.style.display = "block", this.refs.curcity.style.display = "block", this.refs.searching.style.display = "none", this.refs.noresult.style.display = "none", this.refs.searchinput.value = "", this.setState({
                    searchlist: [],
                    keyword: ""
                })
            }, e.prototype.goCityPage = function (t) {
                var e = JSON.stringify(t);
                if (g.default.setItem(m.CITY_INFO, e), this.props.userinfo.localid = t.id, this.props.userinfo.localname = t.name, this.props.userInfoActions.updateLocalInfo(this.props.userinfo), this.props.userinfo.isLogIn) this.updateNavInfo(t); else {
                    var i = b.getLocalNav();
                    this.updateLocalInfo(i)
                }
                var s = "/newslist/widthNav/local/" + t.id + "/" + encodeURIComponent(t.name);
                a.default.push(s)
            }, e.prototype.goGPSCityPage = function () {
                this.props.userinfo.localid = this.state.currcityid, this.props.userinfo.localname = this.state.currcity, this.props.userInfoActions.updateLocalInfo(this.props.userinfo);
                var t = {id: this.state.currcityid, name: this.state.currcity};
                if (g.default.setItem(m.CITY_INFO, JSON.stringify(t)), this.props.userinfo.isLogIn) this.updateNavInfo(t); else {
                    var e = b.getLocalNav();
                    this.updateLocalInfo(e)
                }
                var i = "/newslist/widthNav/local/" + this.state.currcityid + "/" + encodeURIComponent(this.state.currcity);
                a.default.push(i)
            }, e.prototype.updateLocalInfo = function (t) {
                var e = this;
                t.tag.map(function (t) {
                    "local" == t.type && (t.name = "本地", t.id = e.props.userinfo.localid)
                }), b.saveLocalNav(t), this.props.navActions.update(t, this.props.userinfo.isLogIn, !0)
            }, e.prototype.updateNavInfo = function (t) {
                var e = this.props.nav;
                e.tag.map(function (e) {
                    "local" == e.type && (e.name = "本地", e.id = t.id)
                }), this.props.navActions.update(e, this.props.userinfo.isLogIn, !0)
            }, e
        }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = l.connect(i, s)(I)
});
;
/*!/app/components/city/ProvinceListItem/SubItem/index.jsx*/
define("33139fa", function (t, e) {
    "use strict";
    var o = this && this.__extends || function (t, e) {
        function o() {
            this.constructor = t
        }

        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
    }, n = t("53ab468"), i = t("6d58bc2"), r = t("53ab468"), s = function (t) {
        function e(e, o) {
            t.call(this, e, o), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this), this.state = {}
        }

        return o(e, t), e.prototype.render = function () {
            var t = this.props.item;
            return n.createElement("div", {
                onClick: this.goSubCityPage.bind(this),
                className: "sc"
            }, t.name)
        }, e.prototype.componentDidMount = function () {
        }, e.prototype.goSubCityPage = function () {
            this.props.goSubCityPageFn(this.props.item)
        }, e
    }(r.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = s
});
;
/*!/app/components/city/ProvinceListItem/Item/index.jsx*/
define("d8f7732", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, o = t("53ab468"), i = t("6d58bc2"), r = t("53ab468"), u = t("33139fa"), p = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this), this.state = {}
        }

        return n(e, t), e.prototype.render = function () {
            var t = this, e = this.props.sublist;
            return o.createElement("div", {className: "subitem"}, e.map(function (e, n) {
                return o.createElement(u.default, {
                    key: "provinceSubItem_" + n,
                    goSubCityPageFn: t.goSubCityPage.bind(t),
                    item: e
                })
            }))
        }, e.prototype.componentDidMount = function () {
        }, e.prototype.goSubCityPage = function (t) {
            this.props.goSubCityPageFn(t)
        }, e
    }(r.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = p
});
;
/*!/app/components/city/ProvinceListItem/index.jsx*/
define("28d36a9", function (t, e) {
    "use strict";
    var i = this && this.__extends || function (t, e) {
            function i() {
                this.constructor = t
            }

            for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }, s = t("53ab468"), o = t("6d58bc2"), n = t("53ab468"), r = t("d8f7732"), a = t("0b3c71e"),
        p = function (t) {
            function e(e, i) {
                t.call(this, e, i), this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this), this.state = {sublist: []}
            }

            return i(e, t), e.prototype.render = function () {
                var t = this.props.item;
                return s.createElement("li", {
                    className: "item province-item",
                    ref: "citylist"
                }, s.createElement("div", {
                    className: "title",
                    onClick: this.showSubList.bind(this)
                }, t.name, t.hasmore ? s.createElement("i", {className: "item-arrow"}) : ""), t.hasmore ? s.createElement(r.default, {
                    sublist: this.state.sublist,
                    goSubCityPageFn: this.goSubCityPage.bind(this)
                }) : "")
            }, e.prototype.componentDidMount = function () {
            }, e.prototype.showSubList = function () {
                var t = this;
                if (this.props.item.hasmore) {
                    var e = a.getCityList(this.props.item.id);
                    e.then(function (t) {
                        return t.json()
                    }).then(function (e) {
                        var i = e.data.area;
                        t.setState({sublist: i}), t.props.hideSublistFn(t.refs.citylist)
                    })
                } else this.props.goCityPageFn(this.props.item)
            }, e.prototype.goSubCityPage = function (t) {
                this.props.goCityPageFn(t)
            }, e
        }(n.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = p
});
;
/*!/app/containers/City/province.jsx*/
define("5a03c08", function (t, e) {
    "use strict";

    function n(t) {
        return {userinfo: t.userinfo, nav: t.nav}
    }

    function i(t) {
        return {userInfoActions: c.bindActionCreators(l, t), navActions: c.bindActionCreators(d, t)}
    }

    var o = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, s = t("53ab468"), a = t("53ab468"), r = t("557cc4f"), c = t("ecb7045"), p = t("f0a789e"),
        u = t("6d58bc2"), l = t("9b13b92"), d = t("0ad32a9"), f = t("3c76f40"), h = t("28d36a9"),
        v = t("0b3c71e"), m = t("11e0dbb"), y = t("7761247"), b = t("7358dc6"), g = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = u.shouldComponentUpdate.bind(this), this.state = {
                    citylist: [],
                    subCitylist: []
                }
            }

            return o(e, t), e.prototype.render = function () {
                var t = this;
                return s.createElement("div", {id: "province_view"}, s.createElement(f.default, {
                    type: "city",
                    title: this.props.params.name,
                    baidubox8: this.props.userinfo.baidubox8
                }), s.createElement("div", {
                    id: "province_view_content",
                    ref: "citylist"
                }, s.createElement("ul", {className: "list"}, this.state.citylist.map(function (e, n) {
                    return s.createElement(h.default, {
                        item: e,
                        key: "provincelist_" + n,
                        hideSublistFn: t.hideSublist.bind(t),
                        goCityPageFn: t.goCityPage.bind(t)
                    })
                }))))
            }, e.prototype.componentDidMount = function () {
                var t = this, e = v.getCityList(this.props.params.id);
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    var n = e.data.area;
                    t.setState({citylist: n})
                })
            }, e.prototype.hideSublist = function (t) {
                for (var e = document.getElementById("province_view_content"), n = e.getElementsByClassName("province-item"), i = 0; i < n.length; i++) n[i].className = "item province-item";
                t.className = "item province-item show"
            }, e.prototype.goCityPage = function (t) {
                var e = JSON.stringify(t);
                if (y.default.setItem(m.CITY_INFO, e), this.props.userinfo.localid = t.id, this.props.userinfo.localname = t.name, this.props.userInfoActions.updateLocalInfo(this.props.userinfo), this.props.userinfo.isLogIn) this.updateNavInfo(t); else {
                    var n = b.getLocalNav();
                    this.updateLocalInfo(n)
                }
                var i = "/newslist/widthNav/local/" + t.id + "/" + encodeURIComponent(t.name);
                r.default.push(i)
            }, e.prototype.updateLocalInfo = function (t) {
                var e = this;
                t.tag.map(function (t) {
                    "local" == t.type && (t.name = "本地", t.id = e.props.userinfo.localid)
                }), b.saveLocalNav(t), this.props.navActions.update(t, this.props.userinfo.isLogIn, !0)
            }, e.prototype.updateNavInfo = function (t) {
                var e = this.props.nav;
                e.tag.map(function (e) {
                    "local" == e.type && (e.name = "本地", e.id = t.id)
                }), this.props.navActions.update(e, this.props.userinfo.isLogIn, !0)
            }, e
        }(a.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = p.connect(n, i)(g)
});
;
/*!/app/fetch/newslist/withNav/baijia.js*/
define("7982e76", function (t, i) {
    "use strict";

    function e(t) {
        void 0 === t && (t = 0);
        var i = "/news?tn=bdapibaiyue&t=getbaijialist&act=get",
            e = {ln: 20, wf: 0, ver: 2, ts: t, nids: "", time: t}, n = a.post(i, e);
        return n
    }

    var a = t("c2909ec");
    i.getBaijiaData = e
});
;
/*!/app/containers/NewsList/withNav/Baijia.jsx*/
define("a87169e", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, o = t("53ab468"), a = t("6d58bc2"), i = t("53ab468"), s = t("f516060"), r = t("e199b57"),
        l = t("a34f2db"), d = t("7982e76"), u = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this), this.state = {
                    newslist: [],
                    displayTime: 0,
                    hasMore: !1,
                    isLoadingMore: !1
                }
            }

            return n(e, t), e.prototype.render = function () {
                return o.createElement("div", null, 0 === this.state.newslist.length ? o.createElement(s.default, null) : o.createElement(r.default, {
                    channelname: "百家",
                    newslist: this.state.newslist
                }), this.state.hasMore ? o.createElement(l.default, {
                    loadmorefn: this.loadMoreHandle.bind(this),
                    isLoadingMore: this.state.isLoadingMore
                }) : o.createElement("div", null))
            }, e.prototype.componentDidMount = function () {
                this.loadDataHandle("init")
            }, e.prototype.componentWillUnmount = function () {
            }, e.prototype.loadMoreHandle = function () {
                this.setState({isLoadingMore: !0}), this.loadDataHandle("more")
            }, e.prototype.loadDataHandle = function (t) {
                var e = this, n = this.state.displayTime, o = d.getBaijiaData(n);
                o.then(function (t) {
                    return t.json()
                }).then(function (n) {
                    if (0 !== n.errno) return void console.error("百家页获取数据错误，errno:" + n.errno);
                    var o = n.data, a = o.list;
                    e.setState({hasMore: o.has_more}), a.length && ("init" === t ? e.setState({newslist: a}) : "more" === t && e.setState({newslist: e.state.newslist.concat(a)}), e.setState({displayTime: o.ts || 0})), "more" === t && e.setState({isLoadingMore: !1})
                })
            }, e
        }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = u
});
;
/*!/app/components/ImgNewsList/Item/index.jsx*/
define("c60a0a1", function (e, t) {
    "use strict";

    function n(e) {
        return {userinfo: e.userinfo}
    }

    function i() {
        return {}
    }

    var o = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, c = e("53ab468"), a = e("53ab468"), r = e("f0a789e"), s = e("d9ac10b"), l = function (e) {
        function t(t, n) {
            e.call(this, t, n)
        }

        return o(t, e), t.prototype.render = function () {
            var e = this.props.userinfo.imageMode, t = this.props.data, n = t.imgUrl, i = t.title;
            return c.createElement("div", {className: "imgnews-item-container"}, c.createElement(s.Link, {
                onClick: this.countClick.bind(this),
                to: "image/image%3A%E5%9B%BE%E7%89%87/" + t.nid + "/0"
            }, c.createElement("p", {className: "title"}, i), c.createElement("div", {className: "imgnews-img-container"}, e ? c.createElement("img", {
                src: n,
                alt: i
            }) : c.createElement("div", {className: "fake-img"})), c.createElement("div", {className: "imgscount"}, c.createElement("span", {className: "up-icon"}, t.total_images))))
        }, t.prototype.componentDidMount = function () {
        }, t.prototype.countClick = function () {
            window._hmt.push(["_trackEvent", "feed", "click", "图片"])
        }, t
    }(a.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r.connect(n, i)(l)
});
;
/*!/app/components/ImgNewsList/index.jsx*/
define("4628ebb", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, r = t("53ab468"), i = t("53ab468"), o = t("6d58bc2"), a = t("c60a0a1"), s = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this)
        }

        return n(e, t), e.prototype.render = function () {
            var t = this.props.data, e = this.props.thumbUpFn;
            return r.createElement("div", {className: "imgNewsList"}, t.map(function (t, n) {
                if (!t.title) return r.createElement("div", {key: n});
                var i = {
                    imgUrl: t.imageurls[0].url,
                    title: t.title,
                    nid: t.nid,
                    total_images: t.total_images
                };
                return r.createElement(a.default, {key: n, data: i, thumbUpFn: e})
            }))
        }, e
    }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = s
});
;
/*!/app/fetch/newslist/withNav/img.js*/
define("8c13cb6", function (e, i) {
    "use strict";

    function a(e) {
        void 0 === e && (e = 0);
        var i = "/sn/api/feed_channellist", a = c.default(), d = {
            form: "news_webapp",
            pd: "webapp",
            os: n.isIOS() ? "iphone" : "android",
            category_name: "图片",
            category_id: "",
            action: e && 0 !== e ? 0 : 1,
            display_time: e,
            mid: a
        }, o = t.post(i, d);
        return o
    }

    var t = e("c2909ec"), n = e("96d7310"), c = e("76618eb");
    i.getImgNewsListData = a
});
;
/*!/app/containers/NewsList/withNav/Image.jsx*/
define("09f1140", function (t, e) {
    "use strict";

    function n(t) {
        return {userinfo: t.userinfo}
    }

    function o() {
        return {}
    }

    var i = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, r = t("53ab468"), s = t("6d58bc2"), a = t("53ab468"), l = t("f0a789e"), u = t("f516060"),
        c = t("4628ebb"), d = t("a34f2db"), p = t("8c13cb6"), f = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this), this.state = {
                    newslist: [],
                    isLoadingMore: !1,
                    hasMore: !1
                }
            }

            return i(e, t), e.prototype.render = function () {
                return r.createElement("div", null, 0 === this.state.newslist.length ? r.createElement(u.default, null) : r.createElement(c.default, {data: this.state.newslist}), this.state.hasMore ? r.createElement(d.default, {
                    loadmorefn: this.loadMoreHandle.bind(this),
                    isLoadingMore: this.state.isLoadingMore
                }) : r.createElement("div", null))
            }, e.prototype.componentDidMount = function () {
                return this.props.userinfo.uname === e.locationKey && window.webappLocationFrom.indexOf("/image/image") > 0 ? (this.setState(e.tempState), void setTimeout(function () {
                    window.scrollTo(0, e.tempScrollTop)
                })) : void this.loadDataHandle()
            }, e.prototype.componentWillUnmount = function () {
                e.locationKey = this.props.userinfo.uname, e.tempState = this.state, e.tempScrollTop = document.body.scrollTop || document.documentElement.scrollTop
            }, e.prototype.loadMoreHandle = function () {
                var t = this;
                this.setState({isLoadingMore: !0});
                var e = p.getImgNewsListData(this.state.displayTime);
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (0 !== e.errno) return void console.error("图片新闻列表页获取数据失败，errno: " + e.errno);
                    var n = e.data, o = n.news;
                    if (o && 0 != o.length) {
                        if (o.length) {
                            var i = t.state.newslist || {};
                            i = i.concat(o), t.setState({newslist: i})
                        }
                        t.setState({isLoadingMore: !1, displayTime: o[o.length - 1].pulltime})
                    }
                })
            }, e.prototype.loadDataHandle = function () {
                var t = this, e = p.getImgNewsListData();
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (0 !== e.errno) return void console.error("图片新闻列表页获取数据失败，errno: " + e.errno);
                    var n = e.data, o = n.news;
                    t.setState({newslist: o, hasMore: n.hasmore, displayTime: o[o.length - 1].pulltime})
                })
            }, e
        }(a.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = l.connect(n, o)(f)
});
;
/*!/app/config/infoType.js*/
define("9f19990", function (e, r) {
    "use strict";

    function t(e) {
        switch (e) {
            case"国际":
                return 1;
            case"国内":
                return 2;
            case"体育":
                return 3;
            case"娱乐":
                return 4;
            case"社会":
                return 5;
            case"财经":
                return 6;
            case"军事":
                return 14;
            default:
                return -1
        }
    }

    Object.defineProperty(r, "__esModule", {value: !0}), r.default = t
});
;
/*!/app/fetch/newslist/withNav/info.js*/
define("019b3e2", function (e, a) {
    "use strict";

    function t(e, a, t) {
        void 0 === t && (t = 0);
        var i = "/sn/api/feed_channellist", n = {
            form: "news_webapp",
            pd: "webapp",
            os: o.isIOS() ? "iphone" : "android",
            ver: 6,
            category_name: e,
            category_id: "",
            action: 1,
            display_time: 0,
            mid: c
        }, r = s.post(i, n);
        return r
    }

    function i(e, a) {
        var t = "/sn/api/feed_channellist", i = {
            form: "news_webapp",
            pd: "webapp",
            os: o.isIOS() ? "iphone" : "android",
            ver: 6,
            category_name: a,
            category_id: "",
            action: 0,
            display_time: e,
            mid: c
        }, n = s.post(t, i);
        return n
    }

    function n(e) {
        var a = "/news?tn=bdapibaiyue&t=medianewslist&act=get", t = {
            mid: p,
            ts: 0,
            topic: e,
            type: "image",
            token: "image",
            ln: 3,
            an: 10,
            withtopic: 0,
            wf: 0,
            "internet-subscribe": 0,
            ver: 4,
            platform: "webapp"
        }, i = s.post(a, t);
        return i
    }

    var s = e("c2909ec"), o = e("96d7310"), r = e("76618eb"),
        p = "03c7a16f2e8028127e42c5f7ca9e210b", c = r.default();
    a.getFirstPageNewsData = t, a.getNewsDataByNids = i, a.getCarouselData = n
});
;
/*!/app/containers/NewsList/withNav/Info.jsx*/
define("09ba6fb", function (e, t) {
    "use strict";
    var a = this && this.__extends || function (e, t) {
            function a() {
                this.constructor = e
            }

            for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]);
            e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
        }, s = e("53ab468"), o = e("6d58bc2"), n = e("53ab468"), r = e("f516060"), i = e("86efa70"),
        d = e("296160a"), l = e("e199b57"), p = e("a34f2db"), h = e("9f19990"), f = e("019b3e2"),
        u = e("35fd99b"), c = e("d10eb16"), m = function (e) {
            function t(t, a) {
                e.call(this, t, a), this.loadDataWithAFDHandle = this.loadDataWithAFDHandle.bind(this), this.loadAFDExceptFirstScreen = this.loadAFDExceptFirstScreen.bind(this), this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this), this.state = {
                    newslist: [],
                    hotnews: [],
                    carousel: [],
                    hasMore: !1,
                    isLoadingMore: !1,
                    displayTime: 0,
                    nids: [],
                    afdnewsCount: 0,
                    page: 0
                }
            }

            return a(t, e), t.prototype.render = function () {
                return s.createElement("div", null, this.state.carousel.length > 0 ? s.createElement(i.default, {
                    data: this.state.carousel,
                    channelname: this.props.params.name
                }) : s.createElement("div", null), this.state.hotnews.length > 0 ? s.createElement(d.default, {data: this.state.hotnews}) : s.createElement("div", null), 0 === this.state.newslist.length ? s.createElement(r.default, null) : s.createElement(l.default, {
                    newslist: this.state.newslist,
                    channelname: this.props.params.name
                }), this.state.hasMore ? s.createElement(p.default, {
                    loadmorefn: this.loadMoreHandle.bind(this),
                    isLoadingMore: this.state.isLoadingMore
                }) : s.createElement("div", null))
            }, t.prototype.componentDidMount = function () {
                return this.props.params.name === t.locationKey && window.webappLocationFrom.indexOf("/detail/") > 0 ? (this.setState(t.tempState), void setTimeout(function () {
                    window.scrollTo(0, t.tempScrollTop)
                })) : (this.loadCarouselData(), this.loadHotNews(), void(window.afdMode ? this.loadDataWithAFDHandle() : this.loadFirstPageData()))
            }, t.prototype.componentWillUnmount = function () {
                this._isMounted = !1, t.locationKey = this.props.params.name, t.tempState = this.state, t.tempScrollTop = document.body.scrollTop || document.documentElement.scrollTop
            }, t.prototype.componentWillMount = function () {
                this._isMounted = !0
            }, t.prototype.componentDidUpdate = function (e) {
                var t = e.params.name, a = this.props.params.name;
                t !== a && (this.setState({
                    newslist: [],
                    hotnews: [],
                    carousel: [],
                    hasMore: !1,
                    isLoadingMore: !1,
                    displayTime: 0,
                    nids: [],
                    afdnewsCount: 0,
                    page: 0
                }), this.loadCarouselData(), this.loadHotNews(), window.afdMode ? this.loadDataWithAFDHandle() : this.loadFirstPageData())
            }, t.prototype.loadFirstPageData = function () {
                var e = this, t = this.state.page,
                    a = f.getFirstPageNewsData(this.props.params.name, "info");
                a.then(function (e) {
                    return e.json()
                }).then(function (a) {
                    if (0 !== a.errno) return void console.error("info页面获取数据失败，errno: " + a.errno);
                    var s = a.data, o = s.news || [];
                    if (o.length) {
                        var n = [], r = [];
                        o.forEach(function (e) {
                            e.title ? n.push(e) : r.push(e.nid)
                        }), e._isMounted && e.setState({
                            displayTime: o[o.length - 1].pulltime,
                            newslist: n,
                            nids: r,
                            page: t,
                            hasMore: s.hasmore ? !0 : !1
                        })
                    }
                })
            }, t.prototype.loadHotNews = function () {
                var e = this, t = h.default(this.props.params.name);
                if (-1 !== t) {
                    var a = u.getHotNewsData(t);
                    a.then(function (e) {
                        return e.json()
                    }).then(function (t) {
                        if (0 !== t.errno) return void console.error("info页获取热点新闻错误，errno:" + t.errno);
                        var a = t.data && t.data.news || [];
                        a.length && e._isMounted && e.setState({hotnews: t.data})
                    })
                }
            }, t.prototype.loadCarouselData = function () {
                return !1
            }, t.prototype.loadMoreHandle = function () {
                this.setState({isLoadingMore: !0}), this.loadMoreNewsData()
            }, t.prototype.loadMoreNewsData = function () {
                var e = this, t = this.state.page, a = this.state.nids, s = (a.length, 3);
                this.setState({isLoadingMore: !0});
                var o = c.getAFDNewsData({
                    tabn: this.props.params.name,
                    pos: "3,10,17",
                    ac: s,
                    fc: t + 1
                });
                Promise.all([f.getNewsDataByNids(this.state.displayTime, this.props.params.name), o]).then(function (a) {
                    var o = [], n = [], r = a[0].json(), i = a[1];
                    if (s = s > i.res.ad.length ? i.res.ad.length : s, 0 == i.errno) for (var d = 0; s > d; d++) {
                        var l = {_html: i.res && i.res.ad && i.res.ad[d] && i.res.ad[d].adInfo && i.res.ad[d].adInfo[0].material && i.res.ad[d].adInfo[0].material[0] && i.res.ad[d].adInfo[0].material[0].info};
                        n[d] = i.res && i.res.ad && i.res.ad[d] && i.res.ad[d].adInfo && i.res.ad[d].adInfo[0].extra && i.res.ad[d].adInfo[0].extra[0].v, o.push(l)
                    } else for (var p = 0; s > p; p++) {
                        var h = {invalidAFDItem: !0};
                        o.pus(h);
                        var f = 7 * p + 2, u = {pos: t, floor: f};
                        c.logErrorAFDNewsData(u)
                    }
                    r.then(function (a) {
                        if (0 !== a.errno) return void console.error("推荐页获取数据错误，errno:" + a.errno);
                        var s = a.data, r = s.news;
                        if (r && 0 != r.length) {
                            r = r.filter(function (e) {
                                return "ads" != e.type
                            });
                            for (var i = 0; i < o.length; i++) {
                                var d = o[i], l = 7 * i + 2;
                                if (l > r.length) break;
                                if (d._html) {
                                    r.splice(l, 0, d);
                                    var p = {page: t, floor: l, extraParamsAFD: n[i]};
                                    d.flrInfo = p, window.exts.push(p)
                                }
                                if (d.invalidAFDItem) {
                                    r.splice(l, 0, d);
                                    var p = {page: t, floor: l, extraParamsAFD: n[i]};
                                    d.flrInfo = p, window.exts.push(p)
                                }
                            }
                            if (r.length) {
                                var h = e.state.newslist || {};
                                h = h.concat(r), e.setState({newslist: h, page: t + 1})
                            }
                            e.setState({isLoadingMore: !1, displayTime: r[r.length - 1].pulltime})
                        }
                    })
                })
            }, t.prototype.loadDataWithAFDHandle = function () {
                var e = this, t = this.state.page, a = 3,
                    s = f.getFirstPageNewsData(this.props.params.name, "info"), o = c.getAFDNewsData({
                        tabn: this.props.params.name,
                        pos: "3,10,17",
                        ac: a,
                        fc: t + 1
                    });
                Promise.all([s, o]).then(function (s) {
                    var o = [], n = [], r = s[0].json(), i = s[1];
                    if (a = a > i.res.ad.length ? i.res.ad.length : a, 0 == i.errno) for (var d = 0; a > d; d++) {
                        var l = {_html: i.res && i.res.ad && i.res.ad[d] && i.res.ad[d].adInfo && i.res.ad[d].adInfo[0].material && i.res.ad[d].adInfo[0].material[0] && i.res.ad[d].adInfo[0].material[0].info};
                        n[d] = i.res && i.res.ad && i.res.ad[d] && i.res.ad[d].adInfo && i.res.ad[d].adInfo[0].extra && i.res.ad[d].adInfo[0].extra[0].v, o.push(l)
                    } else for (var p = 0; a > p; p++) {
                        var h = {invalidAFDItem: !0};
                        o.push(h);
                        var f = 7 * p + 2, u = {pos: t, floor: f};
                        c.logErrorAFDNewsData(u)
                    }
                    r.then(function (a) {
                        if (0 !== a.errno) return void console.error("info页面获取数据失败，errno: " + a.errno);
                        var s = a.data, r = s.news || [];
                        if (r.length) {
                            var i = [], d = [];
                            r.forEach(function (e) {
                                e.title ? i.push(e) : d.push(e.nid)
                            }), i = i.filter(function (e) {
                                return "ads" != e.type
                            }), window.exts = [];
                            for (var l = 0; l < o.length; l++) {
                                var p = o[l], h = 7 * l + 2;
                                if (h + 1 > r.length) break;
                                if (p._html) {
                                    i.splice(h, 0, p);
                                    var f = {page: t, floor: h, extraParamsAFD: n[l]};
                                    p.flrInfo = f, window.exts.push(f)
                                }
                                if (p.invalidAFDItem) {
                                    i.splice(h, 0, p);
                                    var f = {page: t, floor: h, extraParamsAFD: n[l]};
                                    p.flrInfo = f, window.exts.push(f)
                                }
                            }
                            e._isMounted && e.setState({
                                displayTime: r[r.length - 1].pulltime,
                                nids: d,
                                hasMore: s.hasmore ? !0 : !1,
                                newslist: i,
                                afdnewsCount: 3,
                                page: t + 1
                            })
                        }
                    })
                })
            }, t.prototype.loadAFDExceptFirstScreen = function (e) {
                var t = this, a = this.state.page, s = e.length,
                    o = s - 3 - 7 * (this.state.afdnewsCount - 1), n = parseInt(o / 6, 10),
                    r = 2 + 7 * this.state.afdnewsCount,
                    i = c.getAFDNewsData({tabn: this.props.params.name, ac: n, pos: r + 1});
                i.then(function (s) {
                    if (0 == s.errno) for (var o = 0; n > o; o++) {
                        var i = {}, d = {};
                        i = {_html: s.res && s.res.ad && s.res.ad[o] && s.res.ad[o].adInfo && s.res.ad[o].adInfo[0].material && s.res.ad[o].adInfo[0].material[0] && s.res.ad[o].adInfo[0].material[0].info}, d = s.res && s.res.ad && s.res.ad[o] && s.res.ad[o].adInfo && s.res.ad[o].adInfo[0].extra && s.res.ad[o].adInfo[0].extra[0].v, i._html && (e.splice(r + 7 * o, 0, i), window.exts.push({
                            page: a,
                            floor: r + 7 * o,
                            extraParamsAFD: d
                        }))
                    } else for (var l = 0; n > l; l++) {
                        s.pos = r + 7 * l;
                        var p = {invalidAFDItem: !0};
                        e.splice(r + 7 * l, 0, p), c.logErrorAFDNewsData(s)
                    }
                    t._isMounted && t.setState({
                        afdnewsCount: t.state.afdnewsCount + n,
                        newslist: e.slice(0),
                        isLoadingMore: !1,
                        page: a + 1
                    })
                })
            }, t
        }(n.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = m
});
;
/*!/app/fetch/newslist/withNav/local.js*/
define("b228617", function (e, i) {
    "use strict";

    function a(e) {
        var i = "/sn/api/feed_channellist", a = d.default(), n = {
            loc: e,
            from: "news_webapp",
            pd: "webapp",
            os: o.isIOS() ? "iphone" : "android",
            ver: 6,
            category_id: 102,
            action: 1,
            display_time: 0,
            wf: 0,
            mid: a
        }, s = t.post(i, n);
        return p && (p = !1), s
    }

    function n(e, i) {
        var a = "/sn/api/feed_channellist", n = d.default(), p = {
            from: "news_webapp",
            pd: "webapp",
            os: o.isIOS() ? "iphone" : "android",
            ver: 6,
            category_id: 102,
            action: 0,
            display_time: i,
            wf: 0,
            mid: n
        }, s = t.post(a, p);
        return s
    }

    e("89c93f8"), e("48b4cd1");
    var t = e("c2909ec"), o = e("96d7310"), d = e("76618eb"), p = !0;
    i.getLocallist = a, i.getLocalMorelist = n
});
;
/*!/app/containers/NewsList/withNav/Local.jsx*/
define("490dec6", function (e, a) {
    "use strict";

    function t(e) {
        return {userinfo: e.userinfo}
    }

    function s() {
        return {}
    }

    var o = this && this.__extends || function (e, a) {
            function t() {
                this.constructor = e
            }

            for (var s in a) a.hasOwnProperty(s) && (e[s] = a[s]);
            e.prototype = null === a ? Object.create(a) : (t.prototype = a.prototype, new t)
        }, n = e("53ab468"), r = e("6d58bc2"), i = e("53ab468"), l = e("f0a789e"), d = e("d9ac10b"),
        c = e("f516060"), h = e("e199b57"), p = e("a34f2db"), f = e("b228617"), u = e("d10eb16"),
        m = function (e) {
            function a(a, t) {
                e.call(this, a, t), this.loadDataWithAFDHandle = this.loadDataWithAFDHandle.bind(this), this.loadAFDExceptFirstScreen = this.loadAFDExceptFirstScreen.bind(this), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this), this.state = {
                    newslist: [],
                    carousel: [],
                    isLoading: !0,
                    hasMore: !1,
                    isLoadingMore: !1,
                    page: 0,
                    totalpn: 1,
                    displayTime: 0
                }
            }

            return o(a, e), a.prototype.render = function () {
                return n.createElement("div", {className: "news"}, n.createElement("div", {className: "citybar"}, n.createElement("span", {className: "ctip"}, "当前地区："), n.createElement("span", {className: "cur"}, this.props.userinfo.localname), n.createElement(d.Link, {
                    className: "opt",
                    to: "/city"
                }, n.createElement("i", {className: "icity"}), "点击切换城市")), this.state.isLoading ? n.createElement(c.default, null) : n.createElement(h.default, {
                    channelname: "本地",
                    params: {channel: "local"},
                    location: {key: "locallist"},
                    newslist: this.state.newslist
                }), this.state.hasMore ? n.createElement(p.default, {
                    loadmorefn: this.loadMoreHandle.bind(this),
                    isLoadingMore: this.state.isLoadingMore
                }) : "")
            }, a.prototype.componentDidMount = function () {
                return this.props.params.channel === a.locationKey && window.webappLocationFrom.indexOf("/detail/") > 0 ? (this.setState(a.tempState), void setTimeout(function () {
                    window.scrollTo(0, a.tempScrollTop)
                })) : void(window.afdMode ? this.loadDataWithAFDHandle() : this.loadListData())
            }, a.prototype.componentWillUnmount = function () {
                a.locationKey = this.props.params.channel, a.tempState = this.state, a.tempScrollTop = document.body.scrollTop || document.documentElement.scrollTop
            }, a.prototype.componentDidUpdate = function (e) {
                var a = e.params.channel, t = this.props.params.channel;
                a !== t && (this.setState({
                    newslist: [],
                    carousel: [],
                    isLoading: !0,
                    hasMore: !1,
                    isLoadingMore: !1,
                    page: 0,
                    totalpn: 1
                }), window.afdMode ? this.loadDataWithAFDHandle() : this.loadListData())
            }, a.prototype.loadListData = function () {
                var e = this, t = f.getLocallist(this.props.params.id), s = [];
                t.then(function (e) {
                    return e.json()
                }).then(function (t) {
                    var o = Date.now();
                    t.data.news.forEach(function (e) {
                        e.key = e.nid + o, e.title ? s.push(e) : a.cacheData.push(e.nid)
                    }), e.setState({
                        carousel: "",
                        newslist: s,
                        isLoading: !1
                    }), a.cacheData.length && e.setState({
                        hasMore: !0,
                        totalpn: Math.ceil(a.cacheData.length / 18)
                    })
                })
            }, a.prototype.loadMoreHandle = function () {
                var e, t = this, s = this.state.page, o = "", n = a.cacheData.length, r = 18, i = 3;
                for (n > r ? this.setState({hasMore: !0}) : (this.setState({hasMore: !1}), r = n), e = 0; r > e; e++) o += "," + a.cacheData.shift();
                var l = u.getAFDNewsData({tabn: "本地", pos: "3,10,17", ac: i, fc: s + 1});
                this.setState({isLoadingMore: !0}), Promise.all([f.getLocalMorelist(o, this.state.displayTime), l]).then(function (e) {
                    var a = [], o = [], n = e[0].json(), r = e[1];
                    if (i = i > (r && r.res && r.res.ad && r.res.ad.length) ? r.res.ad.length : i, 0 == r.errno) for (var l = 0; i > l; l++) {
                        var d = {_html: r.res && r.res.ad && r.res.ad[l] && r.res.ad[l].adInfo && r.res.ad[l].adInfo[0].material && r.res.ad[l].adInfo[0].material[0] && r.res.ad[l].adInfo[0].material[0].info};
                        o[l] = r.res && r.res.ad && r.res.ad[l] && r.res.ad[l].adInfo && r.res.ad[l].adInfo[0].extra && r.res.ad[l].adInfo[0].extra[0].v, a.push(d)
                    } else for (var c = 0; i > c; c++) {
                        var h = {invalidAFDItem: !0};
                        a.push(h);
                        var p = 7 * c + 2, f = {pos: s, floor: p};
                        u.logErrorAFDNewsData(f)
                    }
                    n.then(function (e) {
                        if (0 !== e.errno) return void console.error("local页获取数据错误，errno:" + e.errno);
                        var n = e.data, r = n.news;
                        if (r && 0 != r.length) {
                            r = r.filter(function (e) {
                                return "ads" != e.type
                            });
                            for (var i = 0; i < a.length; i++) {
                                var l = a[i], d = 7 * i + 2;
                                if (d > r.length) break;
                                if (l._html) {
                                    r.splice(d, 0, l);
                                    var c = {page: s, floor: d, extraParamsAFD: o[i]};
                                    l.flrInfo = c, window.exts.push(c)
                                }
                                if (l.invalidAFDItem) {
                                    r.splice(d, 0, l);
                                    var c = {page: s, floor: d, extraParamsAFD: o[i]};
                                    l.flrInfo = c, window.exts.push(c)
                                }
                            }
                            if (r.length) {
                                var h = t.state.newslist || {};
                                h = h.concat(r), t.setState({
                                    newslist: h,
                                    page: s + 1,
                                    displayTime: r[r.length - 1].pulltime
                                })
                            }
                            t.setState({
                                hasMore: n.hasmore,
                                isLoadingMore: !1,
                                displayTime: r[r.length - 1].pulltime
                            })
                        }
                    })
                })
            }, a.prototype.loadDataWithAFDHandle = function () {
                var e = this, t = this.state.page, s = f.getLocallist(this.props.params.id), o = 3,
                    n = u.getAFDNewsData({tabn: "本地", pos: "3,10,17", ac: o, fc: t + 1});
                Promise.all([s, n]).then(function (s) {
                    var n = [], r = [], i = s[0].json(), l = s[1];
                    if (0 == l.errno) {
                        o = o > l.res.ad.length ? l.res.ad.length : o;
                        for (var d = 0; o > d; d++) {
                            var c = {_html: l.res && l.res.ad && l.res.ad[d] && l.res.ad[d].adInfo && l.res.ad[d].adInfo[0].material && l.res.ad[d].adInfo[0].material[0] && l.res.ad[d].adInfo[0].material[0].info};
                            r[d] = l.res && l.res.ad && l.res.ad[d] && l.res.ad[d].adInfo && l.res.ad[d].adInfo[0].extra && l.res.ad[d].adInfo[0].extra[0].v, n.push(c)
                        }
                    } else for (var h = 0; o > h; h++) {
                        var p = {invalidAFDItem: !0};
                        n.push(p);
                        var f = 7 * h + 2, m = {pos: t, floor: f};
                        u.logErrorAFDNewsData(m)
                    }
                    i.then(function (s) {
                        if (0 !== s.errno) return void console.error("local页面获取数据失败，errno: " + s.errno);
                        var o = s.data, i = o.news || [];
                        if (i.length) {
                            var l = [];
                            i.forEach(function (e) {
                                e.title ? l.push(e) : a.cacheData.push(e.nid)
                            }), l = l.filter(function (e) {
                                return "ads" != e.type
                            }), window.exts = [];
                            for (var d = 0; d < n.length; d++) {
                                var c = n[d], h = 7 * d + 2;
                                if (h + 1 > l.length) break;
                                if (c._html) {
                                    l.splice(h, 0, c), i.splice(h, 0, c);
                                    var p = {page: t, floor: h, extraParamsAFD: r[d]};
                                    c.flrInfo = p, window.exts.push(p)
                                }
                                if (c.invalidAFDItem) {
                                    l.splice(h, 0, c);
                                    var p = {page: t, floor: h, extraParamsAFD: r[d]};
                                    c.flrInfo = p, window.exts.push(p)
                                }
                            }
                            e.setState({carousel: ""}), e.setState({
                                isLoading: !1,
                                isLoadingMore: !1,
                                displayTime: i[i.length - 1].pulltime,
                                hasMore: o.hasmore,
                                totalpn: Math.ceil(a.cacheData.length / 18),
                                newslist: l,
                                page: t + 1
                            })
                        }
                    })
                })
            }, a.prototype.loadAFDExceptFirstScreen = function (e) {
                var a = this, t = e.length, s = t - 3 - 7 * (this.state.afdnewsCount - 1),
                    o = parseInt(s / 6, 10), n = 2 + 7 * this.state.afdnewsCount,
                    r = u.getAFDNewsData({tabn: "本地", ac: o, pos: n + 1});
                r.then(function (t) {
                    if (0 == t.errno) for (var s = 0; o > s; s++) {
                        var r = {}, i = {};
                        r = {_html: t.res && t.res.ad && t.res.ad[s] && t.res.ad[s].adInfo && t.res.ad[s].adInfo[0].material && t.res.ad[s].adInfo[0].material[0] && t.res.ad[s].adInfo[0].material[0].info}, i = t.res && t.res.ad && t.res.ad[s] && t.res.ad[s].adInfo && t.res.ad[s].adInfo[0].extra && t.res.ad[s].adInfo[0].extra[0].v, r._html && (e.splice(n + 7 * s, 0, r), window.extraParamsAFD.push(i))
                    } else for (var l = 0; o > l; l++) {
                        t.pos = n + 7 * l;
                        var d = {invalidAFDItem: !0};
                        e.splice(n + 7 * l, 0, d), u.logErrorAFDNewsData(t)
                    }
                    a.setState({
                        isLoading: !1,
                        isLoadingMore: !1,
                        afdnewsCount: a.state.afdnewsCount + o,
                        newslist: e.slice(0)
                    })
                })
            }, a
        }(i.Component);
    m.cacheData = [], Object.defineProperty(a, "__esModule", {value: !0}), a.default = l.connect(t, s)(m)
});
;
/*!/app/fetch/newslist/withNav/news.js*/
define("11ea7eb", function (e, i) {
    "use strict";

    function s(e) {
        var i = "/news?tn=bdapibaiyue&t=subscribenewslist", s = {
            mid: "03c7a16f2e8028127e42c5f7ca9e210b",
            ln: 200,
            an: 20,
            wf: 0,
            ver: 3,
            sourceid: e,
            installmentid: 0,
            ts: 0,
            os: "android",
            nids: ""
        }, c = n.post(i, s);
        return t && (t = !1), c
    }

    e("89c93f8"), e("48b4cd1");
    var n = e("c2909ec"), t = !0;
    i.getSubscribeNewslist = s
});
;
/*!/app/containers/NewsList/withNav/News.jsx*/
define("7919588", function (t, e) {
    "use strict";
    var a = this && this.__extends || function (t, e) {
            function a() {
                this.constructor = t
            }

            for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
            t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }, s = t("53ab468"), n = t("6d58bc2"), i = t("53ab468"), o = t("f516060"), r = t("e199b57"),
        p = t("a34f2db"), c = t("11ea7eb"), h = t("019b3e2"), d = function (t) {
            function e(e, a) {
                t.call(this, e, a), this.shouldComponentUpdate = n.shouldComponentUpdate.bind(this), this.state = {
                    newslist: [],
                    isLoading: !0,
                    firstRender: !0,
                    hasMore: !1,
                    isLoadingMore: !1,
                    pn: 0,
                    totalpn: 1,
                    ts: 0
                }
            }

            return a(e, t), e.prototype.render = function () {
                return s.createElement("div", {className: "news"}, this.state.isLoading ? s.createElement(o.default, null) : s.createElement(r.default, {
                    channelname: this.props.params.name,
                    params: {channel: "news"},
                    location: {key: "newslist"},
                    newslist: this.state.newslist
                }), this.state.hasMore ? s.createElement(p.default, {
                    loadmorefn: this.loadMoreHandle.bind(this),
                    isLoadingMore: this.state.isLoadingMore
                }) : "")
            }, e.prototype.componentDidMount = function () {
                this.state.firstRender && this.updateListData()
            }, e.prototype.componentDidUpdate = function (t) {
                var e = t.params.name, a = this.props.params.name;
                e !== a && (this.setState({newslist: []}), this.setState({isLoading: !0}), this.updateListData())
            }, e.prototype.updataListDataCallback = function (t) {
                this.setState({newslist: t}), this.setState({isLoading: !1})
            }, e.prototype.updateListData = function () {
                var t = this, a = c.getSubscribeNewslist(this.props.params.id), s = [];
                a.then(function (t) {
                    return t.json()
                }).then(function (a) {
                    t.setState({firstRender: !1});
                    var n = Date.now();
                    t.setState({ts: a.data.ts}), a.data.column[0].news.forEach(function (t) {
                        t.key = t.nid + n, t.title ? s.push(t) : e.cacheData.push(t.nid)
                    }), t.updataListDataCallback(s), e.cacheData.length && (t.setState({hasMore: !0}), t.setState({totalpn: Math.ceil(e.cacheData.length / 20)}))
                })
            }, e.prototype.loadMoreHandle = function () {
                var t = this;
                this.setState({isLoadingMore: !0});
                var a = e.cacheData.slice(20 * this.state.pn, 20 * (this.state.pn + 1)).join(",");
                h.getNewsDataByNids(a, this.props.ts).then(function (t) {
                    return t.json()
                }).then(function (e) {
                    t.setState({isLoadingMore: !1});
                    var a = t.state.newslist.concat(e.data.news);
                    t.setState({newslist: a}), t.setState(t.state.totalpn - 1 > t.state.pn ? {pn: t.state.pn + 1} : {hasMore: !1})
                })
            }, e
        }(i.Component);
    d.cacheData = [], Object.defineProperty(e, "__esModule", {value: !0}), e.default = d
});
;
/*!/app/fetch/newslist/withNav/search.js*/
define("5aec875", function (e, n) {
    "use strict";

    function c(e, n) {
        var c = "/news?tn=bdapibaiyue&t=searchnews&act=get", a = {word: n, rn: 20, pn: e, nids: ""},
            s = t.post(c, a);
        return r && (r = !1), s
    }

    e("89c93f8"), e("48b4cd1");
    var t = e("c2909ec"), r = !0;
    n.getSearchNews = c
});
;
/*!/app/containers/NewsList/withNav/Search.jsx*/
define("e7d587e", function (t, e) {
    "use strict";
    var a = this && this.__extends || function (t, e) {
            function a() {
                this.constructor = t
            }

            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }, n = t("53ab468"), s = t("6d58bc2"), i = t("53ab468"), o = t("f516060"), r = t("e199b57"),
        p = t("a34f2db"), d = t("5aec875"), h = function (t) {
            function e(e, a) {
                t.call(this, e, a), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this), this.state = {
                    newslist: [],
                    isLoading: !0,
                    firstRender: !0,
                    hasMore: !1,
                    isLoadingMore: !1,
                    pn: 0
                }
            }

            return a(e, t), e.prototype.render = function () {
                return n.createElement("div", {className: "news"}, this.state.isLoading ? n.createElement(o.default, null) : n.createElement(r.default, {
                    channelname: this.props.params.name,
                    params: {channel: "news"},
                    location: {key: "newslist"},
                    newslist: this.state.newslist
                }), this.state.hasMore ? n.createElement(p.default, {
                    loadmorefn: this.loadMoreHandle.bind(this),
                    isLoadingMore: this.state.isLoadingMore
                }) : "")
            }, e.prototype.componentDidMount = function () {
                this.state.firstRender && this.updateListData()
            }, e.prototype.componentDidUpdate = function (t) {
                var e = t.params.channel, a = this.props.params.channel;
                e !== a && (this.setState({newslist: []}), this.setState({isLoading: !0}), this.updateListData())
            }, e.prototype.updataListDataCallback = function (t) {
                this.setState({newslist: t}), this.setState({isLoading: !1})
            }, e.prototype.updateListData = function () {
                var t = this, e = d.getSearchNews(20 * this.state.pn, this.props.params.name);
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    t.setState({firstRender: !1});
                    var a = Date.now();
                    e.data.news.forEach(function (t) {
                        t.key = t.nid + a
                    }), t.updataListDataCallback(e.data.news), e.data.hasmore && (t.setState({hasMore: !0}), t.setState({pn: t.state.pn + 1}))
                })
            }, e.prototype.loadMoreHandle = function () {
                var t = this;
                this.setState({isLoadingMore: !0}), d.getSearchNews(20 * this.state.pn, this.props.params.name).then(function (t) {
                    return t.json()
                }).then(function (e) {
                    t.setState({isLoadingMore: !1});
                    var a = t.state.newslist.concat(e.data.news);
                    t.setState({newslist: a}), t.setState(e.data.hasmore ? {pn: t.state.pn + 1} : {hasMore: !1})
                })
            }, e
        }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = h
});
;
/*!/app/components/tagPage/SubChannel/index.jsx*/
define("1d6f6ba", function (e, t) {
    "use strict";

    function n(e) {
        return {userinfo: e.userinfo}
    }

    function a() {
        return {}
    }

    var s = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, r = e("53ab468"), l = e("6d58bc2"), c = e("53ab468"), o = e("f0a789e"), i = e("d9ac10b"),
        h = e("557cc4f"), u = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.shouldComponentUpdate = l.shouldComponentUpdate.bind(this), this.state = {deleteBtnClass: "deleteBtnHide"}
            }

            return s(t, e), t.prototype.render = function () {
                var e = this.props.userinfo.imageMode, t = this.props.data, n = this.props.name,
                    a = this.props.placeholder;
                return r.createElement("div", {className: "tag-subchannel-container"}, r.createElement("div", {className: "subchannel-search"}, r.createElement("div", {className: "clearfix subchannel-search-form"}, r.createElement("span", {className: "subchannel-search-name"}, n), r.createElement("input", {
                    ref: "searchbox",
                    type: "text",
                    placeholder: a,
                    onKeyUp: this.searchBoxKeyupHandle.bind(this)
                }), r.createElement("span", {
                    className: this.state.deleteBtnClass,
                    onClick: this.deleteSearchTextHandle.bind(this)
                }))), r.createElement("div", {className: "clearfix subchannel-content"}, t.map(function (t, n) {
                    var a = "";
                    return (n + 1) % 4 === 0 && (a = "margin-right0"), r.createElement("div", {
                        key: n,
                        className: "subchannel-item " + a
                    }, r.createElement(i.Link, {to: "/newslist/other/tag/" + encodeURIComponent(t.query_string)}, r.createElement("div", {className: "subchannel-item-label"}, r.createElement("span", null, t.name)), e ? r.createElement("img", {src: t.cover_url}) : r.createElement("div", {style: {height: "80px"}})))
                })), r.createElement("hr", null))
            }, t.prototype.searchBoxKeyupHandle = function (e) {
                e.preventDefault();
                var t = e.currentTarget.value;
                t && this.setState({deleteBtnClass: "deleteBtnShow"}), 13 === e.keyCode && h.default.push("/search/" + encodeURIComponent(t))
            }, t.prototype.deleteSearchTextHandle = function () {
                var e = this.refs.searchbox, t = e.value;
                t && (e.value = "", this.setState({deleteBtnClass: "deleteBtnHide"}))
            }, t
        }(c.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = o.connect(n, a)(u)
});
;
/*!/app/components/tagPage/Context/index.jsx*/
define("f8dd906", function (e, t) {
    "use strict";

    function n(e) {
        return {userinfo: e.userinfo}
    }

    function a() {
        return {}
    }

    var o = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, s = e("53ab468"), r = e("6d58bc2"), l = e("53ab468"), i = e("f0a789e"), c = e("d9ac10b"),
        m = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this), this.state = {showAll: !1}
            }

            return o(t, e), t.prototype.render = function () {
                var e = this, t = this.props.userinfo.imageMode, n = this.props.data;
                return s.createElement("div", {className: "tag-context-container"}, s.createElement("p", {className: "context-title"}, "历史大事件"), s.createElement("div", {className: "context-content"}, n.map(function (n, a) {
                    var o = "";
                    n.imageurls && n.imageurls[0] && (o = n.imageurls[0].url);
                    var r = (e.formatDateTime(n.ts), e.getDateByStr(n.ts)), l = r && r.getDate(),
                        i = r && r.getMonth() + 1, m = "", u = "";
                    return 10 > i && (i = "0" + i), i += "月", 0 === a && (l = "最新", i = "", m = "context-item-first-date", u = "context-item-first-mounth"), s.createElement("div", {
                        key: a,
                        className: "context-item",
                        style: {display: 3 >= a || e.state.showAll ? "block" : "none"}
                    }, s.createElement(c.Link, {to: "/detail/" + n.nid}, s.createElement("div", {className: "context-item-content"}, s.createElement("p", null, n.title), o && t ? s.createElement("div", null, s.createElement("img", {
                        src: o,
                        alt: n.title
                    })) : s.createElement("div", {style: {display: "none"}}), s.createElement("div", {className: "context-item-info"}, s.createElement("span", null, n.site), s.createElement("span", null, e.formatDateTime(n.ts))), s.createElement("div", {className: "context-item-time"}, s.createElement("span", {className: "context-item-time-content"}, s.createElement("span", {className: "context-item-mounth " + u}, i), s.createElement("span", {className: "context-item-date " + m}, l))))))
                })), s.createElement("div", {
                    onClick: this.showAllHandle.bind(this),
                    className: "ui-refresh",
                    style: {display: this.state.showAll ? "none" : "block"}
                }, s.createElement("span", null, "点击查看全部")))
            }, t.prototype.formatDateTime = function (e) {
                var t = this.getDateByStr(e);
                return t ? t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() : ""
            }, t.prototype.getDateByStr = function (e) {
                var t = e;
                return "number" != typeof e && (t = parseInt(e, 10)), isNaN(t) ? (console.error("tag page 历史大事件，时间参数转换为 int 出错，ts: " + e), "") : new Date(t)
            }, t.prototype.showAllHandle = function () {
                this.setState({showAll: !0})
            }, t
        }(l.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = i.connect(n, a)(m)
});
;
/*!/app/components/tagPage/Comment/index.jsx*/
define("d500b25", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, s = t("53ab468"), o = t("6d58bc2"), a = t("53ab468"), r = t("e199b57"), i = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this), this.state = {showNumber: 5}
        }

        return n(e, t), e.prototype.render = function () {
            var t = this.props.data, e = t.length, n = this.state.showNumber;
            return s.createElement("div", {className: "tag-comment-container"}, s.createElement("p", {className: "comment-title"}, "媒体热评"), s.createElement(r.default, {
                newslist: t,
                showNumber: this.state.showNumber
            }), s.createElement("div", {
                onClick: this.showAllHandle.bind(this),
                className: "ui-refresh",
                style: {display: e > n ? "block" : "none"}
            }, s.createElement("span", null, "点击查看全部")))
        }, e.prototype.showAllHandle = function () {
            this.setState({showNumber: this.props.data.length})
        }, e
    }(a.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = i
});
;
/*!/app/components/tagPage/ListImgs/index.jsx*/
define("e634123", function (e, t) {
    "use strict";

    function n(e) {
        return {userinfo: e.userinfo}
    }

    function i() {
        return {}
    }

    var a = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, r = e("53ab468"), s = e("6d58bc2"), l = e("53ab468"), c = e("f0a789e"), o = e("f0c9b41"),
        m = e("d9ac10b"), u = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this), this.state = {carouselIndex: 0}
            }

            return a(t, e), t.prototype.render = function () {
                var e = this, t = this.props.userinfo.imageMode;
                if (!t) return r.createElement("div", {style: {display: "none"}});
                var n, i, a, s = this.props.data, l = [];
                for (n = 0; n < s.length; n++) (n + 1) % 2 === 1 && (i = s[n], a = n + 1 < s.length ? s[n + 1] : {}, l.push({
                    item1: i,
                    item2: a
                }));
                var c = {
                    auto: 2e3, callback: function (e) {
                        this.setState({carouselIndex: e})
                    }.bind(this)
                };
                return r.createElement("div", {className: "tag-list-imgs-container"}, r.createElement("p", {className: "list-imgs-title"}, "读图"), r.createElement(o, {
                    className: "carousel",
                    swipeOptions: c
                }, l.map(function (e, t) {
                    var n = e.item1, i = e.item2;
                    return r.createElement("div", {
                        key: t,
                        className: "clearfix list-imgs-item"
                    }, r.createElement("div", {className: "float-left list-imgs-item-part"}, r.createElement("div", {style: {marginRight: "5px"}}, r.createElement(m.Link, {to: "/detail/" + n.nid}, r.createElement("img", {src: n.imageurls[0].url}), r.createElement("p", null, n.title)))), i.title ? r.createElement("div", {className: "float-right list-imgs-item-part"}, r.createElement("div", {style: {marginLeft: "5px"}}, r.createElement(m.Link, {to: "/detail/" + i.nid}, r.createElement("img", {src: i.imageurls[0].url}), r.createElement("p", null, i.title)))) : r.createElement("div", {style: {display: "none"}}))
                })), r.createElement("div", {className: "list-imgs-nav"}, l.map(function (t, n) {
                    var i = "";
                    return e.state.carouselIndex === n && (i = "icon-focus"), r.createElement("i", {
                        key: n,
                        className: "list-imgs-nav-icon " + i
                    })
                })))
            }, t
        }(l.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = c.connect(n, i)(u)
});
;
/*!/app/fetch/newslist/withNav/tag.js*/
define("4b20131", function (t, e) {
    "use strict";

    function n(t) {
        var e = "/news?tn=bdapibaiyue&t=recommendlist", n = {
            mid: c,
            ts: 0,
            topic: t,
            type: "tag",
            token: "tag",
            ln: 200,
            an: 4,
            withtopic: 0,
            wf: 0,
            "internet-subscribe": 0,
            ver: 4,
            pd: "webapp",
            nids: ""
        }, a = s.post(e, n);
        return a
    }

    function a(t, e) {
        var n = "/news?tn=bdapibaiyue&t=recommendinfo",
            a = {mid: c, nids: t, wf: 0, ts: e, time: e}, i = s.post(n, a);
        return i
    }

    function i(t) {
        var e = "/news?tn=bdapibaiyue&t=api&act=get", n = {
            topic: t,
            pd: "webappnews",
            action: "tag_complex_version",
            token: "gKmJtYvTz0tAKmIad4tLOJyGvDa9HKxk",
            ln: 20
        }, a = s.post(e, n);
        return a
    }

    var s = t("c2909ec"), c = "03c7a16f2e8028127e42c5f7ca9e210b";
    e.getFirstPageNewsData = n, e.getNewsDataByNids = a, e.getOtherData = i
});
;
/*!/app/containers/NewsList/withNav/Tag.jsx*/
define("f5ae208", function (t, e) {
    "use strict";
    var a = this && this.__extends || function (t, e) {
            function a() {
                this.constructor = t
            }

            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }, n = t("53ab468"), s = t("6d58bc2"), o = t("53ab468"), i = t("f516060"), r = t("86efa70"),
        l = t("1d6f6ba"), d = t("e199b57"), h = t("a34f2db"), c = t("f8dd906"), m = t("d500b25"),
        p = t("e634123"), u = t("4b20131"), f = function (t) {
            function e(e, a) {
                t.call(this, e, a), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this), this.state = {
                    newslist: [],
                    carousel: [],
                    hasMore: !1,
                    isLoadingMore: !1,
                    displayTime: 0,
                    nids: [],
                    subChannel: [],
                    context: [],
                    comment: [],
                    listImages: [],
                    attentionMedia: []
                }
            }

            return a(e, t), e.prototype.render = function () {
                return n.createElement("div", null, this.state.carousel.length > 0 ? n.createElement(r.default, {
                    channelname: this.props.params.name,
                    data: this.state.carousel
                }) : n.createElement("div", null), this.state.subChannel.length > 0 ? n.createElement(l.default, {
                    data: this.state.subChannel,
                    name: this.props.params.name,
                    placeholder: "输入你关注的行业，查看资讯"
                }) : n.createElement("div", null), 0 === this.state.newslist ? n.createElement(i.default, null) : n.createElement(d.default, {
                    channelname: this.props.params.name,
                    newslist: this.state.newslist
                }), this.state.hasMore ? n.createElement(h.default, {
                    loadmorefn: this.loadMoreHandle.bind(this),
                    isLoadingMore: this.state.isLoadingMore,
                    loadByClick: !0
                }) : n.createElement("div", null), this.state.context.length > 0 ? n.createElement(c.default, {data: this.state.context}) : n.createElement("div", null), this.state.comment.length > 0 ? n.createElement(m.default, {data: this.state.comment}) : n.createElement("div", null), this.state.listImages.length > 0 ? n.createElement(p.default, {data: this.state.listImages}) : n.createElement("div", null))
            }, e.prototype.componentDidMount = function () {
                return this.props.params.name === e.locationKey && window.webappLocationFrom.indexOf("/detail/") > 0 ? (this.setState(e.tempState), void setTimeout(function () {
                    window.scrollTo(0, e.tempScrollTop)
                })) : (this.loadFirstPageData(), void this.loadOtherData())
            }, e.prototype.componentWillUnmount = function () {
                e.locationKey = this.props.params.name, e.tempState = this.state, e.tempScrollTop = document.body.scrollTop || document.documentElement.scrollTop
            }, e.prototype.componentDidUpdate = function (t) {
                var e = t.params.name, a = this.props.params.name;
                e !== a && (this.setState({
                    newslist: [],
                    carousel: [],
                    subChannel: [],
                    context: [],
                    comment: [],
                    listImages: [],
                    attentionMedia: []
                }), this.loadFirstPageData(), this.loadOtherData())
            }, e.prototype.loadFirstPageData = function () {
                var t = this, e = u.getFirstPageNewsData(this.props.params.name);
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (0 !== e.errno) return void console.error("tag页面获取数据失败，errno: " + e.errno);
                    var a = e.data, n = a.news || [];
                    if (n.length) {
                        var s = [], o = [];
                        n.forEach(function (t) {
                            t.title ? s.push(t) : o.push(t.nid)
                        }), t.setState({displayTime: a.ts}), t.setState({newslist: s}), t.setState({nids: o}), t.setState({hasMore: o.length ? !0 : !1});
                        var i = a.subchannel || [];
                        t.setState({subChannel: i})
                    }
                })
            }, e.prototype.loadOtherData = function () {
                var t = this, e = u.getOtherData(this.props.params.name);
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (0 !== e.errno) return void console.error("tag页面获取其他数据失败，errno: " + e.errno);
                    var a = e.data, n = a.top_images || [];
                    n.length && t.setState({carousel: n});
                    var s = a.context || [];
                    t.setState({context: s});
                    var o = a.comment || [];
                    t.setState({comment: o});
                    var i = a.list_images || [];
                    t.setState({listImages: i});
                    var r = a.attention.media || [];
                    t.setState({attentionMedia: r})
                })
            }, e.prototype.loadMoreHandle = function () {
                this.setState({isLoadingMore: !0}), this.loadMoreNewsData()
            }, e.prototype.loadMoreNewsData = function () {
                var t, e = this, a = this.state.nids, n = "", s = a.length, o = 10;
                for (s > o ? this.setState({hasMore: !0}) : (this.setState({hasMore: !1}), o = s), t = 0; o > t; t++) n += "," + a.shift();
                this.setState({isLoadingMore: !0});
                var i = u.getNewsDataByNids(n, this.state.displayTime);
                i.then(function (t) {
                    return t.json()
                }).then(function (t) {
                    if (0 !== t.errno) return void console.error("tag页面获取更多新闻出错，errno: " + t.errno);
                    var a = t.data, n = a.news || [];
                    n.length && (e.setState({newslist: e.state.newslist.concat(n)}), e.setState({isLoadingMore: !1}))
                })
            }, e
        }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = f
});
;
/*!/app/fetch/newslist/withNav/author.js*/
define("0e2312b", function (e, n) {
    "use strict";

    function t(e, n, t) {
        void 0 === n && (n = 0);
        var s = "/news?tn=bdapibaiyue&t=getcolumnnews",
            r = {rn: 20, id: e, wf: 0, time: n, nids: ""};
        t && (r.ts = t);
        var u = i.post(s, r);
        return u
    }

    var i = e("c2909ec");
    n.getColumnNews = t
});
;
/*!/app/containers/NewsList/withNav/Author.jsx*/
define("c81759f", function (t, e) {
    "use strict";
    var o = this && this.__extends || function (t, e) {
            function o() {
                this.constructor = t
            }

            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }, n = t("53ab468"), a = t("6d58bc2"), s = t("f516060"), i = t("e199b57"), r = t("a34f2db"),
        l = t("0e2312b"), p = function (t) {
            function e(e, o) {
                t.call(this, e, o), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this), this.state = {
                    newslist: [],
                    hasMore: !1,
                    ts: 0,
                    loadingMore: !1
                }
            }

            return o(e, t), e.prototype.render = function () {
                return n.createElement("div", null, 0 === this.state.newslist.length ? n.createElement(s.default, null) : n.createElement(i.default, {
                    newslist: this.state.newslist,
                    channelname: this.props.params.name
                }), this.state.hasMore ? n.createElement(r.default, {
                    loadmorefn: this.loadMoreData.bind(this),
                    isLoadingMore: this.state.loadingMore
                }) : n.createElement("div", null))
            }, e.prototype.componentDidMount = function () {
                return this.props.params.id === e.locationKey && window.webappLocationFrom.indexOf("/detail/") > 0 ? (this.setState(e.tempState), void setTimeout(function () {
                    window.scrollTo(0, e.tempScrollTop)
                })) : void this.loadFirstPageData()
            }, e.prototype.componentDidUpdate = function (t) {
                var e = t.params.id, o = this.props.params.id;
                e !== o && (this.setState({newslist: [], hasMore: !1, ts: 0}), this.loadFirstPageData())
            }, e.prototype.componentWillUnmount = function () {
                e.locationKey = this.props.params.id, e.tempState = this.state, e.tempScrollTop = document.body.scrollTop || document.documentElement.scrollTop
            }, e.prototype.loadFirstPageData = function () {
                var t = this.props.params.id;
                this.loadData(t)
            }, e.prototype.loadMoreData = function () {
                var t = this.props.params.id, e = this.state.ts;
                this.loadData(t, e, e)
            }, e.prototype.loadData = function (t, e, o) {
                var n = this;
                e && this.setState({loadingMore: !0});
                var a = l.getColumnNews(t, e, o);
                a.then(function (t) {
                    return t.json()
                }).then(function (t) {
                    if (0 !== t.errno) return void console.error("获取数据错误，errno: " + t.errno);
                    var e = t.data || {}, o = !!e.hasmore, a = e.ts || 0, s = e.news || [];
                    n.setState({
                        newslist: n.state.newslist.concat(s),
                        hasMore: o,
                        ts: a,
                        loadingMore: !1
                    })
                })
            }, e
        }(n.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = p
});
;
/*!/app/containers/NewsList/other/index.jsx*/
define("c014bc8", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, r = t("53ab468"), o = t("53ab468"), i = function (t) {
        function e() {
            t.apply(this, arguments)
        }

        return n(e, t), e.prototype.render = function () {
            return r.createElement("div", null, this.props.children)
        }, e
    }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = i
});
;
/*!/app/fetch/newslist/other/forward.js*/
define("3786408", function (e, n) {
    "use strict";

    function a(e) {
        var n = "/news?tn=bdapibaiyue&t=mediarankforwardednews",
            a = {mid: "03c7a16f2e8028127e42c5f7ca9e210b", nid: e}, i = r.post(n, a);
        return i
    }

    var r = e("c2909ec");
    n.getForwardNews = a
});
;
/*!/app/containers/NewsList/other/Forward.jsx*/
define("2e037de", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, r = t("53ab468"), o = t("6d58bc2"), i = t("53ab468"), s = t("3c76f40"), l = t("f516060"),
        a = t("e199b57"), u = t("3786408"), c = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.state = {newslist: []}, this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this)
            }

            return n(e, t), e.prototype.render = function () {
                var t = this.props.params.name;
                return r.createElement("div", null, r.createElement(s.default, {title: t}), r.createElement("div", {style: {position: "relative"}}, this.state.newslist.length ? r.createElement(a.default, {newslist: this.state.newslist}) : r.createElement(l.default, null)))
            }, e.prototype.componentDidMount = function () {
                var t = this, e = this.props.params.nid, n = u.getForwardNews(e);
                n.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (0 !== e.errno) return void console.error("获取数据错误，errno: " + e.errno);
                    var n = e.data || {}, r = n.news || [], o = r.filter(function (t) {
                        return null != t.title
                    });
                    o.length && t.setState({newslist: o})
                })
            }, e
        }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = c
});
;
/*!/app/containers/NewsList/other/NewsMan.jsx*/
define("990f591", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, o = t("53ab468"), r = t("6d58bc2"), i = t("53ab468"), u = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(e, t), e.prototype.render = function () {
            return o.createElement("h1", null, "newsman list")
        }, e
    }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = u
});
;
/*!/app/containers/NewsList/other/Favor.jsx*/
define("0360b7d", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, o = t("53ab468"), r = t("6d58bc2"), i = t("53ab468"), u = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(e, t), e.prototype.render = function () {
            return o.createElement("h1", null, "favor list")
        }, e
    }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = u
});
;
/*!/app/components/TagSubItem/index.jsx*/
define("4ad374a", function (t, e) {
    "use strict";
    var a = this && this.__extends || function (t, e) {
            function a() {
                this.constructor = t
            }

            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
        }, n = t("53ab468"), s = t("6d58bc2"), i = t("d9ac10b"), o = t("efd0827"), r = t("96d7310"),
        u = function (t) {
            function e(e, a) {
                t.call(this, e, a), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this)
            }

            return a(e, t), e.prototype.render = function () {
                var t = this.props.name, e = this.props.count, a = this.props.nav || {},
                    s = a.push || [], o = a.tag || [], r = !1;
                return o.forEach(function (e) {
                    return e.name === t ? (r = !0, !1) : void 0
                }), r || s.forEach(function (e) {
                    return e.name === t ? (r = !0, !1) : void 0
                }), n.createElement("div", {className: "tag-sub-item-container"}, n.createElement(i.Link, {
                    to: "/newslist/other/tag/" + encodeURIComponent(t),
                    className: "title-link",
                    onClick: this.countRelatedTagClick.bind(this)
                }, n.createElement("h6", null, t), n.createElement("span", null, e, "人订阅")), r ? n.createElement("div", {
                    className: "tag-item-sub tag-item-un-sub",
                    onClick: this.subHandle.bind(this),
                    "data-tagname": t,
                    "data-issubed": r
                }, "已订阅") : n.createElement("div", {
                    className: "tag-item-sub",
                    onClick: this.subHandle.bind(this),
                    "data-tagname": t,
                    "data-issubed": r
                }, "订阅"))
            }, e.prototype.addSubHandle = function (t) {
                var e = t.currentTarget;
                this.subHandle(e, "add"), e.className = (e.className || "") + " tag-item-un-sub", e.textContent = "已订阅"
            }, e.prototype.unSubHandle = function (t) {
                var e = t.currentTarget;
                this.subHandle(e, "minus"), e.className = (e.className || "").replace("tag-item-un-sub", ""), e.textContent = "订阅"
            }, e.prototype.subHandle = function (t) {
                var e = location.href.indexOf("fr=bdapp") > 0,
                    a = location.href.indexOf("/newslist/other/news/") > 0;
                if (!(r.isBox() || r.isBaiduBrowser() || e || a)) return window._hmt.push(["_trackEvent", "backFlow", "click", "subscription"]), void o.toBackFlow(this.props.item, "detail_subscribe");
                var n = t.currentTarget, s = n.getAttribute("data-issubed"),
                    i = "false" == s ? "add" : "minus", u = this.props.navActions,
                    c = this.props.nav, d = {
                        id: this.props.id,
                        name: n.getAttribute("data-tagname"),
                        type: this.props.type
                    }, l = this.props.userinfo.isLogIn;
                "add" === i ? (u.add(c, d, l), n.className = (n.className || "") + " tag-item-un-sub", n.textContent = "已订阅", n.setAttribute("data-issubed", "true")) : (u.minus(c, d, l), n.className = (n.className || "").replace("tag-item-un-sub", ""), n.textContent = "订阅", n.setAttribute("data-issubed", "false"))
            }, e.prototype.countRelatedTagClick = function () {
                window._hmt.push(["_trackEvent", "relatedTag", "click", "list"])
            }, e
        }(n.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = u
});
;
/*!/app/containers/NewsList/other/Tag.jsx*/
define("630c415", function (t, e) {
    "use strict";

    function n(t) {
        return {userinfo: t.userinfo, nav: t.nav}
    }

    function o(t) {
        return {navActions: r.bindActionCreators(f, t)}
    }

    var i = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, s = t("53ab468"), a = t("6d58bc2"), r = t("ecb7045"), l = t("f0a789e"), p = t("3c76f40"),
        d = t("4ad374a"), c = t("f516060"), u = t("e199b57"), h = t("a34f2db"), f = t("0ad32a9"),
        m = t("019b3e2"), v = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this), this.state = {
                    newslist: [],
                    nids: [],
                    displayTime: "",
                    isLoadingMore: !1
                }
            }

            return i(e, t), e.prototype.render = function () {
                var t = this.props.params.name;
                return s.createElement("div", null, s.createElement(p.default, {
                    title: "话题",
                    baidubox8: this.props.userinfo.baidubox8
                }), s.createElement("div", {className: "tag-top-sub-container"}, s.createElement(d.default, {
                    name: t,
                    type: "tag",
                    nav: this.props.nav,
                    navActions: this.props.navActions,
                    userinfo: this.props.userinfo
                })), s.createElement("div", {style: {position: "relative"}}, 0 === this.state.newslist.length ? s.createElement(c.default, null) : s.createElement(u.default, {
                    channelname: this.props.params.name,
                    newslist: this.state.newslist
                }), this.state.nids.length ? s.createElement(h.default, {
                    loadmorefn: this.loadMoreHandle.bind(this),
                    isLoadingMore: this.state.isLoadingMore
                }) : s.createElement("div", null)))
            }, e.prototype.componentDidMount = function () {
                if (this.props.params.name === e.locationKey && window.webappLocationFrom.indexOf("/detail/") > 0) return this.setState(e.tempState), void setTimeout(function () {
                    window.scrollTo(0, e.tempScrollTop)
                });
                var t = this.props.params.name;
                this.loadFirstPageData(t)
            }, e.prototype.componentWillUnmount = function () {
                e.locationKey = this.props.params.name, e.tempState = this.state, e.tempScrollTop = document.body.scrollTop || document.documentElement.scrollTop
            }, e.prototype.componentDidUpate = function () {
                this.setState({newslist: [], nids: [], displayTime: "", isLoadingMore: !1});
                var t = this.props.params.name;
                this.loadFirstPageData(t)
            }, e.prototype.loadFirstPageData = function (t) {
                var e = this, n = m.getFirstPageNewsData(t, "tag");
                n.then(function (t) {
                    return t.json()
                }).then(function (t) {
                    if (0 !== t.errno) return void console.error("other-tag页获取首页数据失败，errno: " + t.errno);
                    var n = t.data || {}, o = n.news || [], i = n.ts || "";
                    if (0 !== o.length) {
                        e.setState({displayTime: i});
                        var s = [], a = [];
                        o.map(function (t) {
                            t.nid && (t.title ? s.push(t) : a.push(t.nid))
                        }), e.setState({newslist: s, nids: a})
                    }
                })
            }, e.prototype.loadMoreHandle = function () {
                var t = this, e = this.state.nids, n = 20, o = [], i = "";
                e.length <= n ? (o = e, this.setState({nids: []})) : (e.forEach(function (t, i) {
                    return i >= n ? !1 : void o.push(e.shift())
                }), this.setState({nids: e})), o.forEach(function (t) {
                    i = i + "," + t
                }), this.setState({isLoadingMore: !0});
                var s = m.getNewsDataByNids(i, this.state.displayTime);
                s.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (t.setState({isLoadingMore: !1}), 0 !== e.errno) return void console.error("other-tag页加载更多出错, errno:" + e.errno);
                    var n = e.data || {}, o = n.news || [];
                    0 !== o.length && t.setState({newslist: t.state.newslist.concat(o)})
                })
            }, e
        }(s.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = l.connect(n, o)(v)
});
;
/*!/app/fetch/newslist/other/news.js*/
define("257d1b9", function (e, n) {
    "use strict";

    function s(e) {
        var n = "/news?tn=bdapibaiyue&t=subscribenewslist", s = {
            os: "android",
            ts: 0,
            sourceid: e,
            installmentid: 0,
            ln: 200,
            an: 20,
            wf: 0,
            ver: 3,
            nids: ""
        }, i = t.post(n, s);
        return i
    }

    var t = e("c2909ec");
    n.getFirstPageNewsData = s
});
;
/*!/app/containers/NewsList/other/News.jsx*/
define("eee1deb", function (t, e) {
    "use strict";

    function n(t) {
        return {userinfo: t.userinfo, nav: t.nav}
    }

    function o(t) {
        return {navActions: r.bindActionCreators(f, t)}
    }

    var i = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, s = t("53ab468"), a = t("6d58bc2"), r = t("ecb7045"), d = t("f0a789e"), l = t("3c76f40"),
        p = t("4ad374a"), c = t("f516060"), u = t("e199b57"), h = t("a34f2db"), f = t("0ad32a9"),
        m = t("019b3e2"), v = t("257d1b9"), w = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this), this.state = {
                    newslist: [],
                    nids: [],
                    displayTime: "",
                    isLoadingMore: !1
                }
            }

            return i(e, t), e.prototype.render = function () {
                var t = this.props.params.name, e = this.props.params.id;
                return s.createElement("div", null, s.createElement(l.default, {
                    title: t,
                    baidubox8: this.props.userinfo.baidubox8
                }), s.createElement("div", {className: "tag-top-sub-container"}, s.createElement(p.default, {
                    name: t,
                    id: e,
                    type: "news",
                    nav: this.props.nav,
                    navActions: this.props.navActions,
                    userinfo: this.props.userinfo
                })), s.createElement("div", {style: {position: "relative"}}, 0 === this.state.newslist.length ? s.createElement(c.default, null) : s.createElement(u.default, {newslist: this.state.newslist}), this.state.nids.length ? s.createElement(h.default, {
                    loadmorefn: this.loadMoreHandle.bind(this),
                    isLoadingMore: this.state.isLoadingMore
                }) : s.createElement("div", null)))
            }, e.prototype.componentDidMount = function () {
                if (this.props.params.id === e.locationKey && window.webappLocationFrom.indexOf("/detail/") > 0) return this.setState(e.tempState), void setTimeout(function () {
                    window.scrollTo(0, e.tempScrollTop)
                });
                var t = this.props.params.id;
                this.loadFirstPageData(t)
            }, e.prototype.componentWillUnmount = function () {
                e.locationKey = this.props.params.id, e.tempState = this.state, e.tempScrollTop = document.body.scrollTop || document.documentElement.scrollTop
            }, e.prototype.componentDidUpate = function () {
                this.setState({newslist: [], nids: [], displayTime: "", isLoadingMore: !1});
                var t = this.props.params.id;
                this.loadFirstPageData(t)
            }, e.prototype.loadFirstPageData = function (t) {
                var e = this, n = v.getFirstPageNewsData(t);
                n.then(function (t) {
                    return t.json()
                }).then(function (t) {
                    if (0 !== t.errno) return void console.error("other-news页获取首页数据失败，errno: " + t.errno);
                    var n = t.data || {}, o = n.column || [], i = o[0] || {}, s = i.news || [],
                        a = n.ts || "";
                    if (0 !== s.length) {
                        e.setState({displayTime: a});
                        var r = [], d = [];
                        s.map(function (t) {
                            t.nid && (t.title ? r.push(t) : d.push(t.nid))
                        }), e.setState({newslist: r, nids: d})
                    }
                })
            }, e.prototype.loadMoreHandle = function () {
                var t = this, e = this.state.nids, n = 20, o = [], i = "";
                e.length <= n ? (o = e, this.setState({nids: []})) : (e.forEach(function (t, i) {
                    return i >= n ? !1 : void o.push(e.shift())
                }), this.setState({nids: e})), o.forEach(function (t) {
                    i = i + "," + t
                }), this.setState({isLoadingMore: !0});
                var s = m.getNewsDataByNids(i, this.state.displayTime);
                s.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (t.setState({isLoadingMore: !1}), 0 !== e.errno) return void console.error("other-news页加载更多出错, errno:" + e.errno);
                    var n = e.data || {}, o = n.news || [];
                    0 !== o.length && t.setState({newslist: t.state.newslist.concat(o)})
                })
            }, e
        }(s.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = d.connect(n, o)(w)
});
;
/*!/app/containers/Profile/index.jsx*/
define("ff4457e", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, i = t("53ab468"), r = t("53ab468"), o = t("425f183"), a = function (t) {
        function e() {
            t.apply(this, arguments)
        }

        return n(e, t), e.prototype.render = function () {
            var t = window._animateLinkTime || 0, e = Date.now() - t < 1e3;
            return i.createElement(o, {
                transitionName: "animate-slide-left",
                transitionAppear: e,
                transitionAppearTimeout: 500,
                transitionEnterTimeout: 500,
                transitionLeaveTimeout: 300
            }, this.props.children)
        }, e
    }(r.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = a
});
;
/*!/app/components/profile/UserInfo/index.jsx*/
define("7aa7365", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, a = e("53ab468"), o = e("6d58bc2"), i = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props.userinfo, t = e.isLogIn, n = e.displayname, o = e.image;
            return a.createElement("div", {className: "profile-title"}, a.createElement("div", {className: "profile-header"}, e.baidubox8 ? "" : a.createElement("div", {
                className: "back-container",
                onClick: this.backHandle
            }, a.createElement("span", null))), a.createElement("div", {className: "profile-info"}, a.createElement("div", {className: "profile-img-container"}, a.createElement("div", {className: "img-wrapper"}, t ? a.createElement("img", {src: o}) : a.createElement("img", {src: "https://gss0.bdstatic.com/5foIcy0a2gI2n2jgoY3K/n/nvn/static/news/imgs/person_dcc8a01.png"}))), a.createElement("div", null, t ? a.createElement("div", {className: "profile-name"}, a.createElement("span", null, n)) : a.createElement("div", {
                className: "prifile-btn",
                onClick: this.loginHandle
            }, a.createElement("span", null, "立即登录")))))
        }, t.prototype.backHandle = function () {
            history.back()
        }, t.prototype.loginHandle = function () {
            window._hmt.push(["_trackEvent", "login", "click"]), window.open("http://wappass.baidu.com/passport/?login&u=" + encodeURIComponent(window.location.href.replace(/profile\/home/, "")), "_self")
        }, t
    }(a.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = i
});
;
/*!/app/components/profile/ProfileNav/index.jsx*/
define("d5533c4", function (e, t) {
    "use strict";
    var o = this && this.__extends || function (e, t) {
        function o() {
            this.constructor = e
        }

        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    }, n = e("53ab468"), i = e("6d58bc2"), s = e("557cc4f"), a = e("34f6781"), r = function (e) {
        function t(t, o) {
            e.call(this, t, o), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this), this.state = {isShowTip: !1}
        }

        return o(t, e), t.prototype.render = function () {
            var e = this.props.userinfo, t = e.isLogIn, o = e.imageMode;
            return n.createElement("div", {className: "profile-nav"}, n.createElement("div", {
                className: "profile-nav-item msg",
                onClick: this.linkToMsg.bind(this)
            }, n.createElement("i", {className: "icon"}), n.createElement("span", null, "我的消息")), n.createElement("div", {
                className: "profile-nav-item favor",
                onClick: this.linkToFor.bind(this)
            }, n.createElement("i", {className: "icon"}), n.createElement("span", null, "我的收藏")), n.createElement("div", {
                onClick: this.logoutHandle.bind(this),
                className: "profile-nav-item logout",
                style: {display: t ? "block" : "none"}
            }, n.createElement("div", null, n.createElement("i", {className: "icon"}), n.createElement("span", null, "退出登录"))), n.createElement("div", {className: "profile-nav-item img-model"}, n.createElement("i", {className: "icon"}), n.createElement("span", null, "无图模式"), n.createElement("i", {
                ref: "imageModeIcon",
                className: o ? "un-selected" : "selected",
                onClick: this.changeImageModel.bind(this, !o)
            })), n.createElement("div", {className: "center-horizontal"}, n.createElement("a", {href: "https://news-bos.cdn.bcebos.com/mvideo/baidu_news_protocol.html"}, n.createElement("span", {className: "protocol"}, "用户协议"))), n.createElement("div", {className: "center-horizontal"}, n.createElement("a", {href: "https://www.baidu.com/duty/wise/wise_secretright.html"}, n.createElement("span", {className: "protocol"}, "隐私策略"))), this.state.isShowTip ? n.createElement(a.default, {info: "请先登录"}) : n.createElement("div", {style: {display: "none"}}))
        }, t.prototype.linkToMsg = function () {
            var e = this.props.userinfo, t = e.isLogIn;
            return t ? void s.default.push("/profile/notice") : void this.showLoginTip()
        }, t.prototype.linkToFor = function () {
            var e = this.props.userinfo, t = e.isLogIn;
            return t ? void s.default.push("/profile/favor") : void this.showLoginTip()
        }, t.prototype.showLoginTip = function () {
            this.setState({isShowTip: !0}), setTimeout(function () {
                window.open("http://wappass.baidu.com/passport/?login&u=" + encodeURIComponent(window.location.href), "_self")
            }, 2e3)
        }, t.prototype.logoutHandle = function () {
            var e = confirm("您是否要退出当前登录账号？");
            if (e) {
                var t = ["https://wappass.baidu.com/passport/?logout", "u=" + encodeURIComponent(window.location.href.replace(/profile\/home/, "")), "tpl=xw", "uid=", "ssid=", "bd_page_type=1", "pu=", "tn="].join("&");
                location.href = t
            }
        }, t.prototype.changeImageModel = function (e) {
            var t = {};
            if (Object.assign) t = Object.assign({}, this.props.userinfo); else for (var o in this.props.userinfo) if (this.props.userinfo.hasOwnProperty(o)) {
                var n = this.props.userinfo[o];
                t[o] = n
            }
            var i = this.props.userInfoActions, s = i.updateImageModel;
            t.imageMode = e, s(t), this.refs.imageModeIcon.className = e ? "un-selected" : "selected"
        }, t
    }(n.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
});
;
/*!/app/containers/Profile/home.jsx*/
define("fd8fe7a", function (e, t) {
    "use strict";

    function n(e) {
        return {userinfo: e.userinfo}
    }

    function o(e) {
        return {userInfoActions: c.bindActionCreators(a, e)}
    }

    var r = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, i = e("53ab468"), s = e("6d58bc2"), u = e("53ab468"), c = e("ecb7045"), f = e("f0a789e"),
        a = e("9b13b92"), p = e("7aa7365"), d = e("d5533c4"), l = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this)
            }

            return r(t, e), t.prototype.render = function () {
                var e = this.props.userinfo;
                return i.createElement("div", {id: "profile_view"}, i.createElement(p.default, {userinfo: e}), i.createElement(d.default, {
                    userinfo: e,
                    userInfoActions: this.props.userInfoActions
                }))
            }, t
        }(u.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = f.connect(n, o)(l)
});
;
/*!/app/containers/Profile/Favor.jsx*/
define("9b122b0", function (e, t) {
    "use strict";

    function n(e) {
        return {collectlist: e.collectlist, userinfo: e.userinfo}
    }

    function o() {
        return {}
    }

    var r = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, i = e("53ab468"), c = e("6d58bc2"), l = e("53ab468"), s = e("f0a789e"), u = e("3c76f40"),
        a = e("e199b57"), p = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.shouldComponentUpdate = c.shouldComponentUpdate.bind(this)
            }

            return r(t, e), t.prototype.render = function () {
                var e = this.props.collectlist || [];
                return i.createElement("div", {id: "profile_view_favor"}, i.createElement(u.default, {
                    title: "我的收藏",
                    baidubox8: this.props.userinfo.baidubox8
                }), e.length ? i.createElement(a.default, {newslist: e}) : i.createElement("p", {
                    style: {
                        fontSize: ".16rem",
                        textAlign: "center",
                        marginTop: "30px",
                        color: "#666"
                    }
                }, "没有收藏新闻"))
            }, t
        }(l.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = s.connect(n, o)(p)
});
;
/*!/app/containers/Profile/Model.jsx*/
define("7ad3753", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, o = t("53ab468"), r = t("6d58bc2"), i = t("53ab468"), u = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(e, t), e.prototype.render = function () {
            return o.createElement("h1", null, "model container")
        }, e
    }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = u
});
;
/*!/app/components/profile/NoticeHeader/index.jsx*/
define("22d5c41", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, o = e("53ab468"), c = e("6d58bc2"), a = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = c.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props.currentChannel;
            return o.createElement("div", {className: "my-notice-header"}, o.createElement("div", {className: "header-content"}, o.createElement("span", {
                className: "header-left " + ("notice" === e ? "selected" : ""),
                onClick: this.channelClickHandle.bind(this, "notice")
            }, "动态"), o.createElement("span", {
                className: "header-right " + ("comment" === e ? "selected" : ""),
                onClick: this.channelClickHandle.bind(this, "comment")
            }, "评论")))
        }, t.prototype.channelClickHandle = function (e) {
            var t = this.props.currentChannel, n = this.props.toggleChannelHandle;
            e !== t && n(e)
        }, t
    }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
});
;
/*!/app/components/profile/NoticeList/Item.jsx*/
define("fcf491b", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, a = e("53ab468"), i = e("6d58bc2"), s = e("d9ac10b"), c = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props.item, t = e.news || {}, n = e.reply || [], i = n[0] || {},
                c = this.props.timeFormatFn, o = c(e.ts);
            return a.createElement("div", {className: "notice-item"}, a.createElement("div", {className: "item-title"}, a.createElement("span", {className: "title-user"}, "百度新闻网友"), a.createElement("span", null, "赞了您的评论"), a.createElement("span", {className: "title-time"}, o)), a.createElement("div", {className: "notice-content"}, a.createElement(s.Link, {to: "/detail/" + t.nid}, a.createElement("div", {className: "comment"}, i.text), a.createElement("div", {className: "news-title"}, t.title))))
        }, t
    }(a.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = c
});
;
/*!/app/components/profile/NoticeList/index.jsx*/
define("4485eb4", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, o = t("53ab468"), r = t("6d58bc2"), i = t("fcf491b"), a = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(e, t), e.prototype.render = function () {
            var t = this, e = this.props.data;
            return o.createElement("div", {className: "my-notice-list"}, e.map(function (e, n) {
                return o.createElement(i.default, {
                    key: n,
                    item: e,
                    timeFormatFn: t.props.timeFormatFn
                })
            }))
        }, e
    }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = a
});
;
/*!/app/components/profile/NoticeComment/Item.jsx*/
define("bcb1eaf", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, a = e("53ab468"), s = e("6d58bc2"), o = e("d9ac10b"), c = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props.item || {}, t = e.news || {}, n = this.props.timeFormatFn,
                s = n(e.ts);
            return a.createElement("div", {className: "comment-item"}, a.createElement("div", {className: "comment-title"}, a.createElement("span", {className: "title-user"}, "您评论了新闻"), a.createElement("span", {className: "title-time"}, s)), a.createElement("div", {className: "comment-content"}, a.createElement("span", null, e.text)), a.createElement("div", {className: "news-title"}, a.createElement(o.Link, {to: "/detail/" + t.nid}, a.createElement("span", null, t.title))))
        }, t
    }(a.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = c
});
;
/*!/app/components/profile/NoticeComment/index.jsx*/
define("481a2cf", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, o = t("53ab468"), r = t("6d58bc2"), i = t("bcb1eaf"), a = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(e, t), e.prototype.render = function () {
            var t = this, e = this.props.data;
            return o.createElement("div", {className: "my-comment-list"}, e.map(function (e, n) {
                return o.createElement(i.default, {
                    key: n,
                    item: e,
                    timeFormatFn: t.props.timeFormatFn
                })
            }))
        }, e
    }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = a
});
;
/*!/app/fetch/profile/notice.js*/
define("41a997e", function (t, e) {
    "use strict";

    function n() {
        var t = "/news?tn=bdapibaiyue&t=getuserfeed", e = {cuid: 1, ts: 0}, n = i.post(t, e);
        return n
    }

    function a() {
        var t = "/news?tn=bdapibaiyue&t=getusercomment", e = {cuid: 1, ts: 0}, n = i.post(t, e);
        return n
    }

    var i = t("c2909ec");
    e.getNoticeData = n, e.getCommentData = a
});
;
/*!/app/containers/Profile/Notice.jsx*/
define("077b4c6", function (t, e) {
    "use strict";

    function n(t) {
        return {userinfo: t.userinfo}
    }

    function o() {
        return {}
    }

    var r = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, a = t("53ab468"), i = t("6d58bc2"), c = t("53ab468"), s = t("f0a789e"), u = t("3c76f40"),
        l = t("22d5c41"), h = t("4485eb4"), f = t("481a2cf"), d = t("41a997e"), m = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this), this.state = {
                    currentChannel: "notice",
                    noticeData: [],
                    commentData: []
                }
            }

            return r(e, t), e.prototype.render = function () {
                return a.createElement("div", {id: "profile_view_notice"}, a.createElement(u.default, {
                    title: "我的消息",
                    baidubox8: this.props.userinfo.baidubox8
                }), a.createElement(l.default, {
                    currentChannel: this.state.currentChannel,
                    toggleChannelHandle: this.toggleChannel.bind(this)
                }), a.createElement("div", {style: {position: "relative"}}, "notice" === this.state.currentChannel ? a.createElement(h.default, {
                    data: this.state.noticeData,
                    timeFormatFn: this.timeFormat
                }) : a.createElement(f.default, {
                    data: this.state.commentData,
                    timeFormatFn: this.timeFormat
                })))
            }, e.prototype.componentDidMount = function () {
                this.props.userinfo;
                this.loadNoticeData(), this.loadCommentData()
            }, e.prototype.loadNoticeData = function () {
                var t = this, e = d.getNoticeData();
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (0 !== e.errno) return void console.error("获取notice数据错误，errno: " + e.errno);
                    var n = e.data || {}, o = n.list || [];
                    0 !== o.length && t.setState({noticeData: o})
                })
            }, e.prototype.loadCommentData = function () {
                var t = this, e = d.getCommentData();
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (0 !== e.errno) return void console.error("获取comment数据错误，errno: " + e.errno);
                    var n = e.data || {}, o = n.list || [];
                    0 !== o.length && t.setState({commentData: o})
                })
            }, e.prototype.toggleChannel = function (t) {
                this.setState({currentChannel: t})
            }, e.prototype.timeFormat = function (t) {
                var e = parseInt(t);
                if (isNaN(e)) return "";
                var n = new Date(e);
                return n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate()
            }, e
        }(c.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = s.connect(n, o)(m)
});
;
/*!/app/containers/Search/index.jsx*/
define("8496131", function (t, e) {
    "use strict";

    function n(t) {
        return {userinfo: t.userinfo}
    }

    function r() {
        return {}
    }

    var i = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, o = t("53ab468"), a = t("425f183"), u = t("f0a789e"), s = function (t) {
        function e() {
            t.apply(this, arguments)
        }

        return i(e, t), e.prototype.render = function () {
            var t = window._animateLinkTime || 0;
            if (this.props.userinfo.baidubox8) var e = !1; else var e = Date.now() - t < 1e3;
            return o.createElement(a, {
                transitionName: "animate-slide-left",
                transitionAppear: e,
                transitionAppearTimeout: 500,
                transitionEnterTimeout: 500,
                transitionLeaveTimeout: 300
            }, this.props.children)
        }, e
    }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = u.connect(n, r)(s)
});
;
/*!/app/components/search/SearchBox/index.jsx*/
define("24ea21a", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, a = t("53ab468"), o = t("6d58bc2"), i = t("286d917"), s = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this), this.state = {
                keyword: "",
                autoCompleteData: []
            }, this.timeoutId = "", this.newPage = !0
        }

        return n(e, t), e.prototype.render = function () {
            var t = this, e = this.state.keyword || "";
            return a.createElement("div", {className: "search-box-container"}, a.createElement("div", {className: "box-autoCompete"}, a.createElement("ul", null, this.state.autoCompleteData.map(function (e, n) {
                return a.createElement("li", {key: n, onClick: t.searchHandle.bind(t, e)}, e)
            })), this.state.autoCompleteData.length ? a.createElement("div", {className: "close"}, a.createElement("span", {
                onClick: function () {
                    t.setState({autoCompleteData: []})
                }
            }, "关闭")) : ""), a.createElement("div", {className: "box-container"}, a.createElement("form", {
                action: !0,
                onSubmit: this.submitHandle.bind(this)
            }, a.createElement("input", {
                ref: "searchInput",
                type: "search",
                value: e,
                onChange: this.changeHanle.bind(this)
            }), this.state.keyword ? a.createElement("div", {
                className: "box-icon",
                onClick: this.clearHandle.bind(this)
            }) : "")), a.createElement("div", {
                ref: "searchBtn",
                className: "btn",
                onClick: this.searchHandle.bind(this, "")
            }, a.createElement("span", null, "百度一下")))
        }, e.prototype.changeHanle = function (t) {
            this.newPage = !1, this.setState({keyword: t.target.value}), this.timeoutId && clearTimeout(this.timeoutId), this.timeoutId = setTimeout(function () {
                this.state.keyword && this.autoCompleteHandle.call(this)
            }.bind(this), 500)
        }, e.prototype.clearHandle = function () {
            this.setState({keyword: ""}), this.setState({autoCompleteData: []})
        }, e.prototype.autoCompleteHandle = function () {
            var t = this, e = this.state.keyword;
            i.get("/sn/api/sug?wd=" + encodeURIComponent(e)).then(function (t) {
                return t.json()
            }).then(function (e) {
                if (!t.newPage) {
                    var n = e.s || e.data;
                    n && n.length && (n.length > 2 && (n = n.slice(0, 2)), t.setState({autoCompleteData: n}))
                }
            })
        }, e.prototype.searchHandle = function (t) {
            if (t = t || this.state.keyword) {
                if (t === this.props.value) return void this.setState({
                    autoCompleteData: [],
                    keyword: this.props.value
                });
                this.timeoutId && clearTimeout(this.timeoutId), t = encodeURIComponent(t), location.href = "https://m.baidu.com/sf/vsearch?pd=realtime&word=" + t + "&tn=vsearch&sa=on_ns_webapp&ms=1&atn=index"
            }
        }, e.prototype.componentDidMount = function () {
            this.setState({keyword: this.props.value})
        }, e.prototype.componentDidUpdate = function (t) {
            this.props.value !== t.value && this.setState({
                autoCompleteData: [],
                keyword: this.props.value
            })
        }, e.prototype.componentWillUnmount = function () {
            this.timeoutId && clearTimeout(this.timeoutId)
        }, e.prototype.submitHandle = function (t) {
            t.preventDefault(), this.searchHandle.bind(this, "")(), this.refs.searchInput.blur(), this.newPage = !0
        }, e
    }(a.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = s
});
;
/*!/app/components/search/Suglist/index.jsx*/
define("0654974", function (t, e) {
    "use strict";
    var o = this && this.__extends || function (t, e) {
        function o() {
            this.constructor = t
        }

        for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
        t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
    }, s = t("53ab468"), n = t("6d58bc2"), i = t("557cc4f"), u = function (t) {
        function e(e, o) {
            t.call(this, e, o), this.shouldComponentUpdate = n.shouldComponentUpdate.bind(this)
        }

        return o(e, t), e.prototype.render = function () {
            var t = this.props.data;
            return s.createElement("li", {
                className: "sugli",
                ref: "sugli",
                onClick: this.searchHandle.bind(this, t),
                onTouchStart: this.touchs.bind(this),
                onTouchMove: this.touchm.bind(this),
                onTouchEnd: this.touche.bind(this)
            }, t, s.createElement("i", {className: "i igo"}))
        }, e.prototype.searchHandle = function (t) {
            if (t = t || this.state.keyword) {
                if (t === this.props.value) return void this.setState({
                    autoCompleteData: [],
                    keyword: this.props.value
                });
                t = encodeURIComponent(t), i.default.push("/search/" + t), document.getElementById("sesultList") && (document.getElementById("sesultList").style.display = "block", document.getElementById("box-suglist").style.display = "none")
            }
        }, e.prototype.touchs = function () {
            this.refs.sugli.className = "sugli sugli-pressed"
        }, e.prototype.touchm = function (t) {
            t.preventDefault()
        }, e.prototype.touche = function () {
            this.refs.sugli.className = "sugli"
        }, e
    }(s.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = u
});
;
/*!/app/components/search/SearchBox8/index.jsx*/
define("d64f521", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, o = t("53ab468"), s = t("6d58bc2"), a = t("557cc4f"), i = t("0654974"), l = t("286d917"),
        c = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this), this.state = {
                    keyword: "",
                    autoCompleteData: []
                }, this.timeoutId = "", this.newPage = !0
            }

            return n(e, t), e.prototype.render = function () {
                var t = this.state.keyword || "";
                return o.createElement("div", {className: "searchbox9"}, o.createElement("div", {className: "search-box"}, o.createElement("div", {className: "box-input"}, o.createElement("form", {
                    action: !0,
                    onSubmit: this.submitHandle.bind(this)
                }, o.createElement("input", {
                    ref: "searchInput",
                    type: "search",
                    value: t,
                    onChange: this.changeHanle.bind(this),
                    placeholder: "输入搜索关键词"
                }), this.state.keyword ? o.createElement("div", {className: "box-icon-wrapper"}, o.createElement("div", {
                    className: "box-icon",
                    onClick: this.clearHandle.bind(this)
                })) : "")), this.state.keyword ? o.createElement("div", {
                    className: "btn",
                    onClick: this.toBack.bind(this)
                }, "取消") : o.createElement("div", {
                    className: "btn-nobackground",
                    onClick: this.toBack.bind(this)
                }, "取消")), o.createElement("div", {
                    className: "box-suglist",
                    id: "box-suglist"
                }, o.createElement("ul", null, this.state.autoCompleteData.map(function (t, e) {
                    return o.createElement(i.default, {key: e, data: t})
                }))))
            }, e.prototype.toBack = function () {
                document.getElementById("hotsearch-container"), a.default.goBack()
            }, e.prototype.trim = function (t) {
                return t
            }, e.prototype.changeHanle = function (t) {
                this.newPage = !1, this.trim(t.target.value) ? (document.getElementById("hotsearch-container") ? document.getElementById("hotsearch-container").style.display = "none" : document.getElementById("sesultList") && (document.getElementById("sesultList").style.display = "none"), document.getElementById("box-suglist").style.display = "block", this.setState({keyword: this.trim(t.target.value)}), this.timeoutId && clearTimeout(this.timeoutId), this.timeoutId = setTimeout(function () {
                    this.state.keyword && this.autoCompleteHandle.call(this)
                }.bind(this), 500)) : this.clearHandle()
            }, e.prototype.clearHandle = function () {
                this.setState({keyword: ""}), this.setState({autoCompleteData: []}), document.getElementById("hotsearch-container") ? document.getElementById("hotsearch-container").style.display = "block" : document.getElementById("sesultList") && (document.getElementById("sesultList").style.display = "block"), document.getElementById("box-suglist").style.display = "none"
            }, e.prototype.autoCompleteHandle = function () {
                var t = this, e = this.state.keyword;
                l.get("/sn/api/sug?wd=" + encodeURIComponent(e)).then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (!t.newPage) {
                        var n = e.s || e.data;
                        n && n.length && (n.length > 2 && (n = n.slice(0, 2)), t.setState({autoCompleteData: n}))
                    }
                })
            }, e.prototype.searchHandle = function (t) {
                if (t = t || this.state.keyword) {
                    if (t === this.props.value) return void this.setState({
                        autoCompleteData: [],
                        keyword: this.props.value
                    });
                    this.timeoutId && clearTimeout(this.timeoutId), t = encodeURIComponent(t), a.default.push("/search/" + t), document.getElementById("sesultList") && (document.getElementById("sesultList").style.display = "block")
                }
            }, e.prototype.submitHandle = function (t) {
                t.preventDefault(), this.searchHandle.bind(this, "")(), this.refs.searchInput.blur(), this.newPage = !0
            }, e.prototype.componentDidMount = function () {
                this.setState({keyword: this.props.value}), this.props.value || this.refs.searchInput.focus()
            }, e.prototype.componentDidUpdate = function (t) {
                this.props.value !== t.value && this.setState({
                    autoCompleteData: [],
                    keyword: this.props.value
                })
            }, e.prototype.componentWillUnmount = function () {
                this.timeoutId && clearTimeout(this.timeoutId)
            }, e
        }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = c
});
;
/*!/app/components/search/HotSearch/index.jsx*/
define("71f8748", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, o = e("53ab468"), r = e("6d58bc2"), a = e("d9ac10b"), i = e("f516060"), c = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props.data, t = o.createElement("div", {
                className: "hotsearch-container",
                id: "hotsearch-container"
            }, o.createElement("h2", null, "热搜榜"), o.createElement("ul", {className: "list"}, e.map(function (e, t) {
                return o.createElement("li", {key: t}, o.createElement(a.Link, {to: "/search/" + encodeURIComponent(e.title)}, e.title))
            })));
            return o.createElement("div", {style: {position: "relative"}}, e.length ? t : o.createElement(i.default, null))
        }, t
    }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = c
});
;
/*!/app/fetch/search/searchBox.js*/
define("2c7c02b", function (t, e) {
    "use strict";

    function n() {
        return a.get("/news?tn=bdapibaiyue&t=hotwordnews&wf=0")
    }

    var a = t("286d917");
    e.getHotSearchData = n
});
;
/*!/app/containers/Search/home.jsx*/
define("ee16cc5", function (t, e) {
    "use strict";

    function n(t) {
        return {userinfo: t.userinfo}
    }

    function o() {
        return {}
    }

    var r = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, a = t("53ab468"), i = t("6d58bc2"), c = t("f0a789e"), s = t("3c76f40"), u = t("24ea21a"),
        d = t("d64f521"), h = t("71f8748"), f = t("2c7c02b"), l = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this), this.state = {
                    hotSearchData: [],
                    sugSearchData: []
                }
            }

            return r(e, t), e.prototype.render = function () {
                return this.props.userinfo.baidubox8 || this.props.userinfo.baidubox ? a.createElement("div", {id: "search_view"}, a.createElement(d.default, null), a.createElement(h.default, {data: this.state.hotSearchData})) : a.createElement("div", {id: "search_view"}, a.createElement(s.default, {title: "搜新闻"}), a.createElement(u.default, null), a.createElement(h.default, {data: this.state.hotSearchData}))
            }, e.prototype.componentDidMount = function () {
                this.loadHotNewsList()
            }, e.prototype.loadHotNewsList = function () {
                var t = this, e = f.getHotSearchData();
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (0 !== e.errno) return void console.error("获取热搜榜列表失败，errno: " + e.errno);
                    var n = e.data || {}, o = n.news || [];
                    o.length && t.setState({hotSearchData: o})
                })
            }, e
        }(a.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = c.connect(n, o)(l)
});
;
/*!/app/components/common/Error/index.jsx*/
define("096d8a4", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, o = e("53ab468"), r = e("6d58bc2"), a = e("53ab468"), c = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            return o.createElement("div", {className: "page-error"}, o.createElement("div", {className: "page-error-logo"}), o.createElement("div", {className: "page-error-text"}, "内容已删除"))
        }, t
    }(a.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = c
});
;
/*!/app/fetch/search/searchDetail.js*/
define("10f2c79", function (t, e) {
    "use strict";

    function n(t) {
        return a.get("/news?tn=bdapiinstantfulltext&src=" + t)
    }

    var a = t("286d917");
    e.getSearchDetailData = n
});
;
/*!/app/containers/Search/Detail.jsx*/
define("b0b2b89", function (t, e) {
    "use strict";

    function n(t) {
        return {userinfo: t.userinfo}
    }

    function o(t) {
        return {userInfoActions: i.bindActionCreators(h, t)}
    }

    var r = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, s = t("53ab468"), a = t("6d58bc2"), i = t("ecb7045"), u = t("f0a789e"), c = t("f516060"),
        p = t("096d8a4"), l = t("2efd116"), f = t("b5a4532"), d = t("10f2c79"), h = t("9b13b92"),
        m = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this), this.state = {
                    content: !1,
                    errorPage: !1
                }
            }

            return r(e, t), e.prototype.render = function () {
                var t = this.props.userinfo, e = (t.baidubox, this.props.userinfo.fontSize || 2);
                return s.createElement("div", {
                    id: "searchDetail_view",
                    className: "font-size-" + e
                }, s.createElement("div", {style: {position: "relative"}}, this.state.content ? s.createElement(l.default, {
                    data: this.state.content,
                    userinfo: this.props.userinfo,
                    searchPage: !0,
                    userInfoActions: this.props.userInfoActions
                }) : this.state.errorPage ? s.createElement(p.default, null) : s.createElement(c.default, null)))
            }, e.prototype.componentDidMount = function () {
                this.loadNewsContentData(), f.addReadNewsId(this.props.params.url)
            }, e.prototype.componentWillUnmount = function () {
                document.title = "百度新闻"
            }, e.prototype.loadNewsContentData = function () {
                var t = this, e = this.props.params.url, n = d.getSearchDetailData(e);
                n.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (t.setState({errorPage: !1}), 0 !== e.errno || e.data === !1) return t.setState({errorPage: !0}), void console.error("获取新闻内容错误，errno: " + e.errno);
                    var n = e.data || {}, o = n.news || [];
                    o.length && (t.setState({content: o[0]}), document.title = o[0].title)
                })
            }, e
        }(s.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = u.connect(n, o)(m)
});
;
/*!/app/components/search/downloadApp.jsx*/
define("237639b", function (n, t) {
    "use strict";

    function o() {
        var n = "https://downpack.baidu.com/baidunews_AndroidPhone_1019026q.apk",
            t = window.navigator.userAgent;
        e() ? setTimeout(function () {
            location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.news&g_f=991653"
        }, 300) : t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? setTimeout(function () {
            location.href = "http://itunes.apple.com/cn/app/id482820737?mt=8"
        }, 300) : location.href = n
    }

    function e() {
        return /MicroMessenger/i.test(navigator.userAgent)
    }

    t.downloadApp = o
});
;
/*!/app/components/search/SearchListHeader/index.jsx*/
define("526e1c3", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, a = e("53ab468"), l = e("6d58bc2"), r = e("53ab468"), i = e("557cc4f"), c = e("237639b"),
        o = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.shouldComponentUpdate = l.shouldComponentUpdate.bind(this), this.state = {showMenu: !1}
            }

            return n(t, e), t.prototype.render = function () {
                var e = this.props.name;
                e = encodeURIComponent(e);
                var t = this.props.userinfo, n = t.baidubox,
                    l = "searchlist-header-container clearfix";
                return n || (l += " searchlist-header-container-logo"), a.createElement("div", null, a.createElement("div", {className: l}, n ? a.createElement("span", null, "新闻") : "", n ? a.createElement("a", {
                    href: "#",
                    onClick: this.goBackHandle,
                    className: "float-left back-icon"
                }) : a.createElement("a", {
                    href: "https://m.baidu.com/",
                    className: "float-left baidu-icon"
                }), n ? "" : a.createElement("a", {
                    onClick: this.menuClickHandler.bind(this),
                    className: "float-left menus-icon"
                }), a.createElement("a", {
                    href: "#",
                    onClick: this.goHomeHandle.bind(this),
                    className: "float-right home-icon"
                }), n ? "" : a.createElement("a", {
                    href: "javascript:;",
                    onClick: this.downloadClickHandler.bind(this),
                    className: "float-right download-icon"
                })), a.createElement("hr", null), a.createElement("div", {
                    className: "nav-container",
                    style: {display: this.state.showMenu ? "block" : "none"}
                }, a.createElement("ul", {className: "clearfix"}, a.createElement("li", null, a.createElement("b", null), a.createElement("a", {href: "https://m.baidu.com/s?bd_page_type=1&ssid=0&from=0&uid=&fr=news&word=" + e}, "网页")), a.createElement("li", null, a.createElement("b", null), a.createElement("a", {href: "http://image.baidu.com/search/wiseindex?tn=wiseindex"}, "图片")), a.createElement("li", null, a.createElement("b", null), a.createElement("a", {href: "http://m.v.baidu.com/search?word=" + e + "&bd_page_type=1&ssid=0&uid=&from=0&fr=news"}, "视频")), a.createElement("li", null, a.createElement("b", null), a.createElement("a", {href: "http://wapp.baidu.com/s?bd_page_type=1&ssid=&uid=&from=0&fr=news&kw=" + e + "&pn=0&"}, "贴吧")), a.createElement("li", null, a.createElement("b", null), a.createElement("a", {href: "http://wapiknow.baidu.com/index?st=3&bd_page_type=1&ssid=&uid=&from=0&fr=news&word=" + e}, "知道")), a.createElement("li", null, a.createElement("b", null), a.createElement("a", {href: "http://wk.baidu.com/search?st=3&bd_page_type=1&ssid=&uid=&from=0&fr=news&word=" + e}, "文库")), a.createElement("li", null, a.createElement("b", null), a.createElement("a", {href: "http://wapbaike.baidu.com/searchresult/?word=" + e}, "百科")), a.createElement("li", null, a.createElement("b", null), a.createElement("a", {href: "http://i.hi.baidu.com/?bd_page_type=1&ssid=0&from=0&uid=&fr=news"}, "空间")), a.createElement("li", null, a.createElement("b", null), a.createElement("a", {href: "http://music.baidu.com/s?itn=baidump3mobile&ct=671088640&rn=20&gate=33&ie=utf-8&bd_page_type=1&ssid=&uid=&from=0&fr=news&key=" + e}, "音乐")), a.createElement("li", null, a.createElement("b", null), a.createElement("a", {href: "http://map.baidu.com/mobile/webapp/index/index/qt=s&wd=" + e + "/newmap=1&ie=utf-8"}, "地图")), a.createElement("li", null, a.createElement("b", null), a.createElement("a", {href: "https://m.baidu.com/ssid=0/from=0/bd_page_type=1/s?st=10a001&word=" + e}, "应用")), a.createElement("li", null, a.createElement("b", null), a.createElement("a", {href: "https://lvyou.baidu.com/search/webapp/scene?fr=news&ssid=0&from=0&bd_page_type=1&uid=&font=0&step=1&word=" + e}, "旅游")))))
            }, t.prototype.menuClickHandler = function (e) {
                e.preventDefault(), this.setState({showMenu: !this.state.showMenu})
            }, t.prototype.downloadClickHandler = function () {
                c.downloadApp()
            }, t.prototype.goBackHandle = function (e) {
                e.preventDefault(), history.back()
            }, t.prototype.goHomeHandle = function (e) {
                e.preventDefault(), i.default.push("/")
            }, t
        }(r.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = o
});
;
/*!/app/components/search/SearchListFooter/index.jsx*/
define("73574e3", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, o = e("53ab468"), l = e("6d58bc2"), a = e("237639b"), i = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = l.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            return o.createElement("div", {className: "searchlist-footer"}, o.createElement("ul", {className: "clearfix"}, o.createElement("li", null, o.createElement("b", null), o.createElement("a", {
                href: "#",
                onClick: this.feedbackHandle.bind(this),
                className: "feedback"
            }, "意见反馈")), o.createElement("li", null, o.createElement("b", null), o.createElement("a", {
                href: "http://wap.baidu.com/static/img/vsapp/webimageiphone.html",
                target: "_blank",
                className: "recommend"
            }, "应用推荐")), o.createElement("li", null, o.createElement("b", null), o.createElement("a", {
                href: "javascript:;",
                onClick: this.clientLinkHandler.bind(this),
                className: "client"
            }, "客户端"))))
        }, t.prototype.feedbackHandle = function (e) {
            e.preventDefault();
            var t = this.props.userinfo, n = t.BAIDUID || "null",
                o = ["https://ufosdk.baidu.com/?m=Client", "u=" + encodeURIComponent(encodeURIComponent(location.href)), "a=postView", "appid=2110", "product_type=10614", "bw=" + encodeURIComponent(n)].join("&");
            setTimeout(function () {
                location.href = o
            }, 600)
        }, t.prototype.clientLinkHandler = function () {
            a.downloadApp()
        }, t
    }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = i
});
;
/*!/app/fetch/search/searchResult.js*/
define("c24965a", function (e, r) {
    "use strict";

    function c(e, r, c) {
        var a = "/sn/api/search?&s={keyword}&pn={pn}&rn=20&ct={ct}";
        return a = a.replace("{keyword}", e), a = a.replace("{pn}", r), a = a.replace("{ct}", c), t.get(a)
    }

    var t = e("286d917");
    r.getSearchResultData = c
});
;
/*!/app/components/search/ResultList/index.jsx*/
define("a1b6dbb", function (t, e) {
    "use strict";
    var o = this && this.__extends || function (t, e) {
            function o() {
                this.constructor = t
            }

            for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }, a = t("53ab468"), s = t("6d58bc2"), n = t("f516060"), r = t("e199b57"), i = t("a34f2db"),
        l = t("73574e3"), p = t("c24965a"), c = t("c00263d"), d = t("c00263d"), u = function (t) {
            function e(o, a) {
                t.call(this, o, a), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this), this.state = {
                    resultList: [],
                    resultTotal: -1,
                    isLoadingMore: !1,
                    ct: "1",
                    ctChange: !1,
                    hasMore: !1
                }, e.pn = 0, this.props.name === e.locationKey && window.webappLocationFrom.indexOf("/searchpage/") > 0 && (e.pn = e.tmpPn)
            }

            return o(e, t), e.prototype.render = function () {
                var t = this.props.userinfo, e = t.baidubox,
                    o = (t.baidubox8, a.createElement("div", {className: "search-result-list-head"})),
                    s = a.createElement("div", {className: "noresultip"}, "暂无搜索结果，请尝试换个关键词");
                return a.createElement("div", {
                    ref: "sesultList",
                    style: {position: "relative"},
                    id: "sesultList"
                }, this.state.resultList.length ? a.createElement("div", null, o, a.createElement(r.default, {
                    newslist: this.state.resultList,
                    type: "search"
                }), this.state.hasMore ? a.createElement(i.default, {
                    loadmorefn: this.loadMoreData.bind(this),
                    isLoadingMore: this.state.isLoadingMore,
                    loadByClick: !1
                }) : "", e ? "" : a.createElement(l.default, {userinfo: t})) : this.state.resultTotal > -1 ? a.createElement("div", null, s) : a.createElement(n.default, null))
            }, e.prototype.orderChangeHandle = function (t) {
                t.stopPropagation();
                var e = this.state.ct, o = "1" === e ? "0" : "1";
                this.setState({ct: o})
            }, e.prototype.updateOrderChangeState = function () {
                this.setState({ctChange: !this.state.ctChange})
            }, e.prototype.componentWillMount = function () {
                this.props.name === e.locationKey && window.webappLocationFrom.indexOf("/searchpage/") > 0 && this.setState(e.tempState)
            }, e.prototype.componentDidMount = function () {
                var t = window.navigator.userAgent;
                return t.toLowerCase().indexOf("baiduboxapp") > 0 && t.toLowerCase().indexOf("baiduboxapp") > 0 && d.bindLazyload(), this.props.name === e.locationKey && window.webappLocationFrom.indexOf("/searchpage/") > 0 ? (window.scrollTo(0, e.tempScrollTop), void(e.tempScrollTop && !document.body.scrollTop && (this.refs.sesultList.scrollTop = e.tempScrollTop))) : void this.loadFirstPageData()
            }, e.prototype.componentWillUnmount = function () {
                e.locationKey = this.props.name, e.tempState = this.state, e.tempState.isLoadingMore = !1, e.tempScrollTop = document.body.scrollTop || document.documentElement.scrollTop || this.refs.sesultList.scrollTop, e.tmpPn = e.pn
            }, e.prototype.componentDidUpdate = function (t, o) {
                (this.props.name !== t.name || this.state.ct !== o.ct) && (e.pn = 0, this.reloadData())
            }, e.prototype.reloadData = function () {
                this.setState({
                    resultList: [],
                    resultTotal: -1,
                    isLoadingMore: !1,
                    ctChange: !1,
                    hasMore: !1
                }), this.loadFirstPageData(), c.trigglerLoadImgs()
            }, e.prototype.loadFirstPageData = function () {
                var t = this.props.name;
                this.loadData(t)
            }, e.prototype.loadMoreData = function () {
                var t = this.props.name;
                this.loadData(t, !0)
            }, e.prototype.loadData = function (t, o) {
                var a = this;
                o && this.setState({isLoadingMore: !0});
                var s = p.getSearchResultData(t, e.pn, this.state.ct);
                s.then(function (t) {
                    return t.json()
                }).then(function (t) {
                    if (0 !== t.errno) return void console.error("SearchResultList页面获取搜索结果数据出错，errno: " + t.errno);
                    var s = t.data.list || t.data.news || [], n = t.data.query || "";
                    s.forEach(function (t) {
                        t.ts = t.publicTime || t.sortTime || t.sourcets, t.imgUrl && (t.imageurls = [{url: t.imgUrl}]), t.imageurls[0] && (t.imageurls[0].url = t.imageurls[0].url_webp), t.title = t.title.replace(n, '<span class="searchQuery">' + n + "</span>")
                    });
                    var r = t.data.total || 0;
                    a.setState({
                        resultList: a.state.resultList.concat(s),
                        resultTotal: r,
                        hasMore: t.data.hasmore
                    }), e.pn += 10, o && a.setState({isLoadingMore: !1})
                })
            }, e
        }(a.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = u
});
;
/*!/app/containers/Search/SearchResultList.jsx*/
define("a334de0", function (e, t) {
    "use strict";

    function n(e) {
        return {userinfo: e.userinfo}
    }

    function o() {
        return {}
    }

    var r = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, s = e("53ab468"), a = e("6d58bc2"), i = e("53ab468"), u = e("f0a789e"), p = e("526e1c3"),
        f = e("24ea21a"), c = e("d64f521"), d = e("a1b6dbb"), l = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this), this.state = {}
            }

            return r(t, e), t.prototype.render = function () {
                return s.createElement("div", null, this.props.userinfo.baidubox ? "" : s.createElement(p.default, {
                    name: this.props.params.name,
                    userinfo: this.props.userinfo,
                    baidubox8: this.props.userinfo.baidubox8
                }), this.props.userinfo.baidubox ? s.createElement(c.default, {value: this.props.params.name}) : s.createElement(f.default, {value: this.props.params.name}), s.createElement(d.default, {
                    name: this.props.params.name,
                    userinfo: this.props.userinfo
                }))
            }, t
        }(i.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = u.connect(n, o)(l)
});
;
/*!/app/containers/Subscribe/index.jsx*/
define("e8ec560", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, i = t("53ab468"), r = t("53ab468"), o = t("425f183"), a = function (t) {
        function e() {
            t.apply(this, arguments)
        }

        return n(e, t), e.prototype.render = function () {
            var t = window._animateLinkTime || 0, e = Date.now() - t < 1e3;
            return i.createElement(o, {
                transitionName: "animate-slide-left",
                transitionAppear: e,
                transitionAppearTimeout: 500,
                transitionEnterTimeout: 500,
                transitionLeaveTimeout: 300
            }, this.props.children)
        }, e
    }(r.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = a
});
;
/*!/app/components/subscribe/SubscribeList/Item/index.jsx*/
define("e3520d8", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, s = e("53ab468"), i = e("6d58bc2"), o = e("53ab468"), a = e("557cc4f"), p = e("11e0dbb"),
        r = e("7761247"), c = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this), this.state = {}
            }

            return n(t, e), t.prototype.render = function () {
                {
                    var e = this.props.data, t = this.props.lsData, n = !1;
                    this.props.type
                }
                if (t.map(function (t) {
                    t.name == e.name && (n = !0)
                }), "本地" == e.name && r.default.getItem(p.CITY_INFO)) {
                    var i = r.default.getItem(p.CITY_INFO);
                    e.name = JSON.parse(i).name, e.id = JSON.parse(i).id
                }
                return s.createElement("div", {className: "item-wrapper"}, s.createElement("div", {
                    className: n ? "item off" : "item on",
                    id: e.id,
                    name: encodeURIComponent(e.name),
                    type: e.type,
                    ref: "item"
                }, s.createElement("span", {
                    className: "name",
                    onClick: this.toPage.bind(this)
                }, e.name), s.createElement("span", {
                    className: "icon",
                    onClick: this.toggleSubscribe.bind(this)
                })))
            }, t.prototype.componentDidMount = function () {
            }, t.prototype.toggleSubscribe = function () {
                "item on" == this.refs.item.className ? (this.refs.item.className = "item off", this.props.setSubscribeFn("add", this.props.data), window._hmt.push(["_trackEvent", "subscribe", "click", "add"])) : (this.refs.item.className = "item on", this.props.setSubscribeFn("minus", this.props.data), window._hmt.push(["_trackEvent", "subscribe", "click", "del"]))
            }, t.prototype.toPage = function () {
                var e, t = this.props.type, n = this.props.data;
                "news" == t ? (e = "/newslist/other/news/" + n.id + "/" + encodeURIComponent(n.name), a.default.push(e)) : "tag" == t && (e = "/newslist/other/tag/" + encodeURIComponent(n.name), a.default.push(e))
            }, t
        }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = c
});
;
/*!/app/components/subscribe/SubscribeList/index.jsx*/
define("ae75c95", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, s = t("53ab468"), o = t("6d58bc2"), i = t("53ab468"), r = t("e3520d8"), p = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this), this.state = {}
        }

        return n(e, t), e.prototype.render = function () {
            var t = this;
            return s.createElement("div", {
                className: "subscribe-view-section",
                title: this.props.title,
                type: this.props.type
            }, s.createElement("div", {className: "subscribe-list"}, s.createElement("dl", null, s.createElement("dd", null, this.props.data.map(function (e, n) {
                return s.createElement(r.default, {
                    data: e,
                    key: "SubscribeList_" + n,
                    title: t.props.title,
                    setSubscribeFn: t.setSubscribe.bind(t),
                    lsData: t.props.lsData,
                    type: t.props.type
                })
            })))))
        }, e.prototype.componentDidMount = function () {
        }, e.prototype.setSubscribe = function (t, e) {
            this.props.setSubscribeFn(t, e)
        }, e
    }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = p
});
;
/*!/app/fetch/subscribe/subscribe.js*/
define("23d8716", function (e, t) {
    "use strict";

    function i(e) {
        var t = "/news?tn=bdapibaiyue&t=getrecommendlist&act=get",
            i = {mid: "03c7a16f2e8028127e42c5f7ca9e210b", type: "media", id: e}, a = d.post(t, i);
        return a
    }

    function a(e) {
        var t = "/news?tn=bdapibaiyue&t=getrecommendlist&act=get",
            i = {mid: "03c7a16f2e8028127e42c5f7ca9e210b", type: "channel", id: e}, a = d.post(t, i);
        return a
    }

    function n(e) {
        var t = "/news?tn=bdapibaiyue&t=getrecommendlist&act=get",
            i = {mid: "03c7a16f2e8028127e42c5f7ca9e210b", type: "tag", id: e}, a = d.post(t, i);
        return a
    }

    function c(e) {
        var t = "/news?tn=bdapibaiyue&t=getrecommendlist&act=get",
            i = {mid: "03c7a16f2e8028127e42c5f7ca9e210b", type: "author", id: e}, a = d.post(t, i);
        return a
    }

    function r(e) {
        var t = "/news?tn=bdapibaiyue&t=suggestion&act=get", i = {ver: 2, type: "", wd: e},
            a = d.post(t, i);
        return a
    }

    e("89c93f8"), e("48b4cd1");
    var d = e("c2909ec");
    t.getMediaList = i, t.getChannelList = a, t.getTagList = n, t.getAuthorList = c, t.getSearchList = r
});
;
/*!/app/containers/Subscribe/home.jsx*/
define("8d5cbc1", function (t, e) {
    "use strict";

    function s(t) {
        return {userinfo: t.userinfo, nav: t.nav}
    }

    function a(t) {
        return {navActions: h.bindActionCreators(f, t)}
    }

    var i = this && this.__extends || function (t, e) {
            function s() {
                this.constructor = t
            }

            for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
            t.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s)
        }, n = t("53ab468"), o = t("6d58bc2"), r = t("53ab468"), h = t("ecb7045"), c = t("f0a789e"),
        l = t("d9ac10b"), d = t("3c76f40"), u = t("ae75c95"), p = t("34f6781"), f = t("0ad32a9"),
        b = t("23d8716"), g = t("7358dc6"), m = function (t) {
            function e(e, s) {
                t.call(this, e, s), this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this), this.state = {
                    medialist: [],
                    channellist: [],
                    taglist: [],
                    authorlist: [],
                    isShowTip: !1,
                    mediaId: 0,
                    tagId: 0,
                    channelId: 0,
                    authorId: 0,
                    navTitle: 0,
                    tipInfo: "",
                    lsData: [],
                    pushData: []
                }
            }

            return i(e, t), e.prototype.render = function () {
                return n.createElement("div", {id: "subscribe_view"}, n.createElement(d.default, {
                    type: "subscribe",
                    title: "订阅中心",
                    baidubox8: this.props.userinfo.baidubox8
                }), n.createElement(l.Link, {
                    id: "subscribe_view_search",
                    to: "/subscribe/search"
                }, n.createElement("div", {className: "search-box"}, "搜索任意关键词即可订阅")), n.createElement("div", {id: "subscribe_view_content"}, n.createElement("div", {
                    className: "nav",
                    ref: "nav"
                }, n.createElement("b", {
                    title: "0",
                    className: "a on",
                    onClick: this.changeNav.bind(this)
                }, "媒体"), n.createElement("b", {
                    title: "1",
                    className: "a",
                    onClick: this.changeNav.bind(this)
                }, "频道"), n.createElement("b", {
                    title: "2",
                    className: "a",
                    onClick: this.changeNav.bind(this)
                }, "话题"), n.createElement("b", {
                    className: "refresh",
                    onClick: this.updateList.bind(this),
                    ref: "refresh"
                }, "换一批")), n.createElement("div", {
                    className: "subscribe-view-container",
                    ref: "subscribeLis"
                }, this.state.medialist.length ? n.createElement(u.default, {
                    data: this.state.medialist,
                    title: "0",
                    setSubscribeFn: this.setSubscribe.bind(this),
                    lsData: this.state.lsData,
                    type: "news"
                }) : n.createElement("div", {style: {display: "none"}}), this.state.channellist.length ? n.createElement(u.default, {
                    data: this.state.channellist,
                    title: "1",
                    setSubscribeFn: this.setSubscribe.bind(this),
                    lsData: this.state.lsData,
                    type: "channel"
                }) : n.createElement("div", {style: {display: "none"}}), this.state.taglist.length ? n.createElement(u.default, {
                    data: this.state.taglist,
                    title: "2",
                    setSubscribeFn: this.setSubscribe.bind(this),
                    lsData: this.state.lsData,
                    type: "tag"
                }) : n.createElement("div", {style: {display: "none"}})), n.createElement(l.Link, {
                    className: "subscribe-view-mgrsub",
                    to: "/subscribe/manage"
                }, "管理我的订阅")), this.state.isShowTip ? n.createElement(p.default, {info: this.state.tipInfo}) : n.createElement("div", {style: {display: "none"}}))
            }, e.prototype.componentDidMount = function () {
                this.getMediaData(), this.getChannelData(), this.getTagData(), this.getLsdata()
            }, e.prototype.componentDidUpdate = function () {
                this.renderList()
            }, e.prototype.getMediaData = function () {
                var t = this, e = b.getMediaList(this.state.mediaId);
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    var s = e.data.media, a = s.length, i = 0;
                    s.map(function (t, e) {
                        e == a - 1 && (i = t.id)
                    }), t.setState({medialist: s, mediaId: i})
                })
            }, e.prototype.getChannelData = function () {
                var t = this, e = b.getChannelList(this.state.channelId);
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    var s = e.data.channel, a = s.length, i = 0;
                    s.map(function (t, e) {
                        e == a - 1 && (i = t.id)
                    }), t.setState({channellist: s, channelId: i})
                })
            }, e.prototype.getLsdata = function () {
                if (this.props.userinfo.isLogIn) this.setState({
                    lsData: this.props.nav.tag,
                    pushData: this.props.nav.push
                }); else {
                    var t = g.getLocalNav();
                    this.setState({lsData: t.tag, pushData: t.push})
                }
            }, e.prototype.getTagData = function () {
                var t = this, e = b.getTagList(this.state.tagId);
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    var s = e.data.tag, a = s.length, i = 0;
                    s.map(function (t, e) {
                        e == a - 1 && (i = t.id)
                    }), t.setState({taglist: s, tagId: i})
                })
            }, e.prototype.getAuthorData = function () {
                var t = this, e = b.getAuthorList(this.state.authorId);
                e.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    var s = e.data.author, a = s.length, i = 0;
                    s.map(function (t, e) {
                        e == a - 1 && (i = t.id)
                    }), t.setState({authorlist: s, authorId: i})
                })
            }, e.prototype.showTip = function (t, e) {
                "add" == t ? this.setState({
                    isShowTip: !0,
                    tipInfo: "成功添加到导航:" + e
                }) : "minus" == t && this.setState({
                    isShowTip: !0,
                    tipInfo: "成功从导航中移除:" + e
                }), setTimeout(function () {
                    this.setState({isShowTip: !1})
                }.bind(this), 1e3)
            }, e.prototype.renderList = function () {
                var t, e, s, a = this.refs.subscribeLis.childNodes, i = this.refs.nav.childNodes, n = 0;
                for (e = 0; e < i.length; e++) s = i[e], "a on" == s.className && (n = s.title);
                for (t = 0; t < a.length; t++) s = a[t], s.style.display = s.title == n ? "block" : "none"
            }, e.prototype.changeNav = function (t) {
                var e, s = this.refs.nav.childNodes, a = this.refs.subscribeLis.childNodes,
                    i = a.length;
                for (e = 0; i > e; e++) s[e].className = "a";
                for (t.target.className = "a on", this.refs.refresh.className = "1" == t.target.title ? "refreshDis" : "refresh", e = 0; i > e; e++) {
                    var n = a[e];
                    n.style.display = n.title == t.target.title ? "block" : "none"
                }
            }, e.prototype.updateList = function () {
                var t, e = this.refs.subscribeLis.childNodes, s = e.length;
                if ("refreshDis" != this.refs.refresh.className) for (t = 0; s > t; t++) {
                    var a = e[t];
                    "block" == a.style.display && ("0" == a.title ? this.getMediaData() : "2" == a.title ? this.getTagData() : "3" == a.title && this.getAuthorData())
                }
            }, e.prototype.setSubscribe = function (t, e) {
                var s = {tag: this.state.lsData, push: this.state.pushData};
                "add" === t ? this.props.navActions.add(s, e, this.props.userinfo.isLogIn) : "minus" === t && this.props.navActions.minus(s, e, this.props.userinfo.isLogIn)
            }, e
        }(r.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = c.connect(s, a)(m)
});
;
/*!/app/components/subscribe/SubscribeManageList/drag.jsx*/
define("4a2ff1c", function (t, e) {
    "use strict";

    function n(t, e, n, r, v) {
        C = e, Y = n, w = r, i(D, H, v), H = Y, D = C, M = !0, a(Y), p(Y), u(Y), s(Y), c(), m(t.targetTouches), o(Y, w), f(Y, S), Y.setAttribute("class", "moving"), t.preventDefault(), C.addEventListener("touchmove", function (t) {
            y || (y = !0, T = t.targetTouches, g(T), m(T), f(Y, S), l(), d(Y, T), setTimeout(function () {
                y = !1
            }, 30)), t.preventDefault()
        }, !1), C.addEventListener("touchend", function (t) {
            t.preventDefault(), y = !1, i(C, Y, w, v)
        }, !1)
    }

    function i(t, e, n, i) {
        M && (r(e, n), e.setAttribute("class", ""), i && i(e, x(e)), M = !1, e = null, t = null, n = null)
    }

    function o(t, e) {
        t.parentNode.insertBefore(e, t), e.setAttribute("class", "")
    }

    function l() {
        var t, e = Math.floor((N.top + A) / A + .5);
        if (e > L) {
            t = e - L;
            var n = w.nextElementSibling;
            for (n.getAttribute("class") && n.getAttribute("class").match(/moving/) && (n = n.nextElementSibling); --t > 0;) n = n.nextElementSibling, n.getAttribute("class") && n.getAttribute("class").match(/moving/) && (n = n.nextElementSibling);
            h(w, n), L = e
        } else if (L > e) {
            t = L - e;
            var i = w.previousElementSibling;
            for (i.getAttribute("class") && i.getAttribute("class").match(/moving/) && (i = i.previousElementSibling); --t > 0;) i = i.previousElementSibling, i.getAttribute("class") && i.getAttribute("class").match(/moving/) && (i = i.previousElementSibling);
            i.parentNode.insertBefore(w, i), L = e
        }
    }

    function r(t, e) {
        t.parentNode.insertBefore(t, e), t.style.top = "0px", t.style.position = "relative", e.setAttribute("class", "nodis"), t.parentNode.insertBefore(e, t.parentNode.children[0])
    }

    function s(t) {
        A = b(t)
    }

    function u(t) {
        L = x(t)
    }

    function p(t) {
        B.minTop = 0, B.maxTop = t.parentNode.lastChild.offsetTop
    }

    function a(t) {
        N.top = parseInt(t.offsetTop) || 0
    }

    function c() {
        S.x = 0, S.y = 0
    }

    function f(t, e) {
        N.top += e.y, N.left += e.x, N.top < B.minTop && (N.top = B.minTop), N.top > B.maxTop && (N.top = B.maxTop), t.style.top = N.top + "px", t.style.left = "0px", t.style.right = "0px", t.style.position = "absolute"
    }

    function m(t) {
        var e = t[0];
        E.x = e.clientX, E.y = e.clientY
    }

    function g(t) {
        var e = t[0];
        S.x = e.clientX - E.x, S.y = e.clientY - E.y
    }

    function d(t, e) {
        var n = e[0];
        n.clientY <= A + 5 ? (window.scrollBy(0, -10), v(t, 0, -10)) : n.clientY >= window.innerHeight - A - 5 && (window.scrollBy(0, 10), v(t, 0, 10))
    }

    function v(t, e, n) {
        N.top += n, N.left += e, N.top < B.minTop && (N.top = B.minTop), N.top > B.maxTop && (N.top = B.maxTop), t.style.top = N.top + "px", l()
    }

    function x(t) {
        for (var e = t.parentNode, n = 0; n < e.children.length; n++) if (t.innerHTML == e.children[n].innerHTML) return n;
        return -1
    }

    function b(t) {
        return t.offsetHeight
    }

    function h(t, e) {
        var n = e.parentNode;
        n.lastChild == e ? n.appendChild(t) : n.insertBefore(t, e.nextSibling)
    }

    var T, y = !1, A = 42, E = {x: 0, y: 0}, S = {x: 0, y: 0}, N = {top: 0, left: 0},
        B = {minTop: 0, maxTop: 0}, w = null, D = null, H = null, L = 0, Y = null, C = null, M = !1;
    e.startDrag = n
});
;
/*!/app/components/subscribe/SubscribeManageList/Item/index.jsx*/
define("a562d8f", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, s = e("53ab468"), i = e("6d58bc2"), o = e("53ab468"), a = e("d9ac10b"), r = e("4a2ff1c");
    e("./style.less");
    var c = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = i.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props.item;
            return "zhiding" == this.props.type ? s.createElement("li", {
                "data-id": e.id,
                "data-type": e.type
            }, s.createElement(a.Link, {
                className: "name",
                to: "/newslist/other/news/" + e.id + "/" + encodeURIComponent(e.name)
            }, e.name), s.createElement("span", {className: "ontop"}, "置顶")) : "placeholder" == e.type ? s.createElement("li", {
                className: "nodis",
                id: "phLi"
            }) : s.createElement("li", {
                "data-id": e.id,
                "data-type": e.type,
                ref: "subscribeLi",
                draggable: "true"
            }, s.createElement(a.Link, {
                className: "name",
                to: "/newslist/other/news/" + e.id + "/" + encodeURIComponent(e.name)
            }, e.name), s.createElement("span", {
                className: "delete",
                onClick: this.showDelBtn.bind(this),
                ref: "delBtn"
            }), s.createElement("span", {
                className: "handle",
                ref: "handle",
                onTouchStart: this.touchstart.bind(this),
                onTouchEnd: this.touchend.bind(this)
            }, "移动"), s.createElement("span", {
                className: "confirm-delete",
                onClick: this.delSubscribe.bind(this),
                ref: "confirmBtn"
            }, "删除"))
        }, t.prototype.componentDidMount = function () {
        }, t.prototype.delSubscribe = function () {
            this.refs.subscribeLi.style.display = "none", this.props.setSubscribeFn(this.props.item), window._hmt.push(["_trackEvent", "subscribe", "click", "del"])
        }, t.prototype.showDelBtn = function () {
            this.refs.delBtn.className.match(/rotate/) ? (this.refs.delBtn.className = "delete", this.refs.confirmBtn.style.display = "none") : (this.refs.delBtn.className = "delete rotate", this.refs.confirmBtn.style.display = "inline")
        }, t.prototype.touchstart = function (e) {
            r.startDrag(e, this.refs.handle, this.refs.subscribeLi, document.getElementById("phLi"), this.setLsdataOrder.bind(this)), e.preventDefault()
        }, t.prototype.touchend = function () {
        }, t.prototype.setLsdataOrder = function (e, t) {
            this.props.setLsdataOrderFn(e, t)
        }, t
    }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = c
});
;
/*!/app/components/subscribe/SubscribeManageList/index.jsx*/
define("3b8f04b", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, s = t("53ab468"), a = t("53ab468"), r = t("a562d8f"), i = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.state = {lsData: [{name: "", type: "placeholder"}]}
        }

        return n(e, t), e.prototype.render = function () {
            var t = this;
            return s.createElement("div", {className: "list-container"}, s.createElement("ul", null, this.state.lsData.map(function (e, n) {
                return "chosen" == e.type ? s.createElement(r.default, {
                    item: e,
                    key: "SubscribeManageListItem_" + n,
                    type: "zhiding",
                    setSubscribeFn: t.setSubscribe.bind(t)
                }) : void 0
            })), s.createElement("ul", null, this.state.lsData.map(function (e, n) {
                return "chosen" != e.type ? s.createElement(r.default, {
                    item: e,
                    key: "SubscribeManageListItem_" + n,
                    setSubscribeFn: t.setSubscribe.bind(t),
                    setLsdataOrderFn: t.setLsdataOrder.bind(t)
                }) : void 0
            })))
        }, e.prototype.componentDidMount = function () {
            this.setState({lsData: this.state.lsData.concat(this.props.lsData)})
        }, e.prototype.setSubscribe = function (t) {
            this.props.setSubscribeFn(t)
        }, e.prototype.setLsdataOrder = function (t, e) {
            this.props.setLsdataOrderFn(t, e)
        }, e
    }(a.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = i
});
;
/*!/app/containers/Subscribe/Manage.jsx*/
define("3c6f001", function (t, e) {
    "use strict";

    function s(t) {
        return {userinfo: t.userinfo, nav: t.nav}
    }

    function a(t) {
        return {navActions: r.bindActionCreators(u, t)}
    }

    var i = this && this.__extends || function (t, e) {
            function s() {
                this.constructor = t
            }

            for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
            t.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s)
        }, n = t("53ab468"), o = t("53ab468"), r = t("ecb7045"), p = t("f0a789e"), u = t("0ad32a9"),
        h = t("3c76f40"), c = t("34f6781"), l = t("3b8f04b"), f = function (t) {
            function e(e, s) {
                t.call(this, e, s), this.state = {lsData: [], pushData: [], isShowTip: !1, tipInfo: ""}
            }

            return i(e, t), e.prototype.render = function () {
                return n.createElement("div", {id: "managesubscribe_view"}, n.createElement(h.default, {
                    type: "managesubscribe",
                    title: "订阅管理",
                    baidubox8: this.props.userinfo.baidubox8
                }), n.createElement("div", {id: "managesubscribe_list"}, n.createElement("h3", null, "已有", n.createElement("span", null, this.state.lsData.length), "个订阅"), this.state.lsData.length ? n.createElement(l.default, {
                    lsData: this.state.lsData,
                    setSubscribeFn: this.setSubscribe.bind(this),
                    setLsdataOrderFn: this.setLsdataOrder.bind(this)
                }) : ""), this.state.isShowTip ? n.createElement(c.default, {info: this.state.tipInfo}) : n.createElement("div", {style: {display: "none"}}))
            }, e.prototype.componentDidMount = function () {
                this.setState({lsData: this.props.nav.tag, pushData: this.props.nav.push})
            }, e.prototype.setSubscribe = function (t) {
                var e = {tag: this.state.lsData, push: this.state.pushData};
                this.props.navActions.minus(e, t, this.props.userinfo.isLogIn)
            }, e.prototype.showTip = function (t) {
                this.setState({isShowTip: !0, tipInfo: "成功从导航中移除:" + t}), setTimeout(function () {
                    this.setState({isShowTip: !1})
                }.bind(this), 1e3)
            }, e.prototype.setLsdataOrder = function (t, e) {
                var s, a = this, i = t.childNodes[0].innerHTML, n = 0;
                this.state.lsData.map(function (t, e) {
                    return t.name == i ? (n = e, s = t, void a.state.lsData.splice(n, 1)) : void 0
                }), this.state.lsData.splice(e, 0, s), this.setState({lsData: this.state.lsData});
                var o = {tag: this.state.lsData, push: this.state.pushData};
                this.props.navActions.update(o, this.props.userinfo.isLogIn)
            }, e
        }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = p.connect(s, a)(f)
});
;
/*!/app/components/subscribe/SubscribeSearchList/tagItem/item.jsx*/
define("45c552a", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, s = e("53ab468"), o = e("6d58bc2"), i = e("53ab468"), a = e("d9ac10b"), r = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this), this.state = {}
        }

        return n(t, e), t.prototype.render = function () {
            var e, t = this.props.item, n = this.props.lsData;
            return n.length && n.map(function (n) {
                n.name == t.name && n.type == t.type ? e = "item off" : null == e && (e = "item on")
            }), s.createElement("div", {
                className: e,
                ref: "item"
            }, "search" == t.type ? s.createElement(a.Link, {
                className: "name",
                to: "/search/" + encodeURIComponent(t.name)
            }, t.name) : s.createElement(a.Link, {
                className: "name",
                to: "/newslist/other/tag/" + encodeURIComponent(t.name)
            }, t.name), s.createElement("span", {
                className: "icon",
                onClick: this.toggleSubscribe.bind(this)
            }))
        }, t.prototype.toggleSubscribe = function () {
            "item on" == this.refs.item.className ? (this.refs.item.className = "item off", this.props.setSubscribeFn("add", this.props.item)) : (this.refs.item.className = "item on", this.props.setSubscribeFn("minus", this.props.item))
        }, t
    }(i.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
});
;
/*!/app/components/subscribe/SubscribeSearchList/tagItem/index.jsx*/
define("48a4138", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, s = t("53ab468"), r = t("6d58bc2"), o = t("53ab468"), i = t("45c552a"), a = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this), this.state = {}
        }

        return n(e, t), e.prototype.render = function () {
            var t = this;
            return s.createElement("div", {className: "searchResult"}, this.props.data.map(function (e, n) {
                return s.createElement(i.default, {
                    item: e,
                    key: "SubscribeSearchList_" + n,
                    lsData: t.props.lsData,
                    setSubscribeFn: t.setSubscribe.bind(t)
                })
            }))
        }, e.prototype.setSubscribe = function (t, e) {
            this.props.setSubscribeFn(t, e)
        }, e
    }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = a
});
;
/*!/app/components/subscribe/SubscribeSearchList/otherItem/item.jsx*/
define("f2abcd9", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, i = e("53ab468"), s = e("6d58bc2"), o = e("53ab468"), a = e("d9ac10b"), r = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = s.shouldComponentUpdate.bind(this), this.state = {}
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props.item, t = this.props.lsData, n = "item with-image on";
            return t.length && t.map(function (t) {
                n = t.name == e.name && t.type == e.type ? "item with-image off" : "item with-image on"
            }), i.createElement("div", {
                className: n,
                ref: "item"
            }, i.createElement("span", {
                className: "icon",
                onClick: this.toggleSubscribe.bind(this)
            }), i.createElement(a.Link, {to: "/newslist/other/news/" + e.id + "/" + encodeURIComponent(e.name)}, i.createElement("img", {src: e.logourl})), i.createElement(a.Link, {
                to: "/newslist/other/news/" + e.id + "/" + encodeURIComponent(e.name),
                className: "name"
            }, e.name), i.createElement(a.Link, {
                to: "/newslist/other/news/" + e.id + "/" + encodeURIComponent(e.name),
                className: "users"
            }, e.user, "人关注"))
        }, t.prototype.toggleSubscribe = function () {
            "item with-image on" == this.refs.item.className ? (this.refs.item.className = "item with-image off", this.props.setSubscribeFn("add", this.props.item)) : (this.refs.item.className = "item with-image on", this.props.setSubscribeFn("minus", this.props.item))
        }, t
    }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
});
;
/*!/app/components/subscribe/SubscribeSearchList/otherItem/index.jsx*/
define("3c6fba7", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, s = t("53ab468"), r = t("6d58bc2"), o = t("53ab468"), i = t("f2abcd9"), a = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this), this.state = {}
        }

        return n(e, t), e.prototype.render = function () {
            var t = this;
            return s.createElement("div", {className: "searchResult"}, this.props.data.map(function (e, n) {
                return s.createElement(i.default, {
                    item: e,
                    key: "SubscribeSearchList_" + n,
                    lsData: t.props.lsData,
                    setSubscribeFn: t.setSubscribe.bind(t)
                })
            }))
        }, e.prototype.setSubscribe = function (t, e) {
            this.props.setSubscribeFn(t, e)
        }, e
    }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = a
});
;
/*!/app/components/subscribe/SubscribeSearchList/index.jsx*/
define("d0c54cb", function (t, e) {
    "use strict";
    var s = this && this.__extends || function (t, e) {
            function s() {
                this.constructor = t
            }

            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            t.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s)
        }, i = t("53ab468"), l = t("6d58bc2"), n = t("53ab468"), a = t("48a4138"), r = t("3c6fba7"),
        p = function (t) {
            function e(e, s) {
                t.call(this, e, s), this.shouldComponentUpdate = l.shouldComponentUpdate.bind(this), this.state = {}
            }

            return s(e, t), e.prototype.render = function () {
                return i.createElement("div", {id: "searchsubscribe_list"}, this.props.taglist && this.props.taglist.length ? i.createElement("h3", null, "话题(", this.props.taglist.length, ")") : i.createElement("div", {style: {display: "none"}}), this.props.taglist && this.props.taglist.length ? i.createElement(a.default, {
                    data: this.props.taglist,
                    lsData: this.props.lsData,
                    setSubscribeFn: this.setSubscribe.bind(this)
                }) : i.createElement("div", {style: {display: "none"}}), this.props.medialist && this.props.medialist.length ? i.createElement("h3", null, "媒体(", this.props.medialist.length, ")") : i.createElement("div", {style: {display: "none"}}), this.props.medialist && this.props.medialist.length ? i.createElement(r.default, {
                    data: this.props.medialist,
                    lsData: this.props.lsData,
                    setSubscribeFn: this.setSubscribe.bind(this)
                }) : i.createElement("div", {style: {display: "none"}}), this.props.authorlist && this.props.authorlist.length ? i.createElement("h3", null, "作家(", this.props.authorlist.length, ")") : i.createElement("div", {style: {display: "none"}}), this.props.authorlist && this.props.authorlist.length ? i.createElement(r.default, {
                    data: this.props.authorlist,
                    lsData: this.props.lsData,
                    setSubscribeFn: this.setSubscribe.bind(this)
                }) : i.createElement("div", {style: {display: "none"}}))
            }, e.prototype.setSubscribe = function (t, e) {
                this.props.setSubscribeFn(t, e)
            }, e
        }(n.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = p
});
;
/*!/app/containers/Subscribe/Search.jsx*/
define("a87ef6f", function (t, e) {
    "use strict";

    function s(t) {
        return {userinfo: t.userinfo, nav: t.nav}
    }

    function a(t) {
        return {navActions: o.bindActionCreators(c, t)}
    }

    var i = this && this.__extends || function (t, e) {
            function s() {
                this.constructor = t
            }

            for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
            t.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s)
        }, n = t("53ab468"), r = t("53ab468"), o = t("ecb7045"), l = t("f0a789e"), h = t("d9ac10b"),
        c = t("0ad32a9"), p = t("3c76f40"), u = t("d0c54cb"), d = t("34f6781"), f = t("23d8716"),
        m = t("7358dc6"), b = function (t) {
            function e(e, s) {
                t.call(this, e, s), this.state = {
                    keyword: "",
                    taglist: [],
                    medialist: [],
                    authorlist: [],
                    lsData: [],
                    pushData: [],
                    isShowTip: !1,
                    tipInfo: ""
                }
            }

            return i(e, t), e.prototype.render = function () {
                return n.createElement("div", {id: "searchsubscribe_view"}, n.createElement(p.default, {
                    type: "searchsubscribe",
                    title: "搜索订阅",
                    baidubox8: this.props.userinfo.baidubox8
                }), n.createElement("div", {id: "searchsubscribe_searchbox"}, n.createElement("div", {className: "simple-searchbox"}, n.createElement("form", null, n.createElement("input", {
                    type: "text",
                    maxLength: "20",
                    placeholder: "搜索任意关键词即可订阅",
                    onChange: this.searchwd.bind(this),
                    ref: "searchinput"
                }), n.createElement("span", {
                    ref: "closebtn",
                    onClick: this.clearWd.bind(this)
                })))), n.createElement("div", {
                    className: "search-relatednews",
                    ref: "relatednews"
                }, n.createElement(h.Link, {
                    className: "relatednews",
                    to: "/search/" + encodeURIComponent(this.state.keyword)
                }, "搜索“", n.createElement("span", null, this.state.keyword), "”的相关新闻")), n.createElement(u.default, {
                    taglist: this.state.taglist,
                    medialist: this.state.medialist,
                    authorlist: this.state.authorlist,
                    lsData: this.state.lsData,
                    setSubscribeFn: this.setSubscribe.bind(this)
                }), this.state.isShowTip ? n.createElement(d.default, {info: this.state.tipInfo}) : n.createElement("div", {style: {display: "none"}}))
            }, e.prototype.componentDidMount = function () {
                if (this.props.userinfo.isLogIn) this.setState({
                    lsData: this.props.nav.tag,
                    pushData: this.props.nav.push
                }); else {
                    var t = m.getLocalNav();
                    this.setState({lsData: t.tag, pushData: t.push})
                }
            }, e.prototype.searchwd = function () {
                var t = this, e = this.trim(this.refs.searchinput.value);
                if (e.length) {
                    this.refs.closebtn.style.display = "block", this.refs.relatednews.style.display = "block", this.setState({keyword: this.refs.searchinput.value});
                    var s = f.getSearchList(e);
                    s.then(function (t) {
                        return t.json()
                    }).then(function (e) {
                        var s = e.data;
                        t.setState({taglist: s.tag, medialist: s.media, authorlist: s.author})
                    })
                } else this.clearWd()
            }, e.prototype.trim = function (t) {
                return t.replace(/(^\s*)|(\s*$)/g, "")
            }, e.prototype.clearWd = function () {
                this.refs.closebtn.style.display = "none", this.refs.relatednews.style.display = "none", this.refs.searchinput.value = "", this.setState({
                    taglist: [],
                    medialist: [],
                    authorlist: []
                })
            }, e.prototype.setSubscribe = function (t, e) {
                var s = this, a = {name: e.name, type: e.type};
                if (e.id && (a.id = e.id), "add" == t) {
                    {
                        this.state.lsData.push(a)
                    }
                    this.setState({lsData: this.state.lsData}), this.showTip("add", e.name)
                } else "minus" == t && this.state.lsData.map(function (t, a) {
                    if (t.name == e.name) {
                        {
                            s.state.lsData.splice(a, 1)
                        }
                        s.setState({lsData: s.state.lsData}), s.showTip("minus", t.name)
                    }
                });
                var i = {tag: this.state.lsData, push: this.state.pushData};
                this.props.navActions.update(i, this.props.userinfo.isLogIn, !0)
            }, e.prototype.showTip = function (t, e) {
                "add" == t ? this.setState({
                    isShowTip: !0,
                    tipInfo: "成功添加到导航:" + e
                }) : "minus" == t && this.setState({
                    isShowTip: !0,
                    tipInfo: "成功从导航中移除:" + e
                }), setTimeout(function () {
                    this.setState({isShowTip: !1})
                }.bind(this), 1e3)
            }, e
        }(r.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = l.connect(s, a)(b)
});
;
/*!/app/containers/Other/index.jsx*/
define("d8d2e25", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, r = t("53ab468"), o = t("53ab468"), i = function (t) {
        function e() {
            t.apply(this, arguments)
        }

        return n(e, t), e.prototype.render = function () {
            return r.createElement("div", null, this.props.children)
        }, e
    }(o.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = i
});
;
/*!/app/containers/Other/RankMedia.jsx*/
define("5fd0832", function (t, e) {
    "use strict";
    var n = this && this.__extends || function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }, o = t("53ab468"), r = t("6d58bc2"), i = t("53ab468"), u = function (t) {
        function e(e, n) {
            t.call(this, e, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(e, t), e.prototype.render = function () {
            return o.createElement("h1", null, "RankMedia container")
        }, e
    }(i.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = u
});
;
/*!/app/containers/Other/RankReporter.jsx*/
define("ceee42e", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, o = e("53ab468"), r = e("6d58bc2"), i = e("53ab468"), c = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            return o.createElement("h1", null, "RankReporter container")
        }, t
    }(i.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = c
});
;
/*!/app/components/other/topic/TopicImgHead/index.jsx*/
define("e39737a", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, r = e("53ab468"), a = e("6d58bc2"), o = e("d9ac10b"), i = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props.data, t = e.nid, n = e.title, a = e.abs,
                i = e.imageurls && e.imageurls[0] && e.imageurls[0].url || "";
            return r.createElement("div", {className: "topic-head-container"}, r.createElement(o.Link, {to: "/detail/" + t}, r.createElement("div", {className: "img-container"}, r.createElement("img", {
                src: i,
                alt: n
            })), r.createElement("h3", null, n), r.createElement("p", null, a)))
        }, t
    }(r.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = i
});
;
/*!/app/components/other/topic/SubList/index.jsx*/
define("7be6cc7", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, o = e("53ab468"), r = e("6d58bc2"), s = e("e199b57"), a = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props.data, t = e.name, n = e.news;
            return o.createElement("div", {className: "top-sublist-container"}, o.createElement("p", {className: "title"}, t), o.createElement(s.default, {newslist: n}))
        }, t
    }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
});
;
/*!/app/fetch/other/topic.js*/
define("0b302e7", function (t, e) {
    "use strict";

    function n(t) {
        var e = "/news?tn=bdapibaiyue&t=getzinfo&act=get&rand=" + Math.random(), n = {z_id: t},
            i = a.post(e, n);
        return i
    }

    var a = t("c2909ec");
    e.getTopicData = n
});
;
/*!/app/containers/Other/Topic.jsx*/
define("9d3e409", function (t, e) {
    "use strict";

    function n(t) {
        return {userinfo: t.userinfo}
    }

    function o() {
        return {}
    }

    var i = this && this.__extends || function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, a = t("53ab468"), r = t("6d58bc2"), l = t("f0a789e"), u = t("3c76f40"), s = t("f516060"),
        d = t("e39737a"), c = t("7be6cc7"), p = t("0b302e7"), h = function (t) {
            function e(e, n) {
                t.call(this, e, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this), this.state = {
                    loading: !0,
                    head: {},
                    column: [],
                    title: "",
                    headtitle: ""
                }
            }

            return i(e, t), e.prototype.render = function () {
                var t = /light/.test(navigator.userAgent),
                    e = a.createElement("div", null, a.createElement(d.default, {data: this.state.head}), this.state.column.map(function (t, e) {
                        return a.createElement(c.default, {key: e, data: t})
                    }));
                if (t) if (this.props.userinfo.baidubox8) var n = a.createElement(u.default, {
                    isLigth: "true",
                    baidubox8: this.props.userinfo.baidubox8,
                    title: this.state.headtitle
                }); else var n = ""; else var n = a.createElement(u.default, {
                    title: this.state.headtitle,
                    hideTobackBtn: "true"
                });
                return t ? a.createElement("div", null, n, a.createElement("div", {style: {position: "relative"}}, this.state.loading ? "" : e)) : a.createElement("div", null, n, a.createElement("div", {style: {position: "relative"}}, this.state.loading ? a.createElement(s.default, null) : e))
            }, e.prototype.componentDidMount = function () {
                var t = this;
                if (this.props.userinfo.uname === e.locationKey && window.webappLocationFrom.indexOf("/detail/") > 0) return this.setState(e.tempState), void setTimeout(function () {
                    window.scrollTo(0, e.tempScrollTop)
                });
                var n = this.props.params.id, o = p.getTopicData(n);
                o.then(function (t) {
                    return t.json()
                }).then(function (e) {
                    if (0 !== e.errno) return void console.error("获取topic数据失败，errno: " + e.errno);
                    var n = e.data || {}, o = n.title, i = n.head || {}, a = n.column || [];
                    document.title = o ? "【专题】" + o : "百度新闻", t.setState({
                        loading: !1,
                        head: i,
                        column: a,
                        title: o,
                        headtitle: "【专题】" + o
                    }), t.updateDetaiHeadTitle()
                })
            }, e.prototype.componentDidUpdate = function () {
                this.updateDetaiHeadTitle()
            }, e.prototype.componentWillUnmount = function () {
                e.locationKey = this.props.userinfo.uname, e.tempState = this.state, e.tempScrollTop = document.body.scrollTop || document.documentElement.scrollTop
            }, e.prototype.updateDetaiHeadTitle = function () {
                window._currentChannelName = this.state.title || "百度新闻"
            }, e
        }(a.Component);
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = l.connect(n, o)(h)
});
;
/*!/app/containers/Other/Download.jsx*/
define("89cf792", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, a = e("53ab468"), o = e("53ab468"), r = function (e) {
        function t() {
            e.apply(this, arguments)
        }

        return n(t, e), t.prototype.isIos = function () {
            var e = window.navigator.userAgent;
            return e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? !0 : !1
        }, t.prototype.downloadIos = function () {
            window.location.href = "http://itunes.apple.com/cn/app/id482820737?mt=8"
        }, t.prototype.downloadAndroid = function () {
            var e = this.props.routeParams.from;
            "banner" == e ? window._hmt.push(["_trackEvent", "androidbtn", "click", "newdownload_from_detail_banner"]) : "relatedNews5" == e && window._hmt.push(["_trackEvent", "androidbtn", "click", "newdownload_from_detail_relatnews"]), window.location.href = "https://downpack.baidu.com/baidunews_AndroidPhone_1019474w.apk"
        }, t.prototype.componentDidMount = function () {
            var e = this.props.routeParams.from;
            "banner" == e ? window._hmt.push(["_trackPageview", "newdownload_from_detail_banner"]) : "relatedNews5" == e && window._hmt.push(["_trackPageview", "newdownload_from_detail_relatnews"])
        }, t.prototype.render = function () {
            var e = "";
            return e = this.isIos() ? a.createElement("a", {
                href: "javascript:;",
                onClick: this.downloadIos.bind(this)
            }, a.createElement("span", null, "去App Store下载")) : a.createElement("a", {
                href: "javascript:;",
                onClick: this.downloadAndroid.bind(this)
            }, a.createElement("i", {className: "and"}), a.createElement("span", null, "Android下载")), a.createElement("div", {id: "downloadApp"}, a.createElement("div", {className: "bg"}, a.createElement("div", {className: "bg-img"})), a.createElement("div", {className: "news"}, a.createElement("i", {className: "logo"}), a.createElement("i", {className: "name"})), a.createElement("div", {className: "foot"}, a.createElement("div", {className: "foot-img"}), a.createElement("div", {
                className: "btn",
                id: "btn"
            }, e)))
        }, t
    }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
});
;
/*!/app/components/NotFound/index.jsx*/
define("7e8a7b4", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, o = e("53ab468"), a = e("6d58bc2"), l = e("d9ac10b"), r = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = a.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            return o.createElement("div", {className: "notfoud-container"}, o.createElement("div", {className: "img-404"}), o.createElement("p", {className: "notfound-p"}, "哎呀迷路了..."), o.createElement("div", {className: "notfound-reason"}, o.createElement("p", null, "可能的原因："), o.createElement("ul", null, o.createElement("li", null, "原来的页面不存在了"), o.createElement("li", null, "我们的服务器被外星人劫持了"))), o.createElement("div", {className: "notfound-btn-container"}, o.createElement(l.Link, {
                to: "/",
                className: "notfound-btn"
            }, "返回百度新闻首页")))
        }, t
    }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
});
;
/*!/app/containers/404.jsx*/
define("5c8583b", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }, o = e("53ab468"), r = e("6d58bc2"), u = e("3c76f40"), c = e("7e8a7b4"), i = function (e) {
        function t(t, n) {
            e.call(this, t, n), this.shouldComponentUpdate = r.shouldComponentUpdate.bind(this)
        }

        return n(t, e), t.prototype.render = function () {
            return o.createElement("div", null, o.createElement(u.default, {title: window._currentChannelName || "百度新闻"}), o.createElement(c.default, null))
        }, t
    }(o.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = i
});
;
/*!/app/util/tongji.js*/
define("2af6750", function (a, i) {
    "use strict";

    function d() {
        if (null != window._hmt) {
            var a = window.location, i = a.href, d = a.hostname, o = a.port;
            o && (d = d + ":" + o);
            var e = i.split(d), f = e[1] || "";
            f.indexOf("fr=bdapp") >= 0 ? f = "/fr=bdapp&desc=baiduappold" : f.indexOf("fr=mohome") >= 0 ? f = "/fr=mohome&desc=baiduappfromH5" : f.indexOf("fr=zhangbai") >= 0 && (f = "/fr=zhangbai&desc=baiduappmoreold"), f && window._hmt.push(["_trackPageview", f])
        }
    }

    i.pushPVData = d
});
;
/*!/app/util/bigdata.js*/
define("ce58f10", function (n, e) {
    "use strict";

    function i(n) {
        return (document.location.search.match(new RegExp("(?:^\\?|&)" + n + "=(.*?)(?=&|$)")) || ["", null])[1]
    }

    function t() {
        return /Android.*baidubrowser/.test(navigator.userAgent)
    }

    function o(n) {
        var e;
        return [].slice.call(arguments, 1).forEach(function (i) {
            for (e in i) void 0 !== i[e] && (n[e] = i[e])
        }), n
    }

    function r(n, e) {
        var r = i("fr");
        r = r ? r : "zizhu";
        var u, c = t() ? 1 : 2, a = "0";
        u = o({
            pid: 107,
            wise: 1,
            from: "iphone" == window.showType ? "webapp" : "lite",
            fr: r,
            soe: c,
            m_ni: a
        }, n), e || setTimeout(function () {
        }, 100)
    }

    e.sendNSClickStat = r
});
;
/*!/app/router/routeMap.jsx*/
define("193fda1", function (e, t) {
    "use strict";
    var n = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, a = e("53ab468"), o = e("6d58bc2"), c = e("53ab468"), m = e("d9ac10b"), u = e("314d53d"),
        l = e("c18cbfb"), p = e("96048e0"), d = e("291f6cf"), r = e("4b6b68d"), f = e("5d77e48"),
        h = e("78c06d7"), i = e("6ca7337"), s = e("fe0b3a4"), E = e("5a03c08"), R = e("dae19b8"),
        b = e("03b9e34"), w = e("a26010f"), g = e("a87169e"), I = e("09f1140"), y = e("09ba6fb"),
        _ = e("490dec6"), x = e("7919588"), v = e("e7d587e"), C = e("f5ae208"), D = e("c81759f"),
        S = e("c014bc8"), U = e("2e037de"), j = e("990f591"), k = e("0360b7d"), O = e("630c415"),
        P = e("eee1deb"), G = e("ff4457e"), H = e("fd8fe7a"), N = e("9b122b0"), T = e("7ad3753"),
        B = e("077b4c6"), K = e("8496131"), M = e("ee16cc5"), V = e("b0b2b89"), Y = e("a334de0"),
        q = e("e8ec560"), z = e("8d5cbc1"), A = e("3c6f001"), F = e("a87ef6f"), J = e("d8d2e25"),
        L = e("5fd0832"), Q = e("ceee42e"), W = e("9d3e409"), X = e("89cf792"), Z = e("5c8583b"),
        $ = e("2af6750"), et = e("ce58f10"), tt = function (e) {
            function t(t, n) {
                e.call(this, t, n), this.shouldComponentUpdate = o.shouldComponentUpdate.bind(this)
            }

            return n(t, e), t.prototype.updateHandle = function () {
                setTimeout(function () {
                    shareConfig.init({
                        debug: location.search.indexOf("share_debug=1") > 0,
                        channel: "bd_news_webapp",
                        titleDefault: "百度新闻",
                        linkUrl: location.href,
                        content: document.getElementById("newsDetailContent") || "百度新闻，让每一次阅读都有价值！",
                        contentDefault: "百度新闻，让每一次阅读都有价值！",
                        iconUrlDefault: "https://gss0.bdstatic.com/5foIcy0a2gI2n2jgoY3K/n/nvn/static/news/imgs/webapp-news-logo2_f77cdba.png",
                        bdbox: {source: "bd_news_webap"}
                    }, function () {
                    }, function () {
                    })
                }, 2e3), et.sendNSClickStat({wa_type: "router-switch"}), setTimeout($.pushPVData), window.IS && window.IS._httpGet && window.IS._httpGet("pv")
            }, t.prototype.render = function () {
                return a.createElement(m.Router, {
                    history: this.props.history,
                    onUpdate: this.updateHandle.bind(this)
                }, a.createElement(m.Route, {
                    path: "/",
                    component: u.default
                }, a.createElement(m.IndexRoute, {component: l.default}), a.createElement(m.Route, {
                    path: "detail/:newsId(/:carousel)",
                    component: p.default
                }), a.createElement(m.Route, {
                    path: "previmg/:newsId(/:index)",
                    component: d.default
                }), a.createElement(m.Route, {
                    path: "prevrelatedimg/:newsId(/:index)",
                    component: r.default
                }), a.createElement(m.Route, {
                    path: "page/:number/:url/:p1/:p2/:p3/:newsId",
                    component: p.default
                }), a.createElement(m.Route, {
                    path: "image/:name/:newsId/:index",
                    component: f.default
                }), a.createElement(m.Route, {
                    path: "album/:newsId",
                    component: h.default
                }), a.createElement(m.Route, {
                    path: "comment/:newsId",
                    component: i.default
                }), a.createElement(m.Route, {
                    path: "city",
                    component: s.default
                }), a.createElement(m.Route, {
                    path: "province(/:id/:name)",
                    component: E.default
                }), a.createElement(m.Route, {
                    path: "newslist",
                    component: R.default
                }, a.createElement(m.IndexRoute, {component: w.default}), a.createElement(m.Route, {
                    path: "widthNav",
                    component: b.default
                }, a.createElement(m.IndexRoute, {component: w.default}), a.createElement(m.Route, {
                    path: "chosen(/:name)",
                    component: w.default
                }), a.createElement(m.Route, {
                    path: "baijia(/:name)",
                    component: g.default
                }), a.createElement(m.Route, {
                    path: "image(/:name)",
                    component: I.default
                }), a.createElement(m.Route, {
                    path: "info(/:name)",
                    component: y.default
                }), a.createElement(m.Route, {
                    path: "local(/:id/:name)",
                    component: _.default
                }), a.createElement(m.Route, {
                    path: "news(/:id/:name)",
                    component: x.default
                }), a.createElement(m.Route, {
                    path: "search(/:name)",
                    component: v.default
                }), a.createElement(m.Route, {
                    path: "tag(/:name)",
                    component: C.default
                }), a.createElement(m.Route, {
                    path: "author(/:id/:name)",
                    component: D.default
                })), a.createElement(m.Route, {
                    path: "other",
                    component: S.default
                }, a.createElement(m.Route, {
                    path: "forward(/:nid/:name)",
                    component: U.default
                }), a.createElement(m.Route, {
                    path: "newsman(/:name)",
                    component: j.default
                }), a.createElement(m.Route, {
                    path: "favor(/:name)",
                    component: k.default
                }), a.createElement(m.Route, {
                    path: "tag(/:name)",
                    component: O.default
                }), a.createElement(m.Route, {
                    path: "news(/:id/:name)",
                    component: P.default
                }))), " ", a.createElement(m.Route, {
                    path: "profile",
                    component: G.default
                }, a.createElement(m.IndexRoute, {component: H.default}), a.createElement(m.Route, {
                    path: "home",
                    component: H.default
                }), a.createElement(m.Route, {
                    path: "favor",
                    component: N.default
                }), a.createElement(m.Route, {
                    path: "model",
                    component: T.default
                }), a.createElement(m.Route, {
                    path: "notice",
                    component: B.default
                })), a.createElement(m.Route, {
                    path: "searchpage",
                    component: K.default
                }, a.createElement(m.IndexRoute, {component: M.default}), a.createElement(m.Route, {
                    path: "searchdetail(/:url)",
                    component: V.default
                })), a.createElement(m.Route, {
                    path: "search(/:name)",
                    component: Y.default
                }), a.createElement(m.Route, {
                    path: "subscribe",
                    component: q.default
                }, a.createElement(m.IndexRoute, {component: z.default}), a.createElement(m.Route, {
                    path: "home",
                    component: z.default
                }), a.createElement(m.Route, {
                    path: "manage",
                    component: A.default
                }), a.createElement(m.Route, {
                    path: "search",
                    component: F.default
                })), a.createElement(m.Route, {
                    path: "other",
                    component: J.default
                }, a.createElement(m.Route, {
                    path: "rankmedia",
                    component: L.default
                }), a.createElement(m.Route, {
                    path: "rankreporter",
                    component: Q.default
                })), a.createElement(m.Route, {
                    path: "/topic/:id",
                    component: W.default
                }), a.createElement(m.Route, {
                    path: "/download",
                    component: X.default
                }), a.createElement(m.Route, {
                    path: "/download/:from",
                    component: X.default
                }), a.createElement(m.Route, {
                    path: "*",
                    component: Z.default
                }), a.createElement(m.Route, {path: "/404", component: Z.default})))
            }, t
        }(c.Component);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = tt
});
;
/*!/app/index.jsx*/
define("52d995e", function (e) {
    "use strict";
    var o = e("53ab468"), n = e("21bb258"), d = e("f0a789e"), t = e("95d86e0"), r = e("557cc4f"),
        a = e("a5a3143"), c = e("d4a0d6d"), i = window.TOAPP || "", f = navigator.userAgent;
    if (i.jumpflag && i.jumpurl && i.hostname.length > 0) {
        var u = document.referrer;
        i.hostname.forEach(function (e) {
            u.indexOf(e) >= 0 && c.share("{}", f, 4, "webappout")
        })
    }
    var l = e("5145f95");
    window.Perf = l;
    var w = t.default();
    window.afdMode = !0, window.addEventListener("scroll", function () {
        a.afdLogProcess()
    }, !1);
    var s = e("193fda1");
    n.render(o.createElement(d.Provider, {store: w}, o.createElement(s.default, {history: r.default})), document.getElementById("root")), window.onhashchange = function () {
        setTimeout(function () {
            window.document.body.scrollTop = window.document.body.scrollTop + 1, window.document.body.scrollTop = window.document.body.scrollTop - 1
        }, 500)
    }
});
