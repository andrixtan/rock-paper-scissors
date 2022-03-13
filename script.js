const choices = ["rock", "paper", "scissors"];
let computerPlay = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

let playRound = (player, computer) => {
  // console.log(`player = ${player}, computer = ${computer}`);
  let playerChoice = player.toLowerCase();
  let computerChoice = computer.toLowerCase();
  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You Win! Scissors beats Paper";
    } else if (computerChoice === "rock") {
      return "You Lose! Rock beats Scissors";
    } else {
      return "Tie!";
    }
  }

  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerChoice === "scissors") {
      return "You Win! Rock beats Scissors";
    } else if (computerChoice === "rock") {
      return "Tie!";
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return "You Win! Paper beats rock";
    } else if (computerChoice === "Scissors") {
      return "You Lose! Scissors beats Paper";
    } else {
      return "Tie!";
    }
  }
};

const btns = document.querySelectorAll(".choices");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target.classList[1]);
    // console.log(computerPlay())
    console.log(playRound(e.target.classList[1], computerPlay()))
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
