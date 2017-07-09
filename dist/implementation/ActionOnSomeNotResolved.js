"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SomeMatched_1 = require("./SomeMatched");
var SomeNotMatched_1 = require("./SomeNotMatched");
var ActionOnSomeNotResolved = (function () {
    function ActionOnSomeNotResolved(value) {
        this.value = value;
    }
    ActionOnSomeNotResolved.prototype.when = function (predicate) {
        return predicate(this.value) ? new SomeMatched_1.SomeMatched(this.value) : new SomeNotMatched_1.SomeNotMatched(this.value);
    };
    ActionOnSomeNotResolved.prototype.whenSome = function () {
        return new SomeMatched_1.SomeMatched(this.value);
    };
    ActionOnSomeNotResolved.prototype.whenNone = function () {
        return new SomeNotMatched_1.SomeNotMatched(this.value);
    };
    ActionOnSomeNotResolved.prototype.execute = function () { };
    ;
    return ActionOnSomeNotResolved;
}());
exports.ActionOnSomeNotResolved = ActionOnSomeNotResolved;
//# sourceMappingURL=ActionOnSomeNotResolved.js.map