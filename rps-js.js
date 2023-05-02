let playerWins = 0;
let playerLosses = 0;
let ties = 0;
let choices = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}



function playGame(playerSelection, computerSelection){

   computerSelection = getComputerChoice(); //sets parameter to randomly picked choice

   if (playerSelection === 'rock' && computerSelection === 'rock'){
    ties = ties++;
    return "Tie, try again";
   } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    playerLosses = playerLosses++;
    return "You lose, rock beats scissors";
   } else if (playerSelection === 'paper' && computerSelection === 'rock'){
    playerWins = playerWins++;
    return "you win, paper beats rock";
   } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    playerWins = playerWins++;
    return "You win, rock beats scissors";
   } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
    ties = ties++;
    return "Tie, try again";
   } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    playerLosses = playerLosses++;
    return "You lose, scissors beats paper";
   } else if (playerSelection === 'rock' && computerSelection === 'paper'){
    playerLosses = playerLosses++;
    return "You lose, paper beats rock";
   } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    playerWins = playerWins++;
    return "You win, scissors beats paper";
   } else if (playerSelection === 'paper' && computerSelection === 'paper'){
    ties = ties++;
    return "Tie, try again";
   }
}

let body = document.querySelector('body');
let h1 = document.querySelector('body h1')

let rockBtn = document.createElement('button');
rockBtn.textContent = 'rock';
rockBtn.addEventListener('click', playGame('rock', getComputerChoice));

// let scissorBtn = document.createElement('button');
// scissorBtn.addEventListener('click',playGame('scissor',getComputerChoice));
// scissorBtn.textContent = 'scissor';

// let paperBtn = document.createElement('button');
// paperBtn.addEventListener('click',playGame('paper',getComputerChoice));
// paperBtn.textContent = 'paper';

body.appendChild(rockBtn);
console.log(rockBtn)
