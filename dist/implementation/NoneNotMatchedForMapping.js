"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MappingOnNoneNotResolved_1 = require("./MappingOnNoneNotResolved");
var NoneNotMatchedForMapping = (function () {
    function NoneNotMatchedForMapping() {
    }
    NoneNotMatchedForMapping.prototype.mapTo = function (mapping) {
        return new MappingOnNoneNotResolved_1.MappingOnNoneNotResolved();
    };
    return NoneNotMatchedForMapping;
}());
exports.NoneNotMatchedForMapping = NoneNotMatchedForMapping;
//# sourceMappingURL=NoneNotMatchedForMapping.js.map