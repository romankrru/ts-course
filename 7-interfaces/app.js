"use strict";
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person = {
    firstName: "Max",
    age: 27,
    greet: function (lastName) {
        console.log(this.firstName + lastName);
    }
};
// greet({firstName: "Max", age: 27, hobbies: ["Sports"]})
changeName(person);
person.greet("Anything");
var Person = /** @class */ (function () {
    function Person(firstName) {
        this.firstName = firstName;
        this.lastName = "tests";
    }
    Person.prototype.greet = function (lastName) {
        console.log(this.firstName + lastName);
    };
    return Person;
}());
var myPeson = new Person("max");
myPeson.greet("test");
var myDoubleFunction;
myDoubleFunction = function (n1, n2) {
    return (n1 + n2) * 2;
};
console.log(myDoubleFunction(1, 3));
var oldPerson = {
    age: 27,
    firstName: "Max",
    greet: function () { },
};
