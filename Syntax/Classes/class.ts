class Person2{
    name: string;
    age : number;

    constructor(name: string, age: number){
        this.name = name;
        this.age  = age;
    }

    greet(): void{
        console.log(`Hello ${this.name}`)
    }
}

const prsn = new Person2("Raghav", 21);
prsn.greet();