class Vehicle{
    constructor(color,type){
        this.color = color;
        this.type = type;
    }
    getColor(){
        return "Parent " + this.color;
    }
}

class Bike extends Vehicle{
    constructor(seats,color,type){
        super(color, type);
        this.seats = seats;
    }
    getColor(){
        return "Child " + this.color;
    }
}


let bike = new Bike(2,"blue","electric");

console.log(bike.getColor());