var ccf;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


/***/ }),

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


/***/ }),

/***/ "./pkg/misc/CloseView.ts":
/*!*******************************!*\
  !*** ./pkg/misc/CloseView.ts ***!
  \*******************************/
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
exports.CloseView = void 0;
var BaseClass_1 = __webpack_require__(/*! ../../_base/BaseClass */ "./_base/BaseClass.ts");
var Const_1 = __webpack_require__(/*! ../../_base/Const */ "./_base/Const.ts");
var MiscConst_1 = __webpack_require__(/*! ./MiscConst */ "./pkg/misc/MiscConst.ts");
var CloseView = /** @class */ (function (_super) {
    __extends(CloseView, _super);
    function CloseView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloseView.prototype.exec = function () {
        var click = false;
        for (var name in MiscConst_1.MiscImgData) {
            if (Object.prototype.hasOwnProperty.call(MiscConst_1.MiscImgData, name)) {
                var data = MiscConst_1.MiscImgData[name];
                var isClick = ccf.ecRoot.findImgRandClick("misc", data, true);
                if (isClick) {
                    click = true;
                }
            }
        }
        if (click) {
            sleep(Const_1.sleepTime100);
            this.exec();
        }
        else {
            ccf.ecRoot.freeScreenshot();
        }
    };
    return CloseView;
}(BaseClass_1.BaseClass));
exports.CloseView = CloseView;


/***/ }),

/***/ "./pkg/misc/MiscConst.ts":
/*!*******************************!*\
  !*** ./pkg/misc/MiscConst.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MiscImgData = void 0;
/** 通用关闭按钮信息 */
exports.MiscImgData = (_a = {},
    _a["close1" /* CloseFileName.Close1 */] = { name: "close1" /* CloseFileName.Close1 */, x: 825, y: 116, width: 73, height: 64 },
    _a["use1" /* CloseFileName.Use1 */] = { name: "use1" /* CloseFileName.Use1 */, x: 844, y: 554, width: 53, height: 30 },
    _a);


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
/******/ 	var __webpack_exports__ = __webpack_require__("./pkg/misc/CloseView.ts");
/******/ 	ccf = __webpack_exports__;
/******/ 	
/******/ })()
;