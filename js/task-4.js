'use strict'
let credits = 23580;
const pricePerDroid = 3000;
let sumPerDroid = prompt();
let totalPrice;

if (sumPerDroid === null) {
    console.log('Отменено пользователем');
}
else if (true) {
    sumPerDroid = Number(sumPerDroid);
    totalPrice = sumPerDroid * pricePerDroid;
    let payment =
        totalPrice > credits ?
        console.log('Недостаточно средств на счету')
            :
            console.log(`Вы купили ${sumPerDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
} 


