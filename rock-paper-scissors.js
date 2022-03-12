//A console-based version of the classic game Rock, Paper, Scissors


//Function to randomly select computer play
function computerPlay () {
  let randomChoice = Math.floor(Math.random() * 3);
  const playOptions = ["Rock", "Paper", "Scissors"];

  return playOptions[randomChoice];
}

//Function to prompt user for their selection

//Function to play a single round and return the winner of that round
//This should have two paramters, one for each player's move

//Function for the whole game
//Game should consist of 5 rounds
