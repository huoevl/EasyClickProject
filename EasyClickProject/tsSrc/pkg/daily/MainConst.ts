import { IFindImgData } from "../../_base/Const";
import { MoudleName } from "../_base/PkgConst";
export const enum DailyFileName {
    MainTask = "main_task",
}
/** 通用关闭按钮信息 */
export const DailyImgData: { [name: string]: IFindImgData } = {
    [DailyFileName.MainTask]: { moudleName: MoudleName.Daily, name: DailyFileName.MainTask, rect: [48, 173, 235, 201] },
}