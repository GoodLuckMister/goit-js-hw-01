// function Storage(items){
// this.items = items;
// }

// // console.log(Storage);
// Storage.prototype.getItems = function () {
//     return this.items;
// }


// Storage.prototype.addItem = function(newItem){
//  this.items.push(newItem);
// }
// Storage.prototype.removeItem = function(item){
//     const indexElement = this.items.indexOf(item);
//     console.log(indexElement);
//     this.items.splice(indexElement, 1);
// }
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');

// console.log(Storage.prototype.hasOwnProperty('getItems'));
// console.log(Storage.prototype.isPrototypeOf(storage));
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// function StringBuilder(baseValue){
// this.value = `${baseValue}`;
// }

// StringBuilder.prototype.getValue = function(){
// return this.value;
// }

// StringBuilder.prototype.padEnd = function(str){
// this.value  = `${this.value}${str}`;
// }
// StringBuilder.prototype.padStart = function(str){
// this.value  = `${str}${this.value}`;
// }
// StringBuilder.prototype.padBoth = function(str){
// this.value  = `${str}${this.value}${str}`;
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='
// function Storage(items) {
//   this.items = items;
// }

// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   const itemIndex = this.items.indexOf(item);
//   this.items.splice(itemIndex, 1);
// };

// class Storage{

//     #items

//     constructor(items) {
//          this.#items = items;
//     }

//     getItems() {
//          return this.#items;
//     }

//     addItem(newItem) {
//         this.#items.push(newItem);
//     }

//     removeItem(item) {
//        const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1); 
//     }
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value += str;
// };

// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// class StringBuilder{
//     #value;
//     constructor(baseValue) {
//           this.#value = baseValue;
//     }
    
//     getValue() {
//         return this.#value;
//     }

//     padEnd(str) {
//         this.#value += str;
//     }

//     padStart(str) {
//         this.#value = str + this.#value;
//     }

//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки
static checkPrice(price){
if(price > Car.#MAX_PRICE){return 'Внимание! Цена превышает допустимую.';}
  else{
  return 'Всё хорошо, цена в порядке.';
  }
}
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
