"use strict";
var MyMath;
(function (MyMath) {
    var circle;
    (function (circle) {
        var PI = 3.14;
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        circle.calculateCircumference = calculateCircumference;
    })(circle = MyMath.circle || (MyMath.circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
var CircleMath = MyMath.circle;
console.log(CircleMath.calculateCircumference(23));
console.log(MyMath.calculateRectangle(10, 20));
