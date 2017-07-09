"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionOnSomeNotResolved_1 = require("./ActionOnSomeNotResolved");
var MappingOnSomeNotResolved_1 = require("./MappingOnSomeNotResolved");
var SomeNotMatchedAsNone = (function () {
    function SomeNotMatchedAsNone(value) {
        this.value = value;
    }
    SomeNotMatchedAsNone.prototype.do = function (action) {
        return new ActionOnSomeNotResolved_1.ActionOnSomeNotResolved(this.value);
    };
    SomeNotMatchedAsNone.prototype.mapTo = function (mapping) {
        return new MappingOnSomeNotResolved_1.MappingOnSomeNotResolved(this.value);
    };
    return SomeNotMatchedAsNone;
}());
exports.SomeNotMatchedAsNone = SomeNotMatchedAsNone;
//# sourceMappingURL=SomeNotMatchedAsNone.js.map