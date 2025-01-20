"use strict";
//abstract  class, cannot create instance of abstract class
class Bird {
    fly() {
        console.log("Flying...");
    }
}
//all abstract methods should be overriden
class Sparrow extends Bird {
    makeSound() {
        console.log("Chirpp!");
    }
}
const sp1 = new Sparrow();
sp1.makeSound();
sp1.fly();
