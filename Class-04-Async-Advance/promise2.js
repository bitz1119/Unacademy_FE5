function download(num) {
    return new Promise((resolve,reject)=>{
        if(num === 0){
            reject();
        }
        else{
            resolve();
        }
    })
}
download(1)
    .then(()=>{
        console.log("resolve")
    })
    .catch(()=>{
        console.log("catch statement")
    })

    
download(0)
    .then(()=>{
        console.log("resolve")
    })
    .catch(()=>{
        console.log("catch statement")
    })

