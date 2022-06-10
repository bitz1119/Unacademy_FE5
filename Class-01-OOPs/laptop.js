class Laptop{
    constructor(RAM,processor,hardisk,OS,price){
      this.RAM = RAM;
      this.processor = processor;
      this.hardisk = hardisk;
      this.os =  OS;
      this.price = price;
      this.model = "xyz";
    }
    
    showOS(){ 
      console.log("OS is " + this.os);
    }

    // show price
    showPriceAndOS(){ 
        console.log("Price is " + this.price);
        this.showOS();
    }
    
    
  }
  
  
  let laptop = new Laptop("8 GB","i9 5 Gen","500 GB","Linux",50000);
  console.dir(laptop);
  laptop.showOS()
  laptop.showPriceAndOS();
