"use strict";
// Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.
// Let's keep it simple and only add the following methods to the Map:
// setItem(key: string, item: T) // should create a new key-value pair
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.items = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.items[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.items[key];
    };
    MyMap.prototype.clear = function () {
        this.items = {};
    };
    MyMap.prototype.printMap = function () {
        var _this = this;
        Object.keys(this.items).forEach(function (k) {
            console.log(k, _this.items[k]);
        });
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
