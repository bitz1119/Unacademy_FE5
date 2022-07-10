// saving the data and redirecting to home page

function login(){
    let email = document.getElementById("exampleFormControlInput1").value;
    let pass = document.getElementById("exampleFormControlInput2").value;
    if(email=="" || pass==""){
        alert("Please enter email id and password");
        return;
    }
    //store
    let credentials = {
        "email":email,
        "password":pass
    }
    localStorage.setItem("credentials",JSON.stringify(credentials));
    
    // to redirect to home page
    console.log(location.origin + "/ecommerce-2/index.html")
    location.href = location.origin + "/ecommerce-2/index.html";

}
