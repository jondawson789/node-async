/*
let baseURL = "https://deckofcardsapi.com/api/deck";

async function getTwoCards() {
let firstCardData = await axios.get(`${baseURL}/new/draw/?count=1`);
let deckId = firstCardData.data.deck_id;
console.log(firstCardData); 
let secondCardData = await axios.get(`${baseURL}/${deckId}/draw/?count=1`);
console.log(`${firstCardData.data.cards[0].value} ${firstCardData.data.cards[0].suit}`);
console.log(`${secondCardData.data.cards[0].value} ${secondCardData.data.cards[0].suit}`);
}
*/
//getTwoCards();

let deckID = null; 
let count = 0; 
let url = "https://deckofcardsapi.com/api/deck"; 

axios.get(`${url}/new/shuffle/`).then(data => {
    deckID = data.data.deck_id;
  });

button = document.querySelector("button"); 
button.addEventListener("click", async function() {
    let newCard = await axios.get(`http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`);
    let {suit, value} = newCard.data.cards[0]; 
    newParagraph = document.createElement("p"); 
    newParagraph.innerText =  `${value} of ${suit} drawn`; 
    body = document.querySelector('body'); 
    body.appendChild(newParagraph); 
    count = count + 1; 
    if (count == 52) {
        button.remove(); 
    }
    console.log(count); 
})
 

