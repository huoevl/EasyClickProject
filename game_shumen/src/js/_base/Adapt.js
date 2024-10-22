"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapt = void 0;
var BaseClass_1 = require("./BaseClass");
var Adapt = /** @class */ (function (_super) {
    __extends(Adapt, _super);
    function Adapt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 获取实际xy坐标
     * @param x
     * @param y
     * @returns {{x, y}}
     */
    Adapt.prototype.getXy = function (x, y) {
        return { x: x, y: y };
    };
    return Adapt;
}(BaseClass_1.BaseClass));
exports.Adapt = Adapt;
