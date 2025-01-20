interface Shape{
    name: string;
    area(): number
}

class Square implements Shape{
    name: string;
    side: number;

    constructor(side: number){
        this.name = "Square";
        this.side = side
    }

    area(): number{
        return this.side*this.side;
    }
}

const sq = new Square(5)
console.log(sq.area())