const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number between 10 and 99 inclusive: ", function (answer) {
  let number = Number(answer);
  if (number < 9 || number > 100 || isNaN(number)) {
    console.log(
      "This program can read only numbers between 10 and 99 inclusive."
    );
  } else {
    firstPiece = number / 10;
    secondPiece = number % 10;
    console.log(parseInt(firstPiece) + " " + secondPiece);
  }
  rl.close();
});
