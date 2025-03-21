"use strict";

/* // Challenge 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiMark > bmiJohn);

// Challenge 2
if (bmiMark > bmiJohn)
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
else if (bmiMark < bmiJohn)
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
else console.log("Equal!"); */

/* // Challenge 4
const bill = 275;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`); */

/* // Challenge 5
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgD = calcAverage(85, 54, 41);
const avgK = calcAverage(23, 34, 27);

function checkWinner(avgA, avgB, teamA, teamB) {
  if (avgA / 2 >= avgB) return console.log(`${teamA} wins!`);
  if (avgB / 2 >= avgA) return console.log(`${teamB} wins!`);
  return console.log("No team wins.");
}

checkWinner(avgD, avgK, "Dolphins", "Koalas"); */

/* // challenge 6
function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [];
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
}
console.log(tips); */

/* // challenge 7
const mark = {
    name: "Mark",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    name: "John",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi)
    console.log(`${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s (${john.bmi})!`);
else if (mark.bmi < john.bmi)
    console.log(`${john.name}'s BMI (${john.bmi}) is higher than ${mark.name}'s (${mark.bmi})!`);
else
    console.log("Equal!"); */

/* // Challenge 8 (with the context of challenge 6)
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(tips)); */

/* // Challenge 9, 10
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;
const [gk, ...fieldPlayers] = player1;
const allPlayers = [...player1, ...player2];
const player1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
let { team1, x: draw, team2 } = game.odds;

function printGoals(...names) {
  if (names.length === 0) {
    console.log("No goals were made in this match.");
  } else {
    const str = names
      .reduce((acc, curr) => {
        if (!acc.includes(curr)) acc.push(curr);
        return acc;
      }, [])
      .join();

    console.log(
      `${names.length} were made in this match. The goalers were: ${str}`
    );
  }
}

function whoWillBeTheWinner() {
  let winner = "";
  winner = team1 < team2 && "team1";
  winner ||= "team2";
  console.log(winner);
}

console.log(player1);
console.log(player2);
console.log(gk);
console.log(fieldPlayers);
console.log(allPlayers);
console.log(player1Final);
console.log(team1, draw, team2);
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);
whoWillBeTheWinner();

/////////////////////////////////////////////////////
for (const [num, name] of game.scored.entries())
  console.log(`Goal ${num + 1}: ${name}`);

let sumOdd = 0;
for (const odd of Object.values(game.odds)) {
  sumOdd += odd;
}
console.log(sumOdd / 3);

for (const [team, odd] of Object.entries(game.odds)) {
  const str = game[team] ? "victory " + game[team] : "draw";
  console.log(`Odd of ${str}: ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers); */

/* // Challenge 11
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);
const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
gameEvents.forEach((v, k) => {
  const half = k <= 45 ? "[FIRST HALF]" : "[SECOND HALF]";
  console.log(`${half}${k}: ${v}`);
}); */

/* // Challenge 12
function underscoreToCamelcase(...names) {
  const newNames = [];
  let i = 1;
  for (let name of names) {
    const words = name.toLowerCase().trim().split("_");
    words[1] = words[1].replace(words[1][0], words[1][0].toUpperCase());
    name = `${words.join("").padEnd(20, " ")}${"✅".repeat(i++)}`;
    newNames.push(name);
  }
  return newNames;
}

const names = [
  "underscore_case",
  "first_name",
  "Some_Variable ",
  " calculate_AGE",
  "delayed_departure",
];
const newNames = underscoreToCamelcase(...names);
for (const name of newNames) console.log(name); */

/* // Challenge 13
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25\
+_Arrival;bru0943384722;fao93766109;11:45\
+_Delayed_Arrival;hel7439299980;fao93766109;12:05\
+_Departure;fao93766109;lis2323639855;12:30";

function mkRightStr(str) {
  let [state, start, arrival, time] = str.split(";");
  // make state string
  state = state.replaceAll("_", " ").trim();
  if (state.includes("Delayed")) state = "🛑 " + state;
  // make start and arrival string
  start = start.slice(0, 3).toUpperCase();
  arrival = arrival.slice(0, 3).toUpperCase();
  // make time
  time = time.replace(":", "h");
  return `${state} from ${start} to ${arrival} ${time}`.padStart(45, " ");
}

const strArr = flights.split("+");
for (const flight of strArr) {
  console.log(mkRightStr(flight));
} */

/* // Challenge 14
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  register() {
    const option = Number(
      prompt(`${this.question}\n${this.options.join(" \n")}`)
    );
    switch (option) {
      case 0:
      case 1:
      case 2:
      case 3:
        this.answers[option]++;
        break;
      default:
        break;
    }
    this.displayResults();
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    } else {
      console.log("Please select a correct type.");
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.register.bind(poll));
poll.displayResults.call({ answers: [5, 2, 3] }, "string"); */

/* // Challenge 15
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

function check(e, i) {
  if (e >= 3) {
    console.log(`Dog number ${i + 1} is an adult, and is ${e} years old`);
  } else console.log(`Dog number ${i + 1} is still a puppy`);
}

function checkDogs(dogs1, dogs2) {
  const copyDogs1 = dogs1.slice(1, -2);
  copyDogs1.forEach(check);
  dogs2.forEach(check);
}

checkDogs(dogsJulia, dogsKate);

// Challenge 16, 17
function calcAverageHumanAge(dogs) {
  return dogs
    .map(age => (age <= 2 ? 2 * age : 16 + 4 * age))
    .filter(age => age >= 18)
    .reduce((avg, age, _, arr) => avg + age / arr.length, 0);
}

const ages = [16, 6, 10, 5, 6, 1, 4];
console.log(calcAverageHumanAge(ages));
console.log(calcAverageHumanAge.toString()); */

/* // Challenge 18
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
dogs.forEach(dog => (dog.rcmdFood = dog.weight ** 0.75 * 28));

function muchOrLittle(dog) {
  if (dog.curFood > dog.rcmdFood) return "Eating too much!";
  else if (dog.curFood < dog.rcmdFood) return "Eating too little!";
  else return "Perfect!";
}
function okay(dog) {
  return dog.curFood >= 0.9 * dog.rcmdFood && dog.curFood <= 1.1 * dog.rcmdFood;
}

console.log(
  "Sarah's dog: " + muchOrLittle(dogs.find(dog => dog.owners.includes("Sarah")))
);

const ownersEatTooMuch = dogs.reduce(
  (ownersEatTooMuch, dog) =>
    dog.curFood > dog.rcmdFood
      ? ownersEatTooMuch.concat(dog.owners)
      : ownersEatTooMuch,
  []
);
const ownersEatTooLittle = dogs.reduce(
  (ownersEatTooLittle, dog) =>
    dog.curFood < dog.rcmdFood
      ? ownersEatTooLittle.concat(dog.owners)
      : ownersEatTooLittle,
  []
);
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!
${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

console.log(dogs.some(dog => muchOrLittle(dog) === "Perfect!"));
console.log(dogs.some(okay));

const okayDogs = dogs.reduce((okayDogs, dog) => {
  if (okay(dog)) okayDogs.push(dog);
  return okayDogs;
}, []);
console.log(okayDogs);

const dogsCopy = [...dogs];
dogsCopy.sort((a, b) => a.rcmdFood - b.rcmdFood);
console.log(dogsCopy); */

/* // // Challenge 19
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.acc = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}`);
};

const bmw = new Car("BMW", 120);
const benz = new Car("Benz", 120);
bmw.acc();
benz.brake();

// Challenge 20
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.acc = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}, with a charge of ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 120, 100);
tesla.acc();
tesla.brake();
tesla.chargeBattery(90);
tesla.acc();
*/

/* // Challenge 21
function whereAmI(lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`Something went wrong! ${response.state}`);
      return response.json();
    })
    .then(data => console.log(`You are in ${data.city}, ${data.countryName}`))
    .catch(err => console.error(`${err}`));
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

// Promisify geolocation
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    //const pos = await getPosition();
    const { latitude: lat, longitude: lng } = [52, -1];
    // Reverse geocoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
    );
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();
    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } catch (err) {
    // Reject promise returned from async function
    throw err;
  }
};
console.log("1: Will get location");
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

// More async way
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log("3: Finished getting location");
})();
*/

const arr = [1, 2, 3];

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

async function AJAX(url) {
  const response = await fetch(url, {
    method: "GET",
  });
  if (!response.ok) throw new Error(`${data.message} (${response.status})`);
  const data = await response.json();
  return data.features[0].properties;
}

async function whereAmI() {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lon } = pos.coords;
    const data = await AJAX(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=6036bcfca350451986ef64ecff3aaef8`
    );
    console.log(data);
    arr.forEach(e => console.log(e));
    console.log(`You are in ${data.name}, ${data.country}`);
  } catch (err) {
    console.log(err);
  }
}

await whereAmI();
