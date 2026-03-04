const text = document.querySelector(".text");
const results = document.querySelector(".results");
const score = document.querySelector(".score");
const startOverBtn = document.querySelector(".start-over");
const buttons = document.querySelector(".buttons");
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3) + 1;
    if (computerNumber === 1) {
        return "rock";
    } else if (computerNumber === 2) {
        return "paper";
    } else if (computerNumber === 3) {
        return "scissors";
    }
};

function playRound(computerChoice, humanChoice) {
    let message;

    if (computerChoice === humanChoice) {
        message = "It's a draw!";
    } else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
        message = `You lose! ${computerChoice} beats ${humanChoice}`;
        ++computerScore;
    } else {
        message = `You win! ${humanChoice} beats ${computerChoice}`;
        ++humanScore;
    }

    let totalScore = "Computer: " + computerScore + " Human: " + humanScore;

    results.textContent = message;
    score.textContent = totalScore;


    if ((computerScore === 5) || (humanScore === 5)) {
        if (computerScore > humanScore) {
            results.textContent = "Game over! Computer beat you!";
        } else if (computerScore < humanScore)  {
            results.textContent = "Game over! You beat computer!";
        } else if (computerScore === humanScore) {
            results.textContent = "Game over! It's a tie!";
        }
    
    score.textContent = `Total score is: ${totalScore}`;
    computerScore = 0;
    humanScore = 0;
    buttons.classList.toggle("hidden");
    startOverBtn.classList.toggle("hidden");
    }

};


btnRock.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
});

btnPaper.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
});

btnScissors.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors");
});

startOverBtn.addEventListener("click", () => {
    results.textContent = "";
    score.textContent = "";
    startOverBtn.classList.toggle("hidden");
    buttons.classList.toggle("hidden");
});




