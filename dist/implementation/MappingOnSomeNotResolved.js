"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SomeMatchedForMapping_1 = require("./SomeMatchedForMapping");
var SomeNotMatchedForMapping_1 = require("./SomeNotMatchedForMapping");
var SomeNotMatchedAsNoneForMapping_1 = require("./SomeNotMatchedAsNoneForMapping");
var MappingOnSomeNotResolved = (function () {
    function MappingOnSomeNotResolved(value) {
        this.value = value;
    }
    MappingOnSomeNotResolved.prototype.when = function (predicate) {
        return predicate(this.value) ?
            new SomeMatchedForMapping_1.SomeMatchedForMapping(this.value)
            : new SomeNotMatchedForMapping_1.SomeNotMatchedForMapping(this.value);
    };
    MappingOnSomeNotResolved.prototype.whenSome = function () {
        return new SomeMatchedForMapping_1.SomeMatchedForMapping(this.value);
    };
    MappingOnSomeNotResolved.prototype.whenNone = function () {
        return new SomeNotMatchedAsNoneForMapping_1.SomeNotMatchedAsNoneForMapping(this.value);
    };
    MappingOnSomeNotResolved.prototype.map = function () {
        throw new Error("Invalid Operation");
    };
    return MappingOnSomeNotResolved;
}());
exports.MappingOnSomeNotResolved = MappingOnSomeNotResolved;
//# sourceMappingURL=MappingOnSomeNotResolved.js.map