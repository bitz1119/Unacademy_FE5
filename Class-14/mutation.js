function findChar(char,str){
    for(let i = 0;i<str.length;i++){
      if(str[i] == char){
        return true;
      }
    }
    return false
  }
  
  
  function mutation(arr) {
    let [str1,str2] = arr;
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    for(let i = 0;i<str2.length;i++){
      if(findChar(str2[i],str1)==true){
        continue;
      }
      else{
        return false;
      }
    }
    return true;
  }
  
  mutation(["hello", "hey"]);