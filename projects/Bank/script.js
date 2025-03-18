"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANK APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: {
    amounts: [200, 450, -400, 3000, -650, -130, 70, 1300],
    dates: [
      "2019-11-18T21:31:17.178Z",
      "2019-12-23T07:42:02.383Z",
      "2020-01-28T09:15:04.904Z",
      "2020-04-01T10:17:24.185Z",
      "2020-05-08T14:11:59.604Z",
      "2020-07-26T17:01:17.194Z",
      "2020-07-28T23:36:17.929Z",
      "2020-08-01T10:51:36.790Z",
    ],
  },
  interestRate: 1.2, // %
  pin: 1111,
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: {
    amounts: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    dates: [
      "2019-11-01T13:15:33.035Z",
      "2019-11-30T09:48:16.867Z",
      "2019-12-25T06:04:23.907Z",
      "2020-01-25T14:18:46.235Z",
      "2020-02-05T16:33:06.386Z",
      "2020-04-10T14:43:26.374Z",
      "2020-06-25T18:49:59.371Z",
      "2020-07-26T12:01:20.894Z",
    ],
  },
  interestRate: 1.5,
  pin: 2222,
  currency: "USD",
  locale: "en-US",
};

/* const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-06-25T18:49:59.371Z",
        "2020-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
      ],
    currency: "USD",
    locale: "en-US",
}; */

const accounts = [account1, account2 /* , account3, account4 */];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// System data
let currentAccount = null;
let sorted = false;
let currentDate = null;
const dateOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};
let nf = null;
let loginTime;
const LOGIN_TIME = 10000 * 60;

///////////////////
// User methods
function userCalcBalance(account) {
  account.balance = account.movements.amounts.reduce(
    (acc, movement) => acc + movement,
    0
  );
  return account.balance;
}

function userCalcSummary(account) {
  const incomes = account.movements.amounts.filter(movement => movement > 0);
  const income = nf.format(
    incomes.reduce((sum, movement) => sum + movement, 0)
  );
  const outcome = nf.format(
    account.movements.amounts
      .filter(movement => movement < 0)
      .reduce((sum, movement) => sum - movement, 0)
  );
  const interest = nf.format(
    incomes
      .map(income => (income * account.interestRate) / 100)
      .filter(interest => interest >= 1)
      .reduce((sum, interest) => sum + interest, 0)
  );
  return [income, outcome, interest];
}

/**
 *
 * Only be called after user is logger in and all inforemation is set up
 *
 * @param {account} account
 * @param {string} recipientUsername
 * @param {string} amount
 */
function userTransfer(account, recipientUsername, amount) {
  amount = Number(amount);
  const recipient = accounts.find(
    account => account.username === recipientUsername
  );
  if (
    recipient &&
    recipient.username !== account.username &&
    amount > 0 &&
    account.balance >= amount
  ) {
    const dateStr = new Date().toISOString();
    account.movements.amounts.push(-amount);
    account.movements.dates.push(dateStr);
    recipient.movements.amounts.push(amount);
    recipient.movements.dates.push(dateStr);
    // reset timer
    loginTime = LOGIN_TIME;
  }
}

/**
 *
 * Only be called after user is logger in and all inforemation is set up
 *
 * @param {account} account
 * @param {string} amount
 */
function userLoan(account, amount) {
  amount = Math.floor(amount);
  const incomes = account.movements.amounts.filter(movement => movement > 0);
  if (amount > 0 && incomes.some(income => income > amount * 0.1)) {
    account.movements.amounts.push(amount);
    account.movements.dates.push(new Date().toISOString());
    // reset timer
    loginTime = LOGIN_TIME;
  }
}

/**
 *
 * @param {account} account
 * @param {string} username
 * @param {string} pin
 */
function userCloseAccount(account, username, pin) {
  pin = Number(pin);
  const index = accounts.findIndex(account => account.username === username);
  if (index !== -1 && username === account.username && pin === account.pin) {
    accounts.splice(index, 1);
    return true;
  }
  return false;
}

function userSortMovements(account) {
  let sortedAmounts = account.movements.amounts
    .map((movement, i) => movement + "_" + i)
    .sort((a, b) => a.slice(0, -2) - b.slice(0, -2));
  const sortedDates = [];
  sortedAmounts.forEach(e => {
    sortedDates.push(account.movements.dates[Number(e.slice(-1))]);
  });
  sortedAmounts = sortedAmounts.map(e => Number(e.slice(0, -2)));
  console.log(sortedAmounts);
  console.log(sortedDates);
  return {
    amounts: sortedAmounts,
    dates: sortedDates,
  };
}

//////////////////////
// UI functions
function displayBalance() {
  labelBalance.textContent = nf.format(userCalcBalance(currentAccount));
}

function displaySummary() {
  [
    labelSumIn.textContent,
    labelSumOut.textContent,
    labelSumInterest.textContent,
  ] = userCalcSummary(currentAccount);
}

function displayMovements(movements = currentAccount.movements) {
  containerMovements.innerHTML = "";
  movements.amounts.forEach((movement, i) => {
    const type = movement < 0 ? "withdrawal" : "deposit";
    const date = new Date(movements.dates[i]);
    const dateStr = Intl.DateTimeFormat(currentAccount.locale).format(date);

    const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${dateStr}</div>
        <div class="movements__value">${nf.format(movement)}</div>
      </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

function transferMoney(e) {
  e.preventDefault();
  userTransfer(
    currentAccount,
    inputTransferTo.value,
    inputTransferAmount.value
  );
  inputTransferTo.value = "";
  inputTransferAmount.value = "";
  inputTransferAmount.blur();

  updateUI();
}

function requestLoan(e) {
  e.preventDefault();
  userLoan(currentAccount, inputLoanAmount.value);
  inputLoanAmount.value = "";
  inputLoanAmount.blur();

  updateUI();
}

function sortUI(e) {
  e.preventDefault();
  sorted
    ? displayMovements(undefined)
    : displayMovements(userSortMovements(currentAccount));
  sorted = !sorted;
}

function logoutUI() {
  currentAccount = null;
  sorted = false;
  nf = null;
  labelWelcome.textContent = `Log in to get started`;
  containerApp.style.opacity = 0;
}

function closeAccount(e) {
  e.preventDefault();
  const logout = userCloseAccount(
    currentAccount,
    inputCloseUsername.value,
    inputClosePin.value
  );
  inputCloseUsername.value = "";
  inputClosePin.value = "";
  if (logout) logoutUI();
}

function loginUI(e) {
  login(inputLoginUsername.value, inputLoginPin.value);
  if (currentAccount) {
    e.preventDefault();
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI();

    const tick = function () {
      labelTimer.textContent = Intl.DateTimeFormat("en-US", {
        minute: "2-digit",
        second: "2-digit",
      }).format(loginTime);
      if (loginTime === 0) {
        clearInterval(timer);
        logoutUI();
      }
      loginTime -= 1000;
    };
    // Cuz never enter into the if block so valid
    tick();
    const timer = setInterval(tick, 1000);
  }
}

function updateUI() {
  currentDate.setTime(Date.now());
  labelDate.textContent = Intl.DateTimeFormat(
    currentAccount.locale,
    dateOptions
  ).format(currentDate);
  displayBalance();
  displaySummary();
  displayMovements(undefined);
}

//////////////////////
// System methodss
function createUsernames(accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
}

/**
 * Log in function
 *
 * @param {string} username: user input
 * @param {string} pin:      user input
 *
 * currentAccount if {username} exists in the system and {pin} is correct;
 * otherwise return null
 */
function login(username, pin) {
  currentAccount = accounts.find(account => account.username === username);
  currentAccount =
    currentAccount && currentAccount.pin === Number(pin)
      ? currentAccount
      : null;
  if (currentAccount) {
    nf = new Intl.NumberFormat(currentAccount.locale, {
      style: "currency",
      currency: currentAccount.currency,
      maximumFractionDigits: 2,
    });
    loginTime = LOGIN_TIME;
  }
}

function init() {
  currentAccount = null;
  sorted = false;
  currentDate = new Date();
  nf = null;
  createUsernames(accounts);
}

init();

/////////////////////
// Event handlers
btnLogin.addEventListener("click", loginUI);
btnTransfer.addEventListener("click", transferMoney);
btnLoan.addEventListener("click", requestLoan);
btnClose.addEventListener("click", closeAccount);
btnSort.addEventListener("click", sortUI);
