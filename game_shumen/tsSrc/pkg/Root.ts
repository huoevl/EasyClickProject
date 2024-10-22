import { BaseClass } from "../_base/BaseClass";
import { Debug } from "../_base/Debug";
declare global {
    interface IModuleMap {
        /** 主入口类 */
        root: Root
    }
}
export class Root extends BaseClass {
    isHasJietu = false;
    /** 是否拥有截图权限 */
    init() {
        image.setInitParam(
            {
                "action_timeout": 10000,
                "auto_click_request_dialog": false
            }
        );
        image.setFindColorImageMode(2);
        let req = startEnv();
        if (!req) {
            toast("申请自动化权限失败");
            return;
        }
        let request = image.requestScreenCapture(sleepTime2000, 0);
        if (request) {
            this.isHasJietu = true;
            toast("申请截图成功");
        } else {
            toast("申请截图失败");
        }
        let d = image.initOpenCV();
        Debug.loggerD(d);
        sleep(sleepTime2000);
    }
}