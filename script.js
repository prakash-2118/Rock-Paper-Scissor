let score = JSON.parse(localStorage.getItem("score")) || {
    win: 0,
    lose: 0,
    tie: 0,
  };

  updateScore();
  function updateScore() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins:${score.win},Loses:${score.lose},Ties:${score.tie}.`;
  }

  function playGame(playerMove, computerMove) {
    let Result = "";
    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = "You Lose";
      } else if (computerMove === "paper") {
        result = "You Win";
      } else if (computerMove === "scissors") {
        result = "Tie";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        result = "You Win";
      } else if (computerMove === "paper") {
        result = "Tie";
      } else if (computerMove === "scissors") {
        result = "You Lose";
      }
    } else if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "Tie";
      } else if (computerMove === "paper") {
        result = "You Lose";
      } else if (computerMove === "scissors") {
        result = "You Win";
      }
    }
    if (result === "You Win") {
      score.win += 1;
    } else if (result === "You Lose") {
      score.lose += 1;
    } else if (result === "Tie") {
      score.tie += 1;
    }
    localStorage.setItem("score", JSON.stringify(score));
    updateScore();
    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(".js-moves").innerHTML = ` You 
  <img  src ="${playerMove}-emoji.png" class = "move-icon"  >
  <img  src="${computerMove}-emoji.png" class= "move-icon" >
  Computer`;
  }

  function pickComputerMove() {
    let randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "scissors";
    }
    return computerMove;
  }