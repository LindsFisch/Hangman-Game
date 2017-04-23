//array of potential answers
var words= ["calf", "hatchling", "pup", "cub","chick", "kid", "kit", "fawn", "fledgling", "foal", "joey", "lamb", "guppie", "piglet", "owlet", "kitten", "larva"];
var blank = "";
var wrongGuess = [];
var guessRemain = 7;
var positions= [];


//pick random word from array 
var answer = words[Math.floor(Math.random() * words.length)];
console.log(answer);

//create the correct number of blank spaces on screen
for (var i = 0; i < answer.length; i++) {
 		blank += "_" + "";
 	}

document.onkeyup = function(event) {
 	var userGuess = String.fromCharCode(event.key).toLowerCase();

 	//populate the blank spaces on screen
	document.getElementById("blanks").textContent = blank;
	
 }

//determines if userGuess is within answer
function checkGuess(userGuess) {
    //guess within answer
    if (answer.indexOf(userGuess) > -1) {
        for (var i = 0; i < answer.length; i++) {
            //checking where the index of answer and userGuess are the same
            if (answer[i] === userGuess) {
                positions.push(i);
            }

        }
    //guess not within answer
    } else {
		wrongGuess.push(userGuess);
		document.getElementById("wrongGuesses").textContent = wrongGuess;
		guessRemain--;
		document.getElementById("remain").textContent = guessRemain;    	
    }
};

function displayLtr(ltr) {
    for (var i = 0; i < positions.length; i++) {
        blank.charAt(i) = ltr;
        document.getElementById("blanks").textContent = blank;
    }
};



 
