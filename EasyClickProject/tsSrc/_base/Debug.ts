import { Environment } from "./Const";

const DebugImgPath = "/sdcard/001debug/";

export class Debug {
    /**
     * 保存图片
     * @param img 
     * @param name 
     */
    static saveToDebug(img: any, name: string, isBitmap?: boolean) {
        if (ccf.adpat.currEnv !== Environment.dev) {
            return;
        }
        let url = DebugImgPath + name + ".png";
        let result = false;
        if (isBitmap) {
            result = image.saveBitmap(img, "png", 100, url);
        } else {
            result = image.saveTo(img, url);
        }
        if (result) {
            this.loggerD("保存截图成功：" + url);
        } else {
            this.loggerD("保存截图失败：" + result);
        }

    }

    static loggerD(...msg: (string | number | boolean | undefined)[]) {
        if (ccf.adpat.currEnv !== Environment.dev) {
            return;
        }
        logd(msg.join("，"));
    }
    static loggerW(...msg: (string | number | boolean | undefined)[]) {
        if (ccf.adpat.currEnv !== Environment.dev) {
            return;
        }
        logw(msg.join("，"));
    }
    static loggerE(...msg: (string | number | boolean | undefined)[]) {
        loge(msg.join("，"));
    }
}