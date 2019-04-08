'use strict';

let money, time;

function start(){
    money = prompt('Your budget for month', '');
    time = prompt('Insert the date in format YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null){
        money = prompt('Your budget for month', '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses : {},
    income: [],
    savings:true
};

function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let a = prompt('Enter a mandatory expense item for this month', ''),
            b = prompt('How much is it?', '');
    
        if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a!= '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
        } else {
            alert("You entered the incorrect data, try again");
             i = i - 1;
        }
    }
}
chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
}

alert("Daily budget:" + detectDayBudget());

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log("minimal income");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Average income");
        } else if (appData.moneyPerDay > 2000) {
        console.log("High income");
        } else {
        console.log("Error!!!");
        };
}
detectLevel();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("What summ of savings?"),
            persent = +prompt("How much interest?");

        appData.monthIncome = save/100/12*persent;
        alert("Your income per month fron savings: " + appData.monthIncome);

    }
}

checkSavings();