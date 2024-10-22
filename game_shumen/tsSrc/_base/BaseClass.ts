export class BaseClass{
    private static instance: any;
    static getIns<T extends BaseClass>(data?: any): T {
        return this.instance ||= new this(data);
    }
    protected constructor(data?: any) {
        this.init(data);
    }
    /** 初始化，子类重写 */
    protected init(data?: any) {

    }
    /** 执行，子类重写 */
    exec() {
        
    }
}