let num: number = 21;
let cost : number = 23;

let str : string = "Raghav";
// let print = "Heelo";
//since the type of data is not defined, bur still ts code compiles this code and converts it into js
// console.log(print);
console.log(str);

let bool : boolean = true;


//ts automatically detects the type of data.

let n = '23';
console.log(typeof n);

let nl : null = null;
//null and undefined are also defined in ts


// To declare and abject , data type mentioned should be object.
let obj : object = {
    name : "Raghav",
    age : 21
} 

//any - when you are not sure about the data type, does not check type safety
// when performing an operation on the variable
let val2: any = "val2"
val2 = 12

console.log(val2.length, typeof val2);

//unknown - also used when you dont know about the data type of the variable
// but can not perform any operation on the variable before checking
// its type
let val3: unknown = "Raghav"

if(typeof val3 === "string"){
    console.log(val3.length)
}




