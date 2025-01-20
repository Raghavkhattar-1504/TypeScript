function getLength<T extends {length: number}>(item: T): number{
    return item.length
}

console.log(getLength("Hello"))
console.log(getLength([1,2,3]))
// console.log(getLength(42))  throw error coz Number doesn't have a length property