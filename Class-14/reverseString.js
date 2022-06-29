function reverseString(str) {

  // split the string
    str = str.split("");

  // reverse string
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
  //join the string
    str = str.join("")
    return str;
  }
  
  reverseString("helloo");


