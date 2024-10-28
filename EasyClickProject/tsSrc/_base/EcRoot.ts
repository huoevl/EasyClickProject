import { BaseClass } from "./BaseClass";
import { IFindImgData, IPoint2, rectTemp, sleepTime100 } from "./Const";
import { Debug } from "./Debug";
import { Utils } from "./Utils";

declare global {
    interface IModuleMap {
        /** ec整合类 */
        ecRoot: EcRoot
    }
}
export class EcRoot extends BaseClass {
    /** 上一次执行findImg的模块 */
    private lastMdName?: string;
    /** 截图缓存 */
    private screenshot: any;

    /**
     * @deprecated
     */
    exec() { }
    /**
     * 是否寻图成功
     * @param moduleName 
     * @param data 
     * @param isUseLast 是否使用上一次截图
     * @returns 
     */
    findImgRandClick(data: IFindImgData, isUseLast?: boolean): boolean {
        if (data.moudleName != this.lastMdName) {
            this.lastMdName = data.moudleName;
            this.freeScreenshot();
        }
        let url = data.moudleName + "/" + data.name + ".png";
        logd(url);
        let img = readResAutoImage(url);
        let result = false;
        this.screenshot = this.screenshot || image.captureFullScreen();
        if (this.screenshot != null) {
            let adpXy2 = ccf.adpat.getAdaptXy2(...data.rect)
            let rests = image.findImage(this.screenshot, img, adpXy2.x, adpXy2.y, adpXy2.x1, adpXy2.y1, 0.7, 0.9, 1, 5);
            if (rests && rests.length) {
                sleep(sleepTime100);
                let rect = Utils.getRectByArray(rests);
                if (rect) {
                    Debug.loggerD("寻图成功！" + data.name + "点击");
                    this.clickRand(adpXy2)
                    result = true;
                }
            } else {
                Debug.loggerW(JSON.stringify(adpXy2))
                Debug.loggerW("寻图失败！" + data.name);
                sleep(sleepTime100);
            }
        }
        if (!isUseLast) {
            this.freeScreenshot();
        }
        image.recycle(img);
        return result;
    }
    /**
     * 随机点击
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     */
    clickRand(point2: IPoint2) {
        rectTemp.left = point2.x;
        rectTemp.top = point2.y;
        rectTemp.right = point2.x1;
        rectTemp.bottom = point2.y1;
        clickRandomRect(rectTemp);
    }
    /**
     * 释放截图
     */
    freeScreenshot() {
        if (this.screenshot) {
            image.recycle(this.screenshot);
            this.screenshot = null;
        }
    }

    /**
     * 获取文字识别文本
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     */
    getOcrTxt(x: number, y: number, x1: number, y1: number) {
        if (!ccf.ecInit.isOcrInit) {
            return "";
        }
        let tempbitmap = image.captureScreenBitmap("png", x, y, x1, y1, 100);
        const tempbitmapEZ = image.binaryzationBitmap(tempbitmap, 1, 120);
        Debug.saveToDebug(tempbitmapEZ, "文字识别截图", true)
        let result = ccf.ecInit.ocrObj?.ocrBitmap(tempbitmapEZ, 10000, {}) || [];
        let label = "";
        Debug.loggerD("文字识别结果：", JSON.stringify(result))
        for (var i = 0; i < result.length; i++) {
            var value = result[i];
            if (value.confidence! > 50) {
                label = value.label || "";
                break;
            }
        }
        image.recycle(tempbitmap);
        image.recycle(tempbitmapEZ);
        return label;
    }
    /**
     * 获取屏幕bitmap颜色数组
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     * @param binaryNum 二值化数据，不传这不做二值化
     * @returns 
     */
    getScreenBitMapColors(x: number, y: number, x1: number, y1: number, binaryNum?: number) {
        let bitmap = image.captureScreenBitmap("png", x, y, x1, y1, 100);
        if (binaryNum) {
            bitmap = image.binaryzationBitmap(bitmap, 1, binaryNum);
        }
        let w = bitmap.getWidth();
        let h = bitmap.getHeight();
        let mPixels = image.getPixelsBitmap(bitmap, w * h, 0, w, 0, 0, w, h);
        //图片要回收
        image.recycle(bitmap);
        return mPixels;
    }
}


