const DebugImgPath = "/sdcard/001debug/";

export class Debug {
    /**
     * 保存图片
     * @param img 
     * @param name 
     */
    static saveToDebug(img: any, name: string) {
        let url = DebugImgPath + name + ".png";
        let result = image.saveTo(img, url);
        if (result) {
            this.loggerD("保存截图成功：" + url);
        } else {
            this.loggerD("保存截图失败：" + result);
        }

    }

    static loggerD(...msg: string[]) {
        logd(msg.join("。"));
    }

    static loggerE(...msg: string[]) {
        loge(msg.join("。"));
    }
}