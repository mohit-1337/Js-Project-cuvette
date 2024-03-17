// Function to show the notice with fade-in transition
function showNotice() {
  document.querySelector(".notice").classList.add("visible");
  document.querySelector(".rulesButton").style.display = "none"; // Hide the rules button
}

// Function to hide the notice with fade-out transition
function hideNotice() {
  document.querySelector(".notice").classList.remove("visible");
  document.querySelector(".rulesButton").style.display = "block"; // Show the rules button
}

// Event listener for cancel button click
document.querySelector(".cancleRed").addEventListener("click", function () {
  // Hide the notice div
  hideNotice();
});

// Event listener for rulesButton click
document.querySelector(".rulesButton").addEventListener("click", function () {
  // Show the notice div
  showNotice();
});

// Check if notice is initially visible
if (document.querySelector(".notice").style.display == "block") {
  hideNotice(); // Hide notice if it's visible initially
} else {
  showNotice(); // Show notice if it's not visible initially
}

// Initialize scores from local storage or default to 0
let compScore = parseInt(localStorage.getItem("compScore")) || 0;
let yourScore = parseInt(localStorage.getItem("yourScore")) || 0;

// Function to update the score on the page and in local storage
function updateScore() {
  document.querySelector(".compScoreNum").textContent = compScore;
  document.querySelector(".yourScoreNum").textContent = yourScore;

  // Update local storage
  localStorage.setItem("compScore", compScore);
  localStorage.setItem("yourScore", yourScore);
}

// Function to update the image inside div5 and div4ReapaetBlue based on player's selection
function updatePlayerImage(playerSelection) {
  let imgSrc = ""; // Variable to store the image source

  // Determine the image source based on player's selection
  switch (playerSelection) {
    case "rock":
      imgSrc = "./img/ROCK.png";
      break;
    case "paper":
      imgSrc = "./img/PAPER.png";
      break;
    case "scissors":
      imgSrc = "./img/SCISSORS.png";
      break;
  }

  // Update the image source inside the div5
  const userImg = document.querySelector(".userWin img");
  if (userImg) {
    userImg.src = imgSrc;
  }

  const userImg1 = document.querySelector(".userLost img");
  if (userImg1) {
    userImg1.src = imgSrc;
  }

  const userImg2 = document.querySelector(".userTie img");
  if (userImg2) {
    userImg2.src = imgSrc;
  }
}

// Function to randomly select computer's choice
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to update the image inside div4Reapaet based on computer's selection
function updateComputerImage(computerSelection, result) {
  let imgSrc = ""; 

  // Determine the image source based on computer's selection
  switch (computerSelection) {
    case "rock":
      imgSrc = "./img/ROCK.png";
      break;
    case "paper":
      imgSrc = "./img/PAPER.png";
      break;
    case "scissors":
      imgSrc = "./img/SCISSORS.png";
      break;
  }

  // Update the image source inside the div4Reapaet
  const compImg = document.querySelector(".compWin img");
  if (compImg) {
    compImg.src = imgSrc;
  }
  const compImg1 = document.querySelector(".compLost img");
  if (compImg1) {
    compImg1.src = imgSrc;
  }

  const compImg2 = document.querySelector(".compTie img");
  if (compImg2) {
    compImg2.src = imgSrc;
  }

  if (result == "win") {
    compImg.src = imgSrc; 
  } else if (result == "lost") {
    compImg1.src = imgSrc; 
  } else {
    compImg2.src = imgSrc; 
  }
}

// Function to play a round of the game
function playRound(playerSelection) {
  const computerSelection = computerPlay();
  let resultMessage = "";

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    // Player wins
    yourScore++;
    resultMessage =
      "You win! " + playerSelection + " beats " + computerSelection;
    // Update the image based on player's selection
    updatePlayerImage(playerSelection, "win");
    // Update the image based on computer's selection
    updateComputerImage(computerSelection, "lost");
  } else if (playerSelection === computerSelection) {
    // It's a tie
    resultMessage = "It's a tie!";
    // Update the image based on player's selection
    updatePlayerImage(playerSelection, "tie");
    // Update the image based on computer's selection
    updateComputerImage(computerSelection, "tie");
  } else {
    // Computer wins
    compScore++;
    resultMessage =
      "You lose! " + computerSelection + " beats " + playerSelection;
    // Update the image based on player's selection
    updatePlayerImage(playerSelection, "lost");
    // Update the image based on computer's selection
    updateComputerImage(computerSelection, "win");
  }

  // Update the score on the page
  updateScore();

  // Open the appropriate result page
  if (resultMessage.includes("win")) {
    document.querySelector(".home").style.display = "none";
    document.querySelector(".winwin").style.display = "block";
    document.querySelector(".rulesButton").style.display = "none";
  } else if (resultMessage.includes("lose")) {
    document.querySelector(".home").style.display = "none";
    document.querySelector(".lost").style.display = "block";
    document.querySelector(".rulesButton").style.display = "none";
  } else {
    document.querySelector(".home").style.display = "none";
    document.querySelector(".tie").style.display = "block";
    document.querySelector(".rulesButton").style.display = "none";
  }
}

// Event listeners for player's selections
document.querySelector(".blue").addEventListener("click", function () {
  playRound("rock");
});

document.querySelector(".pink").addEventListener("click", function () {
  playRound("scissors");
});

document.querySelector(".paperDiv").addEventListener("click", function () {
  playRound("paper");
});

// Function to restore scores from local storage when the page loads
window.addEventListener("DOMContentLoaded", () => {
  updateScore();
});

// play again button
document.querySelector(".youWinButton").addEventListener("click", function () {
  document.querySelector(".winwin").style.display = "none";
  document.querySelector(".home").style.display = "flex";
  if (document.querySelector(".notice").classList.contains("visible")) {
    document.querySelector(".rulesButton").style.display = "none";
  } else {
    document.querySelector(".rulesButton").style.display = "block";
  }
});

document.querySelector(".youLostButton").addEventListener("click", function () {
  document.querySelector(".lost").style.display = "none";
  document.querySelector(".home").style.display = "flex";
  if (document.querySelector(".notice").classList.contains("visible")) {
    document.querySelector(".rulesButton").style.display = "none";
  } else {
    document.querySelector(".rulesButton").style.display = "block";
  }
});

document
  .querySelector(".rulesButtonNextRules")
  .addEventListener("click", function () {
    document.querySelector(".winwin").style.display = "none";
    document.querySelector(".home").style.display = "flex";
    if (document.querySelector(".notice").classList.contains("visible")) {
      document.querySelector(".rulesButton").style.display = "none";
    } else {
      document.querySelector(".rulesButton").style.display = "block";
    }
  });

document
  .querySelector(".youLostRulesButtonNextRules")
  .addEventListener("click", function () {
    document.querySelector(".lost").style.display = "none";
    document.querySelector(".home").style.display = "flex";
    if (document.querySelector(".notice").classList.contains("visible")) {
      document.querySelector(".rulesButton").style.display = "none";
    } else {
      document.querySelector(".rulesButton").style.display = "block";
    }
  });

document.querySelector(".replayButton").addEventListener("click", function () {
  if (document.querySelector(".notice").classList.contains("visible")) {
    document.querySelector(".rulesButton").style.display = "none";
  } else {
    document.querySelector(".rulesButton").style.display = "block";
  }
  document.querySelector(".tie").style.display = "none";
  document.querySelector(".home").style.display = "flex";
});

document
  .querySelector(".youTieRulesButtonNextRules")
  .addEventListener("click", function () {
    if (document.querySelector(".notice").classList.contains("visible")) {
      document.querySelector(".rulesButton").style.display = "none";
    } else {
      document.querySelector(".rulesButton").style.display = "block";
    }
    document.querySelector(".lost").style.display = "none";
    document.querySelector(".home").style.display = "flex";
    
  });

document
  .querySelector(".hurrayPlayButton")
  .addEventListener("click", function () {
    document.querySelector(".hurraySection").style.display = "none";
    document.querySelector(".home").style.display = "flex";
    if (document.querySelector(".notice").classList.contains("visible")) {
      document.querySelector(".rulesButton").style.display = "none";
    } else {
      document.querySelector(".rulesButton").style.display = "block";
    }
    document.querySelector(".headSection").style.display = "block";
  });

document
  .querySelector(".hurrayRulesButton")
  .addEventListener("click", function () {
    document.querySelector(".hurraySection").style.display = "none";
    document.querySelector(".home").style.display = "flex";
    if (document.querySelector(".notice").classList.contains("visible")) {
      document.querySelector(".rulesButton").style.display = "none";
    } else {
      document.querySelector(".rulesButton").style.display = "block";
    }
    document.querySelector(".headSection").style.display = "block";
  });

document
  .querySelector(".rulesButtonNext")
  .addEventListener("click", function () {
    document.querySelector(".hurraySection").style.display = "block";
    document.querySelector(".winwin").style.display = "none";
    document.querySelector(".headSection").style.display = "none";
  });
