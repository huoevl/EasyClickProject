import { BaseClass } from "../../_base/BaseClass";
import { sleepTime500 } from "../../_base/Const";
import { Debug } from "../../_base/Debug";
import { RedPoints, YoloV8Txt } from "../_base/GameConst";
declare global {
    interface IModuleMap {
        /** 邮件 */
        mail: MailView
    }
}
export class MailView extends BaseClass {
    execRed() {
        Debug.loggerD("执行邮件红点..")
        if (!this.isExecRed) {
            Debug.loggerD("执行邮件红点..1")
            return;
        }
        if (!ccf.gameRoot.isYoloV8Result(YoloV8Txt.红点, RedPoints.Mail)) {
            Debug.loggerD("执行邮件红点..2")
            return;
        }
        ccf.ecRoot.clickRandRect({ rect: [59, 655, 180, 689] });//领取邮件
        sleep(sleepTime500);
    }
}