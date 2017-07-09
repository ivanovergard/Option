"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MappingResolved_1 = require("./MappingResolved");
var SomeMatchedForMapping = (function () {
    function SomeMatchedForMapping(value) {
        this.value = value;
    }
    SomeMatchedForMapping.prototype.mapTo = function (mapping) {
        return new MappingResolved_1.MappingResolved(mapping(this.value));
    };
    return SomeMatchedForMapping;
}());
exports.SomeMatchedForMapping = SomeMatchedForMapping;
//# sourceMappingURL=SomeMatchedForMapping.js.map