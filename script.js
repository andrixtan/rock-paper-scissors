const choices = ["rock", "paper", "scissors"];
let computerPlay = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const result = document.querySelector(".results");

let playerScore = document.querySelector(".playerpoints");
let computerScore = document.querySelector(".computerpoints");
let playerSelection = document.querySelector(".player-selection");
let computerSelection = document.querySelector(".computer-selection");
let restartDiv = document.querySelector(".restart");

let restartGame = () => {
  restartButton = document.createElement("button");
  restartButton.innerText = "Restart";
  restartButton.className = "restart-btn";
  restartButton.onclick = function () {
    result.textContent = "";
    result.className = "results";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    computerSelection.src = "./blank.png";
    playerSelection.src = "./blank.png";
    let removeButton = document.querySelector(".restart-btn");
    removeButton.parentElement.removeChild(removeButton);
  };
  restartDiv.appendChild(restartButton);
};

let playRound = (player, computer) => {
  let playerChoice = player.toLowerCase();
  let computerChoice = computer.toLowerCase();

  if (playerChoice === "scissors") {
    playerSelection.src = "./scissors.png";
    if (computerChoice === "paper") {
      computerSelection.src = "./paper.png";
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
      if (playerScore.textContent == 5) {
        restartGame();
        result.textContent = "End of Game. You won!";
        return (result.className = "end-results");
      } else {
        return (result.textContent = "You Win! Scissors beats Paper");
      }
    } else if (computerChoice === "rock") {
      computerSelection.src = "./rock.png";
      computerScore.textContent = parseInt(computerScore.textContent) + 1;
      if (computerScore.textContent == 5) {
        restartGame();
        result.textContent = "End of Game. You lost!";
        return (result.className = "end-results");
      } else {
        return (result.textContent = "You Lose! Rock beats Scissors");
      }
    } else if (computerChoice === "scissors") {
      computerSelection.src = "./scissors.png";
      return (result.textContent = "Tie!");
    }
  }

  if (playerChoice === "rock") {
    playerSelection.src = "./rock.png";
    if (computerChoice === "paper") {
      computerSelection.src = "./paper.png";
      computerScore.textContent = parseInt(computerScore.textContent) + 1;
      if (computerScore.textContent == 5) {
        restartGame();
        result.textContent = "End of Game. You lost!";
        return (result.className = "end-results");
      } else {
        return (result.textContent = "You Lose! Paper beats Rock");
      }
    } else if (computerChoice === "scissors") {
      computerSelection.src = "./scissors.png";
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
      if (playerScore.textContent == 5) {
        restartGame();
        result.textContent = "End of Game. You won!";
        return (result.className = "end-results");
      } else {
        return (result.textContent = "You Win! Rock beats Scissors");
      }
    } else if (computerChoice === "rock") {
      computerSelection.src = "./rock.png";
      return (result.textContent = "Tie!");
    }
  }

  if (playerChoice === "paper") {
    playerSelection.src = "./paper.png";
    if (computerChoice === "rock") {
      computerSelection.src = "./rock.png";
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
      if (playerScore.textContent == 5) {
        restartGame();
        result.textContent = "End of Game. You won!";
        return (result.className = "end-results");
      } else {
        return (result.textContent = "You Win! Paper beats rock");
      }
    } else if (computerChoice === "scissors") {
      computerSelection.src = "./scissors.png";
      computerScore.textContent = parseInt(computerScore.textContent) + 1;
      if (computerScore.textContent == 5) {
        restartGame();
        result.textContent = "End of Game. You lost!";
        return (result.className = "end-results");
      } else {
        return (result.textContent = "You Lose! Scissors beats Paper");
      }
    } else {
      computerSelection.src = "./paper.png";
      return (result.textContent = "Tie!");
    }
  }
};

const btns = document.querySelectorAll(".choices");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playRound(e.target.alt, computerPlay());
  });
})
