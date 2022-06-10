function func1(){
    console.log("I am fun1");
}

function func2(){
    console.log("I am fun2");
    func1();
    console.log("I am exiting function 1")
}


func2()


