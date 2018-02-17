


//variables
// --------------------------------------------------------------------------
var alphaChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var alphaMade = [];

// User wins when guessing the right letter
var win = 0;
// Loss is the user not guessing the right letter after 9 attempts
var loss = 0;
// The guesses the user has made so far.
var guessLeft = 9; 
// This is the choice of letter the computer has made that the user must guess against. Reset after a win or loss is triggered.
var guessSoFar = [alphaMade];
// The guesses the user has left to guess the right letter. If guessesLeft === 0 then it triggers a loss condition. Variable resets after loss is triggered
var computerGuess = alphaChoices[Math.floor(Math.random() * alphaChoices.length)];
// Resets after user uses all their guesses
var reset = function() {
  guessSoFar = [alphaMade];
  guessLeft = 9;
  computerGuess = (alphaChoices[Math.floor(Math.random() * alphaChoices.length)]);
}

// tracks our users' input
document.onkeyup = function(event) {
        var letter = String.fromCharCode(event.which).toLowerCase();

// Win condition
if (letter === computerGuess) {
	win++;
	reset();
	alert("Look at you, you little psycho...err...psychic you!");
	}
//Loss condition
	else if (letter !== computerGuess) {
		guessLeft--;
	}
// If there are no guesses left, this triggers a loss and uses the reset variable to 
	if (guessLeft === 0) {
		loss++;
		reset();
		alert("Yeah you might not psychic after all. Maybe a little pyscho but definitely not psychic.")
	}
 
// Guesses made by the user
	if (letter !== computerGuess) {
		alphaMade.push (letter);
	}

//  Reseting the 2nd array after a round is finished.
	if (guessLeft === 9) {
		alphaMade.length = 0;
	}

//  Matching the data to the HTML above.
     var html =
          "<p>Wins: " + win + "</p> <br>" +
          "<p>Losses: " + loss + "</p><br>" +
          "<p>Guesses Made: " + guessSoFar + "</p><br>" +
          "<p>Guesses Left: " + guessLeft + "</p>";

        
		document.querySelector("#psychic").innerHTML = html;

};