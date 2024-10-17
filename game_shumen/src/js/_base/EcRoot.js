"use strict";
var DebugImgPath = "/sdcard/001debug/";
/**
 * 获取实际xy坐标
 * @param x
 * @param y
 * @returns {{x, y}}
 */
function getXy(x, y) {
    return { x: x, y: y };
}
function saveToDebug(img, name) {
    var url = DebugImgPath + name + ".png";
    var result = image.saveTo(img, url);
    if (result) {
        loggerD("保存截图成功：" + url);
    }
    else {
        loggerD("保存截图失败：" + result);
    }
}
function loggerD(msg) {
    logd(msg);
}
function loggerE(msg) {
    loge(msg);
}
