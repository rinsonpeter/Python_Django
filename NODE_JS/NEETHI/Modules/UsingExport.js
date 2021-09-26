/**
 * Created by vaio on 06-08-2015.
 */
 //require()simply returns the module object, which you can then assign to any local variable
var call = require('./ExportDemo');
call(); // logs out : "a function in file foo"
var circle = require('./Circle.js');

console.log("the area is "+ circle(2));

var myModule = require('./SelectedExport');
myModule.printA(); // -> A
myModule.printB(); // -> B
console.log(myModule.pi); // -> 3.141592653589793
