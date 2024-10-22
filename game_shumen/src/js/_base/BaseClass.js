"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClass = void 0;
var BaseClass = /** @class */ (function () {
    function BaseClass(data) {
        this.init(data);
    }
    BaseClass.getIns = function (data) {
        return this.instance || (this.instance = new this(data));
    };
    /** 初始化，子类重写 */
    BaseClass.prototype.init = function (data) {
    };
    /** 执行，子类重写 */
    BaseClass.prototype.exec = function () {
    };
    return BaseClass;
}());
exports.BaseClass = BaseClass;
