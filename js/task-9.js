// function countProps(object) {
//     let propCount = 0;
    
//     object = Object.keys(object);
   

//     for (const keys of object) {
        
//         if (object.hasOwnProperty(keys)) {
           
            
          
            

//         }
//           propCount = object.length;

//     }
//   return propCount;
// }

 
// console.log(countProps({})); 
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));




// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);


// for(const key of keys){
    
//     if (apartment.hasOwnProperty(key)) {
       
//         values.push(apartment[key])
      
//     }
// }


// function countTotalSalary(salaries) {
//     let totalSalary = 0;
  
//     for (const keys of Object.values(salaries)) {

//         totalSalary += keys;

  
  
//     }
//     return totalSalary;
// }

// console.log(countTotalSalary({})); 
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// // console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
 
//     let product;
  
//   for(const object of products){
  
//     if(object.name === productName){
//         product = object.price;
//         break
//     } else {
//         product = null;
//       }
    

  
//     } return product;
// }
// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('Захват'));
// console.log(getProductPrice('Сканер') );
// console.log(getProductPrice('Дроид') );
// console.log(getProductPrice('Двигатель') );
 

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
  
//     let dataBase = [];

//     for (const object of products) {
     
//         if (propName === 'name') {
//             dataBase.push(object.name);
//         } else if (propName === 'quantity') {
//             dataBase.push(object.quantity)
//         } else if (propName === 'price') {
//             dataBase.push(object.price)
//         }

//     }
//     return dataBase;

// }


// // console.log(getAllPropValues(propName));
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));
 
 
 
//  function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
 
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' })  );
// console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }) );
// console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }) );
// console.log(makeTask({ text: 'Купить хлеб' }) );

 
// function addOverNum(a,...args) {
//   let total = 0;

//   for (const arg of args) {
    
//       if (a < arg) {
//           total += arg;
//       }
//   }

//   return total;
 
// }
 
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));


// function findMatches(firstArg,...args) {
//   const matches = []; // Не изменяй эту строку

//     for (const arg of args) {
        
//         for (const first of firstArg) {
            
//             if (arg === first) {
//                 matches.push(arg);
                
//             }
//         }
//     }
  
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
      
      
//       const position = this.books.indexOf(oldName);
//       return this.books.splice(position, 1,newName);
      
      
      
//   },
// };
// console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));
// console.log(bookShelf.updateBook('Последнее королевство', 'Дюна'));
//  значение свойства books это массив['Последнее королевство', 'Хроники подземелий', 'Страж снов'].

//   значение свойства books это массив ['Дюна', 'Мгла', 'Страж снов']
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
//     removePotion(potionName) {
//         for (const key of Object.keys(this.potions)){
//             const potions = this.potions[key];
            
//             if (potionName === potions.name) {
               
//                 console.log(key);
//                 return this.potions.splice(key, 1);
//             }
//             // if (potionIndex === potionName) {
//             //  return `Зелья ${potionName} нет в инвентаре!`;   
//             // }return this.potions.splice(potionIndex, 1);
//         }
    

     
//   },
    updatePotionName(oldName, newName) {
      for (const key of Object.keys(this.potions)) {
         
           const potions = this.potions[key];
       console.log(potions);
           if (oldName === potions.name) {
               return this.potions[key].name = newName;
       }
       
       }
    
  },
  // Пиши код выше этой строки
};


  console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion('Невидимка'));
// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(updatePotionName(oldName, newName));

//   console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));

console.log(atTheOldToad.getPotions());
 
 