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
exports.CCF = void 0;
var Root_1 = require("../pkg/Root");
var CloseView_1 = require("../pkg/misc/CloseView");
var Adapt_1 = require("./Adapt");
var BaseClass_1 = require("./BaseClass");
var EcRoot_1 = require("./EcRoot");
var CCF = /** @class */ (function (_super) {
    __extends(CCF, _super);
    function CCF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CCF.prototype.init = function () {
        ccf.root = Root_1.Root.getIns();
        ccf.closeView = CloseView_1.CloseView.getIns();
        ccf.adpat = Adapt_1.Adapt.getIns();
        ccf.ecRoot = EcRoot_1.EcRoot.getIns();
    };
    return CCF;
}(BaseClass_1.BaseClass));
exports.CCF = CCF;
