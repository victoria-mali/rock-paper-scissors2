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



/* function playRound(computerChoice, humanChoice) {
    if (computerChoice === "Rock" && humanChoice === "Scissors") {
        console.log("You lose! Rock beats Scissors!");
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        console.log("You lose! Paper beats Rock!");
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        console.log("You lose! Scissors beat Paper!");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win! Rock beats Scissors!");
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats Rock!");
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win! Scissors beat Paper!");
    }
} */

function playRound() {
    let message;
    if (computerChoice === "Rock" && humanChoice === "Scissors") {
        message = "You lose! Rock beats Scissors!";
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        message = "You lose! Paper beats Rock!";
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        message = "You lose! Scissors beat Paper!";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        message = "You win! Rock beats Scissors!";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        message = "You win! Paper beats Rock!";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        message = "You win! Scissors beat Paper!";
    }
    alert(message);
}



playRound(getComputerChoice(), getHumanChoice());
console.log(computerChoice);
console.log(humanChoice);