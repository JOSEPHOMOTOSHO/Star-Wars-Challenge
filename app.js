//TO CONSUME AN API YOU FIRST NEED TO SAVE THE URL OF THE API INTO A VARIABLE
let starWarsUrl = 'https://swapi.dev/api/people/' //link where Api is hosted

fetch(starWarsUrl).then(res => res.json()).then(data => {
    console.log("I am running")
    let results = data.results;
    let paragraphs = [...document.querySelectorAll(".card p")]
    console.log( paragraphs)
    results.forEach( (obj, index)=>{
        let slice = paragraphs.slice(index*3);
        console.log(slice)
        let [nameTag, heightTag, genderTag] = [...slice];
        let {name, height, gender}  =  obj;
        console.log( name, height, gender)
        //console.log("I got here.")

        nameTag.innerText = name;
        heightTag.innerText = height;
        genderTag.innerText = gender;

    })
})