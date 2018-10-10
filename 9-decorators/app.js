"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// Factory
function logging(value) {
    return function (constructorFn) {
        return value ? logged : null;
    };
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        logging(true)
    ], Car);
    return Car;
}());
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Green Plant";
    }
    Plant = __decorate([
        logging(true),
        printable
    ], Plant);
    return Plant;
}());
var p = new Plant();
p.print();
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overWritable(value) {
    return function (target, property) {
        var newDescriptor = {
            writable: value,
            value: '1234'
        };
        return newDescriptor;
    };
}
// Method decorators
// Property decorators
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(100);
    };
    __decorate([
        overWritable(false)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var proj = new Project('Super project');
proj.calcBudget();
proj.calcBudget = function () {
    console.log(200);
};
proj.calcBudget();
// Parameter decorators
function printInfo(target, methodName, paramIndex) {
    console.log("target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndec: ", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudents = function (mode, printAll) {
        if (printAll) {
            console.log(10000000);
        }
        else {
            console.log(123);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudents", null);
    return Course;
}());
var course = new Course("Super course");
course.printStudents('anything', true);
course.printStudents('anything', false);
