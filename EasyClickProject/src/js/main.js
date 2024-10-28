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
     * 获取实际xy,x1y1坐标
     * @param x
     * @param y
     * @param x1
     * @param y1
     */
    Adapt.prototype.getAdaptXy2 = function (x, y, x1, y1) {
        return { x: x, y: y, x1: x1, y1: y1 };
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
        var _this = this;
        this.init(data);
        setStopCallback(function () {
            _this.onStop();
        });
    }
    BaseClass.getIns = function (data) {
        return this.instance || (this.instance = new this(data));
    };
    /** 初始化，子类重写 */
    BaseClass.prototype.init = function (data) {
    };
    /** 脚本停止后回调，子类重新 */
    BaseClass.prototype.onStop = function () {
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
        logd(msg.join("，"));
    };
    Debug.loggerW = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        logw(msg.join("，"));
    };
    Debug.loggerE = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        loge(msg.join("，"));
    };
    return Debug;
}());
exports.Debug = Debug;


/***/ }),

/***/ "./_base/EcInit.ts":
/*!*************************!*\
  !*** ./_base/EcInit.ts ***!
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
exports.EcInit = void 0;
var BaseClass_1 = __webpack_require__(/*! ./BaseClass */ "./_base/BaseClass.ts");
var Const_1 = __webpack_require__(/*! ./Const */ "./_base/Const.ts");
var Debug_1 = __webpack_require__(/*! ./Debug */ "./_base/Debug.ts");
var EcInit = /** @class */ (function (_super) {
    __extends(EcInit, _super);
    function EcInit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EcInit.prototype.init = function () {
        var _this = this;
        setExceptionCallback(function (err) {
            _this.onEcErr(err);
        });
        this.isLoop = true;
        if (!isServiceOk()) {
            startEnv();
        }
        if (!isServiceOk()) {
            Debug_1.Debug.loggerE("申请自动化权限失败");
            return;
        }
        this.initCapture();
        this.initOcr();
    };
    /** 初始化截图 */
    EcInit.prototype.initCapture = function () {
        image.setInitParam({
            "action_timeout": 10000,
            "auto_click_request_dialog": false
        });
        image.setFindColorImageMode(2);
        var request = image.requestScreenCapture(Const_1.sleepTime2000, 0);
        if (request) {
            this.isScreenInit = true;
            Debug_1.Debug.loggerD("申请截图成功");
        }
        else {
            Debug_1.Debug.loggerE("申请截图失败");
        }
        var d = image.initOpenCV();
        if (d) {
            this.isOpenCVInit = true;
        }
        else {
            Debug_1.Debug.loggerE("初始化OpenCV失败");
        }
        sleep(Const_1.sleepTime2000);
    };
    EcInit.prototype.onStop = function () {
        var _a;
        (_a = this.ocrObj) === null || _a === void 0 ? void 0 : _a.releaseAll();
    };
    /** 初始化OCR识别 */
    EcInit.prototype.initOcr = function () {
        this.ocrObj = ocr.newOcr();
        if (!isServiceOk()) {
            startEnv();
        }
        var data = {
            type: "ocrLite" /* OCRType.OcrLite */,
            padding: 20,
            maxSideLen: 0,
            numThread: 1
        };
        var result = this.isOcrInit = this.ocrObj.initOcr(data);
        if (!result) {
            Debug_1.Debug.loggerE("初始化图文识别失败：", this.ocrObj.getErrorMsg());
        }
        sleep(Const_1.sleepTime1000);
    };
    EcInit.prototype.onEcErr = function (err) {
        Debug_1.Debug.loggerE("脚本异常停止：");
        Debug_1.Debug.loggerE(err);
    };
    return EcInit;
}(BaseClass_1.BaseClass));
exports.EcInit = EcInit;


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
     * @deprecated
     */
    EcRoot.prototype.exec = function () { };
    /**
     * 范围截图
     */
    EcRoot.prototype.captureScreen = function (x, y, x1, y1) {
        var point = ccf.adpat.getAdaptXy2(x, y, x1, y1);
        return image.captureScreen(2, point.x, point.y, point.x1, point.y1);
    };
    /**
     * 是否寻图成功
     * @param big 大图
     * @param min 小图
     */
    EcRoot.prototype.isFindImg = function (big, min, x, y, x1, y1) {
        if (!big || !min) {
            return false;
        }
        var adpXy2 = ccf.adpat.getAdaptXy2(x, y, x1, y1);
        var rests = image.findImage(big, min, adpXy2.x, adpXy2.y, adpXy2.x1, adpXy2.y1, 0.7, 0.9, 1, 5);
        if (rests && rests.length) {
            sleep(Const_1.sleepTime100);
            var rect = Utils_1.Utils.getRectByArray(rests);
            if (rect) {
                return true;
            }
        }
        return false;
    };
    /**
     * 找图并点击
     * @param moduleName
     * @param data
     * @param isUseLast 是否使用上一次截图
     * @returns
     */
    EcRoot.prototype.findImgRandClick = function (data, isUseLast) {
        var _a, _b;
        if (data.moudleName != this.lastMdName) {
            this.lastMdName = data.moudleName;
            this.freeScreenshot();
        }
        if (!!data.isBin != !!this.lastIsBin) {
            this.freeScreenshot();
            this.lastIsBin = data.isBin;
        }
        var url = data.moudleName + "/" + data.name + ".png";
        logd(url);
        var img = readResAutoImage(url);
        var result = false;
        this.screenshot = this.screenshot || image.captureFullScreen();
        if (data.isBin) {
            this.screenshot = image.binaryzation(this.screenshot, 0, 100);
        }
        if (this.screenshot != null) {
            var adpXy2 = (_a = ccf.adpat).getAdaptXy2.apply(_a, data.rect);
            var rests = image.findImage(this.screenshot, img, adpXy2.x, adpXy2.y, adpXy2.x1, adpXy2.y1, 0.7, 0.9, 1, 5);
            if (data.isBin) {
                Debug_1.Debug.loggerW("二值化", JSON.stringify(rests));
                Debug_1.Debug.saveToDebug(this.screenshot, "测试截图");
                Debug_1.Debug.saveToDebug(img, "测试截图2");
            }
            if (rests && rests.length) {
                sleep(Const_1.sleepTime100);
                var rect = Utils_1.Utils.getRectByArray(rests);
                if (rect) {
                    Debug_1.Debug.loggerD("寻图成功！" + data.name + "点击");
                    this.clickRand(data.clickRect ? (_b = ccf.adpat).getAdaptXy2.apply(_b, data.clickRect) : adpXy2);
                    result = true;
                }
            }
            else {
                Debug_1.Debug.loggerW(JSON.stringify(adpXy2));
                Debug_1.Debug.loggerW("寻图失败！" + data.name);
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
     * 随机点击
     * @param x
     * @param y
     * @param width
     * @param height
     */
    EcRoot.prototype.clickRand = function (point2) {
        Const_1.rectTemp.left = point2.x;
        Const_1.rectTemp.top = point2.y;
        Const_1.rectTemp.right = point2.x1;
        Const_1.rectTemp.bottom = point2.y1;
        clickRandomRect(Const_1.rectTemp);
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
    /**
     * 获取文字识别文本
     * @param x
     * @param y
     * @param width
     * @param height
     */
    EcRoot.prototype.getOcrTxt = function (x, y, x1, y1) {
        var _a;
        if (!ccf.ecInit.isOcrInit) {
            return "";
        }
        var adpXy2 = ccf.adpat.getAdaptXy2(x, y, x1, y1);
        var tempbitmap = image.captureScreenBitmap("png", adpXy2.x, adpXy2.y, adpXy2.x1, adpXy2.y1, 100);
        var tempbitmapEZ = image.binaryzationBitmap(tempbitmap, 1, 120);
        Debug_1.Debug.saveToDebug(tempbitmapEZ, "文字识别截图", true);
        var result = ((_a = ccf.ecInit.ocrObj) === null || _a === void 0 ? void 0 : _a.ocrBitmap(tempbitmapEZ, 10000, {})) || [];
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
     * 获取屏幕bitmap颜色数组
     * @param x
     * @param y
     * @param width
     * @param height
     * @param binaryNum 二值化数据，不传这不做二值化
     * @returns
     */
    EcRoot.prototype.getScreenBitMapColors = function (x, y, x1, y1, binaryNum) {
        var adpXy2 = ccf.adpat.getAdaptXy2(x, y, x1, y1);
        var bitmap = image.captureScreenBitmap("png", adpXy2.x, adpXy2.y, adpXy2.x1, adpXy2.y1, 100);
        if (binaryNum) {
            bitmap = image.binaryzationBitmap(bitmap, 1, binaryNum);
        }
        var w = bitmap.getWidth();
        var h = bitmap.getHeight();
        var mPixels = image.getPixelsBitmap(bitmap, w * h, 0, w, 0, 0, w, h);
        //图片要回收
        image.recycle(bitmap);
        return mPixels;
    };
    return EcRoot;
}(BaseClass_1.BaseClass));
exports.EcRoot = EcRoot;


/***/ }),

/***/ "./_base/Temp.ts":
/*!***********************!*\
  !*** ./_base/Temp.ts ***!
  \***********************/
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
exports.Temp = void 0;
var BaseClass_1 = __webpack_require__(/*! ./BaseClass */ "./_base/BaseClass.ts");
var Temp = /** @class */ (function (_super) {
    __extends(Temp, _super);
    function Temp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Temp.prototype.init = function () {
        this.index = 0;
    };
    return Temp;
}(BaseClass_1.BaseClass));
exports.Temp = Temp;


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
     * @param {Array} rects points：[{"top":135,"bottom":158,"left":853,"right":875,"similarity":1}]
     * @returns {Rect}
     */
    Utils.getRectByArray = function (rects) {
        if (!Array.isArray(rects)) {
            return;
        }
        var similarity = 0;
        var pointTemp = null;
        for (var index_1 = 0; index_1 < rects.length; index_1++) {
            var point = rects[index_1];
            if (point.similarity > similarity) {
                pointTemp = point;
            }
        }
        if (!pointTemp) {
            return;
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

/***/ "./pkg/_base/CCFClass.ts":
/*!*******************************!*\
  !*** ./pkg/_base/CCFClass.ts ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CCF = void 0;
var Adapt_1 = __importDefault(__webpack_require__(/*! ../../_base/Adapt */ "./_base/Adapt.ts"));
var BaseClass_1 = __webpack_require__(/*! ../../_base/BaseClass */ "./_base/BaseClass.ts");
var EcInit_1 = __webpack_require__(/*! ../../_base/EcInit */ "./_base/EcInit.ts");
var EcRoot_1 = __webpack_require__(/*! ../../_base/EcRoot */ "./_base/EcRoot.ts");
var Temp_1 = __webpack_require__(/*! ../../_base/Temp */ "./_base/Temp.ts");
var MainTask_1 = __webpack_require__(/*! ../daily/MainTask */ "./pkg/daily/MainTask.ts");
var CloseView_1 = __webpack_require__(/*! ../misc/CloseView */ "./pkg/misc/CloseView.ts");
var StoryView_1 = __webpack_require__(/*! ../misc/StoryView */ "./pkg/misc/StoryView.ts");
var GameRoot_1 = __webpack_require__(/*! ./GameRoot */ "./pkg/_base/GameRoot.ts");
var CCF = /** @class */ (function (_super) {
    __extends(CCF, _super);
    function CCF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CCF.prototype.init = function () {
        ccf.temp = Temp_1.Temp.getIns();
        ccf.adpat = Adapt_1.default.getIns();
        ccf.ecInit = EcInit_1.EcInit.getIns();
        ccf.ecRoot = EcRoot_1.EcRoot.getIns();
        ccf.gameRoot = GameRoot_1.GameRoot.getIns();
        ccf.mainTask = MainTask_1.MainTask.getIns();
        ccf.closeView = CloseView_1.CloseView.getIns();
        ccf.story = StoryView_1.StoryView.getIns();
    };
    return CCF;
}(BaseClass_1.BaseClass));
exports.CCF = CCF;


/***/ }),

/***/ "./pkg/_base/GameConst.ts":
/*!********************************!*\
  !*** ./pkg/_base/GameConst.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SomePoints = void 0;
/** 一些坐标 */
exports.SomePoints = {
    /** 人物头像截图 */
    PlayerHead: [51, 46, 75, 67],
    /** 人物头像寻图范围 */
    PlayerHeadFind: [28, 21, 100, 85],
    /** 地图右上角坐标范围 */
    MapRightTop: [1150, 21, 1225, 36],
};


/***/ }),

/***/ "./pkg/_base/GameRoot.ts":
/*!*******************************!*\
  !*** ./pkg/_base/GameRoot.ts ***!
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameRoot = void 0;
var BaseClass_1 = __webpack_require__(/*! ../../_base/BaseClass */ "./_base/BaseClass.ts");
var Const_1 = __webpack_require__(/*! ../../_base/Const */ "./_base/Const.ts");
var Debug_1 = __webpack_require__(/*! ../../_base/Debug */ "./_base/Debug.ts");
var GameConst_1 = __webpack_require__(/*! ./GameConst */ "./pkg/_base/GameConst.ts");
var GameRoot = /** @class */ (function (_super) {
    __extends(GameRoot, _super);
    function GameRoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameRoot.prototype.onStop = function () {
        if (this.headImg) {
            image.recycle(this.headImg);
        }
    };
    /**
    * 是否站立
    */
    GameRoot.prototype.isStand = function () {
        var _a, _b, _c, _d;
        if (!this.headImg) {
            this.headImg = (_a = ccf.ecRoot).captureScreen.apply(_a, GameConst_1.SomePoints.PlayerHead);
            sleep(Const_1.sleepTime100);
        }
        if (!this.headImg) {
            Debug_1.Debug.loggerE("没有头像");
            return true;
        }
        var screenshot = image.captureFullScreen();
        var isFind = (_b = ccf.ecRoot).isFindImg.apply(_b, __spreadArray([screenshot, this.headImg], GameConst_1.SomePoints.PlayerHeadFind, false));
        if (!isFind) {
            Debug_1.Debug.loggerD("非主场景站立");
            image.recycle(screenshot);
            return true;
        }
        image.recycle(screenshot);
        var colors1 = (_c = ccf.ecRoot).getScreenBitMapColors.apply(_c, __spreadArray(__spreadArray([], GameConst_1.SomePoints.MapRightTop, false), [120], false));
        sleep(Const_1.sleepTime500);
        var colors2 = (_d = ccf.ecRoot).getScreenBitMapColors.apply(_d, __spreadArray(__spreadArray([], GameConst_1.SomePoints.MapRightTop, false), [120], false));
        var same = 0;
        for (var index_1 = 0, len = colors1.length; index_1 < len; index_1++) {
            if (colors1[index_1] === colors2[index_1]) {
                same++;
            }
        }
        var ratio = same / colors1.length;
        Debug_1.Debug.loggerW("比率：", ratio, colors1.length, colors2.length, same, colors1.length - same);
        return ratio >= 0.97;
    };
    return GameRoot;
}(BaseClass_1.BaseClass));
exports.GameRoot = GameRoot;


/***/ }),

/***/ "./pkg/daily/MainConst.ts":
/*!********************************!*\
  !*** ./pkg/daily/MainConst.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DailyImgData = void 0;
/** 通用关闭按钮信息 */
exports.DailyImgData = (_a = {},
    _a["main_task" /* DailyFileName.MainTask */] = { moudleName: "daily" /* MoudleName.Daily */, name: "main_task" /* DailyFileName.MainTask */, rect: [48, 173, 235, 201] },
    _a);


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
var Const_1 = __webpack_require__(/*! ../../_base/Const */ "./_base/Const.ts");
var Debug_1 = __webpack_require__(/*! ../../_base/Debug */ "./_base/Debug.ts");
var MainConst_1 = __webpack_require__(/*! ./MainConst */ "./pkg/daily/MainConst.ts");
var MainTask = /** @class */ (function (_super) {
    __extends(MainTask, _super);
    function MainTask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isStan = false;
        _this.isInit = true;
        return _this;
    }
    ;
    MainTask.prototype.exec = function (isBreak) {
        if (!isBreak) {
            ccf.closeView.exec();
        }
        var isStand = ccf.gameRoot.isStand();
        if (!isStand) {
            Debug_1.Debug.loggerD("行走中...");
            this.isStan = false;
            sleep(Const_1.sleepTime2000);
            this.exec(true);
            return;
        }
        Debug_1.Debug.loggerD("站立中...", this.isStan, this.isInit);
        if (!this.isStan || this.isInit) {
            this.isInit = false;
            Debug_1.Debug.loggerD("检查剧情...");
            ccf.story.exec();
        }
        this.isStan = true;
        ccf.ecRoot.findImgRandClick(MainConst_1.DailyImgData["main_task" /* DailyFileName.MainTask */]);
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
                var isClick = ccf.ecRoot.findImgRandClick(data, true);
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
exports.StoryTxtData = exports.StoryImgData = exports.MiscImgData = void 0;
/** 通用关闭按钮信息 */
exports.MiscImgData = (_a = {},
    _a["mian_fei_linqu2" /* CloseFileName.MianFeiLq2 */] = { moudleName: "misc" /* MoudleName.Misc */, name: "mian_fei_linqu2" /* CloseFileName.MianFeiLq2 */, rect: [437, 482, 578, 520] },
    _a["fu_huo" /* CloseFileName.FuHuo */] = { moudleName: "misc" /* MoudleName.Misc */, name: "fu_huo" /* CloseFileName.FuHuo */, rect: [661, 392, 804, 430] },
    _a["close1" /* CloseFileName.Close1 */] = { moudleName: "misc" /* MoudleName.Misc */, name: "close1" /* CloseFileName.Close1 */, rect: [843, 129, 884, 160] },
    _a["use1" /* CloseFileName.Use1 */] = { moudleName: "misc" /* MoudleName.Misc */, name: "use1" /* CloseFileName.Use1 */, rect: [805, 548, 936, 587] },
    _a["mian_fei_linqu1" /* CloseFileName.MianFeiLq */] = { moudleName: "misc" /* MoudleName.Misc */, name: "mian_fei_linqu1" /* CloseFileName.MianFeiLq */, rect: [433, 513, 578, 552] },
    _a["equip_to" /* CloseFileName.EquipTo */] = { moudleName: "misc" /* MoudleName.Misc */, name: "equip_to" /* CloseFileName.EquipTo */, rect: [808, 551, 933, 587] },
    _a);
/** 通用剧情按钮信息 */
exports.StoryImgData = {
// [StoryFileName.Story1]: { moudleName: MoudleName.Misc, name: StoryFileName.Story1, rect: [40, 42, 139, 70], isBin: true, clickRect: [490, 605, 861, 693] },
};
/** 通用剧情文本信息 */
exports.StoryTxtData = {
    Stroy1: { txt: "对白回顾", rect: [40, 42, 139, 70], clickRect: [490, 605, 861, 693] }
};


/***/ }),

/***/ "./pkg/misc/StoryView.ts":
/*!*******************************!*\
  !*** ./pkg/misc/StoryView.ts ***!
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
exports.StoryView = void 0;
var BaseClass_1 = __webpack_require__(/*! ../../_base/BaseClass */ "./_base/BaseClass.ts");
var Const_1 = __webpack_require__(/*! ../../_base/Const */ "./_base/Const.ts");
var MiscConst_1 = __webpack_require__(/*! ./MiscConst */ "./pkg/misc/MiscConst.ts");
var StoryView = /** @class */ (function (_super) {
    __extends(StoryView, _super);
    function StoryView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StoryView.prototype.exec = function () {
        var _a, _b, _c;
        var click = false;
        for (var name in MiscConst_1.StoryTxtData) {
            if (Object.prototype.hasOwnProperty.call(MiscConst_1.StoryTxtData, name)) {
                var data = MiscConst_1.StoryTxtData[name];
                var txt = (_a = ccf.ecRoot).getOcrTxt.apply(_a, data.rect);
                if (txt == data.txt) {
                    ccf.ecRoot.clickRand(data.clickRect ? (_b = ccf.adpat).getAdaptXy2.apply(_b, data.clickRect) : (_c = ccf.adpat).getAdaptXy2.apply(_c, data.rect));
                    click = true;
                    sleep(Const_1.sleepTime100);
                }
            }
        }
        for (var name in MiscConst_1.StoryImgData) {
            if (Object.prototype.hasOwnProperty.call(MiscConst_1.StoryImgData, name)) {
                var data = MiscConst_1.StoryImgData[name];
                var isClick = ccf.ecRoot.findImgRandClick(data, true);
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
    return StoryView;
}(BaseClass_1.BaseClass));
exports.StoryView = StoryView;


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
var Const_1 = __webpack_require__(/*! ./_base/Const */ "./_base/Const.ts");
var Debug_1 = __webpack_require__(/*! ./_base/Debug */ "./_base/Debug.ts");
var CCFClass_1 = __webpack_require__(/*! ./pkg/_base/CCFClass */ "./pkg/_base/CCFClass.ts");
var Main = /** @class */ (function () {
    function Main() {
        var itself = this;
        itself.exec();
    }
    Main.prototype.exec = function () {
        if (!ccf.ecInit.isScreenInit || !ccf.ecInit.isOpenCVInit) {
            return;
        }
        Debug_1.Debug.loggerD("开始运行");
        this.loopExec();
    };
    Main.prototype.loopExec = function () {
        while (ccf.ecInit.isLoop) {
            ccf.mainTask.exec();
            sleep(Const_1.sleepTime2000);
        }
    };
    return Main;
}());
exports.Main = Main;
CCFClass_1.CCF.getIns();
new Main();

})();

/******/ })()
;