const palindromes = function (string) {
  return (
    string
      .toLowerCase()
      .split("")
      .filter((char) => /[a-zA-Z0-9]/.test(char))
      .reverse()
      .toString() ===
    string
      .toLowerCase()
      .split("")
      .filter((char) => /[a-zA-Z0-9]/.test(char))
      .toString()
  );
};

// Do not edit below this line
module.exports = palindromes;
