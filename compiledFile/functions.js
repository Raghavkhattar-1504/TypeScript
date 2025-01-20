"use strict";
//arrow func.
let fun1 = (a, b) => {
    return a + b;
};
console.log(fun1(2, 4));
//func. keyword
function fun2(a, b) {
    return a ** b;
}
console.log(fun2(2, 2));
// func. expression
const fun3 = function (a) {
    return `hello ${a}`;
};
console.log(fun3("Raghav"));
//default params
function fun4(a, b = 10) {
    return a + b;
}
console.log(fun4(2));
//rest params
function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
