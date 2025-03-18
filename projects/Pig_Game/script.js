"use strict";

const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");
const dice = document.querySelector(".dice");
let player1 = {
  currentScore: 0,
  totalScore: 0,
  cnt: 0,
  e: document.querySelector(".player--0"),
  e_cs: document.querySelector("#current--0"),
  e_ts: document.querySelector("#score--0"),
  e_op: document.querySelector(".player--1"),
};
let player2 = {
  currentScore: 0,
  totalScore: 0,
  cnt: 0,
  e: document.querySelector(".player--1"),
  e_cs: document.querySelector("#current--1"),
  e_ts: document.querySelector("#score--1"),
  e_op: document.querySelector(".player--0"),
};
// when turn is true player 1 play. otherwise player 2 play
let turn = true;
let win = false;

// Roll dice
function rollDice(player) {
  const roll = Math.trunc(Math.random() * 6) + 1;
  // show dice picture
  dice.classList.remove("hidden");
  dice.src = `dice-${roll}.png`;
  // Game logic
  if (player.cnt === 5 || roll === 1) {
    player.currentScore = 0;
    turn = !turn;
    player.e_op.classList.toggle("player--active");
    player.e.classList.toggle("player--active");
    player.cnt = 0;
  } else {
    player.currentScore += roll;
    player.cnt++;
  }
  player.e_cs.textContent = player.currentScore;
}

// Event handler for roll button
function roll() {
  // if game is over nothing happens
  if (win) return;

  turn ? rollDice(player1) : rollDice(player2);
}

function holdDice(player) {
  player.totalScore += player.currentScore;
  player.currentScore = 0;
  player.e_cs.textContent = 0;
  player.e_ts.textContent = player.totalScore;
  player.e_op.classList.toggle("player--active");
  player.e.classList.toggle("player--active");
}

// Event handler for hold button
function hold() {
  // If game is over nothing happens
  if (win) return;

  // Game logic
  turn ? holdDice(player1) : holdDice(player2);

  // Check winner
  if (player1.totalScore >= 100) {
    win = true;
    player1.e.classList.add("player--winner");
  } else if (player2.totalScore >= 100) {
    win = true;
    player2.e.classList.add("player--winner");
  }

  turn = !turn;
}

function resetPlayer(player) {
  player.currentScore = 0;
  player.totalScore = 0;
  player.e_cs.textContent = 0;
  player.e_ts.textContent = 0;
  player.e.classList.remove("player--winner");
}
// Event handler for new game button
function newGame() {
  resetPlayer(player1);
  resetPlayer(player2);
  player2.e.classList.remove("player--active");
  player1.e.classList.add("player--active");
  dice.classList.add("hidden");
  turn = true;
  win = false;
}

rollBtn.addEventListener("click", roll);
holdBtn.addEventListener("click", hold);
newGameBtn.addEventListener("click", newGame);

console.log(Function);