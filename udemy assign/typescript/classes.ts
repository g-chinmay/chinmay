class flower{
    name:string;
    years:number;
}
const obj = new flower();
obj.name='jasmine';
obj.years=3;
console.log (obj);
class vehicle{
    weight:number;
    color:string;
}
const car= new vehicle();
car.weight=3000;
car.color="black";
console.log (car)

class Invoice {
 client: string;
details: string;
amount:number;
constructor(c: string, d: string, a: number){
this.client = c;
this.details = d;
this.amount = a;
}
format() {
return `${this.client} owes £${this.amount} for ${this.details}`;
}
}
const invOne = new Invoice('srija', 'buisness', 20);
const invTwo = new Invoice('sravani', ' web developer', 30);
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'sanvi';
invTwo.amount = 40;
console.log(invOne, invTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
form.addEventListener('submit', (e: Event) => { e.preventDefault();
console.log(
type.value,
tofrom.value,
details.value,
amount.valueAsNumber
);
});