function findLongestWordLength(str) {
    let wordArray = str.split(" ");
    let maxValueTillNow = wordArray[0].length;
    for(let i = 0;i<wordArray.length;i++){
      if(maxValueTillNow < wordArray[i].length){
        maxValueTillNow = wordArray[i].length;
      }
    }
    return maxValueTillNow;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
