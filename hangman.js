var word = require("./word.js");

var inquirer = require("inquirer");

var letter = require("./letter.js");

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var chances = 10;

var underscoreVision = letter.underscoreVision;

startGame();

function startGame(){

  inquirer.prompt([
    {
      type: "confirm",
      message: "Nfl Mascot Hangman! Remember teams are plural! Hit y to start, n to quit, and enter to select each letter",
      name: "start"
    }

  ]).then(function (response) {

    if (response.start === true) {

      console.log(underscoreVision);

      console.log("\n");
      
      nextGuess();
    }
    else {
      
      return console.log("Goodbye");
    }
  });
}


function winCondition() {
  
  if (underscoreVision === (" " + letter.lettersSplit.join(" "))) {
    
    console.log("Victory!!");
    
    inquirer.prompt([
      {
        type: "confirm",
        message: "continue?",
        name: "continue"
      }
      
    ]).then(function(response2){
      
      if (response2.continue === true){
        
        console.log("Initiating new game...");
        
        console.log("\n");
        
        newGame();
      }
      else {
        
        console.log("Goodbye")
      }
    })
  }
  
  else if (chances <= 0) {
    
    console.log("Game over, all chances used!!");
    inquirer.prompt([
      {
        type: "confirm",
        message: "Quit?",
        name: "quit"
      }
    ]).then(function(response2){

      if (response2.quit === true){

        console.log("Goodbye");
      }
      else {
        console.log("Initiating new game...");

        console.log("\n");

        newGame();
      }
    })
  }
  else {
    console.log("\n");

    nextGuess();
  }
}

function nextGuess() {

  inquirer.prompt([
    {
      type: "list",
      message: "Pick a letter: ",
      choices: letters,
      name: "letterChoice"
    }
  ]).then(function (response1) {

    letters.splice(letters.indexOf(response1.letterChoice),1);

    if (letter.lettersSplit.indexOf(response1.letterChoice) > -1) {

      console.log("Correct!");


      for (var i = 0; i < letter.lettersSplit.length; i++) {

        if (response1.letterChoice === letter.lettersSplit[i]) {

          letter.wordLetters[i].makeLetter();
        }
      }
    }
    else {

      chances -= 1;

      console.log("Wrong!");

      console.log("chances left: " + chances);
    }
    underscoreVision = "";

    for (var j = 0; j < letter.wordLetters.length; j++) {

      underscoreVision = underscoreVision + " " + letter.wordLetters[j].underscore;
    }
    console.log(underscoreVision);
    winCondition();
  });
}

function newGame() {

  var randomNumber = Math.round(Math.random() * (word.creatures.length));

  var randomWord = word.creatures[randomNumber];

  targetWord = randomWord.toUpperCase();

  letter.lettersSplit = targetWord.split("");

  underscoreVision = "";

  letter.wordLetters = [];

  for (var i = 0; i < letter.lettersSplit.length; i++){

    var newLetter = new letter.Letter(letter.lettersSplit[i]);

    letter.wordLetters.push(newLetter);

    newLetter.underscoreAppend();
  }

  for (var j = 0; j < letter.wordLetters.length; j++) {
    underscoreVision = underscoreVision + " " + letter.wordLetters[j].underscore;
  }

  chances = 10;
  letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  startGame();
}