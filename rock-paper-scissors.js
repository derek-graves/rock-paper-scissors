//A console-based version of the classic game Rock, Paper, Scissors

const startupMessage = "The computer challenges you to a game of Rock, Paper, Scissors! First to 5 wins!";
alert(startupMessage);

//Function to randomly select computer play
function computerPlay () {
  let randomChoice = Math.floor(Math.random() * 3);
  const playOptions = ["rock", "paper", "scissors"];

  return playOptions[randomChoice];
}

//Function to play a single round and return the winner of that round
function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let message;
  let output;

  if (playerSelection === computerSelection) {
    message = "It's a tie!";
    output = null;
  } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1);
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.substring(1);
    message = `${playerSelection} beats ${computerSelection}. You won the round!`;
    output = true;
  } else {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1);
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.substring(1);
    message = `${computerSelection} beats ${playerSelection}. You lost the round!`;
    output = false;
  }

  //console.log(message)
  const statusMessage = document.querySelector('.message');
  statusMessage.textContent = message;

  return output;
}

//Function for the whole game
function game () {
  const playerMovePrompt = "Your move. You may choose rock, paper, or scissors.";
  console.log("Welcome to Rock, Paper, Scissors! You'll be playing against the computer in a five-round format.\n")
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playerMove = prompt(playerMovePrompt);
    roundResult = playRound(playerMove, computerPlay());
    if (!(roundResult == null)) {
      (roundResult) ? playerScore++ : computerScore++;
    }
    console.log(`The current score is    Player: ${playerScore} - Computer: ${computerScore}`)
  }

  let winnerMessage;
  if (playerScore === computerScore) {
    winnerMessage = "You're no better than a completely randomized algorithm. You're also no worse."
  } else {
    winnerMessage = (playerScore > computerScore) ? "You won! Feel good about yourself." : "You lost to a completely randomized algorithm. No judgement.";
  }
  console.log(winnerMessage)
}

function playGame () {
  let playerScore = 0;
  let computerScore = 0;
  const player = document.querySelector('#player');
  const computer = document.querySelector('#computer');
  
  const buttons = Array.from(document.querySelectorAll('button'));
  buttons.forEach(button => button.addEventListener('click', () => {
    let result = playRound(button.textContent,computerPlay());
    if (result === true) {
      playerScore++;
      player.textContent = `Player: ${playerScore}`;    
    } else if (result === false) {
      computerScore++;
      computer.textContent = `Computer: ${computerScore}`;
    }; 
    if (playerScore === 5 || computerScore === 5) {
      const winner = (playerScore > computerScore) ? "You won! Feel good about yourself." : "You lost to a completely randomized algorithm. No judgement";
      const statusMessage = document.querySelector('.message');
      statusMessage.textContent = winner;
      return;
    };
  }));
}

playGame();




