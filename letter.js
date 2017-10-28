
var word = require("./word.js");
targetWord = word.targetWord.word;

var lettersSplit = targetWord.split("");

var underscoreDisplay = "";

//constructor for each letter in the word object
function Letter(letter){
  this.letter = letter;
  this.underscore = "_";
  this.makeLetter = function(){
    this.underscore = this.letter;
  };
  this.underscoreAppend = function(){
    underscoreDisplay = underscoreDisplay + " " + this.underscore;
  }
}

var wordLetters = [];

//for loop creating an object for each letter in the word to guess
for (var i = 0; i < lettersSplit.length; i++){
  var newLetter = new Letter(lettersSplit[i]);
  wordLetters.push(newLetter);
  newLetter.underscoreAppend();
};


module.exports = {lettersSplit, wordLetters, underscoreDisplay,Letter};