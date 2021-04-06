'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  //   No guess at all
  if (!guess) {
    displayMessage(`⛔ No Number!`);

    // Correct guess
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number🎉`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too High! 📈` : `Too Low! 📉`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`You lost the game! 💣`);
      document.querySelector('.score').textContent = 0;
    }
  }
  /*  // Guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too High! 📈`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game! 💣`;
      document.querySelector('.score').textContent = 0;
    }

    // Guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too Low! 📉`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game! 💣`;
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

// Reset button
document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.number`).style.width = `15rem`;
  displayMessage(`Start guessing...`);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector(`.guess`).value = ``;
});
