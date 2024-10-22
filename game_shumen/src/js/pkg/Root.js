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
exports.Root = void 0;
var BaseClass_1 = require("../_base/BaseClass");
var Debug_1 = require("../_base/Debug");
var Root = /** @class */ (function (_super) {
    __extends(Root, _super);
    function Root() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isHasJietu = false;
        return _this;
    }
    /** 是否拥有截图权限 */
    Root.prototype.init = function () {
        image.setInitParam({
            "action_timeout": 10000,
            "auto_click_request_dialog": false
        });
        image.setFindColorImageMode(2);
        var req = startEnv();
        if (!req) {
            toast("申请自动化权限失败");
            return;
        }
        var request = image.requestScreenCapture(sleepTime2000, 0);
        if (request) {
            this.isHasJietu = true;
            toast("申请截图成功");
        }
        else {
            toast("申请截图失败");
        }
        var d = image.initOpenCV();
        Debug_1.Debug.loggerD(d);
        sleep(sleepTime2000);
    };
    return Root;
}(BaseClass_1.BaseClass));
exports.Root = Root;
