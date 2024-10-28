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
    private screenshot: AutoImage | undefined | null;
    /** 截图是否是二值化 */
    private lastIsBin: boolean | undefined;

    /**
     * @deprecated
     */
    exec() { }
    /**
     * 范围截图
     */
    captureScreen(x: number, y: number, x1: number, y1: number) {
        let point = ccf.adpat.getAdaptXy2(x, y, x1, y1);
        return image.captureScreen(2, point.x, point.y, point.x1, point.y1);
    }
    /**
     * 是否寻图成功
     * @param big 大图
     * @param min 小图
     */
    isFindImg(big: AutoImage | null, min: AutoImage, x: number, y: number, x1: number, y1: number) {
        if (!big || !min) {
            return false;
        }
        let adpXy2 = ccf.adpat.getAdaptXy2(x, y, x1, y1);
        let rests = image.findImage(big, min, adpXy2.x, adpXy2.y, adpXy2.x1, adpXy2.y1, 0.7, 0.9, 1, 5);
        if (rests && rests.length) {
            sleep(sleepTime100);
            let rect = Utils.getRectByArray(rests);
            if (rect) {
                return true
            }
        }
        return false;
    }
    /**
     * 找图并点击
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
        if (!!data.isBin != !!this.lastIsBin) {
            this.freeScreenshot();
            this.lastIsBin = data.isBin;
        }
        let url = data.moudleName + "/" + data.name + ".png";
        logd(url);
        let img = readResAutoImage(url);
        let result = false;
        this.screenshot = this.screenshot || image.captureFullScreen();
        if (data.isBin) {
            this.screenshot = image.binaryzation(this.screenshot, 0, 100)
        }
        if (this.screenshot != null) {
            let adpXy2 = ccf.adpat.getAdaptXy2(...data.rect)
            let rests = image.findImage(this.screenshot, img, adpXy2.x, adpXy2.y, adpXy2.x1, adpXy2.y1, 0.7, 0.9, 1, 5);
            if (data.isBin) {
                Debug.loggerW("二值化", JSON.stringify(rests))
                Debug.saveToDebug(this.screenshot, "测试截图")
                Debug.saveToDebug(img, "测试截图2")
            }
            if (rests && rests.length) {
                sleep(sleepTime100);
                let rect = Utils.getRectByArray(rests);
                if (rect) {
                    Debug.loggerD("寻图成功！" + data.name + "点击");
                    this.clickRand(data.clickRect ? ccf.adpat.getAdaptXy2(...data.clickRect) : adpXy2)
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
     * 获取文字识别文本（准确率不高，最好不用）
     * @deprecated
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     */
    getOcrTxt(x: number, y: number, x1: number, y1: number) {
        if (!ccf.ecInit.isOcrInit) {
            return "";
        }
        let adpXy2 = ccf.adpat.getAdaptXy2(x, y, x1, y1);
        let tempbitmap = image.captureScreenBitmap("png", adpXy2.x, adpXy2.y, adpXy2.x1, adpXy2.y1, 100);
        const tempbitmapEZ = image.binaryzationBitmap(tempbitmap, 1, 120);
        Debug.saveToDebug(tempbitmapEZ, "文字识别截图", true)
        let result = ccf.ecInit.ocrObj?.ocrBitmap(tempbitmapEZ, 10000, {}) || [];
        let label = "";
        Debug.loggerD("文字识别结果：", JSON.stringify(result))
        for (var i = 0; i < result.length; i++) {
            var value = result[i];
            if (value.confidence! > 90) {
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
        let adpXy2 = ccf.adpat.getAdaptXy2(x, y, x1, y1);
        let bitmap = image.captureScreenBitmap("png", adpXy2.x, adpXy2.y, adpXy2.x1, adpXy2.y1, 100);
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


