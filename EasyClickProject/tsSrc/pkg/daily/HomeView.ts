import { BaseClass } from "../../_base/BaseClass";
import { RedPoints, YoloV8Txt } from "../_base/GameConst";

declare global {
    interface IModuleMap {
        /** 主界面 */
        home: HomeView
    }
}
export class HomeView extends BaseClass {
    /** 邮件红点 */
    isRedMail() {
        return ccf.gameRoot.isYoloV8Result(YoloV8Txt.红点, RedPoints.Mail);
    }
}