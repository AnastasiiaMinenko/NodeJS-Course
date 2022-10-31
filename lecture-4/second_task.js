const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter the first number: ", (firstNum) => {
  let firstNumber = Number(firstNum);
  if (isNaN(firstNumber)) {
    console.log("This program can read only numbers.");
  } else {
    rl.question("Please enter the second number: ", (secondNum) => {
      let secondNumber = Number(secondNum);
      if (isNaN(secondNumber)) {
        console.log("This program can read only numbers.");
      } else {
        let myltiplyTwoNumbers = firstNumber * secondNumber;
        console.log("Product of two numbers: " + myltiplyTwoNumbers);
        doubleNumber(
          "Product of two numbers and double it: " + myltiplyTwoNumbers
        );
        squareNumber(
          "Product of two numbers and square it: " + myltiplyTwoNumbers
        );
        rl.close();
      }

      function doubleNumber(myltiplyTwoNumbers) {
        let resultOfDoubleSmartMyltiply = myltiplyTwoNumbers * 2;
        console.log(resultOfDoubleSmartMyltiply);
      }
      function squareNumber(myltiplyTwoNumbers) {
        let resultOfSquareSmartMyltiply = Math.pow(myltiplyTwoNumbers, 2);
        console.log(resultOfSquareSmartMyltiply);
      }
    });
  }
});
