import { BaseClass } from "../../_base/BaseClass";
declare global {
    interface IModuleMap {
        /** 主线 */
        mainTask: MainTask
    }
}
export class MainTask extends BaseClass {
    exec() {
        ccf.gameRoot.isStand();
    }
}