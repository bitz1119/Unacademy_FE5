
function fetchProductDetailsCategoryPage(){
    let category = location.search.split("=")[1];
    fetch('https://fakestoreapi.com/products/category/'+category)
            .then(res=>res.json())
            .then(json=>{
                let productsCards = json.map(product => returnCardHTML(product));
                console.log(productsCards)
                document.getElementById("products").innerHTML = productsCards.join(" ");
            })
}            

function returnCardHTML(product){
    return `
    <div class="col-4">
            <div class="card" >
                <img src="${product.image}" height="300px" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 style="display:inline-block" >${product.title} </h5>
                <span class="badge text-bg-primary">${product.category}</span>

                <h4 >Price : Rs${product.price}</h4>
                <button type="button" class="btn btn-primary" onclick="addToCart(${product.id})" >Add to Cart</button>
                </div>
            </div>
    </div>
    `

    
}


fetchProductDetailsCategoryPage();


function addToCart(id){
    if(localStorage.getItem("cart") != undefined){
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.push({
        "id":id,
        "quantity":1});
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    else{
        let cart = [{
            "id":id,
            "quantity":1
        }]
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    alert("Product Added to cart")
}
