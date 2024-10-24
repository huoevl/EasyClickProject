import { BaseClass } from "./BaseClass";
import { IFindImgData, sleepTime100 } from "./Const";
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
     * 寻图并随机范围点击
     * @param moduleName 
     * @param data 
     * @param isUseLast 是否使用上一次截图
     * @returns 
     */
    findImgRandClick(moduleName: string, data: IFindImgData, isUseLast?: boolean): boolean {
        if (moduleName != this.lastMdName) {
            this.lastMdName = moduleName;
            this.freeScreenshot();
        }
        let url = moduleName + "/" + data.name + ".png";
        logd(url);
        let img = readResAutoImage(url);
        let result = false;
        this.screenshot = this.screenshot || image.captureFullScreen();
        if (this.screenshot != null) {
            let xy = ccf.adpat.getXy(data.x, data.y)
            let points = image.findImage(this.screenshot, img, xy.x, xy.y, data.width, data.height, 0.7, 0.9, 1, 5);
            if (points && points.length) {
                sleep(sleepTime100);
                let rect = Utils.getPointsRectTemp(points);
                if (rect) {
                    Debug.loggerE("寻图成功！" + data.name + "点击");
                    clickRandomRect(rect)
                    result = true;
                }
            } else {
                Debug.loggerE("寻图失败！" + data.name);
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
     * 释放截图
     */
    freeScreenshot() {
        if (this.screenshot) {
            image.recycle(this.screenshot);
            this.screenshot = null;
        }
    }
}


