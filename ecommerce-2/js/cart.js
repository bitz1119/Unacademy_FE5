
async function renderRows(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart)
    let cartLength = cart.length;
    for (let i = 0; i < cartLength; i++){
        console.log(cart[i])
        await fetch('https://fakestoreapi.com/products/'+cart[i].id)
            .then(res=>res.json())
            .then(json=>{
                cart[i].product = json;
            })
    }
    console.log(cart);
    let rowsHTML = cart.map(getRow);
    document.getElementById("table-body").innerHTML = rowsHTML.join("");

}

renderRows();

function getRow(cartItem){
 return `<tr>
            <th scope="row">${cartItem.id}</th>
            <td>${cartItem.product.title}</td>
            <td>${cartItem.product.price}</td>
            <td>${cartItem.quantity}</td>
            <td>${cartItem.quantity*cartItem.product.price}</td>
            <td>
                <button type="button" class="btn btn-success">+</button>
                <button type="button" class="btn btn-danger">-</button>
            </td>
        </tr>`

}