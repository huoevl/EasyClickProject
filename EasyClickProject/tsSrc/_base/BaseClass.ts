export class BaseClass {
    private static instance: any;
    static getIns<T extends BaseClass>(data?: any): T {
        return this.instance ||= new this(data);
    }
    protected constructor(data?: any) {
        this.init(data);
        setStopCallback(() => {
            this.onStop();
        }
        );
    }

    /** 初始化，子类重写 */
    protected init(data?: any) {

    }
    /** 脚本停止后回调，子类重新 */
    protected onStop() {

    }
    /** 执行，子类重写 */
    exec() {

    }
}