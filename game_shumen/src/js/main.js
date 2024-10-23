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


/***/ }),

/***/ "./_base/CCFClass.ts":
/*!***************************!*\
  !*** ./_base/CCFClass.ts ***!
  \***************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CCF = void 0;
var Root_1 = __webpack_require__(/*! ../pkg/Root */ "./pkg/Root.ts");
var CloseView_1 = __webpack_require__(/*! ../pkg/misc/CloseView */ "./pkg/misc/CloseView.ts");
var Adapt_1 = __importDefault(__webpack_require__(/*! ./Adapt */ "./_base/Adapt.ts"));
var BaseClass_1 = __webpack_require__(/*! ./BaseClass */ "./_base/BaseClass.ts");
var EcRoot_1 = __webpack_require__(/*! ./EcRoot */ "./_base/EcRoot.ts");
var CCF = /** @class */ (function (_super) {
    __extends(CCF, _super);
    function CCF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CCF.prototype.init = function () {
        ccf.root = Root_1.Root.getIns();
        ccf.closeView = CloseView_1.CloseView.getIns();
        ccf.adpat = Adapt_1.default.getIns();
        ccf.ecRoot = EcRoot_1.EcRoot.getIns();
    };
    return CCF;
}(BaseClass_1.BaseClass));
exports.CCF = CCF;


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

/***/ "./_base/EcRoot.ts":
/*!*************************!*\
  !*** ./_base/EcRoot.ts ***!
  \*************************/
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
exports.EcRoot = void 0;
var BaseClass_1 = __webpack_require__(/*! ./BaseClass */ "./_base/BaseClass.ts");
var Const_1 = __webpack_require__(/*! ./Const */ "./_base/Const.ts");
var Debug_1 = __webpack_require__(/*! ./Debug */ "./_base/Debug.ts");
var Utils_1 = __webpack_require__(/*! ./Utils */ "./_base/Utils.ts");
var EcRoot = /** @class */ (function (_super) {
    __extends(EcRoot, _super);
    function EcRoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 寻图并随机范围点击
     * @param moduleName
     * @param data
     * @param isUseLast 是否使用上一次截图
     * @returns
     */
    EcRoot.prototype.findImgRandClick = function (moduleName, data, isUseLast) {
        if (moduleName != this.lastMdName) {
            this.lastMdName = moduleName;
            this.freeScreenshot();
        }
        var url = moduleName + "/" + data.name + ".png";
        logd(url);
        var img = readResAutoImage(url);
        var result = false;
        this.screenshot = this.screenshot || image.captureFullScreen();
        if (this.screenshot != null) {
            var xy = ccf.adpat.getXy(data.x, data.y);
            var points = image.findImage(this.screenshot, img, xy.x, xy.y, data.width, data.height, 0.7, 0.9, 1, 5);
            if (points && points.length) {
                sleep(Const_1.sleepTime100);
                var rect = Utils_1.Utils.getPointsRectTemp(points);
                if (rect) {
                    Debug_1.Debug.loggerE("寻图成功！" + data.name + "点击");
                    clickRandomRect(rect);
                    result = true;
                }
            }
            else {
                Debug_1.Debug.loggerE("寻图失败！" + data.name);
                sleep(Const_1.sleepTime100);
            }
        }
        if (!isUseLast) {
            this.freeScreenshot();
        }
        image.recycle(img);
        return result;
    };
    /**
     * 释放截图
     */
    EcRoot.prototype.freeScreenshot = function () {
        if (this.screenshot) {
            image.recycle(this.screenshot);
            this.screenshot = null;
        }
    };
    return EcRoot;
}(BaseClass_1.BaseClass));
exports.EcRoot = EcRoot;


/***/ }),

/***/ "./_base/Utils.ts":
/*!************************!*\
  !*** ./_base/Utils.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Main = void 0;
var CCFClass_1 = __webpack_require__(/*! ./_base/CCFClass */ "./_base/CCFClass.ts");
var Debug_1 = __webpack_require__(/*! ./_base/Debug */ "./_base/Debug.ts");
var Main = /** @class */ (function () {
    function Main() {
        var itself = this;
        itself.exec();
    }
    Main.prototype.exec = function () {
        if (!ccf.root.isHasJietu) {
            Debug_1.Debug.loggerD("截图失败？？？", String(ccf.root.isHasJietu));
            return;
        }
        Debug_1.Debug.loggerD("开始运行");
        this.loopExec();
    };
    Main.prototype.loopExec = function () {
        ccf.closeView.exec();
    };
    return Main;
}());
exports.Main = Main;
CCFClass_1.CCF.getIns();
ccf.root.exec();
new Main();

})();

ccf = __webpack_exports__;
/******/ })()
;