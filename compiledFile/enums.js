"use strict";
// default start from 0, can explicitly set it to any number and value next to it will have value one greater than it
var num1;
(function (num1) {
    num1[num1["val0"] = 0] = "val0";
    num1[num1["val1"] = 1] = "val1";
    num1[num1["val2"] = 2] = "val2";
    num1[num1["val3"] = 3] = "val3";
})(num1 || (num1 = {}));
let val0 = num1.val0;
console.log(val0);
var signs;
(function (signs) {
    signs["up"] = "Up";
    signs["down"] = "Down";
    signs["left"] = "Left";
    signs["right"] = "Right";
})(signs || (signs = {}));
let dir = signs.left;
console.log(dir);
