let userName = '';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
const userQuestion = 'Will I sit next to my best friend in Math today?';
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
  case 1:
  eightBall = 'It is certain';
  break;
  case 2:
  eightBall = 'It is decidely so';
  break;
  case 3:
  eightBall = 'Reply hazy try again';
  break;
  case 4:
  eightBall = 'Cannot predict now';
  break;
  case 5:
  eightBall = 'Do no count on it';
  break;
  case 6:
  eightBall = 'My sources say no';
  break;
  case 7:
  eightBall = 'Outlook not so good';
  break;
  case 8:
  eightBall = 'Signs point to yes';
  break;
  }
  console.log(eightBall);
