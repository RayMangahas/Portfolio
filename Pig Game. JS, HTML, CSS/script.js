'use strict';
//Selecting elements by ID
var player0Element = document.querySelector('.player--0');
var player1Element = document.querySelector('.player--1');
var score0Element = document.querySelector('#score--0');
var score1Element = document.getElementById('score--1');
var current0Element = document.getElementById('current--0');
var current1Element = document.getElementById('current--1');
var diceElement = document.querySelector('.dice');
var buttonNew = document.querySelector('.btn--new');
var buttonRoll = document.querySelector('.btn--roll');
var buttonHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//Starting conditions of game
var initialization = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};
initialization();

var switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

//when user rolls a dice
buttonRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate a random dice roll
    var dice = Math.trunc(Math.random() * 6) + 1;

    // display dice roll
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    //If player rolls a 1: if true, switch players
    if (dice !== 1) {
      // add dice score to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch players
      switchPlayer();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to player's score *    score[1] = scores[1] + currentScore;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if player's score >= 100
    if (scores[activePlayer] >= 100) {
      // Finish game
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

buttonNew.addEventListener('click', initialization);
