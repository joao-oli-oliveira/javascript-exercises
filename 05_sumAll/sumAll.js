function sumAll(min, max) {
  if (
    min < 0 ||
    max < 0 ||
    isNaN(min) ||
    isNaN(max) ||
    !Number.isInteger(min) ||
    !Number.isInteger(max)
  ) {
    return "ERROR";
  }
  if (max > min) {
    return Array.from(
      { length: Math.ceil(max - min + 1) },
      (_, i) => min + i
    ).reduce((acc, currVal) => acc + currVal);
  }
  if (max < min) {
    return Array.from(
      { length: Math.ceil(min - max + 1) },
      (_, i) => max + i
    ).reduce((acc, currVal) => acc + currVal);
  }
}

// Do not edit below this line
module.exports = sumAll;
