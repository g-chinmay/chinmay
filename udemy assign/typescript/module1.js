"use strict";
exports.__esModule = true;
exports.Word = void 0;
var Word = /** @class */ (function () {
    function Word(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Word.prototype.getFullName = function () {
        return this.firstname + " " + this.lastname;
    };
    return Word;
}());
exports.Word = Word;
var aWord = new Word("patibandla", "tejaswini");
console.log(aWord.getFullName());
