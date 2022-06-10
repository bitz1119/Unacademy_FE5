class Blueprint{
    // function called constructor
    constructor(noOfBedRooms,noOfKitchen,noOfHall,noOfBathRoom){
        this.bedRoom = noOfBedRooms;
        this.kitchen = noOfKitchen;
        this.hall = noOfHall;
        this.bathroom = noOfBathRoom;
    }
}

let house1 = new Blueprint(4,1,2,3);
let house2 = new Blueprint(3,1,4,5);
let house3 = new Blueprint(2,3,1);


console.log(house1)
console.log(house2)
console.log(house3)

