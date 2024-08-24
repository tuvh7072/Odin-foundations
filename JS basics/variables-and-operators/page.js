function getComputerChoice() {
        
        const choice = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * 3);
        return choice[randomIndex];

}

function getHumanChoice () {
        let choice = prompt("Please enter your choice: Rock, Paper, Scissors").toLowerCase();

        while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
                choice = prompt("Invalid choice. Please choose one of the mentioned choices")
        }

        return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
                console.log(`It's a tie! Both chose ${humanChoice}`);
        } else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper") 
        ) {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
        } else {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
        }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

console.log(`Human score: ${humanScore} vs Computer score: ${computerScore}`);

function playGame() {
        humanScore = 0;
        computerScore = 0;

        for (let i = 0; i < 5; i++) { //This limits the rounds to best of 5
                const humanSelection = getHumanChoice();
                const computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
        }

        if (humanScore > computerScore) {
                console.log("You won the game");
        } else if (humanScore < computerScore) {
                console.log("You lost the game");
        } else {
                console.log("It's a tie");
        }
}

playGame();