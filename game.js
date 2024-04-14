function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return 'draw';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() {
  let playerWins = 0;

  let i = 0;

  while (i < 5) {
    const playerSelection = prompt('Rock, Paper or Scissors?');
    if (playerSelection === null) {
      console.log('Game exited by user.');
      return;
    } //Anne's edit
=======
  let userName = 'human';

  userName = prompt('Hello there human! Please enter your name:');
  alert(`${userName}, welcome to my wacky ROCK PAPER SCISSORS Game!!!\n
  The instructions are very clear: you can only enter 3 choices: 'rock', 'scissors' or 'paper'!!!!\n
  If you try to enter anything else, you WILL NOT be able to play the game silly!\n
  I hope that is simple enough for you ${userName}. Now, let's see if you can beat me human!!!\n
  Get ready to be destroyed!!!!\n`);

  while (playerWins < 5) {
      const playerSelection = prompt("Rock, Paper or Scissors?");
       if (playerSelection === null) {
          console.log("Game exited by user.");
          return;
       }
    
      if (!['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())) {
          console.log("Invalid choice, the game will restart. Please select Rock, Paper, or Scissors.");
          playerWins = 0; // Resetting wins if there's an invalid choice.
          continue;
      }


    if (!['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())) {
      console.log('Invalid choice, the game will restart. Please select Rock, Paper, or Scissors.');
      playerWins = 0; // Resetting wins if there's an invalid choice.
      continue;
    }

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (result === 'win') {
      playerWins++;
      console.log(`You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}. Wins in a row: ${playerWins}`);
    } else if (result === 'lose') {
      console.log(`You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}. Starting over...`);
      playerWins = 0; // Resetting wins if the player loses.
    } else {
      console.log("It's a draw! Keep going.");
    }

    // If the player makes 5 consecutive wins.
    if (playerWins === 5) {
      console.log("Congratulations! You've defeated the AI by winning 5 times in a row!");
    }
    i++;
  }
  console.log(`Game finished. You won ${playerWins} out of 5 rounds`);
}

// Adding a call to game function to start the game when the script loads
game();
