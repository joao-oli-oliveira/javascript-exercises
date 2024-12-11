const reverseString = function (string) {
  const chars = string.split("");
  const revChars = chars.toReversed();
  const revString = revChars.join("");

  return revString;
};
reverseString("123 456");

const reverseString2 = function (string) {
  return string.split("").reverse().join("");
};
reverseString2("cookin");

// Do not edit below this line
module.exports = reverseString;
