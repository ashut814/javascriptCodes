"use strict";

// selecting elements

const player0el = document.querySelector(".player--0");
const player1el = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");
const currnt0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

let scores , currentScore , activePlayer , playing;

const swithPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0el.classList.toggle("player--active");
  player1el.classList.toggle("player--active");
};

const init = function(){
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;  
  currnt0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0el.classList.remove('player--winner');
  player1el.classList.remove('player--winner');
  player0el.classList.add('player--active');
  player1el.classList.add('player--active');  
};
init();
// starting condition
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add("hidden");

// rolling  dice
// genrate random dice roll

buttonRoll.addEventListener("click", function () {
  if (playing) {
    // 1. genrating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2. display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //3. check for rolled if true,
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // currnt0El.textContent = currentScore;
    } else {
      // switch to next player
      swithPlayer();
    }
  }
});

// holding current score
buttonHold.addEventListener("click", function () {
  if (playing) {
    //1. add current score to active player's score

    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //document.getElementById('.score--0');
    //2. check score is >= 100

    if (scores[activePlayer] >= 20) {
      //finish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      swithPlayer();
    }
  }
  // switch to nextPlayer
});

// reseting game

buttonNew.addEventListener('click', init);
