function reverseString(str) {
    str = str.split("");
    let start = 0;
    let end = str.length - 1;
    while(start < end)
    {
      // swap start and end
      let temp;
      temp = str[start];
      str[start] = str[end];
      str[end] = temp;
  
      start = start + 1;
      end = end - 1;
    }  
  
    str = str.join("")
    return str;
  }
  
  reverseString("helloo");