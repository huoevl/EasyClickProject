import { IFindImgData } from "../../_base/Const";
import { MoudleName } from "../_base/PkgConst";

const enum CloseFileName {
    Close1 = "close1",
    Use1 = "use1",
    MianFeiLq = "mian_fei_linqu1",
    MianFeiLq2 = "mian_fei_linqu2",
}
/** 通用关闭按钮信息 */
export const MiscImgData: { [name: string]: IFindImgData } = {
    [CloseFileName.MianFeiLq2]: { moudleName: MoudleName.Misc, name: CloseFileName.MianFeiLq2, rect: [437, 482, 578, 520] },
    [CloseFileName.Close1]: { moudleName: MoudleName.Misc, name: CloseFileName.Close1, rect: [843, 129, 884, 160] },
    [CloseFileName.Use1]: { moudleName: MoudleName.Misc, name: CloseFileName.Use1, rect: [805, 548, 936, 587] },
    [CloseFileName.MianFeiLq]: { moudleName: MoudleName.Misc, name: CloseFileName.MianFeiLq, rect: [433, 513, 578, 552] },
}