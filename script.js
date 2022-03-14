const choices = ["rock", "paper", "scissors"];
let computerPlay = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const result = document.querySelector('.results');

let playRound = (player, computer) => {
  // console.log(`player = ${player}, computer = ${computer}`);
  let playerChoice = player.toLowerCase();
  let computerChoice = computer.toLowerCase();
  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return result.textContent = "You Win! Scissors beats Paper";
    } else if (computerChoice === "rock") {
      return result.textContent = "You Lose! Rock beats Scissors";
    } else {
      return result.textContent = "Tie!";
    }
  }

  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      return result.textContent = "You Lose! Paper beats Rock";
    } else if (computerChoice === "scissors") {
      return result.textContent = "You Win! Rock beats Scissors";
    } else if (computerChoice === "rock") {
      return result.textContent = "Tie!";
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return result.textContent = "You Win! Paper beats rock";
    } else if (computerChoice === "scissors") {
      return result.textContent = "You Lose! Scissors beats Paper";
    } else {
      return result.textContent = "Tie!";
    }
  }
};

const btns = document.querySelectorAll(".choices");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target.classList[1]);
    // console.log(e)
    console.log(e);
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
