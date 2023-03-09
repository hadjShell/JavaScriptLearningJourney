'use strict';

/* // Challenge 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn ** 2);
console.log(bmiMark > bmiJohn); */

/* // Challenge 2
if (bmiMark > bmiJohn)
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
else if (bmiMark < bmiJohn)
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
else
    console.log("Equal!"); */

/* // Challenge 4
const bill = 275;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`); */

/* // Challenge 5
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgD = calcAverage(85, 54, 41);
const avgK = calcAverage(23, 34, 27);

function checkWinner(avgA, avgB, teamA, teamB) {
    if (avgA / 2 >= avgB)
        return console.log(`${teamA} wins!`);
    if (avgB / 2 >= avgA)
        return console.log(`${teamB} wins!`);
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

// Challenge 9
