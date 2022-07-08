"use strict";
exports.__esModule = true;
var employee = {
    firstName: "chinmay",
    lastName: "garikipati",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.fullName());
