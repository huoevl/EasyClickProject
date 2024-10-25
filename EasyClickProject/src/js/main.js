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

/***/ "./_base/CCF.ts":
/*!**********************!*\
  !*** ./_base/CCF.ts ***!
  \**********************/
/***/ (() => {


var ccf = {};


/***/ }),

/***/ "./_base/CCFClass.ts":
/*!***************************!*\
  !*** ./_base/CCFClass.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var ccf = __webpack_require__(/*! ./_base/CCF.ts */ "./_base/CCF.ts");

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
var GameRoot_1 = __webpack_require__(/*! ../pkg/_base/GameRoot */ "./pkg/_base/GameRoot.ts");
var MainTask_1 = __webpack_require__(/*! ../pkg/daily/MainTask */ "./pkg/daily/MainTask.ts");
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
        ccf.gameRoot = GameRoot_1.GameRoot.getIns();
        ccf.adpat = Adapt_1.default.getIns();
        ccf.ecRoot = EcRoot_1.EcRoot.getIns();
        ccf.mainTask = MainTask_1.MainTask.getIns();
        ccf.closeView = CloseView_1.CloseView.getIns();
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


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AndroidSdkToV = exports.sleepTime3000 = exports.sleepTime2000 = exports.sleepTime1000 = exports.sleepTime500 = exports.sleepTime400 = exports.sleepTime300 = exports.sleepTime200 = exports.sleepTime100 = exports.rectTemp = void 0;
exports.rectTemp = new Rect();
exports.sleepTime100 = 100;
exports.sleepTime200 = 200;
exports.sleepTime300 = 300;
exports.sleepTime400 = 400;
exports.sleepTime500 = 500;
exports.sleepTime1000 = 1000;
exports.sleepTime2000 = 2000;
exports.sleepTime3000 = 3000;
var numberMapping = {
    35: 15,
    34: 13
};
/** 安卓sdk对应的安卓版本 */
exports.AndroidSdkToV = (_a = {},
    _a[35] = 15,
    _a[34] = 14,
    _a[33] = 13,
    _a[32] = 12,
    _a[31] = 12,
    _a[30] = 11,
    _a[29] = 10,
    _a[28] = 9,
    _a[27] = 8.1,
    _a[26] = 8,
    _a[25] = 7.1,
    _a[24] = 7,
    _a[23] = 6,
    _a[22] = 5.1,
    _a[21] = 5,
    _a);


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
    Debug.saveToDebug = function (img, name, isBitmap) {
        var url = DebugImgPath + name + ".png";
        var result = false;
        if (isBitmap) {
            result = image.saveBitmap(img, "png", 100, url);
        }
        else {
            result = image.saveTo(img, url);
        }
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

/* provided dependency */ var ccf = __webpack_require__(/*! ./_base/CCF.ts */ "./_base/CCF.ts");

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
                    Debug_1.Debug.loggerD("寻图成功！" + data.name + "点击");
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

/***/ "./pkg/_base/GameRoot.ts":
/*!*******************************!*\
  !*** ./pkg/_base/GameRoot.ts ***!
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
exports.GameRoot = void 0;
var BaseClass_1 = __webpack_require__(/*! ../../_base/BaseClass */ "./_base/BaseClass.ts");
var Const_1 = __webpack_require__(/*! ../../_base/Const */ "./_base/Const.ts");
var Debug_1 = __webpack_require__(/*! ../../_base/Debug */ "./_base/Debug.ts");
var GameRoot = /** @class */ (function (_super) {
    __extends(GameRoot, _super);
    function GameRoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameRoot.prototype.init = function () {
        this.initCapture();
        this.initOcr();
    };
    /** 初始化截图 */
    GameRoot.prototype.initCapture = function () {
        image.setInitParam({
            "action_timeout": 10000,
            "auto_click_request_dialog": false
        });
        image.setFindColorImageMode(2);
        var req = startEnv();
        if (!req) {
            Debug_1.Debug.loggerE("申请自动化权限失败");
            return;
        }
        var request = image.requestScreenCapture(Const_1.sleepTime2000, 0);
        if (request) {
            this.isCanJieTu = true;
            Debug_1.Debug.loggerD(this.isCanJieTu);
            Debug_1.Debug.loggerD("申请截图成功");
        }
        else {
            Debug_1.Debug.loggerE("申请截图失败");
        }
        var d = image.initOpenCV();
        Debug_1.Debug.loggerD(d);
        sleep(Const_1.sleepTime2000);
    };
    /** 初始化OCR识别 */
    GameRoot.prototype.initOcr = function () {
        var _this = this;
        this.ocrObj = ocr.newOcr();
        setStopCallback(function () {
            var _a;
            (_a = _this.ocrObj) === null || _a === void 0 ? void 0 : _a.releaseAll();
        });
        if (!isServiceOk()) {
            startEnv();
        }
        var data = {
            type: "ocrLite" /* OCRType.OcrLite */,
            padding: 20,
            maxSideLen: 0,
            numThread: 1
        };
        var result = this.isInit = this.ocrObj.initOcr(data);
        if (!result) {
            Debug_1.Debug.loggerE("初始化图文识别失败：", this.ocrObj.getErrorMsg());
        }
        sleep(Const_1.sleepTime1000);
    };
    /**
     * 获取文字识别文本
     * @param x
     * @param y
     * @param width
     * @param height
     */
    GameRoot.prototype.getOcrTxt = function (x, y, width, height) {
        var _a;
        if (!this.isInit) {
            return "";
        }
        var tempbitmap = image.captureScreenBitmap("png", x, y, x + width, y + height, 100);
        var tempbitmapEZ = image.binaryzationBitmap(tempbitmap, 1, 120);
        Debug_1.Debug.saveToDebug(tempbitmapEZ, "文字识别截图", true);
        var result = ((_a = this.ocrObj) === null || _a === void 0 ? void 0 : _a.ocrBitmap(tempbitmapEZ, 10000, {})) || [];
        var label = "";
        Debug_1.Debug.loggerD("文字识别结果：", JSON.stringify(result));
        for (var i = 0; i < result.length; i++) {
            var value = result[i];
            if (value.confidence > 50) {
                label = value.label || "";
                break;
            }
        }
        image.recycle(tempbitmap);
        image.recycle(tempbitmapEZ);
        return label;
    };
    /**
    * 是否站立
    */
    GameRoot.prototype.isStand = function () {
        var _a, _b;
        var txt1 = (_a = this.getOcrTxt(1148, 21, 83, 17).match(/[0-9]/g)) === null || _a === void 0 ? void 0 : _a.join("");
        sleep(Const_1.sleepTime500);
        var txt2 = (_b = this.getOcrTxt(1148, 21, 83, 16).match(/[0-9]/g)) === null || _b === void 0 ? void 0 : _b.join("");
        Debug_1.Debug.loggerD("是否站立：", txt1, txt2);
        if (!txt1 || !txt2) {
            Debug_1.Debug.loggerE("文字识别出错");
            return false;
        }
        return txt1 === txt2;
    };
    return GameRoot;
}(BaseClass_1.BaseClass));
exports.GameRoot = GameRoot;


/***/ }),

/***/ "./pkg/daily/MainTask.ts":
/*!*******************************!*\
  !*** ./pkg/daily/MainTask.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var ccf = __webpack_require__(/*! ./_base/CCF.ts */ "./_base/CCF.ts");

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
exports.MainTask = void 0;
var BaseClass_1 = __webpack_require__(/*! ../../_base/BaseClass */ "./_base/BaseClass.ts");
var MainTask = /** @class */ (function (_super) {
    __extends(MainTask, _super);
    function MainTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainTask.prototype.exec = function () {
        ccf.gameRoot.isStand();
    };
    return MainTask;
}(BaseClass_1.BaseClass));
exports.MainTask = MainTask;


/***/ }),

/***/ "./pkg/misc/CloseView.ts":
/*!*******************************!*\
  !*** ./pkg/misc/CloseView.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var ccf = __webpack_require__(/*! ./_base/CCF.ts */ "./_base/CCF.ts");

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
                    ccf.ecRoot.freeScreenshot();
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
    _a["mian_fei_linqu1" /* CloseFileName.MianFeiLq */] = { name: "mian_fei_linqu1" /* CloseFileName.MianFeiLq */, x: 453, y: 522, width: 109, height: 21 },
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
/* provided dependency */ var ccf = __webpack_require__(/*! ./_base/CCF.ts */ "./_base/CCF.ts");

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
        if (!ccf.gameRoot.isCanJieTu) {
            return;
        }
        Debug_1.Debug.loggerD("开始运行");
        this.loopExec();
    };
    Main.prototype.loopExec = function () {
        // ccf.closeView.exec();
        ccf.mainTask.exec();
    };
    return Main;
}());
exports.Main = Main;
CCFClass_1.CCF.getIns();
new Main();

})();

/******/ })()
;