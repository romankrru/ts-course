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
