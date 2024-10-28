import { BaseClass } from "../../_base/BaseClass";
import { sleepTime100 } from "../../_base/Const";
import { StoryImgData, StoryTxtData } from "./MiscConst";

declare global {
    interface IModuleMap {
        story: StoryView
    }
}
export class StoryView extends BaseClass {
    exec() {
        let click = false;
        for (const name in StoryTxtData) {
            if (Object.prototype.hasOwnProperty.call(StoryTxtData, name)) {
                const data = StoryTxtData[name];
                let txt = ccf.ecRoot.getOcrTxt(...data.rect)
                if (txt == data.txt) {
                    ccf.ecRoot.clickRand(data.clickRect ? ccf.adpat.getAdaptXy2(...data.clickRect) : ccf.adpat.getAdaptXy2(...data.rect))
                    click = true;
                    sleep(sleepTime100);
                }
            }
        }
        for (const name in StoryImgData) {
            if (Object.prototype.hasOwnProperty.call(StoryImgData, name)) {
                const data = StoryImgData[name];
                let isClick = ccf.ecRoot.findImgRandClick(data, true)
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