import { CCF } from "./_base/CCFClass";
import { Debug } from "./_base/Debug";

export class Main {
    constructor() {
        let itself = this;
        itself.exec();
    }
    exec() {
        if (!ccf.root.isHasJietu) {
            Debug.loggerD("截图失败？？？", String(ccf.root.isHasJietu))
            return;
        }
        Debug.loggerD("开始运行")
        this.loopExec();
    }
    loopExec() {
        ccf.closeView.exec();
    }
}
CCF.getIns();
ccf.root.exec();
new Main();