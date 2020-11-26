var readlineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.green.bgGray.bold("Welcome to Harsha's Quizzz World"));
var name = readlineSync.question(chalk.green.bgGray("Whats is your Name my Friend \n"));
console.log(chalk.green.bgGray.bold("Lets Start the Quizzz ",name));

var questionSet = [
{
  question : "If Harsha could be any animal for a day, which one would it be?",
  options: ["Dolphin", "Panda-Bear", "Rabbit", "Cat"],
  answer: "Panda-Bear"
},
{
  question : "If Harsha had to eat the same food for dinner every day, what would she pick?",
  options: ["Chicken", "Pav-Bhaji", "Pizza", "Paneer"],
  answer: "Pav-Bhaji"
},
{
  question : "What is Harsha's dream job?",
  options: ["Astronaut", "Teacher", "Software-Engineer", "Freelancer"],
  answer: "Freelancer"
},
{
  question : "What is Harsha most afraid of?",
  options: ["Animals", "Insects", "People", "All Of The Above"],
  answer: "All Of The Above"
},
{
  question : "What is Harsha's favorite web show?",
  options: ["Twisted" , "Spotlight","Pyaar Lafzon Mein Kahan","Emergency Pyar"],
  answer: "Pyaar Lafzon Mein Kahan"
},
{
  question : "What is Harsha's favourite movie time snacks:",
  options: ["Popcorn N Coke", "Samosas", "Nachos","Burgers"],
  answer: "Popcorn N Coke"
},
{
  question : "What is Harsha's favourite flavour icecream?",
  options: ["Vanilla", "Chocolate", "Butter Scotch", "Pista"],
  answer: "Pista"
}
]
var score = 0;
const CORRECT_ANS_SCORE = 1;
const WRONG_ANS_SCORE = 0;

function askQuestion(questionNo, question, options, answer) {
	console.log(chalk.yellowBright.bgGray.bold("Q"+questionNo+":", question));
	var optionSelected = readlineSync.keyInSelect(options, "your answer : ");
	console.log("you selected ", options[optionSelected]);
	if(answer === options[optionSelected]) {
		console.log(chalk.yellowBright.bgGray.bold(" Correct Answer !! "));
		return CORRECT_ANS_SCORE;
	} else {
		console.log(chalk.yellowBright.bgGray.bold(" Wrong Answer !!"));
		return WRONG_ANS_SCORE;
	}
}
var finalScore= 0;

function play()
{
  for(var i=0; i<questionSet.length; i++ )
  {
    score = askQuestion(i+1,questionSet[i].question,questionSet[i].options,questionSet[i].answer)
    finalScore = finalScore+score;
    console.log("------------------------------------------------------------------------\n");
	
	
  }
  console.log("\nYour Final Score is: ", finalScore);
  console.log("\nTHANK YOU FOR PLAYING GAME!!!!\n");

}

play()




