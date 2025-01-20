//arrow func.

let fun1 = (a: number, b: number): number => {
    return a + b;
}
console.log(fun1(2, 4));


//func. keyword
function fun2(a: number, b: number): number {
    return a ** b;
}
console.log(fun2(2, 2));


// func. expression
const fun3 = function (a: string): string {
    return `hello ${a}`;
}
console.log(fun3("Raghav"));


//default params
function fun4(a: number, b: number = 10): number {
    return a + b;
}
console.log(fun4(2));


//rest params
function sum(...args: number[]):number{
    let sum: number = 0
    for(let arg of args){
        sum += arg;
    }
    return sum;
}



