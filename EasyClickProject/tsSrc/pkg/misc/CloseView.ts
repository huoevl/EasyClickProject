import { BaseClass } from "../../_base/BaseClass";
import { sleepTime500 } from "../../_base/Const";
import { Debug } from "../../_base/Debug";
import { MiscColorData, MiscImgData } from "./MiscConst";
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
        let result = true;
        for (const name in MiscColorData) {
            if (Object.prototype.hasOwnProperty.call(MiscColorData, name)) {
                const data = MiscColorData[name];
                let result = ccf.ecRoot.cmpColor(data)
                Debug.loggerD("通用关闭界面比色结果：", result)
                if (result) {
                    click = true;
                    ccf.ecRoot.clickRandRect(data);
                    sleep(sleepTime500);
                }
            }
        }
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