// const rock = document.querySelector("#rock");
// rock.addEventListener("click", () => {
//   const playerSelection = "rock";
//   const computerSelection = computerPlay();
//   if (playerSelection === computerSelection) {
//     let tie = document.querySelector("#draws");
//     tie.textContent = ++draws;
//   } else if (playerSelection === "rock" && computerSelection === "paper") {
//     let scoreComputer = document.querySelector("#computer-score");
//     scoreComputer.textContent = ++computerScore;
//   } else {
//     let scorePlayer = document.querySelector("#player-score");
//     scorePlayer.textContent = ++playerScore;
//   }
//   winner();
//   disableButton();
// });

// const paper = document.querySelector("#paper");
// paper.addEventListener("click", () => {
//   const playerSelection = "paper";
//   const computerSelection = computerPlay();
//   if (playerSelection === computerSelection) {
//     let tie = document.querySelector("#draws");
//     tie.textContent = ++draws;
//   } else if (playerSelection === "paper" && computerSelection === "scissors") {
//     let scoreComputer = document.querySelector("#computer-score");
//     scoreComputer.textContent = ++computerScore;
//   } else {
//     let scorePlayer = document.querySelector("#player-score");
//     scorePlayer.textContent = ++playerScore;
//   }
//   winner();
//   disableButton();
// });

// const scissors = document.querySelector("#scissors");
// scissors.addEventListener("click", () => {
//   const playerSelection = "scissors";
//   const computerSelection = computerPlay();
//   if (playerSelection === computerSelection) {
//     let tie = document.querySelector("#draws");
//     tie.textContent = ++draws;
//   } else if (playerSelection === "scissors" && computerSelection === "rock") {
//     let scoreComputer = document.querySelector("#computer-score");
//     scoreComputer.textContent = ++computerScore;
//   } else {
//     let scorePlayer = document.querySelector("#player-score");
//     scorePlayer.textContent = ++playerScore;
//   }
//   winner();
//   disableButton();
// });

//Global variables
let computerScore = 0;
let playerScore = 0;
let draws = 0;
let rps = ["rock", "paper", "scissors"];

//Computer random choice
function computerPlay() {
  return rps[Math.floor(Math.random() * rps.length)];
}

function winner() {
  if (playerScore === 5) {
    finalResult.textContent = "The winner is the Player!";
  } else if (computerScore === 5) {
    finalResult.textContent = "The winner is the computer!";
  }
}
const finalResult = document.querySelector("#winner");

function disableButton() {
  if (playerScore === 5 || computerScore === 5) {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    let tie = document.querySelector("#draws");
    tie.textContent = ++draws;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    let scorePlayer = document.querySelector("#player-score");
    scorePlayer.textContent = ++playerScore;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    let scorePlayer = document.querySelector("#player-score");
    scorePlayer.textContent = ++playerScore;
  } else if (playerSelection === scissors && computerSelection === "paper") {
    let scorePlayer = document.querySelector("#player-score");
    scorePlayer.textContent = ++playerScore;
  } else {
    let scoreComputer = document.querySelector("#computer-score");
    scoreComputer.textContent = ++computerScore;
  }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  winner();
  disableButton();
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  const playerSelection = "paper";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  winner();
  disableButton();
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  const playerSelection = "scissors";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  winner();
  disableButton();
});
