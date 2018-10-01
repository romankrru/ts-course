"use strict";
// let & const
var variable = "test";
console.log(variable);
variable = "another var";
console.log(variable);
var maxLevel = 100;
console.log(maxLevel);
// maxLevel = 99;
// block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// arrow functions
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(2, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(2, 4));
