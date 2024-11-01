import Adapt from "../../_base/Adapt";
import { BaseClass } from "../../_base/BaseClass";
import { EcInit } from "../../_base/EcInit";
import { EcRoot } from "../../_base/EcRoot";
import { Temp } from "../../_base/Temp";
import { BranchTask } from "../daily/BranchTask";
import { FaBaoView } from "../daily/FaBaoView";
import { MainTask } from "../daily/MainTask";
import { CloseView } from "../misc/CloseView";
import { StoryView } from "../misc/StoryView";
import { GameRoot } from "./GameRoot";
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
        ccf.branch = BranchTask.getIns();
        ccf.closeView = CloseView.getIns();
        ccf.story = StoryView.getIns();
        ccf.fabao = FaBaoView.getIns();
    }
}