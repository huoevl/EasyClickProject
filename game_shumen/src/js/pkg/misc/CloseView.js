function isHasCloseView() {
    let close1 = readResAutoImage("mics/close1.png");
    let screenshot = image.captureFullScreen();
    loggerD("screenshot", screenshot);
    if (screenshot != null) {
        let xy = getXy(853, 135)
        saveToDebug(screenshot, "截图")
        let points = image.findImage(screenshot, close1, xy.x, xy.y,  22,  23,0.7,0.9,21,5);
        loggerD(points);
        if (points && points.length) {
            loggerD("寻图成功")
        } else {
            loggerE("寻图失败！");
        }
        loggerD('执行结束');
        image.recycle(screenshot);
    }
    image.recycle(close1);
}