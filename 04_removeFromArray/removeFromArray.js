const removeFromArray = function (array, ...search) {
  return array.filter((el) => !search.includes(el));
};

console.log(removeFromArray(["a", "ab", "c"], "a", "ab"));

// Do not edit below this line
module.exports = removeFromArray;
