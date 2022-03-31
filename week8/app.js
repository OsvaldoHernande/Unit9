function askName() {
    var game = prompt("Welcome to the Temperature converter game. What is your name?")
    return game
}

function greet(a) { // parameter
   var can = prompt(`Welcome ${a} here enter a tempature you would like. Press 'F' for Fº to Cº or Press 'C' for Cº to Fº`)
   return can
}

greet(askName())


function game(x) {
    var ran = ((x - 32) * 5) / 9
    return ran 
}

function userName() {
    var user = prompt("What is the Tempature in Farenheit")
    return user
}

function Numbersgame(human, name) {
    alert(`Your tempature is ${human}Fº and Your Tempature is ${name}Cº`)
}

function program() {
    var h = userName()
    var g = game(h)
    Numbersgame(h, g)
}

 program()



function dash(t) {
    var you = ((t * 9) / 5) + 32
    return you
}

function comName() { 
    var people = prompt("What is the Tempature in Celcius")
    return people
}

function Tempgame(computer, run) {
    alert(`Your tempature is ${computer}Cº and Your Tempature is ${run}Fº`)

}

function pro() {
    var a = comName()
    var b = dash(a)
    Tempgame(a, b)
}

pro()












