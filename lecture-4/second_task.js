/*const readline = require("readline");

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
        console.log(myltiplyTwoNumbers);
        doubleNumber(myltiplyTwoNumbers);
        squareNumber(myltiplyTwoNumbers);
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
});*/
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
        function multiply(firstNumber, secondNumber) {
          console.log(firstNumber * secondNumber);
        }
        multiply(firstNum, secondNumber);
        rl.question("Please enter the number for myltiplying: ", (thirdNum) => {
          let thirdNumber = Number(thirdNum);
          if (isNaN(thirdNumber)) {
            console.log("This program can read only numbers.");
          } else {
            function double(thirdNumber) {
              console.log(Math.pow(thirdNumber, 2));
              return multiply(thirdNumber, 2);
            }
            double(thirdNumber);
          }
        });
      }
    });
  }
});

/*function double(num){
  return multiply(num,2)
}*/
