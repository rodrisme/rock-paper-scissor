//Global variables
let computerScore = 0;
let playerScore = 0;
let draws = 0;
let rps = ["rock", "paper", "scissors"];

//Computer random choice
function computerPlay() {
  return rps[Math.floor(Math.random() * rps.length)];
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    let tie = document.querySelector("#draws");
    tie.innerHTML = draws++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    let scoreComputer = document.querySelector("#computer-score");
    scoreComputer.innerHTML = computerScore++;
  } else {
    let scorePlayer = document.querySelector("#player-score");
    scorePlayer.innerHTML = playerScore++;
  }
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  const playerSelection = "paper";
  const computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    let tie = document.querySelector("#draws");
    tie.innerHTML = draws++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    let scoreComputer = document.querySelector("#computer-score");
    scoreComputer.innerHTML = computerScore++;
  } else {
    let scorePlayer = document.querySelector("#player-score");
    scorePlayer.innerHTML = playerScore++;
  }
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  const playerSelection = "scissors";
  const computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    let tie = document.querySelector("#draws");
    tie.innerHTML = draws++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    let scoreComputer = document.querySelector("#computer-score");
    scoreComputer.innerHTML = computerScore++;
  } else {
    let scorePlayer = document.querySelector("#player-score");
    scorePlayer.innerHTML = playerScore++;
  }
});
