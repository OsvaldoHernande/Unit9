var can = alert("Welcome to Guess the Numbers . I will think of a number from 1 to 10 and you will try to guess the correct number . The one I thought about . ")

var read = prompt("Great! What number am i thinking of?")

var dash = Math.floor(Math.random() * 10) + 1 

var usertotal = 0;

var computertotal = 0;

if (read == dash) {
 alert(`You won! I guessed ${dash} , and you entered ${read}`);

} else if (read != dash) {
 alert(`I won! I guessed ${dash} , and you entered ${read}`);   

}


do { 

    var read = prompt("Great! What number am i thinking of?")

    var dash = Math.floor(Math.random() * 10) + 1 

    if (read == dash) {
        alert(`You won! I guessed ${dash} , and you entered ${read}`);
       
    } else if (read != dash) {
        alert(`I won! I guessed ${dash} , and you entered ${read}`);   
       
    }

    var name = prompt("Do you want to continue press `y` for yes and press `n` for no")
    
} while (name != "n")


var read = prompt("Great! What number am i thinking of?")

var dash = Math.floor(Math.random() * 10) + 1

for (var i = 0; i < dash; i++) {
    if (dash[i] == read) {
        usertotal++
        computertotal++
    alert(`You won! I guessed ${dash} , and you entered ${read}.Total so far is Human ${usertotal++} and Computer ${computertotal++} `);
   
}  else if (dash[i] != read) {
    usertotal++
    computertotal++
    alert(`I won! I guessed ${dash} , and you entered ${read}. Total so far is Human ${usertotal++} and Computer ${computertotal++}`);   
   
}

}


















