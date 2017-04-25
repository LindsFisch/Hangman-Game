//array of potential answers
var words= ["calf", "hatchling", "pup", "cub","chick", "kid", "kit", "fawn", "fledgling", "foal", "joey", "lamb", "puggle", "piglet", "owlet", "kitten", "larva"];
var picList= ["assets/images/calf.jpg", "assets/images/hatchling.jpg", "assets/images/pup.jpg", "assets/images/cub.jpg", "assets/images/chick.jpg", "assets/images/kid.jpeg", "assets/images/kit.jpg", "assets/images/fawn.jpg","assets/images/fledgling.jpg", "assets/images/foal.jpg","assets/images/joey.jpg", "assets/images/lamb.jpg", "assets/images/puggle.jpg", "assets/images/piglet.jpg", "assets/images/owelet.jpg", "assets/images/kitten.jpg", "assets/images/larva.jpg"];
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var blank = "";
var wrongGuess = [];
var guessRemain = 7;
var answer;
var score = 0;
var dispPhoto

setUp ();

function setUp () {

//generate random number
var randomNum = Math.floor(Math.random() * words.length)

//pick random word and corresponding photo from array
	answer = words[randomNum];
	dispPhoto = picList[randomNum];

	//reset variables
	wrongGuess = [];
	guessRemain = 7;
	blank = "";

//create the correct number of blank spaces on screen
for (var i = 0; i < answer.length; i++) {
 		blank += "_" + "";
 	}
};

//when key is pressed
document.onkeyup = function(event) {

 	var userGuess = event.key;

 	//populate the blank spaces on screen
	document.getElementById("blanks").textContent = blank;
	document.getElementById("wrongGuesses").textContent = wrongGuess;
	document.getElementById("status").textContent = "Current Word:";

 	//checks that the userGuess is from a-z
 	if(alphabet.indexOf(userGuess) > -1) {
 		checkGuess(userGuess);
 	} else {
 		alert("Please choose a letter from a - z");
 	}

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
    //guess not within answer AND not already within the wrongGuess array
    	} else if (wrongGuess.indexOf(userGuess) === -1) {
    		//push to wrongGuess array
			wrongGuess.push(userGuess);
			document.getElementById("wrongGuesses").textContent = wrongGuess;
			//subtract 1 from guesses remaining
			guessRemain--;
			document.getElementById("remain").textContent = guessRemain;
			endGame ();
		} 
    }
};

//change blank spots into a correctly guessed letter
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

//determine factors for ending game	
function endGame () {
	//run out of guesses
	if (guessRemain === 0) {
		document.getElementById("status").textContent = "You lose!";
		document.getElementById("blanks").textContent = "Press key to restart";
		setUp ();

	}
	//correctly guess the word - no blanks left and guesses remain
	else if (blank.indexOf("_") === -1 && guessRemain != 0) {
		document.getElementById("status").textContent = "You win!";
		document.getElementById("blanks").textContent = "Press key to restart";
		document.getElementById("photochange").src = dispPhoto;
		score++;
		document.getElementById("wins").textContent = score;
		setUp();

	} else {

	}
};




 
