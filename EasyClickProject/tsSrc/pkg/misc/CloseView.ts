import { BaseClass } from "../../_base/BaseClass";
import { sleepTime500 } from "../../_base/Const";
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
        sleep(sleepTime500);
        let result = false;
        for (const name in MiscImgData) {
            if (Object.prototype.hasOwnProperty.call(MiscImgData, name)) {
                const data = MiscImgData[name];
                result = ccf.ecRoot.findImgRandClick(data, !result)
                if (result) {
                    click = true;
                }
            }
        }
        if (click) {
            sleep(sleepTime500);
            this.exec();
        } else {
            ccf.ecRoot.freeScreenshot();
            sleep(sleepTime500);
        }
    }
}