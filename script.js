let computerScore = 0;
let playerScore = 0;
let draws = 0;
const rps = ["rock", "paper", "scissors"];
let tie = document.querySelector("#draws");
let scorePlayer = document.querySelector("#player-score");
let scoreComputer = document.querySelector("#computer-score");
const finalResult = document.querySelector("#winner");
const reset = document.querySelector("#reset");

const computerPlay = () => {
  return rps[Math.floor(Math.random() * rps.length)];
};

const winner = () => {
  if (playerScore === 5) {
    finalResult.textContent = "The winner is the Player!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  } else if (computerScore === 5) {
    finalResult.textContent = "The winner is the computer!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    tie.textContent = ++draws;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    scorePlayer.textContent = ++playerScore;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    scorePlayer.textContent = ++playerScore;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    scorePlayer.textContent = ++playerScore;
  } else {
    scoreComputer.textContent = ++computerScore;
  }
};

rps.forEach((playerSelection) => {
  document.getElementById(playerSelection).addEventListener("click", () => {
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    winner();
  });
});

const resetGame = () => {
  computerScore = 0;
  scoreComputer.textContent = 0;
  playerScore = 0;
  scorePlayer.textContent = 0;
  draws = 0;
  tie.textContent = 0;
  finalResult.textContent = "";
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
};

document.getElementById("reset").addEventListener("click", resetGame);
