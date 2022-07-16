var contests = [];
fetchContests();
async function fetchContests(){
    let response = await fetch("https://kontests.net/api/v1/all");
    let json = await response.json();
    contests = json;
    renderContests(json);
}

// when ever toggle is changed, change the results accordingly
document.getElementById("flexSwitchCheckChecked").addEventListener("change", ()=>{
    if(document.getElementById("flexSwitchCheckChecked").checked === true)
    {renderContests(contests.filter((ele)=>{
        if(ele.in_24_hours === "Yes"){
            return true;
        }
        return false;
    }))}
    else{
        renderContests(contests);
    }
})



function renderContests(contests){
    let allCards = "";
    // go to each element and html of it
    for(let i=0; i<contests.length; i++){
        // get card from this data
        console.log(contests[i])
        let card = createContestCard(contests[i]);
        allCards = allCards + card;
    }
    document.getElementsByClassName("contest-box")[0].innerHTML=  allCards;
}

function createContestCard(contest){
    return `<div class="card" style="width:15rem">
        <div class="card-body">
            <h5 class="card-title">${contest.name}</h5>
            <hr>
            <p class="card-text">Start Time : ${contest.start_time}</p>
            <p class="card-text">End Time : ${contest.end_time}</p>
            <a href="${contest.url}" class="btn btn-primary" target="_blank">Go To Contest</a>
        </div>
    </div>`
}