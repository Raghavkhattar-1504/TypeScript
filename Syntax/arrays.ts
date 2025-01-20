
//Arrays can be defined in two ways
let arr1 : number[] = [1,2,3,4];
let arr2 : Array<number> = [5,6,7,8];
console.log(arr2);


let arr3: number[][] = [
    [1,2,3],
    [4,5,6]
];

let arr4: any[] = [1,"Apple",true];

// this is only we can read but not modify.
let arr5: readonly number[] = [1,2,3,4];