const leapYears = function (year) {
  if (year % 400 && 0 === year % 100) {
    return false;
  }
  if (0 === year % 400) {
    return true;
  }
  if (0 === year % 4 && year < 100) {
    return true;
  }
  if (0 === year % 4 && year % 100) {
    return true;
  }
  return false;
};

/*

    divisible by 400?
    if yes, leap year

    divisible by 4 & !100?
    if yes, leap year
    
    divisible by 100 & !400 ?
    if yes, not leap year

*/

// Do not edit below this line
module.exports = leapYears;
