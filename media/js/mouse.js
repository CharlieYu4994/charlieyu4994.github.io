"use strict";
var _createClass = function() {
    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
    }
}();

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}! function(P) {
    P.extend({
        shuicheMouse: function(t) {
            (new e).init(t)
        }
    });
    var e = (_createClass(t, [{
        key: "init",
        value: function(t) {
            ! function() {
                for (var a = 0, t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
                    var i = (new Date).getTime(),
                        n = Math.max(0, 16.7 - (i - a)),
                        o = window.setTimeout(function() {
                            t(i + n)
                        }, n);
                    return a = i + n, o
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                    clearTimeout(t)
                })
            }(), t && P.extend(!0, this.defaluts, t);
            var e = P("<canvas id='shuicheCanvas' style='position: fixed; left: 0px; top: 0px; z-index: 2147483647;pointer-events:none;'></canvas>");
            P("body").append(e);
            var i = this.defaluts.type;
            1 == i && this.mouseType()
        }
    }, {
        key: "mouseType",
        value: function() {
            var t, o, a, h = window.innerWidth,
                s = window.innerHeight,
                i = 70,
                r = 1,
                l = 1,
                c = 1.5,
                n = 25,
                d = .5 * h,
                f = .5 * s,
                u = !1;

            function e(t) {
                d = t.clientX - .5 * (window.innerWidth - h), f = t.clientY - .5 * (window.innerHeight - s)
            }

            function y(t) {
                u = !0
            }

            function w(t) {
                u = !1
            }

            function p(t) {
                1 == t.touches.length && (t.preventDefault(), d = t.touches[0].pageX - .5 * (window.innerWidth - h), f = t.touches[0].pageY - .5 * (window.innerHeight - s))
            }

            function v(t) {
                1 == t.touches.length && (t.preventDefault(), d = t.touches[0].pageX - .5 * (window.innerWidth - h), f = t.touches[0].pageY - .5 * (window.innerHeight - s))
            }

            function m() {
                h = window.innerWidth, s = window.innerHeight, t.width = h, t.height = s
            }

            function x() {
                u ? r += .02 * (c - r) : r -= .02 * (r - l), r = Math.min(r, c), o.clearRect(0, 0, o.canvas.width, o.canvas.height);
                for (var t = 0, e = a.length; t < e; t++) {
                    var i = a[t],
                        n = {
                            x: i.position.x,
                            y: i.position.y
                        };
                    i.offset.x += i.speed,
                    i.offset.y += i.speed,
                    i.shift.x += (d - i.shift.x) * i.speed,
                    i.shift.y += (f - i.shift.y) * i.speed,
                    i.position.x = i.shift.x + Math.cos(t + i.offset.x) * (i.orbit * r),
                    i.position.y = i.shift.y + Math.sin(t + i.offset.y) * (i.orbit * r),
                    i.position.x = Math.max(Math.min(i.position.x, h), 0),
                    i.position.y = Math.max(Math.min(i.position.y, s), 0),
                    i.size += .01 * (i.targetSize - i.size),
                    Math.round(i.size) == Math.round(i.targetSize) && (i.targetSize = 1 + 2 * Math.random()),
                    o.beginPath(),
                    o.fillStyle = i.fillColor,
                    o.strokeStyle = i.fillColor,
                    o.lineWidth = i.size,
                    o.moveTo(n.x, n.y),
                    o.lineTo(i.position.x, i.position.y),
                    o.stroke(),
                    o.arc(i.position.x, i.position.y, i.size / 2, 0, 2 * Math.PI, !0),
                    o.fill()
                }
                window.requestAnimationFrame(x)
            }(t = document.getElementById("shuicheCanvas")) && t.getContext && (o = t.getContext("2d"), window.addEventListener("mousemove", e, !1), window.addEventListener("mousedown", y, !1), window.addEventListener("mouseup", w, !1), document.addEventListener("touchstart", p, !1), document.addEventListener("touchmove", v, !1), window.addEventListener("resize", m, !1), function() {
                a = [];
                for (var t = 0; t < n; t++) {
                    var e = {
                        size: 1,
                        position: {
                            x: d,
                            y: f
                        },
                        offset: {
                            x: 0,
                            y: 0
                        },
                        shift: {
                            x: d,
                            y: f
                        },
                        speed: .01 + .04 * Math.random(),
                        targetSize: 1,
                        fillColor: "#" + (9453632 * Math.random() + 11184810 | 0).toString(16),
                        orbit: .5 * i + .5 * i * Math.random()
                    };
                    a.push(e)
                }
            }(), m(), x())
        }
    }]), t);

    function t() {
        _classCallCheck(this, t), this.defaluts = {
            type: 1,
            color: !1
        }, this.version = "0.0.1"
    }
}(jQuery);