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
    /** 清理红点 */
    clearRed = true;
}