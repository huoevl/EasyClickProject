import { BaseClass } from "../../_base/BaseClass";
import { sleepTime100 } from "../../_base/Const";
import { MiscImgData } from "./MiscConst";
declare global {
    interface IModuleMap {
        /** 通用关闭界面 */
        closeView: CloseView
    }
}
export class CloseView extends BaseClass {
    exec() {
        let click = false;

        for (const name in MiscImgData) {
            if (Object.prototype.hasOwnProperty.call(MiscImgData, name)) {
                const data = MiscImgData[name];
                let isClick = ccf.ecRoot.findImgRandClick("misc", data, true)
                if (isClick) {
                    click = true;
                    ccf.ecRoot.freeScreenshot();
                }
            }
        }
        if (click) {
            sleep(sleepTime100);
            this.exec();
        } else {
            ccf.ecRoot.freeScreenshot();
        }
    }
}