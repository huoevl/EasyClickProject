import { IFindColorData, IFindImgData } from "../../_base/Const";
import { MoudleName } from "../_base/PkgConst";
export const enum DailyFileName {
    MainTask = "main_task",
    BranchTask = "branch_task",
}
/** 通用主线按钮信息 */
export const DailyImgData: { [name: string]: IFindImgData } = {
    [DailyFileName.MainTask]: { moudleName: MoudleName.Daily, name: DailyFileName.MainTask, rect: [48, 173, 235, 201] },
    [DailyFileName.BranchTask]: { moudleName: MoudleName.Daily, name: DailyFileName.BranchTask, rect: [49, 257, 231, 286] },
}

//法宝
export const enum FabaoFileName {
    FabaoHome = "fabao_home",
}
export const FabaoImgData: { [name: string]: IFindImgData } = {
    [FabaoFileName.FabaoHome]: { moudleName: MoudleName.Daily, name: FabaoFileName.FabaoHome, rect: [71, 27, 159, 71] },
}
export const enum FabaoColorName {
    Red = "red",
}
export const FabaoColorData: { [name: string]: IFindColorData } = {
    [FabaoColorName.Red]: { rect: [61, 90, 108, 123], color: "83|108|#E31D01-#101010,83|101|#FF875A-#101010,88|100|#F7310D-#101010,91|104|#E81700-#101010,88|107|#E72D0B-#101010,82|107|#E41F03-#101010" },

}
export const FabaoPointData = {
    TabXiulian: [12, 105, 93, 190],
    btnXiulian: [557, 630, 703, 662],
    canUpAttr: [476, 520, 785, 614],//修炼按钮上方区域
} as const
