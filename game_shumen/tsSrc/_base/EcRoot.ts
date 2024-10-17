const DebugImgPath = "/sdcard/001debug/";

/**
 * 获取实际xy坐标
 * @param x
 * @param y
 * @returns {{x, y}}
 */
function getXy(x: number, y: number) {
    return {x: x, y: y};
}

function saveToDebug(img: any, name: string) {
    let url = DebugImgPath + name + ".png";
    let result = image.saveTo(img, url);
    if (result) {
        loggerD("保存截图成功：" + url);
    } else {
        loggerD("保存截图失败：" + result);
    }
}

function loggerD(msg: string) {
    logd(msg);
}

function loggerE(msg: string) {
    loge(msg);
}