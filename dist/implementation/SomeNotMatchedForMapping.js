"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MappingOnSomeNotResolved_1 = require("./MappingOnSomeNotResolved");
var SomeNotMatchedForMapping = (function () {
    function SomeNotMatchedForMapping(value) {
        this.value = value;
    }
    SomeNotMatchedForMapping.prototype.mapTo = function (mapping) {
        return new MappingOnSomeNotResolved_1.MappingOnSomeNotResolved(this.value);
    };
    return SomeNotMatchedForMapping;
}());
exports.SomeNotMatchedForMapping = SomeNotMatchedForMapping;
//# sourceMappingURL=SomeNotMatchedForMapping.js.map