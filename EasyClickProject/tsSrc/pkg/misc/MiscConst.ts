import { IFindImgData, IFindTxtData } from "../../_base/Const";
import { MoudleName } from "../_base/PkgConst";

const enum CloseFileName {
    Close1 = "close1",
    Use1 = "use1",
    MianFeiLq = "mian_fei_linqu1",
    MianFeiLq2 = "mian_fei_linqu2",
    EquipTo = "equip_to",
    FuHuo = "fu_huo",
}
/** 通用关闭按钮信息 */
export const MiscImgData: { [name: string]: IFindImgData } = {
    [CloseFileName.MianFeiLq2]: { moudleName: MoudleName.Misc, name: CloseFileName.MianFeiLq2, rect: [437, 482, 578, 520] },
    [CloseFileName.FuHuo]: { moudleName: MoudleName.Misc, name: CloseFileName.FuHuo, rect: [661, 392, 804, 430] },
    [CloseFileName.Close1]: { moudleName: MoudleName.Misc, name: CloseFileName.Close1, rect: [843, 129, 884, 160] },
    [CloseFileName.Use1]: { moudleName: MoudleName.Misc, name: CloseFileName.Use1, rect: [805, 548, 936, 587] },
    [CloseFileName.MianFeiLq]: { moudleName: MoudleName.Misc, name: CloseFileName.MianFeiLq, rect: [433, 513, 578, 552] },
    [CloseFileName.EquipTo]: { moudleName: MoudleName.Misc, name: CloseFileName.EquipTo, rect: [808, 551, 933, 587] },
}

const enum StoryFileName {
    Story1 = "story1",
}
/** 通用剧情按钮信息 */
export const StoryImgData: { [name: string]: IFindImgData } = {
    // [StoryFileName.Story1]: { moudleName: MoudleName.Misc, name: StoryFileName.Story1, rect: [40, 42, 139, 70], isBin: true, clickRect: [490, 605, 861, 693] },
}
/** 通用剧情文本信息 */
export const StoryTxtData: { [name: string]: IFindTxtData } = {
    Stroy1: { txt: "对白回顾", rect: [40, 42, 139, 70], clickRect: [490, 605, 861, 693] }
}