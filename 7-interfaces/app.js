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
};
greet({ firstName: "Max", age: 27, hobbies: ["Sports"] });
changeName(person);
