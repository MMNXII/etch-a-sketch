!function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(r,a,function(e){return n[e]}.bind(null,a));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var r=t(1),a=t(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});n.exports=i},function(n,e,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function u(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],a=0;a<n.length;a++){var o=n[a],c=e.base?o[0]+e.base:o[0],s=t[c]||0,l="".concat(c," ").concat(s);t[c]=s+1;var f=u(l),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:l,updater:g(d,e),references:1}),r.push(l)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,f=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function d(n,e,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=f(e,a);else{var o=document.createTextNode(a),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(o,i[e]):n.appendChild(o)}}function p(n,e,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var v=null,h=0;function g(n,e){var t,r,a;if(e.singleton){var o=h++;t=v||(v=s(e)),r=d.bind(null,t,o,!1),a=d.bind(null,t,o,!0)}else t=s(e),r=p.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var a=u(t[r]);i[a].references--}for(var o=c(n,e),s=0;s<t.length;s++){var l=u(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=o}}}},function(n,e,t){(e=t(3)(!1)).push([n.i,"html, body {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n}\nbody {\n    background-image: linear-gradient(rgb(0, 81, 119), rgb(59, 0, 98));\n}\n\n\n#title {\n    margin: auto;\n    text-align: center;\n    font-family: sans-serif;\n    color: rgb(0, 255, 213);\n}\n\n/* Buttons */\n#buttonsDiv {\n    margin-top: 1em;\n    text-align: center;\n}\nbutton {\n    width: 50px;\n    height: 20px;\n    margin: 1em;\n    border-radius: 20px;\n}\nbutton:hover {\n    background-color: palegreen;\n}\n\n\n/* Sketch Container */\n#sketchContainer {\n    display: grid;\n    background-color: #FFFFFF;\n    grid-template-columns: repeat(64, 1fr);\n    border: 1px solid black;\n    width: 60%;\n    margin: auto;\n}\n.gridItem {\n    width: auto;\n    height: 9px;\n}\n\n",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var a=(i=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),o=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(o).concat([a]).join("\n")}var i,u,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var u=0;u<n.length;u++){var c=[].concat(n[u]);r&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){"use strict";t.r(e);t(0);var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},o=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"],i={CSS:{},springs:{}};function u(n,e,t){return Math.min(Math.max(n,e),t)}function c(n,e){return n.indexOf(e)>-1}function s(n,e){return n.apply(null,e)}var l={arr:function(n){return Array.isArray(n)},obj:function(n){return c(Object.prototype.toString.call(n),"Object")},pth:function(n){return l.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||l.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return l.hex(n)||l.rgb(n)||l.hsl(n)},key:function(n){return!r.hasOwnProperty(n)&&!a.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function f(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map((function(n){return parseFloat(n)})):[]}function d(n,e){var t=f(n),r=u(l.und(t[0])?1:t[0],.1,100),a=u(l.und(t[1])?100:t[1],.1,100),o=u(l.und(t[2])?10:t[2],.1,100),c=u(l.und(t[3])?0:t[3],.1,100),s=Math.sqrt(a/r),d=o/(2*Math.sqrt(a*r)),p=d<1?s*Math.sqrt(1-d*d):0,v=d<1?(d*s-c)/p:-c+s;function h(n){var t=e?e*n/1e3:n;return t=d<1?Math.exp(-t*d*s)*(1*Math.cos(p*t)+v*Math.sin(p*t)):(1+v*t)*Math.exp(-t*s),0===n||1===n?n:1-t}return e?h:function(){var e=i.springs[n];if(e)return e;for(var t=0,r=0;;)if(1===h(t+=1/6)){if(++r>=16)break}else r=0;var a=t*(1/6)*1e3;return i.springs[n]=a,a}}function p(n){return void 0===n&&(n=10),function(e){return Math.round(e*n)*(1/n)}}var v,h,g=function(){function n(n,e){return 1-3*e+3*n}function e(n,e){return 3*e-6*n}function t(n){return 3*n}function r(r,a,o){return((n(a,o)*r+e(a,o))*r+t(a))*r}function a(r,a,o){return 3*n(a,o)*r*r+2*e(a,o)*r+t(a)}return function(n,e,t,o){if(0<=n&&n<=1&&0<=t&&t<=1){var i=new Float32Array(11);if(n!==e||t!==o)for(var u=0;u<11;++u)i[u]=r(.1*u,n,t);return function(a){return n===e&&t===o||0===a||1===a?a:r(c(a),e,o)}}function c(e){for(var o=0,u=1;10!==u&&i[u]<=e;++u)o+=.1;--u;var c=o+.1*((e-i[u])/(i[u+1]-i[u])),s=a(c,n,t);return s>=.001?function(n,e,t,o){for(var i=0;i<4;++i){var u=a(e,t,o);if(0===u)return e;e-=(r(e,t,o)-n)/u}return e}(e,c,n,t):0===s?c:function(n,e,t,a,o){var i,u,c=0;do{(i=r(u=e+(t-e)/2,a,o)-n)>0?t=u:e=u}while(Math.abs(i)>1e-7&&++c<10);return u}(e,o,o+.1,n,t)}}}(),m=(v={linear:function(){return function(n){return n}}},h={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=u(n,1,10),r=u(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(n,e){h[n]=function(){return function(n){return Math.pow(n,e+2)}}})),Object.keys(h).forEach((function(n){var e=h[n];v["easeIn"+n]=e,v["easeOut"+n]=function(n,t){return function(r){return 1-e(n,t)(1-r)}},v["easeInOut"+n]=function(n,t){return function(r){return r<.5?e(n,t)(2*r)/2:1-e(n,t)(-2*r+2)/2}}})),v);function y(n,e){if(l.fnc(n))return n;var t=n.split("(")[0],r=m[t],a=f(n);switch(t){case"spring":return d(n,e);case"cubicBezier":return s(g,a);case"steps":return s(p,a);default:return s(r,a)}}function b(n){try{return document.querySelectorAll(n)}catch(n){return}}function x(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<t;o++)if(o in n){var i=n[o];e.call(r,i,o,n)&&a.push(i)}return a}function M(n){return n.reduce((function(n,e){return n.concat(l.arr(e)?M(e):e)}),[])}function w(n){return l.arr(n)?n:(l.str(n)&&(n=b(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function C(n,e){return n.some((function(n){return n===e}))}function k(n){var e={};for(var t in n)e[t]=n[t];return e}function O(n,e){var t=k(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function E(n,e){var t=k(n);for(var r in e)t[r]=l.und(n[r])?e[r]:n[r];return t}function F(n){return l.rgb(n)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+t[1]+",1)":e:l.hex(n)?function(n){var e=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(n,e,t,r){return e+e+t+t+r+r})),t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(t[1],16)+","+parseInt(t[2],16)+","+parseInt(t[3],16)+",1)"}(n):l.hsl(n)?function(n){var e,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(0==i)e=t=r=u;else{var l=u<.5?u*(1+i):u+i-u*i,f=2*u-l;e=s(f,l,o+1/3),t=s(f,l,o),r=s(f,l,o-1/3)}return"rgba("+255*e+","+255*t+","+255*r+","+c+")"}(n):void 0;var e,t}function S(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function I(n,e){return l.fnc(n)?n(e.target,e.id,e.total):n}function B(n,e){return n.getAttribute(e)}function j(n,e,t){if(C([t,"deg","rad","turn"],S(e)))return e;var r=i.CSS[e+t];if(!l.und(r))return r;var a=document.createElement(n.tagName),o=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+t;var u=100/a.offsetWidth;o.removeChild(a);var c=u*parseFloat(e);return i.CSS[e+t]=c,c}function T(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?j(n,a,t):a}}function P(n,e){return l.dom(n)&&!l.inp(n)&&(B(n,e)||l.svg(n)&&n[e])?"attribute":l.dom(n)&&C(o,e)?"transform":l.dom(n)&&"transform"!==e&&T(n,e)?"css":null!=n[e]?"object":void 0}function L(n){if(l.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function N(n,e,t,r){var a=c(e,"scale")?1:0+function(n){return c(n,"translate")||"perspective"===n?"px":c(n,"rotate")||c(n,"skew")?"deg":void 0}(e),o=L(n).get(e)||a;return t&&(t.transforms.list.set(e,o),t.transforms.last=e),r?j(n,o,r):o}function D(n,e,t,r){switch(P(n,e)){case"transform":return N(n,e,r,t);case"css":return T(n,e,t);case"attribute":return B(n,e);default:return n[e]||0}}function A(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=S(n)||0,a=parseFloat(e),o=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function q(n,e){if(l.col(n))return F(n);if(/\s/g.test(n))return n;var t=S(n),r=t?n.substr(0,n.length-t.length):n;return e?r+e:r}function R(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function _(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);a>0&&(r+=R(e,o)),e=o}return r}function Y(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return function(n){return 2*Math.PI*B(n,"r")}(n);case"rect":return function(n){return 2*B(n,"width")+2*B(n,"height")}(n);case"line":return function(n){return R({x:B(n,"x1"),y:B(n,"y1")},{x:B(n,"x2"),y:B(n,"y2")})}(n);case"polyline":return _(n);case"polygon":return function(n){var e=n.points;return _(n)+R(e.getItem(e.numberOfItems-1),e.getItem(0))}(n)}}function $(n,e){var t=e||{},r=t.el||function(n){for(var e=n.parentNode;l.svg(e)&&l.svg(e.parentNode);)e=e.parentNode;return e}(n),a=r.getBoundingClientRect(),o=B(r,"viewBox"),i=a.width,u=a.height,c=t.viewBox||(o?o.split(" "):[0,0,i,u]);return{el:r,viewBox:c,x:c[0]/1,y:c[1]/1,w:i/c[2],h:u/c[3]}}function X(n,e){function t(t){void 0===t&&(t=0);var r=e+t>=1?e+t:0;return n.el.getPointAtLength(r)}var r=$(n.el,n.svg),a=t(),o=t(-1),i=t(1);switch(n.property){case"x":return(a.x-r.x)*r.w;case"y":return(a.y-r.y)*r.h;case"angle":return 180*Math.atan2(i.y-o.y,i.x-o.x)/Math.PI}}function U(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=q(l.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:l.str(n)||e?r.split(t):[]}}function H(n){return x(n?M(l.arr(n)?n.map(w):w(n)):[],(function(n,e,t){return t.indexOf(n)===e}))}function Z(n){var e=H(n);return e.map((function(n,t){return{target:n,id:t,total:e.length,transforms:{list:L(n)}}}))}function z(n,e){var t=k(e);if(/^spring/.test(t.easing)&&(t.duration=d(t.easing)),l.arr(n)){var r=n.length;2===r&&!l.obj(n[0])?n={value:n}:l.fnc(e.duration)||(t.duration=e.duration/r)}var a=l.arr(n)?n:[n];return a.map((function(n,t){var r=l.obj(n)&&!l.pth(n)?n:{value:n};return l.und(r.delay)&&(r.delay=t?0:e.delay),l.und(r.endDelay)&&(r.endDelay=t===a.length-1?e.endDelay:0),r})).map((function(n){return E(n,t)}))}function Q(n,e){var t=[],r=e.keyframes;for(var a in r&&(e=E(function(n){for(var e=x(M(n.map((function(n){return Object.keys(n)}))),(function(n){return l.key(n)})).reduce((function(n,e){return n.indexOf(e)<0&&n.push(e),n}),[]),t={},r=function(r){var a=e[r];t[a]=n.map((function(n){var e={};for(var t in n)l.key(t)?t==a&&(e.value=n[t]):e[t]=n[t];return e}))},a=0;a<e.length;a++)r(a);return t}(r),e)),e)l.key(a)&&t.push({name:a,tweens:z(e[a],n)});return t}function V(n,e){var t;return n.tweens.map((function(r){var a=function(n,e){var t={};for(var r in n){var a=I(n[r],e);l.arr(a)&&1===(a=a.map((function(n){return I(n,e)}))).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,e),o=a.value,i=l.arr(o)?o[1]:o,u=S(i),c=D(e.target,n.name,u,e),s=t?t.to.original:c,f=l.arr(o)?o[0]:s,d=S(f)||S(c),p=u||d;return l.und(i)&&(i=s),a.from=U(f,p),a.to=U(A(i,f),p),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=l.pth(o),a.isColor=l.col(a.from.original),a.isColor&&(a.round=1),t=a,a}))}var J={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){if(r.list.set(e,t),e===r.last||a){var o="";r.list.forEach((function(n,e){o+=e+"("+n+") "})),n.style.transform=o}}};function G(n,e){Z(n).forEach((function(n){for(var t in e){var r=I(e[t],n),a=n.target,o=S(r),i=D(a,t,o,n),u=A(q(r,o||S(i)),i),c=P(a,t);J[c](a,t,u,n.transforms,!0)}}))}function W(n,e){return x(M(n.map((function(n){return e.map((function(e){return function(n,e){var t=P(n.target,e.name);if(t){var r=V(e,n),a=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,e)}))}))),(function(n){return!l.und(n)}))}function K(n,e){var t=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,n.map((function(n){return r(n)+n.duration}))):e.duration,a.delay=t?Math.min.apply(Math,n.map((function(n){return r(n)+n.delay}))):e.delay,a.endDelay=t?a.duration-Math.max.apply(Math,n.map((function(n){return r(n)+n.duration-n.endDelay}))):e.endDelay,a}var nn=0;var en,tn=[],rn=[],an=function(){function n(){en=requestAnimationFrame(e)}function e(e){var t=tn.length;if(t){for(var r=0;r<t;){var a=tn[r];if(a.paused){var o=tn.indexOf(a);o>-1&&(tn.splice(o,1),t=tn.length)}else a.tick(e);r++}n()}else en=cancelAnimationFrame(en)}return n}();function on(n){void 0===n&&(n={});var e,t=0,o=0,i=0,c=0,s=null;function l(n){var e=window.Promise&&new Promise((function(n){return s=n}));return n.finished=e,e}var f=function(n){var e=O(r,n),t=O(a,n),o=Q(t,n),i=Z(n.targets),u=W(i,o),c=K(u,t),s=nn;return nn++,E(e,{id:s,children:[],animatables:i,animations:u,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}(n);l(f);function d(){var n=f.direction;"alternate"!==n&&(f.direction="normal"!==n?"normal":"reverse"),f.reversed=!f.reversed,e.forEach((function(n){return n.reversed=f.reversed}))}function p(n){return f.reversed?f.duration-n:n}function v(){t=0,o=p(f.currentTime)*(1/on.speed)}function h(n,e){e&&e.seek(n-e.timelineOffset)}function g(n){for(var e=0,t=f.animations,r=t.length;e<r;){var a=t[e],o=a.animatable,i=a.tweens,c=i.length-1,s=i[c];c&&(s=x(i,(function(e){return n<e.end}))[0]||s);for(var l=u(n-s.start-s.delay,0,s.duration)/s.duration,d=isNaN(l)?1:s.easing(l),p=s.to.strings,v=s.round,h=[],g=s.to.numbers.length,m=void 0,y=0;y<g;y++){var b=void 0,M=s.to.numbers[y],w=s.from.numbers[y]||0;b=s.isPath?X(s.value,d*M):w+d*(M-w),v&&(s.isColor&&y>2||(b=Math.round(b*v)/v)),h.push(b)}var C=p.length;if(C){m=p[0];for(var k=0;k<C;k++){p[k];var O=p[k+1],E=h[k];isNaN(E)||(m+=O?E+O:E+" ")}}else m=h[0];J[a.type](o.target,a.property,m,o.transforms),a.currentValue=m,e++}}function m(n){f[n]&&!f.passThrough&&f[n](f)}function y(n){var r=f.duration,a=f.delay,v=r-f.endDelay,y=p(n);f.progress=u(y/r*100,0,100),f.reversePlayback=y<f.currentTime,e&&function(n){if(f.reversePlayback)for(var t=c;t--;)h(n,e[t]);else for(var r=0;r<c;r++)h(n,e[r])}(y),!f.began&&f.currentTime>0&&(f.began=!0,m("begin")),!f.loopBegan&&f.currentTime>0&&(f.loopBegan=!0,m("loopBegin")),y<=a&&0!==f.currentTime&&g(0),(y>=v&&f.currentTime!==r||!r)&&g(r),y>a&&y<v?(f.changeBegan||(f.changeBegan=!0,f.changeCompleted=!1,m("changeBegin")),m("change"),g(y)):f.changeBegan&&(f.changeCompleted=!0,f.changeBegan=!1,m("changeComplete")),f.currentTime=u(y,0,r),f.began&&m("update"),n>=r&&(o=0,f.remaining&&!0!==f.remaining&&f.remaining--,f.remaining?(t=i,m("loopComplete"),f.loopBegan=!1,"alternate"===f.direction&&d()):(f.paused=!0,f.completed||(f.completed=!0,m("loopComplete"),m("complete"),!f.passThrough&&"Promise"in window&&(s(),l(f)))))}return f.reset=function(){var n=f.direction;f.passThrough=!1,f.currentTime=0,f.progress=0,f.paused=!0,f.began=!1,f.loopBegan=!1,f.changeBegan=!1,f.completed=!1,f.changeCompleted=!1,f.reversePlayback=!1,f.reversed="reverse"===n,f.remaining=f.loop,e=f.children;for(var t=c=e.length;t--;)f.children[t].reset();(f.reversed&&!0!==f.loop||"alternate"===n&&1===f.loop)&&f.remaining++,g(f.reversed?f.duration:0)},f.set=function(n,e){return G(n,e),f},f.tick=function(n){i=n,t||(t=i),y((i+(o-t))*on.speed)},f.seek=function(n){y(p(n))},f.pause=function(){f.paused=!0,v()},f.play=function(){f.paused&&(f.completed&&f.reset(),f.paused=!1,tn.push(f),v(),en||an())},f.reverse=function(){d(),v()},f.restart=function(){f.reset(),f.play()},f.reset(),f.autoplay&&f.play(),f}function un(n,e){for(var t=e.length;t--;)C(n,e[t].animatable.target)&&e.splice(t,1)}"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){document.hidden?(tn.forEach((function(n){return n.pause()})),rn=tn.slice(0),on.running=tn=[]):rn.forEach((function(n){return n.play()}))})),on.version="3.1.0",on.speed=1,on.running=tn,on.remove=function(n){for(var e=H(n),t=tn.length;t--;){var r=tn[t],a=r.animations,o=r.children;un(e,a);for(var i=o.length;i--;){var u=o[i],c=u.animations;un(e,c),c.length||u.children.length||o.splice(i,1)}a.length||o.length||r.pause()}},on.get=D,on.set=G,on.convertPx=j,on.path=function(n,e){var t=l.str(n)?b(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:$(t),totalLength:Y(t)*(r/100)}}},on.setDashoffset=function(n){var e=Y(n);return n.setAttribute("stroke-dasharray",e),e},on.stagger=function(n,e){void 0===e&&(e={});var t=e.direction||"normal",r=e.easing?y(e.easing):null,a=e.grid,o=e.axis,i=e.from||0,u="first"===i,c="center"===i,s="last"===i,f=l.arr(n),d=f?parseFloat(n[0]):parseFloat(n),p=f?parseFloat(n[1]):0,v=S(f?n[1]:n)||0,h=e.start||0+(f?d:0),g=[],m=0;return function(n,e,l){if(u&&(i=0),c&&(i=(l-1)/2),s&&(i=l-1),!g.length){for(var y=0;y<l;y++){if(a){var b=c?(a[0]-1)/2:i%a[0],x=c?(a[1]-1)/2:Math.floor(i/a[0]),M=b-y%a[0],w=x-Math.floor(y/a[0]),C=Math.sqrt(M*M+w*w);"x"===o&&(C=-M),"y"===o&&(C=-w),g.push(C)}else g.push(Math.abs(i-y));m=Math.max.apply(Math,g)}r&&(g=g.map((function(n){return r(n/m)*m}))),"reverse"===t&&(g=g.map((function(n){return o?n<0?-1*n:-n:Math.abs(m-n)})))}return h+(f?(p-d)/m:d)*(Math.round(100*g[e])/100)+v}},on.timeline=function(n){void 0===n&&(n={});var e=on(n);return e.duration=0,e.add=function(t,r){var o=tn.indexOf(e),i=e.children;function u(n){n.passThrough=!0}o>-1&&tn.splice(o,1);for(var c=0;c<i.length;c++)u(i[c]);var s=E(t,O(a,n));s.targets=s.targets||n.targets;var f=e.duration;s.autoplay=!1,s.direction=e.direction,s.timelineOffset=l.und(r)?f:A(r,f),u(e),e.seek(s.timelineOffset);var d=on(s);u(d),i.push(d);var p=K(i,n);return e.delay=p.delay,e.endDelay=p.endDelay,e.duration=p.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},on.easing=y,on.penner=m,on.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};var cn=on;!function(){let n;const e=[];!function(){const n=document.createElement("h1");n.textContent="Etch-A-Sketch",n.id="title",document.body.appendChild(n)}(),function(){const t=document.createElement("div");t.id="sketchContainer",document.body.appendChild(t);for(let r=0;r<4096;r+=1)n=document.createElement("div"),n.className="gridItem",e.push(n),t.appendChild(n)}(),function(){const n=document.createElement("div");n.id="buttonsDiv",document.body.appendChild(n);const t=document.createElement("button");t.textContent="Color",t.id="colorBtn",n.appendChild(t);const r=document.createElement("button");r.textContent="Black",r.id="bwBtn",n.appendChild(r);const a=document.createElement("button");a.textContent="Reset",a.id="reset",n.appendChild(a),t.addEventListener("click",(function(){cn({targets:t,translateX:{value:"*=1.5",duration:500},width:{value:"+=10px",duration:500,easing:"easeInOutSine"},rotate:{value:"+=1turn",duration:500,easing:"easeInOutSine"},direction:"alternate"}),e.forEach(n=>{n.addEventListener("mouseover",(function e(){let t="#";for(let n=0;n<6;n+=1)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];"#000000"===t&&n.removeEventListener("mouseover",e);"#FFFFFF"!==n.style.backgroundColor&&n.removeEventListener("mouseover",e);n.style.backgroundColor=t}))})})),r.addEventListener("click",(function(){cn({targets:r,translateX:{value:"*=1.5",duration:500},width:{value:"+=10px",duration:500,easing:"easeInOutSine"},rotate:{value:"+=1turn",duration:500,easing:"easeInOutSine"},direction:"alternate"}),e.forEach(n=>{n.addEventListener("mouseover",(function(){n.style.backgroundColor="#000000"}))})})),a.addEventListener("click",(function(){cn({targets:a,width:{value:"+=10px",duration:500,easing:"easeInOutSine"},rotate:{value:"+=1turn",duration:500,easing:"easeInOutSine"},direction:"alternate"}),e.forEach(n=>{n.style.backgroundColor="#FFFF"})}))}(),cn({targets:"#title",duration:1500,delay:cn.stagger(500,{start:300,from:"first"}),opacity:[0,1],translateY:["-1rem",0],direction:"normal"}),cn({targets:"#sketchContainer",duration:1500,delay:700,opacity:[0,1],translateY:["2rem",0],direction:"normal"}),cn({targets:"#buttonsDiv",duration:1500,delay:1400,opacity:[0,1],translateY:["-1rem",0],direction:"normal"})}()}]);