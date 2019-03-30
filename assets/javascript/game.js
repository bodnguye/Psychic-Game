// Creates an array that lists out all of the options
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Creating variables to hold the number of wins, losses, and guessesLeft. 
// Also a variable that holds all your guesses.
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var yourGuesses = [];

// Create variables that hold references to the places in the HTML where I want to display things.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var yourGuessesText = document.getElementById("yourguesses-text");

function startGame() {

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Checks what the Computer is thinking by poking into its brain.
console.log("computerGuess: " + computerGuess);

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed is set to lower case.
    // var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var userGuess = event.key.toLowerCase();

    // http://keycodes.atjayjo.com/#charcode
    // This if statement should only allow the keycode 65 to 90 (A-Z)
    // It will alert otherwise.
    if (event.keyCode < 65 || event.keyCode > 90) {
        alert("Wrong Key! Pick a letter!");
    }

    // Prevents the user to pick the same letter again. 
    else if (yourGuesses.indexOf(userGuess) >= 0) {
    alert("Stop repeating yourself!");
    }
  
    // This logic determines the outcome of the game (win/loss), and increments the appropriate number.
    else if (userGuess === computerGuess) {
        document.getElementById("winner-logo").setAttribute("src", "assets/images/jordanlogo.jpg");
        wins++;
        alert("You're pretty good!");
        reset()
    } 

    // This logic will decrease guessesLeft if user guess wrong. The .push will add the user input into yourGuesses.
    else {
        yourGuesses.push(userGuess);
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        alert("No more tries! You lose!");
        reset()
    }


     // Display the user and computer guesses, and wins/losses/Guesses left/Your Guesses.
     winsText.textContent = "Wins: " + wins;
     lossesText.textContent = "Losses: " + losses;
     guessesLeftText.textContent = "Guesses left: " + guessesLeft;
     yourGuessesText.textContent = "Your Guesses: " + yourGuesses;
     
      };

      // Function that reset guessesLeft and yourGuesses after a win or loss. It will also reset the computerGuess.
var reset = function() {
    guessesLeft = 8;
    yourGuesses = [];
    startGame();
}
}

startGame();