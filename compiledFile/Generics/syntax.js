"use strict";
//generics -> enable the creation of reusable and type-safe components,
// allowing types to be passed as arguments
// we do this where we want to declare same functions but their return type or params type differ.
function identity(value) {
    return value;
}
console.log(identity("Hello"));
console.log(identity(42));
