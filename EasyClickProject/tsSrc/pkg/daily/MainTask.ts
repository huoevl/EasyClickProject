import { BaseClass } from "../../_base/BaseClass";
import { sleepTime3000 } from "../../_base/Const";
import { Debug } from "../../_base/Debug";
import { DailyFileName, DailyImgData } from "./MainConst";
declare global {
    interface IModuleMap {
        /** 主线 */
        mainTask: MainTask
    }
}
export class MainTask extends BaseClass {

    exec() {
        Debug.loggerD("执行主线...")
        ccf.ecRoot.findImgRandClick(DailyImgData[DailyFileName.MainTask]);
    }
    checkState() {
        const isFight = ccf.gameRoot.isFight();
        if (isFight) {
            Debug.loggerD("战斗中...")
            sleep(sleepTime3000);
            this.checkState()
            return;
        }
        const isStand = ccf.gameRoot.isStand();
        if (!isStand) {
            Debug.loggerD("行走中...")
            sleep(sleepTime3000);
            this.checkState()
            return;
        }
        Debug.loggerD("站立中...")
        if (ccf.fabao.isFabaoView() && ccf.fabao.isCanUp()) {
            ccf.fabao.doUp();
        }
        ccf.story.exec();
        ccf.closeView.exec();
    }

    /** 主线是否不能继续 */
    get isMainStop() {
        Debug.loggerD("判断是否未完待续...")
        let bitmap = image.captureScreenBitmapEx();
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
            if (resultJson[index].name == "wwdx" && resultJson[index].confidence >= 0.7) {
                return true;
            }
        }
        return false;
    }
}