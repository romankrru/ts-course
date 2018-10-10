"use strict";
// Simple generic
function echo(data) {
    return data;
}
console.log(echo("Max").length);
console.log(echo(27).length);
console.log(echo({ name: "Max", age: 27 }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho(27));
console.log(betterEcho({ name: "Max", age: 27 }).name);
// Buil in generic
var testResult = [1.93, 2.33];
testResult.push(1);
// testResult.push('str');
// Arrays
function printAll(args) {
    args.forEach(function (el) { return console.log(el); });
}
printAll(["apples", "banana"]);
// printAll(1);
// Using generic types
var echo2 = betterEcho;
