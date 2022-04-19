function run() {
    getCard()  
    computerNumber()
    CompareNumbers()
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

function CompareNumbers() {
    let c = getCard()
    let l = computerNumber()
    let h = document.getElementById("compare")

    if (c > l) {
        h.innerHTML = "Human wins";
        h.style.textAlign = "center";
        h.style.color = "white"
    } else {
        h.innerHTML = "Computer wins";
        h.style.textAlign = "center";
        h.style.color = "white"
    }

    if (c > 20) {
        h.innerHTML = "Computer wins";
        h.style.textAlign = "center";
        h.style.color = "white"
    }

    if (l > 20) {
        h.innerHTML = "Human wins";
        h.style.textAlign = "center";
        h.style.color = "white" 
    }

    if (l == c) {
        h.innerHTML = "Tie";
        h.style.textAlign = "center";
        h.style.color = "white" 
    }

}

