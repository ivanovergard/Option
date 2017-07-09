"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionOnNoneNotResolved_1 = require("./ActionOnNoneNotResolved");
var MappingOnNoneNotResolved_1 = require("./MappingOnNoneNotResolved");
var NoneNotMatchedAsSome = (function () {
    function NoneNotMatchedAsSome() {
    }
    NoneNotMatchedAsSome.prototype.do = function (action) {
        return new ActionOnNoneNotResolved_1.ActionOnNoneNotResolved();
    };
    NoneNotMatchedAsSome.prototype.mapTo = function (mapping) {
        return new MappingOnNoneNotResolved_1.MappingOnNoneNotResolved();
    };
    return NoneNotMatchedAsSome;
}());
exports.NoneNotMatchedAsSome = NoneNotMatchedAsSome;
//# sourceMappingURL=NoneNotMatchedAsSome.js.map