//array of potential answers
var words= ["calf", "hatchling", "pup", "cub","chick", "kid", "kit", "fawn", "fledgling", "foal", "joey", "lamb", "guppie", "piglet", "owlet", "kitten", "larva"];
var blank = "";
var wrongGuess = [];
var guessRemain = 7;



//pick random word from array 
var answer = words[Math.floor(Math.random() * words.length)];
console.log(answer);

//create the correct number of blank spaces on screen
for (var i = 0; i < answer.length; i++) {
 		blank += "_" + "";
 	}

document.onkeyup = function(event) {

 	var userGuess = event.key;

 	//populate the blank spaces on screen
	document.getElementById("blanks").textContent = blank;

	console.log(userGuess);
	checkGuess(userGuess);

	//determines if userGuess is within answer
	function checkGuess(userGuess) {
    
    //guess within answer
    	if (answer.indexOf(userGuess) > -1) {
       		for (var i = 0; i < answer.length; i++) {
            
            //checking where the index of answer and userGuess are the same 
            	if (answer[i] === userGuess) {
            		displayLtrAt(userGuess, i);
            		endGame ();
           	 }
        }
    //guess not within answer
    	} else {
    		//push to wrongGuess array
			wrongGuess.push(userGuess);
			document.getElementById("wrongGuesses").textContent = wrongGuess;
			//subtract 1 from guesses remaining
			guessRemain--;
			document.getElementById("remain").textContent = guessRemain;
			endGame ();    	
    }
};
 }

function displayLtrAt(letter, index) {
	//new variable
	var newTxt = "";
	//iterating over blank
	for (var i = 0; i < blank.length; i++) 
		
		//if position in blank and where index of answer and userGuess are the same
		//append the userGuess letter
		if (i === index) {
			newTxt += letter;

		//else keep whatever is in current position	
		} else {
			newTxt += blank[i];
		}
	blank = newTxt;

		document.getElementById("blanks").textContent = blank;
	};
	
function endGame () {
	if (guessRemain === 0 || blank.indexOf("_") === -1) {
		console.log("over");
	}
};




 
