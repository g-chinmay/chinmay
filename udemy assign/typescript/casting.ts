let a:unknown="welcome"; 
    console.log ((a as string). length);
let b:unknown =5;
console.log ((b as string ). length);
//it print undefined bcoz number has no length. 
console.log (('43' as string).length );
//casting with<>
var len:unknown='classes';
console.log ((<string>len).length);
//casting to unknown= force casting 
let x = 'hello';
console.log(((x as unknown) as string).length);