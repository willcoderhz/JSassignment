function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
      return "draw";
  } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
      return "win";
  } else {
      return "lose";
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() {
  let playerWins = 0;

  while (playerWins < 5) {
      const playerSelection = prompt("Rock, Paper or Scissors?");
      if (!['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())) {
          console.log("Invalid choice, the game will restart. Please select Rock, Paper, or Scissors.");
          playerWins = 0; // Resetting wins if there's an invalid choice.
          continue;
      }

      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);

      if (result === "win") {
          playerWins++;
          console.log(`You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}. Wins in a row: ${playerWins}`);
      } else if (result === "lose") {
          console.log(`You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}. Starting over...`);
          playerWins = 0; // Resetting wins if the player loses.
      } else {
          console.log("It's a draw! Keep going.");
      }

      // If the player makes 5 consecutive wins.
      if (playerWins === 5) {
          console.log("Congratulations! You've defeated the AI by winning 5 times in a row!");
      }
  }
}

// Adding a call to game function to start the game when the script loads
game();
