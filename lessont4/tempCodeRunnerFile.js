chooseIncome:function(){
        let items = prompt("What give you extra income? (list separated by commas)", '');

        if ((typeof(items))=== 'string' && (typeof(items)) != null && (typeof(b)) != null && items!= '') {
        console.log('done!');
            appData.income = items.split(', ');
        appData.income.push(prompt('may be more?'));
        appData.income.sort();
        }else {
            console.log("Error!!!");
        }
        appData.income.forEach(function(items, mass)){
            console.log("extra incomes:" + mass);
        }
    }   