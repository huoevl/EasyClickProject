import { BaseClass } from "../../_base/BaseClass";
import { TRectPoint, sleepTime500 } from "../../_base/Const";
import { Debug } from "../../_base/Debug";
import { BaseColorData, BaseColorName, BaseFileName, BaseImgData, SomePoints } from "./GameConst";
declare global {
    interface IModuleMap {
        /** 主入口类 */
        gameRoot: GameRoot
    }
}
export class GameRoot extends BaseClass {
    headImg: AutoImage | undefined;
    onStop() {
        if (this.headImg) {
            image.recycle(this.headImg);
        }
    }
    isSameTxt() {

    }
    /** 是否在主界面 */
    isHome() {
        const result = ccf.ecRoot.cmpColor(BaseColorData[BaseColorName.Home]);
        Debug.loggerD("是否在主界面：", result)
        return result;
    }
    /**
    * 是否站立
    */
    isStand() {
        if (!this.isHome()) {
            return true;
        }
        if (!this.headImg) {
            this.headImg = ccf.ecRoot.captureScreen(...SomePoints.PlayerHead);
            sleep(sleepTime500);
        }
        if (!this.headImg) {
            Debug.loggerE("没有头像")
            return true;
        }
        let screenshot = ccf.ecRoot.getFullScreen();
        const isFind = ccf.ecRoot.findImg(screenshot, this.headImg, ...SomePoints.PlayerHeadFind);
        if (!isFind) {
            Debug.loggerD("非主场景站立")
            ccf.ecRoot.freeScreenshot();
            return true;
        }
        ccf.ecRoot.freeScreenshot();
        const colors1 = ccf.ecRoot.getScreenBitMapColors(...SomePoints.MapRightTop, 150);
        sleep(sleepTime500);
        const colors2 = ccf.ecRoot.getScreenBitMapColors(...SomePoints.MapRightTop, 150);
        Debug.loggerD("判断是否站立")
        return ccf.ecRoot.isColorSame(colors1, colors2, 0.97);
    }
    /** 是否战斗中 */
    isFight() {
        const data = BaseImgData[BaseFileName.TxtAuto];
        let url = data.moudleName + "/" + data.name + ".png";
        const colors1 = ccf.ecRoot.getImageColors(url, 100);
        sleep(sleepTime500);
        const colors2 = ccf.ecRoot.getScreenBitMapColors(...data.rect, 120);
        Debug.loggerD("判断是否战斗")
        return ccf.ecRoot.isColorSame(colors1, colors2, 0.96);
    }
    /**
     * yolov8识别结果
     * @param name 需要识别的内容
     * @param rect 
     * @returns 
     */
    isYoloV8Result(name: string, rect?: TRectPoint) {
        let bitmap = rect ? image.captureScreenBitmap("png", ...rect, 100) : image.captureScreenBitmapEx();
        Debug.saveToDebug(bitmap, "yolov8", true);
        let result = ccf.ecInit.yoloObj?.detectBitmap(bitmap);
        if (bitmap) {
            image.recycle(bitmap);
        }
        if (!result) {
            return false;
        }
        Debug.loggerW("yoloV8识别结果：", result);
        let resultJson: IYoloV8Result[] = JSON.parse(result);
        for (let index = 0, len = resultJson.length; index < len; index++) {
            if (resultJson[index].name == name && resultJson[index].confidence >= 0.7) {
                return true;
            }
        }
        return false;
    }
}