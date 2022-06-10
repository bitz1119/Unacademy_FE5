function download() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("downloaded");
            resolve();
        },2000)

    })
}


function zip() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("zipping");
            resolve();
        },1000)
    })
}


function upload(){
    setTimeout(()=>{
        console.log("uploaded");
    },500)
}



// download()
//     .then(zip)
//     .then(upload)


// async await
async function process(){
    await download();
    await zip();
    upload();
}


async function fetchingJoke(){
    let response =  await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
    console.log(data)
}

console.log("start")
fetchingJoke()
console.log("end")

// fetch("url")
//     .then((res)=>{res.json()})
//     .then((data)=>{console.log(data)})


// pokemon API
