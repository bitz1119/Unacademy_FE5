fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response)=>{
        console.log(response);
        return response.json()
    }).catch((err)=>{
        console.log(err);
        return null;
    })
    .then((data)=>{
        console.log(data);
    })




