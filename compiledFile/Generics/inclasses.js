"use strict";
const pair = { first: "Raghav", second: 21 };
console.log(pair);
//generic classes
class Box {
    constructor(contents) {
        this._contents = contents;
    }
    get contents() {
        return this._contents;
    }
}
const stringBox = new Box("Hello");
console.log(stringBox.contents);
const numberBox = new Box(123);
console.log(numberBox.contents);
