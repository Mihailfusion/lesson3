// 'use strict'; 
let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?"); //бюджет
    
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?"); //бюджет
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", ''); //дата
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++)  {
        let a = prompt("Введите обязательную статью расходов в этом месяце", 'вапвап'),
            b = prompt("Во сколько обойдется?", 'вапвап');
            if (a == null || b == null) {
                alert("Заполните поля");
                console.log(a),
                i--
            }
            else if (!a.match(/^\d+$/) && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50){
                console.log(a.length);
                appData.expenses[a] = b;
            } else {
                i--,
                alert("Введите статью без использования цыфр");
            }
    }
}
chooseExpenses();
function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Введите не обязательную статью расходов в этом месяце", 'вапвап'),
            b = prompt("Во сколько обойдется?", 'вапвап');
        if (a == null || b == null) {
            alert("Заполните поля");
            console.log(a),
                i--
        } else if (!a.match(/^\d+$/) && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log(a.length);
            appData.optionalExpenses[a] = b;
        } else {
            i--,
            alert("Введите статью без использования цыфр");
        }
    }
}
chooseOptExpenses();


var result;

function detectDayBudget() {

    result = (appData["budget"] / 30).toFixed(2);
    document.write("<h2> Ваш доход на один день состовляет = <u>" + result + "</u> </h2>");
}
detectDayBudget();




function detectLevel() {
    if (result < 100) {
    console.log("Минимальный уровень достатка");    
} else if (result > 100 && result < 2000) {
    console.log("Средний уровень достатка");
} else if (result > 2000 ) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка!!");
};
console.log(appData);
};
detectLevel();

function checkSavings   () {
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
} 
checkSavings();



