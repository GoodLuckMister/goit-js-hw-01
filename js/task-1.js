// 'use strict'
// const name = 'Генератор защитного поля';
// let price = 1000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// function slugify(title) {
  
// let result;
//     result = title.toLowerCase().split(' ').join('-');

//   return result;
 
 
  
// };
// console.log(slugify('Массивы для новичков'));

// function findLongestWord(string) {
   
//     const array = string.split(' ')
    
//     let result = array[0];
   
//     for (const word of array) {
        
//         if (word.length > result.length) {
            
//             result = word;
//         }

//     }
//     return result;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));
// console.log(findLongestWord('Hello my friends how are you'));

const atTheOldToad = {
    potions: [
        { name: 'Зелье скорости', price: 460 },
        { name: 'Дыхание дракона', price: 780 },
        { name: 'Каменная кожа', price: 520 },
    ],
    // Пиши код ниже этой строки
    getPotions() {
       
        return this.potions;
    },
    addPotion(potionName) {
        if (this.potions.includes(potionName)) {
            return `Зелье ${potionName} уже есть в инвентаре!`;
        }

        this.potions.push(potionName);
    },
    removePotion(potionName) {
        const potionIndex = this.potions.indexOf(potionName);

        if (potionIndex === -1) {
            return `Зелья ${potionName} нет в инвентаре!`;
        }

        this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
        const potionIndex = this.potions.indexOf(oldName);

        if (potionIndex === -1) {
            return `Зелья ${oldName} нет в инвентаре!`;
        }
    }
};


