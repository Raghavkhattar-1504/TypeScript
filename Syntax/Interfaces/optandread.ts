interface Employee{
    //this means you can only read but not modify.
    readonly emp_id: string,
    name: string,
    age: number,
    department: string,

    //this means it is optional like not mandatory to give some val or not.
    feedback? : string, 

}

const emp1: Employee = {
    emp_id: "Emp1133",
    name: "Rakshit",
    age: 21,
    department: "Frontend"
}

// if we try to assign some new val to emp id , it wil give us an error.

console.log(emp1)