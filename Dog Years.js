var myAge = 20;
// A variable named myAge which is set to my age as a number.
var earlyYears = 2
// A variable named earlyYears which is set to my 2 as a number. This value will change.
earlyYears *= 10.5;
var laterYears = myAge - 2;
// earlyYears and myAge variables were multiplied and subtracted respectively.
laterYears *= 4;
// laterYears was multiplied by 4 using multiplication assignment operator.
var myAgeInDogYears = earlyYears + laterYears;
// Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
var myName = 'Krish'.toLowerCase();
// Writen my name as a string, call its built-in method .toLowerCase(), and stored the result in a variable called myName. The toLowerCase method returns a string with all lowercase letters.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// Above Statement prints "My name is krish. I am 18 years old in human years which is 85 years old in dog years."
