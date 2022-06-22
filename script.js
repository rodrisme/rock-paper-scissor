let computerScore = 0;
let playerScore = 0;
let draws = 0;
const rps = ["rock", "paper", "scissors"];
const tie = document.querySelector("#draws");
const scorePlayer = document.querySelector("#player-score");
const scoreComputer = document.querySelector("#computer-score");
const finalResult = document.querySelector("#winner");
const playerChoice = document.querySelector("#player-selection");
const computerChoice = document.querySelector("#computer-selection");

const restartButton = () => {
  const buttons = document.getElementById("restart-button");
  const resetButton = document.createElement("button");
  resetButton.setAttribute("id", "reset");
  resetButton.textContent = "Restart";
  buttons.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
  resetButton.addEventListener("click", removeRestartButton);
};

const removeRestartButton = () => {
  document.getElementById("reset");
  reset.remove();
};

const computerPlay = () => {
  return rps[Math.floor(Math.random() * rps.length)];
};

const winner = () => {
  if (playerScore === 5) {
    finalResult.textContent = "The winner is the Player!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    restartButton();
  } else if (computerScore === 5) {
    finalResult.textContent = "The winner is the computer!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    restartButton();
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
    playerChoice.textContent = `Player chose ${playerSelection}`;
    let computerSelection = computerPlay();
    computerChoice.textContent = `Computer chose ${computerSelection}`;
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
  playerChoice.textContent = ``;
  computerChoice.textContent = ``;
};
