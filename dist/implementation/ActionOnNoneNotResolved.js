"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoneNotMatchedAsSome_1 = require("../implementation/NoneNotMatchedAsSome");
var NoneMatched_1 = require("../implementation/NoneMatched");
var ActionOnNoneNotResolved = (function () {
    function ActionOnNoneNotResolved() {
    }
    ActionOnNoneNotResolved.prototype.when = function (predicate) {
        return new NoneNotMatchedAsSome_1.NoneNotMatchedAsSome();
    };
    ActionOnNoneNotResolved.prototype.whenSome = function () {
        return new NoneNotMatchedAsSome_1.NoneNotMatchedAsSome();
    };
    ActionOnNoneNotResolved.prototype.whenNone = function () {
        return new NoneMatched_1.NoneMatched();
    };
    ActionOnNoneNotResolved.prototype.execute = function () { };
    return ActionOnNoneNotResolved;
}());
exports.ActionOnNoneNotResolved = ActionOnNoneNotResolved;
//# sourceMappingURL=ActionOnNoneNotResolved.js.map