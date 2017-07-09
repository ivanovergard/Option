"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionResolved = (function () {
    function ActionResolved(action) {
        this.action = action;
    }
    ActionResolved.prototype.do = function (action) {
        return this;
    };
    ActionResolved.prototype.when = function (action) {
        return this;
    };
    ActionResolved.prototype.whenSome = function () {
        return this;
    };
    ActionResolved.prototype.whenNone = function () {
        return this;
    };
    ActionResolved.prototype.execute = function () {
        return this.action();
    };
    return ActionResolved;
}());
exports.ActionResolved = ActionResolved;
//# sourceMappingURL=ActionResolved.js.map