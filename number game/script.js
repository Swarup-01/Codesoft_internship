let randomNumber;
let attemptsLeft = 5;
let score = 0;
let round = 1;

// Initialize the game
function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 5;
  document.getElementById(
    "game-message"
  ).textContent = `Round ${round}: Guess a number between 1 and 100.`;
  document.getElementById("guess").value = "";
  document.getElementById(
    "attempts"
  ).textContent = `Attempts left: ${attemptsLeft}`;
  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("play-again").style.display = "none";
  document.getElementById("submit-guess").style.display = "inline-block";
}

// Check user's guess
function checkGuess() {
  const userGuess = Number(document.getElementById("guess").value);
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    document.getElementById("game-message").textContent =
      "Please enter a valid number between 1 and 100.";
    return;
  }

  if (userGuess === randomNumber) {
    score += attemptsLeft;
    document.getElementById("game-message").textContent =
      "Congratulations! You guessed the number!";
    document.getElementById("play-again").style.display = "inline-block";
    document.getElementById("submit-guess").style.display = "none";
  } else {
    attemptsLeft--;
    if (attemptsLeft > 0) {
      const hint = userGuess < randomNumber ? "too low" : "too high";
      document.getElementById(
        "game-message"
      ).textContent = `Your guess is ${hint}. Try again!`;
      document.getElementById(
        "attempts"
      ).textContent = `Attempts left: ${attemptsLeft}`;
    } else {
      document.getElementById(
        "game-message"
      ).textContent = `Game Over! The correct number was ${randomNumber}.`;
      document.getElementById("play-again").style.display = "inline-block";
      document.getElementById("submit-guess").style.display = "none";
    }
  }
}

// Add event listeners
document.getElementById("submit-guess").addEventListener("click", checkGuess);
document.getElementById("play-again").addEventListener("click", () => {
  round++;
  startGame();
});

// Start the first game
startGame();
