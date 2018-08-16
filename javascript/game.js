//psuedo code for wins:
    // a counter needs to be installed
    // an if/then statement needs to be made.
    // a random letter generator needs to be made

var wins=confirm("confirm?"); //creating my var here


//psuedo code for losses:
    // a counter needs to be installed
    // an if/then statement needs to be made.

var losses=confirm("losses");  //creating my var here


//psuedocode for guesses left:
    // a loop needs to be made

var left=confirm("confirm");     //creating var
var left = i=0; i++               //i know i need i++ becuase i need to add one every time a new letter is guessed
                                //I need to use the i++ loop to end the number of guesses.

                                //if I > 6, restart?








//psuedo code for guesses made:
    // a loop needs to be made

var made=confirm("confirm");     //creating var



//practing 
function makeid() {
    var text = "";
    var possible = "acdefghijklmnopqrstuvwxyz"; //to generate a string, there has to be quotes between it. so this isnt correct.
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  console.log(makeid());