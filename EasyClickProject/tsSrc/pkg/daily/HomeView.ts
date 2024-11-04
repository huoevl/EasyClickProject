import { BaseClass } from "../../_base/BaseClass";

declare global {
    interface IModuleMap {
        /** 主界面 */
        home: HomeView
    }
}
export class HomeView extends BaseClass {
    execRed() {
        if (!ccf.gameRoot.isHome()) {
            return;
        }
        ccf.mail.execRed();
    }
}