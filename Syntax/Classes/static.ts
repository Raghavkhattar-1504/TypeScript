// static means like if some variable is declared as static in a class, it will be same everywhere, even after we update it in any class , it changes everywhere
class Circle{
    static PI: number = 3.14

    static Area(radius: number): number{
        return Circle.PI * radius * radius
    }
}

console.log(Circle.PI)
console.log(Circle.Area(5));