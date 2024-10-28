import { GameRoot } from "../pkg/_base/GameRoot";
import { MainTask } from "../pkg/daily/MainTask";
import { CloseView } from "../pkg/misc/CloseView";
import Adapt from "./Adapt";
import { BaseClass } from "./BaseClass";
import { EcInit } from "./EcInit";
import { EcRoot } from "./EcRoot";
import { Temp } from "./Temp";
declare global {
    interface IModuleMap {

    }
}
export class CCF extends BaseClass {
    init() {
        ccf.temp = Temp.getIns();
        ccf.adpat = Adapt.getIns();
        ccf.ecInit = EcInit.getIns();
        ccf.ecRoot = EcRoot.getIns();

        ccf.gameRoot = GameRoot.getIns();
        ccf.mainTask = MainTask.getIns();
        ccf.closeView = CloseView.getIns();
    }
}