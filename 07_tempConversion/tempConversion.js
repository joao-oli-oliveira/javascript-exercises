const convertToCelsius = function (tempF) {
  const rawTempC = ((tempF - 32) * 5) / 9;
  return Math.round(rawTempC * 10) / 10;
};
console.log(convertToCelsius(69));

const convertToFahrenheit = function (tempC) {
  const rawTempF = tempC * (9 / 5) + 32;
  return Math.round(rawTempF * 10) / 10;
};
console.log(convertToFahrenheit(51));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
