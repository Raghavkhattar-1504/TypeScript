"use strict";
// interface is like definig the structure of an object.
// it is a blueprint of an object
const obj1 = {
    name: "Raghav",
    age: 21,
    greet: function () {
        return `hello ${this.name}`;
    }
};
console.log(obj1);
console.log(obj1.greet());
