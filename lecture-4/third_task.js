const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter the first number: ", (firstNum) => {
  let firstNumber = Number(firstNum);
  function createBase(firstNumber) {
    let addSix = 6;
    return function () {
      return addSix + firstNumber;
    };
  }

  let count = createBase(firstNumber);
  console.log(count());
  rl.close();
});
