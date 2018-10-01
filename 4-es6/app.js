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
