// first task is to get the category from drop down

document.getElementById("select-button").addEventListener("click",getNewsByCategory)

function getNewsByCategory(){
    let category = document.getElementById("inputGroupSelect02").value;
    // fetch Data based on category
    fetch("https://inshorts.deta.dev/news?category="+category)
    .then((res)=>res.json())
    .then((json)=>{
        console.log(json.data)
            // cards should be created for each element of the array
        let newsCards = "";
        for(let i=0; i<json.data.length; i++){
            newsCards += createNewsCard(json.data[i])
        }
        document.getElementById("news").innerHTML = newsCards;
    })
}

function createNewsCard(news){
    return `
    <div class="card news-card col-4">
            <img src="${news.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${news.title}</h5>
              <p class="card-text">${news.content}</p>
              <a href="${news.readMoreUrl}" class="btn btn-primary">Read More</a>
            </div>
        </div>
    `
}  
