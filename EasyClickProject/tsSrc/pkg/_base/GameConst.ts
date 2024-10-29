import { IFindColorData, IFindImgData } from "../../_base/Const";
import { MoudleName } from "./PkgConst";

/** 一些坐标 */
export const SomePoints = {
    /** 人物头像截图 */
    PlayerHead: [51, 46, 75, 67],
    /** 人物头像寻图范围 */
    PlayerHeadFind: [28, 21, 100, 85],
    /** 地图右上角坐标范围 */
    MapRightTop: [1150, 21, 1225, 36],
} as const

export const enum BaseFileName {
    TxtAuto = "txt_auto",
}
/** 通用按钮信息 */
export const BaseImgData: { [name: string]: IFindImgData } = {
    [BaseFileName.TxtAuto]: { moudleName: MoudleName.Base, name: BaseFileName.TxtAuto, rect: [1150, 312, 1186, 331] },
}
/** 红点比色信息 */
export const RedColorStr = "83|108|#E31D01-#101010,83|101|#FF875A-#101010,88|100|#F7310D-#101010,91|104|#E81700-#101010,88|107|#E72D0B-#101010,82|107|#E41F03-#101010";

export const enum BaseColorName {
    /** 主界面左上角电量，判断是否在主界面 */
    Home = "home",
}
/** 通用比色信息 */
export const BaseColorData: { [name: string]: IFindColorData } = {
    [BaseColorName.Home]: { rect: [189, 6, 305, 28], color: "217|11|#FFFFFF-#101010,217|24|#FFFFFF-#101010,221|15|#FFFFFF-#101010,219|15|#FFFFFF-#101010,219|19|#FFFFFF-#101010,221|19|#FFFFFF-#101010,290|14|#EADB90-#101010,294|19|#D7BC5E-#101010,299|14|#E6CF8A-#101010,295|14|#E4D58E-#101010,195|18|#F0F1F2-#101010" },
}