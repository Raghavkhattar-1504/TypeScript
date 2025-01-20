// sum of numbers of an array

const sum1 = (...num : number[]) : number =>  {
    const ans = num.reduce((acc, sum) => (acc+sum),0);
    return ans;
}

console.log(sum1(1,2,3,4,5));



