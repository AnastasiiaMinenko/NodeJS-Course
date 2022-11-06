const arrayOfNumbers = [12, 23, 11, 0, 94];

const sum = arrayOfNumbers.reduce((accumulated, currentElement) => {
  return (accumulated += currentElement);
}, 1337);

console.log(sum);
