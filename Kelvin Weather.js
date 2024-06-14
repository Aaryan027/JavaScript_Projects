// The forecast today is 293 Kelvin.
const kelvin = 273;
// Celsius is 273 less than kelvin.
const celsius = kelvin - 273;
// Fahrenheit is equal to Celsius * (9/5) + 32.
var fahrenheit = celsius * (9/5) + 32;
// When you convert from Celsius to Fahrenheit, you often get a decimal number. So to round down the fahrenheit temperature we used .floor method.
Math.floor(fahrenheit);
console.log(`The temprature is ${fahrenheit} degrees fahrenheit.`);
