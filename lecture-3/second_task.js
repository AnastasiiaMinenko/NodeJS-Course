const toArabic = (romanNumber) => {
  const map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  const nums = romanNumber.split("");
  let result = 0;
  for (let i = 0; i < nums.length; i += 1) {
    const first = map[nums[i]];
    const second = map[nums[i + 1]] ?? 0;
    if (first < second) {
      result += second - first;
      i += 1;
    } else {
      result += first;
    }
  }
  return result;
};

let sum = toArabic("CCCXXXVIII") + toArabic("MXXIV"); // 1024

function toRoman(arabicNumber) {
  if (typeof arabicNumber !== "number") return false;

  var digits = String(+arabicNumber).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ],
    romanNum = "",
    i = 3;
  while (i--) romanNum = (key[+digits.pop() + i * 10] || "") + romanNum;
  return Array(+digits.join("") + 1).join("M") + romanNum;
}

console.log(toRoman(sum));
