//TO CONSUME AN API YOU FIRST NEED TO SAVE THE URL OF THE API INTO A VARIABLE
let starWarsUrl = 'https://swapi.dev/api/people/' //link where Api is hosted

let restOfContainer = document.querySelector(".rest-container")
let cardGroup = document.createElement("div")
cardGroup.className = "card-group"
restOfContainer.appendChild(cardGroup)
let arrOfImages = [
    "Assets/LukeSkywalker.jpeg",
    "Assets/c3po.jpeg",
    "Assets/r2d2.jpeg",
    "Assets/DarthVader.jpeg",
    "Assets/LeiaOrgana.jpeg",
    "Assets/OwenLars.jpeg",
    "Assets/BeruWhitesunLars.jpeg",
    "Assets/R5-D4.jpeg",
    "Assets/BiggsDarklighter.png",
    "Assets/obiwan.jpg"
]

console.log(restOfContainer)

fetch(starWarsUrl).then(res => res.json()).then(data => {
    console.log(data.results)
    data.results.forEach((obj,index) => {
        let {name,height,gender} = obj
        let card = document.createElement("div")
        card.className = "card"
        cardGroup.appendChild(card)
        let h3 = document.createElement("h3")
        card.appendChild(h3)
        card.innerHTML = `
        <h3 class = "head" id="head${index}">${name}</h3>
        <img src=${arrOfImages[index]}></img>
        <div class="info info-hiddened" id="info-${index}">
             <p>Name:${name}</p>
            <p>Height:${height}</p>
            <p>Gender:${gender}</p>
        </div>
        `
        
    })
    let head = document.querySelectorAll(".card .head")
    let arrHead = [...head]
    arrHead.forEach((h3,index) => {
        let correspondingInfo = document.querySelector(`#info-${index}`); 
   
        h3.addEventListener('click', (e) => {
            correspondingInfo.classList.toggle('info-hiddened')
            setTimeout( ()=> correspondingInfo.classList.toggle("info-hiddened"), 3000)
        })
    })

})



    



































 














// function main(){

// }

// module.exports = {main}