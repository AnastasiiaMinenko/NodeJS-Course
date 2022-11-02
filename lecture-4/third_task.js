const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter the number: ", (firstNum) => {
  let firstNumber = Number(firstNum);
  const createBase = (base) => (num) => base + num;
  let addSix = createBase(6);
  console.log(addSix(firstNumber));

  rl.close();
});
