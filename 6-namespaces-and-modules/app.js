"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./math/circle");
var rectangle_1 = __importDefault(require("./math/rectangle"));
console.log(circle_1.PI);
console.log(circle_1.calculateCircumference(23));
console.log(rectangle_1.default(11, 23));
