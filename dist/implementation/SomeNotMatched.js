"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionOnSomeNotResolved_1 = require("./ActionOnSomeNotResolved");
var MappingOnSomeNotResolved_1 = require("./MappingOnSomeNotResolved");
var SomeNotMatched = (function () {
    function SomeNotMatched(value) {
        this.value = value;
    }
    SomeNotMatched.prototype.do = function (action) {
        return new ActionOnSomeNotResolved_1.ActionOnSomeNotResolved(this.value);
    };
    SomeNotMatched.prototype.mapTo = function (mapping) {
        return new MappingOnSomeNotResolved_1.MappingOnSomeNotResolved(this.value);
    };
    return SomeNotMatched;
}());
exports.SomeNotMatched = SomeNotMatched;
//# sourceMappingURL=SomeNotMatched.js.map