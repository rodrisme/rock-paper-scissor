//Global variables
let computerScore = 0;
let playerScore = 0;

// Computer random choice
function computerPlay() {
  if (Math.floor(Math.random() * 3) === 0) {
    return "rock";
  } else if (Math.floor(Math.random() * 3) === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// One round of RPS
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    console.log("You Lose! Paper beats Rocks");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    console.log("You Win! Rock beats Scissors");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("You Win! Paper beats Rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    console.log("You Lose! Scissors beats Paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    console.log("You Lose! Rock beats Scissors");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log("You Win! Scissors beats Paper");
  }
}

// Checks who is the winner
function checkWinner() {
  if (playerScore === computerScore) {
    return "It's a tie!";
  } else if (playerScore > computerScore) {
    return "Player win!";
  } else if (playerScore < computerScore) {
    return "Computer win!";
  }
}

// Play 5 rounds of RPS
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
}
game();
console.log(checkWinner());
