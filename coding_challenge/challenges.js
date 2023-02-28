// Challenge 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn ** 2);
console.log(bmiMark > bmiJohn);

// Challenge 2
if (bmiMark > bmiJohn)
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
else if (bmiMark < bmiJohn)
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
else
    console.log("Equal!");

// Challenge 4
const bill = 275;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);