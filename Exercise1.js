// Exercise-1 Guess the number from 1-100

const secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(secretNumber);
let score = 0;

while (true) {
  let userGuess = prompt("Guess the number between 1-100");
  userGuess = Number.parseInt(userGuess);
  score++;

  if (secretNumber === userGuess) {
    alert(`Congratulations! You guessed the correct number in ${score} attempts. Your score is ${100 - score}`);
    break;
  } else if (secretNumber < userGuess) {
    alert("Nice try, but your guess is a bit too high. Give it another shot!");
  } else {
    alert("Almost there, but your guess is a bit too low. Try again!");
  }
}
