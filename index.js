var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Rahul",
    score: 5,
  },

  {
    name: "Rainy",
    score: 4,
  },
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Raipur"
}, {
  question: "My favorite superhero would be? ",
  answer: "Shaktiman"
},
{
  question: "Where do I work? ",
  answer: "Davis index"
},
{

  question: "what is my favorite snack? ",
  answer: "jalebi"
},
{
  question: "what is my nickname? ",
  answer: "rikku"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Rahul?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Wow You SCORED: ", score);

  console.log("Check out the high scores, if you should be there share with me the screenshot and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();