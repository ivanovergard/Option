"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MappingOnSomeNotResolved_1 = require("./MappingOnSomeNotResolved");
var SomeNotMatchedAsNoneForMapping = (function () {
    function SomeNotMatchedAsNoneForMapping(value) {
        this.value = value;
    }
    SomeNotMatchedAsNoneForMapping.prototype.mapTo = function (mapping) {
        return new MappingOnSomeNotResolved_1.MappingOnSomeNotResolved(this.value);
    };
    return SomeNotMatchedAsNoneForMapping;
}());
exports.SomeNotMatchedAsNoneForMapping = SomeNotMatchedAsNoneForMapping;
//# sourceMappingURL=SomeNotMatchedAsNoneForMapping.js.map