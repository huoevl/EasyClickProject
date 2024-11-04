import { BaseClass } from "../../_base/BaseClass";

declare global {
    interface IModuleMap {
        /** 游戏全局配置 */
        confg: GameConfig
    }
}
export class GameConfig extends BaseClass {
    /** 主线任务 */
    mainTask = false;
    isExecRed = true;

    doInit() {
        for (let key in ccf) {
            const clazz = ccf[key as keyof IModuleMap];
            if (clazz === this) {
                continue;
            }
            clazz.isExecRed = this.isExecRed;
        }
    }
}