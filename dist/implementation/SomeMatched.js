"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionResolved_1 = require("./ActionResolved");
var MappingResolved_1 = require("./MappingResolved");
var SomeMatched = (function () {
    function SomeMatched(value) {
        this.value = value;
    }
    SomeMatched.prototype.do = function (action) {
        var _this = this;
        return new ActionResolved_1.ActionResolved(function () { return action(_this.value); });
    };
    SomeMatched.prototype.mapTo = function (mapping) {
        return new MappingResolved_1.MappingResolved(mapping(this.value));
    };
    return SomeMatched;
}());
exports.SomeMatched = SomeMatched;
//# sourceMappingURL=SomeMatched.js.map