function run() {
    getCard()
}

function getCard() {
    var d = Math.floor(Math.random() * 10) + 1 
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4) // 0 to 3 
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src =images/" + d + suitArray[randomSuit] + ".jpg>")
}

function userNumber() {
    getCard(d)
    
  
}

