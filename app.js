//TO CONSUME AN API YOU FIRST NEED TO SAVE THE URL OF THE API INTO A VARIABLE
let starWarsUrl = 'https://swapi.dev/api/people/' //link where Api is hosted


fetch(starWarsUrl).then(res => res.json()).then(data => {
    let nameValuePairsOfChar = data.results
    let paragraphs = [...document.querySelectorAll(".card p")]
    let Heads = [...document.querySelectorAll(".card h3")]
    //destructuring helps you collect and some properties you need in a neat way
    nameValuePairsOfChar.forEach((obj,index) => {
        let {name,gender,height} = obj
        let [headTag] = Heads.slice(index,index+1)
        let [nameTag,heightTag,genderTag] = paragraphs.slice(index*3)
        headTag.innerText = name     
        nameTag.innerText = `Name: ${name}`
        heightTag.innerText = `Height: ${height}cm`
        genderTag.innerText = `Gender: ${gender}`
    })
    
    
    console.log(paragraphs)
    
    console.log(data.results)

    
})

let card = [...document.querySelectorAll(".card h3")]


card.forEach((h3, index) =>{
 let correspondingInfo = document.querySelector(`#info-${index}`); 
   
 h3.addEventListener('click', (e) => {
     correspondingInfo.classList.toggle('info-hiddened')
     setTimeout( ()=> correspondingInfo.classList.toggle("info-hiddened"), 3000)
 })

} );    
















// let results = data.results;
//     let paragraphs = [...document.querySelectorAll(".card p")]
//     console.log( paragraphs)
//     results.forEach( (obj, index)=>{
//         let slice = paragraphs.slice(index*3);
//         console.log(slice)
//         let [nameTag, heightTag, genderTag] = [...slice];
//         let {name, height, gender}  =  obj;
//         console.log( name, height, gender)
//         //console.log("I got here.")

//         nameTag.innerText = name;
//         heightTag.innerText = height;
//         genderTag.innerText = gender;

//     })