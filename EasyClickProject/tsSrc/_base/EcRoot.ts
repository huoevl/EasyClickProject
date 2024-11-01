import { BaseClass } from "./BaseClass";
import { IFindColorData, IFindData, IFindImgData, IPoint2, rectTemp, sleepTime100, sleepTime500 } from "./Const";
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
    findImg(big: AutoImage | null, min: AutoImage, x: number, y: number, x1: number, y1: number) {
        if (!big || !min) {
            return false;
        }
        let adpXy2 = ccf.adpat.getAdaptXy2(x, y, x1, y1);
        let rests = image.findImage(big, min, adpXy2.x, adpXy2.y, adpXy2.x1, adpXy2.y1, 0.7, 0.9, 1, 5);
        if (rests && rests.length) {
            sleep(sleepTime500);
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
    findImgRandClick(data: IFindImgData, isUseLast?: boolean, isNotClick?: boolean): boolean {
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
        this.screenshot = this.screenshot || this.getFullScreen();
        if (data.isBin) {
            let temp = this.screenshot;
            this.screenshot = image.binaryzation(this.screenshot, 0, 100)
            image.recycle(temp);
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
                let rect = Utils.getRectByArray(rests);
                if (rect) {
                    Debug.loggerD("寻图成功！" + data.name + "点击");
                    result = true;
                    if (!isNotClick) {
                        sleep(sleepTime500);
                        this.clickRandRect(data);
                    } else {
                        sleep(sleepTime100)
                    }
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
     * @param data 
     */
    clickRandRect(data: IFindData) {
        let point: IPoint2;
        if (data.clickRect) {
            point = ccf.adpat.getAdaptXy2(...data.clickRect)
        } else {
            point = ccf.adpat.getAdaptXy2(...data.rect)
        };
        this.clickRand(point);
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
     * 获取图片autoimage颜色数组
     * @param imgOrUrl 
     * @param binaryNum 
     */
    getImageColors(imgOrUrl: AutoImage | string | null, binaryNum?: number): number[] {
        if (!imgOrUrl) {
            return [];
        }
        let img: AutoImage | null;
        let bitMap: any;
        if (typeof imgOrUrl == "string") {
            img = readResAutoImage(imgOrUrl);
        } else {
            img = imgOrUrl;
        }
        if (!img) {
            return []
        }
        bitMap = image.imageToBitmap(img);
        const color = this.getBitmapColors(bitMap, binaryNum);
        image.recycle(img);
        image.recycle(bitMap);
        return color;
    }
    /**
     * 获取bitmap颜色数组
     * @param bitmap 
     * @param binaryNum 
     * @returns 
     */
    getBitmapColors(bitmap: any, binaryNum?: number): number[] {
        if (binaryNum) {
            let temp = bitmap;
            bitmap = image.binaryzationBitmap(temp, 1, binaryNum);
            image.recycle(temp);
        }
        let w = bitmap.getWidth();
        let h = bitmap.getHeight();
        let mPixels = image.getPixelsBitmap(bitmap, w * h, 0, w, 0, 0, w, h);
        return mPixels;
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
        const color = this.getBitmapColors(bitmap, binaryNum);
        image.recycle(bitmap);
        return color;
    }
    /**
     * 比较两个图片颜色是否相等，比率大于ratio及相等
     * @param colors1 
     * @param colors2 
     * @param ratio 
     */
    isColorSame(colors1: number[], colors2: number[], ratio: number) {
        if (!colors1 || !colors2) {
            return false;
        }
        let same = 0;
        for (let index = 0, len = colors1.length; index < len; index++) {
            if (colors1[index] === colors2[index]) {
                same++;
            }
        }
        Debug.loggerW("比率：", same / colors1.length, colors1.length, colors2.length, same, colors1.length - same)
        return same / colors1.length > ratio;
    }
    /** 截图比色 */
    cmpColor(data: IFindColorData, img?: AutoImage | null, isSaveImg?: boolean) {
        img = img || this.getFullScreen();
        if (img != null) {
            let points = image.cmpColor(img, data.color, 0.9, ...data.rect);
            //图片要回收
            if (!isSaveImg) {
                this.freeScreenshot();
            }
            return points;
        }
        return false;
    }
    /**
     * 获取全屏截图
     * @returns 
     */
    getFullScreen() {
        if (!this.screenshot) {
            this.screenshot = image.captureFullScreen();
        }
        return this.screenshot;
    }
}


