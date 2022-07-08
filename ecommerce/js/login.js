// we must be able to store credentials 



function getBaseURL(url){
    splitURL = url.split('/');
    splitURL.pop();
    return splitURL.join('/');
}

function setCredentials(){
    let email = document.getElementById("floatingInput").value;
    let pass = document.getElementById("floatingPassword").value;
    console.log(email, pass);
    localStorage.setItem("credentials", email+"&"+pass);
    window.location.href = getBaseURL(window.location.href)+"/index.html";
}

//else we redirect to home page