// Gets random computer choice
function getComputerChoice() {
    let words = ['rock', 'paper', 'scissor'];
    return words[Math.floor(Math.random() * words.length)];
}

// Plays the round, then increments score based on who wins/ loses.
function playRound(playerSelection, computerSelection) {
   if (playerSelection.toLowerCase() == computerSelection) {
    computerScore++ && playerScore++;
   return "It's a draw!"
   } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You lose! Paper beats Rock." 
   } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissor") {
    computerScore++;
    return "You lose! Scissor beats Paper."
   } else if (playerSelection.toLowerCase() == "scissor" && computerSelection == "rock") {
    computerScore++;
    return "You lose! Rock beats Scissor."
   } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You win! Paper beats Rock."
   } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissor") {
    playerScore++;
    return "You win! Rock beats Paper."
   } else if (playerSelection.toLowerCase() == "scissor" && computerSelection == "paper") {
    playerScore++;
    return "You win! Scissor beats Paper."
   }
}
 
// Define scores
let playerScore = parseInt(0);
let computerScore = parseInt(0);

// Loops the rounds up until a game of five. Then declares winner.
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter rock, paper or scissor...");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));       
    }

    if (playerScore > computerScore) {
        return "Congrats! You win!";
    } else if (playerScore < computerScore) {
        return "Uh-oh, you lost!";
    } else if (playerScore = computerScore) {
        return "It's a tie!";
    }
}

// Plays the game, and reveals the score.
console.log(game());
console.log("your score = " + playerScore);
console.log("computer's score = " + computerScore);



