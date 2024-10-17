let screenshot: any;

/**
 * 寻图并随机范围点击
 * @param moduleName
 * @param name
 * @param x
 * @param y
 * @param width
 * @param height
 * @param isUseLast
 * @returns {boolean}
 */
function findImgRandClick(moduleName: string, name: string, x: number, y: number, width: number, height: number, isUseLast?: boolean): boolean {
    let url = moduleName + "/" + name + ".png";
    logd(url);
    let img = readResAutoImage(url);
    let result = false;
    screenshot = screenshot || image.captureFullScreen();
    if (screenshot != null) {
        let xy = getXy(x, y)
        let points = image.findImage(screenshot, img, xy.x, xy.y, width, height, 0.7, 0.9, 1, 5);
        if (points && points.length) {
            sleep(sleepTime100);
            let rect = getPointsRectTemp(points);
            if (rect) {
                loggerE("寻图成功！" + name + "点击");
                clickRandomRect(rect)
                result = true;
            }
        } else {
            loggerE("寻图失败！" + name);
            sleep(sleepTime100);
        }
    }
    if (!isUseLast && screenshot) {
        image.recycle(screenshot);
        screenshot = null;
    }
    image.recycle(img);
    return result;
}