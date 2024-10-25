import { GameRoot } from "../pkg/_base/GameRoot";
import { MainTask } from "../pkg/daily/MainTask";
import { CloseView } from "../pkg/misc/CloseView";
import Adapt from "./Adapt";
import { BaseClass } from "./BaseClass";
import { EcRoot } from "./EcRoot";
declare global {
    interface IModuleMap {

    }
}
export class CCF extends BaseClass {
    init() {
        ccf.gameRoot = GameRoot.getIns();
        ccf.adpat = Adapt.getIns();
        ccf.ecRoot = EcRoot.getIns();

        ccf.mainTask = MainTask.getIns();
        ccf.closeView = CloseView.getIns();
    }
}