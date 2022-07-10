

// fetching the categories
function fetchCategories(){           

    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(json=>{
        // fetching
        let categoryHTMLArray = json.map(
            category=>{return `<div id="category-1" onclick="redirectToCategoryPage('${category}')" class="category-box">${category}</div>`
        })
        console.log(categoryHTMLArray)
        document.getElementById("all-category").innerHTML = categoryHTMLArray.join(" ");
    })
}

function redirectToCategoryPage(category){
    console.log(`/ecommerce-2/category?category=${category}`);
    location.href = location.origin + `/ecommerce-2/category.html?category=${category}`;
}


fetchCategories()

