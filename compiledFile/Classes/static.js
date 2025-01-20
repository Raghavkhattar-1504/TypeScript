"use strict";
// static means like if some variable is declared as static in a class, it will be same everywhere, even after we update it in any class , it changes everywhere
class Circle {
    static Area(radius) {
        return Circle.PI * radius * radius;
    }
}
Circle.PI = 3.14;
console.log(Circle.PI);
console.log(Circle.Area(5));
