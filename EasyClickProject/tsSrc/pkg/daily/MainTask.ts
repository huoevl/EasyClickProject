import { BaseClass } from "../../_base/BaseClass";
declare global {
    interface IModuleMap {
        mainTask: MainTask
    }
}
export class MainTask extends BaseClass {
    exec() {

    }
}