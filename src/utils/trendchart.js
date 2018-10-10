export function trendInit() {
  if (typeof $("#chartData")[0] == "undefined")
    return;
  Init()
}
function Init() {
  $("#chartLine").html("");
  var row = $("#chartData").children("tr");
  var t = "", c = "", n = "", r = 0, k = 0, u = new Array(), l = new Array();
  for (var i = row.length - 1; i >= 0; i--) {
    var col = row.eq(i).children("td");
    for (var j = col.length - 1; j >= 0; j--) {
      // t = col.eq(j).attr("lgroup") || "";
      n = col.eq(j)[0].className;
      if(n.indexOf('js-fold') > -1){
        // c = n.indexOf("red") == -1 ? "#387ec0" : "#b94c59";
        if(n.indexOf('blue') > -1){
          t=19
          c = "#387ec0"
        }else if(n.indexOf("red") > -1){
          t=18
          c = "#b94c59"
        }else if(n.indexOf("orange") > -1){
          t=17
          c = "#e2b46f"
        }else if(n.indexOf("cornflower") > -1){
          t=16
          c = "#899bd2"
        }else if(n.indexOf("goral") > -1){
          t=15
          c = "#f97677"
        }else if(n.indexOf("brown") > -1){
          t=14
          c = "#9b5742"
        }else if(n.indexOf("green") > -1){
          t=13
          c = "#419D64"
        }else if(n.indexOf("gray") > -1){
          t=12
          c = "#949494"
        }else if(n.indexOf("plum") > -1){
          t=11
          c = "#fe9e9e"
        }
      }else {
        t = ""
      }
      if (0 >= t.length) { continue; }
      if (n.indexOf("ball") > -1) { r = 8; }
      l[k] = f_a(col.eq(j), t, r);
      if (u && u[k] && u[k].g == l[k].g) { f_paint(f_b(u[k], l[k], c)); }
      k++;
    }
    k = 0; u = l; l = new Array();
  }
};
var f_paint = function (p) {
  if (!p || p == "undefined")
    return;
  $("#chartLine").append(paint(p, 1.5));
};
var f_b = function (x, y, z) {
  var x1 = x.l - y.l, x2 = x.t - y.t;
  var s = Math.round(Math.sqrt(Math.pow(x1, 2) + Math.pow(x2, 2)));
  var i = x.r, t, p;
  if (1 > i) {
    if (x2 / x1 >= x.rh / x.rw) { i = x.rh; }
    else { i = x.rw; }
  }
  t = Math.round((x1 * i) / s);
  p = Math.round((x2 * i) / s);
  var a = { s: { l: x.l - t, t: x.t - p }, e: { l: y.l + t, t: y.t + p }, c: z };
  return a;
};
var f_a = function (o, p, r) {
  var _o = o.position(), _w = o.width() / 2, _h = o.height() / 2;
  return {
    l: _o.left + _w,
    t: _o.top + _h,
    g: p,
    rw: _w - 1,
    rh: _h - 1,
    r: r
  };
};
var paint = function (c, a) {
  return (_ie && _vn < 9) ? _i(c, a) : _g(c, a);
};
var _ie = (function c() {
  return (window.navigator.userAgent.toString().toLowerCase().indexOf('msie') != -1)
})();
var _vn = (function () {
  var m, k = 3,
    n = document.createElement("div"),
    l = n.getElementsByTagName("i");
  while (n.innerHTML = "<!--[if gt IE " + (++k) + "]><i></i><![endif]-->", l[0]) { }
  return k > 4 ? k : m
})();
var _i = function (o, p) {
  var k = document.createElement("<v:line></v:line>");
  k.from = o.e.l + "," + o.e.t;
  k.to = o.s.l + "," + o.s.t;
  k.StrokeColor = o.c || "#000";
  k.StrokeWeight = p || 1.5 + "px";
  k.style.cssText = "position:absolute;top:0;left:0";
  k.style.visibility = "visible";
  k.coordOrigin = "0,0";
  return k;
};
var _g = function (r, s) {
  var k = document.createElement("canvas");
  var u = Math.min(r.s.t, r.e.t), v = Math.min(r.s.l, r.e.l);
  var w = Math.abs(r.s.l - r.e.l);
  k.width = w < 2 ? 2 : w;
  k.height = Math.abs(r.s.t - r.e.t);
  k.style.top = u + "px";
  k.style.left = v + "px";
  k.style.position = "absolute";
  k.style.visibility = "visible";
  var d = k.getContext("2d");
  d.save();
  d.strokeStyle = r.c || "#000";
  d.lineWidth = s || 1.5;
  d.beginPath();
  d.moveTo((r.s.l - v) <= 2 ? 1 : (r.s.l - v), r.s.t - u);
  d.lineTo((r.e.l - v) <= 2 ? 1 : (r.e.l - v), r.e.t - u);
  d.closePath();
  d.stroke();
  d.restore();
  return k;
};
