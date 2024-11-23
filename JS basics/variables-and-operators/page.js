let humanScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", () => {
        // The follow will select your buttons through their specific IDs
        const rockButton = document.getElementById("rock");
        const paperButton = document.getElementById("paper");
        const scissorButton = document.getElementById("scissor");

        // This is added in order to show the results in the html file
        const resultsDiv = document.getElementById("results");

        rockButton.addEventListener("click", () => playRound("rock"));
        paperButton.addEventListener("click", () => playRound("paper"));
        scissorButton.addEventListener("click", () => playRound("scissor"));

        function getComputerChoice () {
                const choice = ["rock", "paper", "scissor"];
                return choice[Math.floor(Math.random() * 3)];
        }

        function HumanChoice (humanChoice) {
                const computerChoice = getComputerChoice();
                playRound(humanChoice, computerChoice);
        }

function playRound(humanChoice, computerChoice) {
        let resultMessage;

        
        if (humanChoice === computerChoice) {
                resultMessage = `It's a tie! Both chose ${humanChoice}`
        } else if (
                (humanChoice === "rock" && computerChoice === "scissor") ||
                (humanChoice === "paper" && computerChoice === "rock") || 
                (humanChoice === "scissors" && computerChoice === "paper")
        ) {
                resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
                humanScore++;
        } else {
                resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`
                computerScore++;
        }

        resultsDiv.innerHTML = `
        ${resultMessage} <br>
        Human Score: ${humanScore} <br>
        Computer Score: ${computerScore}
        `;
}});