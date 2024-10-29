import { BaseClass } from "../../_base/BaseClass";
import { sleepTime500 } from "../../_base/Const";
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
        let screenshot = image.captureFullScreen();
        const isFind = ccf.ecRoot.isFindImg(screenshot, this.headImg, ...SomePoints.PlayerHeadFind);
        if (!isFind) {
            Debug.loggerD("非主场景站立")
            image.recycle(screenshot);
            return true;
        }
        image.recycle(screenshot);
        const colors1 = ccf.ecRoot.getScreenBitMapColors(...SomePoints.MapRightTop, 120);
        sleep(sleepTime500);
        const colors2 = ccf.ecRoot.getScreenBitMapColors(...SomePoints.MapRightTop, 120);
        Debug.loggerD("判断是否站立")
        return ccf.ecRoot.isColorSame(colors1, colors2, 0.97);
    }
    /** 是否战斗中 */
    isFight() {
        const data = BaseImgData[BaseFileName.TxtAuto];
        let url = data.moudleName + "/" + data.name + ".png";
        const colors1 = ccf.ecRoot.getImageColors(url, 100);
        sleep(sleepTime500);
        const colors2 = ccf.ecRoot.getScreenBitMapColors(...data.rect, 100);
        Debug.loggerD("判断是否战斗")
        return ccf.ecRoot.isColorSame(colors1, colors2, 0.96);
    }
}