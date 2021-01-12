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


const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];



function composeMessage(position) {
  function neaMessage() {
    for (let i = 0; i < orders.length; i += 1) { 
      position = i + 1;
      return `Готовим ${this[i].dish} для ${this[i].email}. Ваш заказ ${position}-й в очереди.`;

    }
  }

  
}

 


//   for()
   
  
//     `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;

    
//     console.log(message);
  
      


// }

 composeMessage.call(orders);

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


 







