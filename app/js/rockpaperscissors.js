////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
var getInput = function() {
  console.log("Please choose either 'rock', 'paper', or 'scissors'.");
  var answer = prompt();
  return answer;
};

var randomPlay = function() {
   var randomNumber = Math.random();
   if (randomNumber < 0.33) {
       return 'rock';
   } else if (randomNumber < 0.66) {
       return 'paper';
   } else {
       return 'scissors';
   }
};
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var getPlayerMove = function(move){
   // Write an expression that operates on a variable called `move`
   // If a `move` has a value, your expression should evaluate to that value.
   // However, if `move` is not specified / is null, your expression should equal `getInput()`.

   return move || getInput();
  
};

var getComputerMove = function(move) {
   // Write an expression that operates on a variable called `move`
   // If a `move` has a value, your expression should evaluate to that value.
   // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

   return move || randomPlay();
 
};

var getWinner = function(playerMove, computerMove)  {
   var winner;

   if (playerMove === 'rock' && computerMove === 'scissors') {
       winner = "Player";
  } else if (playerMove === 'scissors' && computerMove === 'paper') {
       winner = "Player";
  } else if (playerMove === 'paper' && computerMove === 'rock') {
       winner = "Player";
  } else if (computerMove === 'rock' && playerMove === 'scissors') {
       winner = "Computer";
  } else if (computerMove === 'scissors' && playerMove === 'paper') {
       winner = "Computer";
  } else if (computerMove === 'paper' && playerMove === 'rock') {
       winner = "Computer";
  } else  {
       winner = "Tie";
}

return winner;
};
getWinner();

var playerWins = 0;
var computerWins = 0;

function playToFive() {
   console.log("Let\'s play Rock, Paper, Scissors"); 


   while  (playerWins<5 && computerWins<5) {
       
   var playerMove = getPlayerMove();
   console.log("Player move is" + ' ' + playerMove);
   
   var computerMove = getComputerMove();
   console.log("Computer move is" + ' ' + computerMove);

   var winner = getWinner(playerMove, computerMove);
   console.log(winner + ' ' + "is currently in the lead");
   console.log("The score is currently" + ' ' + playerWins + ' versus ' + computerWins);
   console.log(winner + ' ' + "won this round\n"); 

  if (winner === "Player")  {
       playerWins +=1;
    
  } else if (winner === "Computer") {
       computerWins +=1;
       
  } else {
       playerWins +=0;
       computerWins +=0;
  }

 playToFive();
   }
   return [playerWins, computerWins];
}
playToFive();