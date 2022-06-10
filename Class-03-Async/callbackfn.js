function greet(elephant){
    console.log("hello world");
    elephant();
    console.log("call back is executed");
}



greet(()=>{
    console.log("this is callback fn");
})
