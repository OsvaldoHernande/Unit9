function run() {
    getCard()  
    computerNumber()
}

var u = 0;
var i = 0;

function getCard() {
    var name = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4) // 0 to 3 
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src =images/" + name + suitArray[randomSuit] + ".jpg>")
    document.querySelector("body").style.backgroundColor = "green";
    u = u + name
    let z = document.getElementById("number")
    z.innerHTML = "Human got a total of" + u;
    z.style.color = "black";
    z.style.textAlign = "center";
    return u
}



function computerNumber() {
    do {
    var name = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4) // 0 to 3 
    document.getElementById("Deck").insertAdjacentHTML("beforeend", "<img src =images/" + name + suitArray[randomSuit] + ".jpg>")
    document.querySelector("body").style.backgroundColor = "green";
    i = i + name
    let b = document.getElementById("computer")
    b.innerHTML = "Computer got a total of" + i;
    b.style.color = "black";
    b.style.textAlign = "center";
    return i

    } while (i < 16) 
}

