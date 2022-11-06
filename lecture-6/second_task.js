function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

let a = ["a", 1, "a", 2, "1"];
let unique = a.filter(onlyUnique);

console.log(unique);
