const playerOptions = document.querySelectorAll(".option");
const computerOptions = ["rock", "paper", "scissors"];

const playerChoiceText = document.getElementById("player-choice");
const computerChoiceText = document.getElementById("computer-choice");
const resultText = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");

function getChoices(event) {
  const playerChoice = event.target.id;
  const computerChoice = computerOptions[Math.floor(Math.random() * 3)];

  return [playerChoice, computerChoice];
}

function displayChoices(playerChoice, computerChoice) {
  playerChoiceText.textContent = `Player chose ${playerChoice}`;
  computerChoiceText.textContent = `Computer chose ${computerChoice}`;
}

function checkWinner(playerChoice, computerChoice) {
  let playerWon = false;
  let tie = false;

  switch (playerChoice) {
    case computerChoice:
      tie = true;
      break;
    case "rock":
      playerWon = computerChoice === "scissors" ? true : false;
      break;
    case "paper":
      playerWon = computerChoice === "rock" ? true : false;
      break;
    case "scissors":
      playerWon = computerChoice === "paper" ? true : false;
      break;
  }

  if (playerWon === true) {
    resultText.textContent = "YOU WON!";
    resultText.style.color = "lime";
    playerScore++;
  } else if (tie === true) {
    resultText.textContent = "IT'S A TIE";
    resultText.style.color = "var(--color3)";
  } else {
    resultText.textContent = "YOU LOSE";
    resultText.style.color = "red";
    computerScore++;
  }
}

function updateScore() {
  playerScoreText.textContent = `Player Score: ${playerScore}`;
  computerScoreText.textContent = `Computer Score ${computerScore}`;
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
}

playerOptions.forEach((option) => {
  option.addEventListener("click", (event) => {
    const [playerChoice, computerChoice] = getChoices(event);
    displayChoices(playerChoice, computerChoice);
    checkWinner(playerChoice, computerChoice);
    updateScore();
  });
});
