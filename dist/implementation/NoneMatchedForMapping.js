"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MappingResolved_1 = require("./MappingResolved");
var NoneMatchedForMapping = (function () {
    function NoneMatchedForMapping() {
    }
    NoneMatchedForMapping.prototype.mapTo = function (mapping) {
        return new MappingResolved_1.MappingResolved(mapping());
    };
    return NoneMatchedForMapping;
}());
exports.NoneMatchedForMapping = NoneMatchedForMapping;
//# sourceMappingURL=NoneMatchedForMapping.js.map