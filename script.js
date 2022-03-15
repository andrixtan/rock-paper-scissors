const choices = ["rock", "paper", "scissors"];
let computerPlay = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const result = document.querySelector(".results");

let playerScore = document.querySelector(".playerpoints");
let computerScore = document.querySelector(".computerpoints");
console.log(playerScore);

let playerSelection = document.querySelector(".player-selection");
let computerSelection = document.querySelector(".computer-selection");

let playRound = (player, computer) => {
  let playerChoice = player.toLowerCase();
  let computerChoice = computer.toLowerCase();

  if (playerChoice === "scissors") {
    playerSelection.src = "./scissors.png";
    if (computerChoice === "paper") {
      computerSelection.src = "./paper.png";
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
      if (playerScore.textContent == 5) {
        result.textContent = "End of Game. You won!";
        return (result.className = "end-results");
      } else {
        return (result.textContent = "You Win! Scissors beats Paper");
      }
    } else if (computerChoice === "rock") {
      computerSelection.src = "./rock.png";
      computerScore.textContent = parseInt(computerScore.textContent) + 1;
      if (computerScore.textContent == 5) {
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
        result.textContent = "End of Game. You lost!";
        return (result.className = "end-results");
      } else {
        return (result.textContent = "You Lose! Paper beats Rock");
      }
    } else if (computerChoice === "scissors") {
      computerSelection.src = "./scissors.png";
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
      if (playerScore.textContent == 5) {
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
        result.textContent = "End of Game. You won!";
        return (result.className = "end-results");
      } else {
        return (result.textContent = "You Win! Paper beats rock");
      }
    } else if (computerChoice === "scissors") {
      computerSelection.src = "./scissors.png";
      computerScore.textContent = parseInt(computerScore.textContent) + 1;
      if (computerScore.textContent == 5) {
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
});

// btn.addEventListener('click', (e) => {
//     console.log(e.target.classList[1])
//     // playRound(e.target.classList[1], )
// });

// let game = () => {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     playerSelection = prompt("Please input your selection", "");
//     while (choices.indexOf(playerSelection.toLowerCase()) === -1) {
//       console.log("Please provide a valid input");
//       playerSelection = prompt("Please input your selection", "");
//     }

//     let result = playRound(playerSelection, computerPlay());
//     if (result.slice(0, 7) === "You Win") {
//       playerScore++;
//     } else if (result.slice(0, 8) === "You Lose") {
//       computerScore++;
//     }
//     //   console.log(playerScore);
//     //   console.log(computerScore);
//     console.log(result);
//   }
//   console.log(`Player Score = ${playerScore}`);
//   console.log(`Computer Score = ${computerScore}`);
//   if (playerScore > computerScore) {
//     console.log("You Win!");
//   } else if (playerScore < computerScore) {
//     console.log("You Lose!");
//   } else {
//     console.log("Its a tie!");
//   }
// };

//   const playerSelection = "rock";
//   const computerSelection = computerPlay();
//   console.log(`Computer choice = ${computerSelection}`);
//   console.log(playRound(playerSelection, computerSelection));
// console.log(game());
