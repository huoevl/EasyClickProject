import { CCF } from "./_base/CCFClass";
import { Debug } from "./_base/Debug";

export class Main {
    constructor() {
        let itself = this;
        itself.exec();
    }
    exec() {
        if (!ccf.gameRoot.isCanJieTu) {
            return;
        }
        Debug.loggerD("开始运行")
        this.loopExec();
    }
    loopExec() {
        // ccf.closeView.exec();
        ccf.mainTask.exec();
    }
}
CCF.getIns();
new Main();