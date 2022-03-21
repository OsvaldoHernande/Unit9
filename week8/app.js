function askName() {
    var game = prompt("Welcome to the Temperature converter game. What is your name?")
    return game
}

function greet(a) { // parameter
    prompt(`Welcome ${a} here enter a tempature you would like. Press 'F' for Fº to Cº or Press 'C' for Cº to Fº`)
}

greet(askName())

function game() {
    if (greet(askName()) = 'F') {
        
    }
}
