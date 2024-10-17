"use strict";
function isHasCloseView() {
    var len = MiscImgData.length;
    var click = false;
    for (var index_1 = 0; index_1 < len; index_1++) {
        var data = MiscImgData[index_1];
        var isClick = findImgRandClick("misc", data[0], data[1], data[2], data[3], data[4], index_1 < len - 1);
        if (isClick) {
            click = true;
        }
    }
    if (click) {
        sleep(sleepTime100);
        isHasCloseView();
    }
}
