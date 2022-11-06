const variable = {};

const firstObject = {
  name: "Batman",
  address: {
    city: "Gotham",
  },
};
const secondObject = {
  name: "Batman",
  address: {
    city: "Gotham",
  },
};

function firstPartOfTheTask(obj) {
  return Object.keys(obj).length === 0;
}

function secondPartOfTheTask(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !secondPartOfTheTask(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
}
function isObject(object) {
  return object != null && typeof object === "object";
}

function thirdPartOfTheTask(obj1, obj2) {
  var k1 = Object.keys(obj1);
  return k1.filter(function (x) {
    return obj2[x] !== undefined;
  });
}

function fourthPartOfTheTask(obj) {
  return obj.address.city;
}

console.log(
  "The Answer For First Part Of The Task:'" +
    firstPartOfTheTask(variable) +
    "'. The Answer For Second Part Of The Task:'" +
    secondPartOfTheTask(firstObject, secondObject) +
    "'. The Answer For Third Part Of The Task:'" +
    thirdPartOfTheTask(firstObject, secondObject) +
    "'. The Answer For Fourth Part Of The Task:'" +
    fourthPartOfTheTask(secondObject) +
    "'. "
);
