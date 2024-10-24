import { IFindImgData } from "../../_base/Const";

export const enum CloseFileName {
    Close1 = "close1",
    Use1 = "use1",
}
/** 通用关闭按钮信息 */
export const MiscImgData: { [name: string]: IFindImgData } = {
    [CloseFileName.Close1]: { name: CloseFileName.Close1, x: 825, y: 116, width: 73, height: 64 },
    [CloseFileName.Use1]: { name: CloseFileName.Use1, x: 844, y: 554, width: 53, height: 30 }
}