import { sleepTime2000 } from "./_base/Const";
import { Debug } from "./_base/Debug";
import { CCF } from "./pkg/_base/CCFClass";

export class Main {
    constructor() {
        let itself = this;
        itself.exec();
    }
    exec() {
        if (!ccf.ecInit.isScreenInit || !ccf.ecInit.isOpenCVInit || !ccf.ecInit.isYoloInit) {
            return;
        }
        Debug.loggerD("开始运行")
        this.loopExec();
    }
    loopExec() {
        while (ccf.ecInit.isLoop) {
            if (ccf.confg.mainTask) {
                ccf.mainTask.checkState();
                if (!ccf.mainTask.isMainStop) {
                    ccf.mainTask.exec();
                } else {
                    ccf.branch.exec();
                }
                sleep(sleepTime2000);
            }
            if (ccf.confg.isExecRed) {
                ccf.home.execRed();
                sleep(sleepTime2000);
            }
        }
    }
}
CCF.getIns();
new Main();