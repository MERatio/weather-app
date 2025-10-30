/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 262:
/***/ (() => {

var menuBtn = document.querySelector('.js-menu-btn');
var menuEl = document.querySelector('.js-menu');
menuBtn.addEventListener('click', function () {
  menuEl.style.display = menuEl.style.display === 'block' ? 'none' : 'block';
});
window.addEventListener('click', function (e) {
  if (!e.target.matches('.js-menu-btn')) {
    menuEl.style.display = 'none';
  }
});

/***/ }),

/***/ 882:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./clear-day.svg": [
		588,
		588
	],
	"./clear-night.svg": [
		840,
		840
	],
	"./cloudy.svg": [
		466,
		466
	],
	"./fog.svg": [
		186,
		186
	],
	"./hail.svg": [
		964,
		964
	],
	"./partly-cloudy-day.svg": [
		700,
		700
	],
	"./partly-cloudy-night.svg": [
		904,
		904
	],
	"./rain-snow-showers-day.svg": [
		87,
		87
	],
	"./rain-snow-showers-night.svg": [
		923,
		923
	],
	"./rain-snow.svg": [
		16,
		16
	],
	"./rain.svg": [
		724,
		724
	],
	"./showers-day.svg": [
		474,
		474
	],
	"./showers-night.svg": [
		918,
		918
	],
	"./sleet.svg": [
		468,
		468
	],
	"./snow-showers-day.svg": [
		780,
		780
	],
	"./snow-showers-night.svg": [
		320,
		320
	],
	"./snow.svg": [
		379,
		379
	],
	"./thunder-rain.svg": [
		59,
		59
	],
	"./thunder-showers-day.svg": [
		795,
		795
	],
	"./thunder-showers-night.svg": [
		815,
		815
	],
	"./thunder.svg": [
		548,
		548
	],
	"./wind.svg": [
		924,
		924
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 1 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 882;
module.exports = webpackAsyncContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "weather-app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			57: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_menu_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(262);
/* harmony import */ var _js_menu_button_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_menu_button_js__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



var src_location = 'France';
var scale = 'celsius';
var searchForm = document.querySelector('.js-search-form');
var locationInput = searchForm.querySelector('.js-location-input');
var loadingSpinnerContainer = document.querySelector('.js-loading-spinner-container');
var mainEl = document.querySelector('.js-main');
var locationEl = document.querySelector('.js-location');
var scaleRadioBtns = document.querySelectorAll('input[name="scale"]');
var currentWeatherDayTimeEl = document.querySelector('.js-current-weather-day-time');
var currentWeatherIconEl = document.querySelector('.js-current-weather-icon');
var currentWeatherTempEl = document.querySelector('.js-current-weather-temp');
var currentWeatherFeelsLikeEl = document.querySelector('.js-current-weather-feels-like');
var currentWeatherConditionEl = document.querySelector('.js-current-weather-condition');
var currentWeatherPrecipEl = document.querySelector('.js-current-weather-precip');
var currentWeatherHumidityEl = document.querySelector('.js-current-weather-humidity');
var currentWeatherWindEl = document.querySelector('.js-current-weather-wind');
var incomingHoursCardsEl = document.querySelector('.js-incoming-hours-cards');
var incomingDaysCardsEl = document.querySelector('.js-incoming-days-cards');
function getWeatherData(_x, _x2) {
  return _getWeatherData.apply(this, arguments);
}
function _getWeatherData() {
  _getWeatherData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(location, scale) {
    var unitGroup, API_KEY, apiEndpoint, response, weatherData, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          unitGroup = scale === 'celsius' ? 'metric' : 'us';
          API_KEY = 'PGBQ5TKSZ5E7BP2KZ2YTFXPHU';
          apiEndpoint = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/".concat(location, "?unitGroup=").concat(unitGroup, "&key=").concat(API_KEY, "&contentType=json");
          _context2.p = 1;
          _context2.n = 2;
          return fetch(apiEndpoint);
        case 2:
          response = _context2.v;
          if (response.ok) {
            _context2.n = 3;
            break;
          }
          throw new Error("Response status: ".concat(response.status));
        case 3:
          _context2.n = 4;
          return response.json();
        case 4:
          weatherData = _context2.v;
          return _context2.a(2, weatherData);
        case 5:
          _context2.n = 7;
          break;
        case 6:
          _context2.p = 6;
          _t = _context2.v;
          console.error(_t.message);
        case 7:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 6]]);
  }));
  return _getWeatherData.apply(this, arguments);
}
function getDayName(dateStr, isShort) {
  var date = new Date(dateStr);
  var dayName = date.toLocaleDateString('en-us', {
    weekday: isShort ? 'short' : 'long'
  });
  return dayName;
}
function formatToAmPm(timeStr, hasMinutes) {
  var _timeStr$split$map = timeStr.split(':').map(Number),
    _timeStr$split$map2 = _slicedToArray(_timeStr$split$map, 2),
    hour = _timeStr$split$map2[0],
    minute = _timeStr$split$map2[1];
  var amPm = hour >= 12 ? 'PM' : 'AM';
  var hour12 = hour % 12 || 12;
  if (hasMinutes) {
    return "".concat(hour12, ":").concat(minute.toString().padStart(2, '0'), " ").concat(amPm);
  } else {
    return "".concat(hour12, " ").concat(amPm);
  }
}
function getWeatherIconUrl(_x3) {
  return _getWeatherIconUrl.apply(this, arguments);
}
function _getWeatherIconUrl() {
  _getWeatherIconUrl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(iconName) {
    var iconModule, _t2;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return __webpack_require__(882)("./".concat(iconName, ".svg"));
        case 1:
          iconModule = _context3.v;
          return _context3.a(2, iconModule["default"]);
        case 2:
          _context3.p = 2;
          _t2 = _context3.v;
          console.error(_t2.message);
        case 3:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return _getWeatherIconUrl.apply(this, arguments);
}
function displayIncomingDaysData(_x4) {
  return _displayIncomingDaysData.apply(this, arguments);
}
function _displayIncomingDaysData() {
  _displayIncomingDaysData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(weatherData) {
    var incomingDaysData, _iterator2, _step2, incomingDayData, cardEl, cardDayEl, cardIconEl, cardTempEl, _t3;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          incomingDaysData = weatherData.days.slice(1);
          incomingDaysCardsEl.replaceChildren();
          _iterator2 = _createForOfIteratorHelper(incomingDaysData);
          _context4.p = 1;
          _iterator2.s();
        case 2:
          if ((_step2 = _iterator2.n()).done) {
            _context4.n = 5;
            break;
          }
          incomingDayData = _step2.value;
          cardEl = document.createElement('li');
          cardEl.classList.add('card');
          cardDayEl = document.createElement('p');
          cardDayEl.classList.add('card-title');
          cardDayEl.textContent = getDayName(incomingDayData.datetime, true);
          cardEl.appendChild(cardDayEl);
          cardIconEl = document.createElement('img');
          cardIconEl.classList.add('card-icon');
          _context4.n = 3;
          return getWeatherIconUrl(incomingDayData.icon);
        case 3:
          cardIconEl.src = _context4.v;
          cardIconEl.alt = incomingDayData.conditions;
          cardEl.appendChild(cardIconEl);
          cardTempEl = document.createElement('p');
          cardTempEl.classList.add('card-temp');
          cardTempEl.textContent = "".concat(incomingDayData.temp, "\xB0");
          cardEl.appendChild(cardTempEl);
          incomingDaysCardsEl.appendChild(cardEl);
        case 4:
          _context4.n = 2;
          break;
        case 5:
          _context4.n = 7;
          break;
        case 6:
          _context4.p = 6;
          _t3 = _context4.v;
          _iterator2.e(_t3);
        case 7:
          _context4.p = 7;
          _iterator2.f();
          return _context4.f(7);
        case 8:
          return _context4.a(2);
      }
    }, _callee4, null, [[1, 6, 7, 8]]);
  }));
  return _displayIncomingDaysData.apply(this, arguments);
}
function displayIncomingHoursData(_x5) {
  return _displayIncomingHoursData.apply(this, arguments);
}
function _displayIncomingHoursData() {
  _displayIncomingHoursData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(weatherData) {
    var extractIncomingHoursData, incomingHoursData, _iterator3, _step3, incomingHourData, cardEl, cardHourEl, cardPrecipEl, cardIconEl, cardTempEl, _t4;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          extractIncomingHoursData = function _extractIncomingHours(currentEpoch, hoursData) {
            return hoursData.filter(function (hourData) {
              return hourData.datetimeEpoch > currentEpoch;
            });
          };
          incomingHoursData = extractIncomingHoursData(weatherData.currentConditions.datetimeEpoch, weatherData.days[0].hours);
          incomingHoursCardsEl.replaceChildren();
          _iterator3 = _createForOfIteratorHelper(incomingHoursData);
          _context5.p = 1;
          _iterator3.s();
        case 2:
          if ((_step3 = _iterator3.n()).done) {
            _context5.n = 5;
            break;
          }
          incomingHourData = _step3.value;
          cardEl = document.createElement('li');
          cardEl.classList.add('card');
          cardHourEl = document.createElement('p');
          cardHourEl.classList.add('card-title');
          cardHourEl.textContent = formatToAmPm(incomingHourData.datetime, false);
          cardEl.appendChild(cardHourEl);
          cardPrecipEl = document.createElement('p');
          cardPrecipEl.classList.add('card-precip');
          cardPrecipEl.textContent = "".concat(incomingHourData.precipprob, "%");
          cardEl.appendChild(cardPrecipEl);
          cardIconEl = document.createElement('img');
          cardIconEl.classList.add('card-icon');
          _context5.n = 3;
          return getWeatherIconUrl(incomingHourData.icon);
        case 3:
          cardIconEl.src = _context5.v;
          cardIconEl.alt = incomingHourData.conditions;
          cardEl.appendChild(cardIconEl);
          cardTempEl = document.createElement('p');
          cardTempEl.classList.add('card-temp');
          cardTempEl.textContent = "".concat(incomingHourData.temp, "\xB0");
          cardEl.appendChild(cardTempEl);
          incomingHoursCardsEl.appendChild(cardEl);
        case 4:
          _context5.n = 2;
          break;
        case 5:
          _context5.n = 7;
          break;
        case 6:
          _context5.p = 6;
          _t4 = _context5.v;
          _iterator3.e(_t4);
        case 7:
          _context5.p = 7;
          _iterator3.f();
          return _context5.f(7);
        case 8:
          return _context5.a(2);
      }
    }, _callee5, null, [[1, 6, 7, 8]]);
  }));
  return _displayIncomingHoursData.apply(this, arguments);
}
function displayCurrentData(_x6) {
  return _displayCurrentData.apply(this, arguments);
}
function _displayCurrentData() {
  _displayCurrentData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(weatherData) {
    var currentDayName, currentTime, currentWeatherIconUrl;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          currentDayName = getDayName(weatherData.days[0].datetime, false);
          currentTime = formatToAmPm(weatherData.currentConditions.datetime, true);
          _context6.n = 1;
          return getWeatherIconUrl(weatherData.currentConditions.icon);
        case 1:
          currentWeatherIconUrl = _context6.v;
          locationEl.textContent = weatherData.resolvedAddress;
          currentWeatherDayTimeEl.textContent = "".concat(currentDayName, " ").concat(currentTime);
          currentWeatherIconEl.src = currentWeatherIconUrl;
          currentWeatherIconEl.alt = weatherData.currentConditions.conditions;
          currentWeatherTempEl.textContent = "".concat(weatherData.currentConditions.temp, "\xB0");
          currentWeatherFeelsLikeEl.textContent = "".concat(weatherData.currentConditions.feelslike, "\xB0");
          currentWeatherConditionEl.textContent = weatherData.currentConditions.conditions;
          currentWeatherPrecipEl.textContent = "".concat(weatherData.currentConditions.precipprob, "%");
          currentWeatherHumidityEl.textContent = "".concat(weatherData.currentConditions.humidity, "%");
          currentWeatherWindEl.textContent = "".concat(weatherData.currentConditions.windspeed, " ").concat(scale === 'celsius' ? 'km/h' : 'mph');
        case 2:
          return _context6.a(2);
      }
    }, _callee6);
  }));
  return _displayCurrentData.apply(this, arguments);
}
function displayWeatherData(_x7) {
  return _displayWeatherData.apply(this, arguments);
}
function _displayWeatherData() {
  _displayWeatherData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(weatherData) {
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          _context7.n = 1;
          return displayCurrentData(weatherData);
        case 1:
          _context7.n = 2;
          return displayIncomingHoursData(weatherData);
        case 2:
          _context7.n = 3;
          return displayIncomingDaysData(weatherData);
        case 3:
          return _context7.a(2);
      }
    }, _callee7);
  }));
  return _displayWeatherData.apply(this, arguments);
}
function getAndDisplayWeatherData(_x8, _x9) {
  return _getAndDisplayWeatherData.apply(this, arguments);
}
function _getAndDisplayWeatherData() {
  _getAndDisplayWeatherData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(location, scale) {
    var weatherData;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          loadingSpinnerContainer.style.display = 'block';
          mainEl.style.display = 'none';
          _context8.n = 1;
          return getWeatherData(location, scale);
        case 1:
          weatherData = _context8.v;
          if (weatherData) {
            _context8.n = 2;
            break;
          }
          return _context8.a(2);
        case 2:
          _context8.n = 3;
          return displayWeatherData(weatherData);
        case 3:
          loadingSpinnerContainer.style.display = 'none';
          mainEl.style.display = 'block';
        case 4:
          return _context8.a(2);
      }
    }, _callee8);
  }));
  return _getAndDisplayWeatherData.apply(this, arguments);
}
function getUserLocationFromIp() {
  return _getUserLocationFromIp.apply(this, arguments);
}
function _getUserLocationFromIp() {
  _getUserLocationFromIp = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
    var response, data, _t5;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          _context9.p = 0;
          _context9.n = 1;
          return fetch('https://ipapi.co/json');
        case 1:
          response = _context9.v;
          _context9.n = 2;
          return response.json();
        case 2:
          data = _context9.v;
          return _context9.a(2, data);
        case 3:
          _context9.p = 3;
          _t5 = _context9.v;
          console.error(_t5.message);
        case 4:
          return _context9.a(2);
      }
    }, _callee9, null, [[0, 3]]);
  }));
  return _getUserLocationFromIp.apply(this, arguments);
}
function displayUserWeatherData() {
  return _displayUserWeatherData.apply(this, arguments);
}
function _displayUserWeatherData() {
  _displayUserWeatherData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
    var _yield$getUserLocatio, city, country_name;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          _context0.n = 1;
          return getUserLocationFromIp();
        case 1:
          _yield$getUserLocatio = _context0.v;
          city = _yield$getUserLocatio.city;
          country_name = _yield$getUserLocatio.country_name;
          src_location = "".concat(city, " ").concat(country_name);
          _context0.n = 2;
          return getAndDisplayWeatherData(src_location, scale);
        case 2:
          return _context0.a(2);
      }
    }, _callee0);
  }));
  return _displayUserWeatherData.apply(this, arguments);
}
searchForm.addEventListener('submit', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          e.preventDefault();
          src_location = locationInput.value.trim();
          _context.n = 1;
          return getAndDisplayWeatherData(src_location, scale);
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function (_x0) {
    return _ref.apply(this, arguments);
  };
}());
var _iterator = _createForOfIteratorHelper(scaleRadioBtns),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var scaleRadioBtn = _step.value;
    scaleRadioBtn.addEventListener('change', function () {
      if (this.checked) {
        scale = this.value;
        if (src_location) {
          getAndDisplayWeatherData(src_location, scale);
        }
      }
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
displayUserWeatherData();
})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map