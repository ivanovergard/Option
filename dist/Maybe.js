"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Maybe = (function () {
    function Maybe(contents) {
        this.contents = contents;
    }
    Maybe.some = function (value) {
        return new Maybe([value]);
    };
    Maybe.none = function () {
        return new Maybe([]);
    };
    Maybe.prototype.do = function (action) {
        this.contents.forEach(function (item) { action(item); });
    };
    return Maybe;
}());
exports.Maybe = Maybe;
//# sourceMappingURL=Maybe.js.map