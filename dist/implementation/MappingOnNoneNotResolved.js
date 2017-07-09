"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoneNotMatchedForMapping_1 = require("./NoneNotMatchedForMapping");
var NoneMatchedForMapping_1 = require("./NoneMatchedForMapping");
var MappingOnNoneNotResolved = (function () {
    function MappingOnNoneNotResolved() {
    }
    MappingOnNoneNotResolved.prototype.when = function (predicate) {
        return new NoneNotMatchedForMapping_1.NoneNotMatchedForMapping();
    };
    MappingOnNoneNotResolved.prototype.whenSome = function () {
        return new NoneNotMatchedForMapping_1.NoneNotMatchedForMapping();
    };
    MappingOnNoneNotResolved.prototype.whenNone = function () {
        return new NoneMatchedForMapping_1.NoneMatchedForMapping();
    };
    MappingOnNoneNotResolved.prototype.map = function () {
        throw new Error("Invalid operation");
    };
    return MappingOnNoneNotResolved;
}());
exports.MappingOnNoneNotResolved = MappingOnNoneNotResolved;
//# sourceMappingURL=MappingOnNoneNotResolved.js.map