"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var CCFClass_1 = require("./_base/CCFClass");
var Main = /** @class */ (function () {
    function Main() {
        var itself = this;
        itself.exec();
    }
    Main.prototype.exec = function () {
        if (!ccf.root.isHasJietu) {
            return;
        }
        this.loopExec();
    };
    Main.prototype.loopExec = function () {
        ccf.closeView.exec();
    };
    return Main;
}());
exports.Main = Main;
CCFClass_1.CCF.getIns();
new Main();
