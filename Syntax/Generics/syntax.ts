//generics -> enable the creation of reusable and type-safe components,
// allowing types to be passed as arguments
// we do this where we want to declare same functions but their return type or params type differ.

function identity<T>(value: T) : string {
    return String(value);
}

//yha prr return type bhi same honi chahiye mtlb T ya frrr return type mein vhi retrun kro jo return type likha hhua h.

console.log(identity<string>("Hello"));




function identify<T>(value: T) : T {
    return value;
}
console.log(identify<number>(42));