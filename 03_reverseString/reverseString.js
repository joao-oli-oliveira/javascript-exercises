const reverseString = function (string) {
  const chars = string.split("");
  const revChars = chars.toReversed();
  const revString = revChars.join("");

  return revString;

  /*
chop string
    length 

    split()     !
    substring() !!

    .slice()
reverse the order
concatenate 
    String() 

*/
};
reverseString("123 456");
// Do not edit below this line
module.exports = reverseString;
