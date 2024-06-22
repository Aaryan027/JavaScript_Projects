let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
let runnerAge = 17;
if (registeredEarly === true && runnerAge>=18) {
  raceNumber += 1000;
}
if (registeredEarly === true && runnerAge>=18) {
  console.log('You will race at 9:30 am.');
}
else if (registeredEarly === false && runnerAge>=18) {
  console.log(`Late adults run at 11:00 am. Your race number is ${raceNumber}.`);
}
else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration). your race number is ${raceNumber}.`);
}
else {
  console.log('See the registeration desk please.')
}
