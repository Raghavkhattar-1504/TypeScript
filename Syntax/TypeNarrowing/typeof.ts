// type narrowing is like a constraint which checks the datatype of the variable or object to operate certain operations on it .


//typeof
function data(val: number | string) {
    if (typeof val === "number") {
        console.log(`age : ${val}`);
    }
    else{
        console.log(`name : ${val}`);
    }
}

data("Raghav");



//instanceof

class Dog{
    bark(){
        console.log("barks");
    }
}

class Cat {
    meow() {
        console.log("Meow Meow!");
    }
}

function data1(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

const catty = new Cat();
data1(catty);


//in

type Car = {brand : "Maruti" , name : "800" } | {brand : "Kia" , model : "Sonet"}

const data2 = (car : Car) => {
    if("model" in car){
        console.log("Kia is the bestt");
    }
    else{
        console.log("Maruti is the best");
    }
}

