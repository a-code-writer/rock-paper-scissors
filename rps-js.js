let playerWins = 0;
let playerLosses = 0;
let ties = 0;

//computer choice logic
let choices = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}


//logic for a single round
function playGame(playerSelection, computerSelection){
   computerSelection = getComputerChoice(); //sets parameter to randomly picked choice

   if (playerSelection === 'rock' && computerSelection === 'rock'){
    ties++;
    console.log(ties)
    return "Tie, try again";
   } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    playerLosses++;
    return "You lose, rock beats scissors";
   } else if (playerSelection === 'paper' && computerSelection === 'rock'){
    playerWins++;
    return "you win, paper beats rock";
   } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    playerWins++;
    return "You win, rock beats scissors";
   } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
    ties++;
    return "Tie, try again";
   } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    playerLosses++;
    return "You lose, scissors beats paper";
   } else if (playerSelection === 'rock' && computerSelection === 'paper'){
    playerLosses++;
    return "You lose, paper beats rock";
   } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    playerWins++;
    return "You win, scissors beats paper";
   } else if (playerSelection === 'paper' && computerSelection === 'paper'){
    ties++;
    return "Tie, try again";
   }
}


let body = document.querySelector('body');
let h1 = document.querySelector('body h1');
//create div
let newDiv = document.createElement('div');


//rock button
let rockBtn = document.createElement('button'); 
rockBtn.textContent = 'rock';


//event listener plays one round, updates scores, and displays new scores
rockBtn.addEventListener('click', function(){
    console.log(playGame('rock', getComputerChoice));
    newDiv.textContent = " Ties: " + ties + " Player Wins: " + playerWins + " ComuputerWins: " + playerLosses
    checkWinner();
});


//scissor button
let scissorBtn = document.createElement('button');
scissorBtn.textContent = 'scissor';

scissorBtn.addEventListener('click', function(){
    console.log(playGame('scissors', getComputerChoice));
    newDiv.textContent = " Ties: " + ties + " Player Wins: " + playerWins + " ComuputerWins: " + playerLosses
    checkWinner();
});


//paper button 
let paperBtn = document.createElement('button');
paperBtn.textContent = 'paper';

paperBtn.addEventListener('click', function(){
    console.log(playGame('paper', getComputerChoice));
    newDiv.textContent = " Ties: " + ties + " Player Wins: " + playerWins + " ComuputerWins: " + playerLosses
    checkWinner();
});

newDiv.textContent = " Ties: " + ties + " Player Wins: " + playerWins + " ComuputerWins: " + playerLosses


function checkWinner(){
if(ties == 5){
    alert('Tie game!');
} else if(playerWins == 5){
    alert('Player Wins!');
} else if(playerLosses == 5){
    alert('Computer Wins!');
}
}

body.appendChild(rockBtn);
body.appendChild(scissorBtn);
body.appendChild(paperBtn);
body.appendChild(newDiv);

