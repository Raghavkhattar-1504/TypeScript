//primitive
type ID = number | string //union type
let userId: ID; // userId could be either number or a string
userId = 101
userId = "Emp1133"

//union is like or operator
//intersection is like and operator

type Person1 = {
    name: string;
    age: number;
}

const user: Person1 = {
    name: "Rakshit",
    age: 21
}

console.log(user);

//intersection type
type BasicInfo = {
    name: string,
    age: number
}

type Address = {
    city: string,
    country: string,
}

type User = BasicInfo & Address

const person: User = {
    name: "Rakshit",
    age: 21,
    city: "Meerut",
    country: "India",
}

console.log(person);

