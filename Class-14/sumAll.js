function sumAll(arr) {
    let [x,y] = arr;
    let sum = 0;
    if(x<=y){
      for(let i=x;i<=y;i++){
        sum = sum+i;
      }
    }
    else{
      for(let i=x;i>=y;i--){
        sum = sum+i;
      }
    }
  
    return sum;
  }
  
  sumAll([1, 4]);