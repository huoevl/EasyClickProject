import { BaseClass } from "./BaseClass";
declare global {
    interface IModuleMap {
        /** 适配类 */
        adpat: Adapt
    }
}
export class Adapt extends BaseClass {
    /**
     * 获取实际xy坐标
     * @param x
     * @param y
     * @returns {{x, y}}
     */
    getXy(x: number, y: number) {
        return { x: x, y: y };
    }
}