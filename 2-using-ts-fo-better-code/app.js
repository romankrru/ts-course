"use strict";
// string
var myName = 'John';
// myName = 2;
// numbers
var myAge = 24.4;
// myAge = 'John';
// boolean
var hasHobbies = true;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ["Cooking", "Sports"];
// hobbies = [100];
hobbies = ["100"];
// console.log(hobbies[0]);
// console.log(typeof hobbies)
// tuples
var address = ["Super street", 99];
// enums
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
var myColor = Color.Blue;
// console.log(myColor);
var car = "BMW";
// console.log(car);
car = { brand: "BMW", series: 3 };
// console.log(car);
// functions
function returnMyName() {
    return myName;
}
// console.log(returnMyName())
function sayHello() {
    console.log("hello");
    // return myName;
}
// argument types
function mul(v1, v2) {
    return v1 * v2;
}
console.log(mul(1, "str"));
