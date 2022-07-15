var flower = /** @class */ (function () {
    function flower() {
    }
    return flower;
}());
var obj = new flower();
obj.name = 'jasmine';
obj.years = 3;
console.log(obj);
var vehicle = /** @class */ (function () {
    function vehicle() {
    }
    return vehicle;
}());
var car = new vehicle();
car.weight = 3000;
car.color = "black";
console.log(car);
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('srija', 'buisness', 20);
var invTwo = new Invoice('sravani', ' web developer', 30);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'sanvi';
invTwo.amount = 40;
console.log(invOne, invTwo);
console.log(Invoice);
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
