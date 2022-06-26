function find(element,arr){
    // task is to check if element is present in array or not
    for(let i = 0;i<arr.length;i++){
      if(arr[i]==element){
        return true;
      }
    }
    return false;
  }
  
  function diffArray(arr1, arr2) {
    const newArr = [];
    for(let i = 0;i<arr1.length;i++){
        // find element in another array
        let isFound = find(arr1[i],arr2);
        if(isFound == false){
          newArr.push(arr1[i]);
        }
    }
  
    for(let i=0;i<arr2.length;i++){
      let isFound = find(arr2[i],arr1);
        if(isFound == false){
          newArr.push(arr2[i]);
        }
    }
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);