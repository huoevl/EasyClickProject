import { Root } from "../pkg/Root";
import { Game } from "../pkg/_base/Game";
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
        ccf.root = Root.getIns();
        ccf.closeView = CloseView.getIns();
        ccf.adpat = Adapt.getIns();
        ccf.ecRoot = EcRoot.getIns();
        ccf.game = Game.getIns();
    }
}