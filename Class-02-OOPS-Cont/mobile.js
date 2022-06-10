class Mobile{
    #price;
    #company;
    constructor(company,type,price){
        this.#company = company;
        this.type = type;
    }

    #getOSPrivate(){
        if(this.#company === "Apple"){
            return "ios";
        }
        else{
            return "android";
        }
    }

    hathi(){
        if(this.#getOSPrivate === "ios"){
            return 100000;
        }
        else{
            return 10000;
        }
    }

    getCompany(){
        return this.#company;
    }
}


let mobile = new Mobile("Apple","Screen Touch");
console.log(mobile.hathi());


