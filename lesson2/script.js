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

for (let i = 0; i < 2; i++) {
    let a = prompt('Enter a mandatory expense item for this month', ''),
        b = prompt('How much is it?', '');

    if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a!= '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
    } else {
        alert("You entered the incorrect data, try again");
        i--;
    }
};

// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);git
appData.moneyPerDay = appData.budget / 30;

alert("Daily budget:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
console.log("minimal income");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
console.log("Average income");
} else if (appData.moneyPerDay > 2000) {
console.log("High income");
} else {
console.log("Error!!!");
};