var game = prompt("Welcome to 20! This is a competition to see which player gets to the number 20. You are competing against the computer. Do you want to play enter 'y' for yes or 'n' for no")

var dash = 0;
var fame = 0;
var sign = 0;
var ring = 0;
var playagain = "y";
var gamedone = false;
var hos = 0;

if (game == 'y') {
    do {
        alert("The computer will start")
       gamedone = false;
     do {
       var ran = Math.floor(Math.random() * 10) + 1;
       dash = dash + ran;
       alert(`The computer drew ${ran}. Its total is ${dash}`)
   } while (dash < 16); 
   if (dash > 20) {
       alert(`The computer busted! it got a ${dash} . You won this round`);
     ring++;
     gamedone = true;
   } else if (dash == 20) {
     sign++;
     gamedone = true;
   } else {
     alert(`The computer stopped at ${dash}`);
   }





if (gamedone == false) {

    do {
        hos = prompt("Would you like another number? if you would like to stop, press 'n' to stop.")
        if (hos == "y") {
            var ran = Math.floor(Math.random() * 10) + 1;
            fame = fame + ran;
            alert(`You drew ${ran}. Its total is ${fame}`)
        } else {
            break;
          }
    } while ((hos == "y") && (fame   <= 20));
     if (fame > 20) {
    alert(`you busted! you got ${fame} . The computer won this round!`);
    ring++;
  } else if (fame == 20) {
    alert(`You won this round`);
    ring++;
  } else {
    alert(`You stopped at ${fame}`)
  }
  
  if ((fame > dash) && (fame < 21)) {
    ring++;
  } else if ((dash > fame) && (dash < 21)) {
    sign++;
  } else if (fame == dash) {
    alert(`The game is tied`)
  }
        
        playAgain = prompt("Would you like to play again? Type 'y' for yes or 'n' for no ")
    } else {
        playAgain = prompt("Would you like to play again? Type 'y' for yes or 'n' for no ")
    }
}while (playAgain == "y");

    if (sign > ring) {
    alert(`Thanks for playing! The computer won in total with ${sign} wins. You lost with a total of ${ring} wins.`)
    } else if (ring > sign) {
    alert(`Thanks for playing! You won in total with ${ring} wins. The computer lost with ${sign} wins.`)
    } else {
    alert(`Thanks for playing! You and the computer ties with ${ring} wins.`)
    }


} else if (game == "n") {
stop();
} else {
alert(`Not valid answer. Closing program`)
}




