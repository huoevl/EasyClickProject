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
    private isStan = false;
    private isInit = true;;
    exec(isBreak?: boolean) {
        if (!isBreak) {
            ccf.closeView.exec();
        }
        const isStand = ccf.gameRoot.isStand();
        if (!isStand) {
            Debug.loggerD("行走中...")
            this.isStan = false;
            sleep(sleepTime2000);
            this.exec(true)
            return;
        }
        Debug.loggerD("站立中...", this.isStan, this.isInit)
        if (!this.isStan || this.isInit) {
            this.isInit = false;
            Debug.loggerD("检查剧情...")
            ccf.story.exec();
        }
        this.isStan = true;
        ccf.ecRoot.findImgRandClick(DailyImgData[DailyFileName.MainTask]);
    }
}