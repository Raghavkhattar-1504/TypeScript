"use strict";
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
const prsn = new Person2("Raghav", 21);
prsn.greet();
