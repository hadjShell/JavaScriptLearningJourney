'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANK APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// User methods
function userCalcBalance(account) {
    account.balance = account.movements.reduce((acc, movement) => acc + movement, 0);
}

function userCalcSummary(account) {
    const incomes = account.movements
        .filter(movement => movement > 0);
    const income = incomes
        .reduce((sum, movement) => sum + movement, 0);
    const outcome = account.movements
        .filter(movement => movement < 0)
        .reduce((sum, movement) => sum - movement, 0);
    const interest = incomes
        .map(income => income * account.interestRate / 100)
        .filter(interest => interest >= 1)
        .reduce((sum, interest) => sum + interest, 0);
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
    const recipient = accounts.find(account => account.username === recipientUsername);
    if (recipient && recipient.username !== account.username && amount > 0 && account.balance >= amount) {
        account.movements.push(-amount);
        recipient.movements.push(amount);
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
    amount = Number(amount);
    const incomes = account.movements
        .filter(movement => movement > 0);
    if (amount > 0 && incomes.some(income => income > amount * 0.1))
        account.movements.push(amount);
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
    if (index !== -1 && username === account.username && pin === account.pin)
        account.splice(index, 1);
}

function userSortMovements(account) {
    return account.movements
        .slice()
        .sort((a, b) => a - b);
}

// UI functions
function displayBalance(account) { }

function displaySummary(account) { }

function displayMovements(account) { }

function transferMoney(account, inputUsername, inputAmount) { }

function requestLoan(account, inputAmount) { }

function closeAccount(account, inputUsername, inputPin) { }

function sort() { }

function logout() { }

function displayUI(account) {
    labelWelcome.textContent = `Welcome back, ${account.owner.split(" ")[0]}`;
    containerApp.style.opacity = 100;
    inputLoginUsername.textContent = "";
    inputLoginPin.textContent = "";
    inputLoginPin.blur();

    updateUI(account);
}

function updateUI(account) {
    userCalcBalance(account);
    userCalcSummary(account);
    displayBalance(account);
    displaySummary(account);
    displayMovements(account);
}

// Event handlers

// System
// System data
let currentAccount = null;
let sorted = false;

// System functions
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
    * @return currentAccount if {username} exists in the system and {pin} is correct; 
    *         otherwise return null
 */
function userLogin(username, pin) {
    currentAccount = accounts.find(account => account.username === username);
    currentAccount = currentAccount && currentAccount.pin === Number(pin) ? currentAccount : null;
}

function init() { }

