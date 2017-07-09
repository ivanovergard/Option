"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MappingResolved = (function () {
    function MappingResolved(result) {
        this.result = result;
    }
    MappingResolved.prototype.when = function (predicate) {
        return this;
    };
    MappingResolved.prototype.whenSome = function () {
        return this;
    };
    MappingResolved.prototype.whenNone = function () {
        return this;
    };
    MappingResolved.prototype.mapTo = function (mapping) {
        return this;
    };
    MappingResolved.prototype.map = function () {
        return this.result;
    };
    return MappingResolved;
}());
exports.MappingResolved = MappingResolved;
//# sourceMappingURL=MappingResolved.js.map