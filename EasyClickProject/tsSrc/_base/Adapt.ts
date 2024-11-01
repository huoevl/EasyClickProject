import { BaseClass } from "./BaseClass";
import { Environment, IPoint2 } from "./Const";
declare global {
    interface IModuleMap {
        /** 适配类 */
        adpat: Adapt
    }
}
class Adapt extends BaseClass {
    /** 当前环境 */
    currEnv: Environment | undefined;
    init() {
        this.currEnv = Environment.dev
    }
    /**
     * 获取实际xy,x1y1坐标
     * @param x
     * @param y
     * @param x1
     * @param y1
     */
    getAdaptXy2(x: number, y: number, x1: number, y1: number): IPoint2 {
        return { x: x, y: y, x1: x1, y1: y1 };
    }
}

export default Adapt;