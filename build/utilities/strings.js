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
// concatenate two arrays
var concat = function (arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
};
// remove the 3rd item from array
var cutStr = function (arr) {
    arr.splice(2, 1);
    return arr;
};
var capitalize = function (str) {
    return str.toUpperCase();
};
module.exports = { concat: concat, cutStr: cutStr, capitalize: capitalize };
