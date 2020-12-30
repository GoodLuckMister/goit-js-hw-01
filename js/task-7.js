// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
//     console.log(array[0]);
//     console.log(array[array.length -1])
//     const newArray = array.splice(1,array.length -2);

//     return array;
//     // Пиши код выше этой строки
// }
  
// console.log(getExtremeElements([1, 2, 3, 4, 5]))

// Объявлена функция getExtremeElements(array).
// Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5].
// Вызов getExtremeElements(['Земля', 'Марс', 'Венера']) возвращает ['Земля', 'Венера'].
// Вызов getExtremeElements(['яблоко', 'персик', 'груша', 'банан']) возвращает ['яблоко', 'банан'].
// const scores = [1, 2, 3, 4, 5];
// const hightScores = scores.splice(1, scores.length -2);
// console.log(hightScores);
// console.log(scores);




// function makeArray(firstArray, secondArray, maxLength) {

//     let newArray;
    
// if(firstArray.concat(secondArray).length > maxLength){
//     newArray = firstArray.concat(secondArray).slice(0,maxLength)
    
// } else {
//     newArray = firstArray.concat(secondArray);
// }

//     return newArray;
// }
// console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));


function calculateTotal(number) {
  // Пиши код ниже этой строки
    let newNumber = 0;
    for (let i = 0; i <= number; i += 1){
        newNumber = i * 10 / 2;
        
      
        
       
    } return newNumber;
    }  
  


//   // Пиши код выше этой строки
// }
    // console.log(calculateTotal(3));
    console.log(calculateTotal(7));
    // console.log(calculateTotal(18));
    // console.log(calculateTotal(24));
    // console.log(calculateTotal());
// calculateTotal(1) возвращает 1.
// Вызов функции calculateTotal(3) возвращает 6.
// Вызов функции calculateTotal(7) возвращает 28.
// Вызов функции calculateTotal(18) возвращает 171.
// Вызов функции calculateTotal(24) возвращает 300.
// Вызов функции calculateTotal() со случайным числом возвращает правильное значение.
// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);