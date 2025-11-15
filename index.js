const choices = ['rock', 'paper', 'scissors'];

const PlayerDisplay = document.getElementById('player-choice');
const ComputerDisplay = document.getElementById('computer-choice');
const ResultDisplay = document.getElementById('result');

const PlayerScoreDisplay = document.getElementById('player-score');
const ComputerScoreDisplay = document.getElementById('computer-score');
const TieScoreDisplay = document.getElementById('tie-score');

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function clearResultClasses() {
  ResultDisplay.classList.remove('win', 'lose', 'tie');
}

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  PlayerDisplay.textContent = `Player Choice: ${playerChoice}`;
  ComputerDisplay.textContent = `Computer Choice: ${computerChoice}`;

  let result = '';

  if (playerChoice === computerChoice) {
    result = "It's a Tie!";
    tieScore++;
    clearResultClasses();
    ResultDisplay.classList.add('tie');
  } else {
    switch (playerChoice) {
      case 'rock':
        if (computerChoice === 'scissors') {
          result = 'You Win!';
          playerScore++;
        } else {
          result = 'You Lose!';
          computerScore++;
        }
        break;

      case 'paper':
        if (computerChoice === 'rock') {
          result = 'You Win!';
          playerScore++;
        } else {
          result = 'You Lose!';
          computerScore++;
        }
        break;

      case 'scissors':
        if (computerChoice === 'paper') {
          result = 'You Win!';
          playerScore++;
        } else {
          result = 'You Lose!';
          computerScore++;
        }
        break;
    }

    clearResultClasses();
    if (result === 'You Win!') {
      ResultDisplay.classList.add('win');
    } else {
      ResultDisplay.classList.add('lose');
    }
  }

  PlayerScoreDisplay.textContent = playerScore;
  ComputerScoreDisplay.textContent = computerScore;
  TieScoreDisplay.textContent = tieScore;

  ResultDisplay.textContent = result;
}
