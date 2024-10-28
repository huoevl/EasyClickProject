import { BaseClass } from "../../_base/BaseClass";
import { sleepTime500 } from "../../_base/Const";
declare global {
    interface IModuleMap {
        /** 主入口类 */
        gameRoot: GameRoot
    }
}
export class GameRoot extends BaseClass {

    /**
    * 是否站立
    */
    isStand() {
        const colors1 = ccf.ecRoot.getScreenBitMapColors(1150, 21, 1225, 36, 120);
        sleep(sleepTime500);
        const colors2 = ccf.ecRoot.getScreenBitMapColors(1150, 21, 1225, 36, 120);
        let same = 0;
        for (let index = 0, len = colors1.length; index < len; index++) {
            if (colors1[index] === colors2[index]) {
                same++;
            }
        }
        return same / colors1.length >= 0.97;
    }
}