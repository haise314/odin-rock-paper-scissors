const rock = 1;
const paper = 2;
const scissors = 3;

// Generate computer choice for rock, paper, scissors
// Get user input by typing either a number associated or word itself
// Compare the two inputs
// output the winner of the game

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

function getHumanChoice () {
    let humanChoice = prompt("1. Rock 2. Paper 3. Scissors? \n You can use numbers or words.");
    
    // If the human input is a String, convert it to a number
    if (typeof humanChoice === 'string' ) {
        // Convert string to upper case for case insensitivity
        humanChoice = humanChoice.toUpperCase();
        if (humanChoice === "ROCK") {
            return 1;
        } else if (humanChoice === "PAPER") {
            return 2;
        } else if (humanChoice === "SCISSORS"){    
            return 3;
        } else if (humanChoice === "1") {
            return Number(humanChoice);
        } else if (humanChoice === "2") {
            return Number(humanChoice);
        } else if (humanChoice === "3") {
            return Number(humanChoice);
        }
        else {
            alert("Invalid input");
        }
    } else {
        alert("Invalid Input");
    }
}

function playRound (humanChoice, computerChoice){
    // compare the humanChoice and computerChoice
    // check who wins
    // update the scores
    // Rock 1 Paper 2 Scissors 3
    if (humanChoice == computerChoice) {
        return "draw";
    } else if (humanChoice === 1 && computerChoice === 2){
        return "computer";
    } else if (humanChoice === 1 && computerChoice === 3) {
        return "human";
    } else if (humanChoice === 2 && computerChoice === 3) {
        return "computer";
    } else if (humanChoice === 2 && computerChoice === 1) {
        return "human";
    } else if (humanChoice === 3 && computerChoice === 1) {
        return "computer";
    } else if (humanChoice === 3 && computerChoice === 2) {
        return "human";
    } else {
        console.log("round selection winner error");
    }
}

function playGame () {
    // main looping function of the game
    // decide who wins or game over conditions
    // who wins in 5 rounds, best of three
    let humanScore = 0;
    let computerScore = 0;

    for ( let i = 0; i < 5; i++ ){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let result = playRound (humanSelection, computerSelection);
        console.log("Round "+ (i + 1) + " Winner: " + result);
        if (result === "human") {
            humanScore += 1;
        } else if (result === "computer") {
            computerScore += 1;
        } else {
            // draw scenario, nothing changes, idk.
        }
    }
    if (humanScore > computerScore){
        alert ("You win!");
        console.log ("Your Score: " + humanScore + "| " + "Computer Score: " + computerScore);
    } else {
        alert ("You lost!");
        console.log ("Your Score: " + humanScore + "| " + "Computer Score: " + computerScore);
    }
}

playGame();
