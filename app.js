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
    updateScore();
    resultMessage =
      "You win! " + playerSelection + " beats " + computerSelection;
    // Open the victory page
    document.querySelector(".home").style.display = "none";
    document.querySelector(".winwin").style.display = "block";
    document.querySelector(".rulesButton").style.display = "none";
  } else if (playerSelection === computerSelection) {
    // It's a tie
    resultMessage = "It's a tie!";
  } else {
    // Computer wins
    compScore++;
    updateScore();
    resultMessage =
      "You lose! " + computerSelection + " beats " + playerSelection;
  }

  //   alert(resultMessage);
}

// Function to handle when the user selects rock
document.querySelector(".blue").addEventListener("click", function () {
  const playerSelection = "rock";
  const result = playRound(playerSelection);
  //   alert(result);
});

// Function to handle when the user selects scissors
document.querySelector(".pink").addEventListener("click", function () {
  const playerSelection = "scissors";
  const result = playRound(playerSelection);
  //   alert(result);
});

// Function to handle when the user selects paper
document.querySelector(".paperDiv").addEventListener("click", function () {
  const playerSelection = "paper";
  const result = playRound(playerSelection);
  //   alert(result);
});

// Function to randomly select computer's choice
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to restore scores from local storage when the page loads
window.addEventListener("DOMContentLoaded", () => {
  updateScore();
});

// play again button

document.querySelector(".youWinButton").addEventListener("click", function () {
  document.querySelector(".winwin").style.display = "none";
  document.querySelector(".home").style.display = "flex";
  document.querySelector(".rulesButton").style.display = "block";
});

document
  .querySelector(".rulesButtonNextRules")
  .addEventListener("click", function () {
    document.querySelector(".notice").classList.add("visible");
    document.querySelector(".winwin").style.display = "none";
    document.querySelector(".home").style.display = "flex";
  });
