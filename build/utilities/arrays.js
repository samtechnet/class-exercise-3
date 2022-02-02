"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var addArr = function (arr) {
    var total = 0;
    arr.forEach(function (x) {
        total += x;
    });
    return total;
};
// concatenate two arrays
// const concatArr = (arr1arr: (number | string)[], arr2arr: (number | string)[] => {
//     return [...arr1arr, ...arr2arr];
// };
var concatArr = function (arr1arr, arr2arr) {
    return __spreadArray(__spreadArray([], arr1arr, true), arr2arr, true);
};
module.exports = { addArr: addArr, concatArr: concatArr };
