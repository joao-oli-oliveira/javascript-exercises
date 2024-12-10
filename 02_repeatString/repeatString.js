const repeatString = function (string, repeats) {
  if (repeats < 0) {
    return "ERROR";
  }

  let stringMultiplied = "";
  for (let i = 0; i < repeats; i++) {
    stringMultiplied += string;
  }
  return stringMultiplied;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
