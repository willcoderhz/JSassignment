function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'draw';
    }
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };
    return winConditions[playerSelection] === computerSelection ? 'win' : 'lose';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() {
    let roundsPlayed = 0, wins = 0, losses = 0, draws = 0;
    let userInput = prompt('Welcome to a fateful game of Rock, Paper, Scissors against the Demon! Each choice you make affects the fate of the world. Only a victory after FIVE games will save humanity. Please enter your name to begin:');
    
    if (!userInput) {
        console.log('Game exited by user. No name entered.');
        return;
    }
    let userName = userInput.trim();
    alert(`${userName}, you are humanity's last hope. Enter 'rock', 'paper', or 'scissors' only.`);
    
    while (roundsPlayed < 5) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        if (!playerSelection) {
            console.log("Game exited by user.");
            return;
        }
        playerSelection = playerSelection.trim().toLowerCase();
        const computerSelection = computerPlay().toLowerCase();  // Lowercasing moved here

        if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
            console.log("Invalid choice, please select Rock, Paper, or Scissors.");
            continue;
        }

        const result = playRound(playerSelection, computerSelection);
        roundsPlayed++;
        result === 'win' ? wins++ : result === 'lose' ? losses++ : draws++;
        
        console.log(`Round ${roundsPlayed}: ${capitalizeFirstLetter(result)}! ${capitalizeFirstLetter(result === 'win' ? playerSelection : computerSelection)} beats ${capitalizeFirstLetter(result === 'win' ? computerSelection : playerSelection)}. After ${roundsPlayed} rounds: ${wins} Wins, ${losses} Losses, ${draws} Draws.`);
    }
    
    console.log(`This is the final round!`);
    let finalMessage = wins > losses ? `Congratulations ${userName}! You've saved the world by defeating the Demon with ${wins} wins!` : losses > wins ? `Alas ${userName}, you lost the game. The world falls to darkness. You had ${losses} losses.` : `Well played ${userName}, but the game ended in a draw. The fate of the world remains undecided.`;
    console.log(finalMessage);
}

game();
