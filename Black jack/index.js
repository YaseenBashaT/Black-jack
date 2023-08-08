let cards = []
let sum = 0
isAlive = false
hasBlackjack=false
function getRandomVal(){
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let msgEl = document.getElementById("message-el")

function startGame(){
    isAlive=true
    let firstNumber = getRandomVal()
    let secondNumber = getRandomVal()
    cards=[firstNumber,secondNumber]
    sum = firstNumber+secondNumber
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards :"
    for(i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " " 
    }
    sumEl.textContent = "Sum :" + sum
    if (sum<21){
        msgEl.textContent = "Would you like to draw a new card"
        hasBlackjack=false
    }
    else if(sum===21){
        msgEl.textContent = "You are the Blackjack"
        hasBlackjack=true
    }
    else{
        msgEl.textContent = "You are outta the game"
        isAlive=false
    }
}
function newCard(){
    if(isAlive===true && hasBlackjack === false){
        let card = getRandomVal()
        sum+=card
        cards.push(card)
        renderGame()
    }
}
