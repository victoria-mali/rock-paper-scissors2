let computerChoice;
let humanChoice;

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3) + 1;
    if (computerNumber === 1) {
        computerChoice = "Rock";
    } else if (computerNumber === 2) {
        computerChoice = "Paper";
    } else if (computerNumber === 3) {
        computerChoice = "Scissors";
    }
}


function getHumanChoice() {
    humanChoice = prompt("Type Rock, Paper or Scissors");
}


/* let computerScore = 0;
let humanScore = 0; */

function playRound(computerChoice, humanChoice) {
    if (computerChoice === "Rock" && humanChoice === "Scissors") {
        console.log("You lose! Rock beats Scissors!");
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        console.log("You lose! Paper beats Rock!");
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        console.log("You lose! Scissors beat Paper!");
    } else {
        console.log("wrong");
    }
}

getComputerChoice();
getHumanChoice();
playRound();
console.log(computerChoice);
console.log(humanChoice);