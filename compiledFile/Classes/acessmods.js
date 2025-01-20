"use strict";
//public - accesible everywhere
//private - accesible only in the same class
//protected - only accesible in the same class and also in the subclasses
//default - accesible in the same package
//readonly  - only read but not modified 
class Employee1 {
    constructor(name, salary, department, id) {
        this.name = name;
        this.salary = salary;
        this.department1 = department;
        this.id = id;
    }
    //getter and setter
    get Sal() {
        return this.salary;
    }
    set Salary(salary) {
        this.salary = salary;
    }
}
const emp2 = new Employee1("Raghav", 600000, "CSE", 12313);
console.log(emp2.name);
// emp2.id = 2414 //error - cannot be reassigned as it is readonly property
console.log(emp2.Sal);
emp2.Salary = 4000;
console.log(emp2.Sal);
