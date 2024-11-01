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
    Adapt.prototype.init = function () {
        this.currEnv = 0 /* Environment.dev */;
    };
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var ccf = __webpack_require__(/*! ./_base/CCF.ts */ "./_base/CCF.ts");

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
        if (ccf.adpat.currEnv !== 0 /* Environment.dev */) {
            return;
        }
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
        if (ccf.adpat.currEnv !== 0 /* Environment.dev */) {
            return;
        }
        logd(msg.join("，"));
    };
    Debug.loggerW = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (ccf.adpat.currEnv !== 0 /* Environment.dev */) {
            return;
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
        this.initYolo();
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
        sleep(Const_1.sleepTime1000);
    };
    EcInit.prototype.onStop = function () {
        var _a, _b;
        (_a = this.ocrObj) === null || _a === void 0 ? void 0 : _a.releaseAll();
        (_b = this.yoloObj) === null || _b === void 0 ? void 0 : _b.release();
        image.releaseScreenCapture();
        Debug_1.Debug.loggerW("停止运行回调");
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
    EcInit.prototype.initYolo = function () {
        var binPath = "/sdcard/model.ncnn.bin";
        var paramPath = "/sdcard/model.ncnn.param";
        if (ccf.adpat.currEnv == 0 /* Environment.dev */ || !file.exists(binPath)) {
            saveResToFile("model.ncnn.bin", "/sdcard/model.ncnn.bin");
        }
        if (ccf.adpat.currEnv == 0 /* Environment.dev */ || !file.exists(paramPath)) {
            saveResToFile("model.ncnn.param", "/sdcard/model.ncnn.param");
        }
        sleep(Const_1.sleepTime1000);
        // 初始化YOLO实例
        var yolov8s = this.yoloObj = yolov8Api.newYolov8();
        var config = yolov8s.getDefaultConfig("yolov8s-640", 640, 0.25, 0.35, "ALL", 1, [
            "wwdx",
        ]);
        // 初始化 训练过的模型
        var inted = yolov8s.initYoloModel(config, paramPath, binPath);
        if (inted) {
            logd("初始化yolov8s成功");
            this.isYoloInit = true;
        }
        else {
            logd("初始化yolov8s失败: " + yolov8s.getErrorMsg());
        }
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
    EcRoot.prototype.findImg = function (big, min, x, y, x1, y1) {
        if (!big || !min) {
            return false;
        }
        var adpXy2 = ccf.adpat.getAdaptXy2(x, y, x1, y1);
        var rests = image.findImage(big, min, adpXy2.x, adpXy2.y, adpXy2.x1, adpXy2.y1, 0.7, 0.9, 1, 5);
        if (rests && rests.length) {
            sleep(Const_1.sleepTime500);
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
    EcRoot.prototype.findImgRandClick = function (data, isUseLast, isNotClick) {
        var _a;
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
        this.screenshot = this.screenshot || this.getFullScreen();
        if (data.isBin) {
            var temp = this.screenshot;
            this.screenshot = image.binaryzation(this.screenshot, 0, 100);
            image.recycle(temp);
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
                var rect = Utils_1.Utils.getRectByArray(rests);
                if (rect) {
                    Debug_1.Debug.loggerD("寻图成功！" + data.name + "点击");
                    result = true;
                    if (!isNotClick) {
                        sleep(Const_1.sleepTime500);
                        this.clickRandRect(data);
                    }
                    else {
                        sleep(Const_1.sleepTime100);
                    }
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
     * @param data
     */
    EcRoot.prototype.clickRandRect = function (data) {
        var _a, _b;
        var point;
        if (data.clickRect) {
            point = (_a = ccf.adpat).getAdaptXy2.apply(_a, data.clickRect);
        }
        else {
            point = (_b = ccf.adpat).getAdaptXy2.apply(_b, data.rect);
        }
        ;
        this.clickRand(point);
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
     * 获取文字识别文本（准确率不高，最好不用）
     * @deprecated
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
            if (value.confidence > 90) {
                label = value.label || "";
                break;
            }
        }
        image.recycle(tempbitmap);
        image.recycle(tempbitmapEZ);
        return label;
    };
    /**
     * 获取图片autoimage颜色数组
     * @param imgOrUrl
     * @param binaryNum
     */
    EcRoot.prototype.getImageColors = function (imgOrUrl, binaryNum) {
        if (!imgOrUrl) {
            return [];
        }
        var img;
        var bitMap;
        if (typeof imgOrUrl == "string") {
            img = readResAutoImage(imgOrUrl);
        }
        else {
            img = imgOrUrl;
        }
        if (!img) {
            return [];
        }
        bitMap = image.imageToBitmap(img);
        var color = this.getBitmapColors(bitMap, binaryNum);
        image.recycle(img);
        image.recycle(bitMap);
        return color;
    };
    /**
     * 获取bitmap颜色数组
     * @param bitmap
     * @param binaryNum
     * @returns
     */
    EcRoot.prototype.getBitmapColors = function (bitmap, binaryNum) {
        if (binaryNum) {
            var temp = bitmap;
            bitmap = image.binaryzationBitmap(temp, 1, binaryNum);
            image.recycle(temp);
        }
        var w = bitmap.getWidth();
        var h = bitmap.getHeight();
        var mPixels = image.getPixelsBitmap(bitmap, w * h, 0, w, 0, 0, w, h);
        return mPixels;
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
        var color = this.getBitmapColors(bitmap, binaryNum);
        image.recycle(bitmap);
        return color;
    };
    /**
     * 比较两个图片颜色是否相等，比率大于ratio及相等
     * @param colors1
     * @param colors2
     * @param ratio
     */
    EcRoot.prototype.isColorSame = function (colors1, colors2, ratio) {
        if (!colors1 || !colors2) {
            return false;
        }
        var same = 0;
        for (var index_1 = 0, len = colors1.length; index_1 < len; index_1++) {
            if (colors1[index_1] === colors2[index_1]) {
                same++;
            }
        }
        Debug_1.Debug.loggerW("比率：", same / colors1.length, colors1.length, colors2.length, same, colors1.length - same);
        return same / colors1.length > ratio;
    };
    /** 截图比色 */
    EcRoot.prototype.cmpColor = function (data, img, isSaveImg) {
        img = img || this.getFullScreen();
        if (img != null) {
            var points = image.cmpColor.apply(image, __spreadArray([img, data.color, 0.9], data.rect, false));
            //图片要回收
            if (!isSaveImg) {
                this.freeScreenshot();
            }
            return points;
        }
        return false;
    };
    /**
     * 获取全屏截图
     * @returns
     */
    EcRoot.prototype.getFullScreen = function () {
        if (!this.screenshot) {
            this.screenshot = image.captureFullScreen();
        }
        return this.screenshot;
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
var BranchTask_1 = __webpack_require__(/*! ../daily/BranchTask */ "./pkg/daily/BranchTask.ts");
var FaBaoView_1 = __webpack_require__(/*! ../daily/FaBaoView */ "./pkg/daily/FaBaoView.ts");
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
        ccf.branch = BranchTask_1.BranchTask.getIns();
        ccf.closeView = CloseView_1.CloseView.getIns();
        ccf.story = StoryView_1.StoryView.getIns();
        ccf.fabao = FaBaoView_1.FaBaoView.getIns();
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


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseColorData = exports.RedColorStr = exports.BaseImgData = exports.SomePoints = void 0;
/** 一些坐标 */
exports.SomePoints = {
    /** 人物头像截图 */
    PlayerHead: [51, 46, 75, 67],
    /** 人物头像寻图范围 */
    PlayerHeadFind: [28, 21, 100, 85],
    /** 地图右上角坐标范围 */
    MapRightTop: [1150, 21, 1225, 36],
};
/** 通用按钮信息 */
exports.BaseImgData = (_a = {},
    _a["txt_auto" /* BaseFileName.TxtAuto */] = { moudleName: "base" /* MoudleName.Base */, name: "txt_auto" /* BaseFileName.TxtAuto */, rect: [1150, 312, 1186, 331] },
    _a);
/** 红点比色信息 */
exports.RedColorStr = "83|108|#E31D01-#101010,83|101|#FF875A-#101010,88|100|#F7310D-#101010,91|104|#E81700-#101010,88|107|#E72D0B-#101010,82|107|#E41F03-#101010";
/** 通用比色信息 */
exports.BaseColorData = (_b = {},
    _b["home" /* BaseColorName.Home */] = { rect: [189, 6, 305, 28], color: "217|11|#FFFFFF-#101010,217|24|#FFFFFF-#101010,221|15|#FFFFFF-#101010,219|15|#FFFFFF-#101010,219|19|#FFFFFF-#101010,221|19|#FFFFFF-#101010,290|14|#EADB90-#101010,294|19|#D7BC5E-#101010,299|14|#E6CF8A-#101010,295|14|#E4D58E-#101010,195|18|#F0F1F2-#101010" },
    _b);


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
    GameRoot.prototype.isSameTxt = function () {
    };
    /** 是否在主界面 */
    GameRoot.prototype.isHome = function () {
        var result = ccf.ecRoot.cmpColor(GameConst_1.BaseColorData["home" /* BaseColorName.Home */]);
        Debug_1.Debug.loggerD("是否在主界面：", result);
        return result;
    };
    /**
    * 是否站立
    */
    GameRoot.prototype.isStand = function () {
        var _a, _b, _c, _d;
        if (!this.isHome()) {
            return true;
        }
        if (!this.headImg) {
            this.headImg = (_a = ccf.ecRoot).captureScreen.apply(_a, GameConst_1.SomePoints.PlayerHead);
            sleep(Const_1.sleepTime500);
        }
        if (!this.headImg) {
            Debug_1.Debug.loggerE("没有头像");
            return true;
        }
        var screenshot = ccf.ecRoot.getFullScreen();
        var isFind = (_b = ccf.ecRoot).findImg.apply(_b, __spreadArray([screenshot, this.headImg], GameConst_1.SomePoints.PlayerHeadFind, false));
        if (!isFind) {
            Debug_1.Debug.loggerD("非主场景站立");
            ccf.ecRoot.freeScreenshot();
            return true;
        }
        ccf.ecRoot.freeScreenshot();
        var colors1 = (_c = ccf.ecRoot).getScreenBitMapColors.apply(_c, __spreadArray(__spreadArray([], GameConst_1.SomePoints.MapRightTop, false), [150], false));
        sleep(Const_1.sleepTime500);
        var colors2 = (_d = ccf.ecRoot).getScreenBitMapColors.apply(_d, __spreadArray(__spreadArray([], GameConst_1.SomePoints.MapRightTop, false), [150], false));
        Debug_1.Debug.loggerD("判断是否站立");
        return ccf.ecRoot.isColorSame(colors1, colors2, 0.97);
    };
    /** 是否战斗中 */
    GameRoot.prototype.isFight = function () {
        var _a;
        var data = GameConst_1.BaseImgData["txt_auto" /* BaseFileName.TxtAuto */];
        var url = data.moudleName + "/" + data.name + ".png";
        var colors1 = ccf.ecRoot.getImageColors(url, 100);
        sleep(Const_1.sleepTime500);
        var colors2 = (_a = ccf.ecRoot).getScreenBitMapColors.apply(_a, __spreadArray(__spreadArray([], data.rect, false), [120], false));
        Debug_1.Debug.loggerD("判断是否战斗");
        return ccf.ecRoot.isColorSame(colors1, colors2, 0.96);
    };
    return GameRoot;
}(BaseClass_1.BaseClass));
exports.GameRoot = GameRoot;


/***/ }),

/***/ "./pkg/daily/BranchTask.ts":
/*!*********************************!*\
  !*** ./pkg/daily/BranchTask.ts ***!
  \*********************************/
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
exports.BranchTask = void 0;
var BaseClass_1 = __webpack_require__(/*! ../../_base/BaseClass */ "./_base/BaseClass.ts");
var Debug_1 = __webpack_require__(/*! ../../_base/Debug */ "./_base/Debug.ts");
var MainConst_1 = __webpack_require__(/*! ./MainConst */ "./pkg/daily/MainConst.ts");
var BranchTask = /** @class */ (function (_super) {
    __extends(BranchTask, _super);
    function BranchTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BranchTask.prototype.exec = function () {
        Debug_1.Debug.loggerD("执行支线");
        ccf.mainTask.checkState();
        ccf.ecRoot.findImgRandClick(MainConst_1.DailyImgData["branch_task" /* DailyFileName.BranchTask */]);
    };
    return BranchTask;
}(BaseClass_1.BaseClass));
exports.BranchTask = BranchTask;


/***/ }),

/***/ "./pkg/daily/FaBaoView.ts":
/*!********************************!*\
  !*** ./pkg/daily/FaBaoView.ts ***!
  \********************************/
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
exports.FaBaoView = void 0;
var BaseClass_1 = __webpack_require__(/*! ../../_base/BaseClass */ "./_base/BaseClass.ts");
var Const_1 = __webpack_require__(/*! ../../_base/Const */ "./_base/Const.ts");
var Debug_1 = __webpack_require__(/*! ../../_base/Debug */ "./_base/Debug.ts");
var MainConst_1 = __webpack_require__(/*! ./MainConst */ "./pkg/daily/MainConst.ts");
var FaBaoView = /** @class */ (function (_super) {
    __extends(FaBaoView, _super);
    function FaBaoView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaBaoView.prototype.exec = function () {
    };
    /** 点击修炼 */
    FaBaoView.prototype.doUp = function () {
        Debug_1.Debug.loggerD("执行法宝修炼");
        sleep(Const_1.sleepTime500);
        ccf.ecRoot.clickRandRect({ rect: __spreadArray([], MainConst_1.FabaoPointData.TabXiulian, true) });
        sleep(Const_1.sleepTime500);
        ccf.ecRoot.clickRandRect({ rect: __spreadArray([], MainConst_1.FabaoPointData.btnXiulian, true) });
    };
    /** 是否法宝界面 */
    FaBaoView.prototype.isFabaoView = function () {
        var data = MainConst_1.FabaoImgData["fabao_home" /* FabaoFileName.FabaoHome */];
        var result = ccf.ecRoot.findImgRandClick(data);
        Debug_1.Debug.loggerD("是否在法宝界面", result);
        return result;
    };
    /** 是否可升级 */
    FaBaoView.prototype.isCanUp = function () {
        var result = false;
        var img = ccf.ecRoot.getFullScreen();
        var firstColor = "#F00301-#101010";
        var result2 = image.findColor.apply(image, __spreadArray(__spreadArray([img, firstColor, 0.9], MainConst_1.FabaoPointData.canUpAttr, false), [1, 1], false));
        if (!result2) {
            result = !!ccf.ecRoot.cmpColor(MainConst_1.FabaoColorData["red" /* FabaoColorName.Red */]);
        }
        Debug_1.Debug.loggerD("法宝是否可升级：", result);
        ccf.ecRoot.freeScreenshot();
        return result;
    };
    return FaBaoView;
}(BaseClass_1.BaseClass));
exports.FaBaoView = FaBaoView;


/***/ }),

/***/ "./pkg/daily/MainConst.ts":
/*!********************************!*\
  !*** ./pkg/daily/MainConst.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FabaoPointData = exports.FabaoColorData = exports.FabaoImgData = exports.DailyImgData = void 0;
/** 通用主线按钮信息 */
exports.DailyImgData = (_a = {},
    _a["main_task" /* DailyFileName.MainTask */] = { moudleName: "daily" /* MoudleName.Daily */, name: "main_task" /* DailyFileName.MainTask */, rect: [48, 173, 235, 201] },
    _a["branch_task" /* DailyFileName.BranchTask */] = { moudleName: "daily" /* MoudleName.Daily */, name: "branch_task" /* DailyFileName.BranchTask */, rect: [49, 257, 231, 286] },
    _a);
exports.FabaoImgData = (_b = {},
    _b["fabao_home" /* FabaoFileName.FabaoHome */] = { moudleName: "daily" /* MoudleName.Daily */, name: "fabao_home" /* FabaoFileName.FabaoHome */, rect: [71, 27, 159, 71] },
    _b);
exports.FabaoColorData = (_c = {},
    _c["red" /* FabaoColorName.Red */] = { rect: [61, 90, 108, 123], color: "83|108|#E31D01-#101010,83|101|#FF875A-#101010,88|100|#F7310D-#101010,91|104|#E81700-#101010,88|107|#E72D0B-#101010,82|107|#E41F03-#101010" },
    _c);
exports.FabaoPointData = {
    TabXiulian: [12, 105, 93, 190],
    btnXiulian: [557, 630, 703, 662],
    canUpAttr: [476, 520, 785, 614], //修炼按钮上方区域
};


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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainTask.prototype.exec = function () {
        Debug_1.Debug.loggerD("执行主线...");
        this.checkState();
        ccf.ecRoot.findImgRandClick(MainConst_1.DailyImgData["main_task" /* DailyFileName.MainTask */]);
    };
    MainTask.prototype.checkState = function () {
        var isFight = ccf.gameRoot.isFight();
        if (isFight) {
            Debug_1.Debug.loggerD("战斗中...");
            sleep(Const_1.sleepTime3000);
            this.checkState();
            return;
        }
        var isStand = ccf.gameRoot.isStand();
        if (!isStand) {
            Debug_1.Debug.loggerD("行走中...");
            sleep(Const_1.sleepTime3000);
            this.checkState();
            return;
        }
        Debug_1.Debug.loggerD("站立中...");
        if (ccf.fabao.isFabaoView() && ccf.fabao.isCanUp()) {
            ccf.fabao.doUp();
        }
        ccf.story.exec();
        ccf.closeView.exec();
    };
    Object.defineProperty(MainTask.prototype, "isMainStop", {
        /** 主线是否不能继续 */
        get: function () {
            var _a;
            Debug_1.Debug.loggerD("判断是否未完待续...");
            var bitmap = image.captureScreenBitmapEx();
            Debug_1.Debug.saveToDebug(bitmap, "yolov8", true);
            var result = (_a = ccf.ecInit.yoloObj) === null || _a === void 0 ? void 0 : _a.detectBitmap(bitmap);
            if (bitmap) {
                image.recycle(bitmap);
            }
            if (!result) {
                return false;
            }
            Debug_1.Debug.loggerW("yoloV8识别结果：", result);
            var resultJson = JSON.parse(result);
            for (var index_1 = 0, len = resultJson.length; index_1 < len; index_1++) {
                if (resultJson[index_1].name == "wwdx" && resultJson[index_1].confidence >= 0.7) {
                    return true;
                }
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
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
var Debug_1 = __webpack_require__(/*! ../../_base/Debug */ "./_base/Debug.ts");
var MiscConst_1 = __webpack_require__(/*! ./MiscConst */ "./pkg/misc/MiscConst.ts");
var CloseView = /** @class */ (function (_super) {
    __extends(CloseView, _super);
    function CloseView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloseView.prototype.exec = function () {
        var click = false;
        sleep(Const_1.sleepTime500);
        var result = true;
        for (var name in MiscConst_1.MiscColorData) {
            if (Object.prototype.hasOwnProperty.call(MiscConst_1.MiscColorData, name)) {
                var data = MiscConst_1.MiscColorData[name];
                var result_1 = ccf.ecRoot.cmpColor(data);
                Debug_1.Debug.loggerD("通用关闭界面比色结果：", result_1);
                if (result_1) {
                    click = true;
                    ccf.ecRoot.clickRandRect(data);
                    sleep(Const_1.sleepTime500);
                }
            }
        }
        for (var name in MiscConst_1.MiscImgData) {
            if (Object.prototype.hasOwnProperty.call(MiscConst_1.MiscImgData, name)) {
                var data = MiscConst_1.MiscImgData[name];
                result = ccf.ecRoot.findImgRandClick(data, !result);
                if (result) {
                    click = true;
                }
            }
        }
        if (click) {
            sleep(Const_1.sleepTime500);
            this.exec();
        }
        else {
            ccf.ecRoot.freeScreenshot();
            sleep(Const_1.sleepTime500);
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


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StroyColorData = exports.StoryTxtData = exports.StoryImgData = exports.MiscColorData = exports.MiscImgData = void 0;
/** 通用关闭按钮信息 */
exports.MiscImgData = (_a = {},
    _a["mian_fei_linqu2" /* CloseFileName.MianFeiLq2 */] = { moudleName: "misc" /* MoudleName.Misc */, name: "mian_fei_linqu2" /* CloseFileName.MianFeiLq2 */, rect: [437, 482, 578, 520] },
    _a["fu_huo" /* CloseFileName.FuHuo */] = { moudleName: "misc" /* MoudleName.Misc */, name: "fu_huo" /* CloseFileName.FuHuo */, rect: [661, 392, 804, 430] },
    _a["close1" /* CloseFileName.Close1 */] = { moudleName: "misc" /* MoudleName.Misc */, name: "close1" /* CloseFileName.Close1 */, rect: [843, 129, 884, 160] },
    _a["close2" /* CloseFileName.Close2 */] = { moudleName: "misc" /* MoudleName.Misc */, name: "close1" /* CloseFileName.Close1 */, rect: [1215, 52, 1257, 85] },
    _a["close3" /* CloseFileName.Close3 */] = { moudleName: "misc" /* MoudleName.Misc */, name: "close3" /* CloseFileName.Close3 */, rect: [858, 184, 890, 208] },
    _a["close4" /* CloseFileName.Close4 */] = { moudleName: "misc" /* MoudleName.Misc */, name: "close4" /* CloseFileName.Close4 */, rect: [1026, 128, 1060, 162] },
    _a["use1" /* CloseFileName.Use1 */] = { moudleName: "misc" /* MoudleName.Misc */, name: "use1" /* CloseFileName.Use1 */, rect: [805, 548, 936, 587] },
    _a["mian_fei_linqu1" /* CloseFileName.MianFeiLq */] = { moudleName: "misc" /* MoudleName.Misc */, name: "mian_fei_linqu1" /* CloseFileName.MianFeiLq */, rect: [433, 513, 578, 552] },
    _a["equip_to" /* CloseFileName.EquipTo */] = { moudleName: "misc" /* MoudleName.Misc */, name: "equip_to" /* CloseFileName.EquipTo */, rect: [808, 551, 933, 587] },
    _a);
exports.MiscColorData = {
    xianLing: { rect: [376, 121, 885, 383], clickRect: [329, 64, 377, 105], color: "387|132|#FFFE8B-#101010,390|135|#FEFA89-#101010,396|142|#FFFF86-#101010,388|147|#FFFE8D-#101010,405|150|#FCF160-#101010,412|157|#F9E845-#101010,400|150|#FFF464-#101010,404|143|#FCF36E-#101010,417|163|#EED93E-#101010,579|303|#D2BE91-#101010,823|299|#D3BF92-#101010,819|363|#B7986B-#101010,572|356|#BA9D6F-#101010,464|293|#E9BEAE-#101010" },
};
/** 通用剧情按钮信息 */
exports.StoryImgData = (_b = {},
    _b["story2" /* StoryFileName.Story2 */] = { moudleName: "misc" /* MoudleName.Misc */, name: "story2" /* StoryFileName.Story2 */, rect: [1152, 654, 1229, 711], isBin: true, clickRect: [490, 605, 861, 693] },
    _b);
/** 通用剧情文本信息 */
exports.StoryTxtData = {
    Story1: { txt: "对白回顾", rect: [40, 42, 139, 70], clickRect: [490, 605, 861, 693] }
};
/** 剧情颜色数据 */
exports.StroyColorData = {
    Story1: { rect: [29, 26, 175, 76], clickRect: [490, 605, 861, 693], color: "57|40|#CCB995-#101010,79|40|#C2B290-#101010,100|40|#C2B290-#101010,158|40|#BCA98A-#101010,55|50|#E5D6B2-#101010,59|50|#DDCFAC-#101010,60|52|#DCCFAC-#101010,58|57|#F3E8C2-#101010,58|59|#FAEFC8-#101010,55|62|#DFCFAC-#101010,60|61|#DED2AE-#101010,64|57|#DACDAA-#101010,63|52|#DDD0AC-#101010,68|52|#F6EBC4-#101010,68|49|#D7C8A6-#101010,68|59|#DACDAA-#101010,66|64|#EADEB9-#101010,79|49|#E3D6B3-#101010,79|51|#ECE1BC-#101010,74|51|#EBDEB9-#101010,74|57|#F5E9C3-#101010,74|63|#F7EBC5-#101010,86|63|#EEE3BE-#101010,86|57|#E9DEBA-#101010,86|51|#E0D4B2-#101010,92|50|#D7CBAA-#101010,105|50|#DED2B0-#101010,105|63|#E8DDB9-#101010,91|63|#DBCEAC-#101010,95|59|#E0D3B1-#101010,101|59|#E5D9B6-#101010,101|54|#D9CDAB-#101010,95|54|#D5C8A8-#101010,110|50|#CFC2A2-#101010,109|58|#BFB095-#101010,109|62|#D2C6A6-#101010,112|63|#F6ECC5-#101010,112|58|#DED0AF-#101010,112|53|#DFD4B2-#101010,117|64|#E3D6B3-#101010,120|61|#F3E8C2-#101010,124|64|#C7B99A-#101010,124|58|#BEAF93-#101010,123|53|#D4C6A5-#101010,118|53|#D7CAAA-#101010,120|52|#E7DAB6-#101010,120|49|#D0C0A0-#101010,123|49|#D0C0A0-#101010,144|52|#F4DEBD-#101010,145|55|#F4DEBD-#101010,144|60|#BEA785-#101010,147|59|#C9B58D-#101010,149|58|#D4BF95-#101010,150|57|#E3CC9F-#101010,150|56|#E9D2A8-#101010,149|55|#EAD4B5-#101010,147|54|#F4DEBD-#101010,147|55|#EBD5B6-#101010" },
    Story2: { rect: [941, 637, 1140, 666], clickRect: [836, 230, 1142, 675], color: "955|644|#EEF2E8-#101010,955|650|#E9EDE4-#101010,949|650|#F6F8F3-#101010,949|655|#FDFEFD-#101010,962|655|#EDF1E8-#101010,962|650|#E7ECDF-#101010,947|660|#ECF1E7-#101010,953|660|#EEF1EB-#101010,958|660|#EBEEE7-#101010,963|660|#EFF1EC-#101010,975|644|#E9F0E1-#101010,975|652|#FDFEFC-#101010,975|660|#FAFBF8-#101010,969|647|#F2F6ED-#101010,982|647|#F1F6ED-#101010,968|652|#F2F6ED-#101010,983|652|#F1F5ED-#101010,968|657|#E2EBD6-#101010,969|660|#F2F4EF-#101010,982|660|#F5F8F2-#101010,982|656|#EFF4EA-#101010,990|646|#F0F5E9-#101010,987|652|#EAF0E3-#101010,989|659|#E4EBDC-#101010,995|645|#E0ECD1-#101010,1003|645|#F2F5ED-#101010,998|646|#ECEFE8-#101010,998|653|#F7F8F5-#101010,998|660|#FAFBF8-#101010,994|660|#EFF4E9-#101010,1003|660|#EFF4E9-#101010,1089|645|#E6EDDE-#101010,1088|650|#EEF0EC-#101010,1087|655|#FDFDFC-#101010,1090|655|#E1E8DA-#101010,1089|659|#F0F5EC-#101010,1090|659|#F2F6EF-#101010,1099|646|#F3F5F1-#101010,1097|649|#F4F6F0-#101010,1102|660|#E7EAE4-#101010,1099|656|#F4F7F1-#101010,1098|658|#F9FAF9-#101010,1093|661|#E8EFE2-#101010,1037|653|#FAFBF9-#101010,1021|653|#EFF2EB-#101010,1011|646|#E6EBE2-#101010,1017|661|#F1F4ED-#101010,1040|645|#F3F7EF-#101010,1041|657|#FAFBF9-#101010,1119|650|#F7F7DF-#101010,1123|655|#FCF9EF-#101010,1126|658|#F9F9F6-#101010,1128|656|#F7F7F6-#101010,1132|653|#FCFBF3-#101010,1132|650|#F6F1D7-#101010,1124|647|#D0C89F-#101010,1130|647|#CFC89D-#101010,1126|653|#FFFBE3-#101010" },
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
var Debug_1 = __webpack_require__(/*! ../../_base/Debug */ "./_base/Debug.ts");
var MiscConst_1 = __webpack_require__(/*! ./MiscConst */ "./pkg/misc/MiscConst.ts");
var StoryView = /** @class */ (function (_super) {
    __extends(StoryView, _super);
    function StoryView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StoryView.prototype.exec = function () {
        sleep(Const_1.sleepTime500);
        var click = false;
        // for (const name in StoryTxtData) {
        //     if (Object.prototype.hasOwnProperty.call(StoryTxtData, name)) {
        //         const data = StoryTxtData[name];
        //         let txt = ccf.ecRoot.getOcrTxt(...data.rect)
        //         if (txt == data.txt) {
        //             ccf.ecRoot.clickRandRect(data)
        //             click = true;
        //             sleep(sleepTime500);
        //         }
        //     }
        // }
        // for (const name in StoryImgData) {
        //     if (Object.prototype.hasOwnProperty.call(StoryImgData, name)) {
        //         const data = StoryImgData[name];
        //         let isClick = ccf.ecRoot.findImgRandClick(data, true)
        //         if (isClick) {
        //             click = true;
        //             ccf.ecRoot.freeScreenshot();
        //         }
        //     }
        // }
        for (var name in MiscConst_1.StroyColorData) {
            if (Object.prototype.hasOwnProperty.call(MiscConst_1.StroyColorData, name)) {
                var data = MiscConst_1.StroyColorData[name];
                var result = ccf.ecRoot.cmpColor(data, null, true);
                Debug_1.Debug.loggerD("剧情比色结果：", result);
                if (result) {
                    click = true;
                    ccf.ecRoot.clickRandRect(data);
                    ccf.ecRoot.freeScreenshot();
                    sleep(Const_1.sleepTime500);
                }
            }
        }
        ccf.ecRoot.freeScreenshot();
        if (click) {
            this.exec();
        }
        else {
            sleep(Const_1.sleepTime500);
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
        if (!ccf.ecInit.isScreenInit || !ccf.ecInit.isOpenCVInit || !ccf.ecInit.isYoloInit) {
            return;
        }
        Debug_1.Debug.loggerD("开始运行");
        this.loopExec();
    };
    Main.prototype.loopExec = function () {
        while (ccf.ecInit.isLoop) {
            if (!ccf.mainTask.isMainStop) {
                ccf.mainTask.exec();
            }
            else {
                ccf.branch.exec();
            }
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