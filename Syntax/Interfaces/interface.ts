// interface is like definig the structure of an object.
// it is a blueprint of an object

interface Person{
    name: string,
    age: number,
    greet(): string,
}

const obj1: Person = {
    name: "Raghav",
    age: 21,
    greet: function(){
        return `hello ${this.name}`
    }
}

console.log(obj1)
console.log(obj1.greet())
