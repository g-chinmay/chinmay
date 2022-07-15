const birthday:{ name:string,age:number,gift:string}=
{
    name:"saisri",
    age:12,
    gift:"cake"
    
};
console.log (birthday);
//inferences types
birthday.age=11;
console.log (birthday);
// index signatures
const dog:{[index:string]:number}={};
dog.age=3;
console.log (dog);