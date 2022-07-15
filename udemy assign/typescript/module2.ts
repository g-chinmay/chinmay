import {Word} from './classes';
function echo<T>(arg:T):T{
    return arg;
}
var myStr=echo(1);
class Admin extends Word{

}
class Manager extends Word{

}
let admin = new Admin('a','a');
let manager=new Manager('a','a');
function wordEcho<T extends Word>(word:T):T{
    return word;
}
var foo=wordEcho(admin);
var bar=wordEcho(manager);