let computerChoice;
let humanChoice;

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3) + 1;
    if (computerNumber === 1) {
        computerChoice = "rock";
    } else if (computerNumber === 2) {
        computerChoice = "paper";
    } else if (computerNumber === 3) {
        computerChoice = "scissors";
    }
}

function getHumanChoice() {
    humanChoice = prompt("Type Rock, Paper or Scissors").toLowerCase();
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

let computerScore = 0;
let humanScore = 0;

function playRound() {
    let message;
    if (computerChoice === "rock" && humanChoice === "scissors") {
        message = "You lose! Rock beats Scissors!";
        ++computerScore;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        message = "You lose! Paper beats Rock!";
        ++computerScore;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        message = "You lose! Scissors beat Paper!";
        ++computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        message = "You win! Rock beats Scissors!";
        ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        message = "You win! Paper beats Rock!";
        ++humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        message = "You win! Scissors beat Paper!";
        ++humanScore;
    } else if (computerChoice === humanChoice) {
        message = "It's a draw!";
    }

    let totalScore = "Computer: " + computerScore + " Human: " + humanScore;

    console.log(computerChoice);
    console.log(humanChoice);
    console.log(message);
    console.log(totalScore);
}


playRound(getComputerChoice(), getHumanChoice());