function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3) + 1;
    if (computerNumber === 1) {
        return "rock";
    } else if (computerNumber === 2) {
        return "paper";
    } else if (computerNumber === 3) {
        return "scissors";
    }
}

let computerScore = 0;
let humanScore = 0;


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

    const results = document.querySelector(".results");
    const score = document.querySelector(".score");
    results.textContent = message;
    score.textContent = totalScore;


    if ((computerScore === 5) || (humanScore === 5)) {
        if (computerScore > humanScore) {
            results.textContent = "Game over! Computer beat you!" + ` Total score is: ${totalScore}`;
        } else if (computerScore < humanScore)  {
            results.textContent = "Game over! You beat computer!" + ` Total score is: ${totalScore}`;
        } else if (computerScore === humanScore) {
            results.textContent = "Game over! It's a tie!" + ` Total score is: ${totalScore}`;
        }
    score.textContent = "";
    computerScore = 0;
    humanScore = 0;
    }

/*     console.log(computerChoice);
    console.log(humanChoice);
    console.log(message);
    console.log(totalScore); */
}


const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

btnRock.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
});

btnPaper.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
});

btnScissors.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors");
});



 function calculateResult() {
    if (computerScore > humanScore) {
        console.log("You lost the game! The computer won.");
    } else if (computerScore < humanScore) {
        console.log("You won the game!");
    } else {
        console.log("It's a draw!");
    }
};





