import { BaseClass } from "../../_base/BaseClass";
import { sleepTime500 } from "../../_base/Const";
import { Debug } from "../../_base/Debug";
import { FabaoColorData, FabaoColorName, FabaoFileName, FabaoImgData, FabaoPointData } from "./MainConst";
declare global {
    interface IModuleMap {
        fabao: FaBaoView
    }
}
export class FaBaoView extends BaseClass {
    exec() {

    }
    /** 点击修炼 */
    doUp() {
        Debug.loggerD("执行法宝修炼")
        sleep(sleepTime500)
        ccf.ecRoot.clickRandRect({ rect: [...FabaoPointData.TabXiulian] });
        sleep(sleepTime500)
        ccf.ecRoot.clickRandRect({ rect: [...FabaoPointData.btnXiulian] });
    }
    /** 是否法宝界面 */
    isFabaoView() {
        const data = FabaoImgData[FabaoFileName.FabaoHome];
        const result = ccf.ecRoot.findImgRandClick(data);
        Debug.loggerD("是否在法宝界面", result)
        return result;
    }
    /** 是否可升级 */
    isCanUp() {
        let result = false;
        const img = ccf.ecRoot.getFullScreen();
        let firstColor = "#F00301-#101010"
        const result2 = image.findColor(img, firstColor, 0.9, ...FabaoPointData.canUpAttr, 1, 1);
        if (!result2) {
            result = !!ccf.ecRoot.cmpColor(FabaoColorData[FabaoColorName.Red]);
        }
        Debug.loggerD("法宝是否可升级：", result)
        ccf.ecRoot.freeScreenshot();
        return result;
    }
}