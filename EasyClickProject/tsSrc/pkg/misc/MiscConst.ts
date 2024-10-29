import { IFindColorData, IFindImgData, IFindTxtData } from "../../_base/Const";
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
    Story2 = "story2",
}
/** 通用剧情按钮信息 */
export const StoryImgData: { [name: string]: IFindImgData } = {
    [StoryFileName.Story2]: { moudleName: MoudleName.Misc, name: StoryFileName.Story2, rect: [1152, 654, 1229, 711], isBin: true, clickRect: [490, 605, 861, 693] },
}
/** 通用剧情文本信息 */
export const StoryTxtData: { [name: string]: IFindTxtData } = {
    Story1: { txt: "对白回顾", rect: [40, 42, 139, 70], clickRect: [490, 605, 861, 693] }
}
/** 剧情颜色数据 */
export const StroyColorData: { [name: string]: IFindColorData } = {
    Story1: { rect: [29, 26, 175, 76], clickRect: [490, 605, 861, 693], color: "57|40|#CCB995-#101010,79|40|#C2B290-#101010,100|40|#C2B290-#101010,158|40|#BCA98A-#101010,55|50|#E5D6B2-#101010,59|50|#DDCFAC-#101010,60|52|#DCCFAC-#101010,58|57|#F3E8C2-#101010,58|59|#FAEFC8-#101010,55|62|#DFCFAC-#101010,60|61|#DED2AE-#101010,64|57|#DACDAA-#101010,63|52|#DDD0AC-#101010,68|52|#F6EBC4-#101010,68|49|#D7C8A6-#101010,68|59|#DACDAA-#101010,66|64|#EADEB9-#101010,79|49|#E3D6B3-#101010,79|51|#ECE1BC-#101010,74|51|#EBDEB9-#101010,74|57|#F5E9C3-#101010,74|63|#F7EBC5-#101010,86|63|#EEE3BE-#101010,86|57|#E9DEBA-#101010,86|51|#E0D4B2-#101010,92|50|#D7CBAA-#101010,105|50|#DED2B0-#101010,105|63|#E8DDB9-#101010,91|63|#DBCEAC-#101010,95|59|#E0D3B1-#101010,101|59|#E5D9B6-#101010,101|54|#D9CDAB-#101010,95|54|#D5C8A8-#101010,110|50|#CFC2A2-#101010,109|58|#BFB095-#101010,109|62|#D2C6A6-#101010,112|63|#F6ECC5-#101010,112|58|#DED0AF-#101010,112|53|#DFD4B2-#101010,117|64|#E3D6B3-#101010,120|61|#F3E8C2-#101010,124|64|#C7B99A-#101010,124|58|#BEAF93-#101010,123|53|#D4C6A5-#101010,118|53|#D7CAAA-#101010,120|52|#E7DAB6-#101010,120|49|#D0C0A0-#101010,123|49|#D0C0A0-#101010,144|52|#F4DEBD-#101010,145|55|#F4DEBD-#101010,144|60|#BEA785-#101010,147|59|#C9B58D-#101010,149|58|#D4BF95-#101010,150|57|#E3CC9F-#101010,150|56|#E9D2A8-#101010,149|55|#EAD4B5-#101010,147|54|#F4DEBD-#101010,147|55|#EBD5B6-#101010" }
}