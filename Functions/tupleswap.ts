function tupleswap<T>(t1: T, t2 : T) {
    
    const t3 : T = t1;
    t1 = t2;
    t2 = t3;
}


const val1 : [number , string] = [2, "Raghav"];
const val7 : [number , string] = [3, "Sparsh"];

tupleswap<[number , string]>(val1, val7);

console.log(val1);
console.log(val7);

