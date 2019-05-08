let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];

function randomFrom(array) {
  return array[(Math.floor(Math.random()*3))];
}


function checkInput(input, computerChoices) {
  if (input === "quit") {
    return true;
  }

  let computerChoice = randomFrom(computerChoices);
  console.log("Computer's choice", computerChoice);
  console.log("Player's choice", input);

  if(computerChoice === "rock" && input === "scissors"){
    alert("Computer wins!");
    console.log("Computer wins!")
    return false;
  } else if (computerChoice === "scissors" && input === "paper"){
    alert("Computer wins!");
    console.log("Computer wins!")
    return false;
  } else if (computerChoice === "paper" && input === "rock"){
    alert("Computer wins!");
    console.log("Computer wins!")
    return false;
  } else if(computerChoice === "scissors" && input === "rock"){
    alert("Player wins!");
    console.log("Player wins!")
    return false;
  } else if (computerChoice === "paper" && input === "scissors"){
    alert("Player wins!");
    console.log("Player wins!")
    return false;
  } else if (computerChoice === "rock" && input === "paper"){
    alert("Player wins!");
    console.log("Player wins!")
    return false;
  }else if(computerChoice === "scissors" && input === "scissors"){
    alert("DRAW");
    console.log("DRAW")
    return false;
  } else if (computerChoice === "paper" && input === "paper"){
    alert("DRAW");
    console.log("DRAW")
    return false;
  } else if (computerChoice === "rock" && input === "rock"){
    alert("DRAW");
    console.log("DRAW")
    return false;
  }else{
    alert("INPUT ROCK, PAPER OR SCISSORS");
    console.log("INPUT ROCK, PAPER, OR SCISSORS")
    return false;
  }
  //TODO REVISIT
  alert("Player wins");
  console.log("Player wins");
  return false;
}

function start(gameOver, computerChoices) {
  while (!gameOver){
    let playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
    playerInput = playerInput.toLowerCase();
    gameOver = checkInput(playerInput, computerChoices);
  }
}



start(gameOver, computerChoices)

//Each choice will yield 3 results (Player Wins!, Computer Wins!, and DRAW successfully. The forth choice will happen if you don't enter anything or enter anything else but the three choices)
