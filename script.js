// GET COMPUTER CHOICE
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    const rock = 1;
    const paper = 2;
    const scissors = 3;
    switch (computerChoice) {
        case rock:
            return "Rock";
        case paper:
            return "Paper";
        case scissors:
            return "Scissors";
    }
}

// GEt HUMAN CHOICE
// Adds event listeners to the buttons
const buttonList = document.querySelector("#button-container");

buttonList.addEventListener("click", (e) => {
    if (e.target.classList.contains("human-input")){
        playRound(e.target.textContent);
    }
})

// implement rounds then increment a counter

const roundCount = document.querySelector("#round-count");
const computerScore = document.querySelector("#computer-score");
const humanScore = document.querySelector("#human-score");

let roundCounter = 0;
let computerScoreValue = 0;
let humanScoreValue = 0;

const humanAction = document.querySelector(".human-action");
const computerAction = document.querySelector(".computer-action");

const humanResult = document.querySelector(".human-result");
const computerResult = document.querySelector(".computer-result");


function playRound(btnClicked) {
    roundCounter++;

    if (roundCounter <= 5){
        roundCount.textContent = roundCounter;

        let computerChoice = getComputerChoice();
        let humanChoice = btnClicked;

        humanAction.textContent = humanChoice;
        computerAction.textContent = computerChoice;

        let winner = checkRoundWinner(humanChoice, computerChoice);

        if (winner === "Human"){
            humanScoreValue++;
            humanScore.textContent = humanScoreValue;
        } else if (winner === "Computer"){
            computerScoreValue++;
            computerScore.textContent = computerScoreValue;
        } else if (winner === "Draw"){
            // draw
        }
    } else {
        let humanScoreTotal = Number(humanScore.textContent);
        let computerScoreTotal = Number(computerScore.textContent);
        // End the game
        if (humanScoreTotal > computerScoreTotal) {
            humanResult.textContent = "Winner";
            computerResult.textContent = "Loser";
        } else if (computerScoreTotal > humanScoreTotal){
            humanResult.textContent = "Loser";
            computerResult.textContent = "Winner";
        } else {
            humanResult.textContent = "Draw";
            computerResult.textContent = "Draw";
        }
    }
    
}

function checkRoundWinner(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "Draw";
    } else if (humanChoice === "Rock" && computerChoice === "Paper"){
        return "Computer";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors"){
        return "Human";
    } else if (humanChoice === "Paper" && computerChoice === "Rock"){
        return "Human";
    } else if (humanChoice === "Paper" && computerChoice === "Scissors"){
        return "Computer";
    } else if (humanChoice === "Scissors" && computerChoice === "Rock"){
        return "Computer";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper"){
        return "Human";
    }
}

// when the counter reaches 5, get a winner then reset the state of the scores