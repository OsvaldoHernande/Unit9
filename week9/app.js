var dash = 0;
var fame = 0;
var sign = 0;
var ring = 0;

function askName() {
    var game = prompt("Hello welcome to Twenty game. What is your name")
    return game
}

function user(a) {
   alert(`Welcome ${a} get ready to start the game Twenty`)
}

user(askName())
  
function math() {
    var ran = Math.floor(Math.random() * 10) + 1;
    return ran
}

function num(name, dash) {

    dash = 0;
    do {
      var name = math()
        dash = dash + name;
        if (dash >= 20) {
            break
        }
        alert(`You drew ${name}. Its total is ${dash}`)
        var hos = prompt("Would you like another number? if you would like to stop, press 'n' to stop.")
  } while ((hos == "y") && (dash   <= 20));
  
    if (dash > 20) {
        alert(`you busted! you got ${dash} . The computer won this round!`);
        ring++;
      } else if (dash == 20) {
        alert(`You won this round`);
        ring++;
      } else {
        alert(`You stopped at ${dash}`)
      }
    return dash
}
 function program() {
   var name = math()
   num(name)
 }
 program()



 function com(run, fame,) {
     fame = 0;
    do {
       var run = math()
        fame = fame + run;
        if (fame >= 20) {
            break
        }
        alert("The computer will start")
        alert(`The computer drew ${run}. Its total is ${fame}`)
    } while (fame < 16)
   if (fame > 20) {
        alert(`The computer busted! it got a ${fame} . You won this round`);
     ring++;
    } else if (fame == 20) {
      alert('computer this round');
     sign++;
    } else {
      alert(`The computer stopped at ${fame}`);
    } 

    return fame 
 }

 function pro() {
  var run = math()
  com(run)
}
pro()


function result(fame, dash, sign , ring) {
  if ((dash > fame) && (fame < 21)) {
  ring++;
  } else if ((fame > dash) && (dash < 21)) {
  sign++;
  } else if (fame == dash) {
     alert(`The game is tied`)
  }
  }
  
  function p() {
  result()
  }
  p()
  
  function game() {
  if (sign > ring) {
  alert(`Thanks for playing! The computer won in total with ${sign} wins. You lost with a total of ${ring} wins.`)
  } else if (ring > sign) {
  alert(`Thanks for playing! You won in total with ${ring} wins. The computer lost with ${sign} wins.`)
  } else {
  alert(`Thanks for playing! You and the computer ties with ${sign} wins.`)
  }
  }
  
  function or() {
    game()
  }
  
  or()
    
  
  function fun() {
    do { 
       var playAgain = prompt("Would you like to play again? Type 'y' for yes or 'n' for no ")
      if (playAgain == 'y') {
        user(askName())
        program()
        pro()
        p()
        Twenty 
        
      } else {
        or()
        alert('Closing the Program')
      }
    } while (playAgain == 'y')
    
  }
  
  function Twenty () {
    user(askName())
    program()
    pro()
    p()
    fun()
  }
  
  Twenty()
  