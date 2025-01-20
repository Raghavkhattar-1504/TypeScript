//abstract  class, cannot create instance of abstract class
abstract class  Bird{
    abstract makeSound(): void

    fly(): void{
        console.log("Flying...")
    }
}

//all abstract methods should be overriden
class Sparrow extends Bird{
    makeSound(): void {
        console.log("Chirpp!")
    }
}

const sp1 = new Sparrow()
sp1.makeSound();
sp1.fly();