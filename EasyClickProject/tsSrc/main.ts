import { sleepTime2000 } from "./_base/Const";
import { Debug } from "./_base/Debug";
import { CCF } from "./pkg/_base/CCFClass";

export class Main {
    constructor() {
        let itself = this;
        itself.exec();
    }
    exec() {
        if (!ccf.ecInit.isScreenInit || !ccf.ecInit.isOpenCVInit) {
            return;
        }
        Debug.loggerD("开始运行")
        this.loopExec();
    }
    loopExec() {
        while (ccf.ecInit.isLoop) {
            ccf.mainTask.exec();
            sleep(sleepTime2000);
        }
    }
}
CCF.getIns();
new Main();