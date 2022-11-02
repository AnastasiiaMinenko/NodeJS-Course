const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter the first side of square: ", (firstSide) => {
  let firstNumberSide = Number(firstSide);
  if (firstNumberSide < 1 || firstNumberSide > 1000 || isNaN(firstNumberSide)) {
    console.log(
      "This program can read only numbers between 1 and 1000 inclusive."
    );
  } else {
    rl.question("Please enter the second side of square: ", (secondSide) => {
      let secondNumberSide = Number(secondSide);
      if (
        secondNumberSide < 1 ||
        secondNumberSide > 1000 ||
        isNaN(secondNumberSide)
      ) {
        console.log(
          "This program can read only numbers between 1 and 1000 inclusive."
        );
      } else {
        perimeter(firstNumberSide, secondNumberSide);
        area(firstNumberSide, secondNumberSide);

        rl.close();
      }
      function perimeter(firstNumberSide, secondNumberSide) {
        let perimeter = 2 * (firstNumberSide + secondNumberSide);
        console.log(`The perimeter of this square is equal to ${perimeter}`);
      }
      function area(firstNumberSide, secondNumberSide) {
        let area = firstNumberSide * secondNumberSide;
        console.log(`The area of this square is equal to ${area}`);
      }
    });
  }
});
