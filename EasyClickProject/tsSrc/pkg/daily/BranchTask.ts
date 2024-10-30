import { BaseClass } from "../../_base/BaseClass";
import { Debug } from "../../_base/Debug";
import { DailyFileName, DailyImgData } from "./MainConst";

declare global {
    interface IModuleMap {
        /** 支线任务 */
        branch: BranchTask
    }
}

export class BranchTask extends BaseClass {
    exec() {
        Debug.loggerD("执行支线")
        ccf.mainTask.checkState();
        ccf.ecRoot.findImgRandClick(DailyImgData[DailyFileName.BranchTask]);
    }
}