export interface Employee{
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employee: Employee = {
    firstName : "chinmay",
    lastName: "garikipati",
    fullName(): string{
        return this.firstName + " " + this.lastName;
    }
}

console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.fullName());