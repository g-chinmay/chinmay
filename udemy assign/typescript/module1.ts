export class Word{
    firstname:string;
    lastname:string;

constructor(firstname:string,lastname:string){
    this.firstname=firstname;
    this.lastname=lastname;
}
getFullName(){
    return this.firstname + " " + this.lastname;
}
}
var aWord=new Word("garikipati","chinmayeeswari");
console.log(aWord.getFullName());