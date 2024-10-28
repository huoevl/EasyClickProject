import { BaseClass } from "./BaseClass";
declare global {
    interface IModuleMap {
        /** 无关紧要的类，暂存数据 */
        temp: Temp
    }
}
export class Temp extends BaseClass {
    index: number | undefined;
    init() {
        this.index = 0;
    }
}