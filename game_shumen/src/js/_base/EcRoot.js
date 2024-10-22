"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcRoot = void 0;
var BaseClass_1 = require("./BaseClass");
var Debug_1 = require("./Debug");
var Utils_1 = require("./Utils");
var EcRoot = /** @class */ (function (_super) {
    __extends(EcRoot, _super);
    function EcRoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 寻图并随机范围点击
     * @param moduleName
     * @param name
     * @param x
     * @param y
     * @param width
     * @param height
     * @param isUseLast 是否使用上一次截图
     * @returns {boolean}
     */
    EcRoot.prototype.findImgRandClick = function (moduleName, data, isUseLast) {
        if (moduleName != this.lastMdName) {
            this.lastMdName = moduleName;
            this.freeScreenshot();
        }
        var url = moduleName + "/" + name + ".png";
        logd(url);
        var img = readResAutoImage(url);
        var result = false;
        this.screenshot = this.screenshot || image.captureFullScreen();
        if (this.screenshot != null) {
            var xy = ccf.adpat.getXy(data.x, data.y);
            var points = image.findImage(this.screenshot, img, xy.x, xy.y, data.width, data.height, 0.7, 0.9, 1, 5);
            if (points && points.length) {
                sleep(sleepTime100);
                var rect = Utils_1.Utils.getPointsRectTemp(points);
                if (rect) {
                    Debug_1.Debug.loggerE("寻图成功！" + name + "点击");
                    clickRandomRect(rect);
                    result = true;
                }
            }
            else {
                Debug_1.Debug.loggerE("寻图失败！" + name);
                sleep(sleepTime100);
            }
        }
        if (!isUseLast) {
            this.freeScreenshot();
        }
        image.recycle(img);
        return result;
    };
    EcRoot.prototype.freeScreenshot = function () {
        if (this.screenshot) {
            image.recycle(this.screenshot);
            this.screenshot = null;
        }
    };
    return EcRoot;
}(BaseClass_1.BaseClass));
exports.EcRoot = EcRoot;
