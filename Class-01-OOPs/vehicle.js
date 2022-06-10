class Laptop{
    constructor(RAM,processor,hardisk,OS,price){
      this.RAM = RAM;
      this.processor = processor;
      this.hardisk = hardisk;
      this.os =  OS;
      this.price = price;
    }
    
    // print config 
    showOS(){ 
      console.log("OS is " + this.os);
    }
    
  }
  
  
  let laptop = new Laptop("8 GB","i9 5 Gen","500 GB","Linux",50000);
  console.log(laptop);
  console.log(laptop.showOS())