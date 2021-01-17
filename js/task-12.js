// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//     orderedItems.forEach(function (element, index, array) {
       
//         totalPrice += element;
//   })

// //   for (let i = 0; i < orderedItems.length; i += 1) {
// //     totalPrice += orderedItems[i];
// //   }

  
//   return totalPrice;
// }


// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
 
// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки

//     const newNumbers = [];
   
//     numbers.forEach((number, index ,array) => {
//         newNumbers.push(number);
        
//         if (number % 2 === 0) {
//             console.log(number);
//             newNumbers.splice(index, 1, number + value);
//         }
       


//     });
//     return newNumbers;
    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] % 2 === 0) {
    //     numbers[i] = numbers[i] + value;
    //   }
    // } return numbers;
    // Пиши код выше этой строки
// }
  
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10) );
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
 
//  const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(object => object.genres);
// const uniqueGenres = allGenres.filter(
//     (element, index, array) => array.indexOf(element) === index
// );
  
// console.log(allGenres);
// console.log(uniqueGenres);


// const dataBaseFriends = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//         age: 37
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//         age: 34
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//         age: 24
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//         age: 21
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//         age: 27
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//         age: 38
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//         age: 39
//     }
// ];
// Задание
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

// Тесты
// Объявлена переменная getUsersWithFriend.
// Переменной getUsersWithFriend присвоена стрелочная функция с параметрами (users, friendName).
// Для перебора параметра users используется метод filter().
// Если значение параметра friendName это строка 'Briana Decker', функция возвращает массив объектов пользователей с именами Sharlene Bush и Sheree Anthony.
// Если значение параметра friendName это строка 'Goldie Gentry', функция возвращает массив объектов пользователей с именами Elma Head и Sheree Anthony.
// Если значение параметра friendName это строка 'Adrian Cross', функция возвращает пустой массив.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
// Редактор JavaScript:
// const getUsersWithFriend = (users, friendName) => {
//     let getNameFriends = [];
//     users.filter(object => {
//         let property = object.friends.includes(friendName)
      
//         if (property === true) {
           
//             getNameFriends.push(object)
            
            
//         }
       
        

//     }) 
//     return getNameFriends;
// };
// console.log(getUsersWithFriend(dataBaseFriends, 'Briana Decker'));
// console.log(getUsersWithFriend(dataBaseFriends, 'Goldie Gentry'));
// console.log(getUsersWithFriend(dataBaseFriends,'Adrian Cross'));

// Объявлена переменная getFriends.
// Переменной getFriends присвоена стрелочная функция с параметром (users).
// Вызов функции с указанным массивом пользователей возвращает массив ['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman'].
 
// const getFriends = (users) => {
   
   
//      const myFriends = users.flatMap(object => object.friends);

//     const goMyFriends = myFriends.filter(
//         (name, index, array) => array.indexOf(name) === index);
//     return goMyFriends;

// };

// const getInactiveUsers = (users) => {
//     return users.filter(
//         object =>  object.isActive === false)
   
// };


// console.log(getInactiveUsers(dataBaseFriends));

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// console.log(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.log(sortedByAscendingRating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByDescentingRating);


// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// // const names = [...books].sort((a, b) => a.author.localeCompare(b.author))
// //     .filter((object) => object.rating > MIN_BOOK_RATING);
// const names = books.filter(object => object.rating > MIN_BOOK_RATING)
//     .map((object => object.author))
//     .sort((a, b) => a.localeCompare(b))
// console.log(names);