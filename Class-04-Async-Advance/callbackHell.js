function download(zip,upload){
    setTimeout(()=>{
        console.log("downloaded")
        zip(upload);
    },2000);
}

function zip(upload) {
    setTimeout(()=>{
        console.log("zipped")
        upload();
    },1000);
}

function upload(){
    setTimeout(()=>{console.log("uploaded")},500);
}

download(zip,upload);


// can we do something to make sure they get executed in sequence
    // - download
    // - zipped
    // - upload

// upload
// zip
// download