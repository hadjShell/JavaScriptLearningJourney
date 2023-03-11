let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let win = false;

// Event handler for click button
function play() {
    const guess = Number(document.querySelector(".guess").value);
    // Already win the game or don't have the chance
    if (win || score === 0)
        return;

    // Input is invalid
    if (!guess) {
        document.querySelector(".message").textContent = "Please make your guess.";
        return;
    }
    if (guess < 1 || guess > 20) {
        document.querySelector(".message").textContent = "Please guess a number from 1 to 20.";
        return;
    }
    // Input is valid
    // Make it
    if (guess === secretNumber) {
        document.querySelector(".message").textContent = "You won!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        if (score > Number(document.querySelector(".highscore").textContent)) {
            document.querySelector(".highscore").textContent = score;
        }
        win = true;
    }
    else {
        document.querySelector(".score").textContent = --score;
        if (score === 0)
            document.querySelector(".message").textContent = "You lose!";
        else
            document.querySelector(".message").textContent = guess > secretNumber ? "Too big!" : "Too small!";
    }
}

// Event handler for play again button
function playAgain() {
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".score").textContent = 20;
    win = false;
}

document.querySelector(".check").addEventListener("click", play);
document.querySelector(".again").addEventListener("click", playAgain);