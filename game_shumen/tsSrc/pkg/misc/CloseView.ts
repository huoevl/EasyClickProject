function isHasCloseView() {
    let len = MiscImgData.length;
    let click = false;
    for (let index = 0; index < len; index++) {
        let data = MiscImgData[index];
        let isClick = findImgRandClick("misc", data[0], data[1], data[2], data[3], data[4], index < len - 1)
        if (isClick) {
            click = true;
        }
    }
    if (click) {
        sleep(sleepTime100);
        isHasCloseView();
    }
}