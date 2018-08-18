
//connect html to javascript


var losses1= document.getElementById("#losses1");
var left1= document.getElementById("#left1");
var made1= document.getElementById("#made1");


//creating my var here
var wins=0; 

//creating my var here
var losses=0;  

//creating var
var left=9;

//creating var
var made=0;   



    // a random letter array needs to be made
    var rando = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]   

    //computer needs to choose random letter
    var computerGuess = rando[Math.floor(Math.random() * rando.length)];

    //user guesses a letter
	document.onkeyup = function(event) {
        userGuess = event.key;
        console.log(userGuess);
    }

    //user guesses letter correctly--must create a loop
    if (userGuess === computerGuess) {
        wins ++;
        userGuess = 9;
        document.getElementById("#wins").textContent = wins;
    }

    //user guesses letter incorrectly
    if (userGuess != computerGuess) {
        losses ++;
        userGuess = 9;
    }

        //computer displays wins

        function displayWins() {
            var winsDisplayed = document.querySelector("#wins1");
            winsDisplayed.textcontent = wins;
        }


