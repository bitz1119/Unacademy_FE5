function spinalCase(str) {
    let ansStr = str[0];
    for(let i =1;i<str.length;i++){
      if(str[i]== " " || str[i]=="_" || str[i]=="-"){
        ansStr = ansStr + "-";
      }
      else if(str[i] == str[i].toUpperCase() && ansStr[ansStr.length-1] != "-"){
        ansStr = ansStr + "-"+str[i];
      }
      else{
        ansStr = ansStr + str[i];
      }
    }
    ansStr = ansStr.toLowerCase();
    console.log(ansStr)
    return ansStr;
  
  }
  
  spinalCase('AllThe-small Things');