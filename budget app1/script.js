'use strict'

let money = prompt('Your budget for month', ''),
    time = prompt('Insert the date in format YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses : {},
    income: [],
    savings: false
};
let monthExpenses1 = prompt('Enter a mandatory expense item for this month', '');
let howMuch1 = prompt('How much is it?', 0);
let monthExpenses2 = prompt('Enter a mandatory expense item for this month', '');
let howMuch2 = prompt('How much is it?', 0);

appData.expenses.monthExpenses1 = howMuch1;
appData.expenses.monthExpenses2 = howMuch2;

alert(appData.budget / 30);

