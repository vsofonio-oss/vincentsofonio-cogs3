var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; 
balance = 0; 

var die1Image = new Image();
var die2Image = new Image();

function rollDice() {
  die1 = Math.floor(Math.random() * 6) + 1;
  die2 = Math.floor(Math.random() * 6) + 1;
  dieSum = die1 + die2;

  die1Image = document.querySelectorAll("img")[0];
  die1Name = "images/dice" + die1 + ".png";
  die1Image.setAttribute("src", die1Name);

  die2Image = document.querySelectorAll("img")[1];
  die2Name = "images/dice" + die2 + ".png";
  die2Image.setAttribute("src", die2Name);
}

function whoWon() {
  if (dieSum <= 5) {
    outcome = "You lose, please pay me " + 5 + " dollars.";
    balance -= 5;
  } else if (dieSum >= 9) {
    outcome = "You win, I pay you " + 5 + " dollars.";
    balance += 5;
  } else {
    outcome = "It's a draw, nobody wins or loses.";
  }

 
  banner = die1 + " + " + die2 + " = " + dieSum;
  document.querySelector("h3").innerHTML =
    banner +
    "<br>" +
    outcome +
    "<br>Current balance after this roll: $" +
    balance;
}

function letsPlay() {
  var input = prompt("How many times do you want to play?", "1");
  numRolls = parseInt(input);

  if (isNaN(numRolls) || numRolls <= 0) {
    alert("Please enter a positive number of plays.");
    return;
  }

 
  balance = 0;


  for (var i = 0; i < numRolls; i++) {
    rollDice();
    whoWon();
  }

  var finalMsg = "";

  if (balance > 0) {
  finalMsg =
    "After " +
    numRolls +
    " plays, I owe you $" +
    balance + ".";
} else if (balance < 0) {
  finalMsg =
    "After " +
    numRolls +
    " plays, you owe me $" +
    Math.abs(balance) + ".";
} else {
  finalMsg =
    "After " + numRolls + " plays, we're even. Nobody owes anything!";
}



  document.querySelector("h3").innerHTML += "<br><br>" + finalMsg;
}
