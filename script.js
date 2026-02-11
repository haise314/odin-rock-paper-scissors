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
        // Convert string to upper case for case sensitivity
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

console.log(getComputerChoice());
console.log(getHumanChoice());