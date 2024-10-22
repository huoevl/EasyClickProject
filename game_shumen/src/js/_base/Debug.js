"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
