import { BaseClass } from "../../_base/BaseClass";
import { sleepTime100, sleepTime500 } from "../../_base/Const";
import { Debug } from "../../_base/Debug";
import { SomePoints } from "./GameConst";
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
    /**
    * 是否站立
    */
    isStand() {
        if (!this.headImg) {
            this.headImg = ccf.ecRoot.captureScreen(...SomePoints.PlayerHead);
            sleep(sleepTime100);
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
        let same = 0;
        for (let index = 0, len = colors1.length; index < len; index++) {
            if (colors1[index] === colors2[index]) {
                same++;
            }
        }
        const ratio = same / colors1.length;
        Debug.loggerW("比率：", ratio, colors1.length, colors2.length, same, colors1.length - same)
        return ratio >= 0.97;
    }
}