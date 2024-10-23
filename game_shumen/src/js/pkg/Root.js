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

/***/ "./_base/Debug.ts":
/*!************************!*\
  !*** ./_base/Debug.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Debug = void 0;
var DebugImgPath = "/sdcard/001debug/";
var Debug = /** @class */ (function () {
    function Debug() {
    }
    /**
     * 保存图片
     * @param img
     * @param name
     */
    Debug.saveToDebug = function (img, name) {
        var url = DebugImgPath + name + ".png";
        var result = image.saveTo(img, url);
        if (result) {
            this.loggerD("保存截图成功：" + url);
        }
        else {
            this.loggerD("保存截图失败：" + result);
        }
    };
    Debug.loggerD = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        logd(msg.join("。"));
    };
    Debug.loggerE = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        loge(msg.join("。"));
    };
    return Debug;
}());
exports.Debug = Debug;


/***/ }),

/***/ "./pkg/Root.ts":
/*!*********************!*\
  !*** ./pkg/Root.ts ***!
  \*********************/
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
exports.Root = void 0;
var BaseClass_1 = __webpack_require__(/*! ../_base/BaseClass */ "./_base/BaseClass.ts");
var Const_1 = __webpack_require__(/*! ../_base/Const */ "./_base/Const.ts");
var Debug_1 = __webpack_require__(/*! ../_base/Debug */ "./_base/Debug.ts");
var Root = /** @class */ (function (_super) {
    __extends(Root, _super);
    function Root() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isHasJietu = false;
        return _this;
    }
    /** 是否拥有截图权限 */
    Root.prototype.exec = function () {
        image.setInitParam({
            "action_timeout": 10000,
            "auto_click_request_dialog": false
        });
        image.setFindColorImageMode(2);
        var req = startEnv();
        if (!req) {
            toast("申请自动化权限失败");
            return;
        }
        var request = image.requestScreenCapture(Const_1.sleepTime2000, 0);
        if (request) {
            this.isHasJietu = true;
            toast("申请截图成功");
        }
        else {
            toast("申请截图失败");
        }
        var d = image.initOpenCV();
        Debug_1.Debug.loggerD(d);
        sleep(Const_1.sleepTime2000);
    };
    return Root;
}(BaseClass_1.BaseClass));
exports.Root = Root;


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
/******/ 	var __webpack_exports__ = __webpack_require__("./pkg/Root.ts");
/******/ 	ccf = __webpack_exports__;
/******/ 	
/******/ })()
;