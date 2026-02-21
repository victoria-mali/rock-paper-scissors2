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


/* playRound(getComputerChoice(), getHumanChoice()); */

function playGame() {
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
}

function calculateResult() {
    if (computerScore > humanScore) {
        console.log("You lost the game! The computer won.");
    } else if (computerScore < humanScore) {
        console.log("You won the game!");
    } else {
        console.log("It's a draw!");
    }
}

playGame();
calculateResult();