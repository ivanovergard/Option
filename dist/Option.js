"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SomeMatched_1 = require("./implementation/SomeMatched");
var SomeNotMatched_1 = require("./implementation/SomeNotMatched");
var NoneNotMatchedAsSome_1 = require("./implementation/NoneNotMatchedAsSome");
var NoneMatched_1 = require("./implementation/NoneMatched");
var SomeNotMatchedAsNone_1 = require("./implementation/SomeNotMatchedAsNone");
var Option = (function () {
    function Option(contents) {
        this.contents = contents;
    }
    Option.some = function (value) {
        return new Option([value]);
    };
    Option.none = function () {
        return new Option([]);
    };
    Option.prototype.when = function (action) {
        var result = this.contents.filter(action);
        if (result.length === 1) {
            return new SomeMatched_1.SomeMatched(result[0]);
        }
        else if (this.contents.length === 1) {
            return new SomeNotMatched_1.SomeNotMatched(this.contents[0]);
        }
        return new NoneNotMatchedAsSome_1.NoneNotMatchedAsSome();
    };
    Option.prototype.whenSome = function () {
        if (this.contents.length === 1)
            return this.contents.map(function (c) { return new SomeMatched_1.SomeMatched(c); })[0];
        return new NoneNotMatchedAsSome_1.NoneNotMatchedAsSome();
    };
    Option.prototype.whenNone = function () {
        if (this.contents.length === 1)
            return this.contents.map(function (c) { return new SomeNotMatchedAsNone_1.SomeNotMatchedAsNone(c); })[0];
        return new NoneMatched_1.NoneMatched();
    };
    return Option;
}());
exports.Option = Option;
//# sourceMappingURL=Option.js.map