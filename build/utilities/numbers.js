"use strict";
// add numbers in an array
var sum = function (arr, arr2) {
    var total = 0;
    arr.forEach(function (x) {
        total += x;
    });
    return total + arr2;
};
// find the largest number in an array
var lgNumber = function (arr) {
    var largest = 0;
    arr.forEach(function (x) {
        if (x > largest) {
            largest = x;
        }
    });
    return largest;
};
var multiply = function (num1, num2) {
    var result = num1 * num2;
    return result;
};
module.exports = {
    sum: sum,
    lgNumber: lgNumber,
    multiply: multiply
};
