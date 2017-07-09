"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionResolved_1 = require("./ActionResolved");
var MappingResolved_1 = require("./MappingResolved");
var NoneMatched = (function () {
    function NoneMatched() {
    }
    NoneMatched.prototype.do = function (action) {
        return new ActionResolved_1.ActionResolved(action);
    };
    NoneMatched.prototype.mapTo = function (mapping) {
        return new MappingResolved_1.MappingResolved(mapping());
    };
    return NoneMatched;
}());
exports.NoneMatched = NoneMatched;
//# sourceMappingURL=NoneMatched.js.map