function sum(...args) {
    let sum = 0;
    for (var i = 0; i < args.length; i++){
        sum += args[i];
    }
    console.log(sum)
    return sum;
}


sum(1,2,3,4,5)
sum(1,2)
sum(1,2,3,4,5,6,7,8)