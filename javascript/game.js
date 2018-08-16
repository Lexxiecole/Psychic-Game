

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
    var userGuess = event.key

    //user guesses letter correctly--must create a loop
    if (userGuess === computerGuess) {
        wins = ++;
        userGuess = 9;
    }

    //user guesses letter incorrectly
    if (userGuess != computerGuess) {
        losses = ++;
        userGuess = 9;
    }





//psuedo code for losses:
    // a counter needs to be installed
    // an if/then statement needs to be made.




//psuedocode for guesses left:
    // a loop needs to be made



var left = i=0; i++               //i know i need i++ becuase i need to add one every time a new letter is guessed
                                //I need to use the i++ loop to end the number of guesses.

                                //if I > 6, restart?


//psuedo code for guesses made:
    // a loop needs to be made
