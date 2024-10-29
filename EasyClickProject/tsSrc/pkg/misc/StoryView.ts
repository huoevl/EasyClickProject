import { BaseClass } from "../../_base/BaseClass";
import { sleepTime500 } from "../../_base/Const";
import { Debug } from "../../_base/Debug";
import { StroyColorData } from "./MiscConst";

declare global {
    interface IModuleMap {
        story: StoryView
    }
}
export class StoryView extends BaseClass {
    exec() {
        sleep(sleepTime500);
        let click = false;
        // for (const name in StoryTxtData) {
        //     if (Object.prototype.hasOwnProperty.call(StoryTxtData, name)) {
        //         const data = StoryTxtData[name];
        //         let txt = ccf.ecRoot.getOcrTxt(...data.rect)
        //         if (txt == data.txt) {
        //             ccf.ecRoot.clickRandRect(data)
        //             click = true;
        //             sleep(sleepTime500);
        //         }
        //     }
        // }
        // for (const name in StoryImgData) {
        //     if (Object.prototype.hasOwnProperty.call(StoryImgData, name)) {
        //         const data = StoryImgData[name];
        //         let isClick = ccf.ecRoot.findImgRandClick(data, true)
        //         if (isClick) {
        //             click = true;
        //             ccf.ecRoot.freeScreenshot();
        //         }
        //     }
        // }
        for (const name in StroyColorData) {
            if (Object.prototype.hasOwnProperty.call(StroyColorData, name)) {
                const data = StroyColorData[name];
                let result = ccf.ecRoot.cmpColor(data)
                Debug.loggerD("剧情比色结果：", result)
                if (result) {
                    click = true;
                    ccf.ecRoot.clickRandRect(data);
                    sleep(sleepTime500);
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