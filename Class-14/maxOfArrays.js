function findMax(arr){
    let max = arr[0];
    for(let i = 0;i<arr.length;i++){
      if(max < arr[i]){
        max = arr[i];
      }
    }
    return max;
  }
  
  function largestOfFour(arr) {
    let ansArray = [];
    for(let i = 0;i<arr.length;i++){
      ansArray.push(findMax(arr[i]));
    }
    return ansArray;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);