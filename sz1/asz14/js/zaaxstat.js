/*
 * zaaxstat.js v3.7.9
 * http://www.hduofen.com
 *
 */
!function (t, e) {
    "function" == typeof define && define.amd ? define(function () {
        return e(t)
    }) : e(t)
}(window, function (t) {
    var e = function () {
        function D(t) {
            return null == t ? String(t) : S[j.call(t)] || "object"
        }

        function A(t) {
            return "function" == D(t)
        }

        function $(t) {
            return null != t && t == t.window
        }

        function F(t) {
            return null != t && t.nodeType == t.DOCUMENT_NODE
        }

        function k(t) {
            return "object" == D(t)
        }

        function R(t) {
            return k(t) && !$(t) && Object.getPrototypeOf(t) == Object.prototype
        }

        function Z(t) {
            var e = !!t && "length" in t && t.length, n = i.type(t);
            return "function" != n && !$(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function _(t) {
            return a.call(t, function (t) {
                return null != t
            })
        }

        function z(t) {
            return t.length > 0 ? i.fn.concat.apply([], t) : t
        }

        function X(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function q(t) {
            return t in l ? l[t] : l[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
        }

        function H(t, e) {
            return "number" != typeof e || h[X(t)] ? e : e + "px"
        }

        function I(t) {
            var e, n;
            return c[t] || (e = f.createElement(t), f.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), c[t] = n), c[t]
        }

        function U(t) {
            return "children" in t ? u.call(t.children) : i.map(t.childNodes, function (t) {
                return 1 == t.nodeType ? t : void 0
            })
        }

        function V(t, e) {
            var n, i = t ? t.length : 0;
            for (n = 0; i > n; n++) this[n] = t[n];
            this.length = i, this.selector = e || ""
        }

        function Y(t, i, r) {
            for (n in i) r && (R(i[n]) || L(i[n])) ? (R(i[n]) && !R(t[n]) && (t[n] = {}), L(i[n]) && !L(t[n]) && (t[n] = []), Y(t[n], i[n], r)) : i[n] !== e && (t[n] = i[n])
        }

        function B(t, e) {
            return null == e ? i(t) : i(t).filter(e)
        }

        function J(t, e, n, i) {
            return A(e) ? e.call(t, n, i) : e
        }

        function W(t, e, n) {
            null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
        }

        function G(t, n) {
            var i = t.className || "", r = i && i.baseVal !== e;
            return n === e ? r ? i.baseVal : i : void(r ? i.baseVal = n : t.className = n)
        }

        function K(t) {
            try {
                return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? i.parseJSON(t) : t) : t
            } catch (e) {
                return t
            }
        }

        function Q(t, e) {
            e(t);
            for (var n = 0, i = t.childNodes.length; i > n; n++) Q(t.childNodes[n], e)
        }

        var e, n, i, r, N, P, o = [], s = o.concat, a = o.filter, u = o.slice, f = t.document,
            c = {}, l = {}, h = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            }, p = /^\s*<(\w+|!)[^>]*>/, d = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            m = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            g = /^(?:body|html)$/i, y = /([A-Z])/g,
            v = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            x = ["after", "prepend", "before", "append"], b = f.createElement("table"),
            w = f.createElement("tr"), E = {
                tr: f.createElement("tbody"),
                tbody: b,
                thead: b,
                tfoot: b,
                td: w,
                th: w,
                "*": f.createElement("div")
            }, T = /^[\w-]*$/, S = {}, j = S.toString, C = {}, O = f.createElement("div"), M = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            }, L = Array.isArray || function (t) {
                return t instanceof Array
            };
        return C.matches = function (t, e) {
            if (!e || !t || 1 !== t.nodeType) return !1;
            var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (n) return n.call(t, e);
            var i, r = t.parentNode, o = !r;
            return o && (r = O).appendChild(t), i = ~C.qsa(r, e).indexOf(t), o && O.removeChild(t), i
        }, N = function (t) {
            return t.replace(/-+(.)?/g, function (t, e) {
                return e ? e.toUpperCase() : ""
            })
        }, P = function (t) {
            return a.call(t, function (e, n) {
                return t.indexOf(e) == n
            })
        }, C.fragment = function (t, n, r) {
            var o, s, a;
            return d.test(t) && (o = i(f.createElement(RegExp.$1))), o || (t.replace && (t = t.replace(m, "<$1></$2>")), n === e && (n = p.test(t) && RegExp.$1), n in E || (n = "*"), a = E[n], a.innerHTML = "" + t, o = i.each(u.call(a.childNodes), function () {
                a.removeChild(this)
            })), R(r) && (s = i(o), i.each(r, function (t, e) {
                v.indexOf(t) > -1 ? s[t](e) : s.attr(t, e)
            })), o
        }, C.Z = function (t, e) {
            return new V(t, e)
        }, C.isZ = function (t) {
            return t instanceof C.Z
        }, C.init = function (t, n) {
            var r;
            if (!t) return C.Z();
            if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && p.test(t)) r = C.fragment(t, RegExp.$1, n), t = null; else {
                if (n !== e) return i(n).find(t);
                r = C.qsa(f, t)
            } else {
                if (A(t)) return i(f).ready(t);
                if (C.isZ(t)) return t;
                if (L(t)) r = _(t); else if (k(t)) r = [t], t = null; else if (p.test(t)) r = C.fragment(t.trim(), RegExp.$1, n), t = null; else {
                    if (n !== e) return i(n).find(t);
                    r = C.qsa(f, t)
                }
            }
            return C.Z(r, t)
        }, i = function (t, e) {
            return C.init(t, e)
        }, i.extend = function (t) {
            var e, n = u.call(arguments, 1);
            return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
                Y(t, n, e)
            }), t
        }, C.qsa = function (t, e) {
            var n, i = "#" == e[0], r = !i && "." == e[0], o = i || r ? e.slice(1) : e,
                s = T.test(o);
            return t.getElementById && s && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : u.call(s && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
        }, i.contains = f.documentElement.contains ? function (t, e) {
            return t !== e && t.contains(e)
        } : function (t, e) {
            for (; e && (e = e.parentNode);) if (e === t) return !0;
            return !1
        }, i.type = D, i.isFunction = A, i.isWindow = $, i.isArray = L, i.isPlainObject = R, i.isEmptyObject = function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, i.isNumeric = function (t) {
            var e = Number(t), n = typeof t;
            return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
        }, i.inArray = function (t, e, n) {
            return o.indexOf.call(e, t, n)
        }, i.camelCase = N, i.trim = function (t) {
            return null == t ? "" : String.prototype.trim.call(t)
        }, i.uuid = 0, i.support = {}, i.expr = {}, i.noop = function () {
        }, i.map = function (t, e) {
            var n, r, o, i = [];
            if (Z(t)) for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && i.push(n); else for (o in t) n = e(t[o], o), null != n && i.push(n);
            return z(i)
        }, i.each = function (t, e) {
            var n, i;
            if (Z(t)) {
                for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
            } else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t;
            return t
        }, i.grep = function (t, e) {
            return a.call(t, e)
        }, t.JSON && (i.parseJSON = JSON.parse), i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            S["[object " + e + "]"] = e.toLowerCase()
        }), i.fn = {
            constructor: C.Z,
            length: 0,
            forEach: o.forEach,
            reduce: o.reduce,
            push: o.push,
            sort: o.sort,
            splice: o.splice,
            indexOf: o.indexOf,
            concat: function () {
                var t, e, n = [];
                for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = C.isZ(e) ? e.toArray() : e;
                return s.apply(C.isZ(this) ? this.toArray() : this, n)
            },
            map: function (t) {
                return i(i.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function () {
                return i(u.apply(this, arguments))
            },
            ready: function (e) {
                if ("complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll) setTimeout(function () {
                    e(i)
                }, 0); else {
                    var n = function () {
                        f.removeEventListener("DOMContentLoaded", n, !1), t.removeEventListener("load", n, !1), e(i)
                    };
                    f.addEventListener("DOMContentLoaded", n, !1), t.addEventListener("load", n, !1)
                }
                return this
            },
            get: function (t) {
                return t === e ? u.call(this) : this[t >= 0 ? t : t + this.length]
            },
            toArray: function () {
                return this.get()
            },
            size: function () {
                return this.length
            },
            remove: function () {
                return this.each(function () {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function (t) {
                return o.every.call(this, function (e, n) {
                    return t.call(e, n, e) !== !1
                }), this
            },
            filter: function (t) {
                return A(t) ? this.not(this.not(t)) : i(a.call(this, function (e) {
                    return C.matches(e, t)
                }))
            },
            add: function (t, e) {
                return i(P(this.concat(i(t, e))))
            },
            is: function (t) {
                return "string" == typeof t ? this.length > 0 && C.matches(this[0], t) : t && this.selector == t.selector
            },
            not: function (t) {
                var n = [];
                if (A(t) && t.call !== e) this.each(function (e) {
                    t.call(this, e) || n.push(this)
                }); else {
                    var r = "string" == typeof t ? this.filter(t) : Z(t) && A(t.item) ? u.call(t) : i(t);
                    this.forEach(function (t) {
                        r.indexOf(t) < 0 && n.push(t)
                    })
                }
                return i(n)
            },
            has: function (t) {
                return this.filter(function () {
                    return k(t) ? i.contains(this, t) : i(this).find(t).size()
                })
            },
            eq: function (t) {
                return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
            },
            first: function () {
                var t = this[0];
                return t && !k(t) ? t : i(t)
            },
            last: function () {
                var t = this[this.length - 1];
                return t && !k(t) ? t : i(t)
            },
            find: function (t) {
                var e, n = this;
                return e = t ? "object" == typeof t ? i(t).filter(function () {
                    var t = this;
                    return o.some.call(n, function (e) {
                        return i.contains(e, t)
                    })
                }) : 1 == this.length ? i(C.qsa(this[0], t)) : this.map(function () {
                    return C.qsa(this, t)
                }) : i()
            },
            closest: function (t, e) {
                var n = [], r = "object" == typeof t && i(t);
                return this.each(function (i, o) {
                    for (; o && !(r ? r.indexOf(o) >= 0 : C.matches(o, t));) o = o !== e && !F(o) && o.parentNode;
                    o && n.indexOf(o) < 0 && n.push(o)
                }), i(n)
            },
            parents: function (t) {
                for (var e = [], n = this; n.length > 0;) n = i.map(n, function (t) {
                    return (t = t.parentNode) && !F(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
                });
                return B(e, t)
            },
            parent: function (t) {
                return B(P(this.pluck("parentNode")), t)
            },
            children: function (t) {
                return B(this.map(function () {
                    return U(this)
                }), t)
            },
            contents: function () {
                return this.map(function () {
                    return this.contentDocument || u.call(this.childNodes)
                })
            },
            siblings: function (t) {
                return B(this.map(function (t, e) {
                    return a.call(U(e.parentNode), function (t) {
                        return t !== e
                    })
                }), t)
            },
            empty: function () {
                return this.each(function () {
                    this.innerHTML = ""
                })
            },
            pluck: function (t) {
                return i.map(this, function (e) {
                    return e[t]
                })
            },
            show: function () {
                return this.each(function () {
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = I(this.nodeName))
                })
            },
            replaceWith: function (t) {
                return this.before(t).remove()
            },
            wrap: function (t) {
                var e = A(t);
                if (this[0] && !e) var n = i(t).get(0), r = n.parentNode || this.length > 1;
                return this.each(function (o) {
                    i(this).wrapAll(e ? t.call(this, o) : r ? n.cloneNode(!0) : n)
                })
            },
            wrapAll: function (t) {
                if (this[0]) {
                    i(this[0]).before(t = i(t));
                    for (var e; (e = t.children()).length;) t = e.first();
                    i(t).append(this)
                }
                return this
            },
            wrapInner: function (t) {
                var e = A(t);
                return this.each(function (n) {
                    var r = i(this), o = r.contents(), s = e ? t.call(this, n) : t;
                    o.length ? o.wrapAll(s) : r.append(s)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    i(this).replaceWith(i(this).children())
                }), this
            },
            clone: function () {
                return this.map(function () {
                    return this.cloneNode(!0)
                })
            },
            hide: function () {
                return this.css("display", "none")
            },
            toggle: function (t) {
                return this.each(function () {
                    var n = i(this);
                    (t === e ? "none" == n.css("display") : t) ? n.show() : n.hide()
                })
            },
            prev: function (t) {
                return i(this.pluck("previousElementSibling")).filter(t || "*")
            },
            next: function (t) {
                return i(this.pluck("nextElementSibling")).filter(t || "*")
            },
            html: function (t) {
                return 0 in arguments ? this.each(function (e) {
                    var n = this.innerHTML;
                    i(this).empty().append(J(this, t, e, n))
                }) : 0 in this ? this[0].innerHTML : null
            },
            text: function (t) {
                return 0 in arguments ? this.each(function (e) {
                    var n = J(this, t, e, this.textContent);
                    this.textContent = null == n ? "" : "" + n
                }) : 0 in this ? this.pluck("textContent").join("") : null
            },
            attr: function (t, i) {
                var r;
                return "string" != typeof t || 1 in arguments ? this.each(function (e) {
                    if (1 === this.nodeType) if (k(t)) for (n in t) W(this, n, t[n]); else W(this, t, J(this, i, e, this.getAttribute(t)))
                }) : 0 in this && 1 == this[0].nodeType && null != (r = this[0].getAttribute(t)) ? r : e
            },
            removeAttr: function (t) {
                return this.each(function () {
                    1 === this.nodeType && t.split(" ").forEach(function (t) {
                        W(this, t)
                    }, this)
                })
            },
            prop: function (t, e) {
                return t = M[t] || t, "string" != typeof t || 1 in arguments ? this.each(function (i) {
                    if (k(t)) for (n in t) this[M[n] || n] = t[n]; else this[t] = J(this, e, i, this[t])
                }) : this[0] && this[0][t]
            },
            removeProp: function (t) {
                return t = M[t] || t, this.each(function () {
                    delete this[t]
                })
            },
            data: function (t, n) {
                var i = "data-" + t.replace(y, "-$1").toLowerCase(),
                    r = 1 in arguments ? this.attr(i, n) : this.attr(i);
                return null !== r ? K(r) : e
            },
            val: function (t) {
                return 0 in arguments ? (null == t && (t = ""), this.each(function (e) {
                    this.value = J(this, t, e, this.value)
                })) : this[0] && (this[0].multiple ? i(this[0]).find("option").filter(function () {
                    return this.selected
                }).pluck("value") : this[0].value)
            },
            offset: function (e) {
                if (e) return this.each(function (t) {
                    var n = i(this), r = J(this, e, t, n.offset()), o = n.offsetParent().offset(),
                        s = {top: r.top - o.top, left: r.left - o.left};
                    "static" == n.css("position") && (s.position = "relative"), n.css(s)
                });
                if (!this.length) return null;
                if (f.documentElement !== this[0] && !i.contains(f.documentElement, this[0])) return {
                    top: 0,
                    left: 0
                };
                var n = this[0].getBoundingClientRect();
                return {
                    left: n.left + t.pageXOffset,
                    top: n.top + t.pageYOffset,
                    width: Math.round(n.width),
                    height: Math.round(n.height)
                }
            },
            css: function (t, e) {
                if (arguments.length < 2) {
                    var r = this[0];
                    if ("string" == typeof t) {
                        if (!r) return;
                        return r.style[N(t)] || getComputedStyle(r, "").getPropertyValue(t)
                    }
                    if (L(t)) {
                        if (!r) return;
                        var o = {}, s = getComputedStyle(r, "");
                        return i.each(t, function (t, e) {
                            o[e] = r.style[N(e)] || s.getPropertyValue(e)
                        }), o
                    }
                }
                var a = "";
                if ("string" == D(t)) e || 0 === e ? a = X(t) + ":" + H(t, e) : this.each(function () {
                    this.style.removeProperty(X(t))
                }); else for (n in t) t[n] || 0 === t[n] ? a += X(n) + ":" + H(n, t[n]) + ";" : this.each(function () {
                    this.style.removeProperty(X(n))
                });
                return this.each(function () {
                    this.style.cssText += ";" + a
                })
            },
            index: function (t) {
                return t ? this.indexOf(i(t)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function (t) {
                return t ? o.some.call(this, function (t) {
                    return this.test(G(t))
                }, q(t)) : !1
            },
            addClass: function (t) {
                return t ? this.each(function (e) {
                    if ("className" in this) {
                        r = [];
                        var n = G(this), o = J(this, t, e, n);
                        o.split(/\s+/g).forEach(function (t) {
                            i(this).hasClass(t) || r.push(t)
                        }, this), r.length && G(this, n + (n ? " " : "") + r.join(" "))
                    }
                }) : this
            },
            removeClass: function (t) {
                return this.each(function (n) {
                    if ("className" in this) {
                        if (t === e) return G(this, "");
                        r = G(this), J(this, t, n, r).split(/\s+/g).forEach(function (t) {
                            r = r.replace(q(t), " ")
                        }), G(this, r.trim())
                    }
                })
            },
            toggleClass: function (t, n) {
                return t ? this.each(function (r) {
                    var o = i(this), s = J(this, t, r, G(this));
                    s.split(/\s+/g).forEach(function (t) {
                        (n === e ? !o.hasClass(t) : n) ? o.addClass(t) : o.removeClass(t)
                    })
                }) : this
            },
            scrollTop: function (t) {
                if (this.length) {
                    var n = "scrollTop" in this[0];
                    return t === e ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () {
                        this.scrollTop = t
                    } : function () {
                        this.scrollTo(this.scrollX, t)
                    })
                }
            },
            scrollLeft: function (t) {
                if (this.length) {
                    var n = "scrollLeft" in this[0];
                    return t === e ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () {
                        this.scrollLeft = t
                    } : function () {
                        this.scrollTo(t, this.scrollY)
                    })
                }
            },
            position: function () {
                if (this.length) {
                    var t = this[0], e = this.offsetParent(), n = this.offset(),
                        r = g.test(e[0].nodeName) ? {top: 0, left: 0} : e.offset();
                    return n.top -= parseFloat(i(t).css("margin-top")) || 0, n.left -= parseFloat(i(t).css("margin-left")) || 0, r.top += parseFloat(i(e[0]).css("border-top-width")) || 0, r.left += parseFloat(i(e[0]).css("border-left-width")) || 0, {
                        top: n.top - r.top,
                        left: n.left - r.left
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || f.body; t && !g.test(t.nodeName) && "static" == i(t).css("position");) t = t.offsetParent;
                    return t
                })
            }
        }, i.fn.detach = i.fn.remove, ["width", "height"].forEach(function (t) {
            var n = t.replace(/./, function (t) {
                return t[0].toUpperCase()
            });
            i.fn[t] = function (r) {
                var o, s = this[0];
                return r === e ? $(s) ? s["inner" + n] : F(s) ? s.documentElement["scroll" + n] : (o = this.offset()) && o[t] : this.each(function (e) {
                    s = i(this), s.css(t, J(this, r, e, s[t]()))
                })
            }
        }), x.forEach(function (n, r) {
            var o = r % 2;
            i.fn[n] = function () {
                var n, a, s = i.map(arguments, function (t) {
                    var r = [];
                    return n = D(t), "array" == n ? (t.forEach(function (t) {
                        return t.nodeType !== e ? r.push(t) : i.zepto.isZ(t) ? r = r.concat(t.get()) : void(r = r.concat(C.fragment(t)))
                    }), r) : "object" == n || null == t ? t : C.fragment(t)
                }), u = this.length > 1;
                return s.length < 1 ? this : this.each(function (e, n) {
                    a = o ? n : n.parentNode, n = 0 == r ? n.nextSibling : 1 == r ? n.firstChild : 2 == r ? n : null;
                    var c = i.contains(f.documentElement, a);
                    s.forEach(function (e) {
                        if (u) e = e.cloneNode(!0); else if (!a) return i(e).remove();
                        a.insertBefore(e, n), c && Q(e, function (e) {
                            if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
                                n.eval.call(n, e.innerHTML)
                            }
                        })
                    })
                })
            }, i.fn[o ? n + "To" : "insert" + (r ? "Before" : "After")] = function (t) {
                return i(t)[n](this), this
            }
        }), C.Z.prototype = V.prototype = i.fn, C.uniq = P, C.deserializeValue = K, i.zepto = C, i
    }();
    return t.Zepto = e, void 0 === t.$ && (t.$ = e), function (e) {
        function h(t) {
            return t._zid || (t._zid = n++)
        }

        function p(t, e, n, i) {
            if (e = d(e), e.ns) var r = m(e.ns);
            return (a[h(t)] || []).filter(function (t) {
                return t && (!e.e || t.e == e.e) && (!e.ns || r.test(t.ns)) && (!n || h(t.fn) === h(n)) && (!i || t.sel == i)
            })
        }

        function d(t) {
            var e = ("" + t).split(".");
            return {e: e[0], ns: e.slice(1).sort().join(" ")}
        }

        function m(t) {
            return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
        }

        function g(t, e) {
            return t.del && !f && t.e in c || !!e
        }

        function y(t) {
            return l[t] || f && c[t] || t
        }

        function v(t, n, r, o, s, u, f) {
            var c = h(t), p = a[c] || (a[c] = []);
            n.split(/\s/).forEach(function (n) {
                if ("ready" == n) return e(document).ready(r);
                var a = d(n);
                a.fn = r, a.sel = s, a.e in l && (r = function (t) {
                    var n = t.relatedTarget;
                    return !n || n !== this && !e.contains(this, n) ? a.fn.apply(this, arguments) : void 0
                }), a.del = u;
                var c = u || r;
                a.proxy = function (e) {
                    if (e = S(e), !e.isImmediatePropagationStopped()) {
                        e.data = o;
                        var n = c.apply(t, e._args == i ? [e] : [e].concat(e._args));
                        return n === !1 && (e.preventDefault(), e.stopPropagation()), n
                    }
                }, a.i = p.length, p.push(a), "addEventListener" in t && t.addEventListener(y(a.e), a.proxy, g(a, f))
            })
        }

        function x(t, e, n, i, r) {
            var o = h(t);
            (e || "").split(/\s/).forEach(function (e) {
                p(t, e, n, i).forEach(function (e) {
                    delete a[o][e.i], "removeEventListener" in t && t.removeEventListener(y(e.e), e.proxy, g(e, r))
                })
            })
        }

        function S(t, n) {
            if (n || !t.isDefaultPrevented) {
                n || (n = t), e.each(T, function (e, i) {
                    var r = n[e];
                    t[e] = function () {
                        return this[i] = b, r && r.apply(n, arguments)
                    }, t[i] = w
                });
                try {
                    t.timeStamp || (t.timeStamp = Date.now())
                } catch (r) {
                }
                (n.defaultPrevented !== i ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = b)
            }
            return t
        }

        function j(t) {
            var e, n = {originalEvent: t};
            for (e in t) E.test(e) || t[e] === i || (n[e] = t[e]);
            return S(n, t)
        }

        var i, n = 1, r = Array.prototype.slice, o = e.isFunction, s = function (t) {
                return "string" == typeof t
            }, a = {}, u = {}, f = "onfocusin" in t, c = {focus: "focusin", blur: "focusout"},
            l = {mouseenter: "mouseover", mouseleave: "mouseout"};
        u.click = u.mousedown = u.mouseup = u.mousemove = "MouseEvents", e.event = {
            add: v,
            remove: x
        }, e.proxy = function (t, n) {
            var i = 2 in arguments && r.call(arguments, 2);
            if (o(t)) {
                var a = function () {
                    return t.apply(n, i ? i.concat(r.call(arguments)) : arguments)
                };
                return a._zid = h(t), a
            }
            if (s(n)) return i ? (i.unshift(t[n], t), e.proxy.apply(null, i)) : e.proxy(t[n], t);
            throw new TypeError("expected function")
        }, e.fn.bind = function (t, e, n) {
            return this.on(t, e, n)
        }, e.fn.unbind = function (t, e) {
            return this.off(t, e)
        }, e.fn.one = function (t, e, n, i) {
            return this.on(t, e, n, i, 1)
        };
        var b = function () {
            return !0
        }, w = function () {
            return !1
        }, E = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/, T = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        e.fn.delegate = function (t, e, n) {
            return this.on(e, t, n)
        }, e.fn.undelegate = function (t, e, n) {
            return this.off(e, t, n)
        }, e.fn.live = function (t, n) {
            return e(document.body).delegate(this.selector, t, n), this
        }, e.fn.die = function (t, n) {
            return e(document.body).undelegate(this.selector, t, n), this
        }, e.fn.on = function (t, n, a, u, f) {
            var c, l, h = this;
            return t && !s(t) ? (e.each(t, function (t, e) {
                h.on(t, n, a, e, f)
            }), h) : (s(n) || o(u) || u === !1 || (u = a, a = n, n = i), (u === i || a === !1) && (u = a, a = i), u === !1 && (u = w), h.each(function (i, o) {
                f && (c = function (t) {
                    return x(o, t.type, u), u.apply(this, arguments)
                }), n && (l = function (t) {
                    var i, s = e(t.target).closest(n, o).get(0);
                    return s && s !== o ? (i = e.extend(j(t), {
                        currentTarget: s,
                        liveFired: o
                    }), (c || u).apply(s, [i].concat(r.call(arguments, 1)))) : void 0
                }), v(o, t, u, a, n, l || c)
            }))
        }, e.fn.off = function (t, n, r) {
            var a = this;
            return t && !s(t) ? (e.each(t, function (t, e) {
                a.off(t, n, e)
            }), a) : (s(n) || o(r) || r === !1 || (r = n, n = i), r === !1 && (r = w), a.each(function () {
                x(this, t, r, n)
            }))
        }, e.fn.trigger = function (t, n) {
            return t = s(t) || e.isPlainObject(t) ? e.Event(t) : S(t), t._args = n, this.each(function () {
                t.type in c && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
            })
        }, e.fn.triggerHandler = function (t, n) {
            var i, r;
            return this.each(function (o, a) {
                i = j(s(t) ? e.Event(t) : t), i._args = n, i.target = a, e.each(p(a, t.type || t), function (t, e) {
                    return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
                })
            }), r
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) {
            e.fn[t] = function (e) {
                return 0 in arguments ? this.bind(t, e) : this.trigger(t)
            }
        }), e.Event = function (t, e) {
            s(t) || (e = t, t = e.type);
            var n = document.createEvent(u[t] || "Events"), i = !0;
            if (e) for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
            return n.initEvent(t, i, !0), S(n)
        }
    }(e), function (e) {
        function p(t, n, i) {
            var r = e.Event(n);
            return e(t).trigger(r, i), !r.isDefaultPrevented()
        }

        function d(t, e, n, r) {
            return t.global ? p(e || i, n, r) : void 0
        }

        function m(t) {
            t.global && 0 === e.active++ && d(t, null, "ajaxStart")
        }

        function g(t) {
            t.global && !--e.active && d(t, null, "ajaxStop")
        }

        function y(t, e) {
            var n = e.context;
            return e.beforeSend.call(n, t, e) === !1 || d(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void d(e, n, "ajaxSend", [t, e])
        }

        function v(t, e, n, i) {
            var r = n.context, o = "success";
            n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), d(n, r, "ajaxSuccess", [e, n, t]), b(o, e, n)
        }

        function x(t, e, n, i, r) {
            var o = i.context;
            i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), d(i, o, "ajaxError", [n, i, t || e]), b(e, n, i)
        }

        function b(t, e, n) {
            var i = n.context;
            n.complete.call(i, e, t), d(n, i, "ajaxComplete", [e, n]), g(n)
        }

        function w(t, e, n) {
            if (n.dataFilter == E) return t;
            var i = n.context;
            return n.dataFilter.call(i, t, e)
        }

        function E() {
        }

        function T(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == c ? "html" : t == f ? "json" : a.test(t) ? "script" : u.test(t) && "xml") || "text"
        }

        function S(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
        }

        function j(t) {
            t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = S(t.url, t.data), t.data = void 0)
        }

        function C(t, n, i, r) {
            return e.isFunction(n) && (r = i, i = n, n = void 0), e.isFunction(i) || (r = i, i = void 0), {
                url: t,
                data: n,
                success: i,
                dataType: r
            }
        }

        function P(t, n, i, r) {
            var o, s = e.isArray(n), a = e.isPlainObject(n);
            e.each(n, function (n, u) {
                o = e.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? t.add(u.name, u.value) : "array" == o || !i && "object" == o ? P(t, u, i, n) : t.add(n, u)
            })
        }

        var r, o, n = +new Date, i = t.document,
            s = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            a = /^(?:text|application)\/javascript/i, u = /^(?:text|application)\/xml/i,
            f = "application/json", c = "text/html", l = /^\s*$/, h = i.createElement("a");
        h.href = t.location.href, e.active = 0, e.ajaxJSONP = function (r, o) {
            if (!("type" in r)) return e.ajax(r);
            var c, p, s = r.jsonpCallback, a = (e.isFunction(s) ? s() : s) || "Zepto" + n++,
                u = i.createElement("script"), f = t[a], l = function (t) {
                    e(u).triggerHandler("error", t || "abort")
                }, h = {abort: l};
            return o && o.promise(h), e(u).on("load error", function (n, i) {
                clearTimeout(p), e(u).off().remove(), "error" != n.type && c ? v(c[0], h, r, o) : x(null, i || "error", h, r, o), t[a] = f, c && e.isFunction(f) && f(c[0]), f = c = void 0
            }), y(h, r) === !1 ? (l("abort"), h) : (t[a] = function () {
                c = arguments
            }, u.src = r.url.replace(/\?(.+)=\?/, "?$1=" + a), i.head.appendChild(u), r.timeout > 0 && (p = setTimeout(function () {
                l("timeout")
            }, r.timeout)), h)
        }, e.ajaxSettings = {
            type: "GET",
            beforeSend: E,
            success: E,
            error: E,
            complete: E,
            context: null,
            global: !0,
            xhr: function () {
                return new t.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: f,
                xml: "application/xml, text/xml",
                html: c,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0,
            dataFilter: E
        }, e.ajax = function (n) {
            var u, f, s = e.extend({}, n || {}), a = e.Deferred && e.Deferred();
            for (r in e.ajaxSettings) void 0 === s[r] && (s[r] = e.ajaxSettings[r]);
            m(s), s.crossDomain || (u = i.createElement("a"), u.href = s.url, u.href = u.href, s.crossDomain = h.protocol + "//" + h.host != u.protocol + "//" + u.host), s.url || (s.url = t.location.toString()), (f = s.url.indexOf("#")) > -1 && (s.url = s.url.slice(0, f)), j(s);
            var c = s.dataType, p = /\?.+=\?/.test(s.url);
            if (p && (c = "jsonp"), s.cache !== !1 && (n && n.cache === !0 || "script" != c && "jsonp" != c) || (s.url = S(s.url, "_=" + Date.now())), "jsonp" == c) return p || (s.url = S(s.url, s.jsonp ? s.jsonp + "=?" : s.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(s, a);
            var O, d = s.accepts[c], g = {}, b = function (t, e) {
                    g[t.toLowerCase()] = [t, e]
                }, C = /^([\w-]+:)\/\//.test(s.url) ? RegExp.$1 : t.location.protocol, N = s.xhr(),
                P = N.setRequestHeader;
            if (a && a.promise(N), s.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", d || "*/*"), (d = s.mimeType || d) && (d.indexOf(",") > -1 && (d = d.split(",", 2)[0]), N.overrideMimeType && N.overrideMimeType(d)), (s.contentType || s.contentType !== !1 && s.data && "GET" != s.type.toUpperCase()) && b("Content-Type", s.contentType || "application/x-www-form-urlencoded"), s.headers) for (o in s.headers) b(o, s.headers[o]);
            if (N.setRequestHeader = b, N.onreadystatechange = function () {
                if (4 == N.readyState) {
                    N.onreadystatechange = E, clearTimeout(O);
                    var t, n = !1;
                    if (N.status >= 200 && N.status < 300 || 304 == N.status || 0 == N.status && "file:" == C) {
                        if (c = c || T(s.mimeType || N.getResponseHeader("content-type")), "arraybuffer" == N.responseType || "blob" == N.responseType) t = N.response; else {
                            t = N.responseText;
                            try {
                                t = w(t, c, s), "script" == c ? (1, eval)(t) : "xml" == c ? t = N.responseXML : "json" == c && (t = l.test(t) ? null : e.parseJSON(t))
                            } catch (i) {
                                n = i
                            }
                            if (n) return x(n, "parsererror", N, s, a)
                        }
                        v(t, N, s, a)
                    } else x(N.statusText || null, N.status ? "error" : "abort", N, s, a)
                }
            }, y(N, s) === !1) return N.abort(), x(null, "abort", N, s, a), N;
            var M = "async" in s ? s.async : !0;
            if (N.open(s.type, s.url, M, s.username, s.password), s.xhrFields) for (o in s.xhrFields) N[o] = s.xhrFields[o];
            for (o in g) P.apply(N, g[o]);
            return s.timeout > 0 && (O = setTimeout(function () {
                N.onreadystatechange = E, N.abort(), x(null, "timeout", N, s, a)
            }, s.timeout)), N.send(s.data ? s.data : null), N
        }, e.get = function () {
            return e.ajax(C.apply(null, arguments))
        }, e.post = function () {
            var t = C.apply(null, arguments);
            return t.type = "POST", e.ajax(t)
        }, e.getJSON = function () {
            var t = C.apply(null, arguments);
            return t.dataType = "json", e.ajax(t)
        }, e.fn.load = function (t, n, i) {
            if (!this.length) return this;
            var a, r = this, o = t.split(/\s/), u = C(t, n, i), f = u.success;
            return o.length > 1 && (u.url = o[0], a = o[1]), u.success = function (t) {
                r.html(a ? e("<div>").html(t.replace(s, "")).find(a) : t), f && f.apply(r, arguments)
            }, e.ajax(u), this
        };
        var N = encodeURIComponent;
        e.param = function (t, n) {
            var i = [];
            return i.add = function (t, n) {
                e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(N(t) + "=" + N(n))
            }, P(i, t, n), i.join("&").replace(/%20/g, "+")
        }
    }(e), function () {
        try {
            getComputedStyle(void 0)
        } catch (e) {
            var n = getComputedStyle;
            t.getComputedStyle = function (t, e) {
                try {
                    return n(t, e)
                } catch (i) {
                    return null
                }
            }
        }
    }(), function (t, e) {
        function y(t) {
            return t.replace(/([A-Z])/g, "-$1").toLowerCase()
        }

        function v(t) {
            return i ? i + t : t.toLowerCase()
        }

        var i, a, u, f, c, l, h, p, d, m, n = "", r = {Webkit: "webkit", Moz: "", O: "o"},
            o = document.createElement("div"),
            s = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
            g = {};
        o.style.transform === e && t.each(r, function (t, r) {
            return o.style[t + "TransitionProperty"] !== e ? (n = "-" + t.toLowerCase() + "-", i = r, !1) : void 0
        }), a = n + "transform", g[u = n + "transition-property"] = g[f = n + "transition-duration"] = g[l = n + "transition-delay"] = g[c = n + "transition-timing-function"] = g[h = n + "animation-name"] = g[p = n + "animation-duration"] = g[m = n + "animation-delay"] = g[d = n + "animation-timing-function"] = "", t.fx = {
            off: i === e && o.style.transitionProperty === e,
            speeds: {_default: 400, fast: 200, slow: 600},
            cssPrefix: n,
            transitionEnd: v("TransitionEnd"),
            animationEnd: v("AnimationEnd")
        }, t.fn.animate = function (n, i, r, o, s) {
            return t.isFunction(i) && (o = i, r = e, i = e), t.isFunction(r) && (o = r, r = e), t.isPlainObject(i) && (r = i.easing, o = i.complete, s = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), s && (s = parseFloat(s) / 1e3), this.anim(n, i, r, o, s)
        }, t.fn.anim = function (n, i, r, o, v) {
            var x, w, S, b = {}, E = "", T = this, j = t.fx.transitionEnd, C = !1;
            if (i === e && (i = t.fx.speeds._default / 1e3), v === e && (v = 0), t.fx.off && (i = 0), "string" == typeof n) b[h] = n, b[p] = i + "s", b[m] = v + "s", b[d] = r || "linear", j = t.fx.animationEnd; else {
                w = [];
                for (x in n) s.test(x) ? E += x + "(" + n[x] + ") " : (b[x] = n[x], w.push(y(x)));
                E && (b[a] = E, w.push(a)), i > 0 && "object" == typeof n && (b[u] = w.join(", "), b[f] = i + "s", b[l] = v + "s", b[c] = r || "linear")
            }
            return S = function (e) {
                if ("undefined" != typeof e) {
                    if (e.target !== e.currentTarget) return;
                    t(e.target).unbind(j, S)
                } else t(this).unbind(j, S);
                C = !0, t(this).css(g), o && o.call(this)
            }, i > 0 && (this.bind(j, S), setTimeout(function () {
                C || S.call(T)
            }, 1e3 * (i + v) + 25)), this.size() && this.get(0).clientLeft, this.css(b), 0 >= i && setTimeout(function () {
                T.each(function () {
                    S.call(this)
                })
            }, 0), this
        }, o = null
    }(e), function (e, n) {
        function a(t, i, r, o, s) {
            "function" != typeof i || s || (s = i, i = n);
            var a = {opacity: r};
            return o && (a.scale = o, t.css(e.fx.cssPrefix + "transform-origin", "0 0")), t.animate(a, i, null, s)
        }

        function u(t, n, i, r) {
            return a(t, n, 0, i, function () {
                o.call(e(this)), r && r.call(this)
            })
        }

        var r = (t.document, e.fn.show), o = e.fn.hide, s = e.fn.toggle;
        e.fn.show = function (t, e) {
            return r.call(this), t === n ? t = 0 : this.css("opacity", 0), a(this, t, 1, "1,1", e)
        }, e.fn.hide = function (t, e) {
            return t === n ? o.call(this) : u(this, t, "0,0", e)
        }, e.fn.toggle = function (t, i) {
            return t === n || "boolean" == typeof t ? s.call(this, t) : this.each(function () {
                var n = e(this);
                n["none" == n.css("display") ? "show" : "hide"](t, i)
            })
        }, e.fn.fadeTo = function (t, e, n) {
            return a(this, t, e, null, n)
        }, e.fn.fadeIn = function (t, e) {
            var n = this.css("opacity");
            return n > 0 ? this.css("opacity", 0) : n = 1, r.call(this).fadeTo(t, n, e)
        }, e.fn.fadeOut = function (t, e) {
            return u(this, t, null, e)
        }, e.fn.fadeToggle = function (t, n) {
            return this.each(function () {
                var i = e(this);
                i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](t, n)
            })
        }
    }(e), function (e) {
        function d(t, e, n, i) {
            return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
        }

        function m() {
            s = null, n.last && (n.el.trigger("longTap"), n = {})
        }

        function g() {
            s && clearTimeout(s), s = null
        }

        function y() {
            i && clearTimeout(i), r && clearTimeout(r), o && clearTimeout(o), s && clearTimeout(s), i = r = o = s = null, n = {}
        }

        function v(t) {
            return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
        }

        function x(t, e) {
            return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
        }

        function b() {
            p && (e(document).off(h.down, f).off(h.up, c).off(h.move, l).off(h.cancel, y), e(t).off("scroll", y), y(), p = !1)
        }

        function w(w) {
            var E, T, C, N, S = 0, j = 0;
            b(), h = w && "down" in w ? w : "ontouchstart" in document ? {
                down: "touchstart",
                up: "touchend",
                move: "touchmove",
                cancel: "touchcancel"
            } : "onpointerdown" in document ? {
                down: "pointerdown",
                up: "pointerup",
                move: "pointermove",
                cancel: "pointercancel"
            } : "onmspointerdown" in document ? {
                down: "MSPointerDown",
                up: "MSPointerUp",
                move: "MSPointerMove",
                cancel: "MSPointerCancel"
            } : !1, h && ("MSGesture" in t && (u = new MSGesture, u.target = document.body, e(document).bind("MSGestureEnd", function (t) {
                var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
                e && (n.el.trigger("swipe"), n.el.trigger("swipe" + e))
            })), f = function (t) {
                (!(N = x(t, "down")) || v(t)) && (C = N ? t : t.touches[0], t.touches && 1 === t.touches.length && n.x2 && (n.x2 = void 0, n.y2 = void 0), E = Date.now(), T = E - (n.last || E), n.el = e("tagName" in C.target ? C.target : C.target.parentNode), i && clearTimeout(i), n.x1 = C.pageX, n.y1 = C.pageY, T > 0 && 250 >= T && (n.isDoubleTap = !0), n.last = E, s = setTimeout(m, a), u && N && u.addPointer(t.pointerId))
            }, l = function (t) {
                (!(N = x(t, "move")) || v(t)) && (C = N ? t : t.touches[0], g(), n.x2 = C.pageX, n.y2 = C.pageY, S += Math.abs(n.x1 - n.x2), j += Math.abs(n.y1 - n.y2))
            }, c = function (t) {
                (!(N = x(t, "up")) || v(t)) && (g(), n.x2 && Math.abs(n.x1 - n.x2) > 30 || n.y2 && Math.abs(n.y1 - n.y2) > 30 ? o = setTimeout(function () {
                    n.el && (n.el.trigger("swipe"), n.el.trigger("swipe" + d(n.x1, n.x2, n.y1, n.y2))), n = {}
                }, 0) : "last" in n && (30 > S && 30 > j ? r = setTimeout(function () {
                    var t = e.Event("tap");
                    t.cancelTouch = y, n.el && n.el.trigger(t), n.isDoubleTap ? (n.el && n.el.trigger("doubleTap"), n = {}) : i = setTimeout(function () {
                        i = null, n.el && n.el.trigger("singleTap"), n = {}
                    }, 250)
                }, 0) : n = {}), S = j = 0)
            }, e(document).on(h.up, c).on(h.down, f).on(h.move, l), e(document).on(h.cancel, y), e(t).on("scroll", y), p = !0)
        }

        var i, r, o, s, u, f, c, l, h, n = {}, a = 750, p = !1;
        ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (t) {
            e.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), e.touch = {setup: w}, e(document).ready(w)
    }(e), e
});
;eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function (e) {
            return r[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    }
    ;
    while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('(z 6y(){y(G.2x!=H||G.2x){I}G.2x=1;G.$A=G.4g=4g;B w={3t:"6z.7.9",1j:1w()+"6A.1x.1X/6B/",4h:1w()+"2l.1x.1X/1y/6C.1y",4i:1w()+"2l.1x.1X/1y/6D.1y",2X:1w()+"2l.1x.1X/1y/4j/4k.1y",4l:1w()+"2l.1x.1X/1y/4j/6E.1y",2y:1w()+"6F.1x.1X",2Y:1w(),1a:G.1d.1a,1m:G.1d.2z,X:(E(3u(J.2Z[J.2Z.K-1].1z).3v))?4m():(3u(J.2Z[J.2Z.K-1].1z).3v),1g:1Y()[2],2A:1Y()[1],1Z:3w.1Z,O:0,U:"",1O:0,17:"",3x:"",N:"",S:0,1A:"",L:"",F:"",1r:"",1K:"",33:"",1n:"",2B:1,22:0,23:"",25:"",18:"",1P:H,1B:"",34:"",35:"",2C:"",26:0,1s:0,4n:0,1C:"",27:T,19:{13:"",2D:"",2E:"",1Q:""},36:P,V:P,37:P,3y:P,3z:P,3A:P,3B:P,3C:P,6G:P,3D:P};28.29("\\6H\\6I\\6J\\6K\\6L\\4o\\6M\\1R\\1D\\2F\\3E\\4p\\2F\\2m\\6N\\4p\\2F\\4q\\4r\\6O\\6P\\6Q\\6R\\6S\\6T\\6U\\6V\\2m\\6W\\6X\\6Y\\38\\2a\\3F\\6Z\\71\\72\\73\\3G\\3H\\3I\\74\\75\\2m\\1R\\1D\\2F\\3E\\2m\\76\\77\\78\\79\\2F\\3E\\2m\\7a\\7b\\7c\\7d\\7e\\7f\\4o\\4q\\4r\\2G\\7g\\7h\\7i\\7j\\7k\\3J\\3K:4s://4t.1x.1E");w.Q=w.1a;w.1o=4u(w.1a.Y("?")[0].Y("#")[0]);w.1C=1b(w.1a,"1C");w.18=1F("18");y(E(w.18)){w.18=4v();14("18",w.18)}w.1B=$A(".R-13");w.34=$A(".R-3L");w.35=$A(".R-3M");w.2C=$A(".R-1Q");y(!E(w.1B)&&w.1B[0]!=H){w.1O=w.1B.K;w.F=w.1B[0].4w==H?"":$A(".R-13").7l(0).1i()}y(!E(w.1a.Y("#")[1])){w.1n=1d.7m.Y("#")[1].Y("?")[0].Y("&")[0]}4x();4y();4z();4A();4B();z 4z(){$A.39.4C="7n";$A.39.7o="7p";$A.39.7q=P;$A.39.7r={7s:P};1e{G.2n={7t:4D,7u:4E,7v:4F};G.2x={1L:1L,1G:1G,1w:1w,2H:2H,E:E,1Y:1Y,14:14,1F:1F,2I:2I}}1f(e){}}z 4A(){y(w.3A){w.3A=T;$A.1p({Q:w.1j+"1q/7w",M:{4G:w.X,Q:w.1o,18:w.18,1C:w.1C},W:z(c){1e{y(c.W){B d=c.M.7x;y(!E(c.M.1S)){w.1P=c.M.1S}y(d!=H){w.1s=d.1s;w.33=d.33;y(w.1s==1){y(!E(1F("1T"+w.1m))){w.19=2o.4H(1F("1T"+w.1m))}}C{2I("1T"+w.1m)}y(d.3a==0){y(!E(c.M.1S.13)){w.F=c.M.1S.13;3b(d);y(!E(c.M.1S.1r)||w.1s==1){w.1r=c.M.1S.1r;4I()}y(!E(c.M.1S.1K)||w.1s==1){w.1K=c.M.1S.1K;4J()}}}C{4K(d.7y){1H 1:4L(d);1I;1H 2:4M(d);1I}}3N(d.4N,d.7z,d.4O,w.F);y(d.4n==1){y(E(w.1C)&&!E(w.F)){2I("1T"+w.1m);4P(w.F);y(E(w.1n)){I}}}C y(w.1a.D("1C")!=-1){G.1d.1a=4Q("1C");y(E(w.1n)){I}}}B f=c.M.7A;y(f!=H){y(f.7B==0){y(!E(w.F)){3c(w.F)}}C{B g=f.13.Y("|");$A.1c(g,z(a,b){y(!E(b)){2J(z(){3c(b)},a*55)}})}}y(c.M.I==1){3O()}B h=c.M.7C;y(h==1){4R()}y(c.M.7D==1){3P()}}}1f(e){}4S()}})}}z 3N(b,c,d,f){y(w.1s==1&&!E(w.19.1Q)){1e{B g=w.19.1Q;3Q(g)}1f(e){}}C{y(c==0){I}$A.1p({Q:w.1j+"1q/3N",M:{X:w.X,13:f,4O:d,7E:c,4N:b},W:z(a){y(a.W){14("R-4T"+w.1m,a.M);1e{y(w.1s==1&&w.27){w.19.1Q=a.M;14("1T"+w.1m,2o.3d(w.19))}3Q(a.M)}1f(e){}}}})}}z 3Q(e){$A(J).1M(z(){y(!E(w.2C)){$A.1c(w.2C,z(a,b){$A(b).4U("1z",w.2y+e)})}G.2n.4V=w.2y+e;B d=w.2C.K;3e(z(){B c=$A(".R-1Q");y(c.K>d){d=c.K;$A.1c(c,z(a,b){$A(b).4U("1z",w.2y+e)})}},80)})}z 3O(){y(w.S==6){I}$A.1p({Q:w.1j+"1q/3O",M:{X:w.X,Q:w.1o,1g:w.1g,N:E(w.N)?"":w.N,S:w.S},W:z(a){y(a.W){4W(a.M)}}})}z 4W(a){B b={4X:"4X",Q:""};G.7F.7G(b,H,"");G.2b("7H",z(e){2J(z(){G.1d.1a=a},7I)},T)}z 4R(){$A.1p({Q:w.1j+"1q/7J",M:{X:w.X,Q:w.1o},W:z(a){y(a!=H&&a.W){4Y(a.M)}}})}z 4Y(k){$A(J).1M(z(){B f=T;$A.1c(k,z(c,d){y(d.2K==0){$A(\'[M-7K-7L="\'+d.2L+\'"]\').1c(z(a,b){y(d.2c==0){$A(b).Z("11",z(){2d(d);I})}C y(d.2c==1){$A(b).4Z(z(e){2d(d)})}})}C{f=P}});y(f){y(1Y()[1]==\'2M\'){$A("1h").1N("2N","2O")}$A(J).Z("11",z(e){B a=e.3f?e.3f:e.54;3R(0,a)});$A(J).4Z(z(e){B a=e.3f?e.3f:e.54;3R(1,a)})}});z 3R(i,j){$A.1c(k,z(f,g){y(g.2K==1){B h=g.56.Y("|");$A.1c(h,z(a,b){y(!E(b)){y(g.2p==1){B c=j.4w;y(!E(c)&&c.D(b)!=-1){y(g.2c==i){2d(g,b)}I}}C y(g.2p==2){B d=j.3v;y(!E(d)&&d.D(b)!=-1){y(g.2c==i){2d(g,b)}I}}C y(g.2p==3){B e=j.7M;y(!E(e)&&e.D(b)!=-1){y(g.2c==i){2d(g,b)}I}}}})}})}}z 3P(){$A.1p({Q:w.1j+"1q/3P",M:{X:w.X,Q:w.1o},W:z(a){y(a!=H&&a.W){57(a.M)}}})}z 57(c){1L(w.4h,z(){$A.1c(c,z(a,b){7N(w,b)})})}z 4E(a){B b={2L:a,3S:1,2K:0,2p:0};2d(b)}z 2d(b,c){$A.1p({Q:w.1j+"1q/7O",M:{X:w.X,18:w.18,Q:w.1o,3S:b.3S,2c:b.2c,2K:b.2K,2p:b.2p,56:E(c)?"":c,3h:w.Q.2P(/&/g,\'||\'),1n:w.1n,2L:b.2L,1g:w.1g,3i:w.2A,N:E(w.N)?"":w.N,S:w.S,O:w.O,U:w.U,1A:w.1A},W:z(a){y(a.W){1e{y(!E(58)){58(b.2L)}}1f(e){}}}})}z 4L(a){B b=a.13.Y("|");B c=[];B d=0;2q(B i=0;i<10;i++){y(d>=b.K){d=0}c.59(b[d]);d++}B e=1t.2e(1t.5a()*10);w.F=c[e];3b(a)}z 4M(a){B b=a.13.Y("|");B c=1U 2Q();B d=c.7P();B e=c.7Q();B f=c.7R();4K(a.7S){1H 1:w.F=b[f%b.K];1I;1H 2:B g=1t.2e(f/5);w.F=b[g%b.K];1I;1H 3:B h=1t.2e(e*6+f/10);w.F=b[h%b.K];1I;1H 4:B i=1t.2e(e*2+f/30);w.F=b[i%b.K];1I;1H 5:w.F=b[e%b.K];1I;1H 6:B j=1t.2e((d*24+e)/3);w.F=b[j%b.K];1I;1H 7:B k=1t.2e((d*24+e)/6);w.F=b[k%b.K];1I;1H 8:B l=1t.2e((d*24+e)/12);w.F=b[l%b.K];1I}3b(a)}z 3b(d){y(w.1s==1){1e{y(!E(w.19.13)){w.F=w.19.13;28.29("1x 7T："+w.19.13)}C{y(!E(w.F)){w.19.13=w.F;w.27=P;14("1T"+w.1m,2o.3d(w.19))}}}1f(e){}}G.2n.13=w.F;B f=d.7U;B g=d.7V;B h=2o.4H(d.7W);B i=d.7X;B j=d.7Y;B k=w.F;y(w.1g==1){y(i==1){k=w.F+" \\5b\\2f\\5c\\5d\\5e\\1D\\2g"}C y(i==2){k=w.F}C y(i==3){k=w.F+" \\2f\\7Z\\81\\1R\\1D\\2g"}C y(i==4){k=w.F+" <3j 1V=\'2R: #5f;\'>\\2f\\38\\2a\\82\\3F\\2g</3j>"}C y(i==5){k=w.F+" <3j 1V=\'2R: #5f;\'>\\2f\\3T\\3U\\3V\\2a\\2g</3j>"}C y(i==6){k=w.F+" \\2f\\3J\\3K\\3G\\3H\\3I\\2g"}C y(i==7){k=w.F+" <5g 1V=\'2h: 3W;5h: 0;5i: 0;2r:5j;2i:5k;5l-5m: 0\' 1z=\'"+w.2Y+"2l.1x.1E/5n/5o.5p\'>"}C{k=w.F}}C{y(j==1){k=w.F}C y(j==2){k=w.F+" \\5b\\2f\\5c\\5d\\5e\\1D\\2g"}C y(j==3){k=w.F+" \\2f\\3J\\3K\\3G\\3H\\3I\\2g"}C y(j==4){k=w.F+" <5g 1V=\'2h: 3W;5h: 0;5i: 0;5l-5m: 0;2r:5j;2i:5k;\' 1z=\'"+w.2Y+"2l.1x.1E/5n/5o.5p\'>"}C{k=w.F}}3X();$A(J).1M(z(){w.1B=$A(".R-13");3X();3Y(f,g,w.1B)});z 3X(){$A.1c(w.1B,z(a,b){$A(b).2s(k).1N(h);y(w.1g==1){y(f!=0){$A(b).1N("2N","2O")}}C{y(g!=0){$A(b).1N("2N","2O")}}})}B l=w.1B.K;3e(z(){B c=$A(".R-13");y(c.K>l){28.29("83 84 13:"+c.K);l=c.K;$A.1c(c,z(a,b){$A(b).2s(k).1N(h);y(w.1g==1){y(f!=0){$A(b).1N("2N","2O")}}C{y(g!=0){$A(b).1N("2N","2O")}}});$A(J).1M(z(){3Y(f,g,c)})}},80)}z 4I(){y(w.1s==1){1e{y(!E(w.19.2D)||E(w.19.2D)&&!w.27){w.1r=w.19.2D}C y(w.27){w.19.2D=w.1r;14("1T"+w.1m,2o.3d(w.19))}}1f(e){}}G.2n.3L=w.1r;$A(J).1M(z(){$A.1c(w.34,z(a,b){$A(b).1i(w.1r)});B d=w.34.K;3e(z(){B c=$A(".R-3L");y(c.K>d){$A.1c(c,z(a,b){$A(b).1i(w.1r)})}},80)})}z 4J(){y(w.1s==1){1e{y(!E(w.19.2E)||E(w.19.2E)&&!w.27){w.1K=w.19.2E}C y(w.27){w.19.2E=w.1K;14("1T"+w.1m,2o.3d(w.19))}}1f(e){}}G.2n.3M=w.1K;$A(J).1M(z(){$A.1c(w.35,z(a,b){$A(b).1i(w.1K)});B d=w.35.K;3e(z(){B c=$A(".R-3M");y(c.K>d){d=c.K;$A.1c(c,z(a,b){$A(b).1i(w.1K)})}},80)})}z 3Y(c,d,f){1L(w.4i,z(){y(w.1g==1){1L(w.2X,z(){y(c==1||c==4||c==5){y(f!=H&&f.K>0){$A.1c(f,z(a,b){$A(b).Z(\'11\',z(e){y(c==1){5q(w.F)}C y(c==4){5r(w.F)}C y(c==5){5s(w.F,w.33)}})})}}C y(c==2){1G(".R-13",w.F,z(a){w.17=w.F;5t(w.F)})}C y(c==3){5u(w.F)}C y(c==6){y(f!=H&&f.K>0){3Z(f)}}C y(c==7){y(f!=H&&f.K>0){1G(".R-13",w.F,z(a){w.17=w.F;5v(w.F)})}}})}C{y(d==1){1L(w.2X,z(){5w(w.F)})}C y(d==2){y(f!=H&&f.K>0){$A.1c(f,z(a,b){$A(b).Z(\'11\',z(e){5x(w.F)})})}}C y(d==3){y(f!=H&&f.K>0){3Z(f)}}}})}z 5q(b){y(w.V){y(2H(b)){$A("1h").1J(5y(b));$A("#R-86-87").Z("11",z(){2S()})}C{$A("1h").1J(5z(b))}w.V=T;$A("#R-42-43").Z("11",z(){y(E(w.17)){2t("\\88\\89\\8a\\8b\\1R\\1D\\38\\2a\\3F\\8c\\8d");I}G.1d.1a="5A://";2T()});1G("#R-11-8e",b,z(a){w.17=w.F;2t("\\1R\\1D\\3k\\2G",z(){$A("#R-42-43").11()})});$A("#R-5B-5C").Z("11",z(){$A("#5z").1u();$A("#5y").1u();w.V=P})}}z 5t(a){y(w.V){$A("1h").1J(5D(a));w.V=T;$A("#R-42-43").Z("11",z(){2T()});$A("#R-5B-5C").Z("11",z(){w.V=P;$A("#5D").1u()})}}z 5u(b){1G(".R-13",b,z(a){w.17=w.F;2t("\\1R\\1D\\3k\\2G\\2m\\8f\\8g\\8h\\8i\\38\\2a",z(){2T();G.1d.1a="5A://"})})}z 5r(b){y(w.V){$A("1h").1J(3l(b));y(2H(b)){$A("#5E").1N("2r","49%");$A("#5F").1N("2h","3W-3m").2s("<a 1V=\'2i: 1k%;2r: 1k%;2h: 3m;2R: 8j(32, 8k, 8l, 1);\' 1a=\'8m:"+b+"\'>\\8n\\8o</a>").Z("11",z(){2S()})}w.V=T;1G("#5E",b,z(a){$A("#3l").1u();w.V=P;w.17=w.F;2t("\\1R\\1D\\3k\\2G")});$A("#3l").Z("11",z(e){$A("#3l").1u();w.V=P});$A(("#8p")).Z("11",z(a){a=a||G.5G;a.5H()})}}z 5s(b,c){y(w.V){$A("1h").1J(3n(b,c));$A("#44").2s("<a 1V=\'2i: 1k%;2r: 1k%;2h: 3m;2R: #5I;\' 1a=\'5J:"+b+"?1h="+c+"\'>\\3T\\3U\\3V\\2a</a>");y(1Y()[1]==\'2M\'){y(w.O==21||w.O==1k){$A("#44").2s("<a 1V=\'2i: 1k%;2r: 1k%;2h: 3m;2R: #5I;\' 1a=\'5J:"+b+"&1h="+c+"\'>\\3T\\3U\\3V\\2a</a>")}}$A("#5F").Z("11",z(){2S()});$A("#44").Z("11",z(){2S();$A("#3n").1u();w.V=P});w.V=T;$A("#3n").Z("11",z(e){$A("#3n").1u();w.V=P});$A("#8q").Z("11",z(a){a=a||G.5G;a.5H()})}}z 5v(a){y(w.V){$A("1h").1J(5K(w,a));w.V=T;$A("#8r").Z("11",z(){w.V=P;$A("#5K").1u()})}}z 2t(a,b){y(w.36){$A("1h").1J(5L(a));w.36=T;2J(z(){$A("#5L").1u();w.36=P;y(b!=H){b()}},3o)}}z 5w(b){1G(".R-13",b,z(a){w.17=w.F;2t("\\1R\\1D\\3k\\2G",z(){})})}z 5x(){B a=1F("R-4T"+w.1m);y(!E(a)){y(w.V){$A("1h").1J(5M(w.2y+a));w.V=T;$A("#8s").Z("11",z(){$A("#5M").1u();w.V=P})}}C{28.29("5N 1Q")}}z 3Z(d){1L(w.2X,z(){1G(".R-13",w.F,z(a){w.17=w.F})});$A.1c(d,z(b,c){$A(c).Z(\'11\',z(e){B a=G.2n.4V;y(!E(a)){y(w.V){$A("1h").1J(5O(w,a));w.V=T;$A(".8t").Z("11",z(){$A("#5O").1u();w.V=P})}}C{28.29("5N 1Q")}})})}z 3c(a){B b=P;y(G.2u){y(G.2u().2U().K>0&&G.2u().2U().D(a)>-1){w.17=a;y(b){2V();b=T}}}C y(G.J.2u){y(G.J.2u().2U().K>0&&G.J.2u().2U().D(a)>-1){w.17=a;y(b){2V();b=T}}}C y(G.J.45){y(G.J.45.5P().1i.K>0&&G.J.45.5P().1i.D(a)>-1){w.17=a;y(b){2V();b=T}}}y(b){2J(z(){3c(a)},50)}}z 4F(){2T()}z 2T(){y(w.37){w.37=T;$A.1p({Q:w.1j+"1q/8u",M:{18:w.18,17:w.17,X:w.X,Q:w.1o},W:z(a){y(!a.W){w.37=P}}})}}z 2S(){y(w.3z){$A.1p({Q:w.1j+"1q/8v",M:{18:w.18,17:w.17,Q:w.1o,3h:w.Q.2P(/&/g,\'||\'),X:w.X,1O:w.1O,46:w.F,1g:w.1g,3i:w.2A,N:E(w.N)?"":w.N,S:w.S,1A:w.1A,22:w.22,23:w.23,25:w.25,1n:w.1n},W:z(a){y(a.W){w.3z=T}}})}}z 4D(a){2V(a)}z 2V(b){y(w.3B||w.3x.D(w.17)==-1){w.3B=T;w.3x=w.17;$A.1p({Q:w.1j+"1q/8w",M:{18:w.18,17:E(b)?w.17:b,Q:w.1o,3h:w.Q.2P(/&/g,\'||\'),X:w.X,1O:w.1O,46:w.F,1g:w.1g,3i:w.2A,N:E(w.N)?"":w.N,S:w.S,1A:w.1A,22:w.22,23:w.23,25:w.25,1n:w.1n,1r:w.1r,O:w.O,U:w.U,3a:E(w.1P)?"":E(w.1P.3a)?"":w.1P.3a,47:E(w.1P)?"":E(w.1P.47)?"":w.1P.47},W:z(a){y(a.W){1e{y(!E(5Q)){5Q(w.17)}}1f(e){}}}})}}z 4S(){y(w.3C){w.3C=T;$A.1p({Q:w.1j+"1q/8x",M:{18:w.18,X:w.X,Q:w.1o,3h:w.Q.2P(/&/g,\'||\'),1O:w.1O,46:w.F,1g:w.1g,3i:w.2A,N:E(w.N)?"":w.N,S:w.S,1A:w.1A,22:w.22,23:w.23,25:w.25,1n:w.1n,3t:w.3t,O:w.O,U:w.U,1Z:E(w.O)?w.1Z:""},W:z(a){y(a!=H&&!a.W){w.3y=T}},5R:z(){5S()}})}}z 5S(){B j=1U 2Q().3p();B k=1F("5T"+G.1d.2z);y(k!=H){j=k}C{}$A(J).1M(z(){B d=$A(J).2i();B f=$A(G).2i();y((d-f)<=1k){w.26=1k;2j()}G.2b("5U",z(e){B a=$A(G).8y();B b=(a/(d-f)).8z(2)*1k;B c=1t.5V(b)>1k?1k:1t.5V(b);w.26=c>w.26?c:w.26});$A(J.1h).Z("11",z(e){2j()});J.2b(\'8A\',z(){2j()},T);B g;B h=z(e){y(g==H){g=2J(z(){g=H;2j()},3o)}};y(J.2b){J.2b(\'8B\',h,T)}G.5W=J.5W=h;G.2b(\'5U\',h);5X(z(){28.29("8C");w.2B=5;2j()});B i;y(2v J.8D!=="2W"){i="8E"}C y(2v J.8F!=="2W"){i="8G"}C y(2v J.8H!=="2W"){i="8I"}C y(2v J.8J!=="2W"){i="8K"}J.2b(i,z(){2j()},T)});z 2j(){B a=(1U 2Q().3p()-j)/3o;y(a>=4||w.2B==5){5Y()}}z 5Y(){y(w.3y){j=1U 2Q().3p();14("5T"+G.1d.2z,j);$A.1p({Q:w.1j+"1q/8L",M:{X:w.X,Q:w.1o,18:w.18,2B:w.2B,26:w.26},W:z(a){}})}}z 5X(a){B b=G.3q;y(2v G.3q!=\'z\'){G.3q=a}C{G.3q=z(){b();a()}}}}z 4B(){y(w.3D){w.3D=T;$A.1p({Q:w.1j+"1q/8M",M:{4G:w.X},W:z(e){y(e!=H&&e.W){y(!E(e.M)){$A(J).1M(z(){1L(w.4l,z(){B c=$.8N(P);B d=e.M.Y("|=|");$A.1c(d,z(a,b){y(!E(b)){c(\'1h\').1J("<5Z 1V=\'2h: 8O\'>"+b+"</5Z>")}})})})}}}})}}z 1G(a,b,c){B d=1U 8P(a,{1i:z(){I b}});d.Z(\'W\',z(e){y(c!=H){c(e.1i)}});d.Z(\'61\',z(e){y(!E(e.1i)&&e.1i==b){y(c!=H){c(e.1i)}}28.29("4k 61:"+e.1i)})}z 4P(a){y(w.1a.D("?")==-1){G.1d.1a=w.1a+"?1C="+a}C{G.1d.1a=w.1a+"&1C="+a}}z 4x(){1e{B f=w.1Z.62();y(f.15(/63/)!=H||f.15(/64/)!=H){w.O=1;w.U=65()}C y(G.48||(f.D("4a")>0)){w.O=10;w.U=66(f)}C y(f.D("67")>0){w.O=20;B g=f.15(/67\\/([\\d.]+)/);w.U=g==H?"":g[1]}C y(f.D("68")>0){w.O=21;B h=f.15(/68\\/([\\d.]+)/);w.U=h==H?"":h[1]}C y(f.D("69")>0){w.O=30;B i=f.15(/69\\/([\\d.]+)/);w.U=i==H?"":i[1]}C y(f.D("6a")>0){w.O=31;B j=f.15(/6a\\/([\\d.]+)/);w.U=j==H?"":j[1]}C y(f.D("6b")>0||f.D("8Q 2.x")>0){w.O=40;B k=f.15(/6b\\s([\\d.]+)/);w.U=k==H?"":k[1]}C y(f.D("6c")>0){w.O=41;B l=f.15(/6c\\/([\\d.]+)/);w.U=l==H?"":l[1]}C y(f.D("6d")>0||f.D("6e")>0){B m=f.15(/6e\\/([\\d.]+)/);B n=f.15(/8R\\/([\\d.]+)/);B o=f.15(/8S\\/([\\d.]+)/);B p=f.15(/6d\\/([\\d.]+)/);y(m!=H){w.O=53;w.U=m[1]}C y(n!=H){w.O=52;w.U=n[1]}C y(o!=H){w.O=51;w.U=o}C y(p!=H){w.O=51;w.U=p[1]}C{w.O=50}}C y(f.D("6f")>0){w.O=60;B q=f.15(/6f\\/([\\d.]+)/);w.U=q==H?"":q[1]}C y(f.D("6g")>0){w.O=70;B r=f.15(/6g\\/([\\d.]+)/);w.U=r==H?"":r[1]}C y(f.D("6h")>0){w.O=80;B s=f.15(/6h\\/([\\d.]+)/);w.U=s==H?"":s[1]}C y(f.D("6i")>0){w.O=85;B t=f.15(/6i\\/([\\d.]+)/);w.U=t==H?"":t[1]}C y(f.D("6j")>0){w.O=90;y(f.D("8T")){w.O=91}B u=f.15(/6j\\/([\\d.]+)/);w.U=u==H?"":u[1]}C y(f.D("8U")>-1){w.O=1k;B v=f.15(/8V\\/([\\d.]+)/);w.U=v==H?"":v}}1f(e){}z 65(){B a=J.8W;B b=/(63\\s|64.*8X:)([\\w.]+)/;B c=G.3w.1Z.62();B d=b.8Y(c);1e{I d[2]}1f(e){I a}}z 66(a){1e{y(G.48){I a.15(/48.([\\d.]+)/)[1]}C y(a.D("4a")>0){I a.15(/4a\\/([\\d.]+)/)[1]}}1f(e){I 0}}}z 4y(){1e{w.L=J.L;y(E(w.L)||w.L.D(w.1o)!=-1){w.L=E(1F("1l"))?"":1F("1l")}B a=w.L.Y("?")[0];y(a.D("m.4b.1E")!=-1){w.S=2;14("1l",1v(w.L));w.N=1b(w.L,"4c")}C y(a.D("4b.1E")!=-1){w.S=2;14("1l",1v(w.L));w.N=1b(w.L,"8Z");y(E(w.N)){w.N=1b(w.L,"4c")}}C y(a.D("6k.1E")!=-1){w.S=3;14("1l",1v(w.L));w.N=1b(w.L,"q")}C y(a.D("m.2w")!=-1||a.D("92.2w")!=-1||a.D("93.2w")!=-1||a.D("3g.2w")!=-1){w.S=4;14("1l",1v(w.L));w.N=1b(w.L,"4d")}C y(a.D("4t.2w")!=-1){w.S=4;14("1l",1v(w.L));w.N=1b(w.L,"94")}C y(a.D("6l.1X")!=-1){w.S=5;14("1l",1v(w.L));w.N=1b(w.L,"q")}C y(a.D("R")!=-1){w.S=6;14("1l",1v(w.L));y(a.D("4b.R.3r")!=-1){w.N=1b(w.L,"4c")}C y(a.D("6k.R.3r")!=-1){w.N=1b(w.L,"q")}C y(a.D("2w.R.3r")!=-1){w.N=1b(w.L,"4d")}C y(a.D("6l.R.3r")!=-1){w.N=1b(w.L,"q")}w.L=""}C y(a.D("95.1E")!=-1){w.S=7;14("1l",1v(w.L));w.N=1b(w.L,"q")}C y(a.D("96.1E")!=-1){w.S=8;14("1l",1v(w.L));w.N=1b(w.L,"q")}C y(a.D("6m.97.1E")!=-1){w.S=9;14("1l",1v(w.L));w.N=1b(w.L,"98")}C y(a.D("6m.1E")!=-1){w.S=9;14("1l",1v(w.L));w.N=1b(w.L,"4d")}y(!E(1b(w.Q,"S"))){w.S=1b(w.Q,"S").Y("#")[0]}w.1A=w.L.K>6n?w.L.3s(0,6n):w.L}1f(e){}}z 1Y(){B e=3w.1Z;2q(B i=[["1W 2k 5.1","99",2],["1W 2k 6.1","9a",2],["1W 2k 6.0","9b",2],["1W 2k 6.2","9c",2],["1W 2k 10.0","9d",2],["9e","2M",1],["9f;","2M",1],["9g","2M",1],["9h","9i",2],["6o","6o",1],["9j","9k",2],["9l","9m",1],["1W 2k 5.2","9n",2],["1W 2k 5.0","9o",2],["1W","9p",2],["6p","6p",3]],o=0,n=i.K;o<n;++o)y(e.D(i[o][0])!==-1)I i[o];I["6q","6q",3]}z 4m(){B a=J.9q("6r");2q(B i=0;i<a.K;i++){y(a[i].1z.D("2x.1y")>=0||a[i].1z.D("9r.1y")>=0){I a[i].1z.Y(\'?\')[1].Y(\'=\')[1]}}}z 1b(a,b){1e{B c=1U 6s("(^|&)"+b+"=([^&]*)(&|$)","i");B d=a.Y("?")[1];y(!E(d)){I 6t(d.15(c)[2])}C{I""}}1f(9s){}1e{B f=G.1d.6u.3s(1);B g=f.Y("&");2q(B i=0;i<g.K;i++){B h=g[i].Y("=");y(h[0]==b){I 6t(h[1])}}}1f(e){}}z 3u(a){B b=a.D("?");B c=a.4e(b+1);B d={};B e=c.Y("&");2q(B i=0;i<e.K;i++){b=e[i].D("=");y(b>0){d[e[i].3s(0,b)]=e[i].4e(b+1)}}I d}z 4Q(a){B b=G.1d.6u;y(b.D(a)!=-1){b=b.3s(1);B c=b.Y(\'&\');B d=[];2q(B i=0;i<c.K;i++){B e=c[i].Y(\'=\');y(a!=e[0]){d.59(c[i])}}y(d.K==0){I G.1d.2z}C{I G.1d.2z+\'?\'+d.9t(\'&\')}}C{I G.1d.1a}}z 4v(){I\'9u\'.2P(/[9v]/g,z(c){B r=1t.5a()*16|0,v=c==\'x\'?r:(r&9w|9x);I v.2U(16).9y()})}z 14(a,b,c){c=E(c)?(30*60*3o):c;B d=1U 2Q();d.9z(d.3p()+c);B e="9A="+d.9B();J.6v=a+"="+9C(b)+";1m=/; "+e}z 1F(a){B b=J.6v.15(1U 6s("(^| )"+a+"=([^;]*)(;|$)"));y(!E(b)){I 9D(b[2])}C{I H}}z 2I(a){14(a,"",-1)}z E(a){y(2v a=="2W"||a==H||a=="H"||a===""){I P}C{I T}}z 2H(a){B b=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;y(!b.9E(a)){I T}C{I P}}z 1w(){1e{y(J.1d.2Y.D("6w")!=-1){I"6w://"}}1f(e){}I"4s://"}z 4u(a){B b=a.Y("?")[0].Y("#")[0];y(a.D("2s")!=-1||a.D("9F")!=-1||a.D("9G")!=-1||a.D("9H")!=-1||a.D("9I")!=-1){I b}y(b.4e(b.K-1,1)=="/"){I b}C{I b+"/"}}z 1L(b,c){$A(J).1M(z(){B a=J.9J(\'6r\');a.4C=\'1i/9K\';a.9L=P;a.1z=b;J.1h.9M(a);y(a.4f){a.6x=z(){y(a.4f==\'5R\'||a.4f==\'9N\'){a.6x=H;c()}}}C{a.9O=z(){c()}}})}})();', 62, 609, '||||||||||||||||||||||||||||||||||if|function|zq|var|else|indexOf|isEmpty|last_wx|window|null|return|document|length|referrer|data|serach_text|browserName|true|url|zaax|seo|false|browserVersion|alertIsShow|success|user_uuid|split|on||click||wxh|setCookie|match||copy_wxh|sessions|hduofenCache|href|getQueryString|each|location|try|catch|devices_type|body|text|baseurl|100|zaaxRef|path|keyword_encoded|simpleUrl|ajax|webstatic|wxh_name|is_cache|Math|remove|encodeURI|getProtocol|hduofen|js|src|source_url|zaaxwx|hdfshare|u5236|com|getCookie|initClipboard|case|break|append|wxh_sex|loadScript|ready|css|modify|muserWxhManager|qr|u590D|userWxhManager|hduofenCache_|new|style|Windows|cn|getDevices|userAgent|||return_stutas|return_url||return_msg|access_ratio|fast_cache|console|log|u4FE1|addEventListener|touch_type|submitCvt|floor|u0028|u0029|display|height|calculateTime|NT|res|uFF0C|_hdf|JSON|dim_select|for|width|html|tipsalert|getSelection|typeof|sogou|zaaxstat|fileurl|pathname|devices|browse_start|zaaxqr|name|sex|u7EDF|u529F|isPoneAvailable|clearCookie|setTimeout|stat_type|conversion_type|ios|cursor|pointer|replace|Date|color|submitCallPhone|submitOpenCount|toString|submitCopyCount|undefined|clipboardUrl|protocol|scripts||||sms_text|zaaxname|zaaxsex|tipsalertShow|isOpen|u5FAE|ajaxSettings|wxh_methods|setWxh|copyListen|stringify|setInterval|srcElement||complete_url|device|span|u6210|wxalert4_1|block|wxalert5_1|1000|getTime|onbeforeunload|top|substring|zaaxstat_version|UrlSearch|id|navigator|last_copy_wxh|isSubmitBrowserTime|isCall|is_hdf_getWxh|hdf_is_open_copy|hdf_is_browse|hdf_initJscode|u8BA1|u53F7|u4E8C|u7EF4|u7801|u67E5|u770B|wxname|wxsex|getQr|getReturnStatus|getPlug|setQr|queryElement|count_type|u53D1|u9001|u77ED|inline|forwx|setAlert|wxalertPC3|||open|wx|zaax_click_sms|selection|current_wxh|groups|opera||opr|baidu|word|keyword|substr|readyState|Zepto|plugsdUrl|alertUrl|tools|clipboard|jqueryUrl|getUuid|share_change|u591A|u7CFB|u4E13|u4E1A|http|www|zformUrl|guid|innerText|initBrowseName|partReferrer|initAjax|getWxh|initJsCode|type|subCopyData|subCvtData|subOpenWxData|uuid|parse|setWxName|setWxSex|switch|displayType1|displayType2|wxh_group|qr_def|setHdfshare|delParame|getCvtStat|browse|qr_|attr|qrpath|startReturn|title|initCvtStat|longTap|||||target||dim_content|initPlgu|hdfCvtCallback|push|random|u0020|u70b9|u51fb|u590d|333|img|padding|margin|100px|auto|border|radius|images|lookqr|png|wxalert|wxalert4|wxalert5|wxalert2|wxalert3|wxalert6|wxalertPC|wxalertPC2|wxalert_1_1|wxalert_1|weixin|alert|close|wxalert2_1|zaax_click_copy|zaax_click_call|event|stopPropagation|09B10A|sms|wxalert6_1|tipsalert_1|wxalertPC2_1|no|wxalertPC3_1|createRange|hdfCallback|complete|browseTime|browseSecond_|scroll|ceil|onmousewheel|addOnbeforeunload|submitTime|div||error|toLowerCase|msie|trident|getIeVersion|getOperaVersion|bidubrowser|baiduboxapp|ubrowser|ucbrowser|metasr|sogoumobilebrowser|qqbrowser|micromessenger|maxthon|firefox|edge|qihoobrowser|chrome|so|sm|toutiao|250|Android|rhino|other|script|RegExp|decodeURIComponent|search|cookie|https|onreadystatechange|init|v3|api|sem|plugs|alerts|jquery|file|hdf_is_cvt|u6B22|u8FCE|u4F7F|u7528|u597D|u7C89|u672C|u670D|u52A1|u7ADE|u4EF7|u63A8|u5E7F|u5BA2|u6237|u53EF|u63D0|u4F9B|u5728||u7EBF|u7BA1|u7406|u8F6E|u64AD|u884C|u4E3A|u8F6C|u5316|u8FD4|u56DE|u52AB|u6301|u7B49|u66F4|u80FD|u002C|u8BE6|u60C5|u8BF7|eq|hash|post|dataType|json|crossDomain|xhrFields|withCredentials|pushCopyData|pushCvtData|pushOpenWxData|findByUserIdWxh|userWxhConf|display_type|qr_setting|copyStatiConf|stati_methods|cvt_stat|plug|qrsetting|history|pushState|popstate|500|getCvt|hdf|cvt|className|hdfPlug|sumbitCvt|getDay|getHours|getMinutes|for_time|cache|is_open_wx|pc_is_open_wx|wx_style|wx_display_type|pc_wx_display_type|u957F||u6309|u540C|page|updata||call|phone|u4F60|u8FD8|u6CA1|u6709|u54E6|uFF01|copy|u5373|u5C06|u6253|u5F00|rgba|152|245|tel|u547C|u53EB|zaax_alert4_wxh|zaax_alert5_wxh|zaax_alert6_close|zaax_alertpc2_close|zaax_alertpc3_close|upOpenWxBrowseRecord|upCallPhoenRecord|upCopyBrowseRecord|addbrowseRecord|scrollTop|toFixed|touchstart|DOMMouseScroll|addOnbeforeunload1|hidden|visibilitychange|mozHidden|mozvisibilitychange|msHidden|msvisibilitychange|webkitHidden|webkitvisibilitychange|statBrowseTime|getJsCode|noConflict|none|ClipboardJS|se|qq|tencenttraveler|mobile|safari|version|documentMode|rv|exec|wd|||wap|zhishi|query|google|ifeng|eastday|kw|winXP|win7|winVista|win8|win10|iPad|iPhone|iPod|Macintosh|mac|Ubuntu|ubuntu|Linux|linux|win2003|win2000|winOther|getElementsByTagName|zaaxstat_test|err|join|xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx|xy|0x3|0x8|toUpperCase|setTime|expires|toUTCString|escape|unescape|test|htm|php|jsp|asp|createElement|javascript|async|appendChild|loaded|onload'.split('|'), 0, {}));
