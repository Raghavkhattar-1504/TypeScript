"use strict";
class Square {
    constructor(side) {
        this.name = "Square";
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
const sq = new Square(5);
console.log(sq.area());
