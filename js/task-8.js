// function slugify(title) {
//   // Пиши код ниже этой строки
//     return title.split(' ').join('-').toLowerCase();  
  
  
 
 
//   // Пиши код выше этой строки
// }
// console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'))

// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const words = string.split(' ');
//   let word;
//   let bigWord = 0;

//   for (let i = 0; i < words.length - 1; i += 1){
//     bigWord = words[1].length;

//     if (words[i].length > bigWord) { 
//       word = words[i];
//     }
   
//     console.log(word);
//   } return word;
    
// }
  'use strict';

// const findLongestWord = function(string) {
//   let arrStr = string.split(' ');
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];
//       console.log(longestWord);
//       return longestWord;
//     }

//   }
// };

  

//   // Пиши код выше этой строки

// findLongestWord('The quick brown fox jumped over the lazy dog')
// findLongestWord('Google do a roll')
// findLongestWord('May the force be with you')
// findLongestWord()

// Вызов функции findLongestWord('The quick brown fox  jumped over the lazy dog') возвращает jumped.
// Вызов функции findLongestWord('Google do a roll') возвращает Google.
// Вызов функции findLongestWord('May the force be with you') возвращает force.
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.




// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   for(let i = min; i <= max; i += 1){
//     console.log(i);
//     numbers.push(i)
//   }

//   // Пиши код выше этой строки
//   console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);

// Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3].
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17].


// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   let newNumbers = [ ];
//   for (const number of numbers) {
//     if (number > value) {
//     newNumbers.push(number)

//     }
//     console.log(newNumbers);
    
// }

//   return newNumbers;
//   // Пиши код выше этой строки
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


// Объявлена функция filterArray(numbers, value).
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив.
// В цикле for использовался метод push.



// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
 
 
//   let getElements = [];
//   for (let number of array1) {
    
//     if (array2.includes(number)) {
      
      
//       getElements.push(number)
//     } 
    
    
    

//   } return getElements;


  
//   // Пиши код выше этой строки
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
// Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив.
// В цикле for использовались методы includes и push.


function includes(array, value) {
  // Пиши код ниже этой строки
  let message;
  for (let number of array) {
    console.log(number);
    if (value === number) {

      message = true;
      break
        
    } 
      
      
      
    message = false;
  

    
    // Пиши код выше этой строки
  } 
console.log(message);
  return message;
}

includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер');
// includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран');
// includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива');
// includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви')

// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true.
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false.
// Вызов includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер') возвращает true.
// Вызов includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран') возвращает false.
// Вызов includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива') возвращает true.
// Вызов includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви') возвращает false.
// Вызов includes() для случайного массива со случайным value  возвращает верный boolean.