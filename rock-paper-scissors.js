//A console-based version of the classic game Rock, Paper, Scissors


//Function to randomly select computer play
function computerPlay () {
  let randomChoice = Math.floor(Math.random() * 3);
  const playOptions = ["rock", "paper", "scissors"];

  return playOptions[randomChoice];
}

//Function to prompt user for their selection

//Function to play a single round and return the winner of that round
//This should have two paramters, one for each player's move
function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let output;

  if (playerSelection === computerSelection) {
    output = "It's a tie!";
  } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
    output = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    output = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  return output;
}
console.log(playRound("rock", "paper"))

//Function for the whole game
//Game should consist of 5 rounds
function game () {
  const playerSelectionPrompt = "Your move. You may choose rock, paper, or scissors.";
  console.log("Welcome to Rock, Paper, Scissors! You'll be playing against the computer in a best-of-5 format.\n");
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0, i < 5, i++) {

  }
}


