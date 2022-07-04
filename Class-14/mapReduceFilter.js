let arr = [1,2,3,4,5];
let arr2 = arr.map((ele)=>{
    return ele*ele;
})

let arr3 = [];
for(let i=0; i<arr.length; i++){
    arr3.push(arr[i]*arr[i]);
}

console.log(arr2)
console.log(arr3)


// filter out numbers less than 2
let arr4 = arr.filter((ele)=>{
    if(ele > 2){
        return false;
    }
    else{
        return true;
    }
})

console.log(arr4);


let array = [2,1,3,6,7,8,9,10,11,12,13,14,15];

let array2 = array.filter((ele)=>{
    if(ele%2 != 0){
        return true;
    }
    else{
        return false;
    }
})

console.log(array2);

