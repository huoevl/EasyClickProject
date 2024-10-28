import { BaseClass } from "../../_base/BaseClass";
import { sleepTime2000 } from "../../_base/Const";
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
        ccf.closeView.exec();
        const isStand = ccf.gameRoot.isStand();
        if (!isStand) {
            Debug.loggerD("行走中...")
            sleep(sleepTime2000);
            return;
        }
        Debug.loggerD("站立中...")
        ccf.ecRoot.findImgRandClick(DailyImgData[DailyFileName.MainTask]);
    }
}