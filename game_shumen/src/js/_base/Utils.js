var ccf;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_base/Const.ts":
/*!************************!*\
  !*** ./_base/Const.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sleepTime3000 = exports.sleepTime2000 = exports.sleepTime1000 = exports.sleepTime500 = exports.sleepTime400 = exports.sleepTime300 = exports.sleepTime200 = exports.sleepTime100 = exports.rectTemp = void 0;
exports.rectTemp = new Rect();
exports.sleepTime100 = 100;
exports.sleepTime200 = 200;
exports.sleepTime300 = 300;
exports.sleepTime400 = 400;
exports.sleepTime500 = 500;
exports.sleepTime1000 = 1000;
exports.sleepTime2000 = 2000;
exports.sleepTime3000 = 3000;


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!************************!*\
  !*** ./_base/Utils.ts ***!
  \************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utils = void 0;
var Const_1 = __webpack_require__(/*! ./Const */ "./_base/Const.ts");
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * 根据寻图结果获取相似度最高的区域
     * @param {Array} points points：[{"top":135,"bottom":158,"left":853,"right":875,"similarity":1}]
     * @returns {Rect}
     */
    Utils.getPointsRectTemp = function (points) {
        if (!Array.isArray(points)) {
            return null;
        }
        var similarity = 0;
        var pointTemp = null;
        for (var index_1 = 0; index_1 < points.length; index_1++) {
            var point = points[index_1];
            if (point.similarity > similarity) {
                pointTemp = point;
            }
        }
        if (!pointTemp) {
            return null;
        }
        Const_1.rectTemp.left = pointTemp.left;
        Const_1.rectTemp.right = pointTemp.right;
        Const_1.rectTemp.top = pointTemp.top;
        Const_1.rectTemp.bottom = pointTemp.bottom;
        return Const_1.rectTemp;
    };
    return Utils;
}());
exports.Utils = Utils;

})();

ccf = __webpack_exports__;
/******/ })()
;