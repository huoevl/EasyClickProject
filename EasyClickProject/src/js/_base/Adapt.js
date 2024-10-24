var ccf;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_base/Adapt.ts":
/*!************************!*\
  !*** ./_base/Adapt.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var BaseClass_1 = __webpack_require__(/*! ./BaseClass */ "./_base/BaseClass.ts");
var Adapt = /** @class */ (function (_super) {
    __extends(Adapt, _super);
    function Adapt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 获取实际xy坐标
     * @param x
     * @param y
     * @returns {{x, y}}
     */
    Adapt.prototype.getXy = function (x, y) {
        return { x: x, y: y };
    };
    return Adapt;
}(BaseClass_1.BaseClass));
exports["default"] = Adapt;


/***/ }),

/***/ "./_base/BaseClass.ts":
/*!****************************!*\
  !*** ./_base/BaseClass.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseClass = void 0;
var BaseClass = /** @class */ (function () {
    function BaseClass(data) {
        this.init(data);
    }
    BaseClass.getIns = function (data) {
        return this.instance || (this.instance = new this(data));
    };
    /** 初始化，子类重写 */
    BaseClass.prototype.init = function (data) {
    };
    /** 执行，子类重写 */
    BaseClass.prototype.exec = function () {
    };
    return BaseClass;
}());
exports.BaseClass = BaseClass;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./_base/Adapt.ts");
/******/ 	ccf = __webpack_exports__;
/******/ 	
/******/ })()
;