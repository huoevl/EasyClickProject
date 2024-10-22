import { CCF } from "./_base/CCFClass";

export class Main {
    constructor() {
        let itself = this;
        itself.exec();
    }
    exec() {
        if (!ccf.root.isHasJietu) {
            return;
        }
        this.loopExec();
    }
    loopExec() {
        ccf.closeView.exec();
    }
}
CCF.getIns();
new Main();