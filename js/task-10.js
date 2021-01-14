// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName,onSuccess,onError) {
//     for (let pizza of this.pizzas) {
     
//       let isPizzaName = pizza === pizzaName;
    
//       if (isPizzaName) {
//         return onSuccess(pizzaName);
//       } 
    
//     }
//     return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`)
//   },
// };
// Пиши код выше этой строки

// Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);



// function position() {
//   for(let i = 0; i < orders.length; i += 1){
//    console.log(i);
//   }
// }



 



//  return `Готовим ${this[i].dish} для ${this[i].email}. Ваш заказ ${position}-й в очереди.`;
  
 

// }
  




// ;
// const messages = orders.map(() => composeMessage.call(orders));
// console.log(messages);



//  let message;
//   for (let i = 0; i < this.length; i += 1){
//     position = i + 1;
//    message = `Готовим ${this[i].dish} для ${this[i].email}. Ваш заказ ${position}-й в очереди.`;
//     console.log(message);

//   } 


// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
  
// ];

// // newApp()

// function composeMessage(position) {
 
//    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
//  }

  
// //   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// // }


//  composeMessage.call(orders);


//   const messages = orders.map(() => composeMessage.call(orders));
// console.log(messages);




//     for (let i = 0; i < orders.length; i += 1) { 
//       position = i + 1;
//       return `Готовим ${this[i].dish} для ${this[i].email}. Ваш заказ ${position}-й в очереди.`;

//     }
  

  
// }

 
  
//     `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;

    
//     console.log(message);
  
      


// }
// console.log(composeMessage.call(orders));
// const messages = orders.map(composeMessage());
// console.log(messages);
 

// let messages = [];
// const sweetArray = [2, 3, 4, 5, 35]
// const sweeterArray = sweetArray.map(sweetItem => {
//     return sweetItem * 2
// })

// console.log(sweeterArray)
// create a function to use
// const makeSweeter = sweetItem => sweetItem * 2;

// // we have an array
// const sweetArray = [2, 3, 4, 5, 35];

// // call the function we made. more readable
// const sweeterArray = sweetArray.map(makeSweeter);

// console.log(sweeterArray);


// const createCounter = function() {
//   /*
//    * Локальная переменная privateValue доступна только в замыкании.
//    * Получить к ней доступ во внешнем коде невозможно.
//    */
//   let privateValue = 0;

//   const increment = function() {
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   return {
//     increment,
//   };
// };

// const counterA = createCounter();
// counterA.increment(); // 1
// counterA.increment(); // 2

// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3


// const makeShef = function(name) {
//   /*
//    * Параметр name это локальная переменная для функции makeShef.
//    * Это значит что она будет доступна функции makeDish через замыкание.
//    */
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const mango = makeShef('Mango');
// mango('apple pie'); // Mango is cooking apple pie
// mango('beef stew'); // Mango is cooking beef stew

// const poly = makeShef('Poly');
// poly('pancakes'); // Poly is cooking pancakes
// poly('eggs and bacon'); // Poly is cooking eggs and bacon


// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки

// function composeMessage(position) {

//  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;

// }



  
//  const messages = orders.map((currenValue, index, arr)  => {return composeMessage.call(orders[index],index + 1)  });

//   console.log(messages);

const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    
    this.mailingList.push(email);
    
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

console.log(logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service)));
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/

console.log(logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service)));
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']






