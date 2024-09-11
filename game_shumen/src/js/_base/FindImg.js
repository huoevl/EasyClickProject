function findImg(module, name, x, y, width, height) {
    let img = readResAutoImage(`${module}/${name}.png`);
    let screenshot = image.captureFullScreen();
    loggerD("screenshot", screenshot);
    if (screenshot != null) {
        let xy = getXy(x, y)
        saveToDebug(screenshot, "截图")
        saveToDebug(img, "原图")
        let points = image.findImage(screenshot, img, xy.x, xy.y,  width,  height,0.7,0.9,1,5);
        loggerD(points);
        if (points && points.length) {
            loggerD("寻图成功")
        } else {
            loggerE("寻图失败！");
        }
        loggerD('执行结束');
        image.recycle(screenshot);
    }
    image.recycle(img);
}