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

const findLongestWord = function(string) {
  let arrStr = string.split(' ');
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < arrStr.length; i += 1) {
    wordLength = arrStr[1].length;

    if (arrStr[i].length > wordLength) {
      longestWord = arrStr[i];
      console.log(longestWord);
      return longestWord;
    }

  }
};

  

  // Пиши код выше этой строки

findLongestWord('The quick brown fox jumped over the lazy dog')
findLongestWord('Google do a roll')
findLongestWord('May the force be with you')
// findLongestWord()

// Вызов функции findLongestWord('The quick brown fox  jumped over the lazy dog') возвращает jumped.
// Вызов функции findLongestWord('Google do a roll') возвращает Google.
// Вызов функции findLongestWord('May the force be with you') возвращает force.
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.