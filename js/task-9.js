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
 
 
 
 function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
 
}
console.log(makeTask({}));
console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' })  );
console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }) );
console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }) );
console.log(makeTask({ text: 'Купить хлеб' }) );

 
 

 
 