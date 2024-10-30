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
        this.checkState();
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
}