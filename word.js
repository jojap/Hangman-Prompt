var nflMascots = ["bears", "bengals", "bills", "broncos", "browns", "buccaneers", "colts", "cardinals", "chargers", "chiefs", "cowboys", "dolphins", "eagles", "falcons", "giants", "jaguars", "jets", "lions", "packers", "panthers", "patriots", "redskins", "raiders", "rams", "ravens", "saints", "seahawks", "steelers", "texans", "titans", "vikings"];

var randomNumber = Math.round(Math.random() * (nflMascots.length));
var randomWord = nflMascots[randomNumber];


//constructor for creating an object for the user to guess
function Word(word) {
  this.word = word;
  this.wordlength = this.word.length;
};

var targetWord = new Word(randomWord.toUpperCase());

module.exports = {targetWord, Word, nflMascots};